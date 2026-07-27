import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const ENABLED_TASK_TYPES = new Set(["thermal-ghost-scan", "ootd-style-card"]);
const OOTD_OCCASIONS = new Set(["daily", "work", "date", "sport", "formal"]);
const OOTD_CARTOON_STYLES = new Set(["clean", "handdrawn", "comic"]);

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return jsonResponse({ ok: true }, 200);
  }
  if (request.method !== "POST") {
    return jsonResponse({ ok: false, error: "只支持 POST 请求。" }, 405);
  }

  try {
    const authHeader = request.headers.get("Authorization") || "";
    const token = authHeader.replace(/^Bearer\s+/i, "").trim();
    if (!token) {
      return jsonResponse({ ok: false, error: "请先登录账号后再使用 AI 插槽。" }, 200);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
    if (!supabaseUrl || !supabaseAnonKey) {
      return jsonResponse({ ok: false, error: "Supabase 环境变量尚未配置。" }, 500);
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userError } = await supabase.auth.getUser(token);
    if (userError || !userData?.user) {
      return jsonResponse({ ok: false, error: "请先登录账号后再使用 AI 插槽。" }, 200);
    }

    const body = await request.json().catch(() => null);
    const taskType = String(body?.taskType || "");
    const payload = body?.payload && typeof body.payload === "object" ? body.payload : {};

    if (!ENABLED_TASK_TYPES.has(taskType)) {
      return jsonResponse({ ok: false, error: "这个 AI 插槽暂未启用" }, 200);
    }

    const openAIKey = Deno.env.get("OPENAI_API_KEY") || "";
    if (!openAIKey) {
      return jsonResponse({
        ok: false,
        error: "AI key 尚未配置，请先在 Supabase Edge Function Secrets 中设置 OPENAI_API_KEY。（运行检查：ootd-key-probe-v11）",
      }, 200);
    }

    if (taskType === "thermal-ghost-scan") {
      const normalized = normalizeThermalGhostPayload(payload);
      const result = await generateThermalGhostAnalysis(openAIKey, normalized.value);
      return jsonResponse({
        ok: true,
        taskType,
        result,
      }, 200);
    }

    if (taskType === "ootd-style-card") {
      const normalized = normalizeOotdPayload(payload);
      if (!normalized.ok) {
        return jsonResponse({ ok: false, error: normalized.error }, 200);
      }
      const result = await generateOotdStyleCard(openAIKey, normalized.value);
      return jsonResponse({ ok: true, taskType, result }, 200);
    }

    return jsonResponse({ ok: false, error: "这个 AI 插槽暂未启用" }, 200);
  } catch (error) {
    const details = describeAiError(error);
    console.error("ai-plugin-proxy error", details.logMessage);
    // Keep expected provider failures as a normal JSON response so the client can
    // show a useful next step instead of Supabase replacing it with a generic 500.
    return jsonResponse({ ok: false, error: details.userMessage, code: details.code }, 200);
  }
});

class AiProviderError extends Error {
  code: string;
  status: number;
  requestId: string;
  providerMessage: string;

  constructor(stage: string, status: number, source: Record<string, unknown> | null, requestId = "") {
    const providerError = source?.error && typeof source.error === "object"
      ? source.error as Record<string, unknown>
      : {};
    const code = String(providerError.code || providerError.type || `http-${status}`);
    const providerMessage = String(providerError.message || "");
    super(`${stage}:${code}`);
    this.name = "AiProviderError";
    this.code = code;
    this.status = status;
    this.requestId = requestId;
    this.providerMessage = providerMessage;
  }
}

function describeAiError(error: unknown) {
  if (error instanceof AiProviderError) {
    const code = error.code.toLowerCase();
    const providerMessage = error.providerMessage.toLowerCase();
    const isVerificationIssue = code.includes("organization")
      || code.includes("verification")
      || providerMessage.includes("organization verification");
    const isQuotaIssue = code.includes("insufficient_quota")
      || code.includes("billing")
      || providerMessage.includes("insufficient quota")
      || providerMessage.includes("billing");
    const isRateLimit = error.status === 429 || code.includes("rate_limit");
    const isAuthIssue = error.status === 401 || code.includes("invalid_api_key") || code.includes("authentication");
    const isModelIssue = error.status === 404 || code.includes("model_not_found");
    const userMessage = isVerificationIssue
      ? "OpenAI 图片功能尚未开通，请在 OpenAI Platform 完成组织验证后再试。"
      : isQuotaIssue
        ? "OpenAI API 额度或账单状态不可用，请检查 OpenAI Platform 后再试。"
        : isRateLimit
          ? "AI 服务当前请求过多，请稍等片刻再试。"
          : isAuthIssue
            ? "AI key 无效或已失效，请检查 Supabase 中的 OPENAI_API_KEY。"
            : isModelIssue
              ? "当前 AI 模型不可用，请检查 OpenAI 项目的模型访问权限。"
              : "AI 穿搭评分暂时无法完成，请稍后再试。";
    return {
      code: error.code,
      userMessage,
      logMessage: `${error.message} status=${error.status} requestId=${error.requestId || "n/a"} provider=${error.providerMessage || "n/a"}`,
    };
  }
  const message = error instanceof Error ? error.message : String(error);
  return {
    code: "unexpected_error",
    userMessage: "AI 生成失败，请稍后再试。",
    logMessage: message,
  };
}

function normalizeThermalGhostPayload(payload: Record<string, unknown>) {
  const anomalySource = payload.anomaly && typeof payload.anomaly === "object"
    ? payload.anomaly as Record<string, unknown>
    : {};
  const anomaly = {
    x: clampNumber(Number(anomalySource.x), 0, 100, 50),
    y: clampNumber(Number(anomalySource.y), 0, 100, 45),
    intensity: clampNumber(Number(anomalySource.intensity), 0, 100, 60),
    temperatureShift: clampNumber(Number(anomalySource.temperatureShift), 0, 12, 2.4),
    shape: String(anomalySource.shape || "异常热斑").trim().slice(0, 30),
    motion: String(anomalySource.motion || "缓慢漂移").trim().slice(0, 30),
  };
  return {
    ok: true as const,
    value: {
      anomaly,
      signal: clampNumber(Number(payload.signal), 0, 100, anomaly.intensity),
      scanMode: String(payload.scanMode || "thermal-camera-simulation").slice(0, 60),
      hasCamera: Boolean(payload.hasCamera),
    },
  };
}

function normalizeOotdPayload(payload: Record<string, unknown>) {
  const imageDataUrl = String(payload.imageDataUrl || "");
  const match = imageDataUrl.match(/^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/=]+)$/i);
  if (!match) return { ok: false as const, error: "请上传 JPG、PNG 或 WebP 穿搭照片。" };
  if (match[2].length > 6_500_000) return { ok: false as const, error: "照片太大，请压缩后再试。" };
  const occasion = OOTD_OCCASIONS.has(String(payload.occasion || "")) ? String(payload.occasion) : "daily";
  const cartoonStyle = OOTD_CARTOON_STYLES.has(String(payload.cartoonStyle || "")) ? String(payload.cartoonStyle) : "clean";
  return {
    ok: true as const,
    value: {
      imageDataUrl,
      mimeType: match[1].toLowerCase(),
      imageBase64: match[2],
      occasion,
      cartoonStyle,
      language: String(payload.language || "zh-CN") === "en" ? "en" : "zh-CN",
    },
  };
}

async function generateOotdStyleCard(
  openAIKey: string,
  payload: {
    imageDataUrl: string;
    mimeType: string;
    imageBase64: string;
    occasion: string;
    cartoonStyle: string;
    language: string;
  },
) {
  const occasionLabels: Record<string, string> = {
    daily: "日常出门",
    work: "上班或上学",
    date: "约会或聚会",
    sport: "运动或户外",
    formal: "正式场合",
  };
  const systemPrompt = [
    "你是一个友善、克制的穿搭分析助手。",
    "只评价服装本身：配色、单品比例与视觉平衡、层次、完整度、配饰和场景适配。",
    "不要评价或推断身材、体重、年龄、种族、健康、性别身份、吸引力、财富或职业。",
    "如果照片不够清楚，只评价能可靠观察到的部分，并在建议中说明如何改善拍摄。",
    "分数用于轻松的个人穿搭记录，不代表客观价值。",
    "严格返回 JSON，不要 Markdown。",
    '格式：{"overallScore":0,"dimensions":{"color":0,"balance":0,"layering":0,"occasion":0},"vibe":"","summary":"","strengths":["","",""],"suggestions":["",""]}',
    "所有分数必须为 0 到 100 的整数，亮点 3 条，建议 2 条。",
  ].join("\n");
  const analysisResponse = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${openAIKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: [
            { type: "text", text: `请分析这套穿搭。使用场景：${occasionLabels[payload.occasion] || occasionLabels.daily}。输出语言：${payload.language}。` },
            { type: "image_url", image_url: { url: payload.imageDataUrl, detail: "high" } },
          ],
        },
      ],
      temperature: 0.45,
    }),
  });
  const analysisData = await analysisResponse.json().catch(() => null);
  if (!analysisResponse.ok) {
    throw new AiProviderError(
      "ootd-analysis",
      analysisResponse.status,
      analysisData,
      analysisResponse.headers.get("x-request-id") || "",
    );
  }
  const analysisContent = String(analysisData?.choices?.[0]?.message?.content || "");
  let parsedAnalysis: Record<string, unknown>;
  try {
    parsedAnalysis = JSON.parse(analysisContent);
  } catch {
    throw new Error("OOTD 分析结果格式无效");
  }
  const analysis = normalizeOotdAnalysis(parsedAnalysis);

  let cartoon: { imageBase64: string; mimeType: string; model: string } | null = null;
  try {
    cartoon = await generateOotdCartoon(openAIKey, payload);
  } catch (error) {
    console.error("OpenAI OOTD cartoon failed", error instanceof Error ? error.message : String(error));
  }
  return {
    analysis,
    cartoon,
    generatedAt: new Date().toISOString(),
  };
}

function normalizeOotdAnalysis(source: Record<string, unknown>) {
  const dimensionsSource = source?.dimensions && typeof source.dimensions === "object"
    ? source.dimensions as Record<string, unknown>
    : {};
  const list = (value: unknown, limit: number) => Array.isArray(value)
    ? value.map((item) => String(item || "").trim()).filter(Boolean).slice(0, limit)
    : [];
  return {
    overallScore: Math.round(clampNumber(Number(source?.overallScore), 0, 100, 75)),
    dimensions: {
      color: Math.round(clampNumber(Number(dimensionsSource.color), 0, 100, 75)),
      balance: Math.round(clampNumber(Number(dimensionsSource.balance), 0, 100, 75)),
      layering: Math.round(clampNumber(Number(dimensionsSource.layering), 0, 100, 75)),
      occasion: Math.round(clampNumber(Number(dimensionsSource.occasion), 0, 100, 75)),
    },
    vibe: String(source?.vibe || "今日风格").trim().slice(0, 40),
    summary: String(source?.summary || "整体穿搭有清晰的个人表达。").trim().slice(0, 220),
    strengths: list(source?.strengths, 3),
    suggestions: list(source?.suggestions, 2),
  };
}

async function generateOotdCartoon(
  openAIKey: string,
  payload: { mimeType: string; imageBase64: string; occasion: string; cartoonStyle: string },
) {
  const stylePrompts: Record<string, string> = {
    clean: "clean contemporary slice-of-life cartoon, polished line art, soft natural colors, simple bright background",
    handdrawn: "warm colored-pencil hand drawing on lightly textured paper, gentle imperfect strokes, cozy visual diary mood",
    comic: "observational everyday comic illustration, expressive natural pose, crisp ink lines, cinematic but believable setting",
  };
  const bytes = Uint8Array.from(atob(payload.imageBase64), (character) => character.charCodeAt(0));
  const form = new FormData();
  form.append("model", Deno.env.get("OPENAI_IMAGE_MODEL") || "gpt-image-1");
  form.append("image", new Blob([bytes], { type: payload.mimeType }), `ootd.${payload.mimeType.split("/")[1] || "jpg"}`);
  form.append("prompt", [
    `Transform the person in this reference photo into a full-body cartoon character in this visual direction: ${stylePrompts[payload.cartoonStyle] || stylePrompts.clean}.`,
    "Preserve the exact outfit design, garment colors, layering, shoes, bag, jewelry, glasses, hairstyle, skin tone, and visible accessories from the reference.",
    "Keep the person's recognizable identity and natural body proportions. Do not beautify, slim, sexualize, age-shift, or change facial features.",
    "Use a relaxed natural pose and a clean complementary background suitable for an OOTD card.",
    "No score, no text, no logo, no watermark, no border, and no extra people.",
  ].join("\n"));
  form.append("size", "1024x1536");
  form.append("quality", "medium");
  form.append("output_format", "webp");
  form.append("output_compression", "72");
  const response = await fetch("https://api.openai.com/v1/images/edits", {
    method: "POST",
    headers: { "Authorization": `Bearer ${openAIKey}` },
    body: form,
  });
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    throw new AiProviderError(
      "ootd-cartoon",
      response.status,
      data,
      response.headers.get("x-request-id") || "",
    );
  }
  const imageBase64 = String(data?.data?.[0]?.b64_json || "");
  if (!imageBase64) throw new Error("image-edit-empty");
  return {
    imageBase64,
    mimeType: "image/webp",
    model: String(data?.model || Deno.env.get("OPENAI_IMAGE_MODEL") || "gpt-image-1"),
  };
}

async function generateThermalGhostAnalysis(
  openAIKey: string,
  payload: {
    anomaly: { x: number; y: number; intensity: number; temperatureShift: number; shape: string; motion: string };
    signal: number;
    scanMode: string;
    hasCamera: boolean;
  },
) {
  const systemPrompt = [
    "你是一个游戏内的热感应灵体扫描分析助手。",
    "这不是现实医学、安防或科学测温，只为游戏体验生成角色记录。",
    "请根据热感异常数据生成一个可爱的幽灵/灵体记录。",
    "请严格返回 JSON，不要返回 Markdown。",
    '返回 JSON 格式必须是：{"name":"","summary":"","evidence":"","keywords":[]}',
    "name 是短名称，summary 是一句识别结果，evidence 是可写入角色卡的观察记录，keywords 为 3 到 4 个短标签。",
  ].join("\n");

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${openAIKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: JSON.stringify({ ...payload, language: "zh-CN" }) },
      ],
      temperature: 0.65,
    }),
  });

  if (!response.ok) {
    console.error("OpenAI thermal ghost request failed", response.status);
    throw new Error("AI 识别失败，请稍后再试。");
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content || "";
  return normalizeThermalGhostResult(JSON.parse(content), payload);
}

function normalizeThermalGhostResult(result: Record<string, unknown>, payload: {
  anomaly: { intensity: number; temperatureShift: number; shape: string; motion: string };
}) {
  const keywords = Array.isArray(result?.keywords)
    ? result.keywords.map((keyword) => String(keyword || "").trim()).filter(Boolean).slice(0, 4)
    : [];
  const fallbackSummary = `${payload.anomaly.shape}出现 ${payload.anomaly.temperatureShift}°C 温差，强度 ${Math.round(payload.anomaly.intensity)}%。`;
  return {
    name: String(result?.name || "热感灵体").trim().slice(0, 24) || "热感灵体",
    summary: String(result?.summary || fallbackSummary).trim().slice(0, 120) || fallbackSummary,
    evidence: String(result?.evidence || `热感模式记录到${payload.anomaly.shape}，运动状态：${payload.anomaly.motion}。`).trim().slice(0, 160),
    keywords: keywords.length ? keywords : ["热感应", "异常热斑", payload.anomaly.shape].slice(0, 4),
  };
}

function clampNumber(value: number, min: number, max: number, fallback: number) {
  if (!Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, value));
}


function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

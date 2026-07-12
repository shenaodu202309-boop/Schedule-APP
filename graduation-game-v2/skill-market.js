const SKILL_MARKET_STORAGE_KEY = "life-skill-market-v1";
const LIFE_COMPANY_STORAGE_KEY = "life-game-company-v1";
const SKILL_MARKET_ENABLED_KEY = "skillMarketEnabled";
const SKILL_MARKET_INITIAL_CASH = 12000;
const SKILL_MARKET_HISTORY_LIMIT = 34;
const SKILL_MARKET_DAILY_BUY_LIMIT = 3;
const SKILL_MARKET_PRICING_MODEL_VERSION = 3;
const SKILL_MARKET_AUTO_TICK_MS = 4200;
const SKILL_MARKET_OPENING_TICKS = 3;

const riskProfiles = {
  low: { label: "LOW", taskCount: 1, pressure: 10, volatility: 0.006, sessionVolatility: 0.014, taskSignal: 0.018, watchLimitDown: -0.055, watchLimitUp: 0.06, heldLimitDown: -0.075, heldLimitUp: 0.085 },
  medium: { label: "MED", taskCount: 2, pressure: 18, volatility: 0.01, sessionVolatility: 0.025, taskSignal: 0.028, watchLimitDown: -0.085, watchLimitUp: 0.09, heldLimitDown: -0.12, heldLimitUp: 0.13 },
  high: { label: "HIGH", taskCount: 3, pressure: 30, volatility: 0.015, sessionVolatility: 0.036, taskSignal: 0.038, watchLimitDown: -0.11, watchLimitUp: 0.12, heldLimitDown: -0.17, heldLimitUp: 0.18 },
};

const monetizationLabels = {
  "career-income": "职业收入型",
  "freelance-income": "接单变现型",
  opportunity: "机会增益型",
  "life-support": "生活维护型",
  "health-protection": "健康保护型",
  "emotion-stability": "情绪稳定型",
};

const monetizationMarketProfiles = {
  "career-income": { demandWeight: 0.028, taskSensitivity: 1.1, executionValue: 0.13, growthBeta: 0.016, defensiveBeta: -0.01 },
  "freelance-income": { demandWeight: 0.032, taskSensitivity: 1, executionValue: 0.11, growthBeta: 0.012, defensiveBeta: -0.004 },
  opportunity: { demandWeight: 0.03, taskSensitivity: 0.92, executionValue: 0.095, growthBeta: 0.014, defensiveBeta: 0 },
  "life-support": { demandWeight: 0.022, taskSensitivity: 0.72, executionValue: 0.07, growthBeta: -0.002, defensiveBeta: 0.014 },
  "health-protection": { demandWeight: 0.026, taskSensitivity: 0.78, executionValue: 0.085, growthBeta: -0.004, defensiveBeta: 0.022 },
  "emotion-stability": { demandWeight: 0.024, taskSensitivity: 0.7, executionValue: 0.075, growthBeta: -0.006, defensiveBeta: 0.024 },
};

const skillMarketStocks = [
  {
    symbol: "ANIM",
    name: "动画股",
    group: "主职业技能股",
    sector: "职业",
    riskLevel: "high",
    marketCashValue: 92,
    monetizationType: "career-income",
    taskTemplates: ["动画主线推进 90 分钟", "完成一段角色动作检查", "整理今天的动画问题清单"],
  },
  {
    symbol: "DESIGN",
    name: "设计股",
    group: "主职业技能股",
    sector: "职业",
    riskLevel: "high",
    marketCashValue: 90,
    monetizationType: "career-income",
    taskTemplates: ["推进一个设计方案", "整理一组设计参考", "复盘一个版式或交互问题"],
  },
  {
    symbol: "DRAW",
    name: "绘画股",
    group: "主职业技能股",
    sector: "职业",
    riskLevel: "high",
    marketCashValue: 86,
    monetizationType: "freelance-income",
    taskTemplates: ["完成一张结构或色彩练习", "临摹并复盘一处画面处理", "输出一张可归档作品小稿"],
  },
  {
    symbol: "STORY",
    name: "分镜股",
    group: "主职业技能股",
    sector: "职业",
    riskLevel: "medium",
    marketCashValue: 78,
    monetizationType: "opportunity",
    taskTemplates: ["画 6 格分镜草稿", "检查一个镜头的节奏", "写下今天的画面叙事问题"],
  },
  {
    symbol: "BLEND",
    name: "3D 动画股",
    group: "主职业技能股",
    sector: "职业",
    riskLevel: "high",
    marketCashValue: 84,
    monetizationType: "career-income",
    taskTemplates: ["完成一个模型或材质练习", "推进 3D 场景一小块", "记录一个工具操作流程"],
  },
  {
    symbol: "PORT",
    name: "作品集股",
    group: "主职业技能股",
    sector: "职业",
    riskLevel: "high",
    marketCashValue: 96,
    monetizationType: "opportunity",
    taskTemplates: ["整理一项作品集条目", "补一段项目说明", "筛掉一个不再代表现阶段的材料"],
  },
  {
    symbol: "ENG",
    name: "英语股",
    group: "主职业技能股",
    sector: "职业",
    riskLevel: "medium",
    marketCashValue: 72,
    monetizationType: "opportunity",
    taskTemplates: ["完成 20 分钟英语输入", "输出 5 句工作相关表达", "复盘一个不会说的表达"],
  },
  {
    symbol: "JOB",
    name: "求职股",
    group: "主职业技能股",
    sector: "职业",
    riskLevel: "high",
    marketCashValue: 98,
    monetizationType: "career-income",
    taskTemplates: ["推进一个岗位材料", "优化一段简历或作品描述", "发送或准备一次求职触达"],
  },
  {
    symbol: "PM",
    name: "项目管理股",
    group: "主职业技能股",
    sector: "职业",
    riskLevel: "medium",
    marketCashValue: 76,
    monetizationType: "career-income",
    taskTemplates: ["拆解一个项目下一步", "更新优先级和截止点", "复盘一个阻塞原因"],
  },
  {
    symbol: "PRO1",
    name: "空白职业股 1",
    defaultName: "空白职业股 1",
    group: "主职业技能股",
    sector: "自定义",
    riskLevel: "medium",
    marketCashValue: 64,
    monetizationType: "opportunity",
    customSlot: true,
    taskTemplates: [],
  },
  {
    symbol: "PRO2",
    name: "空白职业股 2",
    defaultName: "空白职业股 2",
    group: "主职业技能股",
    sector: "自定义",
    riskLevel: "medium",
    marketCashValue: 58,
    monetizationType: "opportunity",
    customSlot: true,
    taskTemplates: [],
  },
  {
    symbol: "PRO3",
    name: "空白职业股 3",
    defaultName: "空白职业股 3",
    group: "主职业技能股",
    sector: "自定义",
    riskLevel: "medium",
    marketCashValue: 52,
    monetizationType: "opportunity",
    customSlot: true,
    taskTemplates: [],
  },
  {
    symbol: "BODY",
    name: "运动股",
    group: "生活 / 小技能股",
    sector: "身心",
    riskLevel: "medium",
    marketCashValue: 48,
    monetizationType: "health-protection",
    taskTemplates: ["完成一次 15 分钟活动", "拉伸或散步 10 分钟"],
  },
  {
    symbol: "SLEEP",
    name: "睡眠股",
    group: "生活 / 小技能股",
    sector: "身心",
    riskLevel: "medium",
    marketCashValue: 60,
    monetizationType: "health-protection",
    taskTemplates: ["设置今晚睡前截止线", "完成一个睡前降噪动作"],
  },
  {
    symbol: "COOK",
    name: "做饭股",
    group: "生活 / 小技能股",
    sector: "生活",
    riskLevel: "low",
    marketCashValue: 35,
    monetizationType: "life-support",
    taskTemplates: ["准备一顿稳定食物"],
  },
  {
    symbol: "CRAFT",
    name: "手工股",
    group: "生活 / 小技能股",
    sector: "生活",
    riskLevel: "medium",
    marketCashValue: 44,
    monetizationType: "freelance-income",
    taskTemplates: ["完成一小段手工作品", "整理手工材料或工具", "记录一个制作问题"],
  },
  {
    symbol: "FIN",
    name: "理财股",
    group: "生活 / 小技能股",
    sector: "生活",
    riskLevel: "medium",
    marketCashValue: 66,
    monetizationType: "life-support",
    taskTemplates: ["记录一笔重要收支", "检查一次非必要消费"],
  },
  {
    symbol: "ROOM",
    name: "整理房间股",
    group: "生活 / 小技能股",
    sector: "生活",
    riskLevel: "low",
    marketCashValue: 28,
    monetizationType: "life-support",
    taskTemplates: ["整理一个 10 分钟区域"],
  },
  {
    symbol: "SOCIAL",
    name: "社交股",
    group: "生活 / 小技能股",
    sector: "关系",
    riskLevel: "medium",
    marketCashValue: 52,
    monetizationType: "opportunity",
    taskTemplates: ["主动联系一个现实中的人", "维护一段重要关系的小动作"],
  },
  {
    symbol: "MOOD",
    name: "情绪管理股",
    group: "生活 / 小技能股",
    sector: "身心",
    riskLevel: "medium",
    marketCashValue: 46,
    monetizationType: "emotion-stability",
    taskTemplates: ["写下今天最强烈的情绪", "完成一次情绪降温动作"],
  },
  {
    symbol: "READ",
    name: "阅读股",
    group: "生活 / 小技能股",
    sector: "认知",
    riskLevel: "low",
    marketCashValue: 42,
    monetizationType: "opportunity",
    taskTemplates: ["阅读 10 分钟并摘一句有用内容"],
  },
  {
    symbol: "LIFE1",
    name: "空白生活股 1",
    defaultName: "空白生活股 1",
    group: "生活 / 小技能股",
    sector: "自定义",
    riskLevel: "low",
    marketCashValue: 34,
    monetizationType: "life-support",
    customSlot: true,
    taskTemplates: [],
  },
  {
    symbol: "LIFE2",
    name: "空白生活股 2",
    defaultName: "空白生活股 2",
    group: "生活 / 小技能股",
    sector: "自定义",
    riskLevel: "low",
    marketCashValue: 30,
    monetizationType: "life-support",
    customSlot: true,
    taskTemplates: [],
  },
  {
    symbol: "LIFE3",
    name: "空白生活股 3",
    defaultName: "空白生活股 3",
    group: "生活 / 小技能股",
    sector: "自定义",
    riskLevel: "low",
    marketCashValue: 26,
    monetizationType: "life-support",
    customSlot: true,
    taskTemplates: [],
  },
];

const skillMarketDom = {};
let skillMarketState = null;
let skillMarketSide = "buy";
let skillMarketTicker = null;

document.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector("[data-page='skill-market']")) return;
  bindSkillMarketDom();
  bindSkillMarketEvents();
  if (!isSkillMarketEnabled()) {
    showSkillMarketGate();
    return;
  }
  enterSkillMarket();
});

function bindSkillMarketDom() {
  skillMarketDom.gate = document.querySelector("#skillMarketGate");
  skillMarketDom.system = document.querySelector("#skillMarketSystem");
  skillMarketDom.status = document.querySelector("#skillMarketStatus");
  skillMarketDom.tape = document.querySelector("#skillMarketTape");
  skillMarketDom.cash = document.querySelector("#skillMarketCash");
  skillMarketDom.holdingsValue = document.querySelector("#skillMarketHoldingsValue");
  skillMarketDom.equity = document.querySelector("#skillMarketEquity");
  skillMarketDom.pnl = document.querySelector("#skillMarketPnl");
  skillMarketDom.pressureValue = document.querySelector("#skillMarketPressureValue");
  skillMarketDom.pressureMeter = document.querySelector("#skillMarketPressureMeter");
  skillMarketDom.pressureText = document.querySelector("#skillMarketPressureText");
  skillMarketDom.closeReport = document.querySelector("#skillMarketCloseReport");
  skillMarketDom.count = document.querySelector("#skillMarketCount");
  skillMarketDom.list = document.querySelector("#skillMarketList");
  skillMarketDom.leaders = document.querySelector("#skillMarketLeaders");
  skillMarketDom.selectedSymbol = document.querySelector("#skillMarketSelectedSymbol");
  skillMarketDom.selectedName = document.querySelector("#skillMarketSelectedName");
  skillMarketDom.selectedPrice = document.querySelector("#skillMarketSelectedPrice");
  skillMarketDom.chart = document.querySelector("#skillMarketChart");
  skillMarketDom.customEditor = document.querySelector("#skillMarketCustomEditor");
  skillMarketDom.metrics = document.querySelector("#skillMarketMetrics");
  skillMarketDom.orderBook = document.querySelector("#skillMarketOrderBook");
  skillMarketDom.detailText = document.querySelector("#skillMarketDetailText");
  skillMarketDom.form = document.querySelector("#skillMarketOrderForm");
  skillMarketDom.quantity = document.querySelector("#skillMarketQuantity");
  skillMarketDom.submit = document.querySelector("#skillMarketSubmit");
  skillMarketDom.remove = document.querySelector("#skillMarketRemove");
  skillMarketDom.holdings = document.querySelector("#skillMarketHoldings");
  skillMarketDom.tasks = document.querySelector("#skillMarketTasks");
  skillMarketDom.log = document.querySelector("#skillMarketLog");
}

function bindSkillMarketEvents() {
  document.addEventListener("click", (event) => {
    const gateButton = event.target.closest("[data-market-gate]");
    if (gateButton) {
      if (gateButton.dataset.marketGate === "enable") {
        localStorage.setItem(SKILL_MARKET_ENABLED_KEY, "true");
        enterSkillMarket();
      }
      if (gateButton.dataset.marketGate === "leave") {
        window.location.href = "./index.html#today-stage";
      }
      return;
    }

    if (!skillMarketState) return;

    const customButton = event.target.closest("[data-market-custom-action]");
    if (customButton) {
      updateSkillMarketCustomStock(customButton.dataset.marketCustomAction);
      return;
    }

    const actionButton = event.target.closest("[data-market-action]");
    if (actionButton) {
      const action = actionButton.dataset.marketAction;
      if (action === "tick") tickSkillMarket();
      if (action === "reset") resetSkillMarket();
      if (action === "settle") settleSkillMarketToday();
      if (action === "add-custom-stock") openSkillMarketCustomDraft();
      return;
    }

    const taskButton = event.target.closest("[data-market-task]");
    if (taskButton) {
      toggleSkillMarketTask(taskButton.dataset.marketTask);
      return;
    }

    const removeButton = event.target.closest("[data-market-remove]");
    if (removeButton) {
      removeSkillMarketHolding(removeButton.dataset.marketRemove);
      return;
    }

    const row = event.target.closest("[data-market-symbol]");
    if (row) {
      skillMarketState.selectedSymbol = row.dataset.marketSymbol;
      saveSkillMarketState();
      renderSkillMarket();
      return;
    }

    const sideButton = event.target.closest("[data-market-side]");
    if (sideButton) {
      skillMarketSide = sideButton.dataset.marketSide === "sell" ? "sell" : "buy";
      renderSkillMarketOrderControls();
    }
  });

  skillMarketDom.form?.addEventListener("submit", (event) => {
    event.preventDefault();
    placeSkillMarketOrder();
  });

  skillMarketDom.quantity?.addEventListener("input", renderSkillMarketOrderControls);
}

function isSkillMarketEnabled() {
  return localStorage.getItem(SKILL_MARKET_ENABLED_KEY) === "true";
}

function showSkillMarketGate() {
  skillMarketDom.gate.hidden = false;
  skillMarketDom.system.hidden = true;
  setText(skillMarketDom.status, "未开启 · 不生成任务");
}

function enterSkillMarket() {
  skillMarketDom.gate.hidden = true;
  skillMarketDom.system.hidden = false;
  skillMarketState = loadSkillMarketState();
  syncSkillMarketCashFromCompany();
  prepareSkillMarketToday();
  primeSkillMarketOpeningTicks();
  saveSkillMarketState();
  renderSkillMarket();
  startSkillMarketTicker();
}

function calculateInitialStockPrice(stock) {
  const basePrice = 20;
  const cashValuePart = stock.marketCashValue * 1.5;

  const riskMultiplierMap = {
    low: 0.85,
    medium: 1,
    high: 1.2
  };

  const riskMultiplier = riskMultiplierMap[stock.riskLevel] || 1;

  return Math.round((basePrice + cashValuePart) * riskMultiplier);
}

function createSkillMarketState() {
  return {
    cash: SKILL_MARKET_INITIAL_CASH,
    selectedSymbol: "ANIM",
    minute: 0,
    lastPreparedDate: "",
    holdings: {},
    tasksByDate: {},
    settlements: {},
    purchasesByDate: {},
    resetWeeks: {},
    customStockNoticeSeen: false,
    pricingModelVersion: SKILL_MARKET_PRICING_MODEL_VERSION,
    trades: [],
    stocks: skillMarketStocks.map((stock, index) => {
      const price = calculateInitialStockPrice(stock);
      const open = roundMoney(price * (0.986 + index * 0.0015));
      return {
        ...stock,
        customListed: false,
        open,
        previousClose: open,
        price: roundMoney(price),
        high: roundMoney(Math.max(open, price)),
        low: roundMoney(Math.min(open, price)),
        volume: 900 + index * 115,
        history: createInitialHistory(price, index),
      };
    }),
  };
}

function createInitialHistory(price, offset) {
  return Array.from({ length: 20 }, (_, index) => {
    const wave = Math.sin((index + offset) / 2.2) * 0.009;
    const drift = (index - 10) * 0.0007;
    return roundMoney(price * (1 + wave + drift));
  });
}

function loadSkillMarketState() {
  try {
    const raw = localStorage.getItem(SKILL_MARKET_STORAGE_KEY);
    if (!raw) return createSkillMarketState();
    return normalizeSkillMarketState(JSON.parse(raw));
  } catch (error) {
    console.warn("Failed to load skill market.", error);
    return createSkillMarketState();
  }
}

function normalizeSkillMarketState(value) {
  const base = createSkillMarketState();
  if (!value || typeof value !== "object" || Array.isArray(value)) return base;
  const stocksBySymbol = new Map(Array.isArray(value.stocks) ? value.stocks.map((stock) => [stock?.symbol, stock]) : []);
  const stocks = base.stocks.map((stock) => {
    const saved = stocksBySymbol.get(stock.symbol) || {};
    const price = clampNumber(saved.price, 1, 999, stock.price);
    const history = Array.isArray(saved.history) && saved.history.length
      ? saved.history.map((item) => clampNumber(item, 1, 999, price)).slice(-SKILL_MARKET_HISTORY_LIMIT)
      : stock.history;
    const rawCustomName = stock.customSlot ? cleanSkillMarketCustomName(saved.customName || saved.name) : "";
    const customName = rawCustomName && rawCustomName !== stock.defaultName ? rawCustomName : "";
    const savedListed = Boolean(saved.customListed);
    const customListed = stock.customSlot
      ? savedListed || Boolean(customName && customName !== stock.defaultName)
      : true;
    return {
      ...stock,
      name: customName || stock.name,
      customName,
      customListed,
      price: roundMoney(price),
      open: roundMoney(clampNumber(saved.open, 1, 999, stock.open)),
      previousClose: roundMoney(clampNumber(saved.previousClose, 1, 999, stock.previousClose)),
      high: roundMoney(clampNumber(saved.high, 1, 999, Math.max(stock.high, price))),
      low: roundMoney(clampNumber(saved.low, 1, 999, Math.min(stock.low, price))),
      volume: Math.round(clampNumber(saved.volume, 0, 999999, stock.volume)),
      history,
    };
  });
  const validSymbols = new Set(stocks.map((stock) => stock.symbol));
  const holdings = Object.entries(value.holdings || {}).reduce((output, [symbol, holding]) => {
    if (!validSymbols.has(symbol)) return output;
    const shares = Math.max(0, Math.floor(Number(holding?.shares || holding || 0)));
    const stock = stocks.find((item) => item.symbol === symbol);
    const avgCost = roundMoney(clampNumber(holding?.avgCost, 0, 999, stock?.price || 0));
    if (shares > 0) output[symbol] = { shares, avgCost, boughtAt: String(holding?.boughtAt || "") };
    return output;
  }, {});
  const state = {
    cash: roundMoney(clampNumber(value.cash, 0, 999999, base.cash)),
    selectedSymbol: validSymbols.has(value.selectedSymbol) ? value.selectedSymbol : base.selectedSymbol,
    minute: Math.max(0, Math.floor(Number(value.minute || 0))),
    lastPreparedDate: String(value.lastPreparedDate || ""),
    pricingModelVersion: Math.max(1, Math.floor(Number(value.pricingModelVersion || 1))),
    holdings,
    tasksByDate: normalizeSkillMarketTasksByDate(value.tasksByDate, validSymbols),
    settlements: normalizeSkillMarketSettlements(value.settlements),
    purchasesByDate: normalizeSkillMarketPurchasesByDate(value.purchasesByDate, validSymbols),
    resetWeeks: normalizeSkillMarketResetWeeks(value.resetWeeks),
    customStockNoticeSeen: Boolean(value.customStockNoticeSeen),
    trades: Array.isArray(value.trades) ? value.trades.slice(0, 18).map(normalizeSkillMarketTrade).filter(Boolean) : [],
    stocks,
  };
  return migrateSkillMarketPricingModel(state);
}

function migrateSkillMarketPricingModel(state) {
  if (!state || state.pricingModelVersion >= SKILL_MARKET_PRICING_MODEL_VERSION) return state;
  const date = todayKey();
  const nextStocks = state.stocks.map((stock) => ({
    ...stock,
    previousClose: stock.price,
    open: stock.price,
    high: Math.max(stock.high, stock.price),
    low: Math.min(stock.low, stock.price),
    history: Array.isArray(stock.history) ? [...stock.history, stock.price].slice(-SKILL_MARKET_HISTORY_LIMIT) : [stock.price],
  }));
  return {
    ...state,
    pricingModelVersion: SKILL_MARKET_PRICING_MODEL_VERSION,
    settlements: Object.entries(state.settlements || {}).reduce((output, [settlementDate, report]) => {
      if (settlementDate !== date) output[settlementDate] = report;
      return output;
    }, {}),
    stocks: nextStocks,
  };
}

function normalizeSkillMarketTasksByDate(value, validSymbols) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.entries(value).reduce((output, [date, tasks]) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !tasks || typeof tasks !== "object" || Array.isArray(tasks)) return output;
    output[date] = Object.entries(tasks).reduce((taskOutput, [id, task]) => {
      if (!task || typeof task !== "object" || Array.isArray(task) || !validSymbols.has(task.symbol)) return taskOutput;
      taskOutput[id] = {
        id: String(task.id || id),
        symbol: String(task.symbol),
        title: String(task.title || "技能股任务"),
        done: Boolean(task.done),
      };
      return taskOutput;
    }, {});
    return output;
  }, {});
}

function normalizeSkillMarketSettlements(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.entries(value).reduce((output, [date, report]) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !report || typeof report !== "object" || Array.isArray(report)) return output;
    output[date] = {
      settledAt: String(report.settledAt || ""),
      completed: Math.max(0, Math.floor(Number(report.completed || 0))),
      total: Math.max(0, Math.floor(Number(report.total || 0))),
      upCount: Math.max(0, Math.floor(Number(report.upCount || 0))),
      downCount: Math.max(0, Math.floor(Number(report.downCount || 0))),
      pressure: Math.max(0, Math.floor(Number(report.pressure || 0))),
      changes: Array.isArray(report.changes) ? report.changes.slice(0, 20) : [],
    };
    return output;
  }, {});
}

function normalizeSkillMarketPurchasesByDate(value, validSymbols) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.entries(value).reduce((output, [date, symbols]) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Array.isArray(symbols)) return output;
    const unique = [];
    symbols.forEach((symbol) => {
      const safeSymbol = String(symbol || "");
      if (validSymbols.has(safeSymbol) && !unique.includes(safeSymbol)) unique.push(safeSymbol);
    });
    if (unique.length) output[date] = unique.slice(0, SKILL_MARKET_DAILY_BUY_LIMIT);
    return output;
  }, {});
}

function normalizeSkillMarketResetWeeks(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.entries(value).reduce((output, [week, timestamp]) => {
    if (/^\d{4}-W\d{2}$/.test(week)) output[week] = String(timestamp || new Date().toISOString());
    return output;
  }, {});
}

function normalizeSkillMarketTrade(trade) {
  if (!trade || typeof trade !== "object" || Array.isArray(trade)) return null;
  const side = trade.side === "sell" ? "sell" : trade.side === "remove" ? "remove" : "buy";
  const shares = Math.max(1, Math.floor(Number(trade.shares || 1)));
  const price = roundMoney(Number(trade.price || 0));
  return {
    id: String(trade.id || Date.now()),
    side,
    symbol: String(trade.symbol || ""),
    name: String(trade.name || ""),
    shares,
    price,
    total: roundMoney(Number(trade.total || shares * price)),
    minute: Math.max(0, Math.floor(Number(trade.minute || 0))),
    createdAt: String(trade.createdAt || new Date().toISOString()),
  };
}

function saveSkillMarketState() {
  localStorage.setItem(SKILL_MARKET_STORAGE_KEY, JSON.stringify(skillMarketState));
  window.dispatchEvent(new CustomEvent("skill-market-updated"));
}

function readSkillMarketLifeCompany() {
  try {
    const raw = localStorage.getItem(LIFE_COMPANY_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null;
  } catch (error) {
    return null;
  }
}

function writeSkillMarketLifeCompany(companyState) {
  if (!companyState || typeof companyState !== "object") return false;
  companyState.updatedAt = new Date().toISOString();
  localStorage.setItem(LIFE_COMPANY_STORAGE_KEY, JSON.stringify(companyState));
  window.dispatchEvent(new CustomEvent("life-company-updated"));
  return true;
}

function ensureSkillMarketCompanyEconomy(company) {
  if (!company || typeof company !== "object") return null;
  const economy = company.economy && typeof company.economy === "object" && !Array.isArray(company.economy)
    ? company.economy
    : {};
  company.economy = {
    currencyName: normalizeCoinName(economy.currencyName),
    currencySymbol: String(economy.currencySymbol || "◈"),
    companyCoins: roundCompanyCoins(economy.companyCoins !== undefined ? economy.companyCoins : 1000),
    lifetimeEarned: roundCompanyCoins(economy.lifetimeEarned !== undefined ? economy.lifetimeEarned : 1000),
    lifetimeSpent: roundCompanyCoins(economy.lifetimeSpent || 0),
    companyLevel: clampNumber(economy.companyLevel, 1, 6, 1),
    companyExp: Math.max(0, Math.floor(Number(economy.companyExp || 0))),
    assetValue: roundCompanyCoins(economy.assetValue || 0),
    transactions: Array.isArray(economy.transactions) ? economy.transactions.slice(0, 80) : [],
  };
  return company.economy;
}

function getSkillMarketCompanyEconomy() {
  const companyState = readSkillMarketLifeCompany();
  const economy = ensureSkillMarketCompanyEconomy(companyState?.company);
  if (!companyState?.company || !economy) return null;
  return { companyState, company: companyState.company, economy };
}

function getSkillMarketAvailableCoins() {
  const companyEconomy = getSkillMarketCompanyEconomy();
  if (!companyEconomy) return roundMoney(skillMarketState?.cash || 0);
  return roundCompanyCoins(companyEconomy.economy.companyCoins);
}

function spendSkillMarketCompanyCoins(amount, stock, shares) {
  const cleanAmount = roundCompanyCoins(amount);
  const companyEconomy = getSkillMarketCompanyEconomy();
  if (!companyEconomy) {
    if (cleanAmount > skillMarketState.cash) return false;
    skillMarketState.cash = roundMoney(skillMarketState.cash - cleanAmount);
    return true;
  }
  const { companyState, company, economy } = companyEconomy;
  if (economy.companyCoins < cleanAmount) return false;
  economy.companyCoins = roundCompanyCoins(economy.companyCoins - cleanAmount);
  economy.lifetimeSpent = roundCompanyCoins(economy.lifetimeSpent + cleanAmount);
  pushSkillMarketCompanyTransaction(company, economy, "spend", cleanAmount, stock, shares, "买入技能股");
  updateSkillMarketCompanyAssetValue(companyState);
  writeSkillMarketLifeCompany(companyState);
  skillMarketState.cash = economy.companyCoins;
  return true;
}

function earnSkillMarketCompanyCoins(amount, stock, shares, title = "卖出技能股") {
  const cleanAmount = roundCompanyCoins(amount);
  const companyEconomy = getSkillMarketCompanyEconomy();
  if (!companyEconomy) {
    skillMarketState.cash = roundMoney(skillMarketState.cash + cleanAmount);
    return true;
  }
  const { companyState, company, economy } = companyEconomy;
  economy.companyCoins = roundCompanyCoins(economy.companyCoins + cleanAmount);
  economy.lifetimeEarned = roundCompanyCoins(economy.lifetimeEarned + cleanAmount);
  pushSkillMarketCompanyTransaction(company, economy, "earn", cleanAmount, stock, shares, title);
  updateSkillMarketCompanyAssetValue(companyState);
  writeSkillMarketLifeCompany(companyState);
  skillMarketState.cash = economy.companyCoins;
  return true;
}

function pushSkillMarketCompanyTransaction(company, economy, type, amount, stock, shares, title) {
  economy.transactions = [{
    id: createSkillMarketId("economy"),
    type,
    amount,
    source: "skill-stock",
    title,
    note: `${stock?.name || stock?.symbol || "技能股"} · ${shares} 股`,
    relatedCompanyId: company.id || "",
    relatedProjectId: "",
    relatedTaskId: "",
    relatedStockId: stock?.symbol || "",
    createdAt: new Date().toISOString(),
  }, ...(economy.transactions || [])].slice(0, 80);
}

function updateSkillMarketCompanyAssetValue(companyState) {
  const company = companyState?.company;
  const economy = ensureSkillMarketCompanyEconomy(company);
  if (!company || !economy) return;
  const completedProjectValue = Array.isArray(company.projects)
    ? company.projects.filter((project) => project?.status === "completed").length * 120
    : 0;
  const departmentValue = Array.isArray(company.departments)
    ? company.departments.reduce((sum, department) => sum + Math.max(0, Number(department?.level || 1) - 1) * 90, 0)
    : 0;
  const levelValue = clampNumber(economy.companyLevel, 1, 6, 1) * 420;
  economy.assetValue = roundCompanyCoins(economy.companyCoins + completedProjectValue + departmentValue + levelValue + calculateSkillMarketHoldingsValue());
}

function syncSkillMarketCashFromCompany() {
  const companyEconomy = getSkillMarketCompanyEconomy();
  if (!companyEconomy || !skillMarketState) return;
  skillMarketState.cash = roundMoney(companyEconomy.economy.companyCoins);
}

function refreshSkillMarketCompanyAssetValue() {
  const companyEconomy = getSkillMarketCompanyEconomy();
  if (!companyEconomy) return false;
  updateSkillMarketCompanyAssetValue(companyEconomy.companyState);
  writeSkillMarketLifeCompany(companyEconomy.companyState);
  return true;
}

function resetSkillMarket() {
  const week = skillMarketWeekKey();
  const resetWeeks = normalizeSkillMarketResetWeeks(skillMarketState?.resetWeeks);
  if (resetWeeks[week]) {
    window.alert("本周已经使用过重置机会。技能股市每周只能重置一次。");
    return;
  }
  const confirmed = window.confirm("重置模拟盘每周只有一次机会。本次重置会清空持仓、任务和成交记录，确定现在使用本周重置机会吗？");
  if (!confirmed) return;
  skillMarketState = {
    ...createSkillMarketState(),
    resetWeeks: {
      ...resetWeeks,
      [week]: new Date().toISOString(),
    },
  };
  skillMarketSide = "buy";
  prepareSkillMarketToday();
  primeSkillMarketOpeningTicks();
  saveSkillMarketState();
  renderSkillMarket();
  startSkillMarketTicker();
}

function prepareSkillMarketToday() {
  const date = todayKey();
  if (!skillMarketState.tasksByDate[date]) skillMarketState.tasksByDate[date] = {};
  Object.keys(skillMarketState.holdings).forEach((symbol) => ensureSkillMarketTasks(date, symbol));
  skillMarketState.lastPreparedDate = date;
}

function ensureSkillMarketTasks(date, symbol) {
  const stock = findSkillMarketStock(symbol);
  if (!stock || !skillMarketState.holdings[symbol]) return;
  const tasks = skillMarketState.tasksByDate[date] || {};
  const existing = Object.values(tasks).filter((task) => task.symbol === symbol);
  if (existing.length) return;
  const profile = riskProfiles[stock.riskLevel] || riskProfiles.medium;
  const templates = skillMarketTaskTemplates(stock);
  const count = Math.min(profile.taskCount, Math.max(1, templates.length));
  for (let index = 0; index < count; index += 1) {
    const id = `${date}-${symbol}-${index}`;
    tasks[id] = {
      id,
      symbol,
      title: templates[index % templates.length],
      done: false,
    };
  }
  skillMarketState.tasksByDate[date] = tasks;
}

function skillMarketTaskTemplates(stock) {
  const templates = Array.isArray(stock?.taskTemplates)
    ? stock.taskTemplates.map((item) => String(item || "").trim()).filter(Boolean)
    : [];
  if (templates.length) return templates;
  const name = cleanSkillMarketCustomName(stock?.name) || stock?.defaultName || "自定义技能股";
  const risk = stock?.riskLevel || "medium";
  if (risk === "high") {
    return [`推进${name} 90 分钟`, `整理${name}成果`, `复盘${name}卡点`];
  }
  if (risk === "low") {
    return [`推进${name} 30 分钟`, `记录${name}今日进展`];
  }
  return [`推进${name} 60 分钟`, `记录${name}今日进展`, `复盘${name}下一步`];
}

function tickSkillMarket() {
  if (!skillMarketState) return;
  if (skillMarketState.settlements[todayKey()]) {
    stopSkillMarketTicker();
    return;
  }
  applySkillMarketTick();
  saveSkillMarketState();
  renderSkillMarket();
}

function primeSkillMarketOpeningTicks() {
  if (!skillMarketState || skillMarketState.settlements[todayKey()]) return;
  const flatStocks = visibleSkillMarketStocks().filter((stock) => Math.abs(stockChangeRate(stock)) <= 0.00005).length;
  if (flatStocks < Math.max(3, visibleSkillMarketStocks().length * 0.7)) return;
  for (let count = 0; count < SKILL_MARKET_OPENING_TICKS; count += 1) {
    applySkillMarketTick();
  }
}

function startSkillMarketTicker() {
  stopSkillMarketTicker();
  if (!skillMarketState || skillMarketState.settlements[todayKey()]) return;
  skillMarketTicker = window.setInterval(() => {
    if (!skillMarketState || document.hidden || skillMarketState.settlements[todayKey()]) {
      if (skillMarketState?.settlements?.[todayKey()]) stopSkillMarketTicker();
      return;
    }
    tickSkillMarket();
  }, SKILL_MARKET_AUTO_TICK_MS);
}

function stopSkillMarketTicker() {
  if (!skillMarketTicker) return;
  window.clearInterval(skillMarketTicker);
  skillMarketTicker = null;
}

function applySkillMarketTick() {
  skillMarketState.minute += 1;
  skillMarketState.stocks = skillMarketState.stocks.map((stock, index) => {
    if (!isSkillMarketStockListed(stock)) return stock;
    const profile = riskProfiles[stock.riskLevel] || riskProfiles.medium;
    const mood = getSkillMarketMood(todayKey());
    const sectorFlow = getSkillMarketSectorFlow(stock, todayKey());
    const pulse = Math.sin((skillMarketState.minute + index * 2) / 8) * profile.volatility;
    const noise = randomBetween(-profile.volatility, profile.volatility);
    const meanReversion = calculateSkillMarketMeanReversion(stock) * 0.12;
    const nextRate = clampNumber(
      mood.intradayBias + sectorFlow * 0.18 + pulse + noise + meanReversion,
      -profile.volatility * 2.2,
      profile.volatility * 2.2,
      0
    );
    const nextPrice = roundMoney(Math.max(1, stock.price * (1 + nextRate)));
    return updateSkillMarketStockPrice(stock, nextPrice);
  });
}

function toggleSkillMarketTask(taskId) {
  const date = todayKey();
  const task = skillMarketState.tasksByDate[date]?.[taskId];
  if (!task || skillMarketState.settlements[date]) return;
  const wasDone = Boolean(task.done);
  task.done = !task.done;
  if (!wasDone && task.done) awardSkillMarketTaskCoins(task);
  saveSkillMarketState();
  renderSkillMarket();
}

function awardSkillMarketTaskCoins(task) {
  if (!task?.id) return false;
  const companyEconomy = getSkillMarketCompanyEconomy();
  if (!companyEconomy) return false;
  const { companyState, company, economy } = companyEconomy;
  const uniqueKey = `skill:${task.id}`;
  const exists = economy.transactions.some((transaction) =>
    transaction.source === "task" &&
    (transaction.relatedTaskId === uniqueKey || transaction.relatedTaskId === task.id)
  );
  if (exists) return false;
  const stock = findSkillMarketStock(task.symbol);
  economy.companyCoins = roundCompanyCoins(economy.companyCoins + 8);
  economy.lifetimeEarned = roundCompanyCoins(economy.lifetimeEarned + 8);
  economy.companyExp = Math.max(0, Math.floor(Number(economy.companyExp || 0))) + 8;
  economy.transactions = [{
    id: createSkillMarketId("economy"),
    type: "earn",
    amount: 8,
    source: "task",
    title: "完成技能股任务",
    note: task.title || "",
    relatedCompanyId: company.id || "",
    relatedProjectId: "",
    relatedTaskId: uniqueKey,
    relatedStockId: stock?.symbol || task.symbol || "",
    createdAt: new Date().toISOString(),
  }, ...(economy.transactions || [])].slice(0, 80);
  updateSkillMarketCompanyAssetValue(companyState);
  writeSkillMarketLifeCompany(companyState);
  syncSkillMarketCashFromCompany();
  return true;
}

function settleSkillMarketToday() {
  const date = todayKey();
  if (skillMarketState.settlements[date]) return;
  prepareSkillMarketToday();
  const todayTasks = skillMarketState.tasksByDate[date] || {};
  const changes = visibleSkillMarketStocks()
    .map((stock) => settleSkillMarketStock(stock.symbol, todayTasks))
    .filter(Boolean);
  const tasks = Object.values(todayTasks).filter((task) => skillMarketState.holdings[task.symbol]);
  const completed = tasks.filter((task) => task.done).length;
  const pressure = calculateSkillMarketPressure();
  skillMarketState.settlements[date] = {
    settledAt: new Date().toISOString(),
    completed,
    total: tasks.length,
    upCount: changes.filter((change) => change.changeRate >= 0).length,
    downCount: changes.filter((change) => change.changeRate < 0).length,
    pressure,
    changes,
  };
  stopSkillMarketTicker();
  saveSkillMarketState();
  renderSkillMarket();
}

function settleSkillMarketStock(symbol, todayTasks) {
  const stock = findSkillMarketStock(symbol);
  const index = skillMarketState.stocks.findIndex((item) => item.symbol === symbol);
  if (!stock || index < 0) return null;
  const isHeld = Boolean(skillMarketState.holdings[symbol]?.shares);
  const tasks = Object.values(todayTasks).filter((task) => task.symbol === symbol);
  const completed = tasks.filter((task) => task.done).length;
  const total = tasks.length;
  const completionRate = total ? completed / total : null;
  const changeRate = isHeld
    ? calculateHeldSkillMarketSessionChange(stock, completionRate ?? 0)
    : calculateUnheldSkillMarketSessionChange(stock);
  const previous = stock.price;
  const next = roundMoney(Math.max(1, previous * (1 + changeRate)));
  skillMarketState.stocks[index] = updateSkillMarketStockPrice({
    ...stock,
    previousClose: previous,
    open: previous,
  }, next);
  return {
    symbol,
    name: stock.name,
    completed,
    total,
    previous,
    next,
    changeRate,
    held: isHeld,
  };
}

function calculateHeldSkillMarketSessionChange(stock, completionRate) {
  const profile = riskProfiles[stock.riskLevel] || riskProfiles.medium;
  const taskRate = clampNumber(completionRate, 0, 1, 0);
  const effortSignal = calculateSkillMarketEffortSignal(stock, taskRate);
  const marketDrift = calculateSkillMarketReferenceMove(stock) * 0.22;
  const valuationSignal = calculateSkillMarketValuationSignal(stock) * 0.35;
  const noise = randomBetween(-profile.sessionVolatility * 0.22, profile.sessionVolatility * 0.22);
  const rawChange = effortSignal + marketDrift + valuationSignal + noise;
  return roundRate(clampNumber(rawChange, profile.heldLimitDown, profile.heldLimitUp, 0));
}

function calculateUnheldSkillMarketSessionChange(stock) {
  const profile = riskProfiles[stock.riskLevel] || riskProfiles.medium;
  const referenceMove = calculateSkillMarketReferenceMove(stock);
  const meanReversion = calculateSkillMarketMeanReversion(stock) * randomBetween(0.28, 0.52);
  const shock = getSkillMarketStockShock(stock, todayKey());
  const noise = randomBetween(-profile.sessionVolatility * 0.72, profile.sessionVolatility * 0.72);
  const rawChange = referenceMove + meanReversion + shock + noise;
  return roundRate(clampNumber(rawChange, profile.watchLimitDown, profile.watchLimitUp, 0));
}

function calculateSkillMarketReferenceMove(stock) {
  const marketProfile = monetizationMarketProfiles[stock.monetizationType] || monetizationMarketProfiles.opportunity;
  const mood = getSkillMarketMood(todayKey());
  const sectorFlow = getSkillMarketSectorFlow(stock, todayKey());
  const demandCycle = getSkillMarketDemandCycle(stock, todayKey()) * marketProfile.demandWeight;
  const valuationSignal = calculateSkillMarketValuationSignal(stock);
  const realitySignal = calculateSkillMarketRealitySignal(stock, mood);
  const momentum = calculateSkillMarketMomentum(stock) * randomBetween(0.08, 0.2);
  return mood.sessionBias
    + sectorFlow
    + demandCycle
    + valuationSignal
    + realitySignal
    + momentum;
}

function calculateSkillMarketEffortSignal(stock, completionRate) {
  const profile = riskProfiles[stock.riskLevel] || riskProfiles.medium;
  const marketProfile = monetizationMarketProfiles[stock.monetizationType] || monetizationMarketProfiles.opportunity;
  const skillToCashValue = calculateSkillMarketCashStrength(stock);
  const baseMagnitude = profile.taskSignal * marketProfile.taskSensitivity * (0.92 + skillToCashValue * 0.28);
  if (completionRate >= 1) return baseMagnitude * 1.55;
  if (completionRate >= 0.67) return baseMagnitude * 0.82;
  if (completionRate >= 0.34) return baseMagnitude * 0.12;
  return -baseMagnitude * 1.45;
}

function getSkillMarketMood(date) {
  const seed = seededSkillMarketNumber(`mood-${date}`);
  if (seed < 0.13) {
    return {
      label: "risk-off",
      sessionBias: seededSkillMarketRange(`mood-size-${date}`, -0.035, -0.014),
      intradayBias: -0.002,
    };
  }
  if (seed > 0.87) {
    return {
      label: "risk-on",
      sessionBias: seededSkillMarketRange(`mood-size-${date}`, 0.014, 0.035),
      intradayBias: 0.002,
    };
  }
  return {
    label: "mixed",
    sessionBias: seededSkillMarketRange(`mood-size-${date}`, -0.012, 0.012),
    intradayBias: seededSkillMarketRange(`mood-intraday-${date}`, -0.001, 0.001),
  };
}

function getSkillMarketSectorFlow(stock, date) {
  const careerFlow = seededSkillMarketNumber(`career-${date}`) - 0.5;
  const lifeFlow = seededSkillMarketNumber(`life-${date}`) - 0.5;
  const sectorFlow = seededSkillMarketNumber(`sector-${date}-${stock.sector || "other"}`) - 0.5;
  const groupFlow = stock.group === "主职业技能股" ? careerFlow : lifeFlow;
  return groupFlow * 0.012 + sectorFlow * 0.03;
}

function getSkillMarketDemandCycle(stock, date) {
  const typeFlow = seededSkillMarketNumber(`demand-${date}-${stock.monetizationType || "other"}`) - 0.5;
  const sectorFlow = seededSkillMarketNumber(`demand-sector-${date}-${stock.sector || "other"}`) - 0.5;
  const stockFlow = seededSkillMarketNumber(`demand-stock-${date}-${stock.symbol}`) - 0.5;
  return typeFlow * 0.95 + sectorFlow * 0.45 + stockFlow * 0.7;
}

function calculateSkillMarketValuationSignal(stock) {
  const fairPrice = calculateSkillMarketFairPrice(stock);
  const valuationGap = (fairPrice - stock.price) / (stock.price || fairPrice || 1);
  return clampNumber(valuationGap * 0.09, -0.035, 0.035, 0);
}

function calculateSkillMarketRealitySignal(stock, mood) {
  const marketProfile = monetizationMarketProfiles[stock.monetizationType] || monetizationMarketProfiles.opportunity;
  const qualitySignal = normalizeSkillMarketCashValue(stock);
  const growthTone = mood.label === "risk-on" ? 1 : mood.label === "risk-off" ? -1 : 0;
  const defensiveTone = mood.label === "risk-off" ? 1 : mood.label === "risk-on" ? -0.35 : 0.2;
  return qualitySignal * (
    marketProfile.growthBeta * growthTone
    + marketProfile.defensiveBeta * defensiveTone
  );
}

function calculateSkillMarketFairPrice(stock) {
  const profile = riskProfiles[stock.riskLevel] || riskProfiles.medium;
  const marketProfile = monetizationMarketProfiles[stock.monetizationType] || monetizationMarketProfiles.opportunity;
  const cashValue = clampNumber(stock.marketCashValue, 0, 100, 50);
  const monetizationPremium = cashValue * marketProfile.executionValue * 1.8;
  const resiliencePremium = Math.max(0, marketProfile.defensiveBeta) * 180;
  const riskDiscount = profile.label === "HIGH" ? 4 : profile.label === "LOW" ? -2 : 0;
  return clampNumber(32 + cashValue * 1.15 + monetizationPremium + resiliencePremium - riskDiscount, 18, 210, 80);
}

function normalizeSkillMarketCashValue(stock) {
  return clampNumber(((stock.marketCashValue || 50) - 50) / 50, -0.55, 1, 0);
}

function calculateSkillMarketCashStrength(stock) {
  return clampNumber((stock.marketCashValue || 50) / 100, 0.25, 1, 0.5);
}

function getSkillMarketStockShock(stock, date) {
  const roll = seededSkillMarketNumber(`shock-${date}-${stock.symbol}`);
  if (roll < 0.045) return -seededSkillMarketRange(`shock-size-${date}-${stock.symbol}`, 0.035, 0.09);
  if (roll > 0.955) return seededSkillMarketRange(`shock-size-${date}-${stock.symbol}`, 0.035, 0.095);
  return 0;
}

function calculateSkillMarketMomentum(stock) {
  const history = Array.isArray(stock.history) ? stock.history : [];
  if (history.length < 5) return 0;
  const recent = history[history.length - 1];
  const prior = history[Math.max(0, history.length - 5)];
  return clampNumber((recent - prior) / (prior || recent || 1), -0.12, 0.12, 0);
}

function calculateSkillMarketMeanReversion(stock) {
  const history = Array.isArray(stock.history) ? stock.history : [];
  if (history.length < 8) return 0;
  const average = history.reduce((sum, value) => sum + value, 0) / history.length;
  return clampNumber((average - stock.price) / (stock.price || average || 1), -0.12, 0.12, 0);
}

function updateSkillMarketStockPrice(stock, nextPrice) {
  const history = [...stock.history, nextPrice].slice(-SKILL_MARKET_HISTORY_LIMIT);
  return {
    ...stock,
    price: nextPrice,
    high: roundMoney(Math.max(stock.high, nextPrice)),
    low: roundMoney(Math.min(stock.low, nextPrice)),
    volume: Math.round(stock.volume * 0.7 + Math.abs(nextPrice - stock.price) * 48 + 120),
    history,
  };
}

function placeSkillMarketOrder() {
  const stock = selectedSkillMarketStock();
  if (!stock) return;
  if (!isSkillMarketStockListed(stock)) {
    window.alert("这支自定义股还没有投入市场，先填写名称并点击「投入市场」。");
    return;
  }
  const shares = Math.max(1, Math.floor(Number(skillMarketDom.quantity?.value || 1)));
  const total = roundMoney(stock.price * shares);
  const holding = skillMarketState.holdings[stock.symbol] || { shares: 0, avgCost: 0 };
  if (skillMarketSide === "buy") {
    if (total > getSkillMarketAvailableCoins()) return;
    const date = todayKey();
    const boughtSymbols = getSkillMarketPurchasedSymbols(date);
    const isNewStockToday = !holding.shares && !boughtSymbols.includes(stock.symbol);
    if (isNewStockToday && boughtSymbols.length >= SKILL_MARKET_DAILY_BUY_LIMIT) {
      window.alert(`今天最多只能买进 ${SKILL_MARKET_DAILY_BUY_LIMIT} 支不同的技能股。`);
      renderSkillMarketOrderControls();
      return;
    }
    const nextShares = holding.shares + shares;
    const nextCost = holding.avgCost * holding.shares + total;
    if (!spendSkillMarketCompanyCoins(total, stock, shares)) return;
    skillMarketState.holdings[stock.symbol] = {
      shares: nextShares,
      avgCost: roundMoney(nextCost / nextShares),
      boughtAt: holding.boughtAt || date,
    };
    if (isNewStockToday) recordSkillMarketPurchase(date, stock.symbol);
    ensureSkillMarketTasks(date, stock.symbol);
    refreshSkillMarketCompanyAssetValue();
  } else {
    if (holding.shares < shares) return;
    const nextShares = holding.shares - shares;
    if (nextShares > 0) {
      skillMarketState.holdings[stock.symbol] = { ...holding, shares: nextShares };
    } else {
      delete skillMarketState.holdings[stock.symbol];
      removeTodayTasksForSymbol(stock.symbol);
    }
    earnSkillMarketCompanyCoins(total, stock, shares, "卖出技能股");
  }
  pushSkillMarketTrade(skillMarketSide, stock, shares, stock.price);
  saveSkillMarketState();
  renderSkillMarket();
}

function getSkillMarketPurchasedSymbols(date = todayKey()) {
  skillMarketState.purchasesByDate = normalizeSkillMarketPurchasesByDate(
    skillMarketState.purchasesByDate,
    new Set(skillMarketState.stocks.map((stock) => stock.symbol))
  );
  return skillMarketState.purchasesByDate[date] || [];
}

function recordSkillMarketPurchase(date, symbol) {
  const bought = getSkillMarketPurchasedSymbols(date);
  if (bought.includes(symbol)) return;
  skillMarketState.purchasesByDate[date] = [...bought, symbol].slice(0, SKILL_MARKET_DAILY_BUY_LIMIT);
}

function removeSkillMarketHolding(symbol) {
  const stock = findSkillMarketStock(symbol);
  const holding = skillMarketState.holdings[symbol];
  if (!stock || !holding?.shares) return;
  pushSkillMarketTrade("remove", stock, holding.shares, stock.price);
  delete skillMarketState.holdings[symbol];
  removeTodayTasksForSymbol(symbol);
  earnSkillMarketCompanyCoins(stock.price * holding.shares, stock, holding.shares, "移除技能股持仓");
  saveSkillMarketState();
  renderSkillMarket();
}

function updateSkillMarketCustomStock(action) {
  const stock = selectedSkillMarketStock();
  if (!stock?.customSlot) return;
  const index = skillMarketState.stocks.findIndex((item) => item.symbol === stock.symbol);
  if (index < 0) return;
  const input = skillMarketDom.customEditor?.querySelector("#skillMarketCustomName");
  const defaultName = stock.defaultName || "空白股";
  const nextName = cleanSkillMarketCustomName(input?.value);
  if (action === "list" && !nextName) {
    window.alert("先给这支自定义股填写一个名称，再投入市场。");
    return;
  }
  if (action === "delist") {
    if (skillMarketState.holdings[stock.symbol]?.shares > 0) {
      window.alert("这支股票还有持仓，先卖出或移除持仓后再退市。");
      return;
    }
    removeTodayTasksForSymbol(stock.symbol);
    skillMarketState.stocks[index] = {
      ...stock,
      name: defaultName,
      customName: "",
      customListed: false,
    };
    skillMarketState.selectedSymbol = firstListedSkillMarketStock()?.symbol || "ANIM";
    saveSkillMarketState();
    renderSkillMarket();
    return;
  }
  if (action === "reset") {
    if (skillMarketState.holdings[stock.symbol]?.shares > 0) {
      window.alert("这支股票还有持仓，不能恢复为空白。");
      return;
    }
    removeTodayTasksForSymbol(stock.symbol);
    skillMarketState.stocks[index] = {
      ...stock,
      name: defaultName,
      customName: "",
      customListed: false,
    };
    saveSkillMarketState();
    renderSkillMarket();
    return;
  }
  const shouldList = action === "list" ? true : Boolean(stock.customListed);
  const finalName = nextName || stock.customName || defaultName;
  skillMarketState.stocks[index] = {
    ...stock,
    name: finalName,
    customName: finalName === defaultName ? "" : finalName,
    customListed: shouldList,
  };
  saveSkillMarketState();
  renderSkillMarket();
}

function openSkillMarketCustomDraft() {
  if (!skillMarketState.customStockNoticeSeen) {
    window.alert("自定义股票是自由区：只有这些空白股可以自由编辑、投入市场、退市和恢复为空白；普通技能股不能这样删改。");
    skillMarketState.customStockNoticeSeen = true;
  }
  const draft = skillMarketState.stocks.find((stock) => stock.customSlot && !stock.customListed && !skillMarketState.holdings[stock.symbol]);
  if (!draft) {
    window.alert("自定义股票位置已经用完。先把不用的自定义股退市，再新增。");
    saveSkillMarketState();
    renderSkillMarket();
    return;
  }
  skillMarketState.selectedSymbol = draft.symbol;
  skillMarketSide = "buy";
  saveSkillMarketState();
  renderSkillMarket();
  skillMarketDom.customEditor?.querySelector("#skillMarketCustomName")?.focus();
}

function removeTodayTasksForSymbol(symbol) {
  const date = todayKey();
  const tasks = skillMarketState.tasksByDate[date] || {};
  Object.keys(tasks).forEach((id) => {
    if (tasks[id].symbol === symbol) delete tasks[id];
  });
}

function pushSkillMarketTrade(side, stock, shares, price) {
  skillMarketState.trades.unshift({
    id: `${Date.now()}-${stock.symbol}`,
    side,
    symbol: stock.symbol,
    name: stock.name,
    shares,
    price,
    total: roundMoney(Number(shares || 0) * Number(price || 0)),
    minute: skillMarketState.minute,
    createdAt: new Date().toISOString(),
  });
  skillMarketState.trades = skillMarketState.trades.slice(0, 18);
}

function renderSkillMarket() {
  prepareSkillMarketToday();
  renderSkillMarketStatus();
  renderSkillMarketAccount();
  renderSkillMarketTape();
  renderSkillMarketList();
  renderSkillMarketLeaders();
  renderSkillMarketSelectedStock();
  renderSkillMarketHoldings();
  renderSkillMarketTasks();
  renderSkillMarketLog();
}

function renderSkillMarketStatus() {
  const date = todayKey();
  const settled = Boolean(skillMarketState.settlements[date]);
  setText(skillMarketDom.status, settled ? "今日已收盘 · 等待明日开盘" : "模拟盘运行中 · 今日未收盘");
}

function renderSkillMarketAccount() {
  syncSkillMarketCashFromCompany();
  const holdingsValue = calculateSkillMarketHoldingsValue();
  const cash = getSkillMarketAvailableCoins();
  const equity = roundMoney(cash + holdingsValue);
  const cost = calculateSkillMarketHoldingsCost();
  const pnl = roundMoney(holdingsValue - cost);
  const pressure = calculateSkillMarketPressure();
  setText(skillMarketDom.cash, formatSkillMarketMoney(cash));
  setText(skillMarketDom.holdingsValue, formatSkillMarketMoney(holdingsValue));
  setText(skillMarketDom.equity, formatSkillMarketMoney(equity));
  setText(skillMarketDom.pnl, formatSignedSkillMarketMoney(pnl));
  setText(skillMarketDom.pressureValue, `${pressure}`);
  setText(skillMarketDom.pressureText, pressure >= 76 ? "压力过热" : pressure >= 48 ? "压力升高" : "压力可控");
  if (skillMarketDom.pressureMeter) skillMarketDom.pressureMeter.style.width = `${pressure}%`;
  setSkillMarketChangeClass(skillMarketDom.pnl, pnl, 0.005);
  renderSkillMarketCloseReport();
}

function renderSkillMarketTape() {
  const index = calculateSkillMarketIndex();
  const leaders = visibleSkillMarketStocks()
    .sort((a, b) => stockChangeRate(b) - stockChangeRate(a))
    .slice(0, 2);
  if (!skillMarketDom.tape) return;
  skillMarketDom.tape.innerHTML = `
    <span><b>技能综合</b><strong class="${skillMarketChangeClass(index.changeRate)}">${index.value.toFixed(2)} ${formatPercent(index.changeRate)}</strong></span>
    ${leaders.map((stock) => `<span><b>${escapeSkillMarketHtml(stock.symbol)}</b><strong class="${skillMarketChangeClass(stockChangeRate(stock))}">${formatPercent(stockChangeRate(stock))}</strong></span>`).join("")}
  `;
}

function renderSkillMarketList() {
  if (!skillMarketDom.list) return;
  const visibleStocks = visibleSkillMarketStocks();
  setText(skillMarketDom.count, `${visibleStocks.length} 支`);
  const groups = ["主职业技能股", "生活 / 小技能股"];
  skillMarketDom.list.innerHTML = groups.map((group) => {
    const rows = visibleStocks.filter((stock) => stock.group === group).map(renderSkillMarketRow).join("");
    if (!rows) return "";
    return `<div class="skill-market-stock-group"><h3>${escapeSkillMarketHtml(group)}</h3>${rows}</div>`;
  }).filter(Boolean).join("");
}

function renderSkillMarketRow(stock) {
  const change = stock.price - stock.previousClose;
  const changeRate = stockChangeRate(stock);
  const selected = stock.symbol === skillMarketState.selectedSymbol;
  const held = skillMarketState.holdings[stock.symbol]?.shares || 0;
  const badges = [
    stock.customSlot ? "可填写" : "",
    held ? `${held} 股` : "",
  ].filter(Boolean);
  return `
    <button class="skill-market-row ${selected ? "is-selected" : ""} ${stock.customSlot ? "is-custom-slot" : ""}" type="button" data-market-symbol="${escapeSkillMarketHtml(stock.symbol)}">
      <span>
        <b>${escapeSkillMarketHtml(stock.name)}</b>
        <small>${escapeSkillMarketHtml(stock.symbol)} · ${escapeSkillMarketHtml(riskProfiles[stock.riskLevel]?.label || stock.riskLevel)} · 现实价值 ${stock.marketCashValue}</small>
      </span>
      <strong>${stock.price.toFixed(2)}</strong>
      <em class="${skillMarketChangeClass(changeRate)}">${formatSignedNumber(change)}<br />${formatPercent(changeRate)}</em>
      ${badges.map((badge) => `<i>${escapeSkillMarketHtml(badge)}</i>`).join("")}
    </button>
  `;
}

function renderSkillMarketLeaders() {
  if (!skillMarketDom.leaders) return;
  const leaders = visibleSkillMarketStocks().sort((a, b) => stockChangeRate(b) - stockChangeRate(a));
  const top = leaders.slice(0, 3);
  const bottom = leaders.slice(-3).reverse();
  skillMarketDom.leaders.innerHTML = `
    <div>${top.map((stock) => renderSkillMarketRankRow(stock, "涨")).join("")}</div>
    <div>${bottom.map((stock) => renderSkillMarketRankRow(stock, "跌")).join("")}</div>
  `;
}

function renderSkillMarketRankRow(stock, label) {
  const changeRate = stockChangeRate(stock);
  return `
    <button type="button" data-market-symbol="${escapeSkillMarketHtml(stock.symbol)}">
      <span>${label}</span>
      <b>${escapeSkillMarketHtml(stock.name)}</b>
      <em class="${skillMarketChangeClass(changeRate)}">${formatPercent(changeRate)}</em>
    </button>
  `;
}

function renderSkillMarketSelectedStock() {
  const stock = selectedSkillMarketStock();
  if (!stock) return;
  const changeRate = stockChangeRate(stock);
  const held = skillMarketState.holdings[stock.symbol]?.shares || 0;
  const listed = isSkillMarketStockListed(stock);
  setText(skillMarketDom.selectedSymbol, `${stock.symbol} · ${stock.sector} · ${riskProfiles[stock.riskLevel]?.label || stock.riskLevel}`);
  setText(skillMarketDom.selectedName, stock.name);
  setText(skillMarketDom.selectedPrice, stock.price.toFixed(2));
  setText(skillMarketDom.detailText, `${stock.group} · ${monetizationLabels[stock.monetizationType] || stock.monetizationType} · 现实价值 / 换钱能力 ${stock.marketCashValue}/100 · 当前持仓 ${held} 股${stock.customSlot && !listed ? " · 草稿未入市" : ""}`);
  setSkillMarketChangeClass(skillMarketDom.selectedPrice, changeRate);
  if (skillMarketDom.remove) {
    skillMarketDom.remove.dataset.marketRemove = stock.symbol;
    skillMarketDom.remove.disabled = held <= 0 || !listed;
  }
  renderSkillMarketCustomEditor(stock);
  renderSkillMarketChart(stock);
  renderSkillMarketMetrics(stock);
  renderSkillMarketOrderBook(stock);
  renderSkillMarketOrderControls();
}

function renderSkillMarketCustomEditor(stock) {
  if (!skillMarketDom.customEditor) return;
  if (!stock?.customSlot) {
    skillMarketDom.customEditor.innerHTML = "";
    return;
  }
  const listed = isSkillMarketStockListed(stock);
  skillMarketDom.customEditor.innerHTML = `
    <label>
      <span>自定义股名</span>
      <input id="skillMarketCustomName" type="text" maxlength="18" value="${escapeSkillMarketHtml(stock.customName || "")}" placeholder="${escapeSkillMarketHtml(stock.defaultName || "输入技能名称")}" />
    </label>
    <p>${listed ? "已投入市场，可以买入、生成任务和进入涨跌榜。" : "草稿未入市：填写名称后点击投入市场。"}</p>
    <div>
      <button class="primary-button" type="button" data-market-custom-action="${listed ? "save" : "list"}">${listed ? "保存编辑" : "投入市场"}</button>
      ${listed ? `<button class="ghost-button" type="button" data-market-custom-action="delist">退市</button>` : ""}
      <button class="ghost-button" type="button" data-market-custom-action="reset">恢复空白</button>
    </div>
  `;
}

function renderSkillMarketChart(stock) {
  if (!skillMarketDom.chart) return;
  const values = stock.history.length ? stock.history : [stock.price];
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const width = 320;
  const height = 118;
  const points = values.map((value, index) => {
    const x = values.length === 1 ? 0 : (index / (values.length - 1)) * width;
    const y = height - ((value - min) / range) * (height - 18) - 9;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  const last = values[values.length - 1];
  const first = values[0];
  const chartChange = (last - first) / (first || last || 1);
  const chartClass = skillMarketChangeClass(chartChange);
  const isUp = chartChange >= 0;
  skillMarketDom.chart.innerHTML = `
    <defs>
      <linearGradient id="skillMarketChartFill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="${isUp ? "#40D78A" : "#FF5C5C"}" stop-opacity="0.34" />
        <stop offset="100%" stop-color="${isUp ? "#40D78A" : "#FF5C5C"}" stop-opacity="0" />
      </linearGradient>
    </defs>
    <polyline class="skill-market-chart-grid" points="0,28 320,28" />
    <polyline class="skill-market-chart-grid" points="0,59 320,59" />
    <polyline class="skill-market-chart-grid" points="0,90 320,90" />
    <polygon class="skill-market-chart-fill" points="0,118 ${points} 320,118" />
    <polyline class="skill-market-chart-line ${chartClass}" points="${points}" />
  `;
}

function renderSkillMarketMetrics(stock) {
  if (!skillMarketDom.metrics) return;
  skillMarketDom.metrics.innerHTML = [
    ["今开", stock.open.toFixed(2)],
    ["最高", stock.high.toFixed(2)],
    ["最低", stock.low.toFixed(2)],
    ["现实价值", `${stock.marketCashValue}/100`],
  ].map(([label, value]) => `<span><b>${label}</b><strong>${value}</strong></span>`).join("");
}

function renderSkillMarketOrderBook(stock) {
  if (!skillMarketDom.orderBook) return;
  const levels = [3, 2, 1];
  const asks = levels.map((level) => ({
    label: `卖${level}`,
    price: stock.price * (1 + level * 0.003),
    amount: Math.round(stock.volume / (level + 1)),
  }));
  const bids = levels.reverse().map((level) => ({
    label: `买${level}`,
    price: stock.price * (1 - level * 0.003),
    amount: Math.round(stock.volume / (level + 2)),
  }));
  skillMarketDom.orderBook.innerHTML = [...asks, ...bids].map((row) => `
    <span class="${row.label.startsWith("卖") ? "is-ask" : "is-bid"}">
      <b>${row.label}</b>
      <strong>${row.price.toFixed(2)}</strong>
      <em>${row.amount}</em>
    </span>
  `).join("");
}

function renderSkillMarketOrderControls() {
  if (!skillMarketState) return;
  document.querySelectorAll("[data-market-side]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.marketSide === skillMarketSide);
  });
  const stock = selectedSkillMarketStock();
  const shares = Math.max(1, Math.floor(Number(skillMarketDom.quantity?.value || 1)));
  const holding = stock ? skillMarketState.holdings[stock.symbol] : null;
  const total = stock ? roundMoney(stock.price * shares) : 0;
  const availableCoins = getSkillMarketAvailableCoins();
  const boughtSymbols = getSkillMarketPurchasedSymbols();
  const buyLimitReached = stock && skillMarketSide === "buy" && !holding?.shares && !boughtSymbols.includes(stock.symbol) && boughtSymbols.length >= SKILL_MARKET_DAILY_BUY_LIMIT;
  const listed = stock && isSkillMarketStockListed(stock);
  const canBuy = stock && listed && total <= availableCoins && !buyLimitReached;
  const canSell = stock && (holding?.shares || 0) >= shares;
  if (skillMarketDom.submit) {
    skillMarketDom.submit.textContent = skillMarketSide === "buy"
      ? (!listed ? "自定义股未入市" : buyLimitReached ? "今日买入已达 3 支" : "确认买入")
      : "确认卖出";
    skillMarketDom.submit.disabled = skillMarketSide === "buy" ? !canBuy : !canSell;
  }
}

function renderSkillMarketHoldings() {
  if (!skillMarketDom.holdings) return;
  const rows = skillMarketState.stocks
    .map((stock) => ({ stock, holding: skillMarketState.holdings[stock.symbol] }))
    .filter((item) => item.holding?.shares > 0);
  if (!rows.length) {
    skillMarketDom.holdings.innerHTML = `<p>空仓。买入技能股后，它会开始生成今日任务。</p>`;
    return;
  }
  skillMarketDom.holdings.innerHTML = rows.map(({ stock, holding }) => {
    const marketValue = roundMoney(stock.price * holding.shares);
    const pnl = roundMoney((stock.price - holding.avgCost) * holding.shares);
    return `
      <button type="button" data-market-symbol="${escapeSkillMarketHtml(stock.symbol)}">
        <span><b>${escapeSkillMarketHtml(stock.name)}</b><small>${holding.shares} 股 · 成本 ${holding.avgCost.toFixed(2)}</small></span>
        <strong>${formatSkillMarketMoney(marketValue)}</strong>
        <em class="${skillMarketChangeClass(pnl, 0.005)}">${formatSignedSkillMarketMoney(pnl)}</em>
      </button>
    `;
  }).join("");
}

function renderSkillMarketTasks() {
  if (!skillMarketDom.tasks) return;
  const date = todayKey();
  const settled = Boolean(skillMarketState.settlements[date]);
  const tasks = Object.values(skillMarketState.tasksByDate[date] || {})
    .filter((task) => skillMarketState.holdings[task.symbol]);
  if (!tasks.length) {
    skillMarketDom.tasks.innerHTML = `<p>没有持仓任务。只有买入技能股后才会生成。</p>`;
    return;
  }
  skillMarketDom.tasks.innerHTML = tasks.map((task) => {
    const stock = findSkillMarketStock(task.symbol);
    return `
      <button type="button" data-market-task="${escapeSkillMarketHtml(task.id)}" class="${task.done ? "is-done" : ""}" ${settled ? "disabled" : ""}>
        <span>${task.done ? "完成" : "未完"}</span>
        <b>${escapeSkillMarketHtml(task.title)}</b>
        <em>${escapeSkillMarketHtml(stock?.name || task.symbol)}</em>
      </button>
    `;
  }).join("");
}

function renderSkillMarketCloseReport() {
  if (!skillMarketDom.closeReport) return;
  const date = todayKey();
  const report = skillMarketState.settlements[date];
  if (!report) {
    const tasks = Object.values(skillMarketState.tasksByDate[date] || {}).filter((task) => skillMarketState.holdings[task.symbol]);
    const done = tasks.filter((task) => task.done).length;
    skillMarketDom.closeReport.innerHTML = `
      <strong>今日未收盘</strong>
      <span>${done}/${tasks.length} 个任务已完成。持仓股主要按任务结算；未持仓股票会跟随独立市场波动。</span>
    `;
    return;
  }
  const worst = [...report.changes].sort((a, b) => a.changeRate - b.changeRate)[0];
  const best = [...report.changes].sort((a, b) => b.changeRate - a.changeRate)[0];
  const heldChanges = report.changes.filter((change) => change.held);
  const watchChanges = report.changes.filter((change) => !change.held);
  skillMarketDom.closeReport.innerHTML = `
    <strong>今日收盘：${report.completed}/${report.total} 完成</strong>
    <span>持仓任务股 ${heldChanges.filter((change) => change.changeRate >= 0).length} 涨 / ${heldChanges.filter((change) => change.changeRate < 0).length} 跌；观察股 ${watchChanges.filter((change) => change.changeRate >= 0).length} 涨 / ${watchChanges.filter((change) => change.changeRate < 0).length} 跌。</span>
    <span>压力指数 ${report.pressure}。</span>
    <span>${best ? `最强 ${best.name} ${formatPercent(best.changeRate)}` : ""}${worst ? ` · 最弱 ${worst.name} ${formatPercent(worst.changeRate)}` : ""}</span>
  `;
}

function renderSkillMarketLog() {
  if (!skillMarketDom.log) return;
  if (!skillMarketState.trades.length) {
    skillMarketDom.log.innerHTML = `<li>暂无成交</li>`;
    return;
  }
  skillMarketDom.log.innerHTML = skillMarketState.trades.map((trade) => `
    <li>
      <span class="${trade.side === "buy" ? "is-up" : "is-down"}">${trade.side === "buy" ? "买入" : trade.side === "sell" ? "卖出" : "移除"}</span>
      <b>${escapeSkillMarketHtml(trade.name || trade.symbol)}</b>
      <em>${trade.shares} 股 @ ${trade.price.toFixed(2)}</em>
    </li>
  `).join("");
}

function selectedSkillMarketStock() {
  return skillMarketState?.stocks.find((stock) => stock.symbol === skillMarketState.selectedSymbol)
    || firstListedSkillMarketStock()
    || skillMarketState?.stocks[0];
}

function findSkillMarketStock(symbol) {
  return skillMarketState?.stocks.find((stock) => stock.symbol === symbol)
    || skillMarketStocks.find((stock) => stock.symbol === symbol);
}

function isSkillMarketStockListed(stock) {
  return Boolean(stock && (!stock.customSlot || stock.customListed));
}

function visibleSkillMarketStocks() {
  return (skillMarketState?.stocks || []).filter(isSkillMarketStockListed);
}

function firstListedSkillMarketStock() {
  return visibleSkillMarketStocks()[0] || null;
}

function calculateSkillMarketHoldingsValue() {
  return roundMoney(skillMarketState.stocks.reduce((sum, stock) => {
    const shares = skillMarketState.holdings[stock.symbol]?.shares || 0;
    return sum + shares * stock.price;
  }, 0));
}

function calculateSkillMarketHoldingsCost() {
  return roundMoney(Object.values(skillMarketState.holdings).reduce((sum, holding) => {
    return sum + holding.shares * holding.avgCost;
  }, 0));
}

function calculateSkillMarketPressure() {
  const date = todayKey();
  const tasks = Object.values(skillMarketState.tasksByDate[date] || {}).filter((task) => skillMarketState.holdings[task.symbol]);
  const taskPressure = tasks.reduce((sum, task) => {
    const stock = findSkillMarketStock(task.symbol);
    const profile = riskProfiles[stock?.riskLevel] || riskProfiles.medium;
    return sum + (task.done ? 0 : profile.pressure);
  }, 0);
  const lossPressure = skillMarketState.stocks.reduce((sum, stock) => {
    const holding = skillMarketState.holdings[stock.symbol];
    if (!holding) return sum;
    const pnlRate = (stock.price - holding.avgCost) / (holding.avgCost || stock.price || 1);
    return sum + (pnlRate < 0 ? Math.min(24, Math.abs(pnlRate) * 180) : 0);
  }, 0);
  return Math.round(clampNumber(taskPressure + lossPressure, 0, 100, 0));
}

function calculateSkillMarketIndex() {
  const stocks = visibleSkillMarketStocks();
  const current = stocks.reduce((sum, stock) => sum + stock.price, 0);
  const previous = stocks.reduce((sum, stock) => sum + stock.previousClose, 0) || current || 1;
  const value = (current / previous) * 1000;
  return { value, changeRate: (current - previous) / previous };
}

function stockChangeRate(stock) {
  return (stock.price - stock.previousClose) / (stock.previousClose || stock.price || 1);
}

function skillMarketChangeClass(value, flatThreshold = 0.00005) {
  const number = Number(value || 0);
  if (Math.abs(number) <= flatThreshold) return "is-flat";
  return number > 0 ? "is-up" : "is-down";
}

function setSkillMarketChangeClass(element, value, flatThreshold) {
  if (!element) return;
  element.classList.remove("is-up", "is-down", "is-flat");
  element.classList.add(skillMarketChangeClass(value, flatThreshold));
}

function todayKey() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function skillMarketWeekKey(date = new Date()) {
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  const day = target.getDay() || 7;
  target.setDate(target.getDate() + 4 - day);
  const yearStart = new Date(target.getFullYear(), 0, 1);
  const week = Math.ceil((((target - yearStart) / 86400000) + 1) / 7);
  return `${target.getFullYear()}-W${String(week).padStart(2, "0")}`;
}

function cleanSkillMarketCustomName(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 18);
}

function formatPercent(value) {
  const percent = value * 100;
  if (Math.abs(percent) < 0.005) return "0.00%";
  return `${percent > 0 ? "+" : ""}${percent.toFixed(2)}%`;
}

function formatSignedNumber(value) {
  const number = roundMoney(value);
  if (Math.abs(number) < 0.005) return "0.00";
  return `${number > 0 ? "+" : ""}${number.toFixed(2)}`;
}

function formatSignedSkillMarketMoney(value) {
  const money = roundMoney(value);
  if (Math.abs(money) < 0.005) return formatSkillMarketMoney(0);
  return `${money > 0 ? "+" : ""}${formatSkillMarketMoney(money)}`;
}

function roundRate(value) {
  return Math.round(Number(value || 0) * 10000) / 10000;
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function seededSkillMarketRange(seed, min, max) {
  return min + seededSkillMarketNumber(seed) * (max - min);
}

function seededSkillMarketNumber(seed) {
  const text = String(seed || "");
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) / 4294967295;
}

function formatSkillMarketMoney(value) {
  return `◈ ${roundMoney(value).toLocaleString("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function roundMoney(value) {
  return Math.round(Number(value || 0) * 100) / 100;
}

function roundCompanyCoins(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0;
  return Math.max(0, Math.round(number));
}

function normalizeCoinName(value) {
  const name = String(value || "金币").trim();
  if (!name || ["公司币", "游戏币", "技能币"].includes(name)) return "金币";
  return name;
}

function createSkillMarketId(prefix) {
  if (window.crypto?.randomUUID) return `${prefix}-${window.crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(max, Math.max(min, number));
}

function setText(element, value) {
  if (element) element.textContent = value;
}

function escapeSkillMarketHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

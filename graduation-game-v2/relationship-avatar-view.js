(function initializeRelationshipAvatarView() {
  "use strict";

  const skinColors = {
    "浅色": "#ffd6bd",
    "自然色": "#efb07d",
    "暖棕色": "#b87950",
    "深棕色": "#73452f",
    "自定义色": "#d9a0ff",
  };
  const hairColors = {
    "黑色": "#15111f",
    "棕色": "#704124",
    "金色": "#f3c95e",
    "粉色": "#ff7dcb",
    "紫色": "#7f55ff",
    "蓝色": "#4f90ff",
    "灰白色": "#d7d5e6",
    "自定义": "#40d78a",
  };
  const layerFieldClasses = {
    baseHead: "base-head",
    baseBodyPart: "base-body",
    creatureAsset: "creature",
    outfitAsset: "outfit",
    bottomAsset: "bottom",
    hairAsset: "hair",
    expressionAsset: "expression",
    accessoryHeadAsset: "accessory-head",
    accessoryFaceAsset: "accessory-face",
    accessoryNeckAsset: "accessory-neck",
    accessoryBodyAsset: "accessory-body",
  };
  const defaultLayerOrder = [
    "base-body", "base-head", "base", "creature", "outfit", "bottom", "hair", "expression",
    "accessory-head", "accessory-face", "accessory-neck", "accessory-body", "emotion-aux", "custom-image",
  ];

  function render(cardOrAvatar, variant = "preview") {
    const source = cardOrAvatar?.avatar || cardOrAvatar || {};
    const avatar = normalizeAvatar(source);
    const layers = buildLayers(avatar);
    const classes = [
      "dressup-avatar",
      layers.length ? "has-art-layers" : "",
      `dressup-avatar-${className(variant)}`,
      `species-${className(avatar.species)}`,
      `body-${bodyKey(avatar.bodyType)}`,
      `hair-${hairKey(avatar.hairStyle)}`,
      `expression-${expressionKey(avatar.expression)}`,
      `effect-${className(avatar.effect)}`,
      `backdrop-${backdropKey(avatar.backdrop)}`,
    ].filter(Boolean).join(" ");
    const style = [
      `--skin:${skinColors[avatar.skinTone] || skinColors["自然色"]}`,
      `--hair:${hairColors[avatar.hairColor] || hairColors["黑色"]}`,
      `--dress-top:${dressupColor("top", avatar.top)}`,
      `--dress-bottom:${dressupColor("bottom", avatar.bottom)}`,
      `--dress-shoes:${dressupColor("shoes", avatar.shoes)}`,
    ].join(";");

    return `
      <div class="relationship-avatar-preview relationship-avatar-${escapeHtml(variant)}">
        <div class="${classes}" style="${style}">
          <span class="dressup-layer dressup-effect" aria-hidden="true">${effectSymbol(avatar.effect)}</span>
          ${layers.map((layer) => renderLayer(layer, avatar, layers)).join("")}
          <span class="dressup-layer dressup-body" aria-hidden="true"></span>
          <span class="dressup-layer dressup-ears" aria-hidden="true"></span>
          <span class="dressup-layer dressup-hair-back" aria-hidden="true"></span>
          <span class="dressup-layer dressup-face" aria-hidden="true">
            <i class="dressup-eye dressup-eye-left"></i>
            <i class="dressup-eye dressup-eye-right"></i>
            <i class="dressup-mouth"></i>
            <i class="dressup-expression-effect">${expressionSymbol(avatar.expressionEffect)}</i>
          </span>
          <span class="dressup-layer dressup-top" aria-hidden="true"></span>
          <span class="dressup-layer dressup-bottom" aria-hidden="true"></span>
          <span class="dressup-layer dressup-shoes" aria-hidden="true"></span>
          <span class="dressup-layer dressup-hair-front" aria-hidden="true"></span>
          <span class="dressup-layer dressup-bangs" aria-hidden="true">${avatar.bangs === "无刘海" ? "" : "︶"}</span>
          <span class="dressup-layer dressup-head-accessory" aria-hidden="true">${accessorySymbol(avatar.accessoryHead)}</span>
          <span class="dressup-layer dressup-face-accessory" aria-hidden="true">${accessorySymbol(avatar.accessoryFace)}</span>
          <span class="dressup-layer dressup-neck-accessory" aria-hidden="true">${accessorySymbol(avatar.accessoryNeck)}</span>
          <span class="dressup-layer dressup-body-accessory" aria-hidden="true">${accessorySymbol(avatar.accessoryBody)}</span>
        </div>
      </div>
    `;
  }

  function normalizeAvatar(source) {
    return {
      baseHead: source.baseHead || "head_young_female",
      baseBodyPart: source.baseBodyPart || "bodypart_young_female",
      creatureAsset: source.creatureAsset || "none",
      species: source.species || "human",
      bodyType: source.bodyType || "标准",
      skinTone: source.skinTone || "自然色",
      hairAsset: source.hairAsset || "none",
      hairStyle: source.hairStyle || "短发",
      hairColor: source.hairColor || "黑色",
      bangs: source.bangs || "无刘海",
      expressionAsset: source.expressionAsset || "none",
      expression: source.expression || "平静",
      expressionEffect: source.expressionEffect || "无",
      outfitAsset: source.outfitAsset || "none",
      top: source.top || "粉色卫衣",
      bottomAsset: source.bottomAsset || "none",
      bottom: source.bottom || "长裤",
      shoes: source.shoes || "运动鞋",
      accessoryHeadAsset: source.accessoryHeadAsset || "none",
      accessoryFaceAsset: source.accessoryFaceAsset || "none",
      accessoryNeckAsset: source.accessoryNeckAsset || "none",
      accessoryBodyAsset: source.accessoryBodyAsset || "none",
      accessoryHead: source.accessoryHead || "无",
      accessoryFace: source.accessoryFace || "无",
      accessoryNeck: source.accessoryNeck || "无",
      accessoryBody: source.accessoryBody || "无",
      effect: source.effect || "无",
      backdrop: source.backdrop || "纯色",
      layerTransforms: objectValue(source.layerTransforms),
      layerOrder: Array.isArray(source.layerOrder) ? source.layerOrder.map(String) : [],
      layerColors: objectValue(source.layerColors),
      layerBlends: objectValue(source.layerBlends),
      layerItems: arrayValue(source.layerItems),
      freeAccessories: arrayValue(source.freeAccessories),
      emotionAuxItems: arrayValue(source.emotionAuxItems),
      shapeItems: arrayValue(source.shapeItems),
      imageItems: arrayValue(source.imageItems),
    };
  }

  function buildLayers(avatar) {
    const creature = asset(avatar.creatureAsset);
    const layers = creature
      ? [{ key: "creature", src: creature.src, label: creature.label, className: "creature" }]
      : [
          assetLayer("base-body", avatar.baseBodyPart, "身体基础", "base-body"),
          assetLayer("base-head", avatar.baseHead, "头部基础", "base-head"),
        ];
    [
      ["outfit", avatar.outfitAsset, "上装"],
      ["bottom", avatar.bottomAsset, "下装鞋子"],
      ["hair", avatar.hairAsset, "发型"],
      ["expression", avatar.expressionAsset, "表情"],
      ["accessory-head", avatar.accessoryHeadAsset, "头部配饰"],
      ["accessory-face", avatar.accessoryFaceAsset, "脸部配饰"],
      ["accessory-neck", avatar.accessoryNeckAsset, "颈部配饰"],
      ["accessory-body", avatar.accessoryBodyAsset, "身体配饰"],
    ].forEach(([key, value, label]) => layers.push(assetLayer(key, value, label, key)));

    avatar.layerItems.forEach((item) => {
      const itemAsset = asset(item?.value);
      const fieldClass = layerFieldClasses[item?.field] || "asset-item";
      if (itemAsset) layers.push({ key: `asset-item-${safeId(item.field)}-${safeId(item.id)}`, src: itemAsset.src, label: itemAsset.label, className: `${fieldClass} asset-item` });
    });
    avatar.emotionAuxItems.forEach((item) => {
      const itemAsset = asset(item?.value);
      if (itemAsset) layers.push({ key: `emotion-aux-item-${safeId(item.id)}`, src: itemAsset.src, label: itemAsset.label, className: "emotion-aux emotion-aux-item" });
    });
    avatar.freeAccessories.forEach((item) => {
      const itemAsset = asset(item?.value);
      if (itemAsset) layers.push({ key: `free-accessory-${safeId(item.id)}`, src: itemAsset.src, label: itemAsset.label, className: `free-accessory free-${safeId(item.slot || "body")}` });
    });
    avatar.shapeItems.forEach((item) => {
      if (item?.id && item?.type) layers.push({ key: `shape-item-${safeId(item.id)}`, shape: item, label: "自制形状", className: `shape-item shape-${className(item.type)}` });
    });
    avatar.imageItems.forEach((item) => {
      const src = String(item?.src || "");
      if (item?.id && src.startsWith("data:image/")) layers.push({ key: `custom-image-${safeId(item.id)}`, src, label: String(item.name || "导入图片"), className: "custom-image image-item" });
    });
    return layers.filter((layer) => layer?.src || layer?.shape);
  }

  function assetLayer(key, value, label, classNameValue) {
    const item = asset(value);
    return item ? { key, src: item.src, label, className: classNameValue } : null;
  }

  function renderLayer(layer, avatar, layers) {
    const classes = String(layer.className || layer.key).split(/\s+/).filter(Boolean).map((value) => `dressup-art-${className(value)}`).join(" ");
    const style = layerStyle(avatar, layer.key, layers, Boolean(layer.shape));
    if (layer.shape) {
      return `<svg class="dressup-art-layer ${classes}" viewBox="0 0 100 100" aria-hidden="true" data-dressup-layer="${escapeHtml(layer.key)}" style="${style};color:${escapeHtml(layerColor(avatar, layer.key) || "#ff7dcb")}">${shapeMarkup(layer.shape)}</svg>`;
    }
    return `<img class="dressup-art-layer ${classes}" src="${escapeHtml(layer.src)}" alt="" draggable="false" loading="lazy" data-dressup-layer="${escapeHtml(layer.key)}" style="${style}" />`;
  }

  function layerStyle(avatar, key, layers, isShape) {
    const transform = objectValue(avatar.layerTransforms[key]);
    const x = clamp(transform.x, -48, 48, 0);
    const y = clamp(transform.y, -48, 48, 0);
    const scale = clamp(transform.scale, 0.45, 1.8, 1);
    const rotate = clamp(transform.rotate, -180, 180, 0);
    const color = layerColor(avatar, key);
    const blend = ["multiply", "color-burn", "screen", "overlay", "darken", "lighten", "soft-light", "hard-light"].includes(avatar.layerBlends[key]) ? avatar.layerBlends[key] : "normal";
    const order = layerOrder(avatar, layers);
    const index = order.indexOf(key);
    const filter = isShape ? "saturate(1)" : (color ? colorFilter(color) : "saturate(1)");
    return `--layer-x:${formatNumber(x)}cqw;--layer-y:${formatNumber(y)}cqh;--layer-scale:${formatNumber(scale)};--layer-rotate:${formatNumber(rotate)}deg;--layer-filter:${filter};--layer-blend:${blend};z-index:${index < 0 ? 20 : 20 + index * 2}`;
  }

  function layerOrder(avatar, layers) {
    const visible = layers.map((layer) => layer.key);
    const preferred = [...avatar.layerOrder, ...defaultLayerOrder, ...visible];
    return preferred.filter((key, index) => visible.includes(key) && preferred.indexOf(key) === index);
  }

  function asset(value) {
    if (!value || value === "none") return null;
    return arrayValue(window.RELATIONSHIP_DRESSUP_ASSETS?.items).find((item) => item.value === value) || null;
  }

  function layerColor(avatar, key) {
    const value = String(avatar.layerColors[key] || "");
    return /^#[0-9a-f]{6}$/i.test(value) ? value : "";
  }

  function shapeMarkup(shape) {
    if (shape.type === "circle") return '<circle cx="50" cy="50" r="31" fill="currentColor" />';
    if (shape.type === "square") return '<rect x="21" y="21" width="58" height="58" rx="8" fill="currentColor" />';
    if (shape.type === "heart") return '<path d="M50 80 C28 64 18 51 18 37 C18 26 26 19 36 19 C43 19 48 23 50 29 C52 23 57 19 64 19 C74 19 82 26 82 37 C82 51 72 64 50 80 Z" fill="currentColor" />';
    if (shape.type === "pentagon") return '<path d="M50 15 L83 39 L70 79 L30 79 L17 39 Z" fill="currentColor" />';
    const points = arrayValue(shape.points).map((point) => ({ x: clamp(point?.x, 0, 100, 50), y: clamp(point?.y, 0, 100, 50) }));
    if (points.length < 2) return "";
    if (shape.type === "leafStroke") return `<path d="${leafPath(points)}" fill="currentColor" />`;
    return `<path d="M ${points.map((point) => `${point.x} ${point.y}`).join(" L ")} Z" fill="currentColor" />`;
  }

  function leafPath(points) {
    const left = [];
    const right = [];
    points.forEach((point, index) => {
      const previous = points[Math.max(0, index - 1)];
      const next = points[Math.min(points.length - 1, index + 1)];
      const dx = next.x - previous.x;
      const dy = next.y - previous.y;
      const length = Math.hypot(dx, dy) || 1;
      const width = 0.45 + Math.sin(Math.PI * (index / Math.max(1, points.length - 1))) * 3.4;
      left.push({ x: point.x + (-dy / length) * width, y: point.y + (dx / length) * width });
      right.unshift({ x: point.x - (-dy / length) * width, y: point.y - (dx / length) * width });
    });
    const outline = [...left, ...right];
    return `M ${outline.map((point) => `${formatNumber(point.x)} ${formatNumber(point.y)}`).join(" L ")} Z`;
  }

  function colorFilter(color) {
    const value = Number.parseInt(color.slice(1), 16);
    const red = ((value >> 16) & 255) / 255;
    const green = ((value >> 8) & 255) / 255;
    const blue = (value & 255) / 255;
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const lightness = (max + min) / 2;
    const delta = max - min;
    let hue = 0;
    let saturation = 0;
    if (delta) {
      saturation = delta / (1 - Math.abs(2 * lightness - 1));
      if (max === red) hue = 60 * (((green - blue) / delta) % 6);
      if (max === green) hue = 60 * ((blue - red) / delta + 2);
      if (max === blue) hue = 60 * ((red - green) / delta + 4);
    }
    if (hue < 0) hue += 360;
    return `sepia(1) saturate(${Math.round(80 + saturation * 520)}%) hue-rotate(${Math.round(hue - 35)}deg) brightness(${(0.62 + lightness * 0.82).toFixed(2)})`;
  }

  function dressupColor(field, value) {
    const palettes = {
      top: { "日常上衣": "#ff7dcb", "粉色卫衣": "#ff9ed4", "学院衬衫": "#f7f0ff", "正式外套": "#3d2b54", "运动背心": "#40d78a", "梦幻斗篷": "#b89cff", "医生上衣": "#f3fbff" },
      bottom: { "短裙": "#7f55ff", "长裤": "#52406e", "短裤": "#6bbdf5", "运动裤": "#40d78a", "工装裤": "#8b704b", "蓬蓬裙": "#ffb7d7" },
      shoes: { "小皮鞋": "#3d2b54", "运动鞋": "#40d78a", "短靴": "#704124", "拖鞋": "#ffd84d", "云朵鞋": "#d7f9ef" },
    };
    return palettes[field]?.[value] || "#ff7dcb";
  }

  function accessorySymbol(value) {
    return ({ "星星发夹": "★", "帽子": "⌒", "兔耳": "⌇", "猫耳": "⌃", "触角": "⌁", "圆眼镜": "○○", "口罩": "▭", "腮红": " blush ", "泪痣": "·", "星星项链": "◇", "围巾": "≈", "领结": "∞", "紫色包": "▣", "徽章": "●", "手持花": "✿", "小礼物": "□" })[value] || "";
  }
  function expressionSymbol(value) { return ({ "泪滴": "💧", "脸红": "◔ ◔", "怒气": "※", "闪光": "✦", "爱心": "♥" })[value] || ""; }
  function effectSymbol(value) { return ({ "小星星": "✦  ✧", "小爱心": "♥  ♡", "闪光": "✧ ✦ ✧", "云朵": "☁", "庆祝彩带": "＊ ✦ ＊" })[value] || ""; }
  function bodyKey(value) { return ({ "小巧": "petite", "标准": "standard", "柔软": "soft", "高挑": "tall", "圆润": "round" })[value] || "standard"; }
  function hairKey(value) { return ({ "短发": "short", "中长发": "medium", "长发": "long", "卷发": "curly", "马尾": "ponytail", "丸子头": "bun", "寸头": "buzz", "光头": "bald", "帽子": "hat", "自定义": "custom" })[value] || "short"; }
  function expressionKey(value) { return ({ "平静": "calm", "开心": "happy", "难过": "sad", "哭泣": "cry", "疲惫": "tired", "生气": "angry", "温柔": "gentle", "兴奋": "excited", "庆祝": "celebrate", "严肃": "serious", "神秘": "mysterious" })[value] || "calm"; }
  function backdropKey(value) { return ({ "纯色": "plain", "奶油房间": "room", "紫色夜空": "night", "青色云朵": "cloud" })[value] || "plain"; }
  function className(value) { return String(value || "none").toLowerCase().replace(/[\s_/]+/g, "-").replace(/[^\w\u4e00-\u9fff-]/g, ""); }
  function safeId(value) { return String(value || "").replace(/[^\w-]/g, "").slice(0, 48); }
  function arrayValue(value) { return Array.isArray(value) ? value : []; }
  function objectValue(value) { return value && typeof value === "object" && !Array.isArray(value) ? value : {}; }
  function clamp(value, min, max, fallback) { const number = Number(value); return Number.isFinite(number) ? Math.min(max, Math.max(min, number)) : fallback; }
  function formatNumber(value) { return Number(value || 0).toFixed(3).replace(/\.?0+$/, ""); }
  function escapeHtml(value) { return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]); }

  window.RelationshipAvatarView = Object.freeze({ render });
})();

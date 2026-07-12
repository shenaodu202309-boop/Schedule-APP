const RELATIONSHIP_CARDS_KEY = "life-game-relationship-cards-v1";
const RELATIONSHIP_FILE_LIBRARY_KEY = "life-game-relationship-file-library-v1";
const RELATIONSHIP_REACTIONS_KEY = "life-game-relationship-reactions-v1";
const RELATIONSHIP_SELF_ONBOARDING_KEY = "life-game-relationship-self-onboarding-v1";
const LIFE_COMPANY_KEY = "life-game-company-v1";
const RELATIONSHIP_MAP_IMAGE_SRC = "../ChatGPT Image 2026年7月10日 17_07_08.png";
const relationshipReactionCost = 1;
const maxRelationshipLibraryFiles = 24;
const maxRelationshipLibraryFileSize = 900 * 1024;

const relationshipOptions = {
  relationshipTypes: ["家人", "朋友", "同学或同事", "刚认识的人", "恋人 / 前任", "合作伙伴", "网友", "幽灵", "其他"],
  meanings: ["支持我", "让我紧张", "让我困惑", "需要保持距离", "我想更了解", "我想修复关系", "重要但复杂"],
  ageGroups: ["儿童", "少年", "青年", "成年", "中年", "长辈", "不确定", "自定义"],
  genderExpressions: ["女性", "男性", "中性", "非二元", "不确定", "不填写", "自定义"],
  skinTones: ["浅色", "自然色", "暖棕色", "深棕色", "自定义色"],
  hairStyles: ["短发", "中长发", "长发", "卷发", "马尾", "丸子头", "寸头", "光头", "帽子", "自定义"],
  hairColors: ["黑色", "棕色", "金色", "粉色", "紫色", "蓝色", "灰白色", "自定义"],
  outfits: ["日常服", "学生服", "工作服", "运动服", "居家服", "正式服", "艺术家服", "医生 / 护士服", "工装", "自定义"],
  accessories: ["眼镜", "帽子", "耳机", "围巾", "包", "项链", "口罩", "无"],
  expressions: ["平静", "开心", "难过", "哭泣", "疲惫", "生气", "温柔", "兴奋", "庆祝", "严肃", "神秘"],
  statuses: ["稳定", "亲近", "疏远", "暧昧", "冲突中", "冷淡", "断联", "复杂"],
  boundaries: ["无需特别边界", "需要保持空间", "需要减少联系", "需要明确拒绝", "需要谨慎沟通", "暂时不想接触"],
  tags: ["照顾者", "依赖对象", "压力来源", "安全感来源", "竞争关系", "合作关系", "情感支持", "控制感", "亏欠感", "需要观察"],
  cardTags: ["温柔", "可靠", "会倾听", "暖心", "细心", "支持型", "有趣", "需要观察"],
  interactionFrequency: ["低", "中", "高"],
  boundaryFeel: ["很好", "良好", "需要空间", "紧张"],
};

const avatarPalette = {
  skinTone: {
    "浅色": "#ffd6bd",
    "自然色": "#efb07d",
    "暖棕色": "#b87950",
    "深棕色": "#73452f",
    "自定义色": "#d9a0ff",
  },
  hairColor: {
    "黑色": "#15111f",
    "棕色": "#704124",
    "金色": "#f3c95e",
    "粉色": "#ff7dcb",
    "紫色": "#7f55ff",
    "蓝色": "#4f90ff",
    "灰白色": "#d7d5e6",
    "自定义": "#40d78a",
  },
  outfit: {
    "日常服": "#ff7dcb",
    "学生服": "#6a2cff",
    "工作服": "#40d78a",
    "运动服": "#ffd84d",
    "居家服": "#b89cff",
    "正式服": "#120b1f",
    "艺术家服": "#ff8b5c",
    "医生 / 护士服": "#f3fbff",
    "工装": "#8b704b",
    "自定义": "#45d2ff",
  },
};

const expressionFaces = {
  "平静": { mouth: "neutral", brow: "soft" },
  "开心": { mouth: "smile", brow: "soft" },
  "难过": { mouth: "worry", brow: "sad" },
  "哭泣": { mouth: "worry", brow: "sad" },
  "疲惫": { mouth: "flat", brow: "sleepy" },
  "严肃": { mouth: "flat", brow: "sharp" },
  "生气": { mouth: "flat", brow: "angry" },
  "温柔": { mouth: "smile", brow: "soft" },
  "兴奋": { mouth: "smile", brow: "soft" },
  "庆祝": { mouth: "smile", brow: "soft" },
  "神秘": { mouth: "smirk", brow: "mystery" },
};

const RELATIONSHIP_MAP_SCENE_HOME = "home";
const RELATIONSHIP_MAP_SCENE_SHADOW = "shadow";
const RELATIONSHIP_MAP_SCENES = {
  [RELATIONSHIP_MAP_SCENE_HOME]: {
    key: RELATIONSHIP_MAP_SCENE_HOME,
    title: "人际小屋",
    label: "",
    country: "人际小屋",
    imageSrc: RELATIONSHIP_MAP_IMAGE_SRC,
    alt: "人际小屋关系地图",
    emptyText: "还没有角色被放到人际小屋。",
  },
  [RELATIONSHIP_MAP_SCENE_SHADOW]: {
    key: RELATIONSHIP_MAP_SCENE_SHADOW,
    title: "暗影荒原",
    label: "",
    country: "暗影荒原",
    imageSrc: "../ChatGPT Image 2026年7月10日 21_48_26.png",
    alt: "关系不好的人的暗影荒原场景",
    emptyText: "还没有角色被放到暗影荒原。",
  },
};

const relationshipMapPlaces = [
  { key: "world", country: "世界", city: "世界地图", label: "世界地图", x: 50, y: 50, zoom: 1 },
  { key: "china-beijing", country: "中国", city: "北京", label: "中国 · 北京", x: 74, y: 38, zoom: 2.35 },
  { key: "china-shanghai", country: "中国", city: "上海", label: "中国 · 上海", x: 77, y: 46, zoom: 2.45 },
  { key: "china-shenzhen", country: "中国", city: "深圳", label: "中国 · 深圳", x: 75, y: 55, zoom: 2.45 },
  { key: "china-chengdu", country: "中国", city: "成都", label: "中国 · 成都", x: 69, y: 48, zoom: 2.35 },
  { key: "uk-london", country: "英国", city: "伦敦", label: "英国 · 伦敦", x: 47, y: 34, zoom: 2.7 },
  { key: "japan-tokyo", country: "日本", city: "东京", label: "日本 · 东京", x: 84, y: 44, zoom: 2.65 },
  { key: "singapore", country: "新加坡", city: "新加坡", label: "新加坡", x: 73, y: 68, zoom: 2.9 },
  { key: "us-new-york", country: "美国", city: "纽约", label: "美国 · 纽约", x: 27, y: 39, zoom: 2.55 },
  { key: "us-los-angeles", country: "美国", city: "洛杉矶", label: "美国 · 洛杉矶", x: 15, y: 46, zoom: 2.45 },
  { key: "france-paris", country: "法国", city: "巴黎", label: "法国 · 巴黎", x: 49, y: 39, zoom: 2.75 },
  { key: "australia-sydney", country: "澳大利亚", city: "悉尼", label: "澳大利亚 · 悉尼", x: 84, y: 82, zoom: 2.45 },
];

const relationshipLibrarySections = [
  { key: "family", label: "家人", icon: "⌂", types: ["家人"] },
  { key: "friend", label: "朋友", icon: "✣", types: ["朋友"] },
  { key: "classmate-colleague", label: "同事/同学", icon: "▣", types: ["同学或同事", "同学", "同事", "合作伙伴"] },
  { key: "romance", label: "恋爱/亲密", icon: "♡", types: ["恋人 / 前任"] },
  { key: "ghost", label: "幽灵", icon: "☾", types: ["幽灵"] },
  { key: "acquaintance", label: "陌生人/其他", icon: "☁", types: ["刚认识的人", "网友", "其他"] },
];

const relationshipLibraryFilters = [
  { key: "all", label: "筛选" },
  { key: "important", label: "重要人物" },
  { key: "boundary", label: "需要边界" },
  { key: "stress", label: "高压力" },
];

const relationshipLibrarySorts = [
  { key: "default", label: "默认排序" },
  { key: "closeness", label: "亲密度排序" },
  { key: "updated", label: "最近更新" },
];
const ghostArMessages = [
  "墙角有低频波动，继续靠近。",
  "检测到一段微弱回应，试试引诱。",
  "附近温度读数异常，保持镜头稳定。",
  "灵场在移动，慢慢扫过地面和门边。",
  "出现短暂残影，准备记录。",
];

const dressupAssetItems = Array.isArray(window.RELATIONSHIP_DRESSUP_ASSETS?.items)
  ? window.RELATIONSHIP_DRESSUP_ASSETS.items
  : [];

const hiddenHairAssetValues = new Set([
  "hair_01_short_bob",
  "hair_02_long_straight",
  "hair_03_long_wavy",
  "hair_04_high_ponytail",
  "hair_05_twin_tails",
  "hair_06_bun",
  "hair_07_curly_bob",
  "hair_08_pixie_short",
  "hair_09_center_straight",
  "hair_10_center_slight_wavy",
  "hair_11_side_part_short",
  "hair_12_side_shaved_short",
  "hair_13_low_ponytail",
  "hair_14_braid",
  "hair_15_buzz_cut",
  "hair_16_bald",
  "monster_hair_green_sprout",
  "monster_hair_black_pink_streak",
  "monster_hair_white_purple",
  "monster_hair_yellow_clip",
]);

const hiddenAccessoryHeadAssetValues = new Set([
  "acc_headphones",
  "part_bunny_ears_white",
  "part_sheet_bunny_ears_white",
  "part_bunny_ears_purple",
  "part_sheet_bunny_ears_purple",
]);
const hiddenEmotionAuxAssetValues = new Set([
  "aux_blush_1",
  "aux_blush_2",
  "aux_blush_3",
  "aux_blue_drops",
  "aux_black_drops",
  "aux_stress_lines",
  "aux_zzz",
  "aux_sparkle_yellow",
  "aux_sparkle_purple",
  "aux_heart",
  "aux_star_yellow",
  "aux_star_purple",
  "aux_puff_cloud",
  "aux_angry_mark",
  "aux_exclamation",
  "aux_question",
  "aux_confetti",
  "aux_green_swirl",
]);
const hiddenAccessoryBodyAssetPattern = /(skull_green|green_skull|bandage|gem_purple|deco_bow)/;
const accessoryAssetFields = new Set(["accessoryHeadAsset", "accessoryFaceAsset", "accessoryNeckAsset", "accessoryBodyAsset"]);
const accessoryFieldSlots = {
  accessoryHeadAsset: "head",
  accessoryFaceAsset: "face",
  accessoryNeckAsset: "neck",
  accessoryBodyAsset: "body",
};
const nullableBaseAssetFields = new Set(["baseHead", "baseBodyPart"]);
const multiDressupAssetFields = new Set(["baseHead", "baseBodyPart", "creatureAsset", "outfitAsset", "bottomAsset", "hairAsset", "expressionAsset"]);
const maxDressupItemsPerField = 5;
const maxEmotionAuxLayers = 5;
const maxShapeLayers = 5;
const maxImportedImageLayers = 20;
const maxDressupImageFileSize = 900 * 1024;
const emotionAuxLayerPresets = [
  { x: -18, y: -10, scale: 0.72 },
  { x: 18, y: -10, scale: 0.72 },
  { x: -14, y: 10, scale: 0.7 },
  { x: 14, y: 10, scale: 0.7 },
  { x: 0, y: -20, scale: 0.68 },
];
const shapeToolOptions = [
  { value: "circle", label: "圆形", icon: "○" },
  { value: "square", label: "方块", icon: "□" },
  { value: "heart", label: "心形", icon: "♥" },
  { value: "pentagon", label: "5边形", icon: "⬟" },
  { value: "leafBrush", label: "柳叶笔", icon: "❧" },
];
const dressupBlendModes = [
  { value: "normal", label: "正常" },
  { value: "multiply", label: "正片叠底" },
  { value: "color-burn", label: "颜色加深" },
  { value: "screen", label: "滤色" },
  { value: "overlay", label: "叠加" },
  { value: "darken", label: "变暗" },
  { value: "lighten", label: "变亮" },
  { value: "soft-light", label: "柔光" },
  { value: "hard-light", label: "强光" },
];

const dressupCategories = [
  { key: "base", label: "基础体型", fields: ["baseHead", "baseBodyPart"] },
  { key: "species", label: "物种", fields: ["creatureAsset"] },
  { key: "hair", label: "发型", fields: ["hairAsset"] },
  { key: "expression", label: "表情", fields: ["expressionAsset", "emotionAuxAsset"] },
  { key: "top", label: "上装", fields: ["outfitAsset"] },
  { key: "bottom", label: "下装", fields: ["bottomAsset"] },
  { key: "accessory", label: "配饰", fields: ["accessoryHeadAsset", "accessoryFaceAsset", "accessoryNeckAsset", "accessoryBodyAsset"] },
  { key: "special", label: "特殊", fields: ["effect", "backdrop"] },
  { key: "shape", label: "形状", fields: ["shapeTool"] },
  { key: "custom", label: "自制", fields: ["customImageTool"] },
];

const dressupOptions = {
  baseBody: assetOptions("base_bodies"),
  baseHead: assetOptions("base_heads"),
  baseBodyPart: assetOptions("base_body_parts"),
  creatureAsset: assetOptions("creature_parts", (item) => !/(black_cat|black_cat_blob)/.test(item.value), true),
  species: [
    { value: "human", label: "人类", icon: "人" },
    { value: "white_bunny", label: "白兔", icon: "兔" },
    { value: "purple_bunny", label: "紫兔", icon: "兔" },
    { value: "green_blob", label: "绿噗噗", icon: "噗" },
    { value: "black_cat", label: "黑猫", icon: "猫" },
    { value: "cloud", label: "云团", icon: "云" },
    { value: "shadow", label: "暗影团", icon: "影" },
  ],
  bodyType: ["小巧", "标准", "柔软", "高挑", "圆润"].map((label) => ({ value: label, label })),
  ageGroup: relationshipOptions.ageGroups.map((label) => ({ value: label, label })),
  genderExpression: relationshipOptions.genderExpressions.map((label) => ({ value: label, label })),
  skinAsset: assetOptions("skin_tones", null, true),
  skinTone: relationshipOptions.skinTones.map((label) => ({ value: label, label })),
  hairAsset: assetOptions("hair_styles", (item) => !hiddenHairAssetValues.has(item.value), true),
  hairColorAsset: assetOptions("hair_colors", null, true),
  hairStyle: relationshipOptions.hairStyles.map((label) => ({ value: label, label })),
  hairColor: relationshipOptions.hairColors.map((label) => ({ value: label, label })),
  bangs: ["无刘海", "空气刘海", "齐刘海", "斜刘海"].map((label) => ({ value: label, label })),
  expressionAsset: assetOptions("expressions", (item) => item.value.startsWith("expr_sheet_"), true),
  emotionAuxAsset: assetOptions("emotion_aux", (item) => item.value.startsWith("aux_sheet_symbol_") && !hiddenEmotionAuxAssetValues.has(item.value), true),
  expression: relationshipOptions.expressions.map((label) => ({ value: label, label })),
  expressionEffect: ["无", "泪滴", "脸红", "怒气", "闪光", "爱心"].map((label) => ({ value: label, label })),
  outfitAsset: assetOptions("outfits", (item) => item.value.includes("_sheet_"), true),
  top: ["日常上衣", "粉色卫衣", "学院衬衫", "正式外套", "运动背心", "梦幻斗篷", "医生上衣"].map((label) => ({ value: label, label })),
  bottomAsset: assetOptions("bottoms", null, true),
  bottom: ["短裙", "长裤", "短裤", "运动裤", "工装裤", "蓬蓬裙"].map((label) => ({ value: label, label })),
  shoes: ["小皮鞋", "运动鞋", "短靴", "拖鞋", "云朵鞋"].map((label) => ({ value: label, label })),
  accessoryHeadAsset: assetOptions("accessories", (item) => /^(acc_(cap|beanie|bow|headphones|hairclip)|hat_|part_)/.test(item.value) && !hiddenAccessoryHeadAssetValues.has(item.value), true),
  accessoryFaceAsset: assetOptions("accessories", (item) => /(glasses|mask|deco_glasses|deco_bandage)/.test(item.value), true),
  accessoryNeckAsset: assetOptions("accessories", (item) => /(scarf|necklace|earrings)/.test(item.value) && item.value !== "acc_earrings_moon", true),
  accessoryBodyAsset: assetOptions("accessories", (item) => /(backpack|handbag|notebook|deco_|wing)/.test(item.value) && !hiddenAccessoryBodyAssetPattern.test(item.value), true),
  accessoryHead: ["无", "星星发夹", "帽子", "兔耳", "猫耳", "触角"].map((label) => ({ value: label, label })),
  accessoryFace: ["无", "圆眼镜", "口罩", "腮红", "泪痣"].map((label) => ({ value: label, label })),
  accessoryNeck: ["无", "星星项链", "围巾", "领结"].map((label) => ({ value: label, label })),
  accessoryBody: ["无", "紫色包", "徽章", "手持花", "小礼物"].map((label) => ({ value: label, label })),
  effect: ["无", "小星星", "小爱心", "闪光", "云朵", "庆祝彩带"].map((label) => ({ value: label, label })),
  backdrop: ["纯色", "奶油房间", "紫色夜空", "青色云朵"].map((label) => ({ value: label, label })),
  shapeTool: shapeToolOptions,
};

const dressupFieldLabels = {
  baseBody: "人形基础",
  baseHead: "头部基础",
  baseBodyPart: "身体基础",
  creatureAsset: "团子 / 物种",
  species: "物种",
  bodyType: "体型",
  ageGroup: "年龄",
  genderExpression: "性别倾向",
  skinAsset: "肤色色卡",
  skinTone: "肤色",
  hairAsset: "发型素材",
  hairColorAsset: "发色色卡",
  hairStyle: "发型",
  hairColor: "发色",
  bangs: "刘海",
  expressionAsset: "表情素材",
  emotionAuxAsset: "表情辅助",
  expression: "表情",
  expressionEffect: "情绪元素",
  outfitAsset: "上装素材",
  top: "上装",
  bottomAsset: "下装 / 鞋子素材",
  bottom: "下装",
  shoes: "鞋子",
  accessoryHeadAsset: "头部素材",
  accessoryFaceAsset: "脸部素材",
  accessoryNeckAsset: "颈部素材",
  accessoryBodyAsset: "身体素材",
  accessoryHead: "头饰",
  accessoryFace: "脸部",
  accessoryNeck: "颈部",
  accessoryBody: "身体",
  effect: "特效",
  backdrop: "背景",
  shapeTool: "形状工具",
  customImageTool: "自制元素",
};

const avatarFieldNames = [
  "baseBody",
  "baseHead",
  "baseBodyPart",
  "creatureAsset",
  "species",
  "bodyType",
  "ageGroup",
  "genderExpression",
  "skinAsset",
  "skinTone",
  "hairAsset",
  "hairColorAsset",
  "hairStyle",
  "hairColor",
  "bangs",
  "expressionAsset",
  "emotionAuxAsset",
  "expression",
  "expressionEffect",
  "outfitAsset",
  "top",
  "bottomAsset",
  "bottom",
  "shoes",
  "accessoryHeadAsset",
  "accessoryFaceAsset",
  "accessoryNeckAsset",
  "accessoryBodyAsset",
  "accessoryHead",
  "accessoryFace",
  "accessoryNeck",
  "accessoryBody",
  "effect",
  "backdrop",
  "outfit",
  "accessory",
];

const dressupLayerLabels = {
  base: "基础身体",
  "base-body": "身体基础",
  "base-head": "头部基础",
  creature: "团子 / 物种",
  outfit: "上装",
  bottom: "下装鞋子",
  hair: "发型",
  expression: "表情",
  "accessory-head": "头部配饰",
  "accessory-face": "脸部配饰",
  "accessory-neck": "颈部配饰",
  "accessory-body": "身体配饰",
  "emotion-aux": "情绪辅助",
  "custom-image": "自制图片",
};

const dressupDefaultLayerOrder = [
  "base-body",
  "base-head",
  "base",
  "creature",
  "outfit",
  "bottom",
  "hair",
  "expression",
  "accessory-head",
  "accessory-face",
  "accessory-neck",
  "accessory-body",
  "emotion-aux",
  "custom-image",
];

const dressupFieldLayerMap = {
  baseBody: "base",
  baseHead: "base-head",
  baseBodyPart: "base-body",
  creatureAsset: "creature",
  outfitAsset: "outfit",
  top: "outfit",
  bottomAsset: "bottom",
  bottom: "bottom",
  shoes: "bottom",
  hairAsset: "hair",
  hairColorAsset: "hair",
  hairStyle: "hair",
  hairColor: "hair",
  expressionAsset: "expression",
  expression: "expression",
  expressionEffect: "expression",
  accessoryHeadAsset: "accessory-head",
  accessoryFaceAsset: "accessory-face",
  accessoryNeckAsset: "accessory-neck",
  accessoryBodyAsset: "accessory-body",
  emotionAuxAsset: "emotion-aux",
};

const dressupLayerTransformLimits = {
  x: [-48, 48],
  y: [-48, 48],
  scale: [0.45, 1.8],
  rotate: [-180, 180],
};
const maxDressupUndoStates = 40;

const dom = {};
let relationshipCards = [];
let activeCardId = "";
let selectedMapPlaceKey = "world";
let selectedMapSceneKey = RELATIONSHIP_MAP_SCENE_HOME;
let pendingEditCardId = "";
let relationshipLongPressTimer = null;
let relationshipLongPressPoint = null;
let suppressRelationshipCardClick = false;
let relationshipLibraryFilter = "all";
let relationshipLibrarySort = "default";
let relationshipLibrarySearch = "";
let relationshipLibrarySidebarCollapsed = false;
let relationshipLibrarySearchTimer = null;
let relationshipLibrarySearchComposing = false;
let relationshipReactionBoardExpanded = false;
let relationshipMapDrag = null;
let relationshipReactionDrag = null;
let suppressRelationshipMapMarkerClick = false;
let activeDressupTab = "base";
let activeDressupLayer = "base-body";
let selectedDressupLayers = new Set(["base-body"]);
let isDressupMultiSelectMode = false;
let currentDressupAvatar = null;
let dressupUndoStack = [];
let dressupContinuousUndoKey = "";
let dressupContinuousUndoTimer = null;
let dressupPointerState = null;
let dressupPointerTimer = null;
let dressupDragGhost = null;
let suppressDressupChoiceClick = false;
let isDressupLayerSelectionVisible = true;
let isDressupColorPickMode = false;
let activeShapeTool = "circle";
let shapeDrawState = null;
let ghostArState = {
  stream: null,
  scanTimer: null,
  signal: 0,
  ghostVisible: false,
  xrSupported: false,
  xrSession: null,
  captured: 0,
};
let toastTimer = null;

document.addEventListener("DOMContentLoaded", () => {
  dom.pageHeader = document.querySelector(".relationship-page-header");
  dom.reactionToolbelt = document.querySelector("#relationshipReactionToolbelt");
  dom.mapShelf = document.querySelector(".relationship-map-shelf");
  dom.hero = document.querySelector(".relationship-hero");
  dom.actions = document.querySelector(".relationship-actions");
  dom.stats = document.querySelector("#relationshipStats");
  dom.grid = document.querySelector("#relationshipCardGrid");
  dom.mapPreview = document.querySelector("#relationshipMapPreview");
  dom.libraryPage = document.querySelector("#relationshipLibraryPage");
  dom.libraryGroups = document.querySelector("#relationshipLibraryGroups");
  dom.reactionLeaderboards = document.querySelector("#relationshipReactionLeaderboards");
  dom.editorDialog = document.querySelector("#relationshipEditorDialog");
  dom.editorForm = document.querySelector("#relationshipEditorForm");
  dom.detailDialog = document.querySelector("#relationshipDetailDialog");
  dom.detailBody = document.querySelector("#relationshipDetailBody");
  dom.avatarDialog = document.querySelector("#relationshipAvatarDialog");
  dom.avatarBody = document.querySelector("#relationshipAvatarBody");
  dom.mapDialog = document.querySelector("#relationshipMapDialog");
  dom.mapBody = document.querySelector("#relationshipMapBody");
  dom.fileLibraryDialog = document.querySelector("#relationshipFileLibraryDialog");
  dom.fileLibraryBody = document.querySelector("#relationshipFileLibraryBody");
  dom.fileLibraryInput = document.querySelector("#relationshipFileLibraryInput");
  dom.dressupImageInput = document.querySelector("#relationshipDressupImageInput");
  dom.editConfirmDialog = document.querySelector("#relationshipEditConfirmDialog");
  dom.editConfirmText = document.querySelector("#relationshipEditConfirmText");
  dom.importInput = document.querySelector("#relationshipImportInput");
  dom.ghostArGame = document.querySelector("#ghostArGame");
  dom.ghostArCamera = document.querySelector("#ghostArCamera");
  dom.ghostArFallback = document.querySelector("#ghostArFallback");
  dom.ghostArEntity = document.querySelector("#ghostArEntity");
  dom.ghostArSignal = document.querySelector("#ghostArSignal");
  dom.ghostArMeter = document.querySelector("#ghostArMeter");
  dom.ghostArStatus = document.querySelector("#ghostArStatus");
  dom.ghostArMode = document.querySelector("#ghostArMode");
  dom.toast = document.querySelector("#relationshipToast");

  relationshipCards = loadRelationshipCards();
  renderRelationshipHeaderToolbelt();
  bindRelationshipEvents();
  renderRelationshipCards();
  inviteSelfCardOnFirstVisit();
});

function renderRelationshipHeaderToolbelt() {
  if (!dom.reactionToolbelt) return;
  dom.reactionToolbelt.outerHTML = renderRelationshipReactionToolbelt("relationship-header-reaction-toolbelt", "relationshipReactionToolbelt");
  dom.reactionToolbelt = document.querySelector("#relationshipReactionToolbelt");
}

function bindRelationshipEvents() {
  document.addEventListener("click", handleRelationshipClick);
  document.addEventListener("keydown", handleRelationshipKeydown);
  document.addEventListener("input", handleRelationshipInput);
  document.addEventListener("compositionstart", handleRelationshipCompositionStart);
  document.addEventListener("compositionend", handleRelationshipCompositionEnd);
  dom.editorForm?.addEventListener("submit", handleRelationshipFormSubmit);
  dom.editorForm?.addEventListener("input", handleEditorPreviewInput);
  dom.editorForm?.addEventListener("change", handleEditorPreviewInput);
  dom.importInput?.addEventListener("change", handleImportFile);
  dom.fileLibraryInput?.addEventListener("change", handleRelationshipFileLibraryImport);
  dom.dressupImageInput?.addEventListener("change", handleDressupImageImport);
  document.addEventListener("change", handleRelationshipChange);
  document.addEventListener("pointerdown", startRelationshipReactionDrag);
  document.addEventListener("pointermove", moveRelationshipReactionDrag);
  document.addEventListener("pointerup", endRelationshipReactionDrag);
  document.addEventListener("pointercancel", cancelRelationshipReactionDrag);
  document.addEventListener("pointerdown", startRelationshipCardLongPress);
  document.addEventListener("pointermove", moveRelationshipCardLongPress);
  document.addEventListener("pointerup", cancelRelationshipCardLongPress);
  document.addEventListener("pointercancel", cancelRelationshipCardLongPress);
  document.addEventListener("pointerdown", startRelationshipMapMarkerDrag);
  document.addEventListener("pointermove", moveRelationshipMapMarkerDrag);
  document.addEventListener("pointerup", endRelationshipMapMarkerDrag);
  document.addEventListener("pointercancel", endRelationshipMapMarkerDrag);
  document.addEventListener("pointerdown", startDressupLayerPointer);
  document.addEventListener("pointermove", moveDressupLayerPointer);
  document.addEventListener("pointerup", endDressupLayerPointer);
  document.addEventListener("pointercancel", endDressupLayerPointer);
  document.addEventListener("pointerdown", startDressupShapeDraw);
  document.addEventListener("pointermove", moveDressupShapeDraw);
  document.addEventListener("pointerup", endDressupShapeDraw);
  document.addEventListener("pointercancel", endDressupShapeDraw);
  window.addEventListener("pagehide", closeGhostArGame);
  dom.editorDialog?.addEventListener("click", closeDialogOnBackdrop);
  dom.detailDialog?.addEventListener("click", closeDialogOnBackdrop);
  dom.avatarDialog?.addEventListener("click", closeDialogOnBackdrop);
  dom.mapDialog?.addEventListener("click", closeDialogOnBackdrop);
  dom.fileLibraryDialog?.addEventListener("click", closeDialogOnBackdrop);
  dom.editConfirmDialog?.addEventListener("click", closeDialogOnBackdrop);
}

function loadRelationshipCards() {
  try {
    const raw = localStorage.getItem(RELATIONSHIP_CARDS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(normalizeRelationshipCard).filter(Boolean);
  } catch (error) {
    console.warn("Failed to load relationship cards.", error);
    return [];
  }
}

function saveRelationshipCards(cards = relationshipCards) {
  localStorage.setItem(RELATIONSHIP_CARDS_KEY, JSON.stringify(cards));
}

function createRelationshipCard(patch = {}) {
  const now = new Date().toISOString();
  const card = deepMerge(createDefaultRelationshipCard(), patch);
  card.id = card.id || createId();
  card.createdAt = card.createdAt || now;
  card.updatedAt = now;
  const normalized = normalizeRelationshipCard(card);
  relationshipCards.unshift(normalized);
  saveRelationshipCards();
  renderRelationshipCards();
  return normalized;
}

function updateRelationshipCard(id, patch) {
  const index = relationshipCards.findIndex((card) => card.id === id);
  if (index < 0) return null;
  const updated = normalizeRelationshipCard(deepMerge(relationshipCards[index], patch));
  updated.updatedAt = new Date().toISOString();
  relationshipCards[index] = updated;
  saveRelationshipCards();
  renderRelationshipCards();
  return updated;
}

function deleteRelationshipCard(id) {
  relationshipCards = relationshipCards.filter((card) => card.id !== id);
  saveRelationshipCards();
  renderRelationshipCards();
}

function renderRelationshipCards() {
  if (dom.grid) {
    dom.grid.innerHTML = "";
    dom.grid.hidden = true;
  }
  if (dom.stats) dom.stats.innerHTML = "";
  renderRelationshipMapPreview();
  renderRelationshipLibrary();
  renderRelationshipReactionLeaderboards();
}

function renderRelationshipLibrary() {
  if (!dom.libraryGroups) return;
  const libraryCards = getRelationshipLibraryCards();
  const grouped = relationshipLibrarySections.map((section) => {
    const cards = libraryCards.filter((card) => relationshipLibraryCategory(card) === section.key);
    return { ...section, cards };
  });
  const filterLabel = relationshipLibraryFilters.find((item) => item.key === relationshipLibraryFilter)?.label || "筛选";
  const sortLabel = relationshipLibrarySorts.find((item) => item.key === relationshipLibrarySort)?.label || "默认排序";
  dom.libraryGroups.innerHTML = `
    <div class="relationship-library-topbar">
      <button class="relationship-library-return-button" type="button" data-action="close-library">返回</button>
      <label class="relationship-library-search-bubble" aria-label="搜索角色名字">
        <span aria-hidden="true">⌕</span>
        <input id="relationshipLibrarySearchInput" type="search" value="${escapeHtml(relationshipLibrarySearch)}" placeholder="搜索" autocomplete="off" />
      </label>
      <button type="button" data-action="toggle-library-filter">▽ ${escapeHtml(filterLabel)}</button>
      <button type="button" data-action="toggle-library-sort">↕ ${escapeHtml(sortLabel)}</button>
    </div>
    ${renderRelationshipLibrarySelfButton()}
    <div class="relationship-library-workbench ${relationshipLibrarySidebarCollapsed ? "is-sidebar-collapsed" : ""}">
      <nav class="relationship-library-sidebar" aria-label="关系分类">
        <button class="relationship-library-sidebar-toggle" type="button" data-action="toggle-library-sidebar" aria-label="${relationshipLibrarySidebarCollapsed ? "展开分类栏" : "收起分类栏"}">
          ${relationshipLibrarySidebarCollapsed ? "›" : "‹"}
        </button>
        ${grouped.map(renderRelationshipLibraryNavItem).join("")}
        <div class="relationship-library-book-stack" aria-hidden="true">
          <span></span><span></span><span></span><i></i>
        </div>
      </nav>
      <div class="relationship-library-shelves">
        ${grouped.map(renderRelationshipLibrarySection).join("")}
      </div>
    </div>
  `;
}

function renderRelationshipLibrarySelfButton() {
  const selfCard = getSelfRelationshipCard();
  const action = selfCard ? "open-card" : "create-self-card";
  const idAttr = selfCard ? `data-id="${escapeHtml(selfCard.id)}" data-card-id="${escapeHtml(selfCard.id)}" data-reaction-target-id="${escapeHtml(selfCard.id)}"` : "";
  return `
    <button class="relationship-library-self-button" type="button" data-action="${action}" ${idAttr}>
      <span class="relationship-library-self-avatar">
        ${selfCard ? renderAvatarPreview(selfCard, "library") : "<b>我</b>"}
      </span>
      <strong>${escapeHtml(selfCard ? displayName(selfCard) : "玩家自己")}</strong>
      <small>${selfCard ? "查看自己的角色卡" : "创建第一张自己的角色卡"}</small>
    </button>
  `;
}

function renderRelationshipLibraryNavItem(section) {
  return `
    <button class="relationship-library-nav-item" type="button" data-action="jump-library-section" data-section="${escapeHtml(section.key)}">
      <span>${escapeHtml(section.icon)}</span>
      <b>${escapeHtml(section.label)}</b>
      <i>${section.cards.length}</i>
    </button>
  `;
}

function renderRelationshipLibrarySection(section) {
  return `
    <section class="relationship-library-section relationship-library-${section.key}" data-library-section="${escapeHtml(section.key)}">
      <div class="relationship-library-title">
        <h3>${escapeHtml(section.label)}</h3>
        <span>${section.cards.length}</span>
      </div>
      <div class="relationship-library-list">
        ${section.cards.length
          ? section.cards.map(renderRelationshipLibraryCard).join("")
          : `<p class="relationship-library-empty">还没有这一类角色。</p>`}
      </div>
    </section>
  `;
}

function renderRelationshipLibraryCard(card) {
  const tags = card.profile.tags.slice(0, 2);
  const stats = normalizeRelationshipReactionStats(card.reactionStats);
  return `
    <article class="relationship-library-card" role="button" tabindex="0" data-action="open-card" data-id="${escapeHtml(card.id)}" data-card-id="${escapeHtml(card.id)}">
      ${renderAvatarPreview(card, "library")}
      <h4>${escapeHtml(displayName(card))}</h4>
      <p>${escapeHtml(card.basic.relationshipType)}</p>
      <strong>${card.relationship.closeness}</strong>
      <div class="relationship-library-reactions"><span>🌸 ${stats.flowers}</span><span>🥚 ${stats.eggs}</span></div>
      <div class="relationship-library-tags">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    </article>
  `;
}

function relationshipLibraryCategory(card) {
  const type = card.basic.relationshipType;
  const section = relationshipLibrarySections.find((item) => item.types.includes(type));
  return section?.key || "acquaintance";
}

function getRelationshipLibraryCards() {
  const filtered = relationshipCards.filter((card) => {
    const keyword = relationshipLibrarySearch.trim().toLowerCase();
    if (keyword && !displayName(card).toLowerCase().includes(keyword)) return false;
    if (relationshipLibraryFilter === "important") return card.basic.isImportant;
    if (relationshipLibraryFilter === "boundary") return card.relationship.boundary !== "无需特别边界" || card.profile.boundaryFeel === "需要空间" || card.profile.boundaryFeel === "紧张";
    if (relationshipLibraryFilter === "stress") return card.relationship.stress >= 75;
    return true;
  });
  return [...filtered].sort((a, b) => {
    if (relationshipLibrarySort === "closeness") return b.relationship.closeness - a.relationship.closeness;
    if (relationshipLibrarySort === "updated") return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    return relationshipCards.indexOf(a) - relationshipCards.indexOf(b);
  });
}

function cycleRelationshipLibraryFilter() {
  const index = relationshipLibraryFilters.findIndex((item) => item.key === relationshipLibraryFilter);
  relationshipLibraryFilter = relationshipLibraryFilters[(index + 1) % relationshipLibraryFilters.length].key;
  renderRelationshipLibrary();
}

function cycleRelationshipLibrarySort() {
  const index = relationshipLibrarySorts.findIndex((item) => item.key === relationshipLibrarySort);
  relationshipLibrarySort = relationshipLibrarySorts[(index + 1) % relationshipLibrarySorts.length].key;
  renderRelationshipLibrary();
}

function searchRelationshipLibrary() {
  dom.libraryGroups?.querySelector("#relationshipLibrarySearchInput")?.focus();
}

function handleRelationshipInput(event) {
  if (event.target?.matches("[data-dressup-scale]")) {
    updateDressupLayerScale(event.target.dataset.layer || activeDressupLayer, event.target.value);
    return;
  }
  if (event.target?.matches("[data-dressup-rotate]")) {
    updateDressupLayerRotate(event.target.dataset.layer || activeDressupLayer, event.target.value);
    return;
  }
  if (event.target?.matches("[data-dressup-color]")) {
    updateDressupLayerColor(event.target.dataset.layer || activeDressupLayer, event.target.value);
    return;
  }
  if (event.target?.id === "relationshipMapNameInput") {
    renderRelationshipMapSearchResultsIntoDom(event.target.value);
    return;
  }
  if (event.target?.id !== "relationshipLibrarySearchInput") return;
  relationshipLibrarySearch = event.target.value;
  if (relationshipLibrarySearchComposing) return;
  scheduleRelationshipLibrarySearchRender();
}

function handleRelationshipCompositionStart(event) {
  if (event.target?.id === "relationshipLibrarySearchInput") relationshipLibrarySearchComposing = true;
}

function handleRelationshipCompositionEnd(event) {
  if (event.target?.id !== "relationshipLibrarySearchInput") return;
  relationshipLibrarySearchComposing = false;
  relationshipLibrarySearch = event.target.value;
  scheduleRelationshipLibrarySearchRender();
}

function scheduleRelationshipLibrarySearchRender() {
  window.clearTimeout(relationshipLibrarySearchTimer);
  relationshipLibrarySearchTimer = window.setTimeout(() => {
    renderRelationshipLibrary();
    requestAnimationFrame(() => {
      const input = dom.libraryGroups?.querySelector("#relationshipLibrarySearchInput");
      if (!input) return;
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    });
  }, 160);
}

function toggleRelationshipLibrarySidebar() {
  relationshipLibrarySidebarCollapsed = !relationshipLibrarySidebarCollapsed;
  renderRelationshipLibrary();
}

function jumpRelationshipLibrarySection(sectionKey) {
  const safeKey = String(sectionKey || "").replace(/[^a-z0-9-]/gi, "");
  const section = dom.libraryGroups?.querySelector(`[data-library-section="${safeKey}"]`);
  section?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function openRelationshipLibrary() {
  renderRelationshipLibrary();
  toggleRelationshipLibrary(true);
}

function closeRelationshipLibrary() {
  toggleRelationshipLibrary(false);
}

async function openGhostArGame() {
  if (!dom.ghostArGame) return;
  dom.editorDialog?.close();
  dom.detailDialog?.close();
  dom.avatarDialog?.close();
  dom.mapDialog?.close();
  dom.ghostArGame.hidden = false;
  document.body.classList.add("is-ghost-ar-open");
  ghostArState.signal = 12;
  ghostArState.ghostVisible = false;
  updateGhostArHud("正在校准摄像头和灵场雷达。");
  await detectGhostArSupport();
  await startGhostXrSession();
  await startGhostCamera();
  startGhostScan();
}

function closeGhostArGame() {
  stopGhostScan();
  if (ghostArState.xrSession) {
    ghostArState.xrSession.end?.();
    ghostArState.xrSession = null;
  }
  if (ghostArState.stream) {
    ghostArState.stream.getTracks().forEach((track) => track.stop());
    ghostArState.stream = null;
  }
  if (dom.ghostArCamera) dom.ghostArCamera.srcObject = null;
  if (dom.ghostArGame) dom.ghostArGame.hidden = true;
  document.body.classList.remove("is-ghost-ar-open");
}

async function detectGhostArSupport() {
  ghostArState.xrSupported = false;
  try {
    ghostArState.xrSupported = Boolean(navigator.xr && await navigator.xr.isSessionSupported("immersive-ar"));
  } catch {
    ghostArState.xrSupported = false;
  }
  if (dom.ghostArMode) {
    dom.ghostArMode.textContent = ghostArState.xrSupported
      ? "ARCore / WebXR 可用：已进入 AR 调查模式"
      : "当前环境使用相机取景与模拟 AR 雷达";
  }
}

async function startGhostXrSession() {
  if (!ghostArState.xrSupported || !navigator.xr?.requestSession) return;
  try {
    ghostArState.xrSession = await navigator.xr.requestSession("immersive-ar", {
      optionalFeatures: ["local", "local-floor", "dom-overlay", "hit-test"],
      domOverlay: dom.ghostArGame ? { root: dom.ghostArGame } : undefined,
    });
    ghostArState.xrSession.addEventListener?.("end", () => {
      ghostArState.xrSession = null;
      if (dom.ghostArMode) dom.ghostArMode.textContent = "ARCore 会话已结束，保留相机模拟 AR";
    });
    if (dom.ghostArMode) dom.ghostArMode.textContent = "ARCore / WebXR 会话已启动";
  } catch {
    if (dom.ghostArMode) dom.ghostArMode.textContent = "ARCore 未授权，已切换为相机模拟 AR";
  }
}

async function startGhostCamera() {
  if (!dom.ghostArCamera || !navigator.mediaDevices?.getUserMedia) {
    updateGhostArHud("无法调用摄像头，已切换为模拟灵异视野。");
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false,
    });
    ghostArState.stream = stream;
    dom.ghostArCamera.srcObject = stream;
    updateGhostArHud(ghostArState.xrSupported ? "ARCore 环境已就绪，开始调查。" : "相机已启动，使用模拟 AR 调查。");
  } catch {
    updateGhostArHud("摄像头未授权，已切换为模拟灵异视野。");
  }
}

function startGhostScan() {
  stopGhostScan();
  ghostArState.signal = Math.max(ghostArState.signal, 18);
  updateGhostArHud("正在扫描灵异活动，缓慢移动手机。");
  ghostArState.scanTimer = window.setInterval(() => {
    const drift = Math.round(4 + Math.random() * 13);
    ghostArState.signal = clamp(ghostArState.signal + drift, 0, 100);
    if (!ghostArState.ghostVisible && ghostArState.signal >= 72) revealGhost();
    const message = ghostArMessages[Math.floor(Math.random() * ghostArMessages.length)];
    updateGhostArHud(ghostArState.ghostVisible ? "发现幽灵朋友，点击画面中的影子捕捉。" : message);
  }, 900);
}

function stopGhostScan() {
  window.clearInterval(ghostArState.scanTimer);
  ghostArState.scanTimer = null;
}

function lureGhost() {
  ghostArState.signal = clamp(ghostArState.signal + 24, 0, 100);
  updateGhostArHud("已释放引诱信号，附近幽灵正在靠近。");
  if (ghostArState.signal >= 58) revealGhost();
}

function revealGhost() {
  ghostArState.ghostVisible = true;
  stopGhostScan();
  if (!dom.ghostArEntity) return;
  dom.ghostArEntity.hidden = false;
  dom.ghostArEntity.style.left = `${18 + Math.random() * 58}%`;
  dom.ghostArEntity.style.top = `${28 + Math.random() * 32}%`;
  updateGhostArHud("幽灵出现了，点击它完成捕捉。");
}

function recordGhostEvidence() {
  ghostArState.signal = clamp(ghostArState.signal + 9, 0, 100);
  updateGhostArHud("已记录一条灵异证据：残影、低频噪声、冷点。");
}

function captureGhostFriend() {
  if (!ghostArState.ghostVisible) {
    lureGhost();
    return;
  }
  ghostArState.captured += 1;
  const name = `幽灵朋友 ${ghostArState.captured}`;
  const card = createRelationshipCard({
    basic: {
      name,
      relationshipType: "幽灵",
      meaning: "我想更了解",
      note: "通过 AR 灵异调查捕捉到的幽灵朋友。",
    },
    relationship: {
      closeness: 35,
      trust: 28,
      stress: 42,
      status: "神秘",
      boundary: "需要谨慎沟通",
      tags: ["需要观察", "安全感来源"],
    },
    profile: {
      age: "未知",
      gender: "不填写",
      tags: ["神秘", "需要观察"],
      recentInteraction: "在现实地点调查灵异活动时被记录下来。",
      keywords: ["AR", "幽灵", "灵异活动"],
    },
    avatar: {
      species: "cloud",
      bodyType: "圆润",
      hairStyle: "光头",
      expression: "神秘",
      top: "梦幻斗篷",
      bottom: "蓬蓬裙",
      shoes: "云朵鞋",
      effect: "闪光",
      backdrop: "紫色夜空",
    },
  });
  if (dom.ghostArEntity) dom.ghostArEntity.hidden = true;
  ghostArState.ghostVisible = false;
  ghostArState.signal = 8;
  updateGhostArHud(`${displayName(card)} 已加入角色关系卡库。`);
  showToast("幽灵朋友已记录。");
}

function updateGhostArHud(message) {
  const signal = clamp(Math.round(ghostArState.signal || 0), 0, 100);
  if (dom.ghostArSignal) dom.ghostArSignal.textContent = `${String(signal).padStart(2, "0")}%`;
  if (dom.ghostArMeter) dom.ghostArMeter.style.width = `${signal}%`;
  if (dom.ghostArStatus) dom.ghostArStatus.textContent = message || "正在调查。";
}

function loadRelationshipFileLibrary() {
  try {
    const raw = localStorage.getItem(RELATIONSHIP_FILE_LIBRARY_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.map(normalizeRelationshipLibraryFile).filter(Boolean).slice(0, maxRelationshipLibraryFiles);
  } catch {
    return [];
  }
}

function saveRelationshipFileLibrary(files) {
  localStorage.setItem(RELATIONSHIP_FILE_LIBRARY_KEY, JSON.stringify(files.slice(0, maxRelationshipLibraryFiles)));
}

function normalizeRelationshipLibraryFile(file) {
  if (!file || typeof file !== "object" || Array.isArray(file)) return null;
  const name = clean(file.name, "未命名文件").slice(0, 80);
  const dataUrl = String(file.dataUrl || "");
  if (!dataUrl.startsWith("data:")) return null;
  return {
    id: clean(file.id, createId()),
    name,
    type: clean(file.type, "文件").slice(0, 80),
    size: Math.max(0, Math.floor(Number(file.size || 0))),
    dataUrl,
    addedAt: clean(file.addedAt, new Date().toISOString()),
  };
}

function openRelationshipFileLibrary() {
  renderRelationshipFileLibrary();
  if (typeof dom.fileLibraryDialog?.showModal === "function") {
    if (!dom.fileLibraryDialog.open) dom.fileLibraryDialog.showModal();
  } else {
    dom.fileLibraryDialog?.setAttribute("open", "");
  }
}

function renderRelationshipFileLibrary() {
  if (!dom.fileLibraryBody) return;
  const files = loadRelationshipFileLibrary();
  dom.fileLibraryBody.innerHTML = `
    <header class="relationship-file-library-head">
      <div>
        <p class="eyebrow">Relationship Library</p>
        <h2>关系图书馆</h2>
        <span>存放和导入与关系有关的文件。</span>
      </div>
      <button class="ghost-button" type="button" data-action="close-file-library">关闭</button>
    </header>
    <button class="relationship-file-import-card" type="button" data-action="trigger-file-library-import">
      <span>＋</span>
      <b>导入文件</b>
      <small>最多 ${maxRelationshipLibraryFiles} 个，单个不超过 ${formatRelationshipFileSize(maxRelationshipLibraryFileSize)}</small>
    </button>
    <section class="relationship-file-library-list">
      ${files.length ? files.map(renderRelationshipLibraryFile).join("") : `<p>还没有文件。点击上方按钮导入。</p>`}
    </section>
  `;
}

function renderRelationshipLibraryFile(file) {
  return `
    <article class="relationship-file-library-item">
      <span>${fileIconForType(file.type)}</span>
      <div>
        <b>${escapeHtml(file.name)}</b>
        <small>${escapeHtml(file.type || "文件")} · ${formatRelationshipFileSize(file.size)}</small>
      </div>
      <a class="ghost-button" href="${escapeHtml(file.dataUrl)}" download="${escapeHtml(file.name)}">打开</a>
      <button class="ghost-button danger-button" type="button" data-action="delete-file-library-item" data-id="${escapeHtml(file.id)}">删除</button>
    </article>
  `;
}

function importRelationshipLibraryFiles(files) {
  const current = loadRelationshipFileLibrary();
  const remaining = Math.max(0, maxRelationshipLibraryFiles - current.length);
  const accepted = files.slice(0, remaining).filter((file) => {
    if (file.size > maxRelationshipLibraryFileSize) {
      showToast(`${file.name} 太大，暂时没有导入。`);
      return false;
    }
    return true;
  });
  if (!accepted.length) {
    if (!remaining) showToast("关系图书馆已经满了。");
    return;
  }
  let loaded = 0;
  const imported = [];
  accepted.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      imported.push({
        id: createId(),
        name: file.name,
        type: file.type || "文件",
        size: file.size,
        dataUrl: String(reader.result || ""),
        addedAt: new Date().toISOString(),
      });
      loaded += 1;
      if (loaded !== accepted.length) return;
      saveRelationshipFileLibrary([...imported, ...current]);
      renderRelationshipFileLibrary();
      showToast(`已导入 ${imported.length} 个文件。`);
    };
    reader.readAsDataURL(file);
  });
}

function deleteRelationshipFileLibraryItem(id) {
  const files = loadRelationshipFileLibrary();
  const next = files.filter((file) => file.id !== id);
  if (next.length === files.length) return;
  saveRelationshipFileLibrary(next);
  renderRelationshipFileLibrary();
  showToast("文件已删除。");
}

function fileIconForType(type) {
  const value = String(type || "");
  if (value.startsWith("image/")) return "图";
  if (value.includes("pdf")) return "PDF";
  if (value.includes("json")) return "{}";
  if (value.includes("text")) return "文";
  return "档";
}

function formatRelationshipFileSize(size) {
  const bytes = Math.max(0, Number(size) || 0);
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)}KB`;
  return `${Math.round(bytes)}B`;
}

function toggleRelationshipLibrary(isOpen) {
  [dom.pageHeader, dom.mapShelf, dom.actions, dom.reactionLeaderboards].forEach((element) => {
    if (element) element.hidden = isOpen;
  });
  if (dom.grid) dom.grid.hidden = true;
  if (dom.libraryPage) dom.libraryPage.hidden = !isOpen;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderRelationshipCardDetail(id) {
  const card = relationshipCards.find((item) => item.id === id);
  if (!card || !dom.detailBody) return;
  activeCardId = id;
  dom.detailBody.innerHTML = `
    ${renderRelationshipProfileCard(card, { mode: "detail" })}
    <div class="relationship-dialog-actions">
      <button class="danger-button" type="button" data-action="delete-card" data-id="${escapeHtml(card.id)}">删除角色</button>
      <button class="ghost-button" type="button" data-action="close-detail">返回列表</button>
    </div>
  `;
  openDialog(dom.detailDialog);
}

function openCharacterCreator(cardId = "", preset = null) {
  const editing = relationshipCards.find((card) => card.id === cardId);
  activeCardId = editing?.id || "";
  const card = editing || createDefaultRelationshipCard(preset || {});
  if (!dom.editorForm) return;
  dom.editorForm.innerHTML = renderEditorForm(card, Boolean(editing));
  updateEditorPreview();
  openDialog(dom.editorDialog);
}

function openSelfCharacterCreator() {
  const existing = getSelfRelationshipCard();
  if (existing) {
    renderRelationshipCardDetail(existing.id);
    return;
  }
  openCharacterCreator("", {
    basic: {
      name: "玩家自己",
      realName: "玩家自己",
      relationshipType: "其他",
      meaning: "支持我",
      isImportant: true,
    },
    relationship: {
      closeness: 100,
      trust: 100,
      stress: 20,
    },
    profile: {
      recentInteraction: "这是我在人际小屋里的第一张角色卡。",
      keywords: ["玩家自己", "主角", "需要照顾"],
    },
  });
}

function getSelfRelationshipCard() {
  return relationshipCards.find((card) => card.basic?.name === "玩家自己" || card.basic?.realName === "玩家自己") || null;
}

function inviteSelfCardOnFirstVisit() {
  if (relationshipCards.length || getSelfRelationshipCard()) return;
  if (localStorage.getItem(RELATIONSHIP_SELF_ONBOARDING_KEY)) return;
  localStorage.setItem(RELATIONSHIP_SELF_ONBOARDING_KEY, "shown");
  window.setTimeout(() => {
    showToast("欢迎来到人际小屋，先创建「玩家自己」这张角色卡。");
    openSelfCharacterCreator();
  }, 450);
}

function closeCharacterCreator() {
  dom.editorDialog?.close();
  activeCardId = "";
}

function exportRelationshipCards() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    relationshipCards,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `character-cards-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("角色卡 JSON 已导出。");
}

function importRelationshipCards(json) {
  let parsed;
  try {
    parsed = typeof json === "string" ? JSON.parse(json) : json;
  } catch (error) {
    showToast("JSON 格式不正确，导入失败。");
    return false;
  }
  const imported = Array.isArray(parsed) ? parsed : parsed?.relationshipCards;
  if (!Array.isArray(imported)) {
    showToast("没有找到 relationshipCards 数据。");
    return false;
  }
  const normalized = imported.map(normalizeRelationshipCard).filter(Boolean);
  if (!normalized.length) {
    showToast("没有可导入的角色卡。");
    return false;
  }
  const replace = relationshipCards.length
    ? window.confirm("导入会读取新的角色卡。选择“确定”覆盖当前数据，选择“取消”则合并导入。")
    : true;
  relationshipCards = replace ? normalized : mergeRelationshipCards(relationshipCards, normalized);
  saveRelationshipCards();
  renderRelationshipCards();
  showToast(replace ? "已覆盖导入角色卡。" : "已合并导入角色卡。");
  return true;
}

function handleRelationshipClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (action === "create-card") openCharacterCreator();
  if (action === "create-self-card") openSelfCharacterCreator();
  if (action === "open-guide-pool") showToast("攻略池暂时还没有内容。");
  if (action === "open-virtual-story") showToast("虚拟故事暂时还没有内容。");
  if (action === "open-card") {
    if (suppressRelationshipCardClick) {
      suppressRelationshipCardClick = false;
      return;
    }
    renderRelationshipCardDetail(button.dataset.id);
  }
  if (action === "edit-card") {
    dom.detailDialog?.close();
    openCharacterCreator(button.dataset.id || activeCardId);
  }
  if (action === "delete-card") {
    const id = button.dataset.id || activeCardId;
    const card = relationshipCards.find((item) => item.id === id);
    if (card && window.confirm(`确定删除「${displayName(card)}」吗？`)) {
      deleteRelationshipCard(id);
      dom.detailDialog?.close();
      closeCharacterCreator();
      showToast("已删除关系卡。");
    }
  }
  if (action === "give-flower") giveFlowerToCharacter(button.dataset.id || activeCardId);
  if (action === "throw-egg") throwEggAtCharacter(button.dataset.id || activeCardId);
  if (action === "close-editor") closeCharacterCreator();
  if (action === "close-detail") dom.detailDialog?.close();
  if (action === "open-avatar-builder") openAvatarBuilder();
  if (action === "close-avatar-builder") dom.avatarDialog?.close();
  if (action === "open-map") openRelationshipMap(RELATIONSHIP_MAP_SCENE_HOME);
  if (action === "open-shadow-map") openRelationshipMap(RELATIONSHIP_MAP_SCENE_SHADOW);
  if (action === "open-library") {
    dom.editorDialog?.close();
    dom.detailDialog?.close();
    openRelationshipLibrary();
  }
  if (action === "open-ghost-ar") openGhostArGame();
  if (action === "close-ghost-ar") closeGhostArGame();
  if (action === "start-ghost-scan") startGhostScan();
  if (action === "lure-ghost") lureGhost();
  if (action === "record-ghost") recordGhostEvidence();
  if (action === "capture-ghost") captureGhostFriend();
  if (action === "open-file-library") openRelationshipFileLibrary();
  if (action === "close-file-library") dom.fileLibraryDialog?.close();
  if (action === "trigger-file-library-import") dom.fileLibraryInput?.click();
  if (action === "delete-file-library-item") deleteRelationshipFileLibraryItem(button.dataset.id || "");
  if (action === "close-library") closeRelationshipLibrary();
  if (action === "search-library") searchRelationshipLibrary();
  if (action === "toggle-library-filter") cycleRelationshipLibraryFilter();
  if (action === "toggle-library-sort") cycleRelationshipLibrarySort();
  if (action === "toggle-library-sidebar") toggleRelationshipLibrarySidebar();
  if (action === "jump-library-section") jumpRelationshipLibrarySection(button.dataset.section || "");
  if (action === "toggle-reaction-board") toggleRelationshipReactionBoard();
  if (action === "scroll-atlas") scrollToRelationshipAtlas();
  if (action === "close-map") dom.mapDialog?.close();
  if (action === "map-switch-scene") {
    selectedMapSceneKey = relationshipMapScene(button.dataset.scene)?.key || RELATIONSHIP_MAP_SCENE_HOME;
    renderRelationshipMap();
  }
  if (action === "map-place-card") placeCardOnMap();
  if (action === "map-pick-card") {
    const card = relationshipCards.find((item) => item.id === button.dataset.id);
    const input = dom.mapBody?.querySelector("#relationshipMapNameInput");
    if (card && input) input.value = displayName(card).replace(" · 私密", "");
    placeCardOnMap(button.dataset.id || "");
  }
  if (action === "map-reset-view") {
    selectedMapPlaceKey = "world";
    renderRelationshipMap();
  }
  if (action === "map-open-card") {
    if (suppressRelationshipMapMarkerClick) {
      suppressRelationshipMapMarkerClick = false;
      return;
    }
    dom.mapDialog?.close();
    renderRelationshipCardDetail(button.dataset.id);
  }
  if (action === "map-clear-card") clearCardLocation(button.dataset.id);
  if (action === "confirm-edit-card") confirmEditRelationshipCard();
  if (action === "cancel-edit-card") closeEditConfirmDialog();
  if (action === "export-cards") exportRelationshipCards();
  if (action === "trigger-import") dom.importInput?.click();
  if (action === "dressup-tab") {
    activeDressupTab = button.dataset.tab || "base";
    renderDressupBuilder();
  }
  if (action === "dressup-choice") {
    updateDressupChoice(button.dataset.field, button.dataset.value);
  }
  if (action === "toggle-dressup-color-pick") toggleDressupColorPickMode();
  if (action === "toggle-dressup-multi-select") toggleDressupMultiSelectMode();
  if (action === "dressup-layer-up") moveDressupLayerOrder(button.dataset.layer || activeDressupLayer, 1);
  if (action === "dressup-layer-down") moveDressupLayerOrder(button.dataset.layer || activeDressupLayer, -1);
  if (action === "reset-dressup-layer-color") resetDressupLayerColor(button.dataset.layer || activeDressupLayer);
  if (action === "reset-dressup-layer") resetDressupLayerTransform(button.dataset.layer || activeDressupLayer);
  if (action === "undo-dressup") undoDressupChange();
  if (action === "delete-dressup-layer") deleteDressupLayer(button.dataset.layer || activeDressupLayer);
  if (action === "delete-selected-dressup-layer") deleteDressupLayer(button.dataset.layer || activeDressupLayer);
  if (action === "trigger-dressup-image-import") dom.dressupImageInput?.click();
  if (action === "select-dressup-image") selectDressupImageLayer(button.dataset.id || "");
  if (action === "save-avatar-builder") saveDressupAvatar();
}

function handleRelationshipKeydown(event) {
  if (event.key === "Enter" && event.target?.id === "relationshipMapNameInput") {
    event.preventDefault();
    const firstResult = dom.mapBody?.querySelector("[data-action='map-pick-card']");
    if (firstResult) {
      firstResult.click();
    } else {
      placeCardOnMap();
    }
    return;
  }
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[role='button'][data-action]");
  if (!card) return;
  event.preventDefault();
  card.click();
}

function handleRelationshipFormSubmit(event) {
  event.preventDefault();
  const values = valuesFromForm(new FormData(dom.editorForm));
  if (!values.basic.name.trim()) {
    showToast("请先填写角色名称。");
    return;
  }
  if (activeCardId) {
    updateRelationshipCard(activeCardId, values);
    showToast("关系卡已更新。");
  } else {
    createRelationshipCard(values);
    showToast("关系卡已创建。");
  }
  closeCharacterCreator();
}

function handleEditorPreviewInput(event) {
  if (event.target.matches("input[type='range']")) {
    const output = dom.editorForm.querySelector(`[data-range-value='${event.target.name}']`);
    if (output) output.textContent = event.target.value;
  }
  updateEditorPreview();
}

function handleImportFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => importRelationshipCards(String(reader.result || ""));
  reader.readAsText(file);
  event.target.value = "";
}

function handleRelationshipFileLibraryImport(event) {
  const files = Array.from(event.target.files || []);
  if (!files.length) return;
  importRelationshipLibraryFiles(files);
  event.target.value = "";
}

function handleDressupImageImport(event) {
  const files = Array.from(event.target.files || []);
  if (!files.length) return;
  importDressupImageElements(files);
  event.target.value = "";
}

function handleRelationshipChange(event) {
  if (event.target?.matches("[data-dressup-blend]")) {
    updateDressupLayerBlend(event.target.dataset.layer || activeDressupLayer, event.target.value);
    return;
  }
}

function closeDialogOnBackdrop(event) {
  if (event.target === event.currentTarget) event.currentTarget.close();
}

function startRelationshipCardLongPress(event) {
  if (event.target.closest(".relationship-map-marker")) return;
  const card = event.target.closest(".relationship-profile-card[data-card-id], .relationship-library-card[data-card-id]");
  if (!card || event.target.closest("button, input, select, textarea, a")) return;
  cancelRelationshipCardLongPress();
  relationshipLongPressPoint = { x: event.clientX, y: event.clientY };
  relationshipLongPressTimer = window.setTimeout(() => {
    suppressRelationshipCardClick = true;
    openEditConfirmDialog(card.dataset.cardId);
    window.setTimeout(() => {
      suppressRelationshipCardClick = false;
    }, 700);
  }, 620);
}

function moveRelationshipCardLongPress(event) {
  if (!relationshipLongPressTimer || !relationshipLongPressPoint) return;
  const dx = Math.abs(event.clientX - relationshipLongPressPoint.x);
  const dy = Math.abs(event.clientY - relationshipLongPressPoint.y);
  if (dx > 10 || dy > 10) cancelRelationshipCardLongPress();
}

function cancelRelationshipCardLongPress() {
  window.clearTimeout(relationshipLongPressTimer);
  relationshipLongPressTimer = null;
  relationshipLongPressPoint = null;
}

function startRelationshipReactionDrag(event) {
  const tool = event.target.closest("[data-reaction-tool]");
  if (!tool) return;
  const type = tool.dataset.reactionTool === "egg" ? "egg" : "flower";
  event.preventDefault();
  cancelRelationshipCardLongPress();
  cancelRelationshipReactionDrag();
  const ghost = document.createElement("div");
  ghost.className = `relationship-reaction-drag-ghost is-${type}`;
  ghost.textContent = relationshipReactionIcon(type);
  document.body.appendChild(ghost);
  relationshipReactionDrag = {
    type,
    pointerId: event.pointerId,
    ghost,
    target: null,
    moved: false,
    startX: event.clientX,
    startY: event.clientY,
  };
  tool.setPointerCapture?.(event.pointerId);
  tool.classList.add("is-dragging");
  document.body.classList.add("is-dragging-relationship-reaction");
  moveRelationshipReactionGhost(event.clientX, event.clientY);
}

function moveRelationshipReactionDrag(event) {
  if (!relationshipReactionDrag || event.pointerId !== relationshipReactionDrag.pointerId) return;
  event.preventDefault();
  const drag = relationshipReactionDrag;
  if (Math.abs(event.clientX - drag.startX) > 3 || Math.abs(event.clientY - drag.startY) > 3) drag.moved = true;
  moveRelationshipReactionGhost(event.clientX, event.clientY);
  const target = findRelationshipReactionDropTarget(event.clientX, event.clientY);
  if (target !== drag.target) {
    drag.target?.classList.remove("is-reaction-drop-target");
    target?.classList.add("is-reaction-drop-target");
    drag.target = target;
  }
}

function endRelationshipReactionDrag(event) {
  if (!relationshipReactionDrag || event.pointerId !== relationshipReactionDrag.pointerId) return;
  event.preventDefault();
  const drag = relationshipReactionDrag;
  const target = drag.target || findRelationshipReactionDropTarget(event.clientX, event.clientY);
  const characterId = getRelationshipReactionTargetId(target);
  const effectPoint = relationshipReactionEffectPoint(target, event.clientX, event.clientY);
  cleanupRelationshipReactionDrag(event.pointerId);
  if (!characterId) {
    showToast("把鲜花或鸡蛋拖到角色身上。");
    return;
  }
  applyRelationshipReaction(characterId, drag.type, target, effectPoint);
}

function cancelRelationshipReactionDrag(event = null) {
  if (!relationshipReactionDrag) return;
  cleanupRelationshipReactionDrag(event?.pointerId);
}

function cleanupRelationshipReactionDrag(pointerId = null) {
  const drag = relationshipReactionDrag;
  if (!drag) return;
  document.querySelectorAll(".relationship-reaction-tool.is-dragging").forEach((tool) => {
    if (pointerId != null) {
      try {
        tool.releasePointerCapture?.(pointerId);
      } catch {
        // Pointer capture may already be released by the browser.
      }
    }
    tool.classList.remove("is-dragging");
  });
  drag.target?.classList.remove("is-reaction-drop-target");
  drag.ghost?.remove();
  relationshipReactionDrag = null;
  document.body.classList.remove("is-dragging-relationship-reaction");
}

function moveRelationshipReactionGhost(x, y) {
  if (!relationshipReactionDrag?.ghost) return;
  relationshipReactionDrag.ghost.style.left = `${x}px`;
  relationshipReactionDrag.ghost.style.top = `${y}px`;
}

function findRelationshipReactionDropTarget(x, y) {
  const previousDisplay = relationshipReactionDrag?.ghost?.style.display;
  if (relationshipReactionDrag?.ghost) relationshipReactionDrag.ghost.style.display = "none";
  const elements = document.elementsFromPoint(x, y);
  if (relationshipReactionDrag?.ghost) relationshipReactionDrag.ghost.style.display = previousDisplay || "";
  return elements
    .map((element) => element.closest?.("[data-reaction-target-id], .relationship-map-marker[data-id], .relationship-profile-card[data-card-id], .relationship-library-card[data-card-id]"))
    .find(Boolean) || null;
}

function getRelationshipReactionTargetId(target) {
  if (!target) return "";
  return target.dataset.reactionTargetId || target.dataset.id || target.dataset.cardId || "";
}

function relationshipReactionIcon(type) {
  return type === "egg" ? "🥚" : "🌸";
}

function playRelationshipReactionPop(characterId, type, sourceElement = null, effectPoint = null) {
  if (effectPoint) {
    playRelationshipReactionPopAt(effectPoint.x, effectPoint.y, type);
    return;
  }
  const escapedId = escapeSelectorValue(characterId);
  const targetRoot = document.querySelector(`[data-reaction-target-id="${escapedId}"]`)
    || document.querySelector(`.relationship-map-marker[data-id="${escapedId}"]`)
    || sourceElement;
  const target = relationshipReactionEffectAnchor(targetRoot);
  if (!target) return;
  const rect = target.getBoundingClientRect();
  playRelationshipReactionPopAt(rect.left + rect.width / 2, rect.top + 4, type);
}

function playRelationshipReactionPopAt(x, y, type) {
  const effect = document.createElement("span");
  effect.className = `relationship-reaction-pop relationship-reaction-pop-global is-${type}`;
  effect.textContent = `${relationshipReactionIcon(type)} +1`;
  effect.style.left = `${x}px`;
  effect.style.top = `${y}px`;
  relationshipReactionOverlayRoot().appendChild(effect);
  window.setTimeout(() => effect.remove(), 1100);
}

function relationshipReactionOverlayRoot() {
  return dom.mapDialog?.open
    ? dom.mapDialog
    : dom.detailDialog?.open
      ? dom.detailDialog
      : dom.editorDialog?.open
        ? dom.editorDialog
        : document.body;
}

function relationshipReactionEffectPoint(target, fallbackX = 0, fallbackY = 0) {
  const anchor = relationshipReactionEffectAnchor(target);
  if (!anchor) return { x: fallbackX, y: fallbackY };
  const rect = anchor.getBoundingClientRect();
  if (!rect.width && !rect.height) return { x: fallbackX, y: fallbackY };
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + 2,
  };
}

function relationshipReactionEffectAnchor(target) {
  if (!target) return null;
  if (target.classList?.contains("relationship-map-marker")) return target;
  return target.querySelector?.(".profile-portrait-zone")
    || target.querySelector?.(".relationship-library-self-avatar")
    || target.querySelector?.(".relationship-avatar-library")
    || target.querySelector?.(".relationship-avatar-map")
    || target;
}

function escapeSelectorValue(value) {
  if (window.CSS?.escape) return CSS.escape(String(value || ""));
  return String(value || "").replace(/["\\]/g, "\\$&");
}

function startRelationshipMapMarkerDrag(event) {
  if (relationshipReactionDrag) return;
  const marker = event.target.closest(".relationship-map-marker");
  if (!marker || event.target.closest(".relationship-map-marker [data-action]")) return;
  const stage = marker.closest(".relationship-map-image-stage");
  if (!stage) return;
  cancelRelationshipCardLongPress();
  relationshipMapDrag = {
    id: marker.dataset.id || "",
    marker,
    stage,
    pointerId: event.pointerId,
    moved: false,
    startX: event.clientX,
    startY: event.clientY,
  };
  marker.setPointerCapture?.(event.pointerId);
  marker.classList.add("is-dragging");
}

function moveRelationshipMapMarkerDrag(event) {
  if (!relationshipMapDrag || event.pointerId !== relationshipMapDrag.pointerId) return;
  const drag = relationshipMapDrag;
  const rect = drag.stage.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 3, 97);
  const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 7, 93);
  drag.marker.style.left = `${x}%`;
  drag.marker.style.top = `${y}%`;
  drag.x = x;
  drag.y = y;
  if (Math.abs(event.clientX - drag.startX) > 3 || Math.abs(event.clientY - drag.startY) > 3) {
    drag.moved = true;
    suppressRelationshipMapMarkerClick = true;
  }
  event.preventDefault();
}

function endRelationshipMapMarkerDrag(event) {
  if (!relationshipMapDrag || event.pointerId !== relationshipMapDrag.pointerId) return;
  const drag = relationshipMapDrag;
  drag.marker.releasePointerCapture?.(event.pointerId);
  drag.marker.classList.remove("is-dragging");
  relationshipMapDrag = null;
  if (drag.moved) {
    saveRelationshipMapMarkerPosition(drag.id, drag.x, drag.y);
    window.setTimeout(() => {
      suppressRelationshipMapMarkerClick = false;
    }, 0);
  }
}

function saveRelationshipMapMarkerPosition(id, x, y) {
  const card = relationshipCards.find((item) => item.id === id);
  if (!card) return;
  const scene = relationshipMapScene(card.location?.sceneKey || selectedMapSceneKey);
  card.location = {
    ...(card.location || {}),
    placeKey: "custom-map",
    sceneKey: scene.key,
    country: scene.country,
    city: "",
    x: clamp(Number(x) || 50, 3, 97),
    y: clamp(Number(y) || 50, 7, 93),
  };
  card.updatedAt = new Date().toISOString();
  saveRelationshipCards();
  renderRelationshipCards();
  showToast(`${displayName(card)} 的位置已保存。`);
}

function startDressupShapeDraw(event) {
  const surface = event.target.closest(".dressup-avatar-editor");
  if (!dom.avatarDialog?.open || !surface || activeShapeTool !== "leafBrush") return;
  if (normalizeDressupShapeItems(currentDressupAvatar?.shapeItems).length >= maxShapeLayers) {
    showToast(`形状最多放 ${maxShapeLayers} 个。`);
    return;
  }
  event.preventDefault();
  const rect = surface.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const point = shapePointFromEvent(event, rect);
  shapeDrawState = {
    pointerId: event.pointerId,
    surface,
    rect,
    points: [point],
  };
  surface.setPointerCapture?.(event.pointerId);
  updateShapeDrawPreview();
}

function moveDressupShapeDraw(event) {
  if (!shapeDrawState || event.pointerId !== shapeDrawState.pointerId) return;
  event.preventDefault();
  const point = shapePointFromEvent(event, shapeDrawState.rect);
  const previous = shapeDrawState.points[shapeDrawState.points.length - 1];
  if (!previous || Math.hypot(point.x - previous.x, point.y - previous.y) > 1.4) {
    shapeDrawState.points.push(point);
    updateShapeDrawPreview();
  }
}

function endDressupShapeDraw(event) {
  if (!shapeDrawState || event.pointerId !== shapeDrawState.pointerId) return;
  const points = simplifyShapePoints(shapeDrawState.points);
  const surface = shapeDrawState.surface;
  shapeDrawState = null;
  surface?.querySelector("[data-shape-draw-preview]")?.setAttribute("d", "");
  if (points.length >= 2) {
    addDressupShape({ type: "leafStroke", points });
  } else {
    surface?.querySelector("[data-shape-draw-preview]")?.setAttribute("d", "");
  }
}

function shapePointFromEvent(event, rect) {
  return {
    x: clampNumber(((event.clientX - rect.left) / rect.width) * 100, 0, 100, 0),
    y: clampNumber(((event.clientY - rect.top) / rect.height) * 100, 0, 100, 0),
  };
}

function simplifyShapePoints(points) {
  const normalized = normalizeShapePoints(points);
  if (normalized.length <= 48) return normalized;
  const step = Math.ceil(normalized.length / 48);
  return normalized.filter((_, index) => index % step === 0).slice(0, 48);
}

function updateShapeDrawPreview() {
  const preview = shapeDrawState?.surface?.querySelector("[data-shape-draw-preview]");
  if (!preview) return;
  preview.setAttribute("d", leafBrushPathFromPoints(shapeDrawState.points));
}

function openEditConfirmDialog(id) {
  const card = relationshipCards.find((item) => item.id === id);
  if (!card || !dom.editConfirmDialog) return;
  pendingEditCardId = id;
  if (dom.editConfirmText) dom.editConfirmText.textContent = `要修改「${displayName(card)}」吗？`;
  openDialog(dom.editConfirmDialog);
}

function closeEditConfirmDialog() {
  pendingEditCardId = "";
  dom.editConfirmDialog?.close();
}

function confirmEditRelationshipCard() {
  const id = pendingEditCardId;
  closeEditConfirmDialog();
  if (id) openCharacterCreator(id);
}

function giveFlowerToCharacter(characterId) {
  addRelationshipReaction(characterId, "flower");
}

function throwEggAtCharacter(characterId) {
  addRelationshipReaction(characterId, "egg");
}

function addRelationshipReaction(characterId, type) {
  return applyRelationshipReaction(characterId, type);
}

function applyRelationshipReaction(characterId, type, sourceElement = null, effectPoint = null) {
  const index = relationshipCards.findIndex((card) => card.id === characterId);
  if (index < 0) return false;
  if (!spendRelationshipReactionCoin(characterId, type)) {
    showToast("金币不足，无法送出。");
    return false;
  }
  const card = normalizeRelationshipCard(relationshipCards[index]);
  card.reactionStats = normalizeRelationshipReactionStats(card.reactionStats);
  if (type === "flower") card.reactionStats.flowers += 1;
  if (type === "egg") card.reactionStats.eggs += 1;
  card.updatedAt = new Date().toISOString();
  relationshipCards[index] = card;
  const reactions = loadRelationshipReactions();
  reactions.unshift({
    id: createId(),
    characterId: card.id,
    characterName: displayName(card),
    type,
    cost: relationshipReactionCost,
    currency: "coin",
    createdAt: new Date().toISOString(),
  });
  saveRelationshipReactions(reactions);
  saveRelationshipCards();
  renderRelationshipCards();
  if (dom.detailDialog?.open) renderRelationshipCardDetail(card.id);
  requestAnimationFrame(() => playRelationshipReactionPop(characterId, type, sourceElement, effectPoint));
  showToast(type === "flower" ? "你送给 TA 一朵鲜花 🌸" : "你向 TA 扔了一个鸡蛋 🥚");
  return true;
}

function getRelationshipReactionStats(characterId) {
  const card = relationshipCards.find((item) => item.id === characterId);
  return normalizeRelationshipReactionStats(card?.reactionStats);
}

function renderRelationshipReactionButtons(card) {
  const stats = getRelationshipReactionStats(card.id);
  const badges = [];
  if (stats.flowers >= 10) badges.push("重要支持关系");
  if (stats.eggs >= 6) badges.push("高压力关系");
  return `
    <section class="relationship-reaction-panel" aria-label="角色互动">
      <div class="relationship-reaction-counts">
        <span>🌸 ${stats.flowers}</span>
        <span>🥚 ${stats.eggs}</span>
        ${badges.map((badge) => `<b>${escapeHtml(badge)}</b>`).join("")}
      </div>
    </section>
  `;
}

function renderRelationshipReactionLeaderboards() {
  if (!dom.reactionLeaderboards) return;
  const flowerLeaders = getRelationshipReactionLeaders("flowers");
  const eggLeaders = getRelationshipReactionLeaders("eggs");
  dom.reactionLeaderboards.innerHTML = `
    <button class="relationship-reaction-board-toggle" type="button" data-action="toggle-reaction-board" aria-expanded="${relationshipReactionBoardExpanded}">
      <span>鲜花鸡蛋榜</span>
      <b>${relationshipReactionBoardExpanded ? "收起" : "展开"}</b>
    </button>
    <div class="relationship-reaction-board-grid" ${relationshipReactionBoardExpanded ? "" : "hidden"}>
      ${renderRelationshipReactionLeaderboard("🌸 鲜花榜", flowerLeaders, "flowers", "还没有人收到鲜花。")}
      ${renderRelationshipReactionLeaderboard("🥚 鸡蛋榜", eggLeaders, "eggs", "还没有人收到鸡蛋。")}
    </div>
  `;
}

function toggleRelationshipReactionBoard() {
  relationshipReactionBoardExpanded = !relationshipReactionBoardExpanded;
  renderRelationshipReactionLeaderboards();
}

function renderRelationshipReactionLeaderboard(title, cards, field, emptyText) {
  return `
    <section class="relationship-reaction-board ${field}">
      <h3>${escapeHtml(title)}</h3>
      ${cards.length
        ? `<ol>${cards.map((card, index) => `
            <li>
              <span>${index < 3 ? "★" : index + 1}</span>
              <b>${escapeHtml(displayName(card))}</b>
              <strong>${card.reactionStats[field]}</strong>
            </li>
          `).join("")}</ol>`
        : `<p>${escapeHtml(emptyText)}</p>`}
    </section>
  `;
}

function getRelationshipReactionLeaders(field) {
  return [...relationshipCards]
    .map(normalizeRelationshipCard)
    .filter(Boolean)
    .filter((card) => Number(card.reactionStats?.[field] || 0) > 0)
    .sort((a, b) => Number(b.reactionStats[field] || 0) - Number(a.reactionStats[field] || 0))
    .slice(0, 6);
}

function loadRelationshipReactions() {
  try {
    const raw = localStorage.getItem(RELATIONSHIP_REACTIONS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.map(normalizeRelationshipReaction).filter(Boolean) : [];
  } catch {
    return [];
  }
}

function saveRelationshipReactions(reactions) {
  localStorage.setItem(RELATIONSHIP_REACTIONS_KEY, JSON.stringify(reactions.slice(0, 500)));
}

function normalizeRelationshipReaction(reaction) {
  if (!reaction || typeof reaction !== "object" || Array.isArray(reaction)) return null;
  const type = reaction.type === "egg" ? "egg" : "flower";
  return {
    id: clean(reaction.id, createId()),
    characterId: clean(reaction.characterId, ""),
    characterName: clean(reaction.characterName, ""),
    type,
    cost: Math.max(0, Number(reaction.cost || relationshipReactionCost) || relationshipReactionCost),
    currency: clean(reaction.currency, "coin"),
    createdAt: clean(reaction.createdAt, new Date().toISOString()),
  };
}

function normalizeRelationshipReactionStats(stats) {
  const source = stats && typeof stats === "object" && !Array.isArray(stats) ? stats : {};
  return {
    flowers: Math.max(0, Math.floor(Number(source.flowers || 0))),
    eggs: Math.max(0, Math.floor(Number(source.eggs || 0))),
  };
}

function spendRelationshipReactionCoin(characterId, type) {
  const companyState = readRelationshipCompanyState();
  const company = companyState?.company;
  const economy = ensureRelationshipCompanyEconomy(company);
  if (!companyState || !company || !economy) return false;
  if (economy.companyCoins < relationshipReactionCost) return false;
  economy.companyCoins = roundRelationshipCoins(economy.companyCoins - relationshipReactionCost);
  economy.lifetimeSpent = roundRelationshipCoins(economy.lifetimeSpent + relationshipReactionCost);
  economy.transactions = [{
    id: createId(),
    type: "spend",
    amount: relationshipReactionCost,
    source: "relationship-reaction",
    title: type === "flower" ? "送鲜花" : "扔鸡蛋",
    note: displayName(relationshipCards.find((card) => card.id === characterId) || { basic: { name: "" } }),
    relatedCompanyId: company.id || "",
    relatedProjectId: "",
    relatedTaskId: "",
    relatedStockId: "",
    relatedCharacterId: characterId,
    createdAt: new Date().toISOString(),
  }, ...(economy.transactions || [])].slice(0, 80);
  updateRelationshipCompanyAssetValue(companyState);
  company.updatedAt = new Date().toISOString();
  writeRelationshipCompanyState(companyState);
  window.dispatchEvent(new CustomEvent("life-company-updated"));
  return true;
}

function readRelationshipCompanyState() {
  try {
    const raw = localStorage.getItem(LIFE_COMPANY_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeRelationshipCompanyState(companyState) {
  localStorage.setItem(LIFE_COMPANY_KEY, JSON.stringify(companyState));
}

function ensureRelationshipCompanyEconomy(company) {
  if (!company || typeof company !== "object") return null;
  const economy = company.economy && typeof company.economy === "object" && !Array.isArray(company.economy)
    ? company.economy
    : null;
  if (!economy) return null;
  economy.currencyName = clean(economy.currencyName, "金币");
  economy.currencySymbol = clean(economy.currencySymbol, "◈");
  economy.companyCoins = roundRelationshipCoins(economy.companyCoins);
  economy.lifetimeEarned = roundRelationshipCoins(economy.lifetimeEarned);
  economy.lifetimeSpent = roundRelationshipCoins(economy.lifetimeSpent);
  economy.assetValue = roundRelationshipCoins(economy.assetValue);
  economy.transactions = Array.isArray(economy.transactions) ? economy.transactions : [];
  return economy;
}

function updateRelationshipCompanyAssetValue(companyState) {
  const economy = companyState?.company?.economy;
  if (!economy) return;
  economy.assetValue = roundRelationshipCoins(Math.max(0, Number(economy.assetValue || 0) - relationshipReactionCost));
}

function roundRelationshipCoins(value) {
  return Math.max(0, Math.round((Number(value) || 0) * 100) / 100);
}

function renderEditorForm(card, editing) {
  return `
    <input type="hidden" name="id" value="${escapeHtml(card.id)}" />
    ${renderRelationshipProfileCard(card, { mode: "edit", editing })}
  `;
}

function updateEditorPreview() {
  dom.editorForm?.querySelectorAll("[data-range-value]").forEach((output) => {
    const input = dom.editorForm.querySelector(`[name="${output.dataset.rangeValue}"]`);
    if (input) output.textContent = input.value;
  });
}

function valuesFromForm(formData) {
  const tags = splitList(formData.get("profile.tags"));
  const keywords = splitList(formData.get("profile.keywords"));
  const recentInteraction = clean(formData.get("profile.recentInteraction"), "");
  const avatar = avatarFromForm(formData);
  return {
    basic: {
      name: clean(formData.get("basic.name"), ""),
      relationshipType: clean(formData.get("basic.relationshipType"), "朋友"),
      note: recentInteraction,
    },
    profile: {
      age: clean(formData.get("profile.age"), "24"),
      gender: clean(formData.get("profile.gender"), "女"),
      tags,
      interactionFrequency: clean(formData.get("profile.interactionFrequency"), "高"),
      boundaryFeel: clean(formData.get("profile.boundaryFeel"), "良好"),
      recentInteraction,
      keywords,
      contactPhone: clean(formData.get("profile.contactPhone"), "").slice(0, 40),
      contactWechat: clean(formData.get("profile.contactWechat"), "").slice(0, 40),
      contactEmail: clean(formData.get("profile.contactEmail"), "").slice(0, 80),
      contactQQ: clean(formData.get("profile.contactQQ"), "").slice(0, 40),
    },
    relationship: {
      closeness: clamp(Number(formData.get("relationship.closeness")) || 0, 0, 100),
      trust: clamp(Number(formData.get("relationship.trust")) || 0, 0, 100),
    },
    avatar,
  };
}

function avatarFromForm(formData) {
  const defaults = createDefaultRelationshipCard().avatar;
  const avatar = avatarFieldNames.reduce((avatar, field) => {
    avatar[field] = clean(formData.get(`avatar.${field}`), defaults[field] || "");
    return avatar;
  }, {});
  avatar.layerTransforms = parseDressupLayerTransforms(formData.get("avatar.layerTransforms"));
  avatar.layerOrder = parseDressupLayerOrder(formData.get("avatar.layerOrder"));
  avatar.layerColors = parseDressupLayerColors(formData.get("avatar.layerColors"));
  avatar.layerBlends = parseDressupLayerBlends(formData.get("avatar.layerBlends"));
  avatar.layerItems = parseDressupLayerItems(formData.get("avatar.layerItems"));
  avatar.freeAccessories = parseDressupFreeAccessories(formData.get("avatar.freeAccessories"));
  avatar.emotionAuxItems = parseDressupEmotionAuxItems(formData.get("avatar.emotionAuxItems"));
  avatar.shapeItems = parseDressupShapeItems(formData.get("avatar.shapeItems"));
  avatar.imageItems = parseDressupImageItems(formData.get("avatar.imageItems"));
  return avatar;
}

function avatarFromEditorForm() {
  if (!dom.editorForm) return createDefaultRelationshipCard().avatar;
  return normalizeRelationshipCard({ avatar: avatarFromForm(new FormData(dom.editorForm)) }).avatar;
}

function setAvatarHiddenInputs(avatar) {
  if (!dom.editorForm) return;
  avatarFieldNames.forEach((field) => {
    const input = dom.editorForm.querySelector(`[name="avatar.${field}"]`);
    if (input) input.value = avatar[field] || "";
  });
  const transformsInput = dom.editorForm.querySelector(`[name="avatar.layerTransforms"]`);
  if (transformsInput) transformsInput.value = JSON.stringify(normalizeDressupLayerTransforms(avatar.layerTransforms));
  const orderInput = dom.editorForm.querySelector(`[name="avatar.layerOrder"]`);
  if (orderInput) orderInput.value = JSON.stringify(normalizeDressupLayerOrder(avatar.layerOrder, getDressupArtLayerSpecs(avatar).map((layer) => layer.key)));
  const colorsInput = dom.editorForm.querySelector(`[name="avatar.layerColors"]`);
  if (colorsInput) colorsInput.value = JSON.stringify(normalizeDressupLayerColors(avatar.layerColors));
  const blendsInput = dom.editorForm.querySelector(`[name="avatar.layerBlends"]`);
  if (blendsInput) blendsInput.value = JSON.stringify(normalizeDressupLayerBlends(avatar.layerBlends));
  const layerItemsInput = dom.editorForm.querySelector(`[name="avatar.layerItems"]`);
  if (layerItemsInput) layerItemsInput.value = JSON.stringify(normalizeDressupLayerItems(avatar.layerItems));
  const accessoriesInput = dom.editorForm.querySelector(`[name="avatar.freeAccessories"]`);
  if (accessoriesInput) accessoriesInput.value = JSON.stringify(normalizeDressupFreeAccessories(avatar.freeAccessories));
  const emotionAuxInput = dom.editorForm.querySelector(`[name="avatar.emotionAuxItems"]`);
  if (emotionAuxInput) emotionAuxInput.value = JSON.stringify(normalizeDressupEmotionAuxItems(avatar.emotionAuxItems));
  const shapeInput = dom.editorForm.querySelector(`[name="avatar.shapeItems"]`);
  if (shapeInput) shapeInput.value = JSON.stringify(normalizeDressupShapeItems(avatar.shapeItems));
  const imageInput = dom.editorForm.querySelector(`[name="avatar.imageItems"]`);
  if (imageInput) imageInput.value = JSON.stringify(normalizeDressupImageItems(avatar.imageItems));
}

function updateEditorPortrait(avatar) {
  const zone = dom.editorForm?.querySelector(".profile-portrait-zone");
  if (!zone) return;
  zone.innerHTML = `
    ${renderProfilePortrait({ avatar })}
    <span class="profile-chat-heart" aria-hidden="true">♥</span>
    <span class="profile-note-sticker" aria-hidden="true">Nice to meet you!</span>
  `;
}

function createDefaultRelationshipAvatar() {
  return {
    baseBody: "body_young_female",
    baseHead: "none",
    baseBodyPart: "none",
    creatureAsset: "none",
    species: "human",
    bodyType: "标准",
    ageGroup: "青年",
    genderExpression: "女性",
    skinAsset: "none",
    skinTone: "浅色",
    hairAsset: "none",
    hairColorAsset: "hair_color_black",
    hairStyle: "长发",
    hairColor: "黑色",
    bangs: "无刘海",
    outfit: "运动服",
    accessory: "无",
    expressionAsset: "none",
    emotionAuxAsset: "none",
    expression: "开心",
    expressionEffect: "无",
    outfitAsset: "none",
    top: "运动背心",
    bottomAsset: "none",
    bottom: "短裤",
    shoes: "运动鞋",
    accessoryHeadAsset: "none",
    accessoryFaceAsset: "none",
    accessoryNeckAsset: "none",
    accessoryBodyAsset: "none",
    accessoryHead: "无",
    accessoryFace: "无",
    accessoryNeck: "无",
    accessoryBody: "无",
    effect: "无",
    backdrop: "纯色",
    layerTransforms: {},
    layerOrder: [],
    layerColors: {},
    layerBlends: {},
    layerItems: [],
    freeAccessories: [],
    emotionAuxItems: [],
    shapeItems: [],
    imageItems: [],
  };
}

function createDefaultRelationshipCard(preset = {}) {
  const now = new Date().toISOString();
  const card = {
    id: createId(),
    basic: {
      name: "",
      realName: "",
      relationshipType: "朋友",
      meaning: "我想更了解",
      note: "",
      isImportant: false,
      isPrivate: false,
    },
    avatar: createDefaultRelationshipAvatar(),
    relationship: {
      closeness: 50,
      trust: 50,
      stress: 30,
      status: "稳定",
      boundary: "无需特别边界",
      tags: [],
    },
    profile: {
      age: "24",
      gender: "女",
      tags: ["温柔", "可靠", "会倾听"],
      interactionFrequency: "高",
      boundaryFeel: "良好",
      recentInteraction: "一起喝咖啡，聊了很多近况。",
      keywords: ["暖心", "细心", "支持型"],
      contactPhone: "",
      contactWechat: "",
      contactEmail: "",
      contactQQ: "",
    },
    location: {
      placeKey: "",
      country: "",
      city: "",
      x: 50,
      y: 50,
    },
    reactionStats: {
      flowers: 0,
      eggs: 0,
    },
    createdAt: now,
    updatedAt: now,
  };
  return normalizeRelationshipCardDraft(deepMerge(card, preset));
}

function normalizeRelationshipCardDraft(card) {
  const draft = card && typeof card === "object" ? card : {};
  draft.id = clean(draft.id, createId());
  draft.basic = draft.basic && typeof draft.basic === "object" ? draft.basic : {};
  draft.profile = draft.profile && typeof draft.profile === "object" ? draft.profile : {};
  draft.relationship = draft.relationship && typeof draft.relationship === "object" ? draft.relationship : {};
  draft.location = draft.location && typeof draft.location === "object" ? draft.location : {};
  draft.reactionStats = normalizeRelationshipReactionStats(draft.reactionStats);
  return draft;
}

function normalizeRelationshipCard(card) {
  if (!card || typeof card !== "object") return null;
  const base = createDefaultRelationshipCard();
  const merged = deepMerge(base, card);
  merged.id = clean(merged.id, createId());
  merged.basic.name = clean(merged.basic.name, "未命名角色").slice(0, 40);
  merged.basic.realName = clean(merged.basic.realName, "").slice(0, 40);
  if (merged.basic.relationshipType === "同学" || merged.basic.relationshipType === "同事") {
    merged.basic.relationshipType = "同学或同事";
  }
  merged.basic.relationshipType = pick(relationshipOptions.relationshipTypes, merged.basic.relationshipType, "朋友");
  merged.basic.meaning = pick(relationshipOptions.meanings, merged.basic.meaning, "我想更了解");
  merged.basic.note = clean(merged.basic.note, "").slice(0, 400);
  merged.basic.isImportant = Boolean(merged.basic.isImportant);
  merged.basic.isPrivate = Boolean(merged.basic.isPrivate);
  const legacyBaseBody = clean(merged.avatar.baseBody, "body_young_female");
  merged.avatar.baseBody = pickValue("baseBody", merged.avatar.baseBody, "body_young_female");
  if (!card.avatar?.baseHead) merged.avatar.baseHead = headFromBaseBody(legacyBaseBody);
  if (!card.avatar?.baseBodyPart) merged.avatar.baseBodyPart = bodyPartFromBaseBody(legacyBaseBody);
  merged.avatar.baseHead = pickValue("baseHead", merged.avatar.baseHead, "head_young_female");
  merged.avatar.baseBodyPart = pickValue("baseBodyPart", merged.avatar.baseBodyPart, "bodypart_young_female");
  merged.avatar.creatureAsset = pickValue("creatureAsset", merged.avatar.creatureAsset, "none");
  merged.avatar.species = pick(dressupOptions.species.map((item) => item.value), merged.avatar.species, "human");
  merged.avatar.bodyType = pickValue("bodyType", merged.avatar.bodyType, "标准");
  merged.avatar.ageGroup = pick(relationshipOptions.ageGroups, merged.avatar.ageGroup, "青年");
  merged.avatar.genderExpression = pick(relationshipOptions.genderExpressions, merged.avatar.genderExpression, "不填写");
  merged.avatar.skinAsset = pickValue("skinAsset", merged.avatar.skinAsset, "skin_tone_03");
  merged.avatar.skinTone = pick(relationshipOptions.skinTones, merged.avatar.skinTone, "自然色");
  merged.avatar.hairAsset = pickValue("hairAsset", merged.avatar.hairAsset, "none");
  merged.avatar.hairColorAsset = pickValue("hairColorAsset", merged.avatar.hairColorAsset, "hair_color_black");
  merged.avatar.hairStyle = pick(relationshipOptions.hairStyles, merged.avatar.hairStyle, "短发");
  merged.avatar.hairColor = pick(relationshipOptions.hairColors, merged.avatar.hairColor, "黑色");
  merged.avatar.bangs = pickValue("bangs", merged.avatar.bangs, "无刘海");
  merged.avatar.outfit = pick(relationshipOptions.outfits, merged.avatar.outfit, "日常服");
  merged.avatar.accessory = pick(relationshipOptions.accessories, merged.avatar.accessory, "无");
  merged.avatar.expressionAsset = pickValue("expressionAsset", merged.avatar.expressionAsset, "none");
  const legacyEmotionAuxAsset = pickValue("emotionAuxAsset", merged.avatar.emotionAuxAsset, "none");
  merged.avatar.emotionAuxItems = normalizeDressupEmotionAuxItems(merged.avatar.emotionAuxItems);
  if (legacyEmotionAuxAsset !== "none" && merged.avatar.emotionAuxItems.length < maxEmotionAuxLayers) {
    const legacyId = normalizeAccessoryId(`legacy-${legacyEmotionAuxAsset}`);
    const hasLegacyItem = merged.avatar.emotionAuxItems.some((item) => item.id === legacyId || item.value === legacyEmotionAuxAsset);
    if (!hasLegacyItem) {
      merged.avatar.emotionAuxItems.push({ id: legacyId, value: legacyEmotionAuxAsset });
    }
  }
  merged.avatar.emotionAuxItems = normalizeDressupEmotionAuxItems(merged.avatar.emotionAuxItems);
  merged.avatar.emotionAuxAsset = "none";
  merged.avatar.expression = pick(relationshipOptions.expressions, merged.avatar.expression, "平静");
  merged.avatar.expressionEffect = pickValue("expressionEffect", merged.avatar.expressionEffect, "无");
  merged.avatar.outfitAsset = pickValue("outfitAsset", merged.avatar.outfitAsset, "none");
  merged.avatar.top = pickValue("top", merged.avatar.top, "粉色卫衣");
  merged.avatar.bottomAsset = pickValue("bottomAsset", merged.avatar.bottomAsset, "none");
  merged.avatar.bottom = pickValue("bottom", merged.avatar.bottom, "长裤");
  merged.avatar.shoes = pickValue("shoes", merged.avatar.shoes, "运动鞋");
  merged.avatar.accessoryHeadAsset = pickValue("accessoryHeadAsset", merged.avatar.accessoryHeadAsset, "none");
  merged.avatar.accessoryFaceAsset = pickValue("accessoryFaceAsset", merged.avatar.accessoryFaceAsset, "none");
  merged.avatar.accessoryNeckAsset = pickValue("accessoryNeckAsset", merged.avatar.accessoryNeckAsset, "none");
  merged.avatar.accessoryBodyAsset = pickValue("accessoryBodyAsset", merged.avatar.accessoryBodyAsset, "none");
  merged.avatar.accessoryHead = pickValue("accessoryHead", merged.avatar.accessoryHead, "无");
  merged.avatar.accessoryFace = pickValue("accessoryFace", merged.avatar.accessoryFace, "无");
  merged.avatar.accessoryNeck = pickValue("accessoryNeck", merged.avatar.accessoryNeck, "无");
  merged.avatar.accessoryBody = pickValue("accessoryBody", merged.avatar.accessoryBody, "无");
  merged.avatar.effect = pickValue("effect", merged.avatar.effect, "无");
  merged.avatar.backdrop = pickValue("backdrop", merged.avatar.backdrop, "纯色");
  merged.avatar.layerTransforms = normalizeDressupLayerTransforms(merged.avatar.layerTransforms);
  merged.avatar.layerItems = normalizeDressupLayerItems(merged.avatar.layerItems);
  merged.avatar.layerOrder = normalizeDressupLayerOrder(merged.avatar.layerOrder, getDressupArtLayerSpecs(merged.avatar).map((layer) => layer.key));
  merged.avatar.layerColors = normalizeDressupLayerColors(merged.avatar.layerColors);
  merged.avatar.layerBlends = normalizeDressupLayerBlends(merged.avatar.layerBlends);
  merged.avatar.freeAccessories = normalizeDressupFreeAccessories(merged.avatar.freeAccessories);
  merged.avatar.shapeItems = normalizeDressupShapeItems(merged.avatar.shapeItems);
  merged.avatar.imageItems = normalizeDressupImageItems(merged.avatar.imageItems);
  merged.relationship.closeness = clamp(Number(merged.relationship.closeness) || 0, 0, 100);
  merged.relationship.trust = clamp(Number(merged.relationship.trust) || 0, 0, 100);
  merged.relationship.stress = clamp(Number(merged.relationship.stress) || 0, 0, 100);
  merged.relationship.status = pick(relationshipOptions.statuses, merged.relationship.status, "稳定");
  merged.relationship.boundary = pick(relationshipOptions.boundaries, merged.relationship.boundary, "无需特别边界");
  merged.relationship.tags = Array.isArray(merged.relationship.tags)
    ? merged.relationship.tags.filter((tag) => relationshipOptions.tags.includes(tag))
    : [];
  merged.profile ||= {};
  merged.profile.age = clean(merged.profile.age, "24").slice(0, 8);
  merged.profile.gender = clean(merged.profile.gender, "女").slice(0, 8);
  merged.profile.tags = Array.isArray(merged.profile.tags) && merged.profile.tags.length
    ? merged.profile.tags.map((tag) => clean(tag, "")).filter(Boolean).slice(0, 4)
    : [...relationshipOptions.cardTags.slice(0, 3)];
  merged.profile.interactionFrequency = pick(relationshipOptions.interactionFrequency, merged.profile.interactionFrequency, "高");
  merged.profile.boundaryFeel = pick(relationshipOptions.boundaryFeel, merged.profile.boundaryFeel, "良好");
  merged.profile.recentInteraction = clean(merged.profile.recentInteraction, merged.basic.note || "一起喝咖啡，聊了很多近况。").slice(0, 120);
  merged.profile.keywords = Array.isArray(merged.profile.keywords) && merged.profile.keywords.length
    ? merged.profile.keywords.map((tag) => clean(tag, "")).filter(Boolean).slice(0, 4)
    : ["暖心", "细心", "支持型"];
  merged.profile.contactPhone = clean(merged.profile.contactPhone, "").slice(0, 40);
  merged.profile.contactWechat = clean(merged.profile.contactWechat, "").slice(0, 40);
  merged.profile.contactEmail = clean(merged.profile.contactEmail, "").slice(0, 80);
  merged.profile.contactQQ = clean(merged.profile.contactQQ, "").slice(0, 40);
  merged.location ||= {};
  merged.location.sceneKey = relationshipMapScene(merged.location.sceneKey).key;
  const place = relationshipMapPlaces.find((item) => item.key === merged.location.placeKey);
  merged.location.placeKey = place ? place.key : clean(merged.location.placeKey, "");
  const scene = relationshipMapScene(merged.location.sceneKey);
  merged.location.country = clean(merged.location.country, place?.country || (merged.location.placeKey ? scene.country : ""));
  merged.location.city = clean(merged.location.city, place?.city || "");
  merged.location.x = clamp(Number(merged.location.x) || place?.x || 50, 4, 96);
  merged.location.y = clamp(Number(merged.location.y) || place?.y || 50, 8, 92);
  merged.reactionStats = normalizeRelationshipReactionStats(merged.reactionStats);
  merged.createdAt = clean(merged.createdAt, new Date().toISOString());
  merged.updatedAt = clean(merged.updatedAt, merged.createdAt);
  return merged;
}

function renderRelationshipCard(card, preview = false) {
  return renderRelationshipProfileCard(card, { mode: preview ? "preview" : "list" });
}

function renderRelationshipProfileCard(card, options = {}) {
  const mode = options.mode || "list";
  const editable = mode === "edit";
  const clickable = mode === "list";
  const element = editable ? "div" : "article";
  const action = clickable ? `role="button" tabindex="0" data-action="open-card" data-id="${escapeHtml(card.id)}"` : "";
  const cardId = clickable ? `data-card-id="${escapeHtml(card.id)}"` : "";
  const reactionTarget = editable ? "" : `data-reaction-target-id="${escapeHtml(card.id)}"`;
  const title = editable ? (options.editing ? "编辑关系卡" : "创建关系卡") : "角色关系卡";
  const tags = card.profile.tags.length ? card.profile.tags : relationshipOptions.cardTags.slice(0, 3);
  const keywords = card.profile.keywords.length ? card.profile.keywords : ["暖心", "细心", "支持型"];
  const displayKeywords = editable ? keywords : relationshipKeywordsWithReactions(card, keywords);
  const recent = card.profile.recentInteraction || card.basic.note || "一起喝咖啡，聊了很多近况。";
  const portraitEntry = editable ? `role="button" tabindex="0" data-action="open-avatar-builder"` : "";

  return `
    <${element} class="relationship-card relationship-profile-card ${editable ? "is-editing" : ""}" ${action} ${cardId} ${reactionTarget}>
      ${editable ? renderAvatarHiddenInputs(card.avatar) : ""}
      <div class="profile-sticker profile-star" aria-hidden="true">★</div>
      <div class="profile-sticker profile-bunny" aria-hidden="true">♡</div>
      <div class="profile-sparkles" aria-hidden="true">✦ ✧ ✦</div>
      <header class="profile-card-title">
        <span>${escapeHtml(title)}</span>
      </header>

      <section class="profile-portrait-zone ${editable ? "is-avatar-entry" : ""}" aria-label="角色头像" ${portraitEntry}>
        ${renderProfilePortrait(card)}
        <span class="profile-chat-heart" aria-hidden="true">♥</span>
        <span class="profile-note-sticker" aria-hidden="true">Nice to meet you!</span>
      </section>

      <section class="profile-basic-grid">
        ${profileField("姓名", "person", editable ? profileTextInput("basic.name", card.basic.name, "林小雨", true) : escapeHtml(displayName(card)))}
        ${profileField("年龄", "calendar", editable ? profileTextInput("profile.age", card.profile.age, "24") : escapeHtml(card.profile.age))}
        ${profileField("关系", "heart", editable ? profileSelectInput("basic.relationshipType", relationshipOptions.relationshipTypes, card.basic.relationshipType) : escapeHtml(card.basic.relationshipType), "pill")}
        ${profileField("性别", "venus", editable ? profileTextInput("profile.gender", card.profile.gender, "女") : escapeHtml(card.profile.gender))}
      </section>

      <section class="profile-library-contact-row">
        <button class="profile-library-button" type="button" data-action="open-file-library">
          <span class="profile-row-icon">▦</span>
          <b>图书馆</b>
        </button>
        <details class="profile-contact-card">
          <summary>
            <span class="profile-row-icon">☎</span>
            <b>联系方式</b>
          </summary>
          ${editable
            ? `<div class="profile-contact-inputs">
                <input class="profile-inline-input" name="profile.contactPhone" value="${escapeHtml(card.profile.contactPhone || "")}" placeholder="手机号" />
                <input class="profile-inline-input" name="profile.contactWechat" value="${escapeHtml(card.profile.contactWechat || "")}" placeholder="微信号" />
                <input class="profile-inline-input" name="profile.contactEmail" value="${escapeHtml(card.profile.contactEmail || "")}" placeholder="邮箱" />
                <input class="profile-inline-input" name="profile.contactQQ" value="${escapeHtml(card.profile.contactQQ || "")}" placeholder="QQ" />
              </div>`
            : `<small>${escapeHtml([card.profile.contactPhone, card.profile.contactWechat, card.profile.contactEmail, card.profile.contactQQ].filter(Boolean).join(" · ") || "未填写")}</small>`}
        </details>
      </section>

      <section class="profile-metric-grid">
        ${profileMetric("亲密度", "💗", card.relationship.closeness, "relationship.closeness", "pink", editable)}
        ${profileMetric("信任值", "🛡", card.relationship.trust, "relationship.trust", "blue", editable)}
        ${profileChoiceMetric("互动频率", "💬", card.profile.interactionFrequency, "profile.interactionFrequency", relationshipOptions.interactionFrequency, "orange", editable)}
        ${profileChoiceMetric("边界感", "👤", card.profile.boundaryFeel, "profile.boundaryFeel", relationshipOptions.boundaryFeel, "green", editable)}
      </section>

      <section class="profile-bottom-grid">
        <div class="profile-note-box">
          <h3><span>⭐</span>最近互动</h3>
          ${editable
            ? `<textarea class="profile-textarea" name="profile.recentInteraction" rows="3" placeholder="一起喝咖啡，聊了很多近况。">${escapeHtml(recent)}</textarea>`
            : `<p>${escapeHtml(recent)}</p>`}
        </div>
        <div class="profile-keyword-box">
          <h3><span>⭐</span>印象关键词</h3>
          ${editable
            ? `<input class="profile-inline-input" name="profile.keywords" value="${escapeHtml(keywords.join("、"))}" placeholder="暖心、细心、支持型" />`
            : `<div>${displayKeywords.map((keyword) => `<span>${escapeHtml(keyword)}</span>`).join("")}</div>`}
        </div>
      </section>

      <footer class="profile-card-footer">
        ${editable
          ? `<button class="profile-save-button" type="submit">保存</button><button class="profile-cancel-button" type="button" data-action="close-editor">取消</button>`
          : `<span class="profile-view-button">${mode === "detail" ? "已保存" : "查看详情 ›"}</span>`}
      </footer>
    </${element}>
  `;
}

function relationshipKeywordsWithReactions(card, keywords = []) {
  const stats = normalizeRelationshipReactionStats(card?.reactionStats);
  return [...keywords, `🌸 ${stats.flowers}`, `🥚 ${stats.eggs}`].slice(0, 8);
}

function renderProfilePortrait(card) {
  const avatar = normalizeRelationshipCard({ avatar: card.avatar || {} }).avatar;
  return `
    <div class="profile-portrait profile-dressup-portrait" aria-hidden="true">
      ${renderDressupAvatar(avatar, "profile")}
    </div>
  `;
}

function profileField(label, icon, value, extraClass = "") {
  return `
    <label class="profile-info-field ${extraClass}">
      <span class="profile-info-icon ${icon}"></span>
      <b>${escapeHtml(label)}</b>
      <i></i>
      <strong>${typeof value === "string" ? value : ""}</strong>
    </label>
  `;
}

function profileTextInput(name, value, placeholder = "", required = false) {
  return `<input class="profile-inline-input" name="${name}" value="${escapeHtml(value)}" placeholder="${escapeHtml(placeholder)}" ${required ? "required" : ""} />`;
}

function profileSelectInput(name, options, value) {
  return `
    <select class="profile-inline-input profile-select-input" name="${name}">
      ${options.map((option) => `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
    </select>
  `;
}

function profileMetric(label, icon, value, name, tone, editable) {
  const safeValue = clamp(Number(value) || 0, 0, 100);
  return `
    <label class="profile-metric ${tone}">
      <span>${icon}</span>
      <b>${escapeHtml(label)}</b>
      ${editable
        ? `<input class="profile-score-input" type="number" name="${name}" min="0" max="100" value="${safeValue}" data-range-value="${name}" />`
        : `<strong>${safeValue}</strong>`}
    </label>
  `;
}

function profileChoiceMetric(label, icon, value, name, options, tone, editable) {
  return `
    <label class="profile-metric ${tone}">
      <span>${icon}</span>
      <b>${escapeHtml(label)}</b>
      ${editable
        ? profileSelectInput(name, options, value)
        : `<strong>${escapeHtml(value)}</strong>`}
    </label>
  `;
}

function renderAvatarPreview(card, size = "") {
  const avatar = normalizeRelationshipCard({ avatar: card.avatar || {} }).avatar;
  return `
    <div class="relationship-avatar-preview ${size ? `relationship-avatar-${size}` : ""}">
      ${renderDressupAvatar(avatar, size || "preview")}
    </div>
  `;
}

function renderAvatarHiddenInputs(avatar) {
  const fields = avatarFieldNames
    .map((field) => `<input type="hidden" name="avatar.${field}" value="${escapeHtml(avatar?.[field] || "")}" />`)
    .join("");
  const visibleLayerKeys = getDressupArtLayerSpecs(avatar || {}).map((layer) => layer.key);
  const layerTransforms = normalizeDressupLayerTransforms(avatar?.layerTransforms);
  const layerOrder = normalizeDressupLayerOrder(avatar?.layerOrder, visibleLayerKeys);
  const layerColors = normalizeDressupLayerColors(avatar?.layerColors);
  const layerBlends = normalizeDressupLayerBlends(avatar?.layerBlends);
  const layerItems = normalizeDressupLayerItems(avatar?.layerItems);
  const freeAccessories = normalizeDressupFreeAccessories(avatar?.freeAccessories);
  const emotionAuxItems = normalizeDressupEmotionAuxItems(avatar?.emotionAuxItems);
  const shapeItems = normalizeDressupShapeItems(avatar?.shapeItems);
  const imageItems = normalizeDressupImageItems(avatar?.imageItems);
  return `
    ${fields}
    <input type="hidden" name="avatar.layerTransforms" value="${escapeHtml(JSON.stringify(layerTransforms))}" />
    <input type="hidden" name="avatar.layerOrder" value="${escapeHtml(JSON.stringify(layerOrder))}" />
    <input type="hidden" name="avatar.layerColors" value="${escapeHtml(JSON.stringify(layerColors))}" />
    <input type="hidden" name="avatar.layerBlends" value="${escapeHtml(JSON.stringify(layerBlends))}" />
    <input type="hidden" name="avatar.layerItems" value="${escapeHtml(JSON.stringify(layerItems))}" />
    <input type="hidden" name="avatar.freeAccessories" value="${escapeHtml(JSON.stringify(freeAccessories))}" />
    <input type="hidden" name="avatar.emotionAuxItems" value="${escapeHtml(JSON.stringify(emotionAuxItems))}" />
    <input type="hidden" name="avatar.shapeItems" value="${escapeHtml(JSON.stringify(shapeItems))}" />
    <input type="hidden" name="avatar.imageItems" value="${escapeHtml(JSON.stringify(imageItems))}" />
  `;
}

function openAvatarBuilder() {
  if (!dom.avatarBody) return;
  currentDressupAvatar = avatarFromEditorForm();
  dressupUndoStack = [];
  dressupContinuousUndoKey = "";
  window.clearTimeout(dressupContinuousUndoTimer);
  activeDressupTab = activeDressupTab || "base";
  isDressupLayerSelectionVisible = true;
  setDressupColorPickMode(false, { silent: true });
  renderDressupBuilder();
  openDialog(dom.avatarDialog);
}

function renderDressupBuilder() {
  if (!dom.avatarBody) return;
  const avatar = normalizeRelationshipCard({ avatar: currentDressupAvatar || avatarFromEditorForm() }).avatar;
  currentDressupAvatar = avatar;
  const activeCategory = dressupCategories.find((item) => item.key === activeDressupTab) || dressupCategories[0];
  ensureActiveDressupLayer(avatar);
  dom.avatarBody.classList.remove("is-dressup-placeholder");
  dom.avatarBody.innerHTML = `
    <section class="relationship-dressup-page ${isDressupColorPickMode ? "is-color-picking" : ""} ${activeShapeTool === "leafBrush" ? "is-leaf-brushing" : ""}" aria-label="角色换装系统">
      <header class="relationship-dressup-header">
        <button class="ghost-button" type="button" data-action="close-avatar-builder">返回</button>
        <div>
          <p class="eyebrow">Layer Dress Up</p>
          <h2>角色换装</h2>
        </div>
        <button class="primary-button" type="button" data-action="save-avatar-builder">保存</button>
      </header>
      <div class="relationship-dressup-preview-wrap">
        ${renderDressupAvatar(avatar, "editor", { editable: true })}
        ${renderDressupLayerTools(avatar)}
      </div>
      <nav class="relationship-dressup-tabs" aria-label="换装分类">
        ${dressupCategories.map((category) => `
          <button type="button" data-action="dressup-tab" data-tab="${escapeHtml(category.key)}" class="${category.key === activeCategory.key ? "is-active" : ""}">
            ${escapeHtml(category.label)}
          </button>
        `).join("")}
      </nav>
      <section class="relationship-dressup-choice-panel" aria-label="${escapeHtml(activeCategory.label)}素材">
        ${activeCategory.fields.map((field) => renderDressupField(field, avatar)).join("")}
      </section>
    </section>
  `;
}

function renderDressupField(field, avatar) {
  if (field === "shapeTool") return renderDressupShapeTool(avatar);
  if (field === "customImageTool") return renderDressupCustomImageTool(avatar);
  const options = dressupOptions[field] || [];
  return `
    <div class="relationship-dressup-field">
      <h3>${escapeHtml(dressupFieldLabels[field] || field)}</h3>
      <div class="relationship-dressup-grid">
        ${options.map((option) => renderDressupChoice(field, option, avatar[field], avatar)).join("")}
      </div>
    </div>
  `;
}

function renderDressupChoice(field, option, activeValue, avatar = currentDressupAvatar || {}) {
  const isActive = isDressupChoiceSelected(field, option.value, activeValue, avatar);
  const color = dressupChoiceColor(field, option.value);
  return `
    <button class="relationship-dressup-choice ${isActive ? "is-selected" : ""}" type="button" data-action="dressup-choice" data-field="${escapeHtml(field)}" data-value="${escapeHtml(option.value)}" style="${color ? `--choice-color:${color};` : ""}">
      <span>${option.assetSrc
        ? `<img src="${escapeHtml(option.assetSrc)}" alt="" loading="lazy" />`
        : escapeHtml(option.icon || option.label.slice(0, 1))}</span>
      <b>${escapeHtml(option.label)}</b>
    </button>
  `;
}

function isDressupChoiceSelected(field, value, activeValue, avatar = currentDressupAvatar || {}) {
  if (multiDressupAssetFields.has(field)) {
    const items = getDressupLayerItemsForField(avatar, field);
    if (value === "none") return activeValue === "none" && !items.length;
    return activeValue === value || items.some((item) => item.value === value);
  }
  if (field === "emotionAuxAsset") {
    const items = normalizeDressupEmotionAuxItems(avatar?.emotionAuxItems);
    if (value === "none") return !items.length;
    return items.some((item) => item.value === value);
  }
  if (accessoryAssetFields.has(field)) {
    const slot = accessoryFieldSlots[field] || "body";
    const items = normalizeDressupFreeAccessories(avatar?.freeAccessories).filter((item) => item.slot === slot);
    if (value === "none") return activeValue === "none" && !items.length;
    return activeValue === value || items.some((item) => item.value === value);
  }
  return value === activeValue;
}

function renderDressupShapeTool(avatar) {
  const shapeCount = normalizeDressupShapeItems(avatar?.shapeItems).length;
  return `
    <div class="relationship-dressup-field relationship-dressup-shape-tool">
      <h3>${escapeHtml(dressupFieldLabels.shapeTool)}</h3>
      <div class="relationship-dressup-grid">
        ${shapeToolOptions.map((option) => renderDressupChoice("shapeTool", option, activeShapeTool)).join("")}
      </div>
      <p class="relationship-shape-tool-note">${activeShapeTool === "leafBrush" ? `柳叶笔 ${shapeCount} / ${maxShapeLayers}` : `已添加 ${shapeCount} / ${maxShapeLayers} 个形状。`}</p>
    </div>
  `;
}

function renderDressupCustomImageTool(avatar) {
  const imageItems = normalizeDressupImageItems(avatar?.imageItems);
  return `
    <div class="relationship-dressup-field relationship-dressup-custom-tool">
      <h3>${escapeHtml(dressupFieldLabels.customImageTool)}</h3>
      <div class="relationship-dressup-custom-grid">
        <button class="relationship-dressup-import-choice" type="button" data-action="trigger-dressup-image-import">
          <span>＋</span>
          <b>导入图片</b>
          <small>${imageItems.length} / ${maxImportedImageLayers}</small>
        </button>
        ${imageItems.map((item) => `
          <button class="relationship-dressup-image-choice ${activeDressupLayer === imageLayerKey(item) ? "is-selected" : ""}" type="button" data-action="select-dressup-image" data-id="${escapeHtml(item.id)}">
            <span><img src="${escapeHtml(item.src)}" alt="" loading="lazy" /></span>
            <b>${escapeHtml(item.name)}</b>
          </button>
        `).join("")}
      </div>
      <p class="relationship-shape-tool-note">导入外部图片作为可移动元素，最多 ${maxImportedImageLayers} 个。</p>
    </div>
  `;
}

function renderDressupLayerTools(avatar) {
  const layers = getDressupArtLayerSpecs(avatar);
  const activeLayer = layers.find((layer) => layer.key === activeDressupLayer) || layers[0];
  if (!activeLayer) return "";
  const transform = getDressupLayerTransform(avatar, activeLayer.key);
  const layerColor = getDressupLayerColor(avatar, activeLayer.key) || "#ff7dcb";
  const layerBlend = getDressupLayerBlend(avatar, activeLayer.key);
  const selectedLayers = getSelectedDressupLayerKeys(avatar);
  const canDelete = selectedLayers.some((key) => isDressupLayerDeletable(key));
  const selectedLabel = selectedLayers.length > 1
    ? `${selectedLayers.length} 个图层`
    : (dressupLayerLabels[activeLayer.key] || activeLayer.label);
  return `
    <div class="relationship-dressup-layer-tools" data-dressup-layer-tools>
      <dl>
        <div>
          <dt>图层</dt>
          <dd data-dressup-active-name>${escapeHtml(selectedLabel)}</dd>
        </div>
        <div>
          <dt>大小</dt>
          <dd data-dressup-scale-value>${Math.round(transform.scale * 100)}%</dd>
        </div>
        <div>
          <dt>旋转</dt>
          <dd class="relationship-dressup-rotate-row">
            <span data-dressup-rotate-value>${Math.round(transform.rotate)}°</span>
            <button class="relationship-dressup-remove-select" type="button" data-action="delete-selected-dressup-layer" data-layer="${escapeHtml(activeLayer.key)}" aria-label="删除选中图层" ${canDelete ? "" : "disabled"}>−</button>
            <button class="relationship-dressup-add-select ${isDressupMultiSelectMode ? "is-active" : ""}" type="button" data-action="toggle-dressup-multi-select" aria-label="追加选择图层">＋</button>
          </dd>
        </div>
      </dl>
      <label class="relationship-dressup-scale-control">
        <span>大小</span>
        <input type="range" min="${dressupLayerTransformLimits.scale[0]}" max="${dressupLayerTransformLimits.scale[1]}" step="0.01" value="${transform.scale}" data-dressup-scale data-layer="${escapeHtml(activeLayer.key)}" />
      </label>
      <label class="relationship-dressup-scale-control">
        <span>旋转</span>
        <input type="range" min="${dressupLayerTransformLimits.rotate[0]}" max="${dressupLayerTransformLimits.rotate[1]}" step="1" value="${transform.rotate}" data-dressup-rotate data-layer="${escapeHtml(activeLayer.key)}" />
      </label>
      <div class="relationship-dressup-scale-control relationship-dressup-color-control">
        <span>颜色</span>
        <div class="relationship-dressup-color-row">
          <input type="color" value="${escapeHtml(layerColor)}" data-dressup-color data-layer="${escapeHtml(activeLayer.key)}" />
          <button class="relationship-dressup-pick-color ${isDressupColorPickMode ? "is-active" : ""}" type="button" data-action="toggle-dressup-color-pick" aria-pressed="${isDressupColorPickMode ? "true" : "false"}">取色</button>
        </div>
      </div>
      <label class="relationship-dressup-scale-control relationship-dressup-blend-control">
        <span>叠加</span>
        <select data-dressup-blend data-layer="${escapeHtml(activeLayer.key)}">
          ${dressupBlendModes.map((mode) => `<option value="${escapeHtml(mode.value)}" ${mode.value === layerBlend ? "selected" : ""}>${escapeHtml(mode.label)}</option>`).join("")}
        </select>
      </label>
      <div class="relationship-dressup-layer-order">
        <button class="ghost-button" type="button" data-action="dressup-layer-down" data-layer="${escapeHtml(activeLayer.key)}">下一层</button>
        <button class="ghost-button" type="button" data-action="dressup-layer-up" data-layer="${escapeHtml(activeLayer.key)}">上一层</button>
      </div>
      <button class="ghost-button" type="button" data-action="undo-dressup" ${dressupUndoStack.length ? "" : "disabled"}>撤回</button>
      <button class="ghost-button" type="button" data-action="reset-dressup-layer-color" data-layer="${escapeHtml(activeLayer.key)}">恢复原色</button>
      <button class="ghost-button" type="button" data-action="reset-dressup-layer" data-layer="${escapeHtml(activeLayer.key)}">重置图层</button>
    </div>
  `;
}

function cloneDressupState(value) {
  return JSON.parse(JSON.stringify(value || null));
}

function createDressupUndoSnapshot() {
  if (!currentDressupAvatar) return null;
  const avatar = normalizeRelationshipCard({ avatar: currentDressupAvatar }).avatar;
  return {
    avatar: cloneDressupState(avatar),
    activeDressupTab,
    activeDressupLayer,
    activeShapeTool,
    selectedDressupLayers: [...selectedDressupLayers],
    isDressupMultiSelectMode,
    isDressupLayerSelectionVisible,
  };
}

function pushDressupUndoState() {
  const snapshot = createDressupUndoSnapshot();
  if (!snapshot) return;
  const serialized = JSON.stringify(snapshot);
  const previous = dressupUndoStack[dressupUndoStack.length - 1];
  if (previous && JSON.stringify(previous) === serialized) return;
  dressupUndoStack.push(snapshot);
  if (dressupUndoStack.length > maxDressupUndoStates) dressupUndoStack.shift();
}

function pushDressupContinuousUndoState(key) {
  if (!key) {
    pushDressupUndoState();
    return;
  }
  if (dressupContinuousUndoKey !== key) {
    pushDressupUndoState();
    dressupContinuousUndoKey = key;
  }
  window.clearTimeout(dressupContinuousUndoTimer);
  dressupContinuousUndoTimer = window.setTimeout(() => {
    dressupContinuousUndoKey = "";
  }, 650);
}

function clearDressupContinuousUndoState() {
  dressupContinuousUndoKey = "";
  window.clearTimeout(dressupContinuousUndoTimer);
}

function undoDressupChange() {
  const snapshot = dressupUndoStack.pop();
  if (!snapshot) {
    showToast("没有可撤回的操作。");
    updateDressupLayerToolState();
    return;
  }
  clearDressupContinuousUndoState();
  currentDressupAvatar = normalizeRelationshipCard({ avatar: snapshot.avatar }).avatar;
  activeDressupTab = snapshot.activeDressupTab || activeDressupTab || "base";
  activeDressupLayer = snapshot.activeDressupLayer || "";
  activeShapeTool = shapeToolOptions.some((item) => item.value === snapshot.activeShapeTool)
    ? snapshot.activeShapeTool
    : "circle";
  selectedDressupLayers = new Set(Array.isArray(snapshot.selectedDressupLayers) ? snapshot.selectedDressupLayers : []);
  isDressupMultiSelectMode = Boolean(snapshot.isDressupMultiSelectMode);
  isDressupLayerSelectionVisible = snapshot.isDressupLayerSelectionVisible !== false;
  renderDressupBuilder();
}

function updateDressupChoice(field, value) {
  if (!field || value == null || !currentDressupAvatar) return;
  if (field === "shapeTool") {
    updateDressupShapeTool(value);
    return;
  }
  if (field === "emotionAuxAsset") {
    updateDressupEmotionAuxChoice(value);
    return;
  }
  if (multiDressupAssetFields.has(field)) {
    updateDressupLayerItemChoice(field, value);
    return;
  }
  if (accessoryAssetFields.has(field)) {
    if (value === "none") {
      clearDressupFreeAccessories(field);
      renderDressupBuilder();
      return;
    }
    addDressupFreeAccessory(field, value);
    return;
  }
  if (currentDressupAvatar[field] !== value) pushDressupUndoState();
  currentDressupAvatar[field] = value;
  const layerKey = dressupFieldLayerMap[field];
  if (layerKey) {
    activeDressupLayer = layerKey;
    selectedDressupLayers = new Set([layerKey]);
    isDressupMultiSelectMode = false;
  }
  isDressupLayerSelectionVisible = true;
  if (field === "top") currentDressupAvatar.outfit = outfitFromTop(value);
  if (field === "accessoryHead" || field === "accessoryFace" || field === "accessoryNeck") {
    currentDressupAvatar.accessory = legacyAccessoryFromDressup(currentDressupAvatar);
  }
  renderDressupBuilder();
}

function updateDressupLayerItemChoice(field, value) {
  if (!currentDressupAvatar || !multiDressupAssetFields.has(field)) return;
  if (value === "none") {
    clearDressupLayerItems(field);
    renderDressupBuilder();
    return;
  }
  addDressupLayerItem(field, value);
}

function addDressupLayerItem(field, value) {
  const asset = dressupAssetByValue(value);
  if (!asset || !isDressupLayerItemValueAllowed(field, asset.value) || !currentDressupAvatar) return;
  const items = normalizeDressupLayerItems(currentDressupAvatar.layerItems);
  const fieldItems = items.filter((item) => item.field === field);
  const legacyValue = currentDressupAvatar[field] && currentDressupAvatar[field] !== "none" ? currentDressupAvatar[field] : "";
  const total = fieldItems.length + (legacyValue ? 1 : 0);
  if (total >= maxDressupItemsPerField) {
    showToast(`这个类别最多放 ${maxDressupItemsPerField} 个。`);
    return;
  }
  pushDressupUndoState();
  const item = { id: normalizeAccessoryId(createId()), field, value: asset.value };
  const layerKey = dressupLayerItemKey(item);
  currentDressupAvatar.layerItems = [...items, item];
  const offset = [-8, -4, 0, 4, 8][total] || 0;
  setDressupLayerTransform(layerKey, { x: offset, y: 0, scale: 1 });
  activeDressupLayer = layerKey;
  selectedDressupLayers = new Set([layerKey]);
  isDressupMultiSelectMode = false;
  isDressupLayerSelectionVisible = true;
  renderDressupBuilder();
}

function clearDressupLayerItems(field) {
  if (!currentDressupAvatar || !multiDressupAssetFields.has(field)) return;
  const items = normalizeDressupLayerItems(currentDressupAvatar.layerItems);
  const layerKeys = items.filter((item) => item.field === field).map(dressupLayerItemKey);
  const legacyLayerKey = dressupFieldLayerMap[field];
  const hasLegacyValue = currentDressupAvatar[field] && currentDressupAvatar[field] !== "none";
  if (!layerKeys.length && !hasLegacyValue) return;
  pushDressupUndoState();
  currentDressupAvatar.layerItems = items.filter((item) => item.field !== field);
  currentDressupAvatar[field] = "none";
  [...layerKeys, legacyLayerKey].filter(Boolean).forEach(removeDressupLayerState);
  activeDressupLayer = "";
  selectedDressupLayers = new Set();
  isDressupMultiSelectMode = false;
  isDressupLayerSelectionVisible = true;
}

function updateDressupShapeTool(value) {
  if (!currentDressupAvatar) return;
  activeShapeTool = shapeToolOptions.some((item) => item.value === value) ? value : "circle";
  if (activeShapeTool === "leafBrush") {
    renderDressupBuilder();
    return;
  }
  addDressupShape({ type: activeShapeTool });
}

function addDressupShape(shape) {
  if (!currentDressupAvatar || !shape) return;
  const items = normalizeDressupShapeItems(currentDressupAvatar.shapeItems);
  if (items.length >= maxShapeLayers) {
    showToast(`形状最多放 ${maxShapeLayers} 个。`);
    return;
  }
  const item = normalizeDressupShapeItems([{ id: normalizeAccessoryId(createId()), ...shape }])[0];
  if (!item) return;
  pushDressupUndoState();
  const layerKey = shapeLayerKey(item);
  currentDressupAvatar.shapeItems = [...items, item];
  const colors = normalizeDressupLayerColors(currentDressupAvatar.layerColors);
  colors[layerKey] = "#ff7dcb";
  currentDressupAvatar.layerColors = colors;
  setDressupLayerTransform(layerKey, { x: 0, y: 0, scale: item.type === "leafStroke" ? 1 : 0.78 });
  activeDressupLayer = layerKey;
  selectedDressupLayers = new Set([layerKey]);
  isDressupMultiSelectMode = false;
  isDressupLayerSelectionVisible = true;
  renderDressupBuilder();
}

function updateDressupEmotionAuxChoice(value) {
  if (!currentDressupAvatar) return;
  if (value === "none") {
    if (normalizeDressupEmotionAuxItems(currentDressupAvatar.emotionAuxItems).length) pushDressupUndoState();
    normalizeDressupEmotionAuxItems(currentDressupAvatar.emotionAuxItems).forEach((item) => removeDressupLayerState(emotionAuxLayerKey(item)));
    currentDressupAvatar.emotionAuxItems = [];
    currentDressupAvatar.emotionAuxAsset = "none";
    activeDressupLayer = "";
    selectedDressupLayers = new Set();
    isDressupMultiSelectMode = false;
    isDressupLayerSelectionVisible = true;
    renderDressupBuilder();
    return;
  }
  addDressupEmotionAux(value);
}

function addDressupEmotionAux(value) {
  const asset = dressupAssetByValue(value);
  if (!asset || asset.category !== "emotion_aux" || !currentDressupAvatar) return;
  const items = normalizeDressupEmotionAuxItems(currentDressupAvatar.emotionAuxItems);
  if (items.length >= maxEmotionAuxLayers) {
    showToast(`表情辅助最多放 ${maxEmotionAuxLayers} 个。`);
    return;
  }
  pushDressupUndoState();
  const item = { id: normalizeAccessoryId(createId()), value: asset.value };
  const layerKey = emotionAuxLayerKey(item);
  currentDressupAvatar.emotionAuxItems = [...items, item];
  currentDressupAvatar.emotionAuxAsset = "none";
  const preset = emotionAuxLayerPresets[items.length] || emotionAuxLayerPresets[0];
  setDressupLayerTransform(layerKey, preset);
  activeDressupLayer = layerKey;
  selectedDressupLayers = new Set([layerKey]);
  isDressupMultiSelectMode = false;
  isDressupLayerSelectionVisible = true;
  renderDressupBuilder();
}

function addDressupFreeAccessory(field, value) {
  const asset = dressupAssetByValue(value);
  if (!asset || asset.category !== "accessories" || !currentDressupAvatar) return;
  const slot = accessoryFieldSlots[field] || "body";
  const items = normalizeDressupFreeAccessories(currentDressupAvatar.freeAccessories);
  if (items.filter((item) => item.slot === slot).length >= maxDressupItemsPerField) {
    showToast(`这个类别最多放 ${maxDressupItemsPerField} 个。`);
    return;
  }
  pushDressupUndoState();
  const id = normalizeAccessoryId(createId());
  const item = { id, value: asset.value, slot };
  const layerKey = freeAccessoryLayerKey(item);
  currentDressupAvatar.freeAccessories = [...items, item];
  currentDressupAvatar[field] = "none";
  activeDressupLayer = layerKey;
  selectedDressupLayers = new Set([layerKey]);
  isDressupMultiSelectMode = false;
  isDressupLayerSelectionVisible = true;
  renderDressupBuilder();
}

function importDressupImageElements(files) {
  if (!currentDressupAvatar) return;
  const current = normalizeDressupImageItems(currentDressupAvatar.imageItems);
  const remaining = Math.max(0, maxImportedImageLayers - current.length);
  const accepted = files.slice(0, remaining).filter((file) => {
    if (!file.type.startsWith("image/")) {
      showToast(`${file.name} 不是图片。`);
      return false;
    }
    if (file.size > maxDressupImageFileSize) {
      showToast(`${file.name} 太大，请换小于 900KB 的图片。`);
      return false;
    }
    return true;
  });
  if (!accepted.length) {
    if (!remaining) showToast("自制图片已经满了。");
    return;
  }
  let loaded = 0;
  const imported = [];
  accepted.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      imported.push({
        id: normalizeAccessoryId(createId()),
        src: String(reader.result || ""),
        name: file.name.replace(/\.[^.]+$/, "").slice(0, 40) || "导入图片",
      });
      loaded += 1;
      if (loaded !== accepted.length) return;
      pushDressupUndoState();
      currentDressupAvatar.imageItems = normalizeDressupImageItems([...current, ...imported]);
      imported.forEach((item, index) => {
        const offset = [-8, -4, 0, 4, 8][current.length + index] || 0;
        setDressupLayerTransform(imageLayerKey(item), { x: offset, y: 0, scale: 0.72 });
      });
      const layerKey = imageLayerKey(imported[imported.length - 1]);
      activeDressupLayer = layerKey;
      selectedDressupLayers = new Set([layerKey]);
      isDressupMultiSelectMode = false;
      isDressupLayerSelectionVisible = true;
      renderDressupBuilder();
      showToast(`已导入 ${imported.length} 个自制元素。`);
    };
    reader.readAsDataURL(file);
  });
}

function selectDressupImageLayer(id) {
  if (!currentDressupAvatar) return;
  const item = normalizeDressupImageItems(currentDressupAvatar.imageItems).find((image) => image.id === normalizeAccessoryId(id));
  if (!item) return;
  activeDressupLayer = imageLayerKey(item);
  selectedDressupLayers = new Set([activeDressupLayer]);
  isDressupMultiSelectMode = false;
  isDressupLayerSelectionVisible = true;
  renderDressupBuilder();
}

function clearDressupFreeAccessories(field) {
  if (!currentDressupAvatar || !accessoryAssetFields.has(field)) return;
  const slot = accessoryFieldSlots[field] || "body";
  const items = normalizeDressupFreeAccessories(currentDressupAvatar.freeAccessories);
  const layerKeys = items.filter((item) => item.slot === slot).map(freeAccessoryLayerKey);
  const legacyLayerKey = dressupFieldLayerMap[field];
  const hasLegacyValue = currentDressupAvatar[field] && currentDressupAvatar[field] !== "none";
  if (!layerKeys.length && !hasLegacyValue) return;
  pushDressupUndoState();
  currentDressupAvatar.freeAccessories = items.filter((item) => item.slot !== slot);
  currentDressupAvatar[field] = "none";
  [...layerKeys, legacyLayerKey].filter(Boolean).forEach(removeDressupLayerState);
  activeDressupLayer = "";
  selectedDressupLayers = new Set();
  isDressupMultiSelectMode = false;
  isDressupLayerSelectionVisible = true;
}


function ensureActiveDressupLayer(avatar) {
  const layers = getDressupArtLayerSpecs(avatar);
  if (!layers.length) {
    activeDressupLayer = "";
    selectedDressupLayers = new Set();
    isDressupMultiSelectMode = false;
    return;
  }
  if (!layers.some((layer) => layer.key === activeDressupLayer)) {
    activeDressupLayer = layers[0].key;
  }
  const selected = getSelectedDressupLayerKeys(avatar);
  selectedDressupLayers = new Set(selected.length ? selected : [activeDressupLayer]);
}

function parseDressupLayerTransforms(value) {
  if (!value) return {};
  if (typeof value === "object") return normalizeDressupLayerTransforms(value);
  try {
    return normalizeDressupLayerTransforms(JSON.parse(String(value)));
  } catch (error) {
    return {};
  }
}

function parseDressupLayerOrder(value) {
  if (!value) return [];
  if (Array.isArray(value)) return normalizeDressupLayerOrder(value);
  try {
    return normalizeDressupLayerOrder(JSON.parse(String(value)));
  } catch (error) {
    return [];
  }
}

function parseDressupLayerColors(value) {
  if (!value) return {};
  if (typeof value === "object") return normalizeDressupLayerColors(value);
  try {
    return normalizeDressupLayerColors(JSON.parse(String(value)));
  } catch (error) {
    return {};
  }
}

function parseDressupLayerBlends(value) {
  if (!value) return {};
  if (typeof value === "object") return normalizeDressupLayerBlends(value);
  try {
    return normalizeDressupLayerBlends(JSON.parse(String(value)));
  } catch (error) {
    return {};
  }
}

function parseDressupLayerItems(value) {
  if (!value) return [];
  if (Array.isArray(value)) return normalizeDressupLayerItems(value);
  try {
    return normalizeDressupLayerItems(JSON.parse(String(value)));
  } catch (error) {
    return [];
  }
}

function parseDressupFreeAccessories(value) {
  if (!value) return [];
  if (Array.isArray(value)) return normalizeDressupFreeAccessories(value);
  try {
    return normalizeDressupFreeAccessories(JSON.parse(String(value)));
  } catch (error) {
    return [];
  }
}

function parseDressupEmotionAuxItems(value) {
  if (!value) return [];
  if (Array.isArray(value)) return normalizeDressupEmotionAuxItems(value);
  try {
    return normalizeDressupEmotionAuxItems(JSON.parse(String(value)));
  } catch (error) {
    return [];
  }
}

function parseDressupShapeItems(value) {
  if (!value) return [];
  if (Array.isArray(value)) return normalizeDressupShapeItems(value);
  try {
    return normalizeDressupShapeItems(JSON.parse(String(value)));
  } catch (error) {
    return [];
  }
}

function parseDressupImageItems(value) {
  if (!value) return [];
  if (Array.isArray(value)) return normalizeDressupImageItems(value);
  try {
    return normalizeDressupImageItems(JSON.parse(String(value)));
  } catch (error) {
    return [];
  }
}

function normalizeDressupLayerOrder(order, visibleKeys = []) {
  const visible = Array.isArray(visibleKeys) && visibleKeys.length
    ? visibleKeys.filter((key) => isDressupLayerKeyAllowed(key))
    : [...dressupDefaultLayerOrder];
  const preferred = Array.isArray(order) ? order : [];
  const seen = new Set();
  const normalized = [];
  preferred.forEach((key) => {
    if (!visible.includes(key) || seen.has(key)) return;
    seen.add(key);
    normalized.push(key);
  });
  visible.forEach((key) => {
    if (seen.has(key)) return;
    seen.add(key);
    normalized.push(key);
  });
  const defaultVisible = dressupDefaultLayerOrder.filter((key) => visible.includes(key));
  const isDefault = normalized.length === defaultVisible.length
    && normalized.every((key, index) => key === defaultVisible[index]);
  return isDefault ? [] : normalized;
}

function normalizeDressupLayerColors(colors) {
  if (!colors || typeof colors !== "object" || Array.isArray(colors)) return {};
  return Object.entries(colors).reduce((output, [key, color]) => {
    if (!isDressupLayerKeyAllowed(key)) return output;
    const safeColor = normalizeHexColor(color);
    if (safeColor) output[key] = safeColor;
    return output;
  }, {});
}

function normalizeDressupLayerBlends(blends) {
  if (!blends || typeof blends !== "object" || Array.isArray(blends)) return {};
  const allowed = new Set(dressupBlendModes.map((item) => item.value));
  return Object.entries(blends).reduce((output, [key, blend]) => {
    if (!isDressupLayerKeyAllowed(key) || !allowed.has(String(blend))) return output;
    if (blend !== "normal") output[key] = String(blend);
    return output;
  }, {});
}

function normalizeDressupLayerItems(items) {
  if (!Array.isArray(items)) return [];
  const counts = {};
  return items
    .map((item) => {
      if (!item || typeof item !== "object" || Array.isArray(item)) return null;
      const field = String(item.field || "");
      if (!multiDressupAssetFields.has(field)) return null;
      const asset = dressupAssetByValue(item.value);
      if (!asset || !isDressupLayerItemValueAllowed(field, asset.value)) return null;
      const id = normalizeAccessoryId(item.id) || normalizeAccessoryId(createId());
      return {
        id,
        field,
        value: asset.value,
      };
    })
    .filter((item) => {
      if (!item) return false;
      counts[item.field] = counts[item.field] || 0;
      if (counts[item.field] >= maxDressupItemsPerField) return false;
      counts[item.field] += 1;
      return true;
    });
}

function isDressupLayerItemValueAllowed(field, value) {
  const options = dressupOptions[field] || [];
  return options.some((option) => option.value === value && option.value !== "none" && option.assetSrc);
}

function getDressupLayerItemsForField(avatar, field) {
  return normalizeDressupLayerItems(avatar?.layerItems).filter((item) => item.field === field);
}

function normalizeDressupFreeAccessories(items) {
  if (!Array.isArray(items)) return [];
  const counts = {};
  return items
    .map((item) => {
      if (!item || typeof item !== "object" || Array.isArray(item)) return null;
      const asset = dressupAssetByValue(item.value);
      if (!asset || asset.category !== "accessories") return null;
      const id = normalizeAccessoryId(item.id) || normalizeAccessoryId(createId());
      const slot = ["head", "face", "neck", "body"].includes(item.slot) ? item.slot : "body";
      return {
        id,
        value: asset.value,
        slot,
      };
    })
    .filter((item) => {
      if (!item) return false;
      counts[item.slot] = counts[item.slot] || 0;
      if (counts[item.slot] >= maxDressupItemsPerField) return false;
      counts[item.slot] += 1;
      return true;
    });
}

function normalizeDressupEmotionAuxItems(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item) => {
      if (!item || typeof item !== "object" || Array.isArray(item)) return null;
      const asset = dressupAssetByValue(item.value);
      if (!asset || asset.category !== "emotion_aux") return null;
      const id = normalizeAccessoryId(item.id) || normalizeAccessoryId(createId());
      return {
        id,
        value: asset.value,
      };
    })
    .filter(Boolean)
    .slice(0, maxEmotionAuxLayers);
}

function normalizeDressupShapeItems(items) {
  if (!Array.isArray(items)) return [];
  const allowed = new Set(shapeToolOptions.map((item) => item.value).filter((value) => value !== "leafBrush"));
  return items
    .map((item) => {
      if (!item || typeof item !== "object" || Array.isArray(item)) return null;
      const type = String(item.type || "");
      const id = normalizeAccessoryId(item.id) || normalizeAccessoryId(createId());
      if (allowed.has(type)) return { id, type };
      if (type === "path") {
        const points = normalizeShapePoints(item.points);
        return points.length >= 3 ? { id, type, points } : null;
      }
      if (type === "leafStroke") {
        const points = normalizeShapePoints(item.points);
        return points.length >= 2 ? { id, type, points } : null;
      }
      return null;
    })
    .filter(Boolean)
    .slice(0, maxShapeLayers);
}

function normalizeDressupImageItems(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item) => {
      if (!item || typeof item !== "object" || Array.isArray(item)) return null;
      const src = String(item.src || "");
      if (!src.startsWith("data:image/")) return null;
      return {
        id: normalizeAccessoryId(item.id) || normalizeAccessoryId(createId()),
        src,
        name: clean(item.name, "导入图片").slice(0, 40),
      };
    })
    .filter(Boolean)
    .slice(0, maxImportedImageLayers);
}

function normalizeShapePoints(points) {
  if (!Array.isArray(points)) return [];
  return points
    .map((point) => {
      if (!point || typeof point !== "object" || Array.isArray(point)) return null;
      const x = clampNumber(point.x, 0, 100, NaN);
      const y = clampNumber(point.y, 0, 100, NaN);
      return Number.isFinite(x) && Number.isFinite(y) ? { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 } : null;
    })
    .filter(Boolean)
    .slice(0, 160);
}

function normalizeAccessoryId(value) {
  return String(value || "")
    .trim()
    .replace(/[^\w-]/g, "")
    .slice(0, 48);
}

function freeAccessoryLayerKey(item) {
  return `free-accessory-${normalizeAccessoryId(item?.id)}`;
}

function isFreeAccessoryLayerKey(key) {
  return /^free-accessory-[\w-]+$/.test(String(key || ""));
}

function dressupLayerItemKey(item) {
  return `asset-item-${normalizeAccessoryId(item?.field)}-${normalizeAccessoryId(item?.id)}`;
}

function isDressupLayerItemKey(key) {
  return /^asset-item-[\w-]+-[\w-]+$/.test(String(key || ""));
}

function emotionAuxLayerKey(item) {
  return `emotion-aux-item-${normalizeAccessoryId(item?.id)}`;
}

function isEmotionAuxLayerKey(key) {
  return /^emotion-aux-item-[\w-]+$/.test(String(key || ""));
}

function shapeLayerKey(item) {
  return `shape-item-${normalizeAccessoryId(item?.id)}`;
}

function isShapeLayerKey(key) {
  return /^shape-item-[\w-]+$/.test(String(key || ""));
}

function imageLayerKey(item) {
  return `custom-image-${normalizeAccessoryId(item?.id)}`;
}

function isImageLayerKey(key) {
  return /^custom-image-[\w-]+$/.test(String(key || ""));
}

function isDressupLayerKeyAllowed(key) {
  return Boolean(dressupLayerLabels[key] || isDressupLayerItemKey(key) || isFreeAccessoryLayerKey(key) || isEmotionAuxLayerKey(key) || isShapeLayerKey(key) || isImageLayerKey(key));
}

function isDressupLayerDeletable(key) {
  if (isDressupLayerItemKey(key) || isFreeAccessoryLayerKey(key) || isEmotionAuxLayerKey(key) || isShapeLayerKey(key) || isImageLayerKey(key)) return true;
  return new Set([
    "base-head",
    "base-body",
    "creature",
    "outfit",
    "bottom",
    "hair",
    "expression",
    "accessory-head",
    "accessory-face",
    "accessory-neck",
    "accessory-body",
    "emotion-aux",
  ]).has(key);
}

function getVisibleDressupLayerKeys(avatar = currentDressupAvatar || {}) {
  return getDressupArtLayerSpecs(avatar || {}).map((layer) => layer.key);
}

function getSelectedDressupLayerKeys(avatar = currentDressupAvatar || {}) {
  const visibleKeys = getVisibleDressupLayerKeys(avatar);
  const visible = new Set(visibleKeys);
  const selected = [...selectedDressupLayers].filter((key) => visible.has(key));
  if (selected.length) return selected;
  if (visible.has(activeDressupLayer)) return [activeDressupLayer];
  return visibleKeys.length ? [visibleKeys[0]] : [];
}

function getDressupTargetLayerKeys(layerKey) {
  const selected = getSelectedDressupLayerKeys(currentDressupAvatar);
  return selected.includes(layerKey) && selected.length > 1 ? selected : [layerKey].filter(Boolean);
}

function applyDressupSelectionToDom() {
  const selected = new Set(getSelectedDressupLayerKeys(currentDressupAvatar));
  selectedDressupLayers = selected;
  dom.avatarBody?.querySelectorAll(".dressup-avatar-editor .dressup-art-layer").forEach((layer) => {
    const layerKey = layer.dataset.dressupLayer;
    layer.classList.toggle("is-selected", isDressupLayerSelectionVisible && selected.has(layerKey));
    layer.classList.toggle("is-primary-selected", isDressupLayerSelectionVisible && layerKey === activeDressupLayer);
  });
}

function toggleDressupMultiSelectMode() {
  if (!currentDressupAvatar || !activeDressupLayer) return;
  selectedDressupLayers = new Set(getSelectedDressupLayerKeys(currentDressupAvatar));
  selectedDressupLayers.add(activeDressupLayer);
  isDressupLayerSelectionVisible = true;
  isDressupMultiSelectMode = !isDressupMultiSelectMode;
  applyDressupSelectionToDom();
  updateDressupLayerToolState();
}

function toggleDressupColorPickMode() {
  if (!currentDressupAvatar || !activeDressupLayer) return;
  setDressupColorPickMode(!isDressupColorPickMode);
  if (isDressupColorPickMode) showToast("点击角色框里的元素来取色。");
}

function setDressupColorPickMode(enabled, options = {}) {
  isDressupColorPickMode = Boolean(enabled);
  dom.avatarBody?.querySelector(".relationship-dressup-page")?.classList.toggle("is-color-picking", isDressupColorPickMode);
  if (!options.silent) updateDressupLayerToolState();
}

function normalizeHexColor(color) {
  const text = String(color || "").trim();
  if (/^#[0-9a-f]{6}$/i.test(text)) return text.toLowerCase();
  if (/^#[0-9a-f]{3}$/i.test(text)) {
    return `#${text.slice(1).split("").map((char) => char + char).join("")}`.toLowerCase();
  }
  return "";
}

function getDressupLayerColor(avatar, layerKey) {
  return normalizeDressupLayerColors(avatar?.layerColors)?.[layerKey] || "";
}

function getDressupLayerBlend(avatar, layerKey) {
  return normalizeDressupLayerBlends(avatar?.layerBlends)?.[layerKey] || "normal";
}

function getDressupLayerOrder(avatar, layers = getDressupArtLayerSpecs(avatar)) {
  const visibleKeys = layers.map((layer) => layer.key);
  const customOrder = normalizeDressupLayerOrder(avatar?.layerOrder, visibleKeys);
  return customOrder.length ? customOrder : dressupDefaultLayerOrder.filter((key) => visibleKeys.includes(key));
}

function getDressupLayerZIndex(avatar, layerKey, layers = getDressupArtLayerSpecs(avatar)) {
  const order = getDressupLayerOrder(avatar, layers);
  const index = order.indexOf(layerKey);
  return index < 0 ? 20 : 20 + index * 2;
}

function normalizeDressupLayerTransforms(transforms) {
  if (!transforms || typeof transforms !== "object" || Array.isArray(transforms)) return {};
  return Object.entries(transforms).reduce((output, [key, transform]) => {
    if (!isDressupLayerKeyAllowed(key) || !transform || typeof transform !== "object" || Array.isArray(transform)) return output;
    const x = clampNumber(transform.x, dressupLayerTransformLimits.x[0], dressupLayerTransformLimits.x[1], 0);
    const y = clampNumber(transform.y, dressupLayerTransformLimits.y[0], dressupLayerTransformLimits.y[1], 0);
    const scale = clampNumber(transform.scale, dressupLayerTransformLimits.scale[0], dressupLayerTransformLimits.scale[1], 1);
    const rotate = clampNumber(transform.rotate, dressupLayerTransformLimits.rotate[0], dressupLayerTransformLimits.rotate[1], 0);
    if (x !== 0 || y !== 0 || scale !== 1 || rotate !== 0) output[key] = { x, y, scale, rotate };
    return output;
  }, {});
}

function getDressupLayerTransform(avatar, layerKey) {
  const transform = normalizeDressupLayerTransforms(avatar?.layerTransforms)?.[layerKey] || {};
  return {
    x: Number.isFinite(Number(transform.x)) ? Number(transform.x) : 0,
    y: Number.isFinite(Number(transform.y)) ? Number(transform.y) : 0,
    scale: Number.isFinite(Number(transform.scale)) ? Number(transform.scale) : 1,
    rotate: Number.isFinite(Number(transform.rotate)) ? Number(transform.rotate) : 0,
  };
}

function setDressupLayerTransform(layerKey, patch) {
  if (!layerKey || !currentDressupAvatar) return;
  const transforms = normalizeDressupLayerTransforms(currentDressupAvatar.layerTransforms);
  const current = getDressupLayerTransform(currentDressupAvatar, layerKey);
  transforms[layerKey] = {
    x: patch.x == null ? current.x : clampNumber(patch.x, dressupLayerTransformLimits.x[0], dressupLayerTransformLimits.x[1], 0),
    y: patch.y == null ? current.y : clampNumber(patch.y, dressupLayerTransformLimits.y[0], dressupLayerTransformLimits.y[1], 0),
    scale: patch.scale == null ? current.scale : clampNumber(patch.scale, dressupLayerTransformLimits.scale[0], dressupLayerTransformLimits.scale[1], 1),
    rotate: patch.rotate == null ? current.rotate : clampNumber(patch.rotate, dressupLayerTransformLimits.rotate[0], dressupLayerTransformLimits.rotate[1], 0),
  };
  currentDressupAvatar.layerTransforms = normalizeDressupLayerTransforms(transforms);
}

function dressupLayerTransformStyle(avatar, layerKey) {
  const transform = getDressupLayerTransform(avatar, layerKey);
  const color = getDressupLayerColor(avatar, layerKey);
  const filter = color ? dressupColorFilter(color) : "saturate(1)";
  const blend = getDressupLayerBlend(avatar, layerKey);
  return `--layer-x:${formatTransformNumber(transform.x)}cqw;--layer-y:${formatTransformNumber(transform.y)}cqh;--layer-scale:${formatTransformNumber(transform.scale)};--layer-rotate:${formatTransformNumber(transform.rotate)}deg;--layer-filter:${filter};--layer-blend:${blend};z-index:${getDressupLayerZIndex(avatar, layerKey)};`;
}

function formatTransformNumber(value) {
  return Number(value || 0).toFixed(3).replace(/\.?0+$/, "");
}

function dressupColorFilter(color) {
  const rgb = hexToRgb(color);
  if (!rgb) return "none";
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const hue = Math.round(hsl.h - 35);
  const saturation = Math.round(80 + hsl.s * 520);
  const brightness = Number((0.62 + hsl.l * 0.82).toFixed(2));
  return `sepia(1) saturate(${saturation}%) hue-rotate(${hue}deg) brightness(${brightness})`;
}

function hexToRgb(color) {
  const safe = normalizeHexColor(color);
  if (!safe) return null;
  const value = Number.parseInt(safe.slice(1), 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function rgbToHexColor(r, g, b) {
  return `#${[r, g, b].map((value) => {
    const safe = clampNumber(Number(value) || 0, 0, 255, 0);
    return Math.round(safe).toString(16).padStart(2, "0");
  }).join("")}`;
}

function rgbToHsl(r, g, b) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const lightness = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l: lightness };
  const delta = max - min;
  const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  let hue = 0;
  if (max === red) hue = (green - blue) / delta + (green < blue ? 6 : 0);
  if (max === green) hue = (blue - red) / delta + 2;
  if (max === blue) hue = (red - green) / delta + 4;
  return { h: hue * 60, s: saturation, l: lightness };
}

function setActiveDressupLayer(layerKey, options = {}) {
  if (!layerKey) return;
  activeDressupLayer = layerKey;
  isDressupLayerSelectionVisible = true;
  const selected = new Set(getSelectedDressupLayerKeys(currentDressupAvatar));
  if (options.additive) {
    selected.add(layerKey);
    isDressupMultiSelectMode = false;
  } else if (!options.preserveGroup || !selected.has(layerKey)) {
    selected.clear();
    selected.add(layerKey);
    if (!options.keepMultiMode) isDressupMultiSelectMode = false;
  }
  selectedDressupLayers = selected;
  applyDressupSelectionToDom();
  updateDressupLayerToolState();
}

function hideDressupLayerSelection() {
  isDressupLayerSelectionVisible = false;
  isDressupMultiSelectMode = false;
  dom.avatarBody?.querySelectorAll(".dressup-avatar-editor .dressup-art-layer.is-selected").forEach((layer) => {
    layer.classList.remove("is-selected");
    layer.classList.remove("is-primary-selected");
  });
  updateDressupLayerToolState();
}

function updateDressupLayerToolState() {
  if (!currentDressupAvatar || !dom.avatarBody) return;
  const layers = getDressupArtLayerSpecs(currentDressupAvatar);
  const layer = layers.find((item) => item.key === activeDressupLayer) || layers[0];
  if (!layer) return;
  activeDressupLayer = layer.key;
  const transform = getDressupLayerTransform(currentDressupAvatar, layer.key);
  const selectedKeys = getSelectedDressupLayerKeys(currentDressupAvatar);
  const name = dom.avatarBody.querySelector("[data-dressup-active-name]");
  const scaleText = dom.avatarBody.querySelector("[data-dressup-scale-value]");
  const rotateText = dom.avatarBody.querySelector("[data-dressup-rotate-value]");
  const scaleInput = dom.avatarBody.querySelector("[data-dressup-scale]");
  const rotateInput = dom.avatarBody.querySelector("[data-dressup-rotate]");
  const colorInput = dom.avatarBody.querySelector("[data-dressup-color]");
  const blendInput = dom.avatarBody.querySelector("[data-dressup-blend]");
  const addSelectButton = dom.avatarBody.querySelector("[data-action='toggle-dressup-multi-select']");
  const pickColorButton = dom.avatarBody.querySelector("[data-action='toggle-dressup-color-pick']");
  const resetButton = dom.avatarBody.querySelector("[data-action='reset-dressup-layer']");
  const resetColorButton = dom.avatarBody.querySelector("[data-action='reset-dressup-layer-color']");
  const undoButton = dom.avatarBody.querySelector("[data-action='undo-dressup']");
  const deleteButtons = dom.avatarBody.querySelectorAll("[data-action='delete-dressup-layer'], [data-action='delete-selected-dressup-layer']");
  const layerDownButton = dom.avatarBody.querySelector("[data-action='dressup-layer-down']");
  const layerUpButton = dom.avatarBody.querySelector("[data-action='dressup-layer-up']");
  const order = getDressupLayerOrder(currentDressupAvatar, layers);
  const orderIndex = order.indexOf(layer.key);
  const color = getDressupLayerColor(currentDressupAvatar, layer.key);
  const blend = getDressupLayerBlend(currentDressupAvatar, layer.key);
  const selectedLabel = selectedKeys.length > 1 ? `${selectedKeys.length} 个图层` : (dressupLayerLabels[layer.key] || layer.label);
  if (name) name.textContent = selectedLabel;
  if (scaleText) scaleText.textContent = `${Math.round(transform.scale * 100)}%`;
  if (rotateText) rotateText.textContent = `${Math.round(transform.rotate)}°`;
  if (scaleInput) {
    scaleInput.dataset.layer = layer.key;
    scaleInput.value = String(transform.scale);
  }
  if (rotateInput) {
    rotateInput.dataset.layer = layer.key;
    rotateInput.value = String(transform.rotate);
  }
  if (colorInput) {
    colorInput.dataset.layer = layer.key;
    colorInput.value = color || "#ff7dcb";
  }
  if (blendInput) {
    blendInput.dataset.layer = layer.key;
    blendInput.value = blend;
  }
  if (resetButton) resetButton.dataset.layer = layer.key;
  if (undoButton) undoButton.disabled = !dressupUndoStack.length;
  const canDeleteSelected = selectedKeys.some((key) => isDressupLayerDeletable(key));
  deleteButtons.forEach((button) => {
    button.dataset.layer = layer.key;
    button.hidden = !canDeleteSelected;
    button.disabled = !canDeleteSelected;
  });
  if (addSelectButton) {
    addSelectButton.classList.toggle("is-active", isDressupMultiSelectMode);
    addSelectButton.setAttribute("aria-pressed", isDressupMultiSelectMode ? "true" : "false");
  }
  if (pickColorButton) {
    pickColorButton.classList.toggle("is-active", isDressupColorPickMode);
    pickColorButton.setAttribute("aria-pressed", isDressupColorPickMode ? "true" : "false");
  }
  if (resetColorButton) {
    resetColorButton.dataset.layer = layer.key;
    resetColorButton.disabled = !selectedKeys.some((key) => getDressupLayerColor(currentDressupAvatar, key));
  }
  if (layerDownButton) {
    layerDownButton.dataset.layer = layer.key;
    layerDownButton.disabled = orderIndex <= 0;
  }
  if (layerUpButton) {
    layerUpButton.dataset.layer = layer.key;
    layerUpButton.disabled = orderIndex < 0 || orderIndex >= order.length - 1;
  }
}

function applyDressupLayerTransformToDom(layerKey) {
  if (!currentDressupAvatar || !dom.avatarBody) return;
  const transform = getDressupLayerTransform(currentDressupAvatar, layerKey);
  dom.avatarBody.querySelectorAll(".dressup-avatar-editor .dressup-art-layer").forEach((layer) => {
    if (layer.dataset.dressupLayer !== layerKey) return;
    layer.style.setProperty("--layer-x", `${formatTransformNumber(transform.x)}cqw`);
    layer.style.setProperty("--layer-y", `${formatTransformNumber(transform.y)}cqh`);
    layer.style.setProperty("--layer-scale", formatTransformNumber(transform.scale));
    layer.style.setProperty("--layer-rotate", `${formatTransformNumber(transform.rotate)}deg`);
  });
  updateDressupLayerToolState();
}

function applyDressupLayerColorToDom(layerKey) {
  if (!currentDressupAvatar || !dom.avatarBody) return;
  const color = getDressupLayerColor(currentDressupAvatar, layerKey);
  dom.avatarBody.querySelectorAll(".dressup-avatar-editor .dressup-art-layer").forEach((layer) => {
    if (layer.dataset.dressupLayer !== layerKey) return;
    if (layer.classList.contains("dressup-art-shape-item")) {
      layer.style.setProperty("--layer-filter", "saturate(1)");
      layer.style.color = color || "#ff7dcb";
    } else {
      layer.style.setProperty("--layer-filter", color ? dressupColorFilter(color) : "saturate(1)");
    }
  });
  updateDressupLayerToolState();
}

function applyDressupLayerBlendToDom(layerKey) {
  if (!currentDressupAvatar || !dom.avatarBody) return;
  const blend = getDressupLayerBlend(currentDressupAvatar, layerKey);
  dom.avatarBody.querySelectorAll(".dressup-avatar-editor .dressup-art-layer").forEach((layer) => {
    if (layer.dataset.dressupLayer !== layerKey) return;
    layer.style.setProperty("--layer-blend", blend);
  });
  updateDressupLayerToolState();
}

function applyDressupLayerOrderToDom() {
  if (!currentDressupAvatar || !dom.avatarBody) return;
  const layers = getDressupArtLayerSpecs(currentDressupAvatar);
  dom.avatarBody.querySelectorAll(".dressup-avatar-editor .dressup-art-layer").forEach((layer) => {
    const layerKey = layer.dataset.dressupLayer;
    layer.style.zIndex = String(getDressupLayerZIndex(currentDressupAvatar, layerKey, layers));
  });
  updateDressupLayerToolState();
}

function updateDressupLayerScale(layerKey, value) {
  if (!layerKey || !currentDressupAvatar) return;
  const targetKeys = getDressupTargetLayerKeys(layerKey);
  if (!targetKeys.length) return;
  pushDressupContinuousUndoState(`scale:${targetKeys.join(",")}`);
  activeDressupLayer = layerKey;
  isDressupLayerSelectionVisible = true;
  targetKeys.forEach((key) => setDressupLayerTransform(key, { scale: Number(value) }));
  targetKeys.forEach((key) => applyDressupLayerTransformToDom(key));
  applyDressupSelectionToDom();
  updateDressupLayerToolState();
}

function updateDressupLayerRotate(layerKey, value) {
  if (!layerKey || !currentDressupAvatar) return;
  const targetKeys = getDressupTargetLayerKeys(layerKey);
  if (!targetKeys.length) return;
  pushDressupContinuousUndoState(`rotate:${targetKeys.join(",")}`);
  activeDressupLayer = layerKey;
  isDressupLayerSelectionVisible = true;
  targetKeys.forEach((key) => setDressupLayerTransform(key, { rotate: Number(value) }));
  targetKeys.forEach((key) => applyDressupLayerTransformToDom(key));
  applyDressupSelectionToDom();
  updateDressupLayerToolState();
}

function updateDressupLayerColor(layerKey, value) {
  if (!layerKey || !currentDressupAvatar) return;
  const targetKeys = getDressupTargetLayerKeys(layerKey);
  if (!targetKeys.length) return;
  pushDressupContinuousUndoState(`color:${targetKeys.join(",")}`);
  const color = normalizeHexColor(value);
  const colors = normalizeDressupLayerColors(currentDressupAvatar.layerColors);
  targetKeys.forEach((key) => {
    if (color) {
      colors[key] = color;
    } else {
      delete colors[key];
    }
  });
  currentDressupAvatar.layerColors = colors;
  activeDressupLayer = layerKey;
  isDressupLayerSelectionVisible = true;
  targetKeys.forEach((key) => applyDressupLayerColorToDom(key));
  applyDressupSelectionToDom();
  updateDressupLayerToolState();
}

function updateDressupLayerBlend(layerKey, value) {
  if (!layerKey || !currentDressupAvatar) return;
  const allowed = new Set(dressupBlendModes.map((item) => item.value));
  const blend = allowed.has(String(value)) ? String(value) : "normal";
  const targetKeys = getDressupTargetLayerKeys(layerKey);
  if (!targetKeys.length) return;
  pushDressupContinuousUndoState(`blend:${targetKeys.join(",")}`);
  const blends = normalizeDressupLayerBlends(currentDressupAvatar.layerBlends);
  targetKeys.forEach((key) => {
    if (blend === "normal") {
      delete blends[key];
    } else {
      blends[key] = blend;
    }
  });
  currentDressupAvatar.layerBlends = blends;
  activeDressupLayer = layerKey;
  isDressupLayerSelectionVisible = true;
  targetKeys.forEach((key) => applyDressupLayerBlendToDom(key));
  applyDressupSelectionToDom();
  updateDressupLayerToolState();
}

function moveDressupLayerOrder(layerKey, direction) {
  if (!layerKey || !currentDressupAvatar || !direction) return;
  const layers = getDressupArtLayerSpecs(currentDressupAvatar);
  const visibleKeys = layers.map((layer) => layer.key);
  const order = getDressupLayerOrder(currentDressupAvatar, layers);
  const selected = new Set(getDressupTargetLayerKeys(layerKey).filter((key) => order.includes(key)));
  const indexes = [...selected]
    .map((key) => order.indexOf(key))
    .filter((index) => index >= 0)
    .sort((a, b) => direction > 0 ? b - a : a - b);
  if (!indexes.length) return;
  pushDressupUndoState();
  indexes.forEach((index) => {
    const nextIndex = index + (direction > 0 ? 1 : -1);
    if (nextIndex < 0 || nextIndex >= order.length || selected.has(order[nextIndex])) return;
    [order[index], order[nextIndex]] = [order[nextIndex], order[index]];
  });
  currentDressupAvatar.layerOrder = normalizeDressupLayerOrder(order, visibleKeys);
  activeDressupLayer = layerKey;
  isDressupLayerSelectionVisible = true;
  selectedDressupLayers = selected;
  applyDressupLayerOrderToDom();
  applyDressupSelectionToDom();
}

function resetDressupLayerTransform(layerKey) {
  if (!layerKey || !currentDressupAvatar) return;
  const targetKeys = getDressupTargetLayerKeys(layerKey);
  if (!targetKeys.length) return;
  pushDressupUndoState();
  const transforms = normalizeDressupLayerTransforms(currentDressupAvatar.layerTransforms);
  targetKeys.forEach((key) => delete transforms[key]);
  currentDressupAvatar.layerTransforms = transforms;
  activeDressupLayer = layerKey;
  isDressupLayerSelectionVisible = true;
  targetKeys.forEach((key) => applyDressupLayerTransformToDom(key));
  applyDressupSelectionToDom();
  updateDressupLayerToolState();
}

function resetDressupLayerColor(layerKey) {
  if (!layerKey || !currentDressupAvatar) return;
  const targetKeys = getDressupTargetLayerKeys(layerKey);
  if (!targetKeys.length) return;
  pushDressupUndoState();
  const colors = normalizeDressupLayerColors(currentDressupAvatar.layerColors);
  targetKeys.forEach((key) => delete colors[key]);
  currentDressupAvatar.layerColors = colors;
  activeDressupLayer = layerKey;
  isDressupLayerSelectionVisible = true;
  targetKeys.forEach((key) => applyDressupLayerColorToDom(key));
  applyDressupSelectionToDom();
  updateDressupLayerToolState();
}

function deleteDressupLayer(layerKey) {
  if (!layerKey || !currentDressupAvatar) return;
  const targetKeys = getDressupTargetLayerKeys(layerKey).filter(isDressupLayerDeletable);
  if (!targetKeys.length) return;
  pushDressupUndoState();
  const freeKeys = new Set(targetKeys.filter(isFreeAccessoryLayerKey));
  if (freeKeys.size) {
    currentDressupAvatar.freeAccessories = normalizeDressupFreeAccessories(currentDressupAvatar.freeAccessories)
      .filter((item) => !freeKeys.has(freeAccessoryLayerKey(item)));
  }
  const emotionAuxKeys = new Set(targetKeys.filter(isEmotionAuxLayerKey));
  if (emotionAuxKeys.size) {
    currentDressupAvatar.emotionAuxItems = normalizeDressupEmotionAuxItems(currentDressupAvatar.emotionAuxItems)
      .filter((item) => !emotionAuxKeys.has(emotionAuxLayerKey(item)));
    currentDressupAvatar.emotionAuxAsset = "none";
  }
  const shapeKeys = new Set(targetKeys.filter(isShapeLayerKey));
  if (shapeKeys.size) {
    currentDressupAvatar.shapeItems = normalizeDressupShapeItems(currentDressupAvatar.shapeItems)
      .filter((item) => !shapeKeys.has(shapeLayerKey(item)));
  }
  const imageKeys = new Set(targetKeys.filter(isImageLayerKey));
  if (imageKeys.size) {
    currentDressupAvatar.imageItems = normalizeDressupImageItems(currentDressupAvatar.imageItems)
      .filter((item) => !imageKeys.has(imageLayerKey(item)));
  }
  const layerItemKeys = new Set(targetKeys.filter(isDressupLayerItemKey));
  if (layerItemKeys.size) {
    currentDressupAvatar.layerItems = normalizeDressupLayerItems(currentDressupAvatar.layerItems)
      .filter((item) => !layerItemKeys.has(dressupLayerItemKey(item)));
  }
  const deleteMap = {
    "base-head": ["baseHead"],
    "base-body": ["baseBodyPart"],
    creature: ["creatureAsset"],
    outfit: ["outfitAsset"],
    bottom: ["bottomAsset"],
    hair: ["hairAsset"],
    expression: ["expressionAsset"],
    "accessory-head": ["accessoryHeadAsset"],
    "accessory-face": ["accessoryFaceAsset"],
    "accessory-neck": ["accessoryNeckAsset"],
    "accessory-body": ["accessoryBodyAsset"],
    "emotion-aux": ["emotionAuxAsset"],
  };
  targetKeys.forEach((key) => {
    (deleteMap[key] || []).forEach((field) => {
      currentDressupAvatar[field] = "none";
    });
  });
  targetKeys.forEach(removeDressupLayerState);
  activeDressupLayer = "";
  selectedDressupLayers = new Set();
  isDressupMultiSelectMode = false;
  isDressupLayerSelectionVisible = true;
  renderDressupBuilder();
}

function removeDressupLayerState(layerKey) {
  const transforms = normalizeDressupLayerTransforms(currentDressupAvatar.layerTransforms);
  const colors = normalizeDressupLayerColors(currentDressupAvatar.layerColors);
  const blends = normalizeDressupLayerBlends(currentDressupAvatar.layerBlends);
  delete transforms[layerKey];
  delete colors[layerKey];
  delete blends[layerKey];
  currentDressupAvatar.layerTransforms = transforms;
  currentDressupAvatar.layerColors = colors;
  currentDressupAvatar.layerBlends = blends;
  currentDressupAvatar.layerOrder = normalizeDressupLayerOrder(currentDressupAvatar.layerOrder, getDressupArtLayerSpecs(currentDressupAvatar).map((layer) => layer.key));
}

function startDressupLayerPointer(event) {
  if (activeShapeTool === "leafBrush" && event.target.closest(".dressup-avatar-editor")) return;
  const layer = event.target.closest(".dressup-avatar-editor .dressup-art-layer[data-dressup-layer]");
  if (!dom.avatarDialog?.open) return;
  if (!layer) {
    if (event.target.closest(".relationship-dressup-page") && !event.target.closest(".relationship-dressup-layer-tools")) {
      if (isDressupColorPickMode) setDressupColorPickMode(false);
      hideDressupLayerSelection();
    }
    return;
  }
  event.preventDefault();
  if (isDressupColorPickMode) {
    pickDressupColorFromLayer(layer, event);
    return;
  }
  const layerKey = layer.dataset.dressupLayer;
  const additive = isDressupMultiSelectMode && !selectedDressupLayers.has(layerKey);
  const preserveGroup = isDressupLayerSelectionVisible && selectedDressupLayers.has(layerKey) && selectedDressupLayers.size > 1;
  setActiveDressupLayer(layerKey, { additive, preserveGroup, keepMultiMode: false });
  const avatar = layer.closest(".dressup-avatar-editor");
  const rect = avatar?.getBoundingClientRect();
  if (!rect?.width || !rect?.height) return;
  const targetKeys = getDressupTargetLayerKeys(layerKey);
  clearDressupContinuousUndoState();
  const origins = targetKeys.reduce((output, key) => {
    const transform = getDressupLayerTransform(currentDressupAvatar, key);
    output[key] = { x: transform.x, y: transform.y };
    return output;
  }, {});
  dressupPointerState = {
    pointerId: event.pointerId,
    layerKey,
    targetKeys,
    origins,
    startX: event.clientX,
    startY: event.clientY,
    avatarWidth: rect.width,
    avatarHeight: rect.height,
    hasUndoState: false,
  };
  layer.setPointerCapture?.(event.pointerId);
}

async function pickDressupColorFromLayer(layer, event) {
  const targetLayer = activeDressupLayer;
  const color = await sampleDressupLayerColor(layer, event);
  setDressupColorPickMode(false);
  if (!color) {
    showToast("这个位置没有取到颜色。");
    return;
  }
  if (!targetLayer) {
    showToast("请先选中要改色的元素。");
    return;
  }
  updateDressupLayerColor(targetLayer, color);
  showToast("已取色并应用。");
}

async function sampleDressupLayerColor(layer, event) {
  const layerKey = layer?.dataset?.dressupLayer || "";
  const customColor = getDressupLayerColor(currentDressupAvatar, layerKey);
  if (layer?.classList?.contains("dressup-art-shape-item")) return customColor || computedCssColorToHex(layer);
  if (customColor) return customColor;
  if (layer instanceof HTMLImageElement) {
    const sampled = await sampleImageElementColor(layer, event);
    if (sampled) return sampled;
  }
  return computedCssColorToHex(layer);
}

function computedCssColorToHex(element) {
  if (!element) return "";
  const color = window.getComputedStyle(element).color || "";
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!match) return "";
  return rgbToHexColor(Number(match[1]), Number(match[2]), Number(match[3]));
}

async function sampleImageElementColor(image, event) {
  try {
    if (!image.complete || !image.naturalWidth || !image.naturalHeight) {
      await image.decode?.();
    }
    if (!image.naturalWidth || !image.naturalHeight) return "";
    const rect = image.getBoundingClientRect();
    if (!rect.width || !rect.height) return "";
    const xRatio = clampNumber((event.clientX - rect.left) / rect.width, 0, 1, 0.5);
    const yRatio = clampNumber((event.clientY - rect.top) / rect.height, 0, 1, 0.5);
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) return "";
    context.drawImage(image, 0, 0);
    const x = Math.round(xRatio * (canvas.width - 1));
    const y = Math.round(yRatio * (canvas.height - 1));
    return nearestOpaquePixelColor(context, x, y, canvas.width, canvas.height);
  } catch (error) {
    return "";
  }
}

function nearestOpaquePixelColor(context, x, y, width, height) {
  const radius = 14;
  const left = Math.max(0, x - radius);
  const top = Math.max(0, y - radius);
  const sampleWidth = Math.min(width - left, radius * 2 + 1);
  const sampleHeight = Math.min(height - top, radius * 2 + 1);
  const pixels = context.getImageData(left, top, sampleWidth, sampleHeight).data;
  let best = null;
  let bestDistance = Infinity;
  for (let row = 0; row < sampleHeight; row += 1) {
    for (let column = 0; column < sampleWidth; column += 1) {
      const index = (row * sampleWidth + column) * 4;
      const alpha = pixels[index + 3];
      if (alpha < 16) continue;
      const px = left + column;
      const py = top + row;
      const distance = (px - x) ** 2 + (py - y) ** 2;
      if (distance >= bestDistance) continue;
      bestDistance = distance;
      best = rgbToHexColor(pixels[index], pixels[index + 1], pixels[index + 2]);
    }
  }
  return best || "";
}

function moveDressupLayerPointer(event) {
  if (!dressupPointerState || event.pointerId !== dressupPointerState.pointerId) return;
  event.preventDefault();
  if (!dressupPointerState.hasUndoState) {
    pushDressupUndoState();
    dressupPointerState.hasUndoState = true;
  }
  const dx = ((event.clientX - dressupPointerState.startX) / dressupPointerState.avatarWidth) * 100;
  const dy = ((event.clientY - dressupPointerState.startY) / dressupPointerState.avatarHeight) * 100;
  dressupPointerState.targetKeys.forEach((key) => {
    const origin = dressupPointerState.origins[key] || { x: 0, y: 0 };
    setDressupLayerTransform(key, {
      x: origin.x + dx,
      y: origin.y + dy,
    });
    applyDressupLayerTransformToDom(key);
  });
  applyDressupSelectionToDom();
  updateDressupLayerToolState();
}

function endDressupLayerPointer(event) {
  if (!dressupPointerState || event.pointerId !== dressupPointerState.pointerId) return;
  dressupPointerState = null;
}

function saveDressupAvatar() {
  const avatar = normalizeRelationshipCard({ avatar: currentDressupAvatar || avatarFromEditorForm() }).avatar;
  setAvatarHiddenInputs(avatar);
  updateEditorPortrait(avatar);
  dom.avatarDialog?.close();
  showToast("角色形象已保存。");
}

function renderDressupAvatar(avatar, variant = "", options = {}) {
  const safeAvatar = normalizeRelationshipCard({ avatar: avatar || {} }).avatar;
  const skin = avatarPalette.skinTone[safeAvatar.skinTone] || "#efb07d";
  const hair = avatarPalette.hairColor[safeAvatar.hairColor] || "#15111f";
  const top = dressupColor("top", safeAvatar.top);
  const bottom = dressupColor("bottom", safeAvatar.bottom);
  const shoes = dressupColor("shoes", safeAvatar.shoes);
  const editable = Boolean(options.editable);
  const artLayers = renderDressupArtLayers(safeAvatar, { editable });
  return `
    <div class="dressup-avatar ${editable ? "dressup-avatar-editor" : ""} ${artLayers ? "has-art-layers" : ""} ${variant ? `dressup-avatar-${escapeHtml(variant)}` : ""} species-${dressupClass(safeAvatar.species)} body-${bodyKey(safeAvatar.bodyType)} hair-${hairKey(safeAvatar.hairStyle)} expression-${expressionKey(safeAvatar.expression)} effect-${dressupClass(safeAvatar.effect)} backdrop-${backdropKey(safeAvatar.backdrop)}"
      style="--skin:${skin};--hair:${hair};--dress-top:${top};--dress-bottom:${bottom};--dress-shoes:${shoes};">
      <span class="dressup-layer dressup-effect" aria-hidden="true">${dressupEffectSymbol(safeAvatar.effect)}</span>
      ${artLayers}
      ${editable ? `<svg class="dressup-shape-draw-preview" viewBox="0 0 100 100" aria-hidden="true"><path data-shape-draw-preview d="" /></svg>` : ""}
      <span class="dressup-layer dressup-body" aria-hidden="true"></span>
      <span class="dressup-layer dressup-ears" aria-hidden="true"></span>
      <span class="dressup-layer dressup-hair-back" aria-hidden="true"></span>
      <span class="dressup-layer dressup-face" aria-hidden="true">
        <i class="dressup-eye dressup-eye-left"></i>
        <i class="dressup-eye dressup-eye-right"></i>
        <i class="dressup-mouth"></i>
        <i class="dressup-expression-effect">${dressupExpressionSymbol(safeAvatar.expressionEffect)}</i>
      </span>
      <span class="dressup-layer dressup-top" aria-hidden="true"></span>
      <span class="dressup-layer dressup-bottom" aria-hidden="true"></span>
      <span class="dressup-layer dressup-shoes" aria-hidden="true"></span>
      <span class="dressup-layer dressup-hair-front" aria-hidden="true"></span>
      <span class="dressup-layer dressup-bangs" aria-hidden="true">${safeAvatar.bangs === "无刘海" ? "" : "︶"}</span>
      <span class="dressup-layer dressup-head-accessory" aria-hidden="true">${dressupAccessorySymbol(safeAvatar.accessoryHead)}</span>
      <span class="dressup-layer dressup-face-accessory" aria-hidden="true">${dressupAccessorySymbol(safeAvatar.accessoryFace)}</span>
      <span class="dressup-layer dressup-neck-accessory" aria-hidden="true">${dressupAccessorySymbol(safeAvatar.accessoryNeck)}</span>
      <span class="dressup-layer dressup-body-accessory" aria-hidden="true">${dressupAccessorySymbol(safeAvatar.accessoryBody)}</span>
    </div>
  `;
}

function renderDressupArtLayers(avatar, options = {}) {
  return getDressupArtLayerSpecs(avatar)
    .map((layer) => renderDressupArtLayer(layer, avatar, options))
    .filter(Boolean)
    .join("");
}

function getDressupArtLayerSpecs(avatar) {
  const creature = dressupAssetSrc(avatar.creatureAsset);
  const baseLayers = creature
    ? [{ key: "creature", src: creature, label: "团子 / 物种" }]
    : [
        { key: "base-body", src: dressupAssetSrc(avatar.baseBodyPart), label: "身体基础" },
        { key: "base-head", src: dressupAssetSrc(avatar.baseHead), label: "头部基础" },
      ];
  const coreLayers = [
    ...baseLayers,
    { key: "outfit", src: dressupAssetSrc(avatar.outfitAsset), label: "上装" },
    { key: "bottom", src: dressupAssetSrc(avatar.bottomAsset), label: "下装鞋子" },
    { key: "hair", src: dressupAssetSrc(avatar.hairAsset), label: "发型" },
    { key: "expression", src: dressupAssetSrc(avatar.expressionAsset), label: "表情" },
    { key: "accessory-head", src: dressupAssetSrc(avatar.accessoryHeadAsset), label: "头部配饰" },
    { key: "accessory-face", src: dressupAssetSrc(avatar.accessoryFaceAsset), label: "脸部配饰" },
    { key: "accessory-neck", src: dressupAssetSrc(avatar.accessoryNeckAsset), label: "颈部配饰" },
    { key: "accessory-body", src: dressupAssetSrc(avatar.accessoryBodyAsset), label: "身体配饰" },
  ].filter((layer) => Boolean(layer.src));
  const emotionAuxLayers = normalizeDressupEmotionAuxItems(avatar.emotionAuxItems)
    .map((item) => {
      const asset = dressupAssetByValue(item.value);
      return asset ? {
        key: emotionAuxLayerKey(item),
        src: asset.src,
        label: asset.label,
        className: "emotion-aux emotion-aux-item",
        deletable: true,
      } : null;
    })
    .filter(Boolean);
  const layerItemLayers = normalizeDressupLayerItems(avatar.layerItems)
    .map((item) => {
      const asset = dressupAssetByValue(item.value);
      const className = dressupFieldLayerMap[item.field] || "asset-item";
      return asset ? {
        key: dressupLayerItemKey(item),
        src: asset.src,
        label: asset.label,
        className: `${className} asset-item`,
        deletable: true,
      } : null;
    })
    .filter(Boolean);
  const shapeLayers = normalizeDressupShapeItems(avatar.shapeItems)
    .map((item) => ({
      key: shapeLayerKey(item),
      label: shapeLabel(item),
      className: `shape-item shape-${item.type}`,
      shape: item,
      deletable: true,
    }));
  const freeAccessoryLayers = normalizeDressupFreeAccessories(avatar.freeAccessories)
    .map((item) => {
      const asset = dressupAssetByValue(item.value);
      return asset ? {
        key: freeAccessoryLayerKey(item),
        src: asset.src,
        label: asset.label,
        className: `free-accessory free-${item.slot}`,
        deletable: true,
      } : null;
    })
    .filter(Boolean);
  const imageLayers = normalizeDressupImageItems(avatar.imageItems)
    .map((item) => ({
      key: imageLayerKey(item),
      src: item.src,
      label: item.name,
      className: "custom-image image-item",
      deletable: true,
    }));
  return [...coreLayers, ...layerItemLayers, ...emotionAuxLayers, ...shapeLayers, ...freeAccessoryLayers, ...imageLayers];
}

function renderDressupArtLayer(layer, avatar, options = {}) {
  if (!layer?.src && !layer?.shape) return "";
  const editable = Boolean(options.editable);
  const selected = new Set(getSelectedDressupLayerKeys(avatar));
  const isSelected = editable && isDressupLayerSelectionVisible && selected.has(layer.key);
  const isPrimary = editable && isDressupLayerSelectionVisible && layer.key === activeDressupLayer;
  const layerClasses = String(layer.className || layer.key)
    .split(/\s+/)
    .filter(Boolean)
    .map((name) => `dressup-art-${dressupClass(name)}`)
    .join(" ");
  const classes = `dressup-art-layer ${layerClasses} ${isSelected ? "is-selected" : ""} ${isPrimary ? "is-primary-selected" : ""}`;
  if (layer.shape) {
    const shapeColor = getDressupLayerColor(avatar, layer.key) || "#ff7dcb";
    return `<svg class="${classes}" viewBox="0 0 100 100" role="img" aria-label="${escapeHtml(layer.label)}" data-dressup-layer="${escapeHtml(layer.key)}" style="${dressupLayerTransformStyle(avatar, layer.key)};--layer-filter:saturate(1);color:${escapeHtml(shapeColor)};">${shapeSvgMarkup(layer.shape)}</svg>`;
  }
  return `<img class="${classes}" src="${escapeHtml(layer.src)}" alt="${escapeHtml(layer.label)}" loading="lazy" data-dressup-layer="${escapeHtml(layer.key)}" style="${dressupLayerTransformStyle(avatar, layer.key)}" />`;
}

function shapeLabel(shape) {
  const map = { circle: "圆形", square: "方块", heart: "心形", pentagon: "5边形", path: "手绘形状", leafStroke: "柳叶笔画" };
  return map[shape?.type] || "形状";
}

function shapeSvgMarkup(shape) {
  const common = `fill="currentColor" stroke="none"`;
  if (shape.type === "circle") return `<circle cx="50" cy="50" r="31" ${common} />`;
  if (shape.type === "square") return `<rect x="21" y="21" width="58" height="58" rx="8" ${common} />`;
  if (shape.type === "heart") return `<path d="M50 80 C28 64 18 51 18 37 C18 26 26 19 36 19 C43 19 48 23 50 29 C52 23 57 19 64 19 C74 19 82 26 82 37 C82 51 72 64 50 80 Z" ${common} />`;
  if (shape.type === "pentagon") return `<path d="M50 15 L83 39 L70 79 L30 79 L17 39 Z" ${common} />`;
  if (shape.type === "path") return `<path d="${escapeHtml(shapePathFromPoints(shape.points, true))}" ${common} />`;
  if (shape.type === "leafStroke") return `<path d="${escapeHtml(leafBrushPathFromPoints(shape.points))}" ${common} />`;
  return `<circle cx="50" cy="50" r="31" ${common} />`;
}

function leafBrushPathFromPoints(points) {
  const normalized = normalizeShapePoints(points);
  if (normalized.length < 2) return "";
  const lastIndex = normalized.length - 1;
  const left = [];
  const right = [];
  normalized.forEach((point, index) => {
    const previous = normalized[Math.max(0, index - 1)];
    const next = normalized[Math.min(lastIndex, index + 1)];
    const dx = next.x - previous.x;
    const dy = next.y - previous.y;
    const length = Math.hypot(dx, dy) || 1;
    const t = lastIndex ? index / lastIndex : 0.5;
    const width = 0.45 + Math.sin(Math.PI * t) * 3.4;
    const nx = -dy / length;
    const ny = dx / length;
    left.push({ x: point.x + nx * width, y: point.y + ny * width });
    right.unshift({ x: point.x - nx * width, y: point.y - ny * width });
  });
  return shapePathFromPoints([...left, ...right], true);
}

function shapePathFromPoints(points, closed = true) {
  const normalized = normalizeShapePoints(points);
  if (!normalized.length) return "";
  const [first, ...rest] = normalized;
  return `M ${first.x} ${first.y} ${rest.map((point) => `L ${point.x} ${point.y}`).join(" ")}${closed ? " Z" : ""}`;
}

function openRelationshipMap(sceneKey = RELATIONSHIP_MAP_SCENE_HOME) {
  selectedMapPlaceKey = "world";
  selectedMapSceneKey = relationshipMapScene(sceneKey).key;
  renderRelationshipMap();
  openDialog(dom.mapDialog);
  requestAnimationFrame(() => centerRelationshipMapScroller(dom.mapBody?.querySelector("[data-relationship-map-scroll]")));
}

function renderRelationshipMap(preferredCardId = "") {
  if (!dom.mapBody) return;
  const scene = relationshipMapScene(selectedMapSceneKey);
  const preferredCard = preferredCardId ? relationshipCards.find((card) => card.id === preferredCardId) : null;
  const previousQuery = preferredCardId
    ? (preferredCard ? displayName(preferredCard).replace(" · 私密", "") : "")
    : dom.mapBody.querySelector("#relationshipMapNameInput")?.value || "";
  const suggestions = getRelationshipMapSearchResults(previousQuery, scene.key);
  const markers = relationshipCards
    .filter((card) => isRelationshipCardInMapScene(card, scene.key))
    .map((card) => renderRelationshipMapMarker(card))
    .join("");
  const sceneCards = relationshipCards.filter((card) => isRelationshipCardInMapScene(card, scene.key));

  dom.mapBody.innerHTML = `
    <div class="relationship-editor-heading">
      <div>
        <p class="eyebrow">Relationship Map</p>
        <h2>${escapeHtml(scene.title)}</h2>
      </div>
      <button class="ghost-button" type="button" data-action="close-map">关闭</button>
    </div>
    <section class="relationship-map-panel">
      <div class="relationship-map-scene-tabs" role="group" aria-label="切换关系场景">
        ${Object.values(RELATIONSHIP_MAP_SCENES).map((item) => `
          <button type="button" data-action="map-switch-scene" data-scene="${escapeHtml(item.key)}" class="${item.key === scene.key ? "is-active" : ""}">
            <strong>${escapeHtml(item.title)}</strong>
          </button>
        `).join("")}
      </div>
      ${renderRelationshipReactionToolbelt("relationship-map-reaction-toolbelt")}
      <div class="relationship-map-controls">
        <label class="relationship-field">
          <input id="relationshipMapNameInput" value="${escapeHtml(previousQuery)}" placeholder="搜索姓名、关系、标签、状态" autocomplete="off" />
        </label>
        <button class="primary-button" type="button" data-action="map-place-card">${escapeHtml(relationshipMapPlaceActionLabel(scene))}</button>
        <div class="relationship-map-search-results" id="relationshipMapSearchResults" ${suggestions.length ? "" : "hidden"}>
          ${renderRelationshipMapSearchResults(suggestions, scene.key)}
        </div>
      </div>
      ${renderRelationshipMapImageWindow(markers, "dialog", scene)}
      <div class="relationship-map-list">
        ${sceneCards.length
          ? sceneCards.map(renderRelationshipMapListItem).join("")
          : `<p>${escapeHtml(scene.emptyText)}</p>`}
      </div>
    </section>
  `;
  requestAnimationFrame(() => {
    const scroller = dom.mapBody.querySelector("[data-relationship-map-scroll]");
    if (preferredCard?.location?.placeKey) {
      scrollRelationshipMapScrollerToX(scroller, preferredCard.location.x);
    } else {
      centerRelationshipMapScroller(scroller);
    }
  });
}

function renderRelationshipReactionToolbelt(extraClass = "", id = "") {
  return `
    <section class="relationship-reaction-toolbelt ${escapeHtml(extraClass)}" ${id ? `id="${escapeHtml(id)}"` : ""} aria-label="关系互动道具">
      <button class="relationship-reaction-tool is-flower" type="button" data-reaction-tool="flower" aria-label="拖动鲜花到角色身上">
        <span>🌸</span>
        <b>鲜花</b>
        <small>-1 金币</small>
      </button>
      <button class="relationship-reaction-tool is-egg" type="button" data-reaction-tool="egg" aria-label="拖动鸡蛋到角色身上">
        <span>🥚</span>
        <b>鸡蛋</b>
        <small>-1 金币</small>
      </button>
      <button class="relationship-guide-pool-button" type="button" data-action="open-guide-pool" aria-label="打开攻略池">
        <span>✦</span>
        <b>攻略池</b>
        <small>暂无内容</small>
      </button>
      <button class="relationship-guide-pool-button is-virtual-story" type="button" data-action="open-virtual-story" aria-label="打开虚拟故事">
        <span>◆</span>
        <b>虚拟故事</b>
        <small>暂无内容</small>
      </button>
    </section>
  `;
}

function renderRelationshipMapPreview() {
  if (!dom.mapPreview) return;
  const scene = relationshipMapScene(RELATIONSHIP_MAP_SCENE_HOME);
  const markers = relationshipCards
    .filter((card) => isRelationshipCardInMapScene(card, scene.key))
    .slice(0, 8)
    .map((card) => renderRelationshipMapMarker(card, true))
    .join("");
  dom.mapPreview.innerHTML = renderRelationshipMapImageWindow(markers, "preview", scene);
  requestAnimationFrame(() => centerRelationshipMapScroller(dom.mapPreview.querySelector("[data-relationship-map-scroll]")));
}

function renderRelationshipMapImageWindow(markers = "", mode = "dialog", scene = relationshipMapScene(selectedMapSceneKey)) {
  const isPreview = mode === "preview";
  return `
    <div class="relationship-map-window ${isPreview ? "is-preview" : "is-dialog"}">
      <div class="relationship-map-scroll" data-relationship-map-scroll tabindex="0" aria-label="可横向滑动查看完整关系地图">
        <div class="relationship-map-image-stage">
          <img class="relationship-map-image" src="${escapeHtml(scene.imageSrc)}" alt="${escapeHtml(scene.alt)}" draggable="false" />
          ${markers}
        </div>
      </div>
    </div>
  `;
}

function relationshipMapScene(sceneKey) {
  return RELATIONSHIP_MAP_SCENES[sceneKey] || RELATIONSHIP_MAP_SCENES[RELATIONSHIP_MAP_SCENE_HOME];
}

function isRelationshipCardInMapScene(card, sceneKey = RELATIONSHIP_MAP_SCENE_HOME) {
  if (!card.location?.placeKey) return false;
  return (card.location.sceneKey || RELATIONSHIP_MAP_SCENE_HOME) === sceneKey;
}

function relationshipMapPlaceActionLabel(scene) {
  return scene.key === RELATIONSHIP_MAP_SCENE_SHADOW ? "流放到暗影荒原" : `放到${scene.title}`;
}

function getRelationshipMapSearchResults(query = "", sceneKey = selectedMapSceneKey) {
  const keyword = normalizeRelationshipSearchText(query);
  if (!keyword) return [];
  const sorted = [...relationshipCards].sort((a, b) => {
    const aInScene = isRelationshipCardInMapScene(a, sceneKey) ? 1 : 0;
    const bInScene = isRelationshipCardInMapScene(b, sceneKey) ? 1 : 0;
    return bInScene - aInScene || displayName(a).localeCompare(displayName(b), "zh-Hans-CN");
  });
  return sorted.filter((card) => relationshipMapSearchText(card).includes(keyword)).slice(0, 8);
}

function relationshipMapSearchText(card) {
  return normalizeRelationshipSearchText([
    displayName(card),
    card.basic?.relationshipType,
    card.basic?.meaning,
    card.basic?.note,
    card.relationship?.status,
    card.relationship?.boundary,
    ...(card.relationship?.tags || []),
    ...(card.profile?.tags || []),
    ...(card.profile?.keywords || []),
    card.profile?.recentInteraction,
  ].filter(Boolean).join(" "));
}

function normalizeRelationshipSearchText(value) {
  return clean(value, "").replace(/\s+/g, "").toLowerCase();
}

function renderRelationshipMapSearchResults(results, sceneKey = selectedMapSceneKey) {
  if (!results.length) return "";
  return results.map((card) => {
    const inScene = isRelationshipCardInMapScene(card, sceneKey);
    const tags = [
      card.basic?.relationshipType,
      card.relationship?.status,
      inScene ? "已在此场景" : "",
    ].filter(Boolean);
    return `
      <button type="button" data-action="map-pick-card" data-id="${escapeHtml(card.id)}">
        <span>${escapeHtml(displayName(card))}</span>
        <small>${tags.map((tag) => escapeHtml(tag)).join(" · ")}</small>
      </button>
    `;
  }).join("");
}

function renderRelationshipMapSearchResultsIntoDom(query = "") {
  const resultsNode = dom.mapBody?.querySelector("#relationshipMapSearchResults");
  if (!resultsNode) return;
  const results = getRelationshipMapSearchResults(query, selectedMapSceneKey);
  resultsNode.innerHTML = renderRelationshipMapSearchResults(results, selectedMapSceneKey);
  resultsNode.hidden = !results.length;
}

function centerRelationshipMapScroller(scroller) {
  if (!scroller) return;
  const center = () => scrollRelationshipMapScrollerToX(scroller, 50);
  const image = scroller.querySelector(".relationship-map-image");
  if (image?.complete) {
    center();
  } else {
    image?.addEventListener("load", center, { once: true });
  }
}

function scrollRelationshipMapScrollerToX(scroller, xPercent = 50) {
  if (!scroller) return;
  const stage = scroller.querySelector(".relationship-map-image-stage");
  const scrollToX = () => {
    const stageWidth = stage?.scrollWidth || scroller.scrollWidth;
    const maxScroll = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
    const target = stageWidth * (clamp(Number(xPercent) || 50, 0, 100) / 100) - scroller.clientWidth / 2;
    scroller.scrollLeft = clamp(target, 0, maxScroll);
  };
  const image = scroller.querySelector(".relationship-map-image");
  if (image?.complete) {
    scrollToX();
  } else {
    image?.addEventListener("load", scrollToX, { once: true });
  }
}

function placeCardOnMap(cardId = "") {
  const scene = relationshipMapScene(selectedMapSceneKey);
  const nameInput = dom.mapBody?.querySelector("#relationshipMapNameInput");
  const name = clean(nameInput?.value, "").slice(0, 40);
  let card = cardId ? relationshipCards.find((item) => item.id === cardId) : null;
  if (!card && !name) {
    showToast("请先搜索或输入角色。");
    nameInput?.focus();
    return;
  }
  const center = getRelationshipMapVisibleCenter();
  if (!card) card = findRelationshipCardByName(name);
  if (!card) {
    card = createRelationshipCard({
      basic: {
        name,
        relationshipType: "朋友",
        meaning: "我想更了解",
      },
      location: {
        placeKey: "custom-map",
        sceneKey: scene.key,
        country: scene.country,
        city: "",
        x: center.x,
        y: center.y,
      },
    });
  }
  card.location = {
    placeKey: "custom-map",
    sceneKey: scene.key,
    country: scene.country,
    city: "",
    x: center.x,
    y: center.y,
  };
  card.updatedAt = new Date().toISOString();
  saveRelationshipCards();
  renderRelationshipCards();
  renderRelationshipMap(card.id);
  showToast(`${displayName(card)} 已放到${scene.title}。`);
}

function findRelationshipCardByName(name) {
  const target = normalizeRelationshipName(name);
  return relationshipCards.find((card) => normalizeRelationshipName(card.basic?.name) === target || normalizeRelationshipName(displayName(card).replace(" · 私密", "")) === target);
}

function normalizeRelationshipName(name) {
  return clean(name, "").replace(/\s+/g, "").toLowerCase();
}

function getRelationshipMapVisibleCenter() {
  const scroller = dom.mapBody?.querySelector("[data-relationship-map-scroll]");
  const stage = scroller?.querySelector(".relationship-map-image-stage");
  if (!scroller || !stage) return { x: 50, y: 50 };
  const x = ((scroller.scrollLeft + scroller.clientWidth / 2) / Math.max(1, stage.scrollWidth)) * 100;
  return { x: clamp(x, 4, 96), y: 50 };
}

function clearCardLocation(id) {
  const card = relationshipCards.find((item) => item.id === id);
  if (!card) return;
  card.location = { placeKey: "", country: "", city: "", x: 50, y: 50 };
  card.updatedAt = new Date().toISOString();
  saveRelationshipCards();
  renderRelationshipMap();
  renderRelationshipCards();
  showToast(`${displayName(card)} 已从地图移除。`);
}

function renderRelationshipMapMarker(card, compact = false) {
  return `
    <button class="relationship-map-marker ${compact ? "is-compact" : ""}" type="button" data-action="map-open-card" data-id="${escapeHtml(card.id)}" data-reaction-target-id="${escapeHtml(card.id)}" data-map-marker="true" style="left:${card.location.x}%;top:${card.location.y}%;" aria-label="拖动或查看${escapeHtml(displayName(card))}">
      ${renderAvatarPreview(card, "map")}
      <span>${escapeHtml(displayName(card))}</span>
    </button>
  `;
}

function renderRelationshipMapListItem(card) {
  return `
    <article>
      <button type="button" data-action="map-open-card" data-id="${escapeHtml(card.id)}">${escapeHtml(displayName(card))}</button>
      <span>${escapeHtml(locationLabel(card))}</span>
      <button type="button" data-action="map-clear-card" data-id="${escapeHtml(card.id)}">移除</button>
    </article>
  `;
}

function renderStatCard(label, value) {
  return `<article class="relationship-stat-card"><strong>${value}</strong><span>${escapeHtml(label)}</span></article>`;
}

function scrollToRelationshipAtlas() {
  dom.grid?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderMiniMeter(label, value, type) {
  return `<span class="relationship-mini-meter ${type}"><em>${escapeHtml(label)}</em><i><b style="width:${value}%"></b></i><strong>${value}</strong></span>`;
}

function renderMeter(label, value, type) {
  return `<div class="relationship-detail-meter ${type}"><span>${escapeHtml(label)}</span><i><b style="width:${value}%"></b></i><strong>${value}</strong></div>`;
}

function textField(label, name, value, placeholder = "", required = false) {
  return `<label class="relationship-field"><span>${label}</span><input name="${name}" value="${escapeHtml(value)}" placeholder="${escapeHtml(placeholder)}" ${required ? "required" : ""} /></label>`;
}

function textareaField(label, name, value, placeholder = "") {
  return `<label class="relationship-field relationship-wide-field"><span>${label}</span><textarea name="${name}" rows="4" placeholder="${escapeHtml(placeholder)}">${escapeHtml(value)}</textarea></label>`;
}

function selectField(label, name, options, value) {
  return `
    <label class="relationship-field">
      <span>${label}</span>
      <select name="${name}">
        ${options.map((option) => `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
      </select>
    </label>
  `;
}

function checkboxField(label, name, checked) {
  return `<label class="relationship-checkbox"><input type="checkbox" name="${name}" ${checked ? "checked" : ""} /><span>${label}</span></label>`;
}

function checkboxPill(label, name, checked) {
  return `<label><input type="checkbox" name="${name}" value="${escapeHtml(label)}" ${checked ? "checked" : ""} /><span>${escapeHtml(label)}</span></label>`;
}

function rangeField(label, name, value) {
  return `
    <label class="relationship-range-row">
      <span>${label}</span>
      <input type="range" name="${name}" min="0" max="100" step="1" value="${value}" />
      <strong data-range-value="${name}">${value}</strong>
    </label>
  `;
}

function relationshipBadges(card) {
  const badges = [];
  if (card.basic.isImportant) badges.push("重要人物");
  if (card.basic.isPrivate) badges.push("私密角色");
  if (card.relationship.stress >= 75) badges.push("高压力关系");
  if (card.relationship.boundary !== "无需特别边界") badges.push("需要边界");
  return badges.length ? badges : [card.relationship.status];
}

function getRelationshipStats(cards) {
  return {
    total: cards.length,
    important: cards.filter((card) => card.basic.isImportant).length,
    highStress: cards.filter((card) => card.relationship.stress >= 75).length,
    needsBoundary: cards.filter((card) => card.relationship.boundary !== "无需特别边界").length,
  };
}

function getStatusClass(card) {
  if (card.relationship.stress >= 75) return "status-high-stress";
  const map = {
    "亲近": "status-close",
    "稳定": "status-stable",
    "复杂": "status-complex",
    "冲突中": "status-conflict",
    "疏远": "status-distant",
    "冷淡": "status-distant",
    "断联": "status-distant",
    "暧昧": "status-close",
  };
  return map[card.relationship.status] || "status-stable";
}

function mergeRelationshipCards(existing, imported) {
  const map = new Map(existing.map((card) => [card.id, card]));
  imported.forEach((card) => {
    map.set(card.id || createId(), card);
  });
  return Array.from(map.values()).map(normalizeRelationshipCard).filter(Boolean);
}

function detailRow(label, value) {
  return `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`;
}

function assetOptions(category, predicate = null, includeNone = false) {
  const options = dressupAssetItems
    .filter((item) => item.category === category)
    .filter((item) => (predicate ? predicate(item) : true))
    .map((item) => ({
      value: item.value,
      label: item.label,
      icon: "图",
      assetSrc: item.src,
    }));
  return includeNone ? [{ value: "none", label: "不使用", icon: "空" }, ...options] : options;
}

function dressupAssetByValue(value) {
  if (!value || value === "none") return null;
  return dressupAssetItems.find((item) => item.value === value) || null;
}

function dressupAssetSrc(value) {
  return dressupAssetByValue(value)?.src || "";
}

function dressupOptionLabel(field, value) {
  return dressupOptions[field]?.find((option) => option.value === value)?.label || value || "";
}

function displayName(card) {
  return card.basic.isPrivate && card.basic.name ? `${card.basic.name} · 私密` : card.basic.name || "未命名角色";
}

function locationLabel(card) {
  const scene = relationshipMapScene(card.location?.sceneKey);
  const country = clean(card.location?.country, "");
  const city = clean(card.location?.city, "");
  if (!country && !city) return "未放到地图";
  if (card.location?.placeKey === "custom-map") return scene.title;
  if (country && city && country !== city) return `${country} · ${city}`;
  return city || country;
}

function accessorySymbol(accessory) {
  const map = { "眼镜": "□", "帽子": "⌒", "耳机": "♪", "围巾": "≈", "包": "▣", "项链": "◇", "口罩": "▭" };
  return map[accessory] || "";
}

function dressupChoiceColor(field, value) {
  if (field === "skinTone") return avatarPalette.skinTone[value] || "";
  if (field === "hairColor") return avatarPalette.hairColor[value] || "";
  if (field === "top" || field === "bottom" || field === "shoes") return dressupColor(field, value);
  return "";
}

function dressupColor(field, value) {
  const palettes = {
    top: {
      "日常上衣": "#ff7dcb",
      "粉色卫衣": "#ff9ed4",
      "学院衬衫": "#f7f0ff",
      "正式外套": "#3d2b54",
      "运动背心": "#40d78a",
      "梦幻斗篷": "#b89cff",
      "医生上衣": "#f3fbff",
    },
    bottom: {
      "短裙": "#7f55ff",
      "长裤": "#52406e",
      "短裤": "#6bbdf5",
      "运动裤": "#40d78a",
      "工装裤": "#8b704b",
      "蓬蓬裙": "#ffb7d7",
    },
    shoes: {
      "小皮鞋": "#3d2b54",
      "运动鞋": "#40d78a",
      "短靴": "#704124",
      "拖鞋": "#ffd84d",
      "云朵鞋": "#d7f9ef",
    },
  };
  return palettes[field]?.[value] || "#ff7dcb";
}

function outfitFromTop(value) {
  const map = {
    "学院衬衫": "学生服",
    "正式外套": "正式服",
    "运动背心": "运动服",
    "梦幻斗篷": "艺术家服",
    "医生上衣": "医生 / 护士服",
  };
  return map[value] || "日常服";
}

function legacyAccessoryFromDressup(avatar) {
  if (avatar.accessoryFace === "圆眼镜") return "眼镜";
  if (avatar.accessoryFace === "口罩") return "口罩";
  if (avatar.accessoryHead === "帽子") return "帽子";
  if (avatar.accessoryNeck === "围巾") return "围巾";
  if (avatar.accessoryNeck === "星星项链") return "项链";
  if (avatar.accessoryBody === "紫色包") return "包";
  return "无";
}

function dressupAccessorySymbol(value) {
  const map = {
    "星星发夹": "★",
    "帽子": "⌒",
    "兔耳": "⌇",
    "猫耳": "⌃",
    "触角": "⌁",
    "圆眼镜": "○○",
    "口罩": "▭",
    "腮红": " blush ",
    "泪痣": "·",
    "星星项链": "◇",
    "围巾": "≈",
    "领结": "∞",
    "紫色包": "▣",
    "徽章": "●",
    "手持花": "✿",
    "小礼物": "□",
  };
  return map[value] || "";
}

function dressupExpressionSymbol(value) {
  const map = { "泪滴": "💧", "脸红": "◔ ◔", "怒气": "※", "闪光": "✦", "爱心": "♥" };
  return map[value] || "";
}

function dressupEffectSymbol(value) {
  const map = { "小星星": "✦  ✧", "小爱心": "♥  ♡", "闪光": "✧ ✦ ✧", "云朵": "☁", "庆祝彩带": "＊ ✦ ＊" };
  return map[value] || "";
}

function dressupClass(value) {
  return String(value || "none")
    .toLowerCase()
    .replace(/[\s_/]+/g, "-")
    .replace(/[^\w\u4e00-\u9fff-]/g, "");
}

function bodyKey(value) {
  const map = {
    "小巧": "petite",
    "标准": "standard",
    "柔软": "soft",
    "高挑": "tall",
    "圆润": "round",
  };
  return map[value] || "standard";
}

function hairKey(value) {
  const map = {
    "短发": "short",
    "中长发": "medium",
    "长发": "long",
    "卷发": "curly",
    "马尾": "ponytail",
    "丸子头": "bun",
    "寸头": "buzz",
    "光头": "bald",
    "帽子": "hat",
    "自定义": "custom",
  };
  return map[value] || "short";
}

function expressionKey(value) {
  const map = {
    "平静": "calm",
    "开心": "happy",
    "难过": "sad",
    "哭泣": "cry",
    "疲惫": "tired",
    "生气": "angry",
    "温柔": "gentle",
    "兴奋": "excited",
    "庆祝": "celebrate",
    "严肃": "serious",
    "神秘": "mysterious",
  };
  return map[value] || "calm";
}

function backdropKey(value) {
  const map = {
    "纯色": "plain",
    "奶油房间": "room",
    "紫色夜空": "night",
    "青色云朵": "cloud",
  };
  return map[value] || "plain";
}

function pick(options, value, fallback) {
  return options.includes(value) ? value : fallback;
}

function pickValue(field, value, fallback) {
  if (nullableBaseAssetFields.has(field) && value === "none") return "none";
  const values = (dressupOptions[field] || []).map((item) => item.value);
  return values.includes(value) ? value : fallback;
}

function headFromBaseBody(value) {
  return String(value || "").startsWith("body_")
    ? `head_${String(value).slice(5)}`
    : "head_young_female";
}

function bodyPartFromBaseBody(value) {
  return String(value || "").startsWith("body_")
    ? `bodypart_${String(value).slice(5)}`
    : "bodypart_young_female";
}

function clean(value, fallback) {
  const text = String(value ?? "").trim();
  return text || fallback;
}

function splitList(value) {
  return String(value ?? "")
    .split(/[、,，\s]+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 4);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return clamp(number, min, max);
}

function createId() {
  return globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `relationship-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function deepMerge(target, patch) {
  const output = Array.isArray(target) ? [...target] : { ...target };
  Object.entries(patch || {}).forEach(([key, value]) => {
    if (value && typeof value === "object" && !Array.isArray(value) && output[key] && typeof output[key] === "object" && !Array.isArray(output[key])) {
      output[key] = deepMerge(output[key], value);
    } else {
      output[key] = value;
    }
  });
  return output;
}

function hashString(value) {
  return String(value).split("").reduce((hash, char) => ((hash << 5) - hash) + char.charCodeAt(0), 0);
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "未知";
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
}

function openDialog(dialog) {
  if (!dialog) return;
  if (dialog.showModal) dialog.showModal();
  else dialog.setAttribute("open", "");
}

function showToast(message) {
  if (!dom.toast) return;
  dom.toast.textContent = message;
  dom.toast.hidden = false;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    dom.toast.hidden = true;
  }, 1800);
}

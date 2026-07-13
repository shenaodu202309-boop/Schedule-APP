const STORAGE_KEY = "thirty-day-quest-v2";
const BASE_SCHEDULE_STORAGE_KEY = "private-schedule-app-v1";
const SKILL_MARKET_STORAGE_KEY = "life-skill-market-v1";
const LIFE_COMPANY_STORAGE_KEY = "life-game-company-v1";
const RELATIONSHIP_CARDS_KEY = "life-game-relationship-cards-v1";
const COMIC_DIARY_KEY = "life-game-comic-diary-v1";
const SUPABASE_CONFIG = {
  url: "https://hduussoaxnpqrzmwbqtj.supabase.co",
  anonKey: "sb_publishable_kkFeRKdaf2ReNHaJSJIZDg_SkG8wPgL",
};
const AUTH_REDIRECT_URL = "https://shenaodu202309-boop.github.io/Schedule-APP/";
const BATTLE_PROJECT_ID = "project-graduation-game-main-battle";
const BATTLE_PROJECT_SOURCE = "graduation-game-v2-main-battle";
const BATTLE_TASK_SOURCE = "graduation-game-v2-planned-task";
const SIDE_QUEST_LIMIT = 5;
const SKILL_MARKET_SIDE_PREFIX = "skill-market-task-";
const LIFE_COMPANY_MAIN_PREFIX = "life-company-task-";
const PLAYER_STARTING_COINS = 1000;
const COMPANY_STARTING_STAKE = 600;
const MAINLINE_PRICING_STANDARD_HOURS = 8;
const MAINLINE_PRICING_STANDARD_COINS = 80;
const TASK_COINS_PER_30_MINUTES = MAINLINE_PRICING_STANDARD_COINS / (MAINLINE_PRICING_STANDARD_HOURS * 2);
const MOOD_DAY_START_HOUR = 8;
const MOOD_DAY_END_HOUR = 24;
const MOOD_DAY_TOTAL_HOURS = MOOD_DAY_END_HOUR - MOOD_DAY_START_HOUR;
const MOOD_MIN = 0;
const MOOD_MID = 50;
const MOOD_MAX = 100;
const LIFE_MAINTENANCE_TARGET_MINUTES = 120;
const LIFE_MAINTENANCE_SLOT_MINUTES = 15;
const ENERGY_DAY_START_HOUR = 1;
const ENERGY_DAY_END_HOUR = 24;
const ENERGY_MAX = 100;
const ENERGY_DEPLETION_MINUTES = 12 * 60;
const COMPANY_ECONOMY_LEVELS = [
  { level: 1, name: "起步公司", requiredExp: 0, requiredCoins: 0 },
  { level: 2, name: "小型工作室", requiredExp: 100, requiredCoins: 300 },
  { level: 3, name: "稳定运营", requiredExp: 350, requiredCoins: 800 },
  { level: 4, name: "专业机构", requiredExp: 800, requiredCoins: 1800 },
  { level: 5, name: "品牌公司", requiredExp: 1500, requiredCoins: 3500 },
  { level: 6, name: "梦想企业", requiredExp: 3000, requiredCoins: 7000 },
];
const ONBOARDING_COMPANY_TYPES = [
  {
    id: "animation-company",
    name: "动画公司",
    defaultName: "星愿动画公司",
    defaultGoal: "完成第一版动画作品集",
    departments: ["创作部", "动画制作部", "技术研发部", "作品集部", "宣传发行部", "求职商务部"],
    stocks: ["动画股", "绘画股", "分镜股", "3D 动画股", "作品集股", "英语股", "求职股"],
  },
  {
    id: "school",
    name: "学校 / 教育机构",
    defaultName: "星愿学校",
    defaultGoal: "完成第一套课程大纲",
    departments: ["课程研发部", "教学部", "学生关系部", "案例作品部", "行政申请部", "宣传招生部"],
    stocks: ["教学表达股", "课程设计股", "英语股", "作品集股", "社交股", "项目管理股"],
  },
  {
    id: "illustration-studio",
    name: "插画工作室",
    defaultName: "星愿插画工作室",
    defaultGoal: "完成第一组插画作品",
    departments: ["创作部", "视觉研发部", "作品集部", "接单商务部", "宣传部"],
    stocks: ["绘画股", "设计股", "作品集股", "社交股", "理财股"],
  },
  {
    id: "game-studio",
    name: "游戏工作室",
    defaultName: "星愿游戏工作室",
    defaultGoal: "完成第一个 Demo 场景",
    departments: ["玩法设计部", "美术部", "程序协作部", "关卡部", "测试部", "发布部"],
    stocks: ["设计股", "绘画股", "项目管理股", "作品集股", "英语股"],
  },
  {
    id: "freelance-studio",
    name: "自由职业工作室",
    defaultName: "星愿自由职业工作室",
    defaultGoal: "整理第一版服务菜单",
    departments: ["服务产品部", "客户关系部", "交付部", "报价财务部", "宣传部"],
    stocks: ["设计股", "社交股", "理财股", "项目管理股", "英语股"],
  },
  {
    id: "health-center",
    name: "健康恢复中心",
    defaultName: "星愿健康恢复中心",
    defaultGoal: "建立一套稳定生活流程",
    departments: ["睡眠部", "运动部", "饮食部", "情绪管理部", "生活维护部"],
    stocks: ["睡眠股", "运动股", "做饭股", "情绪管理股", "整理房间股"],
  },
];
const BASE_MAIN_TASK_COLOR = "#6A2CFF";
const BASE_SIDE_TASK_COLOR = "#FFD84D";
const START_DATE = "2026-07-04";
const TOTAL_DAYS = 31;
const XP_PER_LEVEL = 200;
const TAROT_CARD_COUNT = 78;
const TIMELINE_ZOOM_MIN = 760;
const TIMELINE_ZOOM_MAX = 2280;
const TASK_ICON_COUNT = 24;
const TASK_ICON_BASE = "./assets/task-elements/icons/task-icon-";
const TASK_ICON_PRESETS = {
  main: ["task-icon-01", "task-icon-02", "task-icon-03", "task-icon-04", "task-icon-05", "task-icon-06"],
  side: ["task-icon-15", "task-icon-13", "task-icon-14", "task-icon-04", "task-icon-05"],
  life: ["task-icon-19", "task-icon-20", "task-icon-21", "task-icon-23", "task-icon-22", "task-icon-24"],
};
const TASK_ICON_IDS = Array.from({ length: TASK_ICON_COUNT }, (_, index) => `task-icon-${String(index + 1).padStart(2, "0")}`);

const defaultMainTasks = [
  { id: "script", title: "脚本 / 构思", icon: "✦", art: "task-icon-01", xp: 15, durationMinutes: 120 },
  { id: "motion", title: "运动检查", icon: "⌁", art: "task-icon-02", xp: 15, durationMinutes: 120 },
  { id: "base-color", title: "上色基础", icon: "色", art: "task-icon-04", xp: 15, durationMinutes: 120 },
  { id: "detail-color", title: "上色细化", icon: "细", art: "task-icon-05", xp: 15, durationMinutes: 60 },
  { id: "effects", title: "特效 / 合成", icon: "光", art: "task-icon-06", xp: 15, durationMinutes: 60 },
  { id: "sound", title: "音效 / 配乐", icon: "音", art: "task-icon-18", xp: 15, durationMinutes: 60 },
];

let mainTasks = defaultMainTasks.map((task) => ({ ...task }));

const defaultSideQuests = [
  { id: "portfolio", title: "整理作品集", text: "整理一张图、一段说明或一个页面", icon: "册", art: "task-icon-15", xp: 20, durationMinutes: 60 },
  { id: "assistant-app", title: "私人动画辅助 APP", text: "推进一个小功能或一张界面", icon: "APP", art: "task-icon-06", xp: 22, durationMinutes: 60 },
  { id: "game-3d", title: "3D AI 建模小游戏", text: "模型、场景、交互或录屏推进一小块", icon: "3D", art: "task-icon-03", xp: 20, durationMinutes: 60 },
  { id: "otome-2d", title: "2D 卡牌乙游 Demo", text: "角色、卡牌、对话或抽卡推进一小块", icon: "卡", art: "task-icon-02", xp: 20, durationMinutes: 30 },
  { id: "mood-art", title: "氛围图设计", text: "补一张 moodboard、色彩稿或关键帧", icon: "图", art: "task-icon-05", xp: 18, durationMinutes: 30 },
];

let sideQuests = defaultSideQuests.map((quest) => ({ ...quest }));

const lowTasks = [
  { id: "anim25", title: "当日主线任务", xp: 5 },
  { id: "meal", title: "吃一顿东西", xp: 5 },
  { id: "message", title: "给一个人发消息", xp: 5 },
];

const lifeGroups = [
  { id: "out", title: "出门", art: "task-icon-23", target: 3, xp: 12 },
  { id: "clean", title: "整理房间", art: "task-icon-07", target: 2, xp: 12 },
  { id: "laundry", title: "洗衣换被", art: "task-icon-08", target: 1, xp: 12 },
  { id: "fun", title: "娱乐放松", art: "task-icon-22", target: 1, xp: 16 },
];

const timeDistributionGroups = [
  { id: "main", label: "主线", color: "#6A2CFF" },
  { id: "side", label: "副线", color: "#FFD84D" },
  { id: "daily", label: "日常", color: "#FF7DCB" },
  { id: "blank", label: "空白期", color: "#E8E1F4" },
];

const invoiceMaterials = [
  { id: "paper", label: "纸质", shortLabel: "纸质", paperColor: "#fffdf8", inkColor: "#16110e" },
  { id: "kraft", label: "牛皮纸复古", shortLabel: "复古", paperColor: "#d7b277", inkColor: "#3a2418" },
  { id: "translucent", label: "半透明", shortLabel: "半透", paperColor: "#edf8ff", inkColor: "#17324a" },
];

const invoiceBillTypes = [
  { id: "game", label: "游戏账单", shortLabel: "游戏" },
  { id: "ledger", label: "生活记账账单", shortLabel: "生活" },
  { id: "diy", label: "DIY 图片账单", shortLabel: "DIY" },
];

const COMIC_EXPRESSION_MAP = {
  cute: "excited",
  funny: "celebrate",
  sad: "sad",
  healing: "calm",
  angry: "sad",
  strange: "crying",
};

const COMIC_MOOD_LABELS = {
  cute: "可爱",
  funny: "搞笑",
  sad: "低落",
  healing: "治愈",
  angry: "生气",
  strange: "奇怪",
};

const COMIC_BACKGROUND_MAP = {
  room: "房间",
  desk: "书桌",
  night: "夜晚",
  sparkle: "星星",
  street: "街道",
  default: "默认背景",
};

const ledgerCategories = [
  { id: "food", label: "食物", icon: "饭", supportive: true },
  { id: "transport", label: "交通", icon: "行", supportive: false },
  { id: "study", label: "学习", icon: "学", supportive: true },
  { id: "rent", label: "房租", icon: "家", supportive: false },
  { id: "health", label: "健康", icon: "康", supportive: true },
  { id: "entertainment", label: "娱乐", icon: "乐", supportive: false },
  { id: "software", label: "软件订阅", icon: "软", supportive: true },
  { id: "shopping", label: "购物", icon: "购", supportive: false },
  { id: "travel", label: "旅行", icon: "旅", supportive: true },
  { id: "income", label: "收入", icon: "收", supportive: true },
  { id: "parttime", label: "兼职", icon: "兼", supportive: true },
  { id: "scholarship", label: "奖学金", icon: "奖", supportive: true },
  { id: "other", label: "其他", icon: "其", supportive: false },
];

const tarotCards = [
  { title: "太阳", icon: "日", suit: "大阿尔卡那", keyword: "显化", meaning: "今天适合把一件小事做亮。先完成一个能看见结果的动作。" },
  { title: "星星", icon: "星", suit: "大阿尔卡那", keyword: "希望", meaning: "别急着证明自己。保留一点希望，然后温柔地继续。" },
  { title: "月亮", icon: "月", suit: "大阿尔卡那", keyword: "直觉", meaning: "如果感觉混乱，先写下来。今天不要被模糊的焦虑牵着走。" },
  { title: "力量", icon: "力", suit: "大阿尔卡那", keyword: "温柔的掌控", meaning: "你的力量不是硬撑，是能把任务切小并开始第一步。" },
  { title: "节制", icon: "衡", suit: "大阿尔卡那", keyword: "调频", meaning: "今天适合调整节奏。少一点过量，多一点稳定。" },
  { title: "隐者", icon: "灯", suit: "大阿尔卡那", keyword: "内在答案", meaning: "给自己一点安静空间。答案可能在复盘和慢下来之后出现。" },
  { title: "命运之轮", icon: "轮", suit: "大阿尔卡那", keyword: "转机", meaning: "允许计划有变化。抓住当下能转动的一小格。" },
  { title: "女祭司", icon: "直", suit: "大阿尔卡那", keyword: "觉察", meaning: "相信直觉，但也把直觉落成一句清楚的行动。" },
  { title: "魔术师", icon: "术", suit: "大阿尔卡那", keyword: "启动", meaning: "资源已经够开始了。今天先把想法变成一个可执行动作。" },
  { title: "世界", icon: "界", suit: "大阿尔卡那", keyword: "完成", meaning: "收尾比开启更重要。把一个循环认真关上，会给你新的空间。" },
  { title: "宝剑二", icon: "剑", suit: "宝剑", keyword: "抉择", meaning: "先暂停争辩。把两个选择都写清楚，真正的卡点会浮出来。" },
  { title: "星币八", icon: "币", suit: "星币", keyword: "练习", meaning: "今天的好运来自重复。把手上的技艺多磨一轮。" },
];

const tarotSpreads = [
  { id: "one", label: "今日指引", count: 1, positions: ["今日指引"] },
  { id: "past-present-future", label: "过去现在未来", count: 3, positions: ["过去", "现在", "未来"] },
  { id: "situation-obstacle-advice", label: "现状阻碍建议", count: 3, positions: ["现状", "阻碍", "建议"] },
  { id: "situation-action-outcome", label: "情境行动结果", count: 3, positions: ["情境", "行动", "结果"] },
  { id: "problem-cause-solution", label: "问题原因解法", count: 3, positions: ["问题", "原因", "解法"] },
  { id: "focus-outcome", label: "背景焦点结果", count: 3, positions: ["背景", "需要聚焦", "结果"] },
  { id: "love", label: "关系牌阵", count: 3, positions: ["我", "对方", "关系"] },
  { id: "relationship-attention", label: "靠近拉开关注", count: 3, positions: ["靠近你的", "拉开你的", "需要关注"] },
  { id: "choice", label: "选择牌阵", count: 3, positions: ["方案 A", "关键提醒", "方案 B"] },
  { id: "strengths-weaknesses-advice", label: "优势弱点建议", count: 3, positions: ["优势", "弱点", "建议"] },
  { id: "opportunities-challenges-outcome", label: "机会挑战结果", count: 3, positions: ["机会", "挑战", "结果"] },
  { id: "mind-body-spirit", label: "身心灵", count: 3, positions: ["头脑", "身体", "灵魂"] },
  { id: "conscious-subconscious-superconscious", label: "显意识潜意识高我", count: 3, positions: ["显意识", "潜意识", "高我"] },
  { id: "material-emotional-spiritual", label: "物质情绪精神", count: 3, positions: ["物质状态", "情绪状态", "精神状态"] },
  { id: "stop-start-continue", label: "停止开始继续", count: 3, positions: ["停止", "开始", "继续"] },
  { id: "next-step", label: "站位愿望路径", count: 3, positions: ["现在站位", "真正想要", "如何抵达"] },
  { id: "full-moon", label: "满月释放", count: 4, positions: ["看见", "释放", "滋养", "整合"] },
  { id: "new-moon", label: "新月播种", count: 4, positions: ["意图", "种子", "支持", "行动"] },
  { id: "career", label: "事业路径", count: 5, positions: ["现状", "优势", "挑战", "机会", "下一步"] },
  { id: "celtic-cross", label: "凯尔特十字", count: 10, positions: ["现状", "挑战", "过去", "近未来", "目标", "潜意识", "建议", "外部影响", "希望 / 恐惧", "结果"] },
];

function expressionSet(id) {
  return {
    sad: `./assets/expressions/${id}-sad.png`,
    crying: `./assets/expressions/${id}-crying.png`,
    calm: `./assets/expressions/${id}-calm.png`,
    excited: `./assets/expressions/${id}-excited.png`,
    celebrate: `./assets/expressions/${id}-celebrate.png`,
  };
}

const expressionLabels = {
  sad: "难过",
  crying: "哭泣",
  calm: "平静",
  excited: "兴奋",
  celebrate: "庆祝",
};

const characters = [
  { id: "bunny", name: "兔兔", css: "character-bunny", image: "./assets/characters/bunny-white.png", expressions: expressionSet("bunny"), role: "温柔启动员", line: "把大任务拆小" },
  { id: "blackcat", name: "黑猫", css: "character-blackcat", image: "./assets/characters/black-cat.png", expressions: expressionSet("blackcat"), role: "夜间专注员", line: "安静守着你的进度" },
  { id: "purple", name: "紫兔团子", css: "character-purple", image: "./assets/characters/bunny-purple.png", expressions: expressionSet("purple"), role: "缓冲恢复员", line: "低能量也算推进" },
  { id: "green", name: "绿兔团子", css: "character-green", image: "./assets/characters/bunny-green.png", expressions: expressionSet("green"), role: "主线冲刺员", line: "一格一格吃掉今天" },
  { id: "eye", name: "粉色眼睛", css: "character-eye", image: "./assets/characters/eye-pink.png", expressions: expressionSet("eye"), role: "检查预警员", line: "帮你看见风险" },
  { id: "shadow", name: "暗影团", css: "character-shadow", image: "./assets/characters/shadow-blob.png", expressions: expressionSet("shadow"), role: "保护模式员", line: "压力太高就先降级" },
];

const helpMessage =
  "我现在状态很危险，有伤害自己的念头。请你现在联系我或来陪我，不要让我一个人待着。";

let state;
let selectedDate = dateKey(new Date());
let toastTimer;
let editSaveTimer;
let longPressTimer;
let longPressCard;
let longPressStart;
let suppressNextCardClick = false;
let currentCardEdit = null;
let calendarViewDate = parseDate(selectedDate);
let scheduleDrag = null;
let scheduleLongPressTimer = null;
let scheduleInfoTimer = null;
let pendingScheduleDelete = null;
let pendingInvoiceDelete = null;
let lifeTimerRenderTimer = null;
let taskProgressRenderTimer = null;
let activeProgressTask = null;
let taskProgressNoticeTimer = null;
let timelineZoom = 1180;
let currentPageId = "home";
let isPageSwitching = false;
let activeFinanceScreen = "home";
let pendingFinancePasswordAction = "";
let diaryViewDate = parseDate(selectedDate);
let diarySelectedDate = selectedDate;
let currentInvoiceDraft = null;
let currentComicDiaryDraft = null;
let invoiceAnimationTimer = null;
let invoiceBookInteraction = null;
let invoiceBookLongPressTimer = null;
let invoiceBookLongPressFired = false;
let supabaseClient = null;
let currentAuthUser = null;

const dom = {};

function bootApp() {
  cacheDom();
  state = loadState();
  ensureDay(selectedDate);
  ensureWeek(selectedDate);
  bindEvents();
  render();
  void initSupabaseClient();
  window.addEventListener("load", () => {
    if (!supabaseClient && isSupabaseConfigured()) void initSupabaseClient();
  }, { once: true });
  activateGamePage(gamePageForSelector(window.location.hash), false);
  window.setTimeout(maybeOpenOnboarding, 120);
  lifeTimerRenderTimer = window.setInterval(renderActiveTimers, 15000);
  window.addEventListener("storage", handleSharedStorageChange);
  window.addEventListener("skill-market-updated", render);
  window.addEventListener("life-company-updated", render);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootApp, { once: true });
} else {
  bootApp();
}

function cacheDom() {
  [
    "chapterLabel",
    "modeLabel",
    "heroTitle",
    "todayObjective",
    "activeCharacterSprite",
    "activeCharacterName",
    "characterPanel",
    "characterPanelToggle",
    "characterPanelBody",
    "characterRoleLine",
    "characterPicker",
    "accountStatusChip",
    "accountDialog",
    "accountModeText",
    "accountCurrentEmail",
    "accountCloudText",
    "accountEmailInput",
    "accountPasswordInput",
    "accountMessage",
    "accountSignUpButton",
    "accountSignInButton",
    "accountSignOutButton",
    "reportCharacterSprite",
    "financeActiveBadge",
    "virtualCardBalance",
    "virtualCardAsset",
    "virtualCardIncome",
    "virtualCardSpend",
    "virtualCardFlow",
    "realCardBalance",
    "realBalanceToggle",
    "realCardIncome",
    "realCardExpense",
    "realCardBudget",
    "realCardFlow",
    "virtualAssetBadge",
    "virtualBalanceValue",
    "virtualStockValue",
    "virtualTodayIncome",
    "virtualTodaySpend",
    "virtualFinanceList",
    "invoiceBookCount",
    "invoiceBookList",
    "levelValue",
    "xpMeter",
    "xpLabel",
    "animationHours",
    "animationMeter",
    "passLabel",
    "protectValue",
    "stateHint",
    "energyInput",
    "energyValue",
    "moodInput",
    "moodValue",
    "riskInput",
    "riskValue",
    "protectionPanel",
    "lowEnergyBar",
    "mainProgressBadge",
    "mainlineTitle",
    "mainTaskGrid",
    "mainTaskDialog",
    "mainTaskTitleInput",
    "mainTaskIconInput",
    "mainTaskArtInput",
    "mainTaskArtPicker",
    "mainTaskDurationInput",
    "mainTaskLifeMaintenanceInput",
    "sideTitle",
    "sideQuestList",
    "weekLabel",
    "lifeTitle",
    "lifeQuestGrid",
    "timelineSummary",
    "timelineBoard",
    "timeDistributionDonut",
    "timeDistributionPercent",
    "timeDistributionList",
    "dailyInvoicePrinter",
    "invoiceReceiptPeek",
    "invoiceRangeToggle",
    "invoiceRangePanel",
    "invoicePrintDateInput",
    "invoicePrintWeekInput",
    "invoicePrintMonthInput",
    "invoicePaperColorInput",
    "invoiceInkColorInput",
    "invoiceMaterialButton",
    "invoiceBillTypeButton",
    "invoiceDiyImageInput",
    "reportInput",
    "diarySelectedDateLabel",
    "diaryMonthLabel",
    "diaryCalendarGrid",
    "diaryChecklist",
    "comicDiaryPanel",
    "comicCharacterSelect",
    "comicPanelCountInput",
    "comicMoodStyleInput",
    "comicSourceInput",
    "comicDiaryPreview",
    "comicDiarySavedList",
    "ledgerForm",
    "ledgerCategoryInput",
    "ledgerAmountInput",
    "ledgerNoteInput",
    "ledgerBalanceBadge",
    "ledgerTodayIncome",
    "ledgerTodayExpense",
    "ledgerWeekBalance",
    "ledgerList",
    "saveStatus",
    "importFile",
    "growthDialog",
    "onboardingDialog",
    "onboardingForm",
    "onboardingCompanyNameInput",
    "onboardingCompanyTypeInput",
    "onboardingGoalInput",
    "onboardingDeadlineInput",
    "blessingDialog",
    "blessingWoodenFish",
    "blessingMeritValue",
    "diaryDialog",
    "balanceAdjustDialog",
    "balanceAdjustCurrent",
    "balanceAdjustInput",
    "financePasswordDialog",
    "financePasswordTitle",
    "financePasswordMessage",
    "financePasswordInputLabel",
    "financePasswordInput",
    "financePasswordConfirmField",
    "financePasswordConfirmInput",
    "financePasswordSubmit",
    "invoiceDialog",
    "dailyInvoicePreview",
    "invoiceDeleteDiyButton",
    "invoiceExportMenu",
    "deleteInvoiceDialog",
    "deleteInvoiceMessage",
    "invoiceBookDialog",
    "growthTitle",
    "growthSummary",
    "achievementList",
    "editCardDialog",
    "editCardDialogTitle",
    "editCardTitleInput",
    "editCardIconField",
    "editCardIconInput",
    "editCardArtField",
    "editCardArtInput",
    "editCardArtPicker",
    "editCardTextField",
    "editCardTextInput",
    "editCardDurationField",
    "editCardDurationInput",
    "editCardLifeMaintenanceField",
    "editCardLifeMaintenanceInput",
    "editCardLifeMaintenanceHint",
    "editCardDeleteButton",
    "battleSettingsDialog",
    "battleTitleInput",
    "battleObjectiveInput",
    "battleStartInput",
    "battleEndInput",
    "battleLockState",
    "calendarDialog",
    "calendarTitle",
    "calendarGrid",
    "deleteScheduleDialog",
    "deleteScheduleMessage",
    "taskProgressDialog",
    "taskProgressContent",
    "toast",
  ].forEach((id) => {
    dom[id] = document.getElementById(id);
  });
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    if (event.target.closest("[contenteditable='true']")) return;
    if (suppressNextCardClick) {
      suppressNextCardClick = false;
      if (!event.target.closest("dialog")) {
        event.preventDefault();
        return;
      }
    }

    const navButton = event.target.closest("[data-nav-page]");
    if (navButton) {
      const pageId = navButton.dataset.navPage;
      switchPage(pageId);
      scrollToPageTop();
      return;
    }

    const jumpButton = event.target.closest("[data-jump]");
    if (jumpButton) {
      jumpTo(jumpButton.dataset.jump);
      return;
    }

    const button = event.target.closest("[data-action]");
    if (!button) return;

    const action = button.dataset.action;
    if (action === "toggle-real-balance" || action === "open-balance-adjust") {
      event.preventDefault();
      event.stopPropagation();
    }
    if (action === "toggle-main-plan" || action === "toggle-side-plan") playTaskCardFeedback(button);
    if (action === "toast") showToast(button.dataset.message || "已经记录。");
    if (action === "cycle-character") cycleCharacter();
    if (action === "toggle-character-panel") toggleCharacterPanel();
    if (action === "select-character") selectCharacter(button.dataset.id);
    if (action === "open-account-center") openAccountCenter();
    if (action === "close-account-center") closeAccountCenter();
    if (action === "account-sign-up") signUpWithEmail();
    if (action === "account-sign-in") signInWithEmail();
    if (action === "account-sign-out") signOutAccount();
    if (action === "open-blessing") openBlessingDialog();
    if (action === "close-blessing") closeBlessingDialog();
    if (action === "tap-wooden-fish") tapWoodenFish();
    if (action === "skip-onboarding") skipOnboarding();
    if (action === "open-growth") openGrowthDialog();
    if (action === "close-growth") closeGrowthDialog();
    if (action === "print-dashboard") printDashboard();
    if (action === "toggle-invoice-range") toggleInvoiceRangePanel();
    if (action === "select-invoice-range-mode") selectInvoiceRangeMode(button.dataset.invoiceRangeMode);
    if (action === "cycle-invoice-material") cycleInvoiceMaterial();
    if (action === "cycle-invoice-bill-type") cycleInvoiceBillType();
    if (action === "open-invoice") openInvoiceDialog(button.dataset.date || selectedDate, button.id === "invoiceReceiptPeek" || button.classList.contains("printer-receipt-peek"));
    if (action === "open-invoice-book") openInvoiceBook();
    if (action === "close-invoice-book") closeInvoiceBook();
    if (action === "close-invoice") closeInvoiceDialog();
    if (action === "delete-diy-invoice-image") openDeleteInvoiceDialog(button.dataset.invoiceKey, button.dataset.deleteSource === "current");
    if (action === "close-delete-invoice") closeDeleteInvoiceDialog();
    if (action === "confirm-delete-invoice") confirmDeleteInvoice();
    if (action === "save-invoice") saveCurrentInvoice();
    if (action === "toggle-invoice-export-menu") toggleInvoiceExportMenu(button);
    if (action === "export-invoice-png") exportCurrentInvoice("png");
    if (action === "export-invoice-source") exportCurrentInvoice("source");
    if (action === "open-protection") openProtection();
    if (action === "close-protection") closeProtection();
    if (action === "safe-mode") activateSafeMode();
    if (action === "copy-help") copyHelpMessage();
    if (action === "mark-safe-place") markSafePlace();
    if (action === "toggle-low") toggleLowTask(button.dataset.id);
    if (action === "open-main-task-create") openMainTaskDialog();
    if (action === "close-main-task-create") closeMainTaskDialog();
    if (action === "save-main-task") saveNewMainTask();
    if (action === "delete-main-task") deleteMainTask(button.dataset.id);
    if (action === "create-side-quest") createSideQuest();
    if (action === "toggle-main-plan") toggleTaskTimer("main", button.dataset.id);
    if (action === "toggle-side-plan") toggleTaskTimer("side", button.dataset.id);
    if (action === "toggle-main-complete") toggleMainTask(button.dataset.id);
    if (action === "toggle-side-complete") toggleSideQuest(button.dataset.id);
    if (action === "toggle-run-complete") toggleTaskRunComplete(button.dataset.id);
    if (action === "toggle-life") toggleLifeTask(button.dataset.id);
    if (action === "toggle-life-timer") toggleLifeTimer(button.dataset.id);
    if (action === "close-task-progress") closeTaskProgressDialog();
    if (action === "toggle-task-progress-pause") toggleTaskProgressPauseFromDialog(button);
    if (action === "pause-task-progress") pauseTaskProgressFromDialog();
    if (action === "resume-task-progress") resumeTaskProgressFromDialog();
    if (action === "exit-task-progress") stopTaskProgressFromDialog(false);
    if (action === "complete-task-progress") stopTaskProgressFromDialog(true);
    if (action === "select-date") selectTimelineDate(button.dataset.date);
    if (action === "open-calendar") openCalendar();
    if (action === "close-calendar") closeCalendar();
    if (action === "prev-calendar-month") shiftCalendarMonth(-1);
    if (action === "next-calendar-month") shiftCalendarMonth(1);
    if (action === "select-calendar-date") selectCalendarDate(button.dataset.date);
    if (action === "confirm-delete-schedule") confirmDeleteSchedule();
    if (action === "close-delete-schedule") closeDeleteScheduleDialog();
    if (action === "open-battle-settings") openBattleSettings();
    if (action === "close-battle-settings") closeBattleSettings();
    if (action === "save-battle-settings") saveBattleSettings(false);
    if (action === "lock-battle-settings") saveBattleSettings(true);
    if (action === "delete-ledger") deleteLedgerRecord(button.dataset.id);
    if (action === "select-finance-card") selectFinanceCard(button.dataset.financeCard);
    if (action === "back-finance-home") showFinanceHome();
    if (action === "toggle-real-balance") toggleRealBalanceVisibility();
    if (action === "open-balance-adjust") openBalanceAdjustDialog();
    if (action === "close-balance-adjust") closeBalanceAdjustDialog();
    if (action === "save-balance-adjust") saveBalanceAdjust();
    if (action === "close-finance-password") closeFinancePasswordDialog();
    if (action === "submit-finance-password") submitFinancePassword();
    if (action === "open-diary") openDiaryDialog();
    if (action === "close-diary") closeDiaryDialog();
    if (action === "select-diary-date") selectDiaryDate(button.dataset.date);
    if (action === "diary-prev-month") shiftDiaryMonth(-1);
    if (action === "diary-next-month") shiftDiaryMonth(1);
    if (action === "add-diary-check-item") addDiaryCheckItem();
    if (action === "toggle-diary-check-item") toggleDiaryCheckItem(button.dataset.id);
    if (action === "delete-diary-check-item") deleteDiaryCheckItem(button.dataset.id);
    if (action === "open-comic-diary") toggleComicDiaryPanel();
    if (action === "generate-comic-diary") generateComicDiary();
    if (action === "focus-comic-text") dom.comicSourceInput?.focus();
    if (action === "clear-comic-diary") clearComicDiaryDraft();
    if (action === "save-comic-diary") saveComicDiary();
    if (action === "export-comic-diary-png") exportComicDiaryAsPng();
    if (action === "load-comic-diary") loadComicDiaryDraft(button.dataset.id);
    if (action === "settle-day") settleDay();
    if (action === "save-card-edit") saveCardEdit();
    if (action === "close-card-edit") closeCardEdit();
    if (action === "delete-current-card") deleteCurrentCard();
    if (action === "select-task-art") selectTaskArt(button);
    if (action === "export-data") exportData();
    if (action === "import-data") dom.importFile.click();
  });

  document.addEventListener("input", handleEditableInput);
  document.addEventListener("input", handleTimelineZoomInput);
  document.addEventListener("blur", handleEditableBlur, true);
  document.addEventListener("keydown", handleEditableKeydown);
  document.addEventListener("paste", handleEditablePaste);
  document.addEventListener("pointerdown", startScheduleBarDrag);
  document.addEventListener("pointermove", moveScheduleBarDrag);
  document.addEventListener("pointerup", finishScheduleBarDrag);
  document.addEventListener("pointercancel", finishScheduleBarDrag);
  document.addEventListener("pointerdown", startInvoiceBookInteraction);
  document.addEventListener("pointermove", moveInvoiceBookInteraction);
  document.addEventListener("pointerup", finishInvoiceBookInteraction);
  document.addEventListener("pointercancel", finishInvoiceBookInteraction);
  document.addEventListener("pointerdown", startCardLongPress);
  dom.taskProgressDialog?.addEventListener("close", () => {
    stopTaskProgressTicker();
    if (!dom.taskProgressDialog?.open) activeProgressTask = null;
  });
  document.addEventListener("pointermove", moveCardLongPress);
  document.addEventListener("pointerup", cancelCardLongPress);
  document.addEventListener("pointercancel", cancelCardLongPress);
  document.addEventListener("contextmenu", (event) => {
    const scheduleBar = event.target.closest(".schedule-bar");
    if (scheduleBar) {
      event.preventDefault();
      openDeleteScheduleDialog(scheduleBar.dataset.scheduleType, scheduleBar.dataset.id);
      return;
    }
    if (event.target.closest("[data-edit-card]")) event.preventDefault();
  });

  [dom.riskInput].forEach((input) => {
    input.addEventListener("input", () => {
      const day = ensureDay(selectedDate);
      day.risk = Number(dom.riskInput.value);
      if (day.risk >= 6) day.protectionOpen = true;
      saveState();
      render();
    });
  });

  dom.reportInput?.addEventListener("input", () => {
    const day = ensureDay(diarySelectedDate || selectedDate);
    day.report = dom.reportInput.value;
    saveState();
    dom.saveStatus.textContent = "已自动保存";
  });
  dom.diaryChecklist?.addEventListener("input", (event) => {
    const input = event.target.closest("[data-diary-check-text]");
    if (!input) return;
    updateDiaryCheckItem(input.dataset.id, input.value);
  });
  dom.financePasswordInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitFinancePassword();
    }
  });
  dom.financePasswordConfirmInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitFinancePassword();
    }
  });
  [dom.accountEmailInput, dom.accountPasswordInput].forEach((input) => {
    input?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        signInWithEmail();
      }
    });
  });
  dom.invoicePaperColorInput?.addEventListener("input", updateInvoiceColorFromInput);
  dom.invoiceInkColorInput?.addEventListener("input", updateInvoiceColorFromInput);
  dom.invoicePrintDateInput?.addEventListener("change", updateInvoicePrintTarget);
  dom.invoicePrintWeekInput?.addEventListener("change", updateInvoicePrintTarget);
  dom.invoicePrintMonthInput?.addEventListener("change", updateInvoicePrintTarget);
  dom.invoiceDiyImageInput?.addEventListener("change", importInvoiceDiyImage);
  dom.onboardingForm?.addEventListener("submit", completeOnboarding);
  dom.onboardingCompanyTypeInput?.addEventListener("change", updateOnboardingDefaults);
  dom.balanceAdjustInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      saveBalanceAdjust();
    }
  });

  dom.ledgerForm.addEventListener("submit", addLedgerRecord);
  dom.invoiceBookList?.addEventListener("wheel", handleInvoiceBookWheel, { passive: false });

  dom.importFile.addEventListener("change", importData);
  if (dom.deleteScheduleDialog) {
    dom.deleteScheduleDialog.addEventListener("cancel", () => {
      pendingScheduleDelete = null;
    });
  }
}

function handleEditableInput(event) {
  const element = event.target.closest?.("[contenteditable='true'][data-edit-group]");
  if (!element) return;
  saveInlineEditable(element, false);
}

function handleEditableBlur(event) {
  const element = event.target.closest?.("[contenteditable='true'][data-edit-group]");
  if (!element) return;
  saveInlineEditable(element, true);
}

function handleEditableKeydown(event) {
  const actionTarget = event.target.closest?.("[role='button'][data-action]");
  if (actionTarget && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    actionTarget.click();
    return;
  }

  const element = event.target.closest?.("[contenteditable='true'][data-edit-group]");
  if (!element) return;
  if (event.key === "Enter") {
    event.preventDefault();
    element.blur();
  }
}

function handleEditablePaste(event) {
  const element = event.target.closest?.("[contenteditable='true'][data-edit-group]");
  if (!element) return;
  event.preventDefault();
  const text = event.clipboardData?.getData("text/plain") || "";
  document.execCommand("insertText", false, text.replace(/\s+/g, " "));
}

function handleTimelineZoomInput(event) {
  const input = event.target.closest?.("[data-schedule-zoom]");
  if (!input) return;
  timelineZoom = normalizeTimelineZoom(input.value);
  state.timelineZoom = timelineZoom;
  const wide = dom.timelineBoard?.querySelector(".schedule-wide");
  if (wide) {
    wide.style.width = `${timelineZoom}px`;
    wide.style.setProperty("--schedule-grid-step", `${scheduleGridStep(timelineZoom)}%`);
  }
  const head = dom.timelineBoard?.querySelector(".schedule-hour-head div");
  if (head) {
    head.innerHTML = scheduleTimeMarks(timelineZoom)
      .map((mark) => `<i style="left:${mark.left}%">${mark.label}</i>`)
      .join("");
  }
  window.clearTimeout(editSaveTimer);
  editSaveTimer = window.setTimeout(saveState, 180);
}

function saveInlineEditable(element, shouldNormalize) {
  state.editable = normalizeEditableState(state.editable);
  const group = element.dataset.editGroup;
  const field = element.dataset.editField;
  const id = element.dataset.editId;
  const max = Number(element.dataset.editMax) || 80;
  const defaults = defaultEditableState();
  let fallback = "";

  if (group === "page" && field) {
    fallback = defaults.page[field] || "";
    state.editable.page[field] = cleanEditableText(element.textContent, fallback, max);
    if (shouldNormalize) element.textContent = state.editable.page[field];
  }

  if (group === "statusCards" && id && field) {
    fallback = defaults.statusCards[id]?.[field] || "";
    state.editable.statusCards[id] ||= {};
    state.editable.statusCards[id][field] = cleanEditableText(element.textContent, fallback, max);
    if (shouldNormalize) element.textContent = state.editable.statusCards[id][field];
  }

  window.clearTimeout(editSaveTimer);
  editSaveTimer = window.setTimeout(() => {
    saveState();
    if (dom.saveStatus) dom.saveStatus.textContent = "已自动保存";
  }, 220);
}

function startCardLongPress(event) {
  if (event.button !== undefined && event.button !== 0) return;
  if (event.target.closest("[contenteditable='true'], input, textarea, select, .life-boxes button, .schedule-bar")) return;
  const card = event.target.closest("[data-edit-card]");
  if (!card) return;
  longPressCard = card;
  longPressStart = { x: event.clientX, y: event.clientY };
  window.clearTimeout(longPressTimer);
  longPressTimer = window.setTimeout(() => {
    suppressNextCardClick = true;
    openCardEdit(longPressCard);
    longPressCard = null;
  }, 560);
}

function moveCardLongPress(event) {
  if (!longPressStart) return;
  const dx = Math.abs(event.clientX - longPressStart.x);
  const dy = Math.abs(event.clientY - longPressStart.y);
  if (dx > 10 || dy > 10) cancelCardLongPress();
}

function cancelCardLongPress() {
  window.clearTimeout(longPressTimer);
  longPressTimer = null;
  longPressCard = null;
  longPressStart = null;
}

function startScheduleBarDrag(event) {
  if (event.button !== undefined && event.button !== 0) return;
  if (event.target.closest(".schedule-complete")) return;
  const bar = event.target.closest(".schedule-bar");
  if (!bar) return;
  const track = bar.closest(".schedule-track");
  if (!track) return;

  const duration = Math.max(15, Number(bar.dataset.duration) || 60);
  const trackRect = track.getBoundingClientRect();
  const barRect = bar.getBoundingClientRect();
  scheduleDrag = {
    pointerId: event.pointerId,
    type: bar.dataset.scheduleType,
    id: bar.dataset.id,
    bar,
    track,
    trackRect,
    startX: event.clientX,
    startY: event.clientY,
    initialStart: Number(bar.dataset.start) || 0,
    initialTop: Number(bar.dataset.top) || 0,
    duration,
    barHeight: barRect.height,
    longPressFired: false,
    moved: false,
  };
  window.clearTimeout(scheduleLongPressTimer);
  scheduleLongPressTimer = window.setTimeout(() => {
    if (!scheduleDrag || scheduleDrag.pointerId !== event.pointerId || scheduleDrag.moved) return;
    scheduleDrag.longPressFired = true;
    suppressNextCardClick = true;
    bar.classList.remove("is-dragging");
    bar.releasePointerCapture?.(event.pointerId);
    openDeleteScheduleDialog(scheduleDrag.type, scheduleDrag.id);
    window.clearTimeout(scheduleLongPressTimer);
    scheduleLongPressTimer = null;
    scheduleDrag = null;
  }, 650);
  bar.classList.add("is-dragging");
  bar.setPointerCapture?.(event.pointerId);
}

function moveScheduleBarDrag(event) {
  if (!scheduleDrag || event.pointerId !== scheduleDrag.pointerId) return;
  event.preventDefault();
  const dx = event.clientX - scheduleDrag.startX;
  const dy = event.clientY - scheduleDrag.startY;
  if (Math.abs(dx) > 14 || Math.abs(dy) > 14) {
    scheduleDrag.moved = true;
    window.clearTimeout(scheduleLongPressTimer);
  }

  const minutesPerPx = (24 * 60) / scheduleDrag.trackRect.width;
  const minuteDelta = Math.round((dx * minutesPerPx) / 5) * 5;
  const maxStart = 24 * 60 - scheduleDrag.duration;
  const start = clamp(scheduleDrag.initialStart + minuteDelta, 0, Math.max(0, maxStart));
  const top = clamp(
    scheduleDrag.initialTop + dy,
    0,
    Math.max(0, scheduleDrag.track.offsetHeight - scheduleDrag.barHeight)
  );

  updateScheduleBarPosition(scheduleDrag.bar, start, top, scheduleDrag.duration);
  scheduleDrag.currentStart = start;
  scheduleDrag.currentTop = top;
}

function finishScheduleBarDrag(event) {
  if (!scheduleDrag || event.pointerId !== scheduleDrag.pointerId) return;
  const drag = scheduleDrag;
  scheduleDrag = null;
  window.clearTimeout(scheduleLongPressTimer);
  drag.bar.classList.remove("is-dragging");
  drag.bar.releasePointerCapture?.(event.pointerId);

  if (!drag.moved || drag.longPressFired) {
    if (!drag.longPressFired) showScheduleBarInfo(drag.bar);
    return;
  }
  suppressNextCardClick = true;
  const day = ensureDay(selectedDate);
  day.schedule ||= { main: {}, side: {}, life: {}, run: {} };
  day.schedule[drag.type] ||= {};
  day.schedule[drag.type][drag.id] = {
    start: Number.isFinite(drag.currentStart) ? drag.currentStart : drag.initialStart,
    top: Math.round(Number.isFinite(drag.currentTop) ? drag.currentTop : drag.initialTop),
  };
  saveState();
  if (drag.type === "main" || drag.type === "side") {
    const activeTimer = day.taskActive?.[drag.type]?.[drag.id];
    if (activeTimer) {
      activeTimer.startMinute = Number.isFinite(drag.currentStart) ? drag.currentStart : drag.initialStart;
    }
    syncGameTaskToBaseSchedule(drag.type, drag.id, true);
  }
  if (drag.type === "run") {
    const run = ensureDay(selectedDate).taskRuns.find((item) => item.id === drag.id);
    if (run) syncGameRunToBaseSchedule(run);
  }
}

function deleteScheduleItem(type, id) {
  const day = ensureDay(selectedDate);
  let label = getScheduleItemLabel(type, id);

  if (type === "main") {
    day.planned.main[id] = false;
    day.main[id] = false;
    if (day.taskActive?.main) delete day.taskActive.main[id];
    if (day.schedule?.main) delete day.schedule.main[id];
    day.settled = false;
  }

  if (type === "side") {
    day.planned.side[id] = false;
    day.side[id] = false;
    if (day.taskActive?.side) delete day.taskActive.side[id];
    if (day.schedule?.side) delete day.schedule.side[id];
  }

  if (type === "life") {
    day.lifeRecords = day.lifeRecords.filter((item) => item.id !== id);
    if (day.schedule?.life) delete day.schedule.life[id];
  }

  if (type === "run") {
    const run = day.taskRuns.find((item) => item.id === id);
    label = run?.title || label;
    day.taskRuns = day.taskRuns.filter((item) => item.id !== id);
    if (day.schedule?.run) delete day.schedule.run[id];
    removeGameRunFromBaseSchedule(id);
  }

  saveState();
  if (type === "main" || type === "side") {
    syncGameTaskToBaseSchedule(type, id, false);
  }
  render();
  showToast(`${label} 已从时间轴删除。`);
}

function openDeleteScheduleDialog(type, id) {
  if (!type || !id) return;
  const label = getScheduleItemLabel(type, id);
  pendingScheduleDelete = { type, id, label };
  if (dom.deleteScheduleMessage) {
    dom.deleteScheduleMessage.textContent = `确定要把「${label}」从今天时间轴里删除吗？`;
  }
  if (typeof dom.deleteScheduleDialog?.showModal === "function") {
    if (!dom.deleteScheduleDialog.open) dom.deleteScheduleDialog.showModal();
  } else {
    dom.deleteScheduleDialog?.setAttribute("open", "");
  }
}

function closeDeleteScheduleDialog() {
  pendingScheduleDelete = null;
  if (dom.deleteScheduleDialog?.open) {
    dom.deleteScheduleDialog.close();
  } else {
    dom.deleteScheduleDialog?.removeAttribute("open");
  }
}

function confirmDeleteSchedule() {
  const pending = pendingScheduleDelete;
  pendingScheduleDelete = null;
  if (dom.deleteScheduleDialog?.open) {
    dom.deleteScheduleDialog.close();
  } else {
    dom.deleteScheduleDialog?.removeAttribute("open");
  }
  if (!pending) return;
  deleteScheduleItem(pending.type, pending.id);
}

function isSupabaseConfigured() {
  return Boolean(
    SUPABASE_CONFIG.url &&
    SUPABASE_CONFIG.anonKey &&
    !SUPABASE_CONFIG.url.includes("请在这里填入") &&
    !SUPABASE_CONFIG.anonKey.includes("请在这里填入")
  );
}

async function initSupabaseClient() {
  renderAccountCenter();
  if (!isSupabaseConfigured()) {
    setAccountMessage("请先填入 Supabase Project URL 和 anon public key，未登录时仍可继续使用本地模式。", "muted");
    updateAuthUI(null);
    return null;
  }
  const supabaseSdk = await ensureSupabaseSdkLoaded();
  if (!supabaseSdk?.createClient) {
    setAccountMessage("Supabase SDK 没有加载成功，请检查网络或 CDN。", "error");
    updateAuthUI(null);
    return null;
  }
  try {
    supabaseClient ||= supabaseSdk.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    setAccountMessage("Supabase 已连接。当前未登录，可以注册或登录。", "muted");
    const { data, error } = await withTimeout(
      supabaseClient.auth.getSession(),
      8000,
      "读取登录状态超时，请稍后重试。"
    );
    if (error) throw error;
    currentAuthUser = data?.session?.user || null;
    updateAuthUI(currentAuthUser);
    supabaseClient.auth.onAuthStateChange((_event, session) => {
      currentAuthUser = session?.user || null;
      updateAuthUI(currentAuthUser);
    });
    return supabaseClient;
  } catch (error) {
    setAccountMessage(authErrorMessage(error), "error");
    updateAuthUI(null);
    return null;
  }
}

function getCurrentUser() {
  return currentAuthUser;
}

function getSupabaseGlobal() {
  if (window.supabase?.createClient) return window.supabase;
  if (globalThis.supabase?.createClient) return globalThis.supabase;
  if (typeof supabase !== "undefined" && supabase?.createClient) return supabase;
  return null;
}

function ensureSupabaseSdkLoaded() {
  const existingSdk = getSupabaseGlobal();
  if (existingSdk?.createClient) return Promise.resolve(existingSdk);
  const sdkUrls = [
    "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js",
    "https://unpkg.com/@supabase/supabase-js@2/dist/umd/supabase.js",
  ];
  return sdkUrls.reduce((chain, url) => (
    chain.then((client) => client || loadSupabaseSdkScript(url))
  ), Promise.resolve(null));
}

function loadSupabaseSdkScript(url) {
  const existingSdk = getSupabaseGlobal();
  if (existingSdk?.createClient) return Promise.resolve(existingSdk);
  return new Promise((resolve) => {
    const existingScript = document.querySelector(`script[data-supabase-sdk][src="${url}"]`);
    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        resolve(getSupabaseGlobal());
        return;
      }
      existingScript.addEventListener("load", () => resolve(getSupabaseGlobal()), { once: true });
      existingScript.addEventListener("error", () => resolve(null), { once: true });
      window.setTimeout(() => resolve(getSupabaseGlobal()), 6000);
      return;
    }
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.dataset.supabaseSdk = "true";
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve(getSupabaseGlobal());
    };
    script.onerror = () => resolve(null);
    document.head.appendChild(script);
    window.setTimeout(() => resolve(getSupabaseGlobal()), 6000);
  });
}

function withTimeout(promise, delayMs, message = "请求超时。") {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      window.setTimeout(() => reject(new Error(message)), delayMs);
    }),
  ]);
}

function openAccountCenter() {
  renderAccountCenter();
  if (typeof dom.accountDialog?.showModal === "function") {
    if (!dom.accountDialog.open) dom.accountDialog.showModal();
  } else {
    dom.accountDialog?.setAttribute("open", "");
  }
}

function closeAccountCenter() {
  if (dom.accountDialog?.open) {
    dom.accountDialog.close();
  } else {
    dom.accountDialog?.removeAttribute("open");
  }
}

function accountCredentials() {
  return {
    email: String(dom.accountEmailInput?.value || "").trim(),
    password: String(dom.accountPasswordInput?.value || ""),
  };
}

async function signUpWithEmail() {
  const client = await ensureSupabaseClientForAuth();
  if (!client) return;
  const { email, password } = accountCredentials();
  if (!validateAccountCredentials(email, password)) return;
  setAccountBusy(true);
  setAccountMessage("正在注册账号...", "muted");
  try {
    const { data, error } = await client.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: AUTH_REDIRECT_URL,
      },
    });
    if (error) throw error;
    currentAuthUser = data?.user || currentAuthUser;
    updateAuthUI(currentAuthUser);
    setAccountMessage(data?.session ? "注册成功，已登录。" : "注册成功，请按 Supabase 邮箱设置完成确认后再登录。", "success");
    showToast("账号注册请求已发送。");
  } catch (error) {
    setAccountMessage(authErrorMessage(error), "error");
  } finally {
    setAccountBusy(false);
  }
}

async function signInWithEmail() {
  const client = await ensureSupabaseClientForAuth();
  if (!client) return;
  const { email, password } = accountCredentials();
  if (!validateAccountCredentials(email, password)) return;
  setAccountBusy(true);
  setAccountMessage("正在登录...", "muted");
  try {
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;
    currentAuthUser = data?.user || null;
    updateAuthUI(currentAuthUser);
    setAccountMessage("登录成功。你已进入云端账号模式，云备份功能下一步再开启。", "success");
    showToast("账号已登录。");
  } catch (error) {
    setAccountMessage(authErrorMessage(error), "error");
  } finally {
    setAccountBusy(false);
  }
}

async function signOutAccount() {
  const client = await ensureSupabaseClientForAuth();
  if (!client) return;
  setAccountBusy(true);
  setAccountMessage("正在退出登录...", "muted");
  try {
    const { error } = await client.auth.signOut();
    if (error) throw error;
    currentAuthUser = null;
    updateAuthUI(null);
    setAccountMessage("已退出登录。现在继续使用本地模式。", "success");
    showToast("已退出账号。");
  } catch (error) {
    setAccountMessage(authErrorMessage(error), "error");
  } finally {
    setAccountBusy(false);
  }
}

async function ensureSupabaseClientForAuth() {
  if (!isSupabaseConfigured()) {
    setAccountMessage("还没有配置 Supabase Project URL 和 anon public key。请先填入配置后再注册或登录。", "error");
    return null;
  }
  if (!supabaseClient) await initSupabaseClient();
  return supabaseClient;
}

function validateAccountCredentials(email, password) {
  if (!email || !email.includes("@")) {
    setAccountMessage("请输入有效邮箱。", "error");
    dom.accountEmailInput?.focus();
    return false;
  }
  if (!password || password.length < 6) {
    setAccountMessage("密码至少需要 6 位。", "error");
    dom.accountPasswordInput?.focus();
    return false;
  }
  return true;
}

function renderAccountCenter() {
  updateAuthUI(currentAuthUser);
}

function updateAuthUI(user = currentAuthUser) {
  currentAuthUser = user || null;
  const email = currentAuthUser?.email || "";
  if (dom.accountStatusChip) {
    dom.accountStatusChip.textContent = email ? "账号" : "本地模式";
    dom.accountStatusChip.classList.toggle("is-signed-in", Boolean(email));
    dom.accountStatusChip.title = email ? `已登录：${email}` : "当前为本地模式";
  }
  if (dom.accountModeText) {
    dom.accountModeText.textContent = email
      ? "你已登录，之后可以将本地数据同步到云端。"
      : "你正在使用本地模式。登录后可以开启云端备份。";
  }
  if (dom.accountCurrentEmail) dom.accountCurrentEmail.textContent = email || "未登录";
  if (dom.accountCloudText) dom.accountCloudText.textContent = email ? "云端功能：准备中" : "云端功能：未开启";
  if (dom.accountSignOutButton) dom.accountSignOutButton.hidden = !email;
  if (dom.accountSignInButton) dom.accountSignInButton.hidden = Boolean(email);
  if (dom.accountSignUpButton) dom.accountSignUpButton.hidden = Boolean(email);
}

function setAccountMessage(message, type = "muted") {
  if (!dom.accountMessage) return;
  dom.accountMessage.textContent = message || "";
  dom.accountMessage.dataset.state = type;
}

function setAccountBusy(isBusy) {
  [dom.accountSignUpButton, dom.accountSignInButton, dom.accountSignOutButton].forEach((button) => {
    if (button) button.disabled = Boolean(isBusy);
  });
}

function authErrorMessage(error) {
  const message = String(error?.message || error || "账号操作失败。");
  if (message.includes("Invalid login credentials")) return "邮箱或密码不正确。";
  if (message.includes("Email not confirmed")) return "邮箱还没有确认，请先检查邮箱确认邮件。";
  if (message.includes("User already registered")) return "这个邮箱已经注册过了，请直接登录。";
  if (message.includes("Password should be")) return "密码格式不符合要求，请换一个至少 6 位的密码。";
  return message;
}

function getTarotSpread(id) {
  return tarotSpreads.find((spread) => spread.id === id) || tarotSpreads[0];
}

function isSkillMarketSideQuestId(id) {
  return String(id || "").startsWith(SKILL_MARKET_SIDE_PREFIX);
}

function skillMarketTaskIdFromSideQuestId(id) {
  return String(id || "").replace(SKILL_MARKET_SIDE_PREFIX, "");
}

function isLifeCompanyMainTaskId(id) {
  return String(id || "").startsWith(LIFE_COMPANY_MAIN_PREFIX);
}

function lifeCompanyTaskIdFromMainTaskId(id) {
  return String(id || "").replace(LIFE_COMPANY_MAIN_PREFIX, "");
}

function readSkillMarketState() {
  try {
    const raw = localStorage.getItem(SKILL_MARKET_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function readLifeCompanyState() {
  try {
    const raw = localStorage.getItem(LIFE_COMPANY_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function writeLifeCompanyState(companyState) {
  if (!companyState || typeof companyState !== "object") return;
  companyState.updatedAt = new Date().toISOString();
  localStorage.setItem(LIFE_COMPANY_STORAGE_KEY, JSON.stringify(companyState));
}

function lifeCompanyTypeById(typeId) {
  return ONBOARDING_COMPANY_TYPES.find((type) => type.id === typeId) || ONBOARDING_COMPANY_TYPES[0];
}

function createOnboardingDepartment(name) {
  return {
    id: makeId("dept"),
    name,
    status: "normal",
    progress: 0,
    level: 1,
    exp: 0,
    projectIds: [],
    taskIds: [],
    manualProjectCount: null,
    manualTaskCount: null,
  };
}

function createOnboardingCompany({ name, typeId, goal, deadline }) {
  const type = lifeCompanyTypeById(typeId);
  const now = new Date().toISOString();
  const companyId = makeId("company");
  const projectId = makeId("project");
  const departments = type.departments.slice(0, 6).map(createOnboardingDepartment);
  const firstDepartment = departments[0]?.name || "";
  const existingState = readLifeCompanyState() || {};
  const company = {
    id: companyId,
    name,
    type: type.id,
    vision: goal,
    mainGoal: {
      title: goal,
      deadline,
      status: "active",
      progress: 0,
    },
    departments,
    projects: goal
      ? [{
        id: projectId,
        companyId,
        title: goal,
        description: "新手部署的第一个目标。",
        departmentName: firstDepartment,
        startDate: selectedDate,
        deadline,
        progress: 0,
        status: "active",
        taskIds: [],
        createdAt: now,
        updatedAt: now,
      }]
      : [],
    linkedSkillStocks: type.stocks,
    economy: {
      currencyName: "金币",
      currencySymbol: "◈",
      companyCoins: COMPANY_STARTING_STAKE,
      lifetimeEarned: COMPANY_STARTING_STAKE,
      lifetimeSpent: 0,
      companyLevel: 1,
      companyExp: 0,
      assetValue: COMPANY_STARTING_STAKE,
      lastCompanyUpgradeAt: "",
      lastSettledDate: "",
      transactions: [],
    },
    createdAt: now,
    updatedAt: now,
  };

  writeLifeCompanyState({
    ...existingState,
    company,
    tasks: Array.isArray(existingState.tasks) ? existingState.tasks : [],
  });
  window.dispatchEvent(new CustomEvent("life-company-updated"));
  return company;
}

function ensureLifeCompanyEconomy(company) {
  if (!company || typeof company !== "object") return null;
  const economy = company.economy && typeof company.economy === "object" && !Array.isArray(company.economy)
    ? company.economy
    : {};
  company.economy = {
    currencyName: normalizeCoinName(economy.currencyName),
    currencySymbol: String(economy.currencySymbol || "◈"),
    companyCoins: roundCompanyCoins(economy.companyCoins !== undefined ? economy.companyCoins : COMPANY_STARTING_STAKE),
    lifetimeEarned: roundCompanyCoins(economy.lifetimeEarned !== undefined ? economy.lifetimeEarned : COMPANY_STARTING_STAKE),
    lifetimeSpent: roundCompanyCoins(economy.lifetimeSpent || 0),
    companyLevel: clamp(Math.floor(Number(economy.companyLevel || 1)), 1, COMPANY_ECONOMY_LEVELS.length),
    companyExp: Math.max(0, Math.floor(Number(economy.companyExp || 0))),
    assetValue: roundCompanyCoins(economy.assetValue || 0),
    transactions: Array.isArray(economy.transactions) ? economy.transactions.slice(0, 80) : [],
  };
  return company.economy;
}

function awardCompanyEconomyForTask(kind, meta = {}) {
  const rewardMap = {
    normal: { coins: 5, exp: 5, title: "完成普通任务" },
    company: { coins: 10, exp: 10, title: "完成公司项目任务" },
    skill: { coins: 8, exp: 8, title: "完成技能股任务" },
    pressure: { coins: 15, exp: 10, title: "完成高压任务" },
  };
  const reward = rewardMap[kind] || rewardMap.normal;
  const rewardCoins = roundCompanyCoins(meta.coins ?? reward.coins);
  const rewardExp = Math.max(0, Math.floor(Number(meta.exp ?? reward.exp)));
  const companyState = readLifeCompanyState();
  const company = companyState?.company;
  const economy = ensureLifeCompanyEconomy(company);
  if (!companyState || !company || !economy) return false;
  const taskKey = meta.relatedTaskId || meta.id || "";
  const uniqueKey = meta.uniqueKey || taskKey;
  const exists = economy.transactions.some((transaction) =>
    transaction.source === "task" &&
    (
      transaction.relatedTaskId === uniqueKey ||
      transaction.relatedTaskId === taskKey ||
      transaction.relatedTaskId === meta.relatedTaskId
    )
  );
  if (exists) return false;
  const energyBonus = Boolean(meta.energyBonus);
  const finalCoins = energyBonus ? rewardCoins * 2 : rewardCoins;
  const finalExp = energyBonus ? rewardExp * 2 : rewardExp;
  economy.companyCoins = roundCompanyCoins(economy.companyCoins + finalCoins);
  economy.lifetimeEarned = roundCompanyCoins(economy.lifetimeEarned + finalCoins);
  economy.companyExp = Math.max(0, Math.floor(Number(economy.companyExp || 0))) + finalExp;
  economy.transactions = [{
    id: makeId("economy"),
    type: "earn",
    amount: finalCoins,
    source: "task",
    title: energyBonus ? `${reward.title} · 能量耗尽加成` : reward.title,
    note: meta.title || "",
    relatedCompanyId: company.id || "",
    relatedProjectId: meta.relatedProjectId || "",
    relatedTaskId: uniqueKey,
    relatedStockId: meta.relatedStockId || "",
    createdAt: new Date().toISOString(),
  }, ...economy.transactions].slice(0, 80);
  company.updatedAt = new Date().toISOString();
  updateLifeCompanyAssetValue(companyState);
  writeLifeCompanyState(companyState);
  return true;
}

function applyEnergyDepletionIncomeBonus(dayKey = selectedDate) {
  if (!isEnergyDepletedForDate(dayKey)) return false;
  const companyState = readLifeCompanyState();
  const company = companyState?.company;
  const economy = ensureLifeCompanyEconomy(company);
  if (!companyState || !company || !economy) return false;
  const createdAt = new Date().toISOString();
  const bonusTransactions = economy.transactions
    .filter((transaction) =>
      transaction.source === "task" &&
      transaction.type === "earn" &&
      transactionDateKey(transaction.createdAt) === dayKey &&
      !String(transaction.relatedTaskId || "").startsWith("energy-bonus:")
    )
    .filter((transaction) => !economy.transactions.some((item) =>
      item.source === "task" && item.relatedTaskId === `energy-bonus:${dayKey}:${transaction.relatedTaskId}`
    ))
    .map((transaction) => ({
      id: makeId("economy"),
      type: "earn",
      amount: roundCompanyCoins(transaction.amount),
      source: "task",
      title: "能量耗尽收入翻倍",
      note: transaction.note || transaction.title || "任务收入",
      relatedCompanyId: company.id || "",
      relatedProjectId: transaction.relatedProjectId || "",
      relatedTaskId: `energy-bonus:${dayKey}:${transaction.relatedTaskId}`,
      relatedStockId: transaction.relatedStockId || "",
      createdAt,
    }))
    .filter((transaction) => transaction.amount > 0);

  if (!bonusTransactions.length) return false;
  const totalBonus = bonusTransactions.reduce((sum, transaction) => sum + Number(transaction.amount || 0), 0);
  economy.companyCoins = roundCompanyCoins(economy.companyCoins + totalBonus);
  economy.lifetimeEarned = roundCompanyCoins(economy.lifetimeEarned + totalBonus);
  economy.transactions = [...bonusTransactions, ...economy.transactions].slice(0, 80);
  company.updatedAt = createdAt;
  updateLifeCompanyAssetValue(companyState);
  writeLifeCompanyState(companyState);
  return true;
}

function awardCompanyEconomyForCompletedTask(type, id, task = {}) {
  if (!id) return false;
  const energyBonus = isEnergyDepletedForDate(selectedDate);
  if (type === "main" && isLifeCompanyMainTaskId(id)) {
    const companyTaskId = lifeCompanyTaskIdFromMainTaskId(id);
    const reward = taskCoinReward(task);
    return awardCompanyEconomyForTask("company", {
      id,
      title: task.title,
      coins: reward,
      exp: reward,
      energyBonus,
      relatedTaskId: `company:${companyTaskId}`,
      relatedProjectId: task.projectId || "",
    });
  }
  if (type === "side" && isSkillMarketSideQuestId(id)) {
    const marketTaskId = skillMarketTaskIdFromSideQuestId(id);
    return awardCompanyEconomyForTask("skill", {
      id,
      title: task.title,
      energyBonus,
      relatedTaskId: `skill:${marketTaskId}`,
      relatedStockId: task.marketSymbol || "",
    });
  }
  const reward = taskCoinReward(task);
  return awardCompanyEconomyForTask("normal", {
    id,
    title: task.title,
    coins: reward,
    exp: reward,
    energyBonus,
    relatedTaskId: `${selectedDate}:${type}:${id}`,
  });
}

function penalizeCompanyEconomyForMissedMainTasks(dayKey = selectedDate) {
  const missedTasks = getVisibleMainTasks().filter((task) => task.lockedFromCompany && !task.companyDone);
  if (!missedTasks.length) return { count: 0, coins: 0 };
  const companyState = readLifeCompanyState();
  const company = companyState?.company;
  const economy = ensureLifeCompanyEconomy(company);
  if (!companyState || !company || !economy) return { count: 0, coins: 0 };

  const createdAt = new Date().toISOString();
  const transactions = [];
  let totalPenalty = 0;

  missedTasks.forEach((task) => {
    const companyTaskId = task.companyTaskId || lifeCompanyTaskIdFromMainTaskId(task.id);
    if (!companyTaskId) return;
    const uniqueKey = `${dayKey}:company-missed:${companyTaskId}`;
    const exists = economy.transactions.some((transaction) =>
      transaction.source === "company-task-missed" && transaction.relatedTaskId === uniqueKey
    );
    if (exists) return;

    const penalty = roundCompanyCoins(taskCoinReward(task));
    if (penalty <= 0) return;
    totalPenalty += penalty;
    transactions.push({
      id: makeId("economy"),
      type: "spend",
      amount: penalty,
      source: "company-task-missed",
      title: "公司任务未完成",
      note: task.title || "",
      relatedCompanyId: company.id || "",
      relatedProjectId: task.projectId || "",
      relatedTaskId: uniqueKey,
      relatedStockId: "",
      createdAt,
    });
  });

  if (!transactions.length) return { count: 0, coins: 0 };
  economy.companyCoins = roundCompanyCoins(economy.companyCoins - totalPenalty);
  economy.lifetimeSpent = roundCompanyCoins(economy.lifetimeSpent + totalPenalty);
  economy.transactions = [...transactions, ...economy.transactions].slice(0, 80);
  company.updatedAt = createdAt;
  updateLifeCompanyAssetValue(companyState);
  writeLifeCompanyState(companyState);
  return { count: transactions.length, coins: totalPenalty };
}

function updateLifeCompanyAssetValue(companyState) {
  const company = companyState?.company;
  const economy = ensureLifeCompanyEconomy(company);
  if (!company || !economy) return;
  const completedProjectValue = Array.isArray(company.projects)
    ? company.projects.filter((project) => project?.status === "completed").length * 120
    : 0;
  const level = clamp(Math.floor(Number(economy.companyLevel || 1)), 1, COMPANY_ECONOMY_LEVELS.length);
  const departmentValue = Array.isArray(company.departments)
    ? company.departments.reduce((sum, department) => sum + Math.max(0, Number(department?.level || 1) - 1) * 90, 0)
    : 0;
  const skillHoldingValue = calculateStoredSkillHoldingValue();
  economy.assetValue = roundCompanyCoins(economy.companyCoins + completedProjectValue + level * 420 + departmentValue + skillHoldingValue);
}

function getCompanyLevelStatus() {
  const companyState = readLifeCompanyState();
  const company = companyState?.company;
  const economy = ensureLifeCompanyEconomy(company);
  const levelValue = clamp(Math.floor(Number(economy?.companyLevel || 1)), 1, COMPANY_ECONOMY_LEVELS.length);
  const currentLevel = COMPANY_ECONOMY_LEVELS.find((item) => item.level === levelValue) || COMPANY_ECONOMY_LEVELS[0];
  const nextLevel = COMPANY_ECONOMY_LEVELS.find((item) => item.level === levelValue + 1) || null;
  const coins = roundCompanyCoins(economy?.companyCoins || 0);
  const requiredCoins = nextLevel ? roundCompanyCoins(nextLevel.requiredCoins) : coins;
  const percent = nextLevel && requiredCoins > 0 ? clamp((coins / requiredCoins) * 100, 0, 100) : 100;
  return {
    level: currentLevel.level,
    levelName: currentLevel.name,
    nextLevelName: nextLevel?.name || "",
    coins,
    requiredCoins,
    percent,
    isMax: !nextLevel,
  };
}

function calculateStoredSkillHoldingValue() {
  const marketState = readSkillMarketState();
  const stocks = Array.isArray(marketState?.stocks) ? marketState.stocks : [];
  return Object.entries(marketState?.holdings || {}).reduce((sum, [symbol, holding]) => {
    const shares = Math.max(0, Math.floor(Number(holding?.shares || 0)));
    const stock = stocks.find((item) => item.symbol === symbol);
    const price = roundCompanyCoins(stock?.price || holding?.avgCost || 0);
    return sum + shares * price;
  }, 0);
}

function roundCompanyCoins(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0;
  return Math.max(0, Math.round(number));
}

function taskCoinReward(task = {}) {
  const explicitReward = Number(task.coinReward);
  if (Number.isFinite(explicitReward) && explicitReward > 0) return roundCompanyCoins(explicitReward);
  return taskCoinRewardForDuration(task.durationMinutes || task.duration || 60);
}

function taskCoinRewardForDuration(value) {
  const minutes = Math.max(1, Math.round(Number(value || 60)));
  return Math.max(TASK_COINS_PER_30_MINUTES, Math.round(minutes / 30) * TASK_COINS_PER_30_MINUTES);
}

function normalizedMainTaskDuration(value) {
  return Number(value) === 60 ? 60 : 120;
}

function normalizeCoinName(value) {
  const name = String(value || "金币").trim();
  if (!name || ["公司币", "游戏币", "技能币"].includes(name)) return "金币";
  return name;
}

function handleSharedStorageChange(event) {
  if (![LIFE_COMPANY_STORAGE_KEY, SKILL_MARKET_STORAGE_KEY].includes(event.key)) return;
  render();
}

function getLifeCompanyMainTasks() {
  const companyState = readLifeCompanyState();
  const company = companyState?.company || {};
  const tasks = Array.isArray(companyState?.tasks) ? companyState.tasks : [];
  return tasks
    .filter((task) => task?.id && task?.title)
    .map((task, index) => ({
      id: `${LIFE_COMPANY_MAIN_PREFIX}${task.id}`,
      title: cleanEditableText(task.title, `公司任务 ${index + 1}`, 36),
      icon: "司",
      art: defaultTaskIconFor("main", mainTasks.length + index),
      xp: 15,
      durationMinutes: normalizedMainTaskDuration(task.durationMinutes),
      companyTaskId: task.id,
      companyName: company.name || "人生公司",
      companyDepartmentName: task.departmentName || "未分配部门",
      companyDone: Boolean(task.done),
      coinReward: taskCoinReward(task),
      lockedFromCompany: true,
    }));
}

function getVisibleMainTasks() {
  return [...mainTasks, ...getLifeCompanyMainTasks()];
}

function setLifeCompanyTaskDoneFromMainTask(id, done) {
  if (!isLifeCompanyMainTaskId(id)) return false;
  const companyState = readLifeCompanyState();
  const taskId = lifeCompanyTaskIdFromMainTaskId(id);
  const task = Array.isArray(companyState?.tasks)
    ? companyState.tasks.find((item) => item.id === taskId)
    : null;
  if (!task) return false;
  task.done = Boolean(done);
  task.updatedAt = new Date().toISOString();
  writeLifeCompanyState(companyState);
  return true;
}

function updateLifeCompanyTaskFromMainTask(id, patch = {}) {
  if (!isLifeCompanyMainTaskId(id)) return false;
  const companyState = readLifeCompanyState();
  const taskId = lifeCompanyTaskIdFromMainTaskId(id);
  const task = Array.isArray(companyState?.tasks)
    ? companyState.tasks.find((item) => item.id === taskId)
    : null;
  if (!task) return false;
  if (patch.title) task.title = cleanEditableText(patch.title, task.title, 36);
  if (patch.durationMinutes) {
    task.durationMinutes = normalizedMainTaskDuration(patch.durationMinutes);
    task.coinReward = taskCoinRewardForDuration(task.durationMinutes);
  }
  task.updatedAt = new Date().toISOString();
  writeLifeCompanyState(companyState);
  return true;
}

function deleteLifeCompanyTaskFromMain(id) {
  if (!isLifeCompanyMainTaskId(id)) return false;
  const companyState = readLifeCompanyState();
  const taskId = lifeCompanyTaskIdFromMainTaskId(id);
  const task = Array.isArray(companyState?.tasks)
    ? companyState.tasks.find((item) => item.id === taskId)
    : null;
  if (!task) return false;
  companyState.tasks = companyState.tasks.filter((item) => item.id !== taskId);
  companyState.company?.projects?.forEach((project) => {
    project.taskIds = (project.taskIds || []).filter((itemId) => itemId !== taskId);
  });
  writeLifeCompanyState(companyState);
  if (state.editable?.main) delete state.editable.main[id];
  Object.values(state.days || {}).forEach((day) => {
    if (day.main) delete day.main[id];
    if (day.planned?.main) delete day.planned.main[id];
    if (day.taskActive?.main) delete day.taskActive.main[id];
    if (Array.isArray(day.taskRuns)) day.taskRuns = day.taskRuns.filter((run) => !(run.type === "main" && run.sourceTaskId === id));
    if (day.schedule?.main) delete day.schedule.main[id];
    day.settled = false;
  });
  removeGameTaskFromBaseScheduleEverywhere("main", id);
  saveState();
  render();
  showToast(`${task.title} 已从公司任务删除。`);
  return true;
}

function writeSkillMarketState(marketState) {
  if (!marketState || typeof marketState !== "object") return;
  localStorage.setItem(SKILL_MARKET_STORAGE_KEY, JSON.stringify(marketState));
}

function getSkillMarketSideQuests(dayKey = selectedDate) {
  const marketState = readSkillMarketState();
  const tasks = marketState?.tasksByDate?.[dayKey] || {};
  const holdings = marketState?.holdings || {};
  const stocks = Array.isArray(marketState?.stocks) ? marketState.stocks : [];
  return Object.values(tasks)
    .filter((task) => task?.id && task?.symbol && holdings[task.symbol])
    .map((task, index) => {
      const stock = stocks.find((item) => item.symbol === task.symbol) || {};
      const title = cleanEditableText(task.title, `${stock.name || task.symbol}任务`, 36);
      return {
        id: `${SKILL_MARKET_SIDE_PREFIX}${task.id}`,
        title,
        text: `${stock.name || task.symbol} · 股市持仓任务`,
        icon: "股",
        art: defaultTaskIconFor("side", index),
        xp: (stock.riskLevel === "high" ? 24 : stock.riskLevel === "medium" ? 20 : 16),
        durationMinutes: durationFromSkillMarketTask(task.title, stock.riskLevel),
        marketTaskId: task.id,
        marketSymbol: task.symbol,
        marketDone: Boolean(task.done),
        lockedFromMarket: true,
      };
    });
}

function getVisibleSideQuests(dayKey = selectedDate) {
  return [...getSkillMarketSideQuests(dayKey), ...sideQuests.slice(0, SIDE_QUEST_LIMIT)];
}

function durationFromSkillMarketTask(title, riskLevel = "medium") {
  const match = String(title || "").match(/(\d+)\s*分钟/);
  if (match) return clamp(Math.round(Number(match[1]) || 60), 15, 180);
  if (riskLevel === "high") return 90;
  if (riskLevel === "low") return 30;
  return 60;
}

function setSkillMarketTaskDoneFromSideQuest(id, done) {
  if (!isSkillMarketSideQuestId(id)) return false;
  const marketState = readSkillMarketState();
  const taskId = skillMarketTaskIdFromSideQuestId(id);
  const tasks = marketState?.tasksByDate?.[selectedDate] || {};
  if (!tasks[taskId]) return false;
  tasks[taskId].done = Boolean(done);
  writeSkillMarketState(marketState);
  return true;
}

function updateSkillMarketTaskFromSideQuest(id, patch = {}) {
  if (!isSkillMarketSideQuestId(id)) return false;
  const marketState = readSkillMarketState();
  const taskId = skillMarketTaskIdFromSideQuestId(id);
  const tasks = marketState?.tasksByDate?.[selectedDate] || {};
  if (!tasks[taskId]) return false;
  if (patch.title) tasks[taskId].title = cleanEditableText(patch.title, tasks[taskId].title, 36);
  writeSkillMarketState(marketState);
  return true;
}

function getScheduleItemLabel(type, id) {
  const day = ensureDay(selectedDate);
  if (type === "main") {
    return getEditableItem("main", getVisibleMainTasks().find((item) => item.id === id))?.title || "主线任务";
  }
  if (type === "side") {
    return getEditableItem("side", getTaskDefinition("side", id))?.title || "副线任务";
  }
  if (type === "life") {
    return day.lifeRecords.find((item) => item.id === id)?.title || "生命维护记录";
  }
  if (type === "run") {
    return day.taskRuns.find((item) => item.id === id)?.title || "计时任务";
  }
  return "任务";
}

function updateScheduleBarPosition(bar, start, top, duration) {
  const totalMinutes = 24 * 60;
  bar.style.left = `${(start / totalMinutes) * 100}%`;
  bar.style.width = `${(duration / totalMinutes) * 100}%`;
  bar.style.top = `${top}px`;
  bar.dataset.start = String(start);
  bar.dataset.top = String(Math.round(top));
  const timeLabel = bar.querySelector("small");
  if (timeLabel) {
    timeLabel.textContent = `${minutesToClock(start)} - ${minutesToClock(start + duration)} · ${formatDuration(duration)}`;
  }
}

function validTaskIconId(value, fallback = "task-icon-01") {
  const id = String(value || "");
  if (/^task-icon-(0[1-9]|1[0-9]|2[0-4])$/.test(id)) return id;
  const safeFallback = String(fallback || "");
  return /^task-icon-(0[1-9]|1[0-9]|2[0-4])$/.test(safeFallback) ? safeFallback : "task-icon-01";
}

function taskIconUrl(id) {
  const safeId = validTaskIconId(id);
  return `${TASK_ICON_BASE}${safeId.replace("task-icon-", "")}.png`;
}

function defaultTaskIconFor(type, index = 0) {
  const list = TASK_ICON_PRESETS[type] || TASK_ICON_PRESETS.main;
  return list[index % list.length] || TASK_ICON_IDS[index % TASK_ICON_IDS.length] || "task-icon-01";
}

function itemIndexForGroup(group, id) {
  const lists = { main: getVisibleMainTasks(), side: getVisibleSideQuests(), life: lifeGroups };
  const index = (lists[group] || []).findIndex((item) => item.id === id);
  return index >= 0 ? index : 0;
}

function renderTaskIconPicker(container, selectedId, target) {
  if (!container) return;
  const selected = validTaskIconId(selectedId);
  container.innerHTML = TASK_ICON_IDS.map((id) => `
    <button class="task-icon-choice ${id === selected ? "is-selected" : ""}" type="button" data-action="select-task-art" data-target="${target}" data-art="${id}" aria-label="选择任务插画 ${id.replace("task-icon-", "")}">
      <img src="${taskIconUrl(id)}" alt="" loading="lazy" />
    </button>
  `).join("");
}

function selectTaskArt(button) {
  const art = validTaskIconId(button?.dataset.art);
  const target = button?.dataset.target;
  if (target === "edit" && dom.editCardArtInput) {
    dom.editCardArtInput.value = art;
    renderTaskIconPicker(dom.editCardArtPicker, art, "edit");
  }
  if (target === "create" && dom.mainTaskArtInput) {
    dom.mainTaskArtInput.value = art;
    renderTaskIconPicker(dom.mainTaskArtPicker, art, "create");
  }
}

function playTaskCardFeedback(source) {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
  const card = source?.closest?.(".task-card, .quest-row");
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const target = document.querySelector("#timeline-zone") || document.querySelector("#timelineBoard") || card;
  const targetRect = target.getBoundingClientRect();
  const startX = rect.left + rect.width / 2;
  const startY = rect.top + rect.height / 2;
  const endX = targetRect.left + targetRect.width / 2;
  const endY = targetRect.top + Math.min(120, Math.max(30, targetRect.height / 2));

  const ghost = card.cloneNode(true);
  ghost.classList.add("task-card-ghost-pop");
  Object.assign(ghost.style, {
    left: `${rect.left}px`,
    top: `${rect.top}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
  });
  document.body.appendChild(ghost);
  window.setTimeout(() => ghost.remove(), 560);

  for (let index = 0; index < 9; index += 1) {
    const spark = document.createElement("span");
    spark.className = "magic-spark";
    const jitterX = (Math.random() - 0.5) * rect.width * 0.8;
    const jitterY = (Math.random() - 0.5) * rect.height * 0.55;
    const driftX = (Math.random() - 0.5) * 80;
    const driftY = (Math.random() - 0.5) * 58;
    const fromX = startX + jitterX;
    const fromY = startY + jitterY;
    spark.style.left = `${fromX}px`;
    spark.style.top = `${fromY}px`;
    spark.style.setProperty("--spark-dx", `${endX + driftX - fromX}px`);
    spark.style.setProperty("--spark-dy", `${endY + driftY - fromY}px`);
    spark.style.setProperty("--spark-delay", `${index * 34}ms`);
    document.body.appendChild(spark);
    window.setTimeout(() => spark.remove(), 980 + index * 34);
  }
}

function openCardEdit(card) {
  if (!card) return;
  const group = card.dataset.editCard;
  const id = card.dataset.id;
  const item = getEditableItem(group, getDefaultItem(group, id));
  if (!item || !id) return;
  const iconIndex = itemIndexForGroup(group, id);
  const canEditArt = group === "main" || group === "side" || group === "life";
  const canDeleteCard = group === "main" || (group === "side" && !isSkillMarketSideQuestId(id));

  currentCardEdit = { group, id, deleteArmed: false };
  dom.editCardDialogTitle.textContent = group === "side" ? "编辑副线卡片" : "编辑任务卡片";
  dom.editCardTitleInput.value = item.title || "";
  dom.editCardIconInput.value = item.icon || "";
  dom.editCardTextInput.value = item.text || "";
  dom.editCardIconField.hidden = !(group === "main" || group === "side");
  if (dom.editCardArtField) dom.editCardArtField.hidden = !canEditArt;
  if (canEditArt && dom.editCardArtInput) {
    dom.editCardArtInput.value = validTaskIconId(item.art, defaultTaskIconFor(group, iconIndex));
    renderTaskIconPicker(dom.editCardArtPicker, dom.editCardArtInput.value, "edit");
  }
  dom.editCardTextField.hidden = group !== "side";
  if (dom.editCardDurationField) dom.editCardDurationField.hidden = group !== "main";
  if (group === "main" && dom.editCardDurationInput) {
    dom.editCardDurationInput.value = String(normalizedMainTaskDuration(item.durationMinutes));
  }
  if (dom.editCardLifeMaintenanceField) dom.editCardLifeMaintenanceField.hidden = group !== "main";
  if (dom.editCardLifeMaintenanceHint) dom.editCardLifeMaintenanceHint.hidden = group !== "main";
  if (dom.editCardLifeMaintenanceInput) {
    dom.editCardLifeMaintenanceInput.checked = group === "main" && isLifeMaintenanceTask(item);
    dom.editCardLifeMaintenanceInput.disabled = group === "main" && isLifeCompanyMainTaskId(id);
  }
  if (dom.editCardDeleteButton) {
    dom.editCardDeleteButton.hidden = !canDeleteCard;
    dom.editCardDeleteButton.textContent = group === "side" ? "删除这张副线卡片" : "删除这张主线卡片";
    dom.editCardDeleteButton.classList.remove("is-armed");
  }

  if (typeof dom.editCardDialog.showModal === "function") {
    dom.editCardDialog.showModal();
  } else {
    dom.editCardDialog.setAttribute("open", "");
  }
}

function saveCardEdit() {
  if (!currentCardEdit) return;
  const { group, id } = currentCardEdit;
  const fallback = getEditableItem(group, getDefaultItem(group, id));
  state.editable = normalizeEditableState(state.editable);
  state.editable[group] ||= {};
  state.editable[group][id] ||= {};
  state.editable[group][id].title = cleanEditableText(dom.editCardTitleInput.value, fallback.title, 36);
  if (group === "side" && isSkillMarketSideQuestId(id)) {
    updateSkillMarketTaskFromSideQuest(id, { title: state.editable[group][id].title });
  }
  if (group === "main") {
    const durationMinutes = normalizedMainTaskDuration(dom.editCardDurationInput?.value || fallback.durationMinutes);
    const isLifeMaintenance = Boolean(dom.editCardLifeMaintenanceInput?.checked);
    if (isLifeCompanyMainTaskId(id)) {
      updateLifeCompanyTaskFromMainTask(id, {
        title: state.editable[group][id].title,
        durationMinutes,
      });
    } else {
      state.mainTasks = normalizeMainTasks((state.mainTasks || mainTasks).map((task) =>
        task.id === id ? { ...task, durationMinutes, isLifeMaintenance } : task
      ));
      mainTasks = state.mainTasks;
    }
  }

  if (group === "main" || group === "side") {
    state.editable[group][id].icon = cleanEditableText(dom.editCardIconInput.value, fallback.icon || "•", 4);
  }
  if (group === "main" || group === "side" || group === "life") {
    state.editable[group][id].art = validTaskIconId(
      dom.editCardArtInput?.value,
      fallback.art || defaultTaskIconFor(group, itemIndexForGroup(group, id))
    );
  }
  if (group === "side") {
    state.editable[group][id].text = cleanEditableText(dom.editCardTextInput.value, fallback.text || "继续推进一小块", 80);
  }
  if (group === "side" && isSkillMarketSideQuestId(id)) {
    delete state.editable.side[id];
  }
  if (group === "main" && isLifeCompanyMainTaskId(id)) {
    delete state.editable.main[id];
  }

  saveState();
  if ((group === "main" || group === "side") && ensureDay(selectedDate).planned?.[group]?.[id]) {
    syncGameTaskToBaseSchedule(group, id, true);
  }
  closeCardEdit();
  render();
  showToast("卡片已经改好。");
}

function closeCardEdit() {
  currentCardEdit = null;
  if (dom.editCardDeleteButton) {
    dom.editCardDeleteButton.textContent = "删除这张卡片";
    dom.editCardDeleteButton.classList.remove("is-armed");
  }
  if (typeof dom.editCardDialog.close === "function") {
    dom.editCardDialog.close();
  } else {
    dom.editCardDialog.removeAttribute("open");
  }
}

function deleteCurrentCard() {
  if (!currentCardEdit || (currentCardEdit.group !== "main" && currentCardEdit.group !== "side")) return;
  if (currentCardEdit.group === "side" && isSkillMarketSideQuestId(currentCardEdit.id)) return;
  const task = getEditableItem(currentCardEdit.group, getTaskDefinition(currentCardEdit.group, currentCardEdit.id));
  if (!task) return;
  if (!currentCardEdit.deleteArmed) {
    currentCardEdit.deleteArmed = true;
    dom.editCardDeleteButton.textContent = "再点一次确认删除";
    dom.editCardDeleteButton.classList.add("is-armed");
    showToast("再点一次删除按钮，才会真的删除。");
    return;
  }
  const id = currentCardEdit.id;
  const group = currentCardEdit.group;
  closeCardEdit();
  if (group === "main") deleteMainTask(id, { skipConfirm: true });
  if (group === "side") deleteSideQuest(id, { skipConfirm: true });
}

function openMainTaskDialog() {
  const defaultArt = defaultTaskIconFor("main", mainTasks.length);
  dom.mainTaskTitleInput.value = "";
  dom.mainTaskIconInput.value = "✦";
  if (dom.mainTaskArtInput) dom.mainTaskArtInput.value = defaultArt;
  renderTaskIconPicker(dom.mainTaskArtPicker, defaultArt, "create");
  dom.mainTaskDurationInput.value = "120";
  if (dom.mainTaskLifeMaintenanceInput) dom.mainTaskLifeMaintenanceInput.checked = false;
  if (typeof dom.mainTaskDialog.showModal === "function") {
    dom.mainTaskDialog.showModal();
  } else {
    dom.mainTaskDialog.setAttribute("open", "");
  }
}

function closeMainTaskDialog() {
  if (typeof dom.mainTaskDialog.close === "function") {
    dom.mainTaskDialog.close();
  } else {
    dom.mainTaskDialog.removeAttribute("open");
  }
}

function saveNewMainTask() {
  const durationMinutes = Number(dom.mainTaskDurationInput.value) === 60 ? 60 : 120;
  const art = validTaskIconId(dom.mainTaskArtInput?.value, defaultTaskIconFor("main", mainTasks.length));
  const task = {
    id: makeId("main"),
    title: cleanEditableText(dom.mainTaskTitleInput.value, `主线任务 ${mainTasks.length + 1}`, 36),
    icon: cleanEditableText(dom.mainTaskIconInput.value, durationMinutes === 120 ? "✦" : "光", 4),
    art,
    xp: 15,
    durationMinutes,
    isLifeMaintenance: Boolean(dom.mainTaskLifeMaintenanceInput?.checked),
  };
  state.mainTasks = normalizeMainTasks([...(state.mainTasks || mainTasks), task]);
  mainTasks = state.mainTasks;
  state.editable = normalizeEditableState(state.editable);
  saveState();
  closeMainTaskDialog();
  render();
  showToast(`${task.title} 已创建为 ${formatDuration(durationMinutes)} 卡片。`);
}

function deleteMainTask(id, options = {}) {
  if (isLifeCompanyMainTaskId(id)) {
    deleteLifeCompanyTaskFromMain(id);
    return;
  }
  const task = getEditableItem("main", mainTasks.find((item) => item.id === id));
  if (!task) return;
  if (!options.skipConfirm && !window.confirm(`确定删除「${task.title}」这张主线卡片吗？对应时间轴安排也会删除。`)) return;

  state.mainTasks = normalizeMainTasks((state.mainTasks || mainTasks).filter((item) => item.id !== id));
  mainTasks = state.mainTasks;
  if (state.editable?.main) delete state.editable.main[id];
  Object.values(state.days || {}).forEach((day) => {
    if (day.main) delete day.main[id];
    if (day.planned?.main) delete day.planned.main[id];
    if (day.taskActive?.main) delete day.taskActive.main[id];
    if (Array.isArray(day.taskRuns)) day.taskRuns = day.taskRuns.filter((run) => !(run.type === "main" && run.sourceTaskId === id));
    if (day.schedule?.main) delete day.schedule.main[id];
    day.settled = false;
  });
  state.editable = normalizeEditableState(state.editable);
  removeGameTaskFromBaseScheduleEverywhere("main", id);
  saveState();
  render();
  showToast(`${task.title} 已删除。`);
}

function createSideQuest() {
  if (sideQuests.length >= SIDE_QUEST_LIMIT) {
    showToast(`副线任务最多 ${SIDE_QUEST_LIMIT} 张。`);
    return;
  }
  const index = sideQuests.length;
  const quest = {
    id: makeId("side"),
    title: `副线任务 ${index + 1}`,
    text: "写下这张卡要推进的一小步",
    icon: "副",
    art: defaultTaskIconFor("side", index),
    xp: 20,
    durationMinutes: 60,
  };
  state.sideQuests = normalizeSideQuests([...(state.sideQuests || sideQuests), quest]);
  sideQuests = state.sideQuests;
  state.editable = normalizeEditableState(state.editable);
  saveState();
  render();
  showToast("已新增一张副线卡，长按可以编辑内容。");
}

function deleteSideQuest(id, options = {}) {
  if (isSkillMarketSideQuestId(id)) return;
  const quest = getEditableItem("side", sideQuests.find((item) => item.id === id));
  if (!quest) return;
  if (!options.skipConfirm && !window.confirm(`确定删除「${quest.title}」这张副线卡片吗？对应时间轴安排也会删除。`)) return;
  state.sideQuests = normalizeSideQuests((state.sideQuests || sideQuests).filter((item) => item.id !== id));
  sideQuests = state.sideQuests;
  if (state.editable?.side) delete state.editable.side[id];
  Object.values(state.days || {}).forEach((day) => {
    if (day.side) delete day.side[id];
    if (day.planned?.side) delete day.planned.side[id];
    if (day.taskActive?.side) delete day.taskActive.side[id];
    if (Array.isArray(day.taskRuns)) day.taskRuns = day.taskRuns.filter((run) => !(run.type === "side" && run.sourceTaskId === id));
    if (day.schedule?.side) delete day.schedule.side[id];
  });
  state.editable = normalizeEditableState(state.editable);
  removeGameTaskFromBaseScheduleEverywhere("side", id);
  saveState();
  render();
  showToast(`${quest.title} 已删除。`);
}

function openBattleSettings() {
  state.editable = normalizeEditableState(state.editable);
  state.battleSettings = normalizeBattleSettings(state.battleSettings, state.editable);
  state.battleSettings.title = state.editable.page.heroTitle;
  state.battleSettings.objective = state.editable.page.todayObjective;

  dom.battleTitleInput.value = state.battleSettings.title;
  dom.battleObjectiveInput.value = state.battleSettings.objective;
  dom.battleStartInput.value = state.battleSettings.startDate;
  dom.battleEndInput.value = state.battleSettings.endDate;
  renderBattleLockState();

  if (typeof dom.battleSettingsDialog.showModal === "function") {
    dom.battleSettingsDialog.showModal();
  } else {
    dom.battleSettingsDialog.setAttribute("open", "");
  }
}

function closeBattleSettings() {
  if (typeof dom.battleSettingsDialog.close === "function") {
    dom.battleSettingsDialog.close();
  } else {
    dom.battleSettingsDialog.removeAttribute("open");
  }
}

function saveBattleSettings(shouldLock) {
  state.editable = normalizeEditableState(state.editable);
  const fallback = defaultBattleSettings();
  const title = cleanEditableText(dom.battleTitleInput.value, state.editable.page.heroTitle || fallback.title, 28);
  const objective = cleanEditableText(
    dom.battleObjectiveInput.value,
    state.editable.page.todayObjective || fallback.objective,
    42
  );
  const startDate = isDateKey(dom.battleStartInput.value) ? dom.battleStartInput.value : fallback.startDate;
  const rawEndDate = isDateKey(dom.battleEndInput.value) ? dom.battleEndInput.value : addDays(startDate, TOTAL_DAYS - 1);
  const endDate = dayDiff(rawEndDate, startDate) >= 0 ? rawEndDate : startDate;

  state.editable.page.heroTitle = title;
  state.editable.page.todayObjective = objective;
  state.battleSettings = normalizeBattleSettings({
    ...state.battleSettings,
    title,
    objective,
    startDate,
    endDate,
    locked: shouldLock ? true : state.battleSettings?.locked,
  }, state.editable);

  let synced = false;
  if (shouldLock) {
    synced = syncBattleProjectToBaseSchedule(state.battleSettings);
  }

  saveState();
  render();
  renderBattleLockState();
  closeBattleSettings();
  showToast(shouldLock
    ? (synced ? "主线作战已同步到基础排期。" : "作战已锁定，但基础排期同步失败。")
    : "主线作战草稿已保存。");
}

function renderBattleLockState() {
  if (!dom.battleLockState) return;
  const settings = normalizeBattleSettings(state.battleSettings, state.editable);
  const range = `${settings.startDate} 至 ${settings.endDate}`;
  dom.battleLockState.textContent = settings.locked ? `已锁定：${range}` : `未锁定：${range}`;
}

function syncBattleProjectToBaseSchedule(settings) {
  try {
    const baseState = readBaseScheduleState(settings.startDate);
    ensureBaseBattleProject(baseState, settings);
    localStorage.setItem(BASE_SCHEDULE_STORAGE_KEY, JSON.stringify(baseState));
    return true;
  } catch (error) {
    console.warn("Failed to sync battle project.", error);
    return false;
  }
}

function readBaseScheduleState(fallbackDate = selectedDate) {
  const raw = localStorage.getItem(BASE_SCHEDULE_STORAGE_KEY);
  const parsed = raw ? JSON.parse(raw) : {};
  const baseState = parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  baseState.settings = baseState.settings && typeof baseState.settings === "object"
    ? baseState.settings
    : { rangeStart: fallbackDate, rangeDays: 30, language: "zh" };
  baseState.settings.rangeStart ||= fallbackDate;
  baseState.settings.rangeDays = Math.max(7, Math.min(90, Number(baseState.settings.rangeDays) || 30));
  baseState.settings.language ||= "zh";
  baseState.selectedDate ||= fallbackDate;
  baseState.notes = baseState.notes && typeof baseState.notes === "object" ? baseState.notes : {};
  baseState.projects = Array.isArray(baseState.projects) ? baseState.projects : [];
  return baseState;
}

function getCurrentBattleSettings() {
  state.editable = normalizeEditableState(state.editable);
  state.battleSettings = normalizeBattleSettings({
    ...state.battleSettings,
    title: state.editable.page.heroTitle,
    objective: state.editable.page.todayObjective,
  }, state.editable);
  return state.battleSettings;
}

function ensureBaseBattleProject(baseState, settings = getCurrentBattleSettings()) {
  const duration = Math.max(1, dayDiff(settings.endDate, settings.startDate) + 1);
  const projectIndex = baseState.projects.findIndex((project) =>
    project?.id === BATTLE_PROJECT_ID || project?.source === BATTLE_PROJECT_SOURCE
  );
  const existing = projectIndex >= 0 ? baseState.projects[projectIndex] : {};
  const project = {
    ...existing,
    id: existing.id || BATTLE_PROJECT_ID,
    title: settings.title,
    goal: settings.objective,
    start: settings.startDate,
    duration,
    color: existing.color || "#9CCF6C",
    completed: Boolean(existing.completed),
    completedDate: existing.completedDate || "",
    tasks: Array.isArray(existing.tasks) ? existing.tasks : [],
    source: BATTLE_PROJECT_SOURCE,
  };

  if (projectIndex >= 0) {
    baseState.projects[projectIndex] = project;
  } else {
    baseState.projects.push(project);
  }
  return project;
}

function syncGameTaskToBaseSchedule(type, id, shouldExist = true) {
  if (!["main", "side"].includes(type) || !id) return false;
  try {
    const day = ensureDay(selectedDate);
    const taskList = type === "main" ? getVisibleMainTasks() : getVisibleSideQuests(selectedDate);
    const task = taskList.find((item) => item.id === id);
    const edited = getEditableItem(type, task);
    if (!task || !edited) return false;

    const baseState = readBaseScheduleState(selectedDate);
    alignBaseScheduleDate(baseState, selectedDate);
    const project = ensureBaseBattleProject(baseState);
    project.tasks = Array.isArray(project.tasks) ? project.tasks : [];
    project.tasks = project.tasks.filter((item) => !isSyncedBaseTask(item, type, id, selectedDate));

    if (shouldExist) {
      const index = Math.max(0, taskList.findIndex((item) => item.id === id));
      const saved = day.schedule?.[type]?.[id];
      const start = clamp(
        Math.round(Number(saved?.start ?? (type === "main" ? defaultMainStart(index) : defaultSideStart(index))) || 0),
        0,
        24 * 60 - 1
      );
      project.tasks.push({
        id: makeBaseTaskId(type, id, selectedDate),
        title: edited.title,
        detail: type === "main" ? "游戏主页主线任务" : "游戏主页副线任务",
        date: selectedDate,
        spanDays: 1,
        startTime: minutesToClock(start),
        duration: Math.max(0.25, (Number(task.durationMinutes) || 60) / 60),
        status: day[type]?.[id] ? "done" : "todo",
        color: type === "main" ? BASE_MAIN_TASK_COLOR : BASE_SIDE_TASK_COLOR,
        source: BATTLE_TASK_SOURCE,
        sourceType: type,
        sourceTaskId: id,
        sourceDate: selectedDate,
      });
    }

    localStorage.setItem(BASE_SCHEDULE_STORAGE_KEY, JSON.stringify(baseState));
    return true;
  } catch (error) {
    console.warn("Failed to sync game task.", error);
    return false;
  }
}

function syncGameRunToBaseSchedule(run) {
  if (!run?.id || !["main", "side"].includes(run.type)) return false;
  try {
    const baseState = readBaseScheduleState(selectedDate);
    alignBaseScheduleDate(baseState, selectedDate);
    const project = ensureBaseBattleProject(baseState);
    project.tasks = Array.isArray(project.tasks) ? project.tasks : [];
    project.tasks = project.tasks.filter((item) => {
      if (item.source !== BATTLE_TASK_SOURCE) return true;
      if (item.sourceTaskId === run.id) return false;
      if (item.sourceType === run.type && item.sourceTaskId === run.sourceTaskId && item.sourceDate === selectedDate) return false;
      return true;
    });
    const saved = ensureDay(selectedDate).schedule?.run?.[run.id];
    const start = clamp(Math.round(Number(saved?.start ?? run.start) || 0), 0, 24 * 60 - 1);
    project.tasks.push({
      id: makeBaseTaskId("run", run.id, selectedDate),
      title: run.title,
      detail: run.type === "main" ? "游戏主页主线计时" : "游戏主页副线计时",
      date: selectedDate,
      spanDays: 1,
      startTime: minutesToClock(start),
      duration: Math.max(0.25, (Number(run.duration) || 1) / 60),
      status: run.done ? "done" : "todo",
      color: run.type === "main" ? BASE_MAIN_TASK_COLOR : BASE_SIDE_TASK_COLOR,
      source: BATTLE_TASK_SOURCE,
      sourceType: run.type,
      sourceTaskId: run.id,
      sourceCardId: run.sourceTaskId,
      sourceDate: selectedDate,
    });
    localStorage.setItem(BASE_SCHEDULE_STORAGE_KEY, JSON.stringify(baseState));
    return true;
  } catch (error) {
    console.warn("Failed to sync game run.", error);
    return false;
  }
}

function alignBaseScheduleDate(baseState, date) {
  baseState.selectedDate = date;
  const start = baseState.settings?.rangeStart || date;
  const offset = dayDiff(date, start);
  if (offset < 0 || offset >= Number(baseState.settings?.rangeDays || 30)) {
    baseState.settings.rangeStart = date;
  }
}

function removeGameTaskFromBaseScheduleEverywhere(type, id) {
  if (!["main", "side"].includes(type) || !id) return false;
  try {
    const baseState = readBaseScheduleState(selectedDate);
    let changed = false;
    baseState.projects.forEach((project) => {
      if (!Array.isArray(project.tasks)) return;
      const before = project.tasks.length;
      project.tasks = project.tasks.filter((task) => !isSyncedBaseTask(task, type, id) && task.sourceCardId !== id);
      changed = changed || project.tasks.length !== before;
    });
    if (changed) localStorage.setItem(BASE_SCHEDULE_STORAGE_KEY, JSON.stringify(baseState));
    return true;
  } catch (error) {
    console.warn("Failed to remove synced game task.", error);
    return false;
  }
}

function removeGameRunFromBaseSchedule(id) {
  if (!id) return false;
  try {
    const baseState = readBaseScheduleState(selectedDate);
    let changed = false;
    baseState.projects.forEach((project) => {
      if (!Array.isArray(project.tasks)) return;
      const before = project.tasks.length;
      project.tasks = project.tasks.filter((task) => task.source !== BATTLE_TASK_SOURCE || task.sourceTaskId !== id);
      changed = changed || project.tasks.length !== before;
    });
    if (changed) localStorage.setItem(BASE_SCHEDULE_STORAGE_KEY, JSON.stringify(baseState));
    return true;
  } catch (error) {
    console.warn("Failed to remove synced game run.", error);
    return false;
  }
}

function isSyncedBaseTask(task, type, id, date = "") {
  if (!task || task.source !== BATTLE_TASK_SOURCE) return false;
  if (task.sourceType !== type || task.sourceTaskId !== id) return false;
  return !date || task.sourceDate === date || task.date === date;
}

function makeBaseTaskId(type, id, date) {
  return `game-${type}-${date}-${id}`.replace(/[^\w-]/g, "-");
}

function defaultState() {
  mainTasks = normalizeMainTasks(defaultMainTasks);
  sideQuests = normalizeSideQuests(defaultSideQuests);
  return {
    version: 1,
    createdAt: new Date().toISOString(),
    selectedCharacter: "bunny",
    mainTasks,
    sideQuests,
    timelineZoom,
    days: {},
    weeks: {},
    ledger: [],
    invoices: [],
    invoiceSettings: defaultInvoiceSettings(),
    invoicePrintSettings: defaultInvoicePrintSettings(),
    invoiceBookLayouts: {},
    blessing: defaultBlessingState(),
    onboarding: defaultOnboardingState(false),
    financeSettings: {
      realBalanceVisible: true,
      realBalancePassword: "0000",
      realBalancePasswordSet: false,
    },
    editable: defaultEditableState(),
    battleSettings: defaultBattleSettings(),
  };
}

function normalizeMainTasks(tasks) {
  const source = Array.isArray(tasks) ? tasks : defaultMainTasks;
  const seen = new Set();
  return source
    .map((task, index) => {
      const rawId = String(task?.id || `main-${index + 1}`);
      const id = rawId.replace(/[^\w-]/g, "-") || `main-${index + 1}`;
      if (seen.has(id)) return null;
      seen.add(id);
      const durationMinutes = Number(task?.durationMinutes) === 60 ? 60 : 120;
      return {
        id,
        title: cleanEditableText(task?.title, `主线任务 ${index + 1}`, 36),
        icon: cleanEditableText(task?.icon, durationMinutes === 120 ? "✦" : "光", 4),
        art: validTaskIconId(task?.art, defaultTaskIconFor("main", index)),
        xp: Math.max(1, Math.round(Number(task?.xp) || 15)),
        durationMinutes,
        isLifeMaintenance: Boolean(task?.isLifeMaintenance || task?.taskType === "life-maintenance"),
      };
    })
    .filter(Boolean);
}

function normalizeSideQuests(tasks) {
  const source = Array.isArray(tasks) ? tasks : defaultSideQuests;
  const seen = new Set();
  return source
    .map((quest, index) => {
      const rawId = String(quest?.id || `side-${index + 1}`);
      const id = rawId.replace(/[^\w-]/g, "-") || `side-${index + 1}`;
      if (seen.has(id) || isSkillMarketSideQuestId(id)) return null;
      seen.add(id);
      const duration = Number(quest?.durationMinutes);
      const durationMinutes = duration === 30 ? 30 : duration === 120 ? 120 : 60;
      return {
        id,
        title: cleanEditableText(quest?.title, `副线任务 ${index + 1}`, 36),
        text: cleanEditableText(quest?.text, "继续推进一小块", 80),
        icon: cleanEditableText(quest?.icon, "副", 4),
        art: validTaskIconId(quest?.art, defaultTaskIconFor("side", index)),
        xp: Math.max(1, Math.round(Number(quest?.xp) || 20)),
        durationMinutes,
      };
    })
    .filter(Boolean)
    .slice(0, SIDE_QUEST_LIMIT);
}

function normalizeTimelineZoom(value) {
  return clamp(Math.round(Number(value) || 1180), TIMELINE_ZOOM_MIN, TIMELINE_ZOOM_MAX);
}

function defaultBattleSettings() {
  const startDate = selectedDate || dateKey(new Date());
  const defaults = defaultEditableState();
  return {
    title: defaults.page.heroTitle,
    objective: defaults.page.todayObjective,
    startDate,
    endDate: addDays(startDate, TOTAL_DAYS - 1),
    locked: false,
    baseProjectId: BATTLE_PROJECT_ID,
  };
}

function defaultDay() {
  return {
    main: {},
    side: {},
    planned: { main: {}, side: {} },
    taskActive: { main: {}, side: {} },
    taskRuns: [],
    low: {},
    characterId: "",
    characterLocked: false,
    lifeActive: {},
    lifeRecords: [],
    lifeMaintenanceSlots: {},
    energy: ENERGY_MAX,
    mood: MOOD_MID,
    risk: 0,
    safeMode: false,
    protectionOpen: false,
    safePlace: false,
    report: "",
    diaryChecklist: [],
    invoicePrintedAt: "",
    settled: false,
    tarot: defaultTarotState(),
    schedule: { main: {}, side: {}, life: {}, run: {} },
  };
}

function defaultWeek() {
  return { life: {} };
}

function defaultEditableState() {
  return {
    page: {
      heroTitle: "动画主线作战台",
      todayObjective: "今日目标：动画 9 小时",
      mainlineTitle: "今日动画 9 小时",
      sideTitle: "作品集与 AI 软件推进",
      lifeTitle: "本周固定任务",
    },
    statusCards: {
      level: { icon: "★", label: "公司等级" },
      animation: { icon: "⌚", label: "今日进度" },
      protect: { icon: "盾", label: "保护状态" },
    },
    main: Object.fromEntries(mainTasks.map((task, index) => [task.id, { title: task.title, icon: task.icon, art: validTaskIconId(task.art, defaultTaskIconFor("main", index)) }])),
    side: Object.fromEntries(
      sideQuests.map((quest, index) => [quest.id, { title: quest.title, text: quest.text, icon: quest.icon, art: validTaskIconId(quest.art, defaultTaskIconFor("side", index)) }])
    ),
    low: Object.fromEntries(lowTasks.map((task) => [task.id, { title: task.title }])),
    life: Object.fromEntries(lifeGroups.map((group, index) => [group.id, { title: group.title, art: validTaskIconId(group.art, defaultTaskIconFor("life", index)) }])),
  };
}

function normalizeEditableState(editable) {
  const defaults = defaultEditableState();
  const source = editable && typeof editable === "object" ? editable : {};
  const page = normalizeEditableGroup(defaults.page, source.page);
  if (page.todayObjective === "今日目标：动画 8 小时") page.todayObjective = defaults.page.todayObjective;
  if (page.mainlineTitle === "今日动画 8 小时") page.mainlineTitle = defaults.page.mainlineTitle;
  if (page.todayObjective === "今日目标：动画 6 小时") page.todayObjective = defaults.page.todayObjective;
  if (page.mainlineTitle === "今日动画 6 小时") page.mainlineTitle = defaults.page.mainlineTitle;
  const statusCards = normalizeNestedEditableGroup(defaults.statusCards, source.statusCards);
  if (statusCards.level?.label === "等级") statusCards.level.label = defaults.statusCards.level.label;
  if (statusCards.animation?.label === "今日动画") statusCards.animation.label = defaults.statusCards.animation.label;
  return {
    page,
    statusCards,
    main: normalizeNestedEditableGroup(defaults.main, source.main),
    side: normalizeNestedEditableGroup(defaults.side, source.side),
    low: normalizeNestedEditableGroup(defaults.low, source.low),
    life: normalizeNestedEditableGroup(defaults.life, source.life),
  };
}

function normalizeEditableGroup(defaults, source) {
  const safeSource = source && typeof source === "object" ? source : {};
  return Object.fromEntries(
    Object.entries(defaults).map(([field, fallback]) => [
      field,
      cleanEditableText(safeSource[field], String(fallback), 120),
    ])
  );
}

function normalizeNestedEditableGroup(defaults, source) {
  const safeSource = source && typeof source === "object" ? source : {};
  return Object.fromEntries(
    Object.entries(defaults).map(([id, fallback]) => [
      id,
      normalizeEditableGroup(fallback, safeSource[id]),
    ])
  );
}

function defaultOnboardingState(completed = true) {
  return {
    completed: Boolean(completed),
    dismissed: false,
    completedAt: "",
  };
}

function normalizeOnboardingState(onboarding, appState = state) {
  if (!onboarding || typeof onboarding !== "object") {
    const hasCompany = Boolean(readLifeCompanyState()?.company);
    const hasProgress = hasCompany
      || Boolean(appState?.createdAt)
      || Array.isArray(appState?.ledger) && appState.ledger.length > 0
      || Array.isArray(appState?.invoices) && appState.invoices.length > 0
      || appState?.battleSettings?.locked
      || Object.keys(appState?.days || {}).length > 1;
    return defaultOnboardingState(hasProgress);
  }

  return {
    completed: Boolean(onboarding.completed),
    dismissed: Boolean(onboarding.dismissed),
    completedAt: String(onboarding.completedAt || ""),
  };
}

function defaultBlessingState() {
  return {
    merit: 0,
    taps: 0,
    lastTappedAt: "",
  };
}

function normalizeBlessingState(blessing) {
  const source = blessing && typeof blessing === "object" && !Array.isArray(blessing)
    ? blessing
    : {};
  return {
    merit: Math.max(0, Math.floor(Number(source.merit) || 0)),
    taps: Math.max(0, Math.floor(Number(source.taps) || 0)),
    lastTappedAt: String(source.lastTappedAt || ""),
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || !parsed.days) return defaultState();
    parsed.weeks ||= {};
    parsed.mainTasks = normalizeMainTasks(parsed.mainTasks);
    mainTasks = parsed.mainTasks;
    parsed.sideQuests = normalizeSideQuests(parsed.sideQuests);
    sideQuests = parsed.sideQuests;
    parsed.timelineZoom = normalizeTimelineZoom(parsed.timelineZoom);
    timelineZoom = parsed.timelineZoom;
    parsed.ledger = normalizeLedger(parsed.ledger);
    parsed.invoiceSettings = normalizeInvoiceSettings(parsed.invoiceSettings);
    parsed.invoicePrintSettings = normalizeInvoicePrintSettings(parsed.invoicePrintSettings);
    parsed.invoices = normalizeSavedInvoices(parsed.invoices);
    parsed.invoiceBookLayouts = normalizeInvoiceBookLayouts(parsed.invoiceBookLayouts, parsed.invoices);
    parsed.blessing = normalizeBlessingState(parsed.blessing);
    parsed.onboarding = normalizeOnboardingState(parsed.onboarding, parsed);
    parsed.financeSettings = normalizeFinanceSettings(parsed.financeSettings);
    parsed.editable = normalizeEditableState(parsed.editable);
    parsed.battleSettings = normalizeBattleSettings(parsed.battleSettings, parsed.editable);
    parsed.selectedCharacter = validCharacterId(parsed.selectedCharacter);
    return parsed;
  } catch {
    return defaultState();
  }
}

function normalizeLedger(records) {
  if (!Array.isArray(records)) return [];
  return records
    .map((record) => ({
      id: String(record.id || makeId("ledger")),
      date: /^\d{4}-\d{2}-\d{2}$/.test(record.date || "") ? record.date : selectedDate,
      type: record.type === "income" ? "income" : "expense",
      category: ledgerCategories.some((item) => item.id === record.category) ? record.category : "other",
      amount: Math.max(0, Number(record.amount) || 0),
      note: String(record.note || "").slice(0, 80),
      createdAt: record.createdAt || new Date().toISOString(),
    }))
    .filter((record) => record.amount > 0);
}

function normalizeSavedInvoices(invoices) {
  if (!Array.isArray(invoices)) return [];
  const seen = new Set();
  return invoices
    .map((invoice) => {
      const rawDate = String(invoice?.date || invoice?.periodKey || "");
      const billType = invoiceBillTypes.some((item) => item.id === invoice?.billType) ? invoice.billType : "game";
      const period = ["day", "week", "month"].includes(invoice?.period)
        ? invoice.period
        : isDateKey(rawDate)
          ? "day"
          : /^week-\d+$/.test(rawDate)
            ? "week"
            : /^\d{4}-\d{2}$/.test(rawDate)
              ? "month"
              : "day";
      const date = isValidInvoiceDateKey(rawDate, period) || /^(ledger|diy)-/.test(rawDate) ? rawDate : "";
      const uniqueKey = invoiceUniqueKey({ date, billType, period });
      if (!date || seen.has(uniqueKey)) return null;
      seen.add(uniqueKey);
      return {
        id: String(invoice.id || `invoice-${date}`).slice(0, 80),
        date,
        billType,
        period,
        periodKey: String(invoice.periodKey || date.replace(/^(ledger|diy)-/, "")),
        title: cleanEditableText(invoice.title, invoiceTitleForPeriod(period, billType), 18),
        dateLabel: cleanEditableText(invoice.dateLabel, invoiceDateLabelForPeriod(date, period), 28),
        periodLabel: cleanEditableText(invoice.periodLabel, invoiceDateLabelForPeriod(date, period), 28),
        weekday: cleanEditableText(invoice.weekday, isDateKey(date) ? weekdayLabel(parseDate(date)) : "", 8),
        createdAt: invoice.createdAt || new Date().toISOString(),
        companyIncome: roundCompanyCoins(invoice.companyIncome),
        stockIncome: roundCompanyCoins(invoice.stockIncome),
        totalIncome: roundCompanyCoins(invoice.totalIncome),
        taskMinutes: Math.max(0, Math.round(Number(invoice.taskMinutes) || 0)),
        energy: clamp(Math.round(Number(invoice.energy) || 0), 0, 100),
        mood: clamp(Math.round(Number(invoice.mood) || 0), 0, 100),
        mainTasks: Array.isArray(invoice.mainTasks) ? invoice.mainTasks.slice(0, 12).map(normalizeInvoiceTask) : [],
        lifeTasks: Array.isArray(invoice.lifeTasks) ? invoice.lifeTasks.slice(0, 12).map(normalizeInvoiceTask) : [],
        diyImage: String(invoice.diyImage || "").startsWith("data:image/") ? String(invoice.diyImage) : "",
        diyImageName: cleanEditableText(invoice.diyImageName, "", 48),
        diyAspectRatio: clamp(Number(invoice.diyAspectRatio) || 1, 0.2, 5),
        invoiceStyle: normalizeInvoiceSettings(invoice.invoiceStyle || invoice.style || invoice.settings),
      };
    })
    .filter(Boolean)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)) || String(a.billType).localeCompare(String(b.billType)))
    .slice(0, 80);
}

function invoiceUniqueKey(invoice) {
  return `${invoice?.billType || "game"}:${invoice?.period || "day"}:${invoice?.date || invoice?.periodKey || ""}`;
}

function isValidInvoiceDateKey(value, period) {
  const cleanValue = String(value || "").replace(/^(ledger|diy)-/, "");
  if (period === "day") return isDateKey(value);
  if (period === "week") return /^week-\d+$/.test(cleanValue);
  if (period === "month") return /^\d{4}-\d{2}$/.test(cleanValue);
  return false;
}

function invoiceTitleForPeriod(period, billType = "game") {
  if (billType === "ledger") return period === "day" ? "生活账单" : period === "week" ? "本周生活账单" : "本月生活账单";
  if (billType === "diy") return "DIY 图片账单";
  if (period === "week") return "本周发票";
  if (period === "month") return "本月发票";
  return "当日发票";
}

function invoiceDateLabelForPeriod(value, period) {
  const cleanValue = String(value || "").replace(/^(ledger|diy)-/, "");
  if (period === "day" && isDateKey(cleanValue)) {
    return `${formatShortDate(cleanValue)} ${weekdayLabel(parseDate(cleanValue))}`;
  }
  if (period === "week") {
    return invoiceWeekOptions().find((item) => item.key === cleanValue)?.label || cleanValue;
  }
  if (period === "month") return `${Number(String(cleanValue).slice(5, 7)) || ""}月`;
  return cleanValue;
}

function normalizeInvoiceTask(task) {
  return {
    title: cleanEditableText(task?.title, "任务", 36),
    duration: Math.max(0, Math.round(Number(task?.duration) || 0)),
    amount: Number.isFinite(Number(task?.amount)) ? Math.round(Number(task.amount) * 100) / 100 : 0,
    type: task?.type === "income" ? "income" : task?.type === "expense" ? "expense" : "",
    date: isDateKey(task?.date) ? task.date : "",
    done: Boolean(task?.done),
  };
}

function defaultInvoicePrintSettings() {
  return {
    mode: "day",
    billType: "game",
    day: selectedDate,
    week: weekKey(selectedDate),
    month: selectedDate.slice(0, 7),
    diyImage: "",
    diyImageName: "",
    diyAspectRatio: 1,
  };
}

function normalizeInvoicePrintSettings(settings) {
  const source = settings && typeof settings === "object" ? settings : {};
  const mode = ["day", "week", "month"].includes(source.mode) ? source.mode : "day";
  const billType = invoiceBillTypes.some((item) => item.id === source.billType) ? source.billType : "game";
  const day = isDateKey(source.day) ? source.day : selectedDate;
  const week = /^week-\d+$/.test(String(source.week || "")) ? String(source.week) : weekKey(day);
  const month = /^\d{4}-\d{2}$/.test(String(source.month || "")) ? String(source.month) : day.slice(0, 7);
  const diyImage = String(source.diyImage || "").startsWith("data:image/") ? String(source.diyImage) : "";
  const diyImageName = cleanEditableText(source.diyImageName, "", 48);
  const diyAspectRatio = clamp(Number(source.diyAspectRatio) || 1, 0.2, 5);
  return { mode, billType, day, week, month, diyImage, diyImageName, diyAspectRatio };
}

function normalizeInvoiceBookLayouts(layouts, invoices = state?.invoices || []) {
  const source = layouts && typeof layouts === "object" && !Array.isArray(layouts) ? layouts : {};
  const keys = new Set((Array.isArray(invoices) ? invoices : []).map(invoiceUniqueKey));
  return Object.fromEntries(
    Object.entries(source)
      .filter(([key]) => keys.has(key))
      .map(([key, layout]) => [key, normalizeInvoiceBookLayout(layout, invoiceBookDefaultLayout([...keys].indexOf(key)))])
  );
}

function normalizeInvoiceBookLayout(layout, fallback = invoiceBookDefaultLayout(0)) {
  const source = layout && typeof layout === "object" ? layout : {};
  return {
    x: clamp(Math.round(Number.isFinite(Number(source.x)) ? Number(source.x) : fallback.x), -160, 760),
    y: clamp(Math.round(Number.isFinite(Number(source.y)) ? Number(source.y) : fallback.y), -160, 900),
    scale: clamp(Number.isFinite(Number(source.scale)) ? Number(source.scale) : fallback.scale, 0.26, 1.35),
    rotate: clamp(Number.isFinite(Number(source.rotate)) ? Number(source.rotate) : fallback.rotate, -28, 28),
  };
}

function invoiceBookDefaultLayout(index = 0) {
  const presets = [
    { x: 138, y: 32, scale: 0.62, rotate: 0 },
    { x: 28, y: 172, scale: 0.45, rotate: -2 },
    { x: 220, y: 204, scale: 0.5, rotate: 1.5 },
    { x: 108, y: 308, scale: 0.55, rotate: -1 },
    { x: 254, y: 356, scale: 0.42, rotate: 3 },
    { x: 46, y: 414, scale: 0.48, rotate: -4 },
  ];
  const base = presets[index % presets.length];
  const layer = Math.floor(index / presets.length);
  return {
    x: base.x + layer * 28,
    y: base.y + layer * 36,
    scale: Math.max(0.3, base.scale - layer * 0.03),
    rotate: base.rotate,
  };
}

function defaultInvoiceSettings() {
  const material = invoiceMaterials[0];
  return {
    paperColor: material.paperColor,
    inkColor: material.inkColor,
    material: material.id,
  };
}

function normalizeInvoiceSettings(settings) {
  const source = settings && typeof settings === "object" ? settings : {};
  const material = invoiceMaterials.some((item) => item.id === source.material) ? source.material : "paper";
  const fallback = invoiceMaterials.find((item) => item.id === material) || invoiceMaterials[0];
  return {
    paperColor: normalizeCssColor(source.paperColor, fallback.paperColor),
    inkColor: normalizeCssColor(source.inkColor, fallback.inkColor),
    material,
  };
}

function normalizeCssColor(value, fallback) {
  const color = String(value || "").trim();
  if (/^#[0-9a-fA-F]{6}$/.test(color)) return color.toLowerCase();
  return fallback;
}

function normalizeFinanceSettings(settings) {
  const source = settings && typeof settings === "object" ? settings : {};
  const password = String(source.realBalancePassword || "0000").slice(0, 12) || "0000";
  return {
    realBalanceVisible: source.realBalanceVisible !== false,
    realBalancePassword: password,
    realBalancePasswordSet: source.realBalancePasswordSet === true,
  };
}

function normalizeDaySchedule(schedule) {
  const source = schedule && typeof schedule === "object" && !Array.isArray(schedule) ? schedule : {};
  return {
    main: normalizeScheduleGroup(source.main),
    side: normalizeScheduleGroup(source.side),
    life: normalizeScheduleGroup(source.life),
    run: normalizeScheduleGroup(source.run),
  };
}

function normalizeScheduleGroup(group) {
  const source = group && typeof group === "object" && !Array.isArray(group) ? group : {};
  return Object.fromEntries(
    Object.entries(source).map(([id, item]) => {
      const value = item && typeof item === "object" ? item : {};
      return [
        id,
        {
          start: clamp(Math.round(Number(value.start) || 0), 0, 24 * 60),
          top: clamp(Math.round(Number(value.top) || 0), 0, 1200),
        },
      ];
    })
  );
}

function normalizePlannedTasks(planned, day) {
  const source = planned && typeof planned === "object" && !Array.isArray(planned) ? planned : {};
  return {
    main: normalizePlannedGroup(source.main, day.main),
    side: normalizePlannedGroup(source.side, day.side),
  };
}

function normalizePlannedGroup(group, completedGroup) {
  const source = group && typeof group === "object" && !Array.isArray(group) ? group : {};
  const completed = completedGroup && typeof completedGroup === "object" ? completedGroup : {};
  const merged = { ...source };
  Object.keys(completed).forEach((id) => {
    if (completed[id]) merged[id] = true;
  });
  return Object.fromEntries(Object.entries(merged).map(([id, value]) => [id, Boolean(value)]));
}

function normalizeTaskActive(active) {
  const source = active && typeof active === "object" && !Array.isArray(active) ? active : {};
  return {
    main: normalizeTaskActiveGroup(source.main, "main"),
    side: normalizeTaskActiveGroup(source.side, "side"),
  };
}

function normalizeTaskActiveGroup(group, type) {
  const source = group && typeof group === "object" && !Array.isArray(group) ? group : {};
  return Object.fromEntries(
    Object.entries(source)
      .map(([id, value]) => {
        if (!getTaskDefinition(type, id)) return null;
        const timer = value && typeof value === "object" ? value : {};
        const pausedAt = Number(timer.pausedAt) || 0;
        return [
          id,
          {
            startedAt: Number(timer.startedAt) || Date.now(),
            startMinute: clamp(Math.round(Number(timer.startMinute) || currentMinuteOfDay()), 0, 24 * 60 - 1),
            ...(pausedAt ? { pausedAt } : {}),
          },
        ];
      })
      .filter(Boolean)
  );
}

function normalizeTaskRuns(records) {
  if (!Array.isArray(records)) return [];
  return records
    .map((record) => {
      const type = record?.type === "side" ? "side" : record?.type === "main" ? "main" : "";
      const sourceTaskId = String(record?.sourceTaskId || "");
      const task = getTaskDefinition(type, sourceTaskId);
      if (!type || !task) return null;
      const duration = Math.max(1, Math.round(Number(record.duration) || task.durationMinutes || 60));
      const start = clamp(Math.round(Number(record.start) || 0), 0, Math.max(0, 24 * 60 - duration));
      const edited = getEditableItem(type, task) || task;
      return {
        id: String(record.id || makeId(`${type}-run`)),
        type,
        sourceTaskId,
        title: cleanEditableText(record.title, edited.title || task.title, 36),
        icon: cleanEditableText(record.icon, edited.icon || task.icon || "•", 4),
        start,
        end: clamp(Math.round(Number(record.end) || start + duration), start + 1, 24 * 60),
        duration,
        done: Boolean(record.done),
        createdAt: record.createdAt || new Date().toISOString(),
      };
    })
    .filter(Boolean);
}

function normalizeLifeActive(active) {
  const source = active && typeof active === "object" && !Array.isArray(active) ? active : {};
  return Object.fromEntries(
    Object.entries(source)
      .map(([id, value]) => {
        const timer = value && typeof value === "object" ? value : {};
        const pausedAt = Number(timer.pausedAt) || 0;
        return [
          id,
          {
            startedAt: Number(timer.startedAt) || Date.now(),
            startMinute: clamp(Math.round(Number(timer.startMinute) || currentMinuteOfDay()), 0, 24 * 60 - 1),
            ...(pausedAt ? { pausedAt } : {}),
          },
        ];
      })
      .filter(([id]) => lifeGroups.some((group) => group.id === id))
  );
}

function normalizeLifeRecords(records) {
  if (!Array.isArray(records)) return [];
  return records
    .map((record) => {
      const group = lifeGroups.find((item) => item.id === record?.groupId);
      if (!group) return null;
      const start = clamp(Math.round(Number(record.start) || 0), 0, 24 * 60 - 1);
      const duration = clamp(Math.round(Number(record.duration) || 1), 1, 24 * 60);
      const end = clamp(Math.round(Number(record.end) || start + duration), start + 1, 24 * 60);
      return {
        id: String(record.id || makeId("life")),
        groupId: group.id,
        title: String(record.title || group.title).slice(0, 36),
        start,
        end,
        duration: Math.max(1, end - start),
        createdAt: record.createdAt || new Date().toISOString(),
      };
    })
    .filter(Boolean);
}

function normalizeBattleSettings(settings, editable = state?.editable) {
  const defaults = defaultBattleSettings();
  const source = settings && typeof settings === "object" ? settings : {};
  const page = editable?.page || defaults;
  const title = cleanEditableText(source.title ?? page.heroTitle, defaults.title, 28);
  const objective = cleanEditableText(source.objective ?? page.todayObjective, defaults.objective, 42);
  const startDate = isDateKey(source.startDate) ? source.startDate : defaults.startDate;
  const endDate = isDateKey(source.endDate) && dayDiff(source.endDate, startDate) >= 0
    ? source.endDate
    : addDays(startDate, TOTAL_DAYS - 1);
  return {
    title,
    objective,
    startDate,
    endDate,
    locked: Boolean(source.locked),
    baseProjectId: String(source.baseProjectId || BATTLE_PROJECT_ID),
  };
}

function saveState() {
  state.mainTasks = normalizeMainTasks(state.mainTasks || mainTasks);
  mainTasks = state.mainTasks;
  state.sideQuests = normalizeSideQuests(state.sideQuests || sideQuests);
  sideQuests = state.sideQuests;
  state.invoiceSettings = normalizeInvoiceSettings(state.invoiceSettings);
  state.invoicePrintSettings = normalizeInvoicePrintSettings(state.invoicePrintSettings);
  state.invoices = normalizeSavedInvoices(state.invoices);
  state.invoiceBookLayouts = normalizeInvoiceBookLayouts(state.invoiceBookLayouts, state.invoices);
  state.blessing = normalizeBlessingState(state.blessing);
  state.onboarding = normalizeOnboardingState(state.onboarding, state);
  state.timelineZoom = normalizeTimelineZoom(timelineZoom);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function ensureDay(dayKey) {
  state.days[dayKey] ||= defaultDay();
  const day = state.days[dayKey];
  day.main ||= {};
  day.side ||= {};
  day.planned = normalizePlannedTasks(day.planned, day);
  day.taskActive = normalizeTaskActive(day.taskActive);
  day.taskRuns = normalizeTaskRuns(day.taskRuns);
  day.low ||= {};
  day.characterId = characters.some((item) => item.id === day.characterId) ? day.characterId : "";
  day.characterLocked = Boolean(day.characterLocked && day.characterId);
  day.lifeActive = normalizeLifeActive(day.lifeActive);
  day.lifeRecords = normalizeLifeRecords(day.lifeRecords);
  day.lifeMaintenanceSlots = normalizeLifeMaintenanceSlots(day.lifeMaintenanceSlots);
  day.energy = normalizeStoredEnergy(day.energy);
  day.mood = normalizeStoredMood(day.mood);
  day.risk = Number.isFinite(Number(day.risk)) ? Number(day.risk) : 0;
  day.safeMode = Boolean(day.safeMode);
  day.protectionOpen = Boolean(day.protectionOpen);
  day.safePlace = Boolean(day.safePlace);
  day.report ||= "";
  day.diaryChecklist = normalizeDiaryChecklist(day.diaryChecklist);
  day.invoicePrintedAt = String(day.invoicePrintedAt || "");
  day.settled = Boolean(day.settled);
  day.tarot = normalizeTarotState(day.tarot);
  day.schedule = normalizeDaySchedule(day.schedule);
  updateMoodWhenTaskChanges(dayKey);
  updateEnergyWhenTaskChanges(dayKey);
  return day;
}

function normalizeStoredEnergy(value) {
  const energy = Number(value);
  if (!Number.isFinite(energy)) return ENERGY_MAX;
  return clamp(Math.round(energy <= 10 ? energy * 10 : energy), 0, ENERGY_MAX);
}

function normalizeStoredMood(value) {
  const mood = Number(value);
  if (!Number.isFinite(mood)) return MOOD_MID;
  return clampMood(mood);
}

function normalizeLifeMaintenanceSlots(slots) {
  const source = slots && typeof slots === "object" && !Array.isArray(slots) ? slots : {};
  return Object.fromEntries(
    Object.entries(source)
      .filter(([id, value]) => Boolean(value) && lifeGroups.some((group) => lifeIds(group).includes(id)))
      .map(([id]) => [id, true])
  );
}

function normalizeDiaryChecklist(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item, index) => {
      const source = item && typeof item === "object" ? item : {};
      const text = cleanEditableText(source.text || "", "", 60);
      if (!text && !source.id) return null;
      return {
        id: String(source.id || makeId("diary-item")),
        text: text || `清单 ${index + 1}`,
        done: Boolean(source.done),
        createdAt: source.createdAt || new Date().toISOString(),
      };
    })
    .filter(Boolean)
    .slice(0, 12);
}

function normalizeTarotState(tarot) {
  if (!tarot || typeof tarot !== "object") return defaultTarotState();
  const spread = getTarotSpread(tarot.spread)?.id || "one";
  const spreadInfo = getTarotSpread(spread);
  const spreadCount = spreadInfo.count;
  const question = cleanEditableText(tarot.question, "", 120);

  if (Number.isFinite(Number(tarot.index)) && isTarotCardIndex(Math.round(Number(tarot.index)))) {
    return {
      spread: "one",
      question,
      cards: [Math.round(Number(tarot.index))],
      reversals: [Boolean(tarot.reversed)],
      reading: [],
      selectedCards: [],
      revealedCards: [],
      deck: [],
      deckReversals: [],
      ritual: "",
      shuffleAngle: 0,
      shuffleTurns: 0,
      shuffleDirection: "",
      drawnAt: tarot.drawnAt || new Date().toISOString(),
      shuffledAt: tarot.shuffledAt || "",
    };
  }

  const cards = Array.isArray(tarot.cards)
    ? tarot.cards
        .map((index) => Math.round(Number(index)))
        .filter((index, position, list) => isTarotCardIndex(index) && list.indexOf(index) === position)
    : [];
  const deck = Array.isArray(tarot.deck)
    ? tarot.deck
        .map((index) => Math.round(Number(index)))
        .filter((index, position, list) => isTarotCardIndex(index) && list.indexOf(index) === position)
    : [];
  const reversals = normalizeTarotBooleanList(tarot.reversals).slice(0, cards.length);
  const reading = normalizeTarotReading(tarot.reading).slice(0, spreadCount);
  const normalizedSelectedCards = normalizeTarotSelectedCards(tarot.selectedCards, spread).slice(0, spreadCount);
  const pendingCards = normalizedSelectedCards.length ? normalizedSelectedCards : selectedCardsFromTarotIndexes(cards, spreadInfo).slice(0, spreadCount);
  const activeCards = reading.length ? cards.slice(0, spreadCount) : pendingCards.map((item) => item.cardIndex).filter((index) => isTarotCardIndex(index));
  const selectedCount = reading.length || pendingCards.length || cards.length;
  const revealedCards = normalizeTarotRevealedCards(tarot.revealedCards, spreadCount, reading.length);
  return {
    spread,
    question,
    cards: activeCards,
    reversals: reading.length ? reading.map((item) => item.orientation === "reversed") : activeCards.map((_, index) => Boolean(reversals[index])),
    reading,
    selectedCards: pendingCards,
    revealedCards,
    deck,
    deckReversals: [],
    ritual: normalizeTarotRitual(tarot.ritual || (tarot.pickMode ? "draw" : ""), selectedCount, spreadCount, reading.length > 0, revealedCards.length),
    shuffleAngle: Number.isFinite(Number(tarot.shuffleAngle)) ? Number(tarot.shuffleAngle) : 0,
    shuffleTurns: Number.isFinite(Number(tarot.shuffleTurns)) ? Number(tarot.shuffleTurns) : 0,
    shuffleDirection: tarot.shuffleDirection === "clockwise" || tarot.shuffleDirection === "counterclockwise" ? tarot.shuffleDirection : "",
    drawnAt: tarot.drawnAt || "",
    shuffledAt: tarot.shuffledAt || "",
  };
}

function defaultTarotState() {
  return {
    spread: "one",
    question: "",
    cards: [],
    reversals: [],
    reading: [],
    selectedCards: [],
    revealedCards: [],
    deck: [],
    deckReversals: [],
    ritual: "",
    shuffleAngle: 0,
    shuffleTurns: 0,
    shuffleDirection: "",
    drawnAt: "",
    shuffledAt: "",
  };
}

function normalizeTarotRitual(ritual, cardCount, spreadCount, hasReading = false, revealedCount = 0) {
  if (ritual === "spread") return "spread";
  if (ritual === "shuffle") return "shuffle";
  if (ritual === "reveal" && hasReading && revealedCount < spreadCount) return "reveal";
  if (ritual === "draw" && !hasReading && cardCount <= spreadCount) return "draw";
  return "";
}

function normalizeTarotBooleanList(value) {
  return Array.isArray(value) ? value.map(Boolean) : [];
}

function normalizeTarotReading(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item, index) => {
    if (!item || typeof item !== "object") return null;
    const orientation = item.orientation === "reversed" ? "reversed" : "upright";
    return {
      cardId: String(item.cardId || ""),
      name: cleanEditableText(item.name, "塔罗牌", 40),
      suit: cleanEditableText(item.suit, "", 20),
      image: cleanEditableText(item.image, "", 220),
      orientation,
      position: cleanEditableText(item.position, `position_${index + 1}`, 40),
      positionLabel: cleanEditableText(item.positionLabel, `第 ${index + 1} 张`, 40),
      keyword: cleanEditableText(item.keyword, "", 24),
      meaning: cleanEditableText(item.meaning, "", 260),
    };
  }).filter((item) => item && item.cardId);
}

function selectedCardsFromTarotIndexes(cards, spread) {
  return cards.map((cardIndex, index) => {
    if (!isTarotCardIndex(cardIndex)) return null;
    const positionLabel = spread.positions[index] || `第 ${index + 1} 张`;
    return {
      cardId: String(cardIndex),
      cardIndex,
      deckOrder: index,
      position: `position_${index + 1}`,
      positionLabel,
      selectedAt: "",
    };
  }).filter(Boolean);
}

function normalizeTarotSelectedCards(value, spreadId) {
  if (!Array.isArray(value)) return [];
  const spread = getTarotSpread(spreadId);
  const used = new Set();
  return value.map((item, index) => {
    if (!item || typeof item !== "object") return null;
    const cardIndex = isTarotCardIndex(Math.round(Number(item.cardIndex))) ? Math.round(Number(item.cardIndex)) : -1;
    const cardId = String(item.cardId || (cardIndex >= 0 ? cardIndex : ""));
    if (!cardId || used.has(cardId)) return null;
    used.add(cardId);
    const positionLabel = cleanEditableText(item.positionLabel, spread.positions[index] || `第 ${index + 1} 张`, 40);
    return {
      cardId,
      cardIndex,
      deckOrder: Number.isFinite(Number(item.deckOrder)) ? Math.max(0, Math.round(Number(item.deckOrder))) : index,
      position: cleanEditableText(item.position, `position_${index + 1}`, 40),
      positionLabel,
      selectedAt: cleanEditableText(item.selectedAt, "", 40),
    };
  }).filter(Boolean);
}

function normalizeTarotRevealedCards(value, spreadCount, readingCount) {
  if (readingCount >= spreadCount && !Array.isArray(value)) {
    return Array.from({ length: spreadCount }, (_, index) => index);
  }
  return Array.isArray(value)
    ? value
        .map((index) => Math.round(Number(index)))
        .filter((index, position, list) => index >= 0 && index < spreadCount && list.indexOf(index) === position)
    : [];
}

function isTarotCardIndex(index) {
  return Number.isInteger(index) && index >= 0 && index < TAROT_CARD_COUNT;
}

function ensureWeek(dayKey) {
  const key = weekKey(dayKey);
  state.weeks ||= {};
  state.weeks[key] ||= defaultWeek();
  state.weeks[key].life ||= {};
  return state.weeks[key];
}

function render() {
  const day = ensureDay(selectedDate);
  if (processActiveTaskTimers(day)) saveState();
  const energyBonusApplied = applyEnergyDepletionIncomeBonus(selectedDate);
  const companyTitleSynced = syncHeroTitleFromLifeCompany();
  const week = ensureWeek(selectedDate);
  const mode = getMode(day);
  const companyLevelStatus = getCompanyLevelStatus();
  const mainDone = completedMainCount(day);
  const mainTarget = plannedMainTaskTarget(day);

  dom.chapterLabel.textContent = `第 ${gameUsageDay()} 天`;
  dom.modeLabel.textContent = mode.label;
  dom.stateHint.textContent = mode.hint;
  renderEditableContent(day);

  dom.levelValue.textContent = `Lv.${companyLevelStatus.level}`;
  dom.xpMeter.style.width = `${companyLevelStatus.percent}%`;
  dom.xpLabel.textContent = companyLevelStatus.isMax
    ? `${formatCoins(companyLevelStatus.coins)} · 已满级`
    : `${formatCoins(companyLevelStatus.coins)} / ${formatCoins(companyLevelStatus.requiredCoins)}`;

  dom.animationHours.textContent = `${formatDuration(mainDone * 60)} / ${formatDuration(mainTarget * 60)}`;
  dom.animationMeter.style.width = `${mainTarget ? (mainDone / mainTarget) * 100 : 0}%`;
  dom.passLabel.textContent = mainTarget && mainDone >= mainTarget ? "今日通关" : "未通关";
  dom.protectValue.textContent = mode.label;
  dom.mainProgressBadge.textContent = `${formatDuration(mainDone * 60)} / ${formatDuration(mainTarget * 60)}`;

  renderRanges(day);
  renderCharacter();
  renderProtection(day);
  renderLowEnergy(day);
  renderMainTasks(day);
  renderSideQuests(day);
  renderLifeQuests(week, day);
  renderTimeline(day);
  renderTimeDistribution(day);
  renderInvoicePrinter(day);
  renderInvoicePrintControls();
  renderInvoiceStyleControls();
  renderReport(day);
  renderFinanceCenter();
  renderInvoiceBook();
  renderLedger();
  renderTaskProgressDialog();
  if (companyTitleSynced || energyBonusApplied) saveState();
}

function syncHeroTitleFromLifeCompany() {
  const companyName = cleanEditableText(readLifeCompanyState()?.company?.name, "", 24);
  if (!companyName) return false;
  const nextTitle = cleanEditableText(`${companyName}作战台`, `${companyName}作战台`, 28);
  state.editable = normalizeEditableState(state.editable);
  if (state.editable.page.heroTitle === nextTitle) return false;
  state.editable.page.heroTitle = nextTitle;
  if (state.battleSettings) state.battleSettings.title = nextTitle;
  return true;
}

function renderEditableContent(day = ensureDay(selectedDate)) {
  state.editable = normalizeEditableState(state.editable);
  const todayObjectiveText = formatTodayObjectiveText(day);
  setEditableText(dom.heroTitle, state.editable.page.heroTitle);
  setEditableText(dom.todayObjective, todayObjectiveText);
  state.editable.page.mainlineTitle = todayObjectiveText;
  setEditableText(dom.mainlineTitle, todayObjectiveText);
  if (dom.sideTitle) dom.sideTitle.hidden = true;
  setEditableText(dom.lifeTitle, state.editable.page.lifeTitle);

  document.querySelectorAll("[data-edit-group='statusCards']").forEach((element) => {
    const id = element.dataset.editId;
    const field = element.dataset.editField;
    const value = state.editable.statusCards?.[id]?.[field];
    if (value) setEditableText(element, value);
  });
}

function setEditableText(element, value) {
  if (!element || document.activeElement === element) return;
  element.textContent = value;
}

function renderRanges(day) {
  const mood = updateMoodWhenTaskChanges(selectedDate)?.mood ?? normalizeStoredMood(day.mood);
  const energyResult = updateEnergyWhenTaskChanges(selectedDate) || calculateDailyEnergy(selectedDate);
  const energy = energyResult.energy;
  dom.energyInput.value = energy;
  dom.moodInput.value = mood;
  dom.riskInput.value = day.risk;

  dom.energyValue.textContent = `${energy} / 100 · ${formatDuration(Math.min(energyResult.workMinutes, ENERGY_DEPLETION_MINUTES))}/12h`;
  dom.moodValue.textContent = `${mood} / 100`;
  dom.riskValue.textContent = `${day.risk * 10} / 100`;

  setRangeFill(dom.energyInput, energy, 100);
  setRangeFill(dom.moodInput, mood, 100);
  setRangeFill(dom.riskInput, day.risk);
}

function renderCharacter() {
  const character = getSelectedCharacter();
  const day = ensureDay(selectedDate);
  const isLocked = Boolean(day.characterLocked);
  const moodClass = getCharacterMoodClass(day);
  const expressionState = getCharacterExpressionState(day);
  const characterImage = getCharacterImage(character, expressionState);
  if (dom.activeCharacterName) dom.activeCharacterName.textContent = character.name;
  dom.characterRoleLine.textContent = `${character.role} · ${character.line}`;
  dom.activeCharacterSprite.className = `character-sprite ${character.css} ${moodClass} expression-${expressionState}`;
  dom.activeCharacterSprite.src = characterImage;
  dom.activeCharacterSprite.alt = character.name;
  if (dom.reportCharacterSprite) {
    dom.reportCharacterSprite.className = `report-character ${character.css} ${moodClass} expression-${expressionState}`;
    dom.reportCharacterSprite.src = characterImage;
    dom.reportCharacterSprite.alt = character.name;
  }
  dom.characterPicker.innerHTML = characters
    .map(
      (item) => `
        <button class="character-choice ${item.id === character.id ? "is-selected" : ""} ${isLocked ? "is-locked" : ""}" type="button" data-action="select-character" data-id="${item.id}" aria-label="选择${item.name}" title="${isLocked ? "今天已经选择过角色" : item.name}" ${isLocked && item.id !== character.id ? "disabled" : ""}>
          <img class="character-sprite ${item.css}" src="${getCharacterImage(item, "calm")}" alt="" aria-hidden="true" />
        </button>
      `
    )
    .join("");
}

function getCharacterMoodClass(day) {
  const stateName = getCharacterExpressionState(day);
  if (stateName === "crying") return "mood-risk";
  if (stateName === "sad") return "mood-low";
  if (stateName === "excited" || stateName === "celebrate") return "mood-happy";
  return "mood-normal";
}

function getCharacterExpressionState(day) {
  const mainTarget = plannedMainTaskTarget(day);
  const mainDone = completedMainCount(day);
  if (day.risk >= 7 || day.safeMode || (day.mood <= 19 && day.energy <= 20)) return "crying";
  if (day.settled || (mainTarget && mainDone >= mainTarget)) return "celebrate";
  if (day.risk >= 4 || day.mood <= 49 || day.energy <= 30) return "sad";
  if ((day.mood >= 80 && day.energy >= 70) || (mainTarget && mainDone / mainTarget >= 0.7)) return "excited";
  return "calm";
}

function getCharacterImage(character, expressionState = "calm") {
  return character?.expressions?.[expressionState] || character?.expressions?.calm || character?.image || "";
}

function toggleCharacterPanel(forceOpen) {
  const isOpen = typeof forceOpen === "boolean"
    ? forceOpen
    : dom.characterPanel.classList.contains("is-collapsed");
  dom.characterPanel.classList.toggle("is-collapsed", !isOpen);
  dom.characterPanel.classList.toggle("is-open", isOpen);
  dom.characterPanelBody.hidden = !isOpen;
  dom.characterPanelToggle.setAttribute("aria-expanded", String(isOpen));
  dom.characterPanelToggle.setAttribute("aria-label", isOpen ? "收起角色选择" : "展开角色选择");
}

function renderProtection(day) {
  const shouldShow = day.protectionOpen || day.risk >= 6 || day.safeMode;
  dom.protectionPanel.hidden = !shouldShow;
}

function selectCharacter(id) {
  const character = characters.find((item) => item.id === id);
  if (!character) return;
  const day = ensureDay(selectedDate);
  if (day.characterLocked && day.characterId && day.characterId !== id) {
    showToast("今天已经选择过角色，明天可以再换。");
    return;
  }
  day.characterId = character.id;
  day.characterLocked = true;
  state.selectedCharacter = character.id;
  saveState();
  renderCharacter();
  toggleCharacterPanel(false);
  showToast(`已切换角色：${character.name}。${character.line}。`);
}

function cycleCharacter() {
  const currentIndex = characters.findIndex((item) => item.id === state.selectedCharacter);
  const next = characters[(currentIndex + 1 + characters.length) % characters.length];
  selectCharacter(next.id);
}

function renderLowEnergy(day) {
  lowTasks.forEach((task) => {
    const button = dom.lowEnergyBar.querySelector(`[data-id="${task.id}"]`);
    if (!button) return;
    button.textContent = getLowTaskDisplayTitle(task);
    button.dataset.editCard = "low";
    button.title = "长按修改任务名字";
    button.classList.toggle("is-done", Boolean(day.low[task.id]));
  });
}

function renderMainTasks(day) {
  dom.mainTaskGrid.innerHTML = getVisibleMainTasks()
    .map((task, index) => {
      const done = task.lockedFromCompany ? Boolean(task.companyDone) : Boolean(day.main[task.id]);
      const planned = Boolean(day.planned?.main?.[task.id]);
      const edited = getEditableItem("main", task);
      const runner = taskRunnerState(day, "main", task);
      const lifeMaintenance = isLifeMaintenanceTask(task);
      return `
        <article class="task-card ${task.lockedFromCompany ? "is-company-task" : ""} ${lifeMaintenance ? "is-life-maintenance-task" : ""} ${runner.active ? "is-running" : ""} ${planned ? "is-planned" : ""} ${done ? "is-done" : ""}" data-edit-card="main" data-id="${task.id}" title="${runner.active ? "点击停止计时" : planned ? "点击开始计时，长按修改" : "点击加入时间轴，长按修改"}">
          <button class="task-card-hit" type="button" data-action="toggle-main-plan" data-id="${task.id}">
            <span class="task-index">${index + 1}</span>
            ${lifeMaintenance ? `<span class="life-maintenance-badge">生命维护</span>` : ""}
            ${renderTaskArt("main", edited, index)}
            <h3>${escapeHtml(edited.title)}</h3>
            ${task.lockedFromCompany ? `<small class="task-source-line">公司 · ${escapeHtml(task.companyDepartmentName)}</small>` : ""}
            <div class="task-runner" aria-label="${runner.active ? "计时中" : "计时记录"}">
              <i style="width:${runner.percent}%"></i>
              <span>${escapeHtml(runner.label)}</span>
            </div>
            <p><span>${formatDuration(task.durationMinutes)}</span><span class="task-state">${runner.active ? "计时中" : done ? "完成" : planned ? "已规划" : ""}</span></p>
          </button>
        </article>
      `;
    })
    .join("");
}

function renderSideQuests(day) {
  const visibleSideQuests = getVisibleSideQuests(selectedDate);
  dom.sideQuestList.innerHTML = visibleSideQuests
    .map((quest, index) => {
      const done = quest.lockedFromMarket ? Boolean(quest.marketDone) : Boolean(day.side[quest.id]);
      const planned = Boolean(day.planned?.side?.[quest.id]);
      const edited = getEditableItem("side", quest);
      const runner = taskRunnerState(day, "side", quest);
      return `
        <button class="quest-row ${quest.lockedFromMarket ? "is-market-task" : ""} ${runner.active ? "is-running" : ""} ${planned ? "is-planned" : ""} ${done ? "is-done" : ""}" type="button" data-action="toggle-side-plan" data-edit-card="side" data-id="${quest.id}" title="${runner.active ? "点击停止计时" : planned ? "点击开始计时，长按修改" : "点击加入时间轴，长按修改"}">
          ${renderTaskArt("side", edited, index)}
          <span>
            <h3>${escapeHtml(edited.title)}</h3>
            <p>${escapeHtml(edited.text)}</p>
            <span class="quest-runner"><i style="width:${runner.percent}%"></i><b>${escapeHtml(runner.label)}</b></span>
          </span>
          <span class="xp-badge"><span class="quest-duration">${formatDuration(quest.durationMinutes)}</span><b>★</b>${quest.xp} XP</span>
        </button>
      `;
    })
    .join("");
}

function taskRunnerState(day, type, task) {
  const active = day.taskActive?.[type]?.[task.id];
  const planned = Boolean(day.planned?.[type]?.[task.id]);
  const duration = Math.max(1, Number(task.durationMinutes) || 60);
  if (active) {
    const elapsed = elapsedTaskMinutes(active);
    return {
      active: true,
      percent: Math.min(100, Math.max(8, (elapsed / duration) * 100)),
      label: `进行中 ${formatDuration(elapsed)}`,
    };
  }
  const runs = (day.taskRuns || []).filter((run) => run.type === type && run.sourceTaskId === task.id);
  const total = runs.reduce((sum, run) => sum + Number(run.duration || 0), 0);
  if (planned) {
    return {
      active: false,
      planned: true,
      percent: 10,
      label: "已规划，再点开始",
    };
  }
  return {
    active: false,
    percent: Math.min(100, total ? (total / duration) * 100 : 0),
    label: runs.length ? `已记录 ${formatDuration(total)}` : "点卡片规划",
  };
}

function renderLifeQuests(week, day) {
  dom.weekLabel.textContent = `第 ${weekIndex(selectedDate) + 1} 周`;
  dom.lifeQuestGrid.innerHTML = lifeGroups
    .map((group) => {
      const ids = lifeIds(group);
      const done = ids.filter((id) => week.life[id]).length;
      const active = day.lifeActive?.[group.id];
      const records = day.lifeRecords.filter((record) => record.groupId === group.id);
      const activeMinutes = active ? elapsedLifeMinutes(active) : 0;
      const buttons = ids
        .map((id, index) => {
          const checked = Boolean(day.lifeMaintenanceSlots?.[id]);
          return `<button class="${checked ? "is-done" : ""}" type="button" data-action="toggle-life" data-id="${id}">${checked ? "✓" : index + 1}</button>`;
        })
        .join("");
      const edited = getEditableItem("life", group);
      return `
        <article class="life-card ${active ? "is-running" : ""}" data-action="toggle-life-timer" data-edit-card="life" data-id="${group.id}" title="${active ? "点击停止计时" : "点击开始计时，长按修改任务名字"}">
          ${renderTaskArt("life", edited, lifeGroups.indexOf(group))}
          <h3><span class="life-title">${escapeHtml(edited.title)}</span><span class="life-count">${done}/${group.target}</span></h3>
          <div class="life-runner" aria-label="${active ? "进行中" : "今日记录"}">
            <i style="width:${active ? Math.min(100, Math.max(12, activeMinutes * 4)) : Math.min(100, records.length * 28)}%"></i>
            <span>${active ? `进行中 ${formatDuration(activeMinutes)}` : records.length ? `已记录 ${formatDuration(records.reduce((sum, item) => sum + item.duration, 0))}` : "点卡片开始"}</span>
          </div>
          <div class="life-boxes">${buttons}</div>
        </article>
      `;
    })
    .join("");
}

function renderTaskArt(type, item, index = 0) {
  const iconId = validTaskIconId(item?.art, defaultTaskIconFor(type, index));
  const title = item?.title || "任务";
  return `
    <span class="task-art task-art-${type}" aria-hidden="true">
      <img src="${taskIconUrl(iconId)}" alt="" loading="lazy" />
    </span>
    <span class="sr-only">${escapeHtml(title)}</span>
  `;
}

function renderTimeline(day) {
  const doneCount = completedMainCount(day);
  dom.timelineSummary.textContent = `${formatDuration(doneCount * 60)} / ${formatDuration(plannedMainTaskTarget(day) * 60)}`;
  renderTimelineBoard(day);
}

function renderTimelineBoard(day) {
  const startHour = 0;
  const endHour = 24;
  const totalMinutes = (endHour - startHour) * 60;
  const width = normalizeTimelineZoom(timelineZoom);
  const marks = scheduleTimeMarks(width);
  const rows = buildScheduleRows(day, totalMinutes);
  const isToday = selectedDate === dateKey(new Date());
  const nowMinutes = new Date().getHours() * 60 + new Date().getMinutes();
  const showNow = isToday && nowMinutes >= startHour * 60 && nowMinutes <= endHour * 60;
  const nowLeft = ((nowMinutes - startHour * 60) / totalMinutes) * 100;
  const height = Math.max(184, rows.reduce((max, row) => Math.max(max, row.top + row.height + 10), 0));

  dom.timelineBoard.innerHTML = `
    <div class="timeline-board-title">
      <span class="timeline-day-pill">${formatTimelineDate(selectedDate)} <b>${isToday ? "今天" : "计划"}</b></span>
      <button class="timeline-calendar-card" type="button" data-action="open-calendar" aria-label="打开完整日历">📅</button>
    </div>
    <div class="schedule-scroll" data-schedule-scroll>
      <div class="schedule-wide" style="width:${width}px;--schedule-grid-step:${scheduleGridStep(width)}%">
        <div class="schedule-hour-head">
          <div>${marks.map((mark) => `<i style="left:${mark.left}%">${mark.label}</i>`).join("")}</div>
        </div>
        <div class="schedule-canvas" style="--schedule-height:${height}px">
          <div class="schedule-track">
            ${showNow ? `<span class="schedule-now-line" style="left:${nowLeft}%"><i></i></span>` : ""}
            ${rows.length ? rows.map(renderScheduleRow).join("") : `<p class="schedule-empty">点选主线或副线任务后，它会出现在这里。</p>`}
          </div>
        </div>
      </div>
    </div>
    <label class="schedule-zoom-control">
      <span>压缩</span>
      <input type="range" min="${TIMELINE_ZOOM_MIN}" max="${TIMELINE_ZOOM_MAX}" step="20" value="${width}" data-schedule-zoom />
      <span>展开</span>
    </label>
  `;
  requestAnimationFrame(() => scrollScheduleToFirstTask());
}

function scheduleTimeMarks(width) {
  const step = width < 900 ? 120 : width < 1500 ? 60 : width < 2300 ? 30 : 15;
  const marks = [];
  for (let minute = 0; minute <= 24 * 60; minute += step) {
    const hour = Math.floor(minute / 60);
    const rest = minute % 60;
    marks.push({
      left: (minute / (24 * 60)) * 100,
      label: rest ? `${hour}:${String(rest).padStart(2, "0")}` : String(hour),
    });
  }
  return marks;
}

function scheduleGridStep(width) {
  const minutes = width < 900 ? 120 : width < 1500 ? 60 : width < 2300 ? 30 : 15;
  return (minutes / (24 * 60)) * 100;
}

function buildScheduleRows(day, totalMinutes) {
  day.schedule = normalizeDaySchedule(day.schedule);
  const rows = [];
  let topCursor = 0;

  getVisibleMainTasks().forEach((task, index) => {
    if (!day.planned?.main?.[task.id] && !day.taskActive?.main?.[task.id]) return;
    rows.push(createScheduleRow(day, "main", task, index, topCursor, totalMinutes));
    topCursor += 58;
  });

  if (rows.length) topCursor += 8;
  getVisibleSideQuests(selectedDate).forEach((quest, index) => {
    if (!day.planned?.side?.[quest.id] && !day.taskActive?.side?.[quest.id]) return;
    rows.push(createScheduleRow(day, "side", quest, index, topCursor, totalMinutes));
    topCursor += 36;
  });

  if (day.taskRuns.length) topCursor += rows.length ? 8 : 0;
  [...day.taskRuns]
    .sort((a, b) => a.start - b.start)
    .forEach((record, index) => {
      rows.push(createTaskRunScheduleRow(day, record, index, topCursor, totalMinutes));
      topCursor += record.type === "side" ? 32 : 52;
    });

  if (day.lifeRecords.length) topCursor += rows.length ? 8 : 0;
  day.lifeRecords.forEach((record, index) => {
    rows.push(createLifeScheduleRow(day, record, index, topCursor, totalMinutes));
    topCursor += 24;
  });

  return rows;
}

function createScheduleRow(day, type, task, index, defaultTop, totalMinutes) {
  const plannedDuration = Math.max(15, Number(task.durationMinutes) || 60);
  const saved = day.schedule?.[type]?.[task.id];
  const defaultStart = type === "main" ? defaultMainStart(index) : defaultSideStart(index);
  const timer = day.taskActive?.[type]?.[task.id];
  const active = Boolean(timer);
  const start = active
    ? clamp(Number(timer.startMinute) || currentMinuteOfDay(), 0, totalMinutes - 1)
    : clamp(Number(saved?.start ?? defaultStart) || 0, 0, Math.max(0, totalMinutes - plannedDuration));
  const duration = active
    ? clamp(elapsedTaskMinutes(timer), 1, Math.max(1, totalMinutes - start))
    : plannedDuration;
  const end = start + duration;
  const top = clamp(Number(saved?.top ?? defaultTop) || 0, 0, 1200);
  const done = type === "side" && task.lockedFromMarket
    ? Boolean(task.marketDone)
    : type === "main" && task.lockedFromCompany
      ? Boolean(task.companyDone)
      : Boolean(day[type]?.[task.id]);
  return {
    type,
    task,
    edited: getEditableItem(type, task),
    start,
    end,
    duration,
    left: (start / totalMinutes) * 100,
    width: (duration / totalMinutes) * 100,
    top,
    height: type === "side" ? 30 : 50,
    done,
    completedDuration: active ? duration : done ? plannedDuration : 0,
    active,
    pending: !active && !day[type]?.[task.id],
    completeAction: type === "side" ? "toggle-side-complete" : "toggle-main-complete",
    colorIndex: type === "side" ? (index + 4) % 3 : index % 3,
  };
}

function createTaskRunScheduleRow(day, record, index, defaultTop, totalMinutes) {
  const saved = day.schedule?.run?.[record.id];
  const duration = Math.max(1, Number(record.duration) || 1);
  const start = clamp(Number(saved?.start ?? record.start) || 0, 0, Math.max(0, totalMinutes - duration));
  const top = clamp(Number(saved?.top ?? defaultTop) || 0, 0, 1200);
  return {
    type: "run",
    sourceType: record.type,
    task: { id: record.id },
    edited: { title: record.title, icon: record.icon || (record.type === "side" ? "副" : "主") },
    start,
    end: Math.min(totalMinutes, start + duration),
    duration,
    left: (start / totalMinutes) * 100,
    width: (duration / totalMinutes) * 100,
    top,
    height: record.type === "side" ? 30 : 50,
    done: Boolean(record.done),
    completedDuration: duration,
    active: false,
    pending: false,
    completeAction: "toggle-run-complete",
    colorIndex: record.type === "side" ? (index + 4) % 3 : index % 3,
  };
}

function createLifeScheduleRow(day, record, index, defaultTop, totalMinutes) {
  const group = lifeGroups.find((item) => item.id === record.groupId);
  const edited = getEditableItem("life", group) || { title: record.title, icon: "日" };
  const saved = day.schedule?.life?.[record.id];
  const duration = Math.max(1, Number(record.duration) || 1);
  const start = clamp(Number(saved?.start ?? record.start) || 0, 0, Math.max(0, totalMinutes - duration));
  const top = clamp(Number(saved?.top ?? defaultTop) || 0, 0, 1200);
  return {
    type: "life",
    task: { id: record.id },
    edited: { title: edited.title, icon: "•" },
    start,
    end: Math.min(totalMinutes, start + duration),
    duration,
    left: (start / totalMinutes) * 100,
    width: (duration / totalMinutes) * 100,
    top,
    height: 16,
    done: true,
    completedDuration: duration,
    active: false,
    pending: false,
    colorIndex: (index + 2) % 3,
  };
}

function renderScheduleRow(row) {
  return `
    <div
      class="schedule-bar schedule-bar-${row.type} ${row.sourceType ? `schedule-bar-${row.sourceType}` : ""} color-${row.colorIndex} ${row.done ? "is-done" : ""} ${row.pending ? "is-pending" : ""} ${row.active ? "is-active" : ""}"
      data-schedule-type="${row.type}"
      data-edit-card="${row.sourceType || row.type}"
      data-id="${row.task.id}"
      data-duration="${row.duration}"
      data-completed-duration="${row.completedDuration || 0}"
      data-start="${row.start}"
      data-top="${Math.round(row.top)}"
      data-task-title="${escapeHtml(row.edited.title)}"
      style="left:${row.left}%; width:${row.width}%; top:${row.top}px"
      title="拖动移动位置"
    >
      <span class="schedule-bar-icon">${escapeHtml(row.edited.icon)}</span>
      <span>
        <strong>${escapeHtml(row.edited.title)}</strong>
        <small>${minutesToClock(row.start)} - ${minutesToClock(row.end)} · ${formatDuration(row.duration)}</small>
      </span>
      ${row.completeAction ? `
        <button class="schedule-complete ${row.done ? "is-done" : ""}" type="button" data-action="${row.completeAction}" data-id="${row.task.id}" aria-label="${row.done ? "取消完成" : "完成任务"}">
          ${row.done ? "✓" : "○"}
        </button>
      ` : ""}
    </div>
  `;
}

function showScheduleBarInfo(bar) {
  if (!bar) return;
  const track = bar.closest(".schedule-track");
  if (!track) return;
  track.querySelector(".schedule-info-popover")?.remove();
  window.clearTimeout(scheduleInfoTimer);

  const title = bar.dataset.taskTitle || getScheduleItemLabel(bar.dataset.scheduleType, bar.dataset.id);
  const completedMinutes = Math.max(0, Number(bar.dataset.completedDuration) || 0);
  const plannedMinutes = Math.max(0, Number(bar.dataset.duration) || 0);
  const statusText = completedMinutes > 0
    ? `已完成 ${formatDuration(completedMinutes)}`
    : `已完成 0m · 计划 ${formatDuration(plannedMinutes)}`;
  const left = clamp(Number(bar.style.left.replace("%", "")) || 0, 0, 100);
  const top = Math.max(0, Number(bar.dataset.top) || 0);
  const popover = document.createElement("div");
  popover.className = "schedule-info-popover";
  popover.style.left = `${left}%`;
  popover.style.top = `${Math.max(0, top - 46)}px`;
  popover.innerHTML = `
    <strong>${escapeHtml(title)}</strong>
    <span>${escapeHtml(statusText)}</span>
  `;
  track.appendChild(popover);
  scheduleInfoTimer = window.setTimeout(() => {
    popover.remove();
  }, 2400);
}

function defaultMainStart(index) {
  const visibleMainTasks = getVisibleMainTasks();
  const start = 14 * 60 + visibleMainTasks
    .slice(0, index)
    .reduce((sum, task) => sum + task.durationMinutes + 10, 0);
  const duration = visibleMainTasks[index]?.durationMinutes || 60;
  return clamp(start, 0, 24 * 60 - duration);
}

function defaultSideStart(index) {
  const visibleSideQuests = getVisibleSideQuests(selectedDate);
  const start = 19 * 60 + visibleSideQuests
    .slice(0, index)
    .reduce((sum, quest) => sum + quest.durationMinutes + 8, 0);
  const duration = visibleSideQuests[index]?.durationMinutes || 30;
  return clamp(start, 0, 24 * 60 - duration);
}

function selectTimelineDate(dayKey) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dayKey || "")) return;
  selectedDate = dayKey;
  calendarViewDate = parseDate(selectedDate);
  ensureDay(selectedDate);
  ensureWeek(selectedDate);
  render();
}

function scrollScheduleToFirstTask() {
  const scroller = dom.timelineBoard?.querySelector("[data-schedule-scroll]");
  const firstBar = dom.timelineBoard?.querySelector(".schedule-bar");
  const firstTaskStart = Number(firstBar?.dataset.start) || 13 * 60;
  if (!scroller || scroller.dataset.userScrolled === "true") return;
  const maxScroll = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
  scroller.scrollLeft = Math.min(maxScroll, Math.max(0, ((firstTaskStart - 60) / (24 * 60)) * scroller.scrollWidth));
  scroller.dataset.userScrolled = "true";
}

function openCalendar() {
  calendarViewDate = parseDate(selectedDate);
  renderCalendarDialog();
  if (typeof dom.calendarDialog.showModal === "function") {
    dom.calendarDialog.showModal();
  } else {
    dom.calendarDialog.setAttribute("open", "");
  }
}

function closeCalendar() {
  if (typeof dom.calendarDialog.close === "function") {
    dom.calendarDialog.close();
  } else {
    dom.calendarDialog.removeAttribute("open");
  }
}

function shiftCalendarMonth(delta) {
  calendarViewDate = new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() + delta, 1);
  renderCalendarDialog();
}

function renderCalendarDialog() {
  const year = calendarViewDate.getFullYear();
  const month = calendarViewDate.getMonth();
  const first = new Date(year, month, 1);
  const start = new Date(first);
  start.setDate(first.getDate() - first.getDay());
  const selected = selectedDate;
  const today = dateKey(new Date());

  dom.calendarTitle.textContent = `${year}年${month + 1}月`;
  dom.calendarGrid.innerHTML = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const key = dateKey(date);
    const isCurrentMonth = date.getMonth() === month;
    return `
      <button class="${isCurrentMonth ? "" : "is-muted"} ${key === selected ? "is-selected" : ""} ${key === today ? "is-today" : ""}" type="button" data-action="select-calendar-date" data-date="${key}">
        <span>${date.getDate()}</span>
      </button>
    `;
  }).join("");
}

function selectCalendarDate(dayKey) {
  selectTimelineDate(dayKey);
  closeCalendar();
}

function weekdayLabel(date) {
  return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][date.getDay()];
}

function formatTimelineDate(dayKey) {
  const date = parseDate(dayKey);
  return `${date.getMonth() + 1}月${date.getDate()}日 ${weekdayLabel(date)}`;
}

function minutesToClock(minutes) {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function formatDuration(minutes) {
  const total = Math.max(0, Math.round(Number(minutes) || 0));
  const hours = Math.floor(total / 60);
  const rest = total % 60;
  if (!hours) return `${rest}m`;
  if (!rest) return `${hours}h`;
  return `${hours}h ${rest}m`;
}

function renderTimeDistribution(day) {
  const items = getTimeDistributionItems(day);
  if (!items.length) {
    dom.timeDistributionDonut.classList.add("is-empty");
    dom.timeDistributionDonut.style.background = "transparent";
    if (dom.timeDistributionPercent) dom.timeDistributionPercent.textContent = "0%";
    dom.timeDistributionList.innerHTML = "";
    return;
  }

  dom.timeDistributionDonut.classList.remove("is-empty");
  const total = items.reduce((sum, item) => sum + item.minutes, 0) || 1;
  let cursor = 0;
  const segments = items.map((item) => {
    const start = (cursor / total) * 100;
    cursor += item.minutes;
    const end = (cursor / total) * 100;
    return `${item.color} ${start.toFixed(2)}% ${end.toFixed(2)}%`;
  });

  dom.timeDistributionDonut.style.background = `conic-gradient(${segments.join(", ")})`;
  const featuredItem = items.find((item) => item.id === "main") || items.reduce((largest, item) => item.minutes > largest.minutes ? item : largest, items[0]);
  const featuredPercent = Math.round((featuredItem.minutes / total) * 100);
  if (dom.timeDistributionPercent) dom.timeDistributionPercent.textContent = `${featuredPercent}%`;
  dom.timeDistributionList.innerHTML = items
    .map((item) => {
      const percent = Math.round((item.minutes / total) * 100);
      return `
        <div class="time-distribution-row">
          <span class="time-dot" style="--dot-color:${item.color}"></span>
          <strong>${escapeHtml(item.label)}</strong>
          <em>${formatDistributionDuration(item.minutes)}</em>
          <b>${percent}%</b>
        </div>
      `;
    })
    .join("");
}

function printDashboard() {
  const target = getInvoicePrintTarget();
  if (target.billType === "diy" && !state.invoicePrintSettings?.diyImage) {
    dom.invoiceDiyImageInput?.click();
    showToast("先导入一张图片，再生成 DIY 账单。");
    return;
  }
  const day = ensureDay(selectedDate);
  day.invoicePrintedAt = new Date().toISOString();
  currentInvoiceDraft = buildInvoiceForTarget(target);
  saveState();
  renderInvoicePrinter(day, true);
  showToast(`${target.typeLabel}${target.label}发票机启动，点击吐出来的发票可以查看全貌。`);
}

function renderInvoicePrinter(day = ensureDay(selectedDate), replay = false) {
  const panel = dom.dailyInvoicePrinter?.closest(".time-print-panel");
  if (!panel) return;
  window.clearTimeout(invoiceAnimationTimer);
  panel.classList.remove("is-printing");
  panel.classList.toggle("has-invoice", Boolean(day.invoicePrintedAt));
  if (replay && day.invoicePrintedAt) {
    void panel.offsetWidth;
    panel.classList.add("is-printing");
    invoiceAnimationTimer = window.setTimeout(() => panel.classList.remove("is-printing"), 1500);
  }
  if (dom.invoiceReceiptPeek) {
    if (day.invoicePrintedAt) {
      dom.invoiceReceiptPeek.dataset.action = "open-invoice";
      dom.invoiceReceiptPeek.dataset.date = currentInvoiceDraft?.date || getInvoicePrintTarget().key;
    } else {
      dom.invoiceReceiptPeek.removeAttribute("data-action");
      dom.invoiceReceiptPeek.removeAttribute("data-date");
    }
    dom.invoiceReceiptPeek.title = day.invoicePrintedAt ? "打开今日发票" : "";
  }
}

function renderInvoicePrintControls() {
  state.invoicePrintSettings = normalizeInvoicePrintSettings(state.invoicePrintSettings);
  const settings = state.invoicePrintSettings;
  const target = getInvoicePrintTarget(settings);
  if (dom.invoiceRangeToggle) {
    dom.invoiceRangeToggle.textContent = invoiceRangeShortLabel(target);
    dom.invoiceRangeToggle.title = `打印${target.label}发票`;
  }
  if (dom.invoicePrintDateInput) {
    dom.invoicePrintDateInput.value = settings.day;
    dom.invoicePrintDateInput.min = START_DATE;
    dom.invoicePrintDateInput.max = addDays(START_DATE, TOTAL_DAYS - 1);
  }
  if (dom.invoicePrintWeekInput) {
    const options = invoiceWeekOptions();
    dom.invoicePrintWeekInput.innerHTML = options.map((option) => `
      <option value="${escapeHtml(option.key)}">${escapeHtml(option.label)}</option>
    `).join("");
    dom.invoicePrintWeekInput.value = settings.week;
  }
  if (dom.invoicePrintMonthInput) {
    dom.invoicePrintMonthInput.value = settings.month;
    dom.invoicePrintMonthInput.min = START_DATE.slice(0, 7);
    dom.invoicePrintMonthInput.max = addDays(START_DATE, TOTAL_DAYS - 1).slice(0, 7);
  }
  document.querySelectorAll("[data-invoice-range-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.invoiceRangeMode === settings.mode);
  });
  document.querySelectorAll("[data-invoice-range-field]").forEach((field) => {
    field.hidden = field.dataset.invoiceRangeField !== settings.mode;
  });
  if (dom.invoiceBillTypeButton) {
    const type = invoiceBillTypeById(settings.billType);
    dom.invoiceBillTypeButton.textContent = type.shortLabel;
    dom.invoiceBillTypeButton.dataset.billType = type.id;
    dom.invoiceBillTypeButton.title = type.id === "diy" && settings.diyImageName
      ? `账单类型：${type.label} · ${settings.diyImageName}`
      : `账单类型：${type.label}`;
  }
}

function toggleInvoiceRangePanel() {
  if (!dom.invoiceRangePanel || !dom.invoiceRangeToggle) return;
  const nextOpen = dom.invoiceRangePanel.hidden;
  dom.invoiceRangePanel.hidden = !nextOpen;
  dom.invoiceRangeToggle.setAttribute("aria-expanded", String(nextOpen));
}

function selectInvoiceRangeMode(mode) {
  if (!["day", "week", "month"].includes(mode)) return;
  state.invoicePrintSettings = normalizeInvoicePrintSettings(state.invoicePrintSettings);
  state.invoicePrintSettings.mode = mode;
  saveState();
  renderInvoicePrintControls();
}

function updateInvoicePrintTarget(event) {
  state.invoicePrintSettings = normalizeInvoicePrintSettings(state.invoicePrintSettings);
  if (event.target === dom.invoicePrintDateInput && isDateKey(event.target.value)) {
    state.invoicePrintSettings.day = event.target.value;
    state.invoicePrintSettings.week = weekKey(event.target.value);
    state.invoicePrintSettings.month = event.target.value.slice(0, 7);
  }
  if (event.target === dom.invoicePrintWeekInput && /^week-\d+$/.test(event.target.value)) {
    state.invoicePrintSettings.week = event.target.value;
  }
  if (event.target === dom.invoicePrintMonthInput && /^\d{4}-\d{2}$/.test(event.target.value)) {
    state.invoicePrintSettings.month = event.target.value;
  }
  saveState();
  renderInvoicePrintControls();
}

function invoiceBillTypeById(typeId) {
  return invoiceBillTypes.find((item) => item.id === typeId) || invoiceBillTypes[0];
}

function cycleInvoiceBillType() {
  state.invoicePrintSettings = normalizeInvoicePrintSettings(state.invoicePrintSettings);
  const currentIndex = invoiceBillTypes.findIndex((item) => item.id === state.invoicePrintSettings.billType);
  const nextType = invoiceBillTypes[(currentIndex + 1) % invoiceBillTypes.length] || invoiceBillTypes[0];
  state.invoicePrintSettings.billType = nextType.id;
  saveState();
  renderInvoicePrintControls();
  if (nextType.id === "diy" && !state.invoicePrintSettings.diyImage) {
    dom.invoiceDiyImageInput?.click();
    showToast("请选择一张图片生成 DIY 账单。");
    return;
  }
  showToast(`账单类型：${nextType.label}`);
}

function importInvoiceDiyImage(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    showToast("请选择图片文件。");
    event.target.value = "";
    return;
  }
  const reader = new FileReader();
  reader.onload = async () => {
    const result = String(reader.result || "");
    if (!result.startsWith("data:image/")) {
      showToast("图片导入失败。");
      return;
    }
    const mono = await convertImageToMonochromeBill(result).catch(() => null);
    state.invoicePrintSettings = normalizeInvoicePrintSettings(state.invoicePrintSettings);
    state.invoicePrintSettings.billType = "diy";
    state.invoicePrintSettings.diyImage = mono?.dataUrl || result;
    state.invoicePrintSettings.diyImageName = file.name;
    state.invoicePrintSettings.diyAspectRatio = mono?.aspectRatio || 1;
    saveState();
    renderInvoicePrintControls();
    currentInvoiceDraft = buildInvoiceForTarget(getInvoicePrintTarget());
    showToast(mono ? "DIY 图片已变成高对比单色账单。" : "DIY 图片账单已准备好。");
  };
  reader.onerror = () => showToast("图片导入失败。");
  reader.readAsDataURL(file);
  event.target.value = "";
}

function convertImageToMonochromeBill(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const style = normalizeInvoiceSettings(state.invoiceSettings);
      const ink = hexToRgb(style.inkColor);
      const maxSide = 980;
      const ratio = Math.min(1, maxSide / Math.max(image.naturalWidth || 1, image.naturalHeight || 1));
      const width = Math.max(1, Math.round((image.naturalWidth || 1) * ratio));
      const height = Math.max(1, Math.round((image.naturalHeight || 1) * ratio));
      const sourceCanvas = document.createElement("canvas");
      sourceCanvas.width = width;
      sourceCanvas.height = height;
      const sourceContext = sourceCanvas.getContext("2d", { willReadFrequently: true });
      sourceContext.drawImage(image, 0, 0, width, height);
      const sourceData = sourceContext.getImageData(0, 0, width, height);
      let min = 255;
      let max = 0;
      const values = new Uint8ClampedArray(width * height);
      for (let index = 0; index < values.length; index += 1) {
        const offset = index * 4;
        const gray = Math.round(
          sourceData.data[offset] * 0.299
          + sourceData.data[offset + 1] * 0.587
          + sourceData.data[offset + 2] * 0.114
        );
        values[index] = gray;
        if (gray < min) min = gray;
        if (gray > max) max = gray;
      }

      const outputCanvas = document.createElement("canvas");
      outputCanvas.width = width;
      outputCanvas.height = height;
      const outputContext = outputCanvas.getContext("2d");
      const outputData = outputContext.createImageData(width, height);
      const low = Math.min(245, min + (max - min) * 0.08);
      const high = Math.max(10, max - (max - min) * 0.08);
      const range = Math.max(1, high - low);
      const contrast = 1.28;
      for (let index = 0; index < values.length; index += 1) {
        const normalized = clamp((values[index] - low) / range, 0, 1);
        const leveled = clamp((normalized - 0.5) * contrast + 0.5, 0, 1);
        const tone = 1 - leveled;
        const offset = index * 4;
        const alpha = clamp(Math.pow(tone, 0.82) * 1.12, 0, 1) * (sourceData.data[offset + 3] / 255);
        outputData.data[offset] = ink.r;
        outputData.data[offset + 1] = ink.g;
        outputData.data[offset + 2] = ink.b;
        outputData.data[offset + 3] = Math.round(alpha * 255);
      }
      outputContext.putImageData(outputData, 0, 0);
      resolve({
        dataUrl: outputCanvas.toDataURL("image/png"),
        aspectRatio: width / height,
      });
    };
    image.onerror = reject;
    image.src = source;
  });
}

function hexToRgb(value) {
  const color = normalizeCssColor(value, "#000000").replace("#", "");
  return {
    r: parseInt(color.slice(0, 2), 16),
    g: parseInt(color.slice(2, 4), 16),
    b: parseInt(color.slice(4, 6), 16),
  };
}

function invoiceRangeShortLabel(target = getInvoicePrintTarget()) {
  if (target.mode === "day") {
    const date = parseDate(target.key);
    return `日\n${date.getMonth() + 1}/${date.getDate()}`;
  }
  if (target.mode === "week") return `周\n${target.key.replace("week-", "")}`;
  return `月\n${Number(target.key.slice(5, 7))}`;
}

function renderInvoiceStyleControls() {
  state.invoiceSettings = normalizeInvoiceSettings(state.invoiceSettings);
  const settings = state.invoiceSettings;
  const panel = dom.dailyInvoicePrinter?.closest(".time-print-panel");
  applyInvoiceSettingsToElement(panel, settings);
  if (dom.invoicePaperColorInput) dom.invoicePaperColorInput.value = settings.paperColor;
  if (dom.invoiceInkColorInput) dom.invoiceInkColorInput.value = settings.inkColor;
  if (dom.invoiceMaterialButton) {
    dom.invoiceMaterialButton.textContent = invoiceMaterialShortLabel(settings.material);
    dom.invoiceMaterialButton.dataset.material = settings.material;
    dom.invoiceMaterialButton.title = `材质：${invoiceMaterialLabel(settings.material)}`;
  }
  applyInvoiceSettingsToElement(dom.dailyInvoicePreview, currentInvoiceDraft?.invoiceStyle || settings);
}

function updateInvoiceColorFromInput(event) {
  const input = event.target.closest?.("[data-invoice-color]");
  if (!input) return;
  state.invoiceSettings = normalizeInvoiceSettings(state.invoiceSettings);
  const next = normalizeCssColor(input.value, input.dataset.invoiceColor === "paper" ? state.invoiceSettings.paperColor : state.invoiceSettings.inkColor);
  if (input.dataset.invoiceColor === "paper") state.invoiceSettings.paperColor = next;
  if (input.dataset.invoiceColor === "ink") state.invoiceSettings.inkColor = next;
  saveState();
  refreshInvoiceDraftStyle();
  renderInvoiceStyleControls();
}

function cycleInvoiceMaterial() {
  state.invoiceSettings = normalizeInvoiceSettings(state.invoiceSettings);
  const currentIndex = invoiceMaterials.findIndex((item) => item.id === state.invoiceSettings.material);
  const nextMaterial = invoiceMaterials[(currentIndex + 1) % invoiceMaterials.length] || invoiceMaterials[0];
  state.invoiceSettings.material = nextMaterial.id;
  state.invoiceSettings.paperColor = nextMaterial.paperColor;
  state.invoiceSettings.inkColor = nextMaterial.inkColor;
  saveState();
  refreshInvoiceDraftStyle();
  renderInvoiceStyleControls();
  showToast(`发票材质：${nextMaterial.label}`);
}

function refreshInvoiceDraftStyle() {
  if (!currentInvoiceDraft) return;
  currentInvoiceDraft.invoiceStyle = normalizeInvoiceSettings(state.invoiceSettings);
  if (dom.dailyInvoicePreview) {
    dom.dailyInvoicePreview.innerHTML = renderInvoiceHtml(currentInvoiceDraft);
    applyInvoiceSettingsToElement(dom.dailyInvoicePreview, currentInvoiceDraft.invoiceStyle);
  }
  renderInvoiceDialogActions();
}

function invoiceMaterialLabel(material) {
  return invoiceMaterials.find((item) => item.id === material)?.label || invoiceMaterials[0].label;
}

function invoiceMaterialShortLabel(material) {
  const item = invoiceMaterials.find((materialItem) => materialItem.id === material) || invoiceMaterials[0];
  return item.shortLabel || item.label;
}

function applyInvoiceSettingsToElement(element, settings) {
  if (!element) return;
  const normalized = normalizeInvoiceSettings(settings);
  element.style.setProperty("--invoice-paper", normalized.paperColor);
  element.style.setProperty("--invoice-ink", normalized.inkColor);
  element.dataset.material = normalized.material;
}

function invoiceStyleAttributes(settings) {
  const normalized = normalizeInvoiceSettings(settings);
  return `data-material="${escapeHtml(normalized.material)}" style="--invoice-paper:${escapeHtml(normalized.paperColor)};--invoice-ink:${escapeHtml(normalized.inkColor)}"`;
}

function getInvoicePrintTarget(settings = state.invoicePrintSettings) {
  const normalized = normalizeInvoicePrintSettings(settings);
  if (normalized.mode === "day") {
    const date = parseDate(normalized.day);
    return {
      mode: "day",
      billType: normalized.billType,
      typeLabel: invoiceBillTypeById(normalized.billType).shortLabel,
      key: normalized.day,
      dates: [normalized.day],
      label: `${date.getMonth() + 1}/${date.getDate()}`,
      title: "当日发票",
    };
  }
  if (normalized.mode === "week") {
    const option = invoiceWeekOptions().find((item) => item.key === normalized.week) || invoiceWeekOptions()[0];
    return {
      mode: "week",
      billType: normalized.billType,
      typeLabel: invoiceBillTypeById(normalized.billType).shortLabel,
      key: option.key,
      dates: option.dates,
      label: option.label,
      title: "本周发票",
    };
  }
  const dates = invoiceDatesInMonth(normalized.month);
  return {
    mode: "month",
    billType: normalized.billType,
    typeLabel: invoiceBillTypeById(normalized.billType).shortLabel,
    key: normalized.month,
    dates,
    label: `${Number(normalized.month.slice(5, 7))}月`,
    title: "本月发票",
  };
}

function invoiceWeekOptions() {
  const totalWeeks = Math.ceil(TOTAL_DAYS / 7);
  return Array.from({ length: totalWeeks }, (_, index) => {
    const start = addDays(START_DATE, index * 7);
    const end = addDays(START_DATE, Math.min(TOTAL_DAYS - 1, index * 7 + 6));
    return {
      key: `week-${index + 1}`,
      label: `第 ${index + 1} 周 ${formatShortDate(start)}-${formatShortDate(end)}`,
      dates: invoiceDatesBetween(start, end),
    };
  });
}

function invoiceDatesInMonth(monthKey) {
  return invoiceDatesBetween(START_DATE, addDays(START_DATE, TOTAL_DAYS - 1))
    .filter((dayKey) => dayKey.slice(0, 7) === monthKey);
}

function invoiceDatesBetween(start, end) {
  const days = [];
  for (let cursor = start; dayDiff(cursor, end) <= 0; cursor = addDays(cursor, 1)) {
    days.push(cursor);
  }
  return days;
}

function formatShortDate(dayKey) {
  const date = parseDate(dayKey);
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function buildInvoiceForTarget(target = getInvoicePrintTarget()) {
  if (target.billType === "ledger") return buildLedgerInvoice(target);
  if (target.billType === "diy") return buildDiyInvoice(target);
  if (target.mode === "day") {
    return {
      ...buildDailyInvoice(target.key),
      billType: "game",
      period: "day",
      periodKey: target.key,
      dateLabel: `${formatShortDate(target.key)} ${weekdayLabel(parseDate(target.key))}`,
      periodLabel: target.label,
      title: target.title,
    };
  }
  return buildRangeInvoice(target);
}

function buildRangeInvoice(target) {
  const invoices = target.dates.map((dayKey) => buildDailyInvoice(dayKey));
  const mainTasks = invoices.flatMap((invoice) => invoice.mainTasks.map((task) => ({
    ...task,
    title: `${formatShortDate(invoice.date)} ${task.title}`,
  }))).slice(0, 10);
  const lifeTasks = invoices.flatMap((invoice) => invoice.lifeTasks.map((task) => ({
    ...task,
    title: `${formatShortDate(invoice.date)} ${task.title}`,
  }))).slice(0, 10);
  const taskMinutes = invoices.reduce((sum, invoice) => sum + Number(invoice.taskMinutes || 0), 0);
  const moodValues = invoices.map((invoice) => Number(invoice.mood || 0));
  const energyValues = invoices.map((invoice) => Number(invoice.energy || 0));
  return {
    id: `invoice-${target.mode}-${target.key}`,
    date: target.key,
    billType: "game",
    period: target.mode,
    periodKey: target.key,
    dateLabel: target.label,
    weekday: "",
    periodLabel: target.label,
    title: target.title,
    createdAt: new Date().toISOString(),
    companyIncome: invoices.reduce((sum, invoice) => sum + Number(invoice.companyIncome || 0), 0),
    stockIncome: invoices.reduce((sum, invoice) => sum + Number(invoice.stockIncome || 0), 0),
    totalIncome: invoices.reduce((sum, invoice) => sum + Number(invoice.totalIncome || 0), 0),
    taskMinutes,
    energy: energyValues.length ? Math.round(energyValues.reduce((sum, value) => sum + value, 0) / energyValues.length) : ENERGY_MAX,
    mood: moodValues.length ? Math.round(moodValues.reduce((sum, value) => sum + value, 0) / moodValues.length) : MOOD_MID,
    mainTasks,
    lifeTasks,
    invoiceStyle: normalizeInvoiceSettings(state.invoiceSettings),
  };
}

function buildLedgerInvoice(target) {
  state.ledger = normalizeLedger(state.ledger);
  const records = state.ledger.filter((record) => target.dates.includes(record.date));
  const income = sumLedger(records, "income");
  const expense = sumLedger(records, "expense");
  const rows = records
    .slice()
    .sort((a, b) => String(b.date).localeCompare(String(a.date)) || String(b.createdAt).localeCompare(String(a.createdAt)))
    .slice(0, 12)
    .map((record) => {
      const category = getLedgerCategory(record.category);
      return {
        title: `${record.type === "income" ? "+" : "-"} ${category.label}${record.note ? ` · ${record.note}` : ""}`,
        duration: Math.round(Number(record.amount || 0) * 100),
        amount: Number(record.amount || 0),
        type: record.type,
        date: record.date,
        done: true,
      };
    });
  return {
    id: `invoice-ledger-${target.mode}-${target.key}`,
    date: `ledger-${target.key}`,
    billType: "ledger",
    period: target.mode,
    periodKey: target.key,
    dateLabel: target.label,
    weekday: "",
    periodLabel: target.label,
    title: target.mode === "day" ? "生活账单" : target.mode === "week" ? "本周生活账单" : "本月生活账单",
    createdAt: new Date().toISOString(),
    companyIncome: income,
    stockIncome: expense,
    totalIncome: income - expense,
    taskMinutes: records.length,
    energy: 100,
    mood: 100,
    mainTasks: rows,
    lifeTasks: [],
    invoiceStyle: normalizeInvoiceSettings(state.invoiceSettings),
  };
}

function buildDiyInvoice(target) {
  const settings = normalizeInvoicePrintSettings(state.invoicePrintSettings);
  return {
    id: `invoice-diy-${target.mode}-${target.key}`,
    date: `diy-${target.key}`,
    billType: "diy",
    period: target.mode,
    periodKey: target.key,
    dateLabel: target.label,
    weekday: "",
    periodLabel: target.label,
    title: "DIY 图片账单",
    createdAt: new Date().toISOString(),
    companyIncome: 0,
    stockIncome: 0,
    totalIncome: 0,
    taskMinutes: 0,
    energy: 100,
    mood: 100,
    mainTasks: [],
    lifeTasks: [],
    diyImage: settings.diyImage,
    diyImageName: settings.diyImageName,
    diyAspectRatio: settings.diyAspectRatio,
    invoiceStyle: normalizeInvoiceSettings(state.invoiceSettings),
  };
}

function buildDailyInvoice(dayKey = selectedDate) {
  const day = ensureDay(dayKey);
  const date = parseDate(dayKey);
  const virtual = getVirtualFinanceSummaryForDate(dayKey);
  const energy = calculateDailyEnergy(dayKey);
  const mood = calculateDailyMood(dayKey);
  const mainTasksForInvoice = getVisibleMainTasks().map((task) => {
    const done = task.lockedFromCompany ? Boolean(task.companyDone) : Boolean(day.main?.[task.id]);
    const runs = (day.taskRuns || []).filter((run) => run.type === "main" && run.sourceTaskId === task.id);
    const duration = runs.reduce((sum, run) => sum + Number(run.duration || 0), 0) || (done ? Number(task.durationMinutes || 0) : 0);
    return {
      title: getEditableItem("main", task)?.title || task.title,
      duration,
      done,
    };
  }).filter((task) => task.done || task.duration > 0).slice(0, 6);
  const lifeTaskRows = buildInvoiceLifeTasks(dayKey, day).slice(0, 6);

  return {
    id: `invoice-${dayKey}`,
    date: dayKey,
    billType: "game",
    dateLabel: `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}`,
    weekday: weekdayLabel(date),
    createdAt: new Date().toISOString(),
    companyIncome: virtual.companyIncome,
    stockIncome: virtual.stockIncome,
    totalIncome: virtual.companyIncome + virtual.stockIncome,
    taskMinutes: energy.workMinutes,
    energy: energy.energy,
    mood: mood.mood,
    mainTasks: mainTasksForInvoice,
    lifeTasks: lifeTaskRows,
    invoiceStyle: normalizeInvoiceSettings(state.invoiceSettings),
  };
}

function buildInvoiceLifeTasks(dayKey, day) {
  const rows = [];
  lifeGroups.forEach((group) => {
    const edited = getEditableItem("life", group);
    const records = normalizeLifeRecords(day.lifeRecords).filter((record) => record.groupId === group.id);
    const slots = Object.keys(normalizeLifeMaintenanceSlots(day.lifeMaintenanceSlots)).filter((id) => id.startsWith(`${group.id}-`));
    const duration = records.reduce((sum, record) => sum + Number(record.duration || 0), 0) + slots.length * LIFE_MAINTENANCE_SLOT_MINUTES;
    if (duration <= 0) return;
    rows.push({
      title: edited?.title || group.title,
      duration,
      done: true,
    });
  });
  getVisibleMainTasks().forEach((task) => {
    if (!isLifeMaintenanceTask(task)) return;
    const done = task.lockedFromCompany ? Boolean(task.companyDone) : Boolean(day.main?.[task.id]);
    if (!done) return;
    rows.push({
      title: getEditableItem("main", task)?.title || task.title,
      duration: Number(task.durationMinutes || LIFE_MAINTENANCE_SLOT_MINUTES),
      done: true,
    });
  });
  return rows;
}

function getVirtualFinanceSummaryForDate(dayKey = selectedDate) {
  const companyState = readLifeCompanyState();
  const economy = companyState?.company?.economy || {};
  const transactions = Array.isArray(economy.transactions) ? economy.transactions : [];
  const dateTransactions = transactions.filter((transaction) => transactionDateKey(transaction.createdAt) === dayKey);
  const trades = getSkillMarketTrades().filter((trade) => transactionDateKey(trade.createdAt) === dayKey);
  const companyIncome = dateTransactions
    .filter((item) => item.type === "earn")
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const stockIncome = trades
    .filter((trade) => trade.side === "sell")
    .reduce((sum, trade) => sum + Number(trade.total || (Number(trade.price || 0) * Number(trade.shares || 0))), 0);
  return {
    companyIncome: roundCompanyCoins(companyIncome),
    stockIncome: roundCompanyCoins(stockIncome),
  };
}

function renderInvoiceHtml(invoice) {
  const safe = normalizeSavedInvoices([invoice])[0] || buildDailyInvoice(selectedDate);
  if (safe.billType === "diy") return renderDiyInvoiceHtml(safe);
  if (safe.billType === "ledger") return renderLedgerInvoiceHtml(safe);
  const mainRows = safe.mainTasks.length ? safe.mainTasks : [{ title: "今天还没有主线记录", duration: 0, done: false }];
  const lifeRows = safe.lifeTasks.length ? safe.lifeTasks : [{ title: "今天还没有生命维护记录", duration: 0, done: false }];
  const energyBlocks = renderInvoiceBlocks(safe.energy);
  const moodHearts = renderInvoiceHearts(safe.mood);
  return `
    <p class="invoice-kicker">✦ · 今日也要好好生活 · ✦</p>
    <h2 class="invoice-title">${escapeHtml(safe.title || invoiceTitleForPeriod(safe.period))}</h2>
    <div class="invoice-subtitle"><span>DAILY INVOICE</span></div>
    <div class="invoice-dot-field" aria-hidden="true"></div>
    <div class="invoice-divider"></div>
    <div class="invoice-row"><strong>范围：</strong><span>${escapeHtml(safe.dateLabel || safe.date.replaceAll("-", "/"))} ${escapeHtml(safe.weekday || "")}</span></div>
    <div class="invoice-divider"></div>
    <div class="invoice-row"><strong>公司收入</strong><span>${formatCoins(safe.companyIncome)}</span></div>
    <div class="invoice-row"><strong>股票收益</strong><span>${formatCoins(safe.stockIncome)}</span></div>
    <div class="invoice-divider"></div>
    <section class="invoice-stats">
      <div class="invoice-row"><strong>任务总时长</strong><span>${formatClockDuration(safe.taskMinutes)}</span></div>
      <div class="invoice-row"><strong>能量 ⚡</strong><span>${energyBlocks} ${safe.energy}%</span></div>
      <div class="invoice-row"><strong>情绪 ☺</strong><span>${moodHearts} ${Math.ceil(safe.mood / 20)}/5</span></div>
    </section>
    <h3 class="invoice-section-title">主线任务</h3>
    <ul class="invoice-task-list">${mainRows.map(renderInvoiceTaskRow).join("")}</ul>
    <h3 class="invoice-section-title">生命值维护</h3>
    <ul class="invoice-task-list">${lifeRows.map(renderInvoiceTaskRow).join("")}</ul>
    <div class="invoice-row invoice-total"><strong>合计</strong><span>${formatCoins(safe.totalIncome)}</span></div>
    <p class="invoice-footer">辛苦啦！明天也要元气满满哦！</p>
    <div class="invoice-barcode" aria-hidden="true"></div>
    <div class="invoice-stamp" aria-hidden="true">GOOD<br />JOB</div>
  `;
}

function renderLedgerInvoiceHtml(invoice) {
  const rows = invoice.mainTasks.length ? invoice.mainTasks : [{ title: "还没有生活记账记录", amount: 0, type: "", date: "", done: false }];
  const income = Number(invoice.companyIncome || 0);
  const expense = Number(invoice.stockIncome || 0);
  const balance = Number(invoice.totalIncome || 0);
  return `
    <p class="invoice-kicker">REAL LIFE LEDGER</p>
    <h2 class="invoice-title">生活账单</h2>
    <div class="invoice-subtitle"><span>${escapeHtml(invoice.periodLabel || invoice.dateLabel)}</span></div>
    <div class="invoice-divider"></div>
    <div class="invoice-row"><strong>收入</strong><span>${formatRealCurrency(income)}</span></div>
    <div class="invoice-row"><strong>支出</strong><span>${formatRealCurrency(expense)}</span></div>
    <div class="invoice-row invoice-total"><strong>结余</strong><span>${formatRealCurrency(balance)}</span></div>
    <h3 class="invoice-section-title">记账明细</h3>
    <ul class="invoice-task-list invoice-ledger-list">${rows.map(renderLedgerInvoiceRow).join("")}</ul>
    <p class="invoice-footer">每一笔都算数，生活也在被好好照看。</p>
    <div class="invoice-barcode" aria-hidden="true"></div>
  `;
}

function renderLedgerInvoiceRow(row) {
  const sign = row.type === "income" ? "+" : row.type === "expense" ? "-" : "";
  const amount = row.amount ? `${sign}${formatRealCurrency(row.amount)}` : "○";
  return `
    <li>
      <b>${row.type === "income" ? "收" : row.type === "expense" ? "支" : ""}</b>
      <span>${escapeHtml(row.title)}${row.date ? `<small>${escapeHtml(row.date)}</small>` : ""}</span>
      <em>${escapeHtml(amount)}</em>
    </li>
  `;
}

function renderDiyInvoiceHtml(invoice) {
  return `
    <p class="invoice-kicker">BILL</p>
    <h2 class="invoice-title">账单</h2>
    <div class="invoice-subtitle"><span>IMAGE BILL</span></div>
    <div class="invoice-diy-frame">
      ${invoice.diyImage
        ? `<span class="invoice-diy-mono" style="--diy-aspect:${Number(invoice.diyAspectRatio) || 1}"><img src="${escapeHtml(invoice.diyImage)}" alt="导入的 DIY 账单图片" /></span>`
        : `<p>还没有导入图片</p>`}
    </div>
    <p class="invoice-footer">由发票机生成</p>
  `;
}

function renderInvoiceTaskRow(task) {
  return `
    <li>
      <b>${task.done ? "✓" : ""}</b>
      <span>${escapeHtml(task.title)}</span>
      <em>${task.duration ? formatDuration(task.duration) : "○"}</em>
    </li>
  `;
}

function renderInvoiceBlocks(value) {
  const count = clamp(Math.round((Number(value) || 0) / 10), 0, 10);
  return `${"■".repeat(count)}${"□".repeat(10 - count)}`;
}

function renderInvoiceHearts(value) {
  const count = clamp(Math.ceil((Number(value) || 0) / 20), 0, 5);
  return `${"♥".repeat(count)}${"♡".repeat(5 - count)}`;
}

function formatClockDuration(minutes) {
  const total = Math.max(0, Math.round(Number(minutes) || 0));
  const hours = Math.floor(total / 60);
  const rest = total % 60;
  return `${String(hours).padStart(2, "0")}:${String(rest).padStart(2, "0")}:00`;
}

function openInvoiceDialog(dayKey = selectedDate, preferFresh = false) {
  state.invoices = normalizeSavedInvoices(state.invoices);
  const currentTarget = getInvoicePrintTarget();
  const stored = state.invoices.find((invoice) =>
    invoice.date === dayKey || invoiceUniqueKey(invoice) === dayKey
  );
  currentInvoiceDraft = preferFresh
    ? (currentInvoiceDraft?.date === dayKey || invoiceUniqueKey(currentInvoiceDraft) === dayKey ? currentInvoiceDraft : buildInvoiceForTarget(currentTarget))
    : currentInvoiceDraft?.date === dayKey
    ? currentInvoiceDraft
    : stored || buildInvoiceForTarget(currentTarget);
  const hasStoredStyle = Boolean(currentInvoiceDraft.invoiceStyle || currentInvoiceDraft.style || currentInvoiceDraft.settings);
  if (!hasStoredStyle) currentInvoiceDraft.invoiceStyle = normalizeInvoiceSettings(state.invoiceSettings);
  if (dom.dailyInvoicePreview) {
    dom.dailyInvoicePreview.innerHTML = renderInvoiceHtml(currentInvoiceDraft);
    applyInvoiceSettingsToElement(dom.dailyInvoicePreview, currentInvoiceDraft.invoiceStyle || state.invoiceSettings);
  }
  renderInvoiceDialogActions();
  if (typeof dom.invoiceDialog?.showModal === "function") {
    if (!dom.invoiceDialog.open) dom.invoiceDialog.showModal();
  } else {
    dom.invoiceDialog?.setAttribute("open", "");
  }
}

function renderInvoiceDialogActions() {
  if (!dom.invoiceDeleteDiyButton) return;
  const canDeleteInvoice = Boolean(currentInvoiceDraft);
  dom.invoiceDeleteDiyButton.hidden = !canDeleteInvoice;
  if (canDeleteInvoice) {
    dom.invoiceDeleteDiyButton.dataset.invoiceKey = invoiceUniqueKey(currentInvoiceDraft);
  } else {
    dom.invoiceDeleteDiyButton.removeAttribute("data-invoice-key");
  }
}

function closeInvoiceDialog() {
  closeInvoiceExportMenu();
  if (typeof dom.invoiceDialog?.close === "function") {
    dom.invoiceDialog.close();
  } else {
    dom.invoiceDialog?.removeAttribute("open");
  }
}

function clearPrintedInvoiceFromMachine() {
  const day = ensureDay(selectedDate);
  day.invoicePrintedAt = "";
  currentInvoiceDraft = null;
  if (dom.dailyInvoicePreview) dom.dailyInvoicePreview.innerHTML = "";
  renderInvoicePrinter(day, false);
  renderInvoiceDialogActions();
  closeInvoiceDialog();
}

function openDeleteInvoiceDialog(invoiceKey = "", deleteCurrent = false) {
  const key = invoiceKey || (currentInvoiceDraft ? invoiceUniqueKey(currentInvoiceDraft) : "");
  const invoice = deleteCurrent && currentInvoiceDraft
    ? currentInvoiceDraft
    : state.invoices?.find((item) => invoiceUniqueKey(item) === key) || currentInvoiceDraft;
  pendingInvoiceDelete = {
    key,
    fromBook: Boolean(invoiceKey && !deleteCurrent),
    deleteCurrent,
    billType: invoice?.billType || currentInvoiceDraft?.billType || "",
  };
  if (dom.deleteInvoiceMessage) {
    dom.deleteInvoiceMessage.textContent = deleteCurrent && invoice?.billType === "diy"
      ? "删除后会清空整张 DIY 图片账单，可以重新导入图片生成新账单。"
      : deleteCurrent
        ? "删除后这张账单会从发票机里消失，可以重新生成。"
      : "删除后这张账单会从发票本移除。";
  }
  if (typeof dom.deleteInvoiceDialog?.showModal === "function") {
    if (!dom.deleteInvoiceDialog.open) dom.deleteInvoiceDialog.showModal();
  } else {
    dom.deleteInvoiceDialog?.setAttribute("open", "");
  }
}

function closeDeleteInvoiceDialog() {
  pendingInvoiceDelete = null;
  if (typeof dom.deleteInvoiceDialog?.close === "function") {
    dom.deleteInvoiceDialog.close();
  } else {
    dom.deleteInvoiceDialog?.removeAttribute("open");
  }
}

function confirmDeleteInvoice() {
  if (!pendingInvoiceDelete?.key) return;
  deleteInvoiceByKey(pendingInvoiceDelete.key, pendingInvoiceDelete.billType, pendingInvoiceDelete.deleteCurrent);
  closeDeleteInvoiceDialog();
}

function deleteInvoiceByKey(key, billType = "", deleteCurrent = false) {
  const currentKey = currentInvoiceDraft ? invoiceUniqueKey(currentInvoiceDraft) : "";
  const deletingCurrent = Boolean(key && currentKey === key);
  state.invoices = normalizeSavedInvoices(state.invoices).filter((invoice) => invoiceUniqueKey(invoice) !== key);
  state.invoiceBookLayouts = normalizeInvoiceBookLayouts(state.invoiceBookLayouts, state.invoices);
  const shouldClearCurrentInvoice = Boolean(deleteCurrent && deletingCurrent);
  if (shouldClearCurrentInvoice && billType === "diy") {
    clearDiyInvoiceImageSettings();
  }
  if (shouldClearCurrentInvoice) {
    clearPrintedInvoiceFromMachine();
  }
  saveState();
  renderInvoiceBook();
  renderInvoicePrintControls();
  showToast("账单已删除，可以重新生成。");
}

function clearDiyInvoiceImageSettings() {
  state.invoicePrintSettings = normalizeInvoicePrintSettings(state.invoicePrintSettings);
  state.invoicePrintSettings.diyImage = "";
  state.invoicePrintSettings.diyImageName = "";
  state.invoicePrintSettings.diyAspectRatio = 1;
  state.invoicePrintSettings.billType = "diy";
}

function resetDiyInvoiceDraft() {
  clearDiyInvoiceImageSettings();
  currentInvoiceDraft = buildInvoiceForTarget(getInvoicePrintTarget());
  if (dom.dailyInvoicePreview) {
    dom.dailyInvoicePreview.innerHTML = renderInvoiceHtml(currentInvoiceDraft);
    applyInvoiceSettingsToElement(dom.dailyInvoicePreview, currentInvoiceDraft.invoiceStyle || state.invoiceSettings);
  }
  renderInvoiceDialogActions();
}

function saveCurrentInvoice() {
  const invoice = currentInvoiceDraft || buildDailyInvoice(selectedDate);
  const key = invoiceUniqueKey(invoice);
  state.invoices = normalizeSavedInvoices([
    invoice,
    ...(state.invoices || []).filter((item) => invoiceUniqueKey(item) !== key),
  ]);
  clearPrintedInvoiceFromMachine();
  saveState();
  renderInvoiceBook();
  showToast(`${invoice.title || "账单"} 已保存到发票本。`);
}

function toggleInvoiceExportMenu(button = null) {
  if (!dom.invoiceExportMenu) return;
  const nextOpen = dom.invoiceExportMenu.hidden;
  dom.invoiceExportMenu.hidden = !nextOpen;
  button?.setAttribute("aria-expanded", String(nextOpen));
}

function closeInvoiceExportMenu() {
  if (!dom.invoiceExportMenu) return;
  dom.invoiceExportMenu.hidden = true;
  dom.invoiceDialog?.querySelector("[data-action='toggle-invoice-export-menu']")?.setAttribute("aria-expanded", "false");
}

function exportCurrentInvoice(format = "png") {
  const invoice = currentInvoiceDraft || buildDailyInvoice(selectedDate);
  const style = normalizeInvoiceSettings(invoice.invoiceStyle || state.invoiceSettings);
  const fileBase = `invoice-${invoice.billType || "game"}-${invoice.periodKey || invoice.date}`;
  closeInvoiceExportMenu();
  if (format === "source") {
    exportCurrentInvoiceSource(fileBase, invoice, style);
    return;
  }
  exportSingleInvoiceAsPng(fileBase, invoice, style);
}

async function exportSingleInvoiceAsPng(fileBase, invoice, style) {
  const source = getCurrentInvoiceExportSource();
  if (!source) {
    showToast("找不到要导出的发票。");
    return;
  }
  document.body.classList.add("exporting-invoice");
  let exportLayer = null;
  try {
    if (document.fonts?.ready) await document.fonts.ready;
    exportLayer = document.createElement("div");
    exportLayer.className = "invoice-export-layer";
    const clone = source.cloneNode(true);
    clone.classList.add("invoice-export-clone");
    clone.removeAttribute("id");
    clone.querySelectorAll("[id]").forEach((item) => item.removeAttribute("id"));
    applyInvoiceSettingsToElement(clone, invoice?.invoiceStyle || style);
    exportLayer.appendChild(clone);
    document.body.appendChild(exportLayer);
    await waitForInvoiceImages(clone);
    await nextAnimationFrame();
    await nextAnimationFrame();
    const width = Math.ceil(clone.scrollWidth || clone.getBoundingClientRect().width || 276);
    const height = Math.ceil(clone.scrollHeight || clone.getBoundingClientRect().height || 760);
    await exportInvoiceCloneToPng(clone, width, height, fileBase, invoice, style);
  } catch (error) {
    exportInvoiceCanvasPng(invoice, fileBase, style);
  } finally {
    exportLayer?.remove();
    document.body.classList.remove("exporting-invoice");
  }
}

function getCurrentInvoiceExportSource() {
  const preview = dom.invoiceDialog?.open
    ? dom.invoiceDialog.querySelector(".invoice-export-target, .daily-invoice")
    : null;
  return preview
    || document.querySelector(".invoice-export-target")
    || document.querySelector(".daily-invoice")
    || document.querySelector(".invoice-paper")
    || document.querySelector(".invoice-receipt")
    || document.querySelector(".invoice-ticket");
}

function nextAnimationFrame() {
  return new Promise((resolve) => requestAnimationFrame(resolve));
}

function waitForInvoiceImages(element) {
  const images = [...(element?.querySelectorAll("img") || [])];
  return Promise.all(images.map((image) => {
    if (image.complete) return Promise.resolve();
    return new Promise((resolve) => {
      image.onload = resolve;
      image.onerror = resolve;
    });
  }));
}

function exportInvoiceCloneToPng(clone, width, height, fileBase, invoice, style) {
  const svg = buildInvoiceSourceSvg(clone, width, height, style);
  if (!svg) {
    exportInvoiceCanvasPng(invoice, fileBase, style);
    return Promise.resolve();
  }
  const { width: exportWidth, height: exportHeight } = getInvoiceExportSize(width, height);
  const image = new Image();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
  return new Promise((resolve) => {
    image.onload = () => {
      try {
        const scale = Math.min(Math.max(2, Math.ceil(window.devicePixelRatio || 1)), 3);
        const canvas = document.createElement("canvas");
        canvas.width = exportWidth * scale;
        canvas.height = exportHeight * scale;
        const context = canvas.getContext("2d");
        context.scale(scale, scale);
        context.clearRect(0, 0, exportWidth, exportHeight);
        context.drawImage(image, 0, 0, exportWidth, exportHeight);
        URL.revokeObjectURL(url);
        downloadInvoicePngFromCanvas(canvas, fileBase, () => exportInvoiceCanvasPng(invoice, fileBase, style));
      } catch (error) {
        URL.revokeObjectURL(url);
        exportInvoiceCanvasPng(invoice, fileBase, style);
      } finally {
        resolve();
      }
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      exportInvoiceCanvasPng(invoice, fileBase, style);
      resolve();
    };
    image.src = url;
  });
}

async function exportCurrentInvoiceSource(fileBase, invoice, style) {
  const source = getCurrentInvoiceExportSource();
  if (!source) {
    showToast("找不到要导出的发票。");
    return;
  }
  let exportLayer = null;
  try {
    if (document.fonts?.ready) await document.fonts.ready;
    exportLayer = document.createElement("div");
    exportLayer.className = "invoice-export-layer";
    const clone = source.cloneNode(true);
    clone.classList.add("invoice-export-clone");
    clone.removeAttribute("id");
    clone.querySelectorAll("[id]").forEach((item) => item.removeAttribute("id"));
    applyInvoiceSettingsToElement(clone, invoice?.invoiceStyle || style);
    exportLayer.appendChild(clone);
    document.body.appendChild(exportLayer);
    await waitForInvoiceImages(clone);
    await nextAnimationFrame();
    await nextAnimationFrame();
    const width = Math.ceil(clone.scrollWidth || clone.getBoundingClientRect().width || 276);
    const height = Math.ceil(clone.scrollHeight || clone.getBoundingClientRect().height || 760);
    const svg = buildInvoiceSourceSvg(clone, width, height, style);
    if (!svg) {
      showToast("原文件导出失败，请再试一次。");
      return;
    }
    downloadTextFile(`${fileBase}.svg`, svg, "image/svg+xml;charset=utf-8");
    clearPrintedInvoiceFromMachine();
    saveState();
    showToast("发票原文件已导出。");
  } finally {
    exportLayer?.remove();
  }
}

const INVOICE_EXPORT_PADDING = 14;

function getInvoiceExportSize(width, height) {
  return {
    width: Math.ceil(width + INVOICE_EXPORT_PADDING * 2),
    height: Math.ceil(height + INVOICE_EXPORT_PADDING * 2),
  };
}

function buildInvoiceSourceSvg(clone, width, height, style) {
  const { width: exportWidth, height: exportHeight } = getInvoiceExportSize(width, height);
  const css = invoiceExportCss(style);
  const serialized = new XMLSerializer().serializeToString(clone);
  const markup = `
    <div xmlns="http://www.w3.org/1999/xhtml" style="box-sizing:border-box;width:${exportWidth}px;height:${exportHeight}px;padding:${INVOICE_EXPORT_PADDING}px;background:transparent;overflow:visible;">
      <style>${css}</style>
      ${serialized}
    </div>
  `;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${exportWidth}" height="${exportHeight}" viewBox="0 0 ${exportWidth} ${exportHeight}"><foreignObject width="100%" height="100%">${markup}</foreignObject></svg>`;
}

function downloadTextFile(filename, content, type = "text/plain;charset=utf-8") {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1200);
}

function downloadInvoicePngFromCanvas(canvas, fileBase, fallback = null) {
  try {
    canvas.toBlob((blob) => {
      if (!blob) {
        if (typeof fallback === "function") fallback();
        else showToast("导出失败，请再试一次。");
        return;
      }
      const pngUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = `${fileBase}.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(pngUrl), 1200);
      window.setTimeout(() => {
        clearPrintedInvoiceFromMachine();
        saveState();
        showToast("发票 PNG 已导出。");
      }, 120);
    }, "image/png");
  } catch (error) {
    if (typeof fallback === "function") fallback();
    else showToast("导出失败，请再试一次。");
  }
}

function exportInvoiceCanvasPng(invoice, fileBase, style) {
  const safe = normalizeSavedInvoices([invoice])[0] || buildDailyInvoice(selectedDate);
  const scale = Math.max(2, Math.ceil(window.devicePixelRatio || 1));
  const layout = invoiceCanvasLayout(safe);
  const { width, height } = layout;
  const canvas = document.createElement("canvas");
  canvas.width = width * scale;
  canvas.height = height * scale;
  const context = canvas.getContext("2d");
  context.scale(scale, scale);
  context.clearRect(0, 0, width, height);
  drawInvoiceCanvasBackground(context, layout, style);
  drawInvoiceCanvasContent(context, safe, layout, style);
  if (safe.billType !== "diy" || !safe.diyImage) {
    downloadInvoicePngFromCanvas(canvas, fileBase);
    return;
  }
  const image = new Image();
  image.onload = () => {
    const frame = layout.diyFrame;
    context.save();
    context.drawImage(image, frame.x + 8, frame.y + 8, frame.width - 16, frame.height - 16);
    context.restore();
    downloadInvoicePngFromCanvas(canvas, fileBase);
  };
  image.onerror = () => downloadInvoicePngFromCanvas(canvas, fileBase);
  image.src = safe.diyImage;
}

function invoiceCanvasLayout(invoice) {
  const paperWidth = 316;
  const paperX = 16;
  const bodyY = 24;
  const contentX = paperX + 20;
  const contentWidth = paperWidth - 40;
  const mainRows = invoice.mainTasks?.length ? invoice.mainTasks : [{ title: "今天还没有主线记录", duration: 0, done: false }];
  const lifeRows = invoice.lifeTasks?.length ? invoice.lifeTasks : [{ title: "今天还没有生命维护记录", duration: 0, done: false }];
  const ledgerRows = invoice.mainTasks?.length ? invoice.mainTasks : [{ title: "还没有生活记账记录", amount: 0, type: "", date: "", done: false }];
  let bodyHeight = 0;
  let diyFrame = null;
  if (invoice.billType === "diy") {
    const imageHeight = clamp(Math.round(contentWidth / (Number(invoice.diyAspectRatio) || 1)), 190, 430);
    bodyHeight = 30 + 11 + 44 + 38 + imageHeight + 28 + 12 + 26;
    diyFrame = { x: contentX, y: bodyY + 30 + 11 + 44 + 38, width: contentWidth, height: imageHeight };
  } else if (invoice.billType === "ledger") {
    bodyHeight = 30 + 11 + 44 + 38 + 25 + 63 + 35 + Math.min(ledgerRows.length, 10) * 18 + 20 + 12 + 50 + 26;
  } else {
    bodyHeight = 30 + 11 + 44 + 38 + 55 + 25 + 16 + 25 + 42 + 25 + 86 + 27
      + Math.min(mainRows.length, 10) * 18 + 27 + Math.min(lifeRows.length, 10) * 18 + 35 + 12 + 50 + 26;
  }
  return {
    width: paperWidth + 32,
    height: bodyHeight + 48,
    paperX,
    bodyY,
    paperWidth,
    bodyHeight,
    contentX,
    contentWidth,
    diyFrame,
  };
}

function drawInvoiceCanvasBackground(context, layout, style) {
  const paper = hexToRgb(style.paperColor);
  const ink = hexToRgb(style.inkColor);
  const material = style.material;
  const soft = material === "kraft" ? mixRgb(paper, { r: 255, g: 243, b: 207 }, 0.28) : mixRgb(paper, { r: 255, g: 255, b: 255 }, 0.18);
  const paperAlpha = material === "translucent" ? 0.56 : 1;
  const { paperX, bodyY, paperWidth, bodyHeight } = layout;
  context.save();
  context.shadowColor = material === "kraft" ? "rgba(92, 54, 24, 0.2)" : "rgba(18, 11, 31, 0.18)";
  context.shadowBlur = 18;
  context.shadowOffsetY = 8;
  context.globalAlpha = paperAlpha;
  context.fillStyle = rgbCss(paper);
  context.fillRect(paperX, bodyY, paperWidth, bodyHeight);
  context.restore();

  context.save();
  context.globalAlpha = paperAlpha;
  const gradient = context.createLinearGradient(0, bodyY, 0, bodyY + bodyHeight);
  gradient.addColorStop(0, rgbCss(soft));
  gradient.addColorStop(1, rgbCss(paper));
  context.fillStyle = gradient;
  context.fillRect(paperX, bodyY, paperWidth, bodyHeight);
  context.restore();

  context.save();
  context.globalAlpha = material === "translucent" ? 0.92 : 1;
  context.fillStyle = rgbCss(material === "translucent" ? mixRgb(paper, { r: 255, g: 255, b: 255 }, 0.08) : paper);
  drawInvoiceCanvasTeeth(context, paperX, bodyY, paperWidth, bodyHeight);
  context.fill();
  context.restore();

  drawCanvasDotPattern(context, paperX + 14, bodyY + 18, paperWidth - 28, bodyHeight - 36, ink, material === "kraft" ? 0.13 : 0.08, 13, 14);
}

function drawInvoiceCanvasTeeth(context, x, y, width, height) {
  const tooth = 14;
  const toothHeight = 8;
  context.beginPath();
  context.moveTo(x, y);
  for (let current = x; current < x + width; current += tooth) {
    const mid = Math.min(current + tooth / 2, x + width);
    const end = Math.min(current + tooth, x + width);
    context.lineTo(mid, y - toothHeight);
    context.lineTo(end, y);
  }
  context.closePath();
  context.moveTo(x + width, y + height);
  for (let current = x + width; current > x; current -= tooth) {
    const mid = Math.max(current - tooth / 2, x);
    const end = Math.max(current - tooth, x);
    context.lineTo(mid, y + height + toothHeight);
    context.lineTo(end, y + height);
  }
  context.closePath();
}

function drawCanvasDotPattern(context, x, y, width, height, color, alpha = 0.08, gapX = 10, gapY = 10) {
  context.save();
  context.fillStyle = rgbaCss(color, alpha);
  for (let dotX = x; dotX <= x + width; dotX += gapX) {
    for (let dotY = y; dotY <= y + height; dotY += gapY) {
      context.beginPath();
      context.arc(dotX, dotY, 1, 0, Math.PI * 2);
      context.fill();
    }
  }
  context.restore();
}

function drawInvoiceCanvasContent(context, invoice, layout, style) {
  const ink = hexToRgb(style.inkColor);
  const inkColor = rgbCss(ink);
  const { contentX, contentWidth, bodyY, paperX, paperWidth, bodyHeight } = layout;
  let y = bodyY + 30;
  const center = paperX + paperWidth / 2;
  drawCanvasText(context, invoice.billType === "ledger" ? "REAL LIFE LEDGER" : invoice.billType === "diy" ? "BILL" : "✦ · 今日也要好好生活 · ✦", center, y, {
    size: 8,
    weight: 1000,
    color: inkColor,
    align: "center",
    maxWidth: contentWidth,
    letterSpacing: 1,
  });
  y += 23;
  const title = invoice.billType === "ledger" ? "生活账单" : invoice.billType === "diy" ? "账单" : invoice.title || invoiceTitleForPeriod(invoice.period);
  drawCanvasText(context, title, center, y, {
    size: 32,
    minSize: 22,
    weight: 1000,
    color: inkColor,
    align: "center",
    maxWidth: contentWidth,
    letterSpacing: 5,
  });
  y += 44;
  drawCanvasSubtitle(context, invoice.billType === "ledger" || invoice.billType === "diy" ? invoice.periodLabel || invoice.dateLabel || "IMAGE BILL" : "DAILY INVOICE", contentX, y, contentWidth, ink);
  y += 38;
  if (invoice.billType === "diy") {
    const frame = layout.diyFrame;
    drawCanvasRoundedRect(context, frame.x, frame.y, frame.width, frame.height, 8, inkColor, 2);
    drawCanvasText(context, "由发票机生成", center, bodyY + bodyHeight - 38, {
      size: 8,
      weight: 1000,
      color: inkColor,
      align: "center",
      maxWidth: contentWidth,
      letterSpacing: 1,
    });
    return;
  }
  if (invoice.billType !== "ledger") {
    drawCanvasDotPattern(context, contentX, y, contentWidth, 42, ink, 0.68, 10, 10);
    y += 55;
    drawCanvasDivider(context, contentX, y, contentWidth, inkColor);
    y += 13;
    drawCanvasInvoiceRow(context, "范围：", `${invoice.dateLabel || invoice.date.replaceAll("-", "/")} ${invoice.weekday || ""}`.trim(), contentX, y, contentWidth, inkColor);
    y += 28;
  }
  drawCanvasDivider(context, contentX, y, contentWidth, inkColor);
  y += 13;
  if (invoice.billType === "ledger") {
    drawCanvasInvoiceRow(context, "收入", formatRealCurrency(invoice.companyIncome), contentX, y, contentWidth, inkColor);
    y += 21;
    drawCanvasInvoiceRow(context, "支出", formatRealCurrency(invoice.stockIncome), contentX, y, contentWidth, inkColor);
    y += 21;
    drawCanvasInvoiceRow(context, "结余", formatRealCurrency(invoice.totalIncome), contentX, y, contentWidth, inkColor);
    y += 28;
    drawCanvasSectionTitle(context, "记账明细", contentX, y, contentWidth, inkColor);
    y += 27;
    const rows = invoice.mainTasks?.length ? invoice.mainTasks : [{ title: "还没有生活记账记录", amount: 0, type: "", date: "", done: false }];
    y = drawCanvasTaskRows(context, rows, contentX, y, contentWidth, inkColor, "ledger");
    drawCanvasText(context, "每一笔都算数，生活也在被好好照看。", center, bodyY + bodyHeight - 88, {
      size: 8,
      weight: 1000,
      color: inkColor,
      align: "center",
      maxWidth: contentWidth,
    });
    drawCanvasBarcode(context, contentX, bodyY + bodyHeight - 62, inkColor);
    return;
  }
  drawCanvasInvoiceRow(context, "公司收入", formatCoins(invoice.companyIncome), contentX, y, contentWidth, inkColor);
  y += 21;
  drawCanvasInvoiceRow(context, "股票收益", formatCoins(invoice.stockIncome), contentX, y, contentWidth, inkColor);
  y += 28;
  drawCanvasDivider(context, contentX, y, contentWidth, inkColor);
  y += 13;
  y = drawCanvasStatsBox(context, invoice, contentX, y, contentWidth, inkColor);
  y += 14;
  drawCanvasSectionTitle(context, "主线任务", contentX, y, contentWidth, inkColor);
  y += 27;
  const mainRows = invoice.mainTasks?.length ? invoice.mainTasks : [{ title: "今天还没有主线记录", duration: 0, done: false }];
  y = drawCanvasTaskRows(context, mainRows, contentX, y, contentWidth, inkColor, "task");
  y += 10;
  drawCanvasSectionTitle(context, "生命值维护", contentX, y, contentWidth, inkColor);
  y += 27;
  const lifeRows = invoice.lifeTasks?.length ? invoice.lifeTasks : [{ title: "今天还没有生命维护记录", duration: 0, done: false }];
  y = drawCanvasTaskRows(context, lifeRows, contentX, y, contentWidth, inkColor, "task");
  y += 16;
  drawCanvasInvoiceRow(context, "合计", formatCoins(invoice.totalIncome), contentX, y, contentWidth, inkColor, 17);
  drawCanvasText(context, "辛苦啦！明天也要元气满满哦！", center, bodyY + bodyHeight - 88, {
    size: 8,
    weight: 1000,
    color: inkColor,
    align: "center",
    maxWidth: contentWidth,
  });
  drawCanvasBarcode(context, contentX, bodyY + bodyHeight - 62, inkColor);
  drawCanvasStamp(context, paperX + paperWidth - 78, bodyY + bodyHeight - 84, inkColor);
}

function drawCanvasText(context, text, x, y, options = {}) {
  const size = options.size || 12;
  const minSize = options.minSize || Math.max(8, size - 8);
  const weight = options.weight || 900;
  const family = options.family || "Menlo, SFMono-Regular, PingFang SC, monospace";
  const align = options.align || "left";
  const color = options.color || "#000";
  const letterSpacing = Number(options.letterSpacing) || 0;
  let fontSize = size;
  context.save();
  context.fillStyle = color;
  context.textAlign = align;
  context.textBaseline = "top";
  do {
    context.font = `${weight} ${fontSize}px ${family}`;
    if (!options.maxWidth || measureCanvasLetterText(context, text, letterSpacing) <= options.maxWidth || fontSize <= minSize) break;
    fontSize -= 1;
  } while (fontSize > minSize);
  if (letterSpacing) {
    drawCanvasLetterText(context, String(text), x, y, letterSpacing, align);
  } else {
    context.fillText(String(text), x, y, options.maxWidth);
  }
  context.restore();
}

function measureCanvasLetterText(context, text, letterSpacing = 0) {
  const value = String(text);
  return context.measureText(value).width + Math.max(0, value.length - 1) * letterSpacing;
}

function drawCanvasLetterText(context, text, x, y, letterSpacing = 0, align = "left") {
  const value = String(text);
  const totalWidth = measureCanvasLetterText(context, value, letterSpacing);
  let currentX = align === "center" ? x - totalWidth / 2 : align === "right" ? x - totalWidth : x;
  [...value].forEach((char) => {
    context.fillText(char, currentX, y);
    currentX += context.measureText(char).width + letterSpacing;
  });
}

function drawCanvasSubtitle(context, text, x, y, width, ink) {
  const color = rgbCss(ink);
  context.save();
  context.strokeStyle = color;
  context.lineWidth = 1.5;
  context.beginPath();
  context.moveTo(x, y + 8);
  context.lineTo(x + 82, y + 8);
  context.moveTo(x + width - 82, y + 8);
  context.lineTo(x + width, y + 8);
  context.stroke();
  context.restore();
  drawCanvasText(context, text, x + width / 2, y, {
    size: 11,
    weight: 1000,
    color,
    align: "center",
    maxWidth: width - 176,
    letterSpacing: 2,
  });
}

function drawCanvasDivider(context, x, y, width, color) {
  context.save();
  context.strokeStyle = color;
  context.lineWidth = 1.5;
  context.setLineDash([8, 5]);
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x + width, y);
  context.stroke();
  context.restore();
}

function drawCanvasInvoiceRow(context, label, value, x, y, width, color, size = 13) {
  drawCanvasText(context, label, x, y, { size, weight: 1000, color, maxWidth: width * 0.52 });
  drawCanvasText(context, value, x + width, y, { size, weight: 1000, color, align: "right", maxWidth: width * 0.48 });
}

function drawCanvasStatsBox(context, invoice, x, y, width, color) {
  const height = 82;
  drawCanvasRoundedRect(context, x, y, width, height, 8, color, 1.6);
  drawCanvasInvoiceRow(context, "任务总时长", formatClockDuration(invoice.taskMinutes), x + 10, y + 10, width - 20, color, 13);
  drawCanvasInvoiceRow(context, "能量 ⚡", `${renderInvoiceBlocks(invoice.energy)} ${invoice.energy}%`, x + 10, y + 32, width - 20, color, 13);
  drawCanvasInvoiceRow(context, "情绪 ☺", `${renderInvoiceHearts(invoice.mood)} ${Math.ceil(invoice.mood / 20)}/5`, x + 10, y + 54, width - 20, color, 13);
  return y + height;
}

function drawCanvasSectionTitle(context, title, x, y, width, color) {
  drawCanvasText(context, title, x, y, { size: 14, weight: 1000, color, maxWidth: width });
  context.save();
  context.strokeStyle = color;
  context.lineWidth = 1.5;
  context.beginPath();
  context.moveTo(x, y + 22);
  context.lineTo(x + width, y + 22);
  context.stroke();
  context.restore();
}

function drawCanvasTaskRows(context, rows, x, y, width, color, type) {
  rows.slice(0, 10).forEach((row) => {
    if (type === "ledger") {
      const label = row.type === "income" ? "收" : row.type === "expense" ? "支" : "";
      const amount = row.amount ? `${row.type === "income" ? "+" : row.type === "expense" ? "-" : ""}${formatRealCurrency(row.amount)}` : "○";
      drawCanvasTaskBox(context, x, y, color, label);
      drawCanvasText(context, row.title, x + 25, y + 1, { size: 11, weight: 900, color, maxWidth: width - 92 });
      drawCanvasText(context, amount, x + width, y + 1, { size: 11, weight: 900, color, align: "right", maxWidth: 72 });
    } else {
      drawCanvasTaskBox(context, x, y, color, row.done ? "✓" : "");
      drawCanvasText(context, row.title, x + 22, y + 1, { size: 11, weight: 900, color, maxWidth: width - 92 });
      drawCanvasText(context, row.duration ? formatDuration(row.duration) : "○", x + width, y + 1, { size: 11, weight: 900, color, align: "right", maxWidth: 68 });
    }
    y += 18;
  });
  return y;
}

function drawCanvasTaskBox(context, x, y, color, label = "") {
  context.save();
  context.strokeStyle = color;
  context.lineWidth = 1.5;
  context.strokeRect(x, y, 14, 14);
  if (label) {
    context.fillStyle = color;
    context.font = "900 9px Menlo, SFMono-Regular, PingFang SC, monospace";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(label, x + 7, y + 7.5);
  }
  context.restore();
}

function drawCanvasRoundedRect(context, x, y, width, height, radius, color, lineWidth = 1.5) {
  context.save();
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  if (typeof context.roundRect === "function") {
    context.beginPath();
    context.roundRect(x, y, width, height, radius);
    context.stroke();
  } else {
    context.strokeRect(x, y, width, height);
  }
  context.restore();
}

function drawCanvasBarcode(context, x, y, color) {
  context.save();
  context.fillStyle = color;
  let current = x;
  const pattern = [2, 2, 1, 4, 2, 3, 1, 2, 3, 4, 1, 3, 2, 2, 1, 5];
  pattern.forEach((bar, index) => {
    if (index % 2 === 0) context.fillRect(current, y, bar, 36);
    current += bar;
  });
  context.restore();
}

function drawCanvasStamp(context, x, y, color) {
  context.save();
  context.translate(x + 29, y + 29);
  context.rotate(-12 * Math.PI / 180);
  context.strokeStyle = color;
  context.lineWidth = 2;
  context.beginPath();
  context.arc(0, 0, 29, 0, Math.PI * 2);
  context.stroke();
  context.fillStyle = color;
  context.font = "900 11px Menlo, SFMono-Regular, PingFang SC, monospace";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("GOOD", 0, -6);
  context.fillText("JOB", 0, 8);
  context.restore();
}

function rgbCss(color) {
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

function rgbaCss(color, alpha) {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
}

function mixRgb(base, blend, amount) {
  const ratio = clamp(Number(amount) || 0, 0, 1);
  return {
    r: Math.round(base.r * (1 - ratio) + blend.r * ratio),
    g: Math.round(base.g * (1 - ratio) + blend.g * ratio),
    b: Math.round(base.b * (1 - ratio) + blend.b * ratio),
  };
}

function invoiceExportCss(style) {
  const paper = hexToRgb(style.paperColor);
  const ink = hexToRgb(style.inkColor);
  const paperSoft = rgbCss(mixRgb(paper, { r: 255, g: 255, b: 255 }, 0.18));
  const inkDot = rgbaCss(ink, 0.1);
  const kraftSoft = rgbCss(mixRgb(paper, { r: 255, g: 243, b: 207 }, 0.28));
  const translucentTop = rgbaCss(paper, 0.68);
  const translucentBottom = rgbaCss(paper, 0.48);
  const translucentTooth = rgbCss(mixRgb(paper, { r: 255, g: 255, b: 255 }, 0.08));
  return `
    *, *::before, *::after { box-sizing: border-box; }
    body { margin: 0; min-height: 100vh; display: grid; place-items: start center; padding: 24px; background: transparent; font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif; }
    .daily-invoice { --invoice-paper: ${style.paperColor}; --invoice-ink: ${style.inkColor}; --invoice-paper-soft: ${paperSoft}; position: relative; width: 276px; max-width:100%; padding: 30px 20px 26px; color: var(--invoice-ink); background: radial-gradient(circle at 18% 20%, ${inkDot} 0 1px, transparent 1.5px) 0 0/9px 9px, linear-gradient(180deg, var(--invoice-paper-soft), var(--invoice-paper)); border: 0; border-radius: 2px; box-shadow: 0 8px 22px rgba(18,11,31,.18); font-family: Menlo, monospace; }
    .daily-invoice[data-material="kraft"]{--invoice-paper-soft:${kraftSoft};background:radial-gradient(circle at 14% 18%,rgba(92,54,24,.16) 0 1px,transparent 1.5px) 0 0/7px 7px,radial-gradient(circle at 72% 58%,rgba(92,54,24,.12) 0 1px,transparent 1.5px) 0 0/11px 11px,linear-gradient(180deg,var(--invoice-paper-soft),var(--invoice-paper))}.daily-invoice[data-material="translucent"]{--invoice-tooth-paper:${translucentTooth};backdrop-filter:blur(4px);background:linear-gradient(180deg,${translucentTop},${translucentBottom});box-shadow:0 12px 26px rgba(42,80,110,.18),inset 0 0 0 1px rgba(255,255,255,.42)}
    .daily-invoice:before,.daily-invoice:after{position:absolute;left:0;right:0;height:9px;content:"";background:linear-gradient(135deg,transparent 0 6px,var(--invoice-tooth-paper,var(--invoice-paper)) 6px) 0 0/14px 9px repeat-x,linear-gradient(225deg,transparent 0 6px,var(--invoice-tooth-paper,var(--invoice-paper)) 6px) 7px 0/14px 9px repeat-x}.daily-invoice:before{top:-8px}.daily-invoice:after{bottom:-8px;transform:rotate(180deg)}.invoice-kicker,.invoice-footer{margin:0;font-size:8px;line-height:1.35;font-weight:1000;text-align:center;letter-spacing:1px}.invoice-title{margin:12px 0 0;font-size:32px;line-height:1;font-weight:1000;letter-spacing:5px;text-align:center}.invoice-subtitle{display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center;margin:8px 0 16px;font-size:11px;font-weight:1000;letter-spacing:2px}.invoice-subtitle:before,.invoice-subtitle:after{content:"";height:1.5px;background:var(--invoice-ink)}.invoice-dot-field{height:42px;margin:0 0 13px;background:radial-gradient(circle,var(--invoice-ink) 0 1px,transparent 1.5px) 0 0/10px 10px;opacity:.68}.invoice-divider{height:1.5px;margin:12px 0;background:repeating-linear-gradient(90deg,var(--invoice-ink) 0 8px,transparent 8px 13px)}.invoice-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;margin:8px 0;font-size:13px;line-height:1.25;font-weight:1000}.invoice-row strong,.invoice-row span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.invoice-stats{display:grid;gap:8px;margin:12px 0;padding:10px;border:1.6px solid var(--invoice-ink);border-radius:8px}.invoice-section-title{margin:14px 0 8px;padding-bottom:5px;border-bottom:1.5px solid var(--invoice-ink);font-size:14px;font-weight:1000}.invoice-task-list{display:grid;gap:6px;margin:0;padding:0;list-style:none}.invoice-task-list li{display:grid;grid-template-columns:15px minmax(0,1fr) auto;gap:7px;align-items:center;min-width:0;font-size:11px;font-weight:900}.invoice-task-list b{display:grid;place-items:center;width:14px;height:14px;border:1.5px solid var(--invoice-ink);border-radius:3px;font-size:10px;line-height:1}.invoice-task-list span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.invoice-task-list small{display:block;margin-top:2px;font-size:8px;opacity:.7}.invoice-task-list em{font-style:normal}.invoice-ledger-list li{grid-template-columns:18px minmax(0,1fr) auto}.invoice-diy-frame{display:grid;min-height:300px;place-items:center;margin:14px 0;overflow:hidden;border:2px solid var(--invoice-ink);border-radius:8px;background:transparent}.invoice-diy-mono{position:relative;display:block;width:100%;aspect-ratio:var(--diy-aspect,1);max-height:520px;overflow:hidden;background:transparent;line-height:0}.invoice-diy-frame img{display:block;width:100%;height:100%;object-fit:contain}.invoice-diy-frame p{margin:0;padding:18px;font-size:12px;font-weight:1000;text-align:center}.invoice-total{margin-top:14px;padding-top:12px;border-top:1.8px solid var(--invoice-ink);font-size:17px}.invoice-barcode{width:112px;height:36px;margin-top:14px;background:repeating-linear-gradient(90deg,var(--invoice-ink) 0 2px,transparent 2px 4px,var(--invoice-ink) 4px 5px,transparent 5px 9px)}.invoice-stamp{position:absolute;right:20px;bottom:26px;display:grid;place-items:center;width:58px;height:58px;border:2px solid var(--invoice-ink);border-radius:50%;font-size:11px;line-height:1;font-weight:1000;text-align:center;transform:rotate(-12deg)}
  `;
}

function renderInvoiceForExport(invoice) {
  const safe = normalizeSavedInvoices([invoice])[0] || buildDailyInvoice(selectedDate);
  return `<div class="daily-invoice invoice-export-target" ${invoiceStyleAttributes(safe.invoiceStyle)}>${renderInvoiceHtml(safe)}</div>`;
}

function renderInvoiceBook() {
  state.invoices = normalizeSavedInvoices(state.invoices);
  state.invoiceBookLayouts = normalizeInvoiceBookLayouts(state.invoiceBookLayouts, state.invoices);
  if (dom.invoiceBookCount) dom.invoiceBookCount.textContent = `${state.invoices.length} 张`;
  if (!dom.invoiceBookList) return;
  if (!state.invoices.length) {
    dom.invoiceBookList.innerHTML = `<p class="ledger-empty">还没有保存过发票。回到首页按发票机，就可以把选中日期打印成发票。</p>`;
    return;
  }
  dom.invoiceBookList.innerHTML = state.invoices.map((invoice, index) => {
    const key = invoiceUniqueKey(invoice);
    const layout = state.invoiceBookLayouts[key] || invoiceBookDefaultLayout(index);
    state.invoiceBookLayouts[key] = layout;
    return `
    <article
      class="invoice-book-ticket"
      data-invoice-card="${escapeHtml(key)}"
      style="--ticket-x:${layout.x}px;--ticket-y:${layout.y}px;--ticket-scale:${layout.scale};--ticket-rotate:${layout.rotate}deg;--ticket-z:${index + 1};"
      aria-label="${escapeHtml(invoice.title || invoice.dateLabel || invoiceDateLabelForPeriod(invoice.date, invoice.period))} 发票"
    >
      ${renderInvoiceForExport(invoice)}
      <button class="invoice-ticket-resize" type="button" data-invoice-resize aria-label="缩放发票">↘</button>
    </article>
  `;
  }).join("");
}

function startInvoiceBookInteraction(event) {
  const ticket = event.target.closest?.("[data-invoice-card]");
  if (!ticket || !dom.invoiceBookDialog?.open) return;
  event.preventDefault();
  const date = ticket.dataset.invoiceCard;
  state.invoiceBookLayouts = normalizeInvoiceBookLayouts(state.invoiceBookLayouts, state.invoices);
  const layout = normalizeInvoiceBookLayout(state.invoiceBookLayouts[date], invoiceBookDefaultLayout(0));
  selectInvoiceBookTicket(ticket);
  invoiceBookLongPressFired = false;
  window.clearTimeout(invoiceBookLongPressTimer);
  invoiceBookInteraction = {
    date,
    ticket,
    mode: event.target.closest("[data-invoice-resize]") ? "resize" : "drag",
    startX: event.clientX,
    startY: event.clientY,
    layout,
    moved: false,
  };
  if (invoiceBookInteraction.mode !== "resize") {
    invoiceBookLongPressTimer = window.setTimeout(() => {
      invoiceBookLongPressFired = true;
      invoiceBookInteraction = null;
      ticket.classList.remove("is-moving");
      saveState();
      openInvoiceDialog(date);
    }, 520);
  }
  ticket.setPointerCapture?.(event.pointerId);
  ticket.classList.add("is-moving");
}

function moveInvoiceBookInteraction(event) {
  if (!invoiceBookInteraction) return;
  event.preventDefault();
  const dx = event.clientX - invoiceBookInteraction.startX;
  const dy = event.clientY - invoiceBookInteraction.startY;
  if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
    invoiceBookInteraction.moved = true;
    window.clearTimeout(invoiceBookLongPressTimer);
  }
  const next = { ...invoiceBookInteraction.layout };
  if (invoiceBookInteraction.mode === "resize") {
    next.scale = clamp(invoiceBookInteraction.layout.scale + (dx - dy) / 260, 0.26, 1.35);
  } else {
    next.x = clamp(invoiceBookInteraction.layout.x + dx, -160, 760);
    next.y = clamp(invoiceBookInteraction.layout.y + dy, -160, 900);
  }
  applyInvoiceBookTicketLayout(invoiceBookInteraction.ticket, next);
  state.invoiceBookLayouts[invoiceBookInteraction.date] = next;
}

function finishInvoiceBookInteraction() {
  if (!invoiceBookInteraction) return;
  window.clearTimeout(invoiceBookLongPressTimer);
  if (!invoiceBookInteraction.moved && !invoiceBookLongPressFired) {
    selectInvoiceBookTicket(invoiceBookInteraction.ticket);
  }
  invoiceBookInteraction.ticket.classList.remove("is-moving");
  invoiceBookInteraction = null;
  saveState();
}

function handleInvoiceBookWheel(event) {
  const ticket = event.target.closest?.("[data-invoice-card]");
  if (!ticket) return;
  event.preventDefault();
  const date = ticket.dataset.invoiceCard;
  state.invoiceBookLayouts = normalizeInvoiceBookLayouts(state.invoiceBookLayouts, state.invoices);
  const layout = normalizeInvoiceBookLayout(state.invoiceBookLayouts[date], invoiceBookDefaultLayout(0));
  const next = {
    ...layout,
    scale: clamp(layout.scale + (event.deltaY < 0 ? 0.05 : -0.05), 0.26, 1.35),
  };
  state.invoiceBookLayouts[date] = next;
  applyInvoiceBookTicketLayout(ticket, next);
  window.clearTimeout(editSaveTimer);
  editSaveTimer = window.setTimeout(saveState, 180);
}

function applyInvoiceBookTicketLayout(ticket, layout) {
  if (!ticket) return;
  ticket.style.setProperty("--ticket-x", `${layout.x}px`);
  ticket.style.setProperty("--ticket-y", `${layout.y}px`);
  ticket.style.setProperty("--ticket-scale", layout.scale);
  ticket.style.setProperty("--ticket-rotate", `${layout.rotate}deg`);
}

function selectInvoiceBookTicket(ticket) {
  dom.invoiceBookList?.querySelectorAll(".invoice-book-ticket.is-selected").forEach((item) => {
    if (item !== ticket) item.classList.remove("is-selected");
  });
  ticket?.classList.add("is-selected");
}

function getTimeDistributionItems(day) {
  const totals = {
    main: getVisibleMainTasks().reduce((sum, task) => {
      const isPending = day.planned?.main?.[task.id] && !day.taskActive?.main?.[task.id];
      return sum + (isPending ? task.durationMinutes : 0);
    }, 0),
    side: getVisibleSideQuests(selectedDate).reduce((sum, quest) => {
      const isPending = day.planned?.side?.[quest.id] && !day.taskActive?.side?.[quest.id];
      return sum + (isPending ? quest.durationMinutes : 0);
    }, 0),
    daily: 0,
    blank: 0,
  };

  day.taskRuns.forEach((run) => {
    if (run.type === "main") totals.main += Number(run.duration) || 0;
    if (run.type === "side") totals.side += Number(run.duration) || 0;
  });

  Object.entries(day.taskActive?.main || {}).forEach(([, timer]) => {
    totals.main += elapsedTaskMinutes(timer);
  });
  Object.entries(day.taskActive?.side || {}).forEach(([, timer]) => {
    totals.side += elapsedTaskMinutes(timer);
  });

  day.lifeRecords.forEach((record) => {
    totals.daily += Number(record.duration) || 0;
  });

  Object.entries(day.lifeActive || {}).forEach(([groupId, timer]) => {
    if (!groupId) return;
    totals.daily += elapsedLifeMinutes(timer);
  });

  const plannedMinutes = totals.main + totals.side + totals.daily;
  totals.blank = Math.max(0, 24 * 60 - plannedMinutes);

  return timeDistributionGroups
    .map((group) => ({ ...group, minutes: totals[group.id] || 0 }))
    .filter((item) => item.minutes > 0);
}

function formatDistributionDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (!hours) return `${rest}m`;
  if (!rest) return `${hours}h`;
  return `${hours}h ${rest}m`;
}

function renderReport(day) {
  if (dom.reportInput && dom.reportInput.value !== day.report) {
    dom.reportInput.value = day.report;
  }
  dom.saveStatus.textContent = day.settled ? "今日已结算" : "已自动保存";
}

function selectFinanceCard(card) {
  activeFinanceScreen = card === "real" ? "real" : "virtual";
  updatePageNav("finance", true);
  renderFinanceCenter();
  renderLedger();
}

function openInvoiceBook() {
  renderInvoiceBook();
  if (typeof dom.invoiceBookDialog?.showModal === "function") {
    if (!dom.invoiceBookDialog.open) dom.invoiceBookDialog.showModal();
  } else {
    dom.invoiceBookDialog?.setAttribute("open", "");
  }
}

function closeInvoiceBook() {
  if (typeof dom.invoiceBookDialog?.close === "function") {
    dom.invoiceBookDialog.close();
  } else {
    dom.invoiceBookDialog?.removeAttribute("open");
  }
}

function showFinanceHome() {
  activeFinanceScreen = "home";
  updatePageNav("finance", true);
  renderFinanceCenter();
}

function renderFinanceCenter() {
  const virtual = getVirtualFinanceSummary();
  const real = getRealFinanceSummary();
  state.financeSettings = normalizeFinanceSettings(state.financeSettings);
  const realBalanceVisible = state.financeSettings.realBalanceVisible;

  if (dom.financeActiveBadge) dom.financeActiveBadge.textContent = activeFinanceScreen === "real" ? "现实账本" : activeFinanceScreen === "virtual" ? "金币" : "我的银行";
  if (dom.virtualCardBalance) dom.virtualCardBalance.textContent = formatCoins(virtual.balance);
  if (dom.virtualCardAsset) dom.virtualCardAsset.textContent = formatCoins(virtual.assetValue);
  if (dom.virtualCardIncome) dom.virtualCardIncome.textContent = `+${formatCoins(virtual.todayIncome)}`;
  if (dom.virtualCardSpend) dom.virtualCardSpend.textContent = `-${formatCoins(virtual.todaySpend)}`;
  if (dom.virtualCardFlow) dom.virtualCardFlow.textContent = `今日 +${formatCoins(virtual.todayIncome)} / -${formatCoins(virtual.todaySpend)}`;
  if (dom.realCardBalance) dom.realCardBalance.textContent = realBalanceVisible ? formatRealCurrency(real.balance) : "£••••••";
  if (dom.realBalanceToggle) {
    dom.realBalanceToggle.classList.toggle("is-hidden", !realBalanceVisible);
    dom.realBalanceToggle.setAttribute("aria-label", realBalanceVisible ? "隐藏余额" : "显示余额");
    dom.realBalanceToggle.setAttribute("aria-pressed", String(realBalanceVisible));
  }
  if (dom.realCardIncome) dom.realCardIncome.textContent = formatRealCurrency(real.monthIncome);
  if (dom.realCardExpense) dom.realCardExpense.textContent = formatRealCurrency(real.monthExpense);
  if (dom.realCardBudget) dom.realCardBudget.textContent = formatRealCurrency(real.weekBalance);
  if (dom.realCardFlow) dom.realCardFlow.textContent = `本月支出 ${formatRealCurrency(real.monthExpense)}`;
  if (dom.virtualAssetBadge) dom.virtualAssetBadge.textContent = `资产 ${formatCoins(virtual.assetValue)}`;
  if (dom.virtualBalanceValue) dom.virtualBalanceValue.textContent = formatCoins(virtual.balance);
  if (dom.virtualStockValue) dom.virtualStockValue.textContent = formatCoins(virtual.stockValue);
  if (dom.virtualTodayIncome) dom.virtualTodayIncome.textContent = `+${formatCoins(virtual.todayIncome)}`;
  if (dom.virtualTodaySpend) dom.virtualTodaySpend.textContent = `-${formatCoins(virtual.todaySpend)}`;

  document.querySelectorAll("[data-finance-card]").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.financeCard === activeFinanceScreen);
  });
  document.querySelectorAll("[data-finance-screen]").forEach((panel) => {
    panel.hidden = panel.dataset.financeScreen !== activeFinanceScreen;
  });
  document.querySelectorAll("[data-finance-home-only]").forEach((panel) => {
    panel.hidden = activeFinanceScreen !== "home";
  });

  renderVirtualFinanceList(virtual);
}

function getVirtualFinanceSummary() {
  const companyState = readLifeCompanyState();
  const economy = companyState?.company?.economy || {};
  const transactions = Array.isArray(economy.transactions) ? economy.transactions : [];
  const todayTransactions = transactions.filter((transaction) => transactionDateKey(transaction.createdAt) === selectedDate);
  const stockValue = calculateStoredSkillHoldingValue();
  const balance = roundCompanyCoins(economy.companyCoins !== undefined ? economy.companyCoins : 0);
  const assetValue = roundCompanyCoins(economy.assetValue || balance + stockValue);
  return {
    balance,
    assetValue,
    stockValue,
    todayIncome: todayTransactions.filter((item) => item.type === "earn").reduce((sum, item) => sum + Number(item.amount || 0), 0),
    todaySpend: todayTransactions.filter((item) => item.type === "spend").reduce((sum, item) => sum + Number(item.amount || 0), 0),
    transactions,
    trades: getSkillMarketTrades(),
  };
}

function getRealFinanceSummary() {
  const records = normalizeLedger(state.ledger);
  const month = selectedDate.slice(0, 7);
  const monthRecords = records.filter((record) => String(record.date || "").slice(0, 7) === month);
  const weekRecords = records.filter((record) => weekKey(record.date) === weekKey(selectedDate));
  const totalIncome = sumLedger(records, "income");
  const totalExpense = sumLedger(records, "expense");
  return {
    balance: totalIncome - totalExpense,
    monthIncome: sumLedger(monthRecords, "income"),
    monthExpense: sumLedger(monthRecords, "expense"),
    weekBalance: sumLedger(weekRecords, "income") - sumLedger(weekRecords, "expense"),
  };
}

function renderVirtualFinanceList(summary) {
  if (!dom.virtualFinanceList) return;
  const companyRows = summary.transactions.map((transaction) => ({
    id: transaction.id || makeId("finance"),
    type: transaction.type === "spend" ? "expense" : "income",
    title: transaction.title || virtualTransactionSourceLabel(transaction.source),
    note: transaction.note || virtualTransactionSourceLabel(transaction.source),
    amount: Number(transaction.amount || 0),
    date: transactionDateKey(transaction.createdAt),
    createdAt: transaction.createdAt || "",
    source: transaction.source || "manual",
  }));
  const tradeRows = summary.trades.map((trade) => ({
    id: trade.id || makeId("trade"),
    type: trade.side === "buy" ? "expense" : "income",
    title: trade.side === "buy" ? "技能股买入" : trade.side === "sell" ? "技能股卖出" : "技能股记录",
    note: trade.name || trade.symbol || "技能股",
    amount: Number(trade.total || (Number(trade.price || 0) * Number(trade.shares || 0))),
    date: transactionDateKey(trade.createdAt),
    createdAt: trade.createdAt || "",
    source: "skill-stock",
  }));
  const rows = [...companyRows, ...tradeRows]
    .filter((row) => row.amount > 0)
    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
    .slice(0, 18);

  if (!rows.length) {
    dom.virtualFinanceList.innerHTML = `<p class="ledger-empty">还没有金币流水。完成主线、公司任务或技能股交易后，这里会出现记录。</p>`;
    return;
  }

  dom.virtualFinanceList.innerHTML = rows.map((row) => {
    const sign = row.type === "income" ? "+" : "-";
    return `
      <article class="finance-row ${row.type}">
        <span class="ledger-icon">${virtualTransactionIcon(row.source)}</span>
        <div>
          <strong>${escapeHtml(row.title)}</strong>
          <small>${escapeHtml(row.note)} · ${row.date}</small>
        </div>
        <em>${sign}${formatCoins(row.amount)}</em>
      </article>
    `;
  }).join("");
}

function renderLedger() {
  state.ledger = normalizeLedger(state.ledger);
  const monthRecords = state.ledger.filter((record) => String(record.date || "").slice(0, 7) === selectedDate.slice(0, 7));
  const weekRecords = state.ledger.filter((record) => weekKey(record.date) === weekKey(selectedDate));
  const todayIncome = sumLedger(monthRecords, "income");
  const todayExpense = sumLedger(monthRecords, "expense");
  const weekIncome = sumLedger(weekRecords, "income");
  const weekExpense = sumLedger(weekRecords, "expense");
  const weekBalance = weekIncome - weekExpense;
  const allIncome = sumLedger(state.ledger, "income");
  const allExpense = sumLedger(state.ledger, "expense");

  dom.ledgerTodayIncome.textContent = formatRealCurrency(todayIncome);
  dom.ledgerTodayExpense.textContent = formatRealCurrency(todayExpense);
  dom.ledgerWeekBalance.textContent = formatRealCurrency(weekBalance);
  const realBalanceVisible = normalizeFinanceSettings(state.financeSettings).realBalanceVisible;
  dom.ledgerBalanceBadge.textContent = realBalanceVisible ? formatRealCurrency(allIncome - allExpense) : "£••••••";
  dom.ledgerBalanceBadge.classList.toggle("is-negative", allIncome - allExpense < 0);

  if (monthRecords.length === 0) {
    dom.ledgerList.innerHTML = `<p class="ledger-empty">本月还没有现实记账。这里只做手动记录，不连接真实银行卡。</p>`;
    return;
  }

	  dom.ledgerList.innerHTML = monthRecords
	    .slice()
	    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
    .map((record) => {
      const category = getLedgerCategory(record.category);
      const sign = record.type === "income" ? "+" : "-";
      return `
        <article class="ledger-row ${record.type}">
          <span class="ledger-icon">${category.icon}</span>
          <div>
            <strong>${escapeHtml(category.label)} · ${escapeHtml(record.note || (record.type === "income" ? "收入" : "支出"))}</strong>
            <small>${record.date}</small>
          </div>
          <em>${sign}${formatRealCurrency(record.amount)}</em>
          <button type="button" data-action="delete-ledger" data-id="${record.id}" aria-label="删除这条记账">×</button>
        </article>
      `;
    })
	    .join("");
}

function toggleRealBalanceVisibility() {
  state.financeSettings = normalizeFinanceSettings(state.financeSettings);
  if (!state.financeSettings.realBalanceVisible) {
    openFinancePasswordDialog("show-balance");
    return;
  }
  state.financeSettings.realBalanceVisible = false;
  saveState();
  renderFinanceCenter();
  renderLedger();
}

function openBalanceAdjustDialog() {
  state.financeSettings = normalizeFinanceSettings(state.financeSettings);
  if (!state.financeSettings.realBalancePasswordSet) {
    openFinancePasswordDialog("set-password-for-adjust");
    return;
  }
  showBalanceAdjustDialog();
}

function showBalanceAdjustDialog() {
  const summary = getRealFinanceSummary();
  if (dom.balanceAdjustCurrent) dom.balanceAdjustCurrent.textContent = `当前余额 ${formatRealCurrency(summary.balance)}`;
  if (dom.balanceAdjustInput) {
    dom.balanceAdjustInput.value = String(Math.round(summary.balance * 100) / 100);
    window.setTimeout(() => dom.balanceAdjustInput?.select(), 0);
  }
  if (typeof dom.balanceAdjustDialog?.showModal === "function") {
    if (!dom.balanceAdjustDialog.open) dom.balanceAdjustDialog.showModal();
  } else {
    dom.balanceAdjustDialog?.setAttribute("open", "");
  }
}

function openFinancePasswordDialog(mode) {
  pendingFinancePasswordAction = mode;
  const isSetup = mode === "set-password-for-adjust";
  if (dom.financePasswordTitle) dom.financePasswordTitle.textContent = isSetup ? "设置银行卡密码" : "输入银行卡密码";
  if (dom.financePasswordMessage) dom.financePasswordMessage.textContent = isSetup ? "第一次调整金额前，先设置一个以后查看余额用的密码。" : "请输入密码后显示账户余额。";
  if (dom.financePasswordInputLabel) dom.financePasswordInputLabel.textContent = isSetup ? "设置密码" : "密码";
  if (dom.financePasswordSubmit) dom.financePasswordSubmit.textContent = isSetup ? "设置并继续" : "确认";
  if (dom.financePasswordInput) {
    dom.financePasswordInput.value = "";
    dom.financePasswordInput.placeholder = isSetup ? "至少 4 位" : "0000";
  }
  if (dom.financePasswordConfirmInput) dom.financePasswordConfirmInput.value = "";
  if (dom.financePasswordConfirmField) dom.financePasswordConfirmField.hidden = !isSetup;
  if (typeof dom.financePasswordDialog?.showModal === "function") {
    if (!dom.financePasswordDialog.open) dom.financePasswordDialog.showModal();
  } else {
    dom.financePasswordDialog?.setAttribute("open", "");
  }
  window.setTimeout(() => dom.financePasswordInput?.focus(), 0);
}

function closeFinancePasswordDialog() {
  pendingFinancePasswordAction = "";
  if (typeof dom.financePasswordDialog?.close === "function") {
    dom.financePasswordDialog.close();
  } else {
    dom.financePasswordDialog?.removeAttribute("open");
  }
}

function submitFinancePassword() {
  state.financeSettings = normalizeFinanceSettings(state.financeSettings);
  const password = String(dom.financePasswordInput?.value || "");
  const confirm = String(dom.financePasswordConfirmInput?.value || "");

  if (pendingFinancePasswordAction === "set-password-for-adjust") {
    if (password.length < 4) {
      showToast("密码至少 4 位。");
      return;
    }
    if (password !== confirm) {
      showToast("两次密码不一致。");
      return;
    }
    state.financeSettings.realBalancePassword = password.slice(0, 12);
    state.financeSettings.realBalancePasswordSet = true;
    saveState();
    closeFinancePasswordDialog();
    showBalanceAdjustDialog();
    return;
  }

  if (password !== state.financeSettings.realBalancePassword) {
    showToast("密码不正确。");
    return;
  }

  state.financeSettings.realBalanceVisible = true;
  saveState();
  closeFinancePasswordDialog();
  renderFinanceCenter();
  renderLedger();
}

function closeBalanceAdjustDialog() {
  if (typeof dom.balanceAdjustDialog?.close === "function") {
    dom.balanceAdjustDialog.close();
  } else {
    dom.balanceAdjustDialog?.removeAttribute("open");
  }
}

function saveBalanceAdjust() {
  const nextBalance = Number(dom.balanceAdjustInput?.value);
  if (!Number.isFinite(nextBalance)) {
    showToast("先填一个有效金额。");
    return;
  }

  const currentBalance = getRealFinanceSummary().balance;
  const diff = Math.round((nextBalance - currentBalance) * 100) / 100;
  if (Math.abs(diff) < 0.01) {
    closeBalanceAdjustDialog();
    showToast("余额没有变化。");
    return;
  }

  state.ledger ||= [];
  state.ledger.push({
    id: makeId("ledger"),
    date: selectedDate,
    type: diff >= 0 ? "income" : "expense",
    category: "other",
    amount: Math.abs(diff),
    note: "余额调整",
    createdAt: new Date().toISOString(),
  });
  saveState();
  closeBalanceAdjustDialog();
  render();
  showToast("账户余额已调整。");
}

function addLedgerRecord(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const type = data.get("ledgerType") === "income" ? "income" : "expense";
  const amount = Number(dom.ledgerAmountInput.value);
  if (!Number.isFinite(amount) || amount <= 0) {
    showToast("先填一个大于 0 的金额。");
    return;
  }

  const category = getLedgerCategory(dom.ledgerCategoryInput.value);
  const record = {
    id: makeId("ledger"),
    date: selectedDate,
    type,
    category: category.id,
    amount: Math.round(amount * 100) / 100,
    note: dom.ledgerNoteInput.value.trim().slice(0, 80),
    createdAt: new Date().toISOString(),
  };

  state.ledger ||= [];
  state.ledger.push(record);
  saveState();
  dom.ledgerAmountInput.value = "";
  dom.ledgerNoteInput.value = "";
  render();
  showToast("已记账。");
}

function deleteLedgerRecord(id) {
  if (!id) return;
  state.ledger = normalizeLedger(state.ledger).filter((record) => record.id !== id);
  saveState();
  renderLedger();
  showToast("这条记账已删除。");
}

function sumLedger(records, type) {
  return records
    .filter((record) => record.type === type)
    .reduce((sum, record) => sum + Number(record.amount || 0), 0);
}

function getLedgerCategory(id) {
  return ledgerCategories.find((item) => item.id === id) || ledgerCategories[ledgerCategories.length - 1];
}

function getSkillMarketTrades() {
  const marketState = readSkillMarketState();
  return Array.isArray(marketState?.trades) ? marketState.trades : [];
}

function transactionDateKey(value) {
  const text = String(value || "");
  const match = text.match(/^\d{4}-\d{2}-\d{2}/);
  return match ? match[0] : selectedDate;
}

function formatCoins(value) {
  return `◈ ${roundCompanyCoins(value).toLocaleString("zh-CN")}`;
}

function formatRealCurrency(value) {
  const number = Number(value);
  const safe = Number.isFinite(number) ? number : 0;
  return `£${safe.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function virtualTransactionSourceLabel(source) {
  const labels = {
    task: "任务收入",
    "company-task-missed": "公司任务未完成",
    project: "项目收入",
    "skill-stock": "技能股交易",
    "company-upgrade": "公司升级",
    "department-upgrade": "部门升级",
    decoration: "装饰支出",
    manual: "手动调整",
  };
  return labels[source] || "金币流水";
}

function virtualTransactionIcon(source) {
  const icons = {
    task: "任",
    "company-task-missed": "扣",
    project: "项",
    "skill-stock": "股",
    "company-upgrade": "司",
    "department-upgrade": "部",
    decoration: "饰",
    manual: "调",
  };
  return icons[source] || "币";
}

function getDefaultItem(group, id) {
  if (group === "main") return getVisibleMainTasks().find((item) => item.id === id);
  if (group === "side") return getVisibleSideQuests(selectedDate).find((item) => item.id === id) || sideQuests.find((item) => item.id === id);
  if (group === "low") return lowTasks.find((item) => item.id === id);
  if (group === "life") return lifeGroups.find((item) => item.id === id);
  return null;
}

function getTaskDefinition(type, id) {
  if (type === "main") return getVisibleMainTasks().find((item) => item.id === id);
  if (type === "side") return getVisibleSideQuests(selectedDate).find((item) => item.id === id) || sideQuests.find((item) => item.id === id);
  return null;
}

function getEditableItem(group, fallback) {
  if (!fallback) return null;
  state.editable = normalizeEditableState(state.editable);
  return {
    ...fallback,
    ...(state.editable[group]?.[fallback.id] || {}),
  };
}

function getTodayMainTaskName() {
  state.editable = normalizeEditableState(state.editable);
  return cleanEditableText(state.editable.page.mainlineTitle, defaultEditableState().page.mainlineTitle, 24);
}

function plannedMainTaskTarget(day = ensureDay(selectedDate)) {
  const plannedTasks = getVisibleMainTasks().filter((task) => day.planned?.main?.[task.id]);
  const source = plannedTasks.length ? plannedTasks : getVisibleMainTasks();
  return source.reduce((sum, task) => sum + Math.max(0, Number(task.durationMinutes) || 0) / 60, 0);
}

function formatTodayObjectiveText(day = ensureDay(selectedDate)) {
  const name = getTodayObjectiveName();
  const hours = plannedMainTaskTarget(day);
  return `今日目标：${name}${formatObjectiveHours(hours)}`;
}

function formatObjectiveHours(hours) {
  const value = Number(hours);
  if (!Number.isFinite(value) || value <= 0) return "0h";
  if (Number.isInteger(value)) return `${value}h`;
  return `${Math.round(value * 10) / 10}h`;
}

function getLowTaskDisplayTitle(task) {
  if (task?.id === "anim25") return `${getTodayObjectiveName()} 25 分钟`;
  return getEditableItem("low", task)?.title || task?.title || "";
}

function getTodayObjectiveName() {
  state.editable = normalizeEditableState(state.editable);
  const raw = cleanEditableText(state.editable.page.todayObjective, defaultEditableState().page.todayObjective, 42);
  const withoutPrefix = raw.replace(/^今日目标[:：]\s*/, "").trim();
  const withoutDuration = withoutPrefix
    .replace(/\s*\d+(\.\d+)?\s*(小时|小時|h|H|分钟|分鐘|分|min|m)\s*$/i, "")
    .trim();
  const name = withoutDuration || getTodayMainTaskName().replace(/^今日/, "").replace(/\s*\d+(\.\d+)?\s*(小时|小時|h|H)\s*$/i, "").trim();
  return cleanEditableText(name, "主线", 18);
}

function cleanEditableText(value, fallback = "", max = 80) {
  const text = String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
  return text || String(fallback || "").slice(0, max);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getMode(day) {
  const mainDone = completedMainCount(day);
  const mainTarget = plannedMainTaskTarget(day);
  if (day.risk >= 6 || day.safeMode) {
    return {
      label: "保护模式",
      hint: "目标降压",
      objective: "今日目标：保证安全，不要求完成主线",
    };
  }
  if (mainTarget && mainDone >= mainTarget) {
    return {
      label: "今日通关",
      hint: "可以结算",
      objective: "今日已通关：写战报，然后结算当天",
    };
  }
  if (day.energy <= 20 || day.mood <= 20) {
    return {
      label: "低能量",
      hint: "低能量推进",
      objective: "今日目标：先完成低能量版本",
    };
  }
  return {
    label: "稳定",
    hint: "正常推进",
    objective: mainTarget ? formatTodayObjectiveText() : "今日目标：先创建主线任务",
  };
}

function mainTaskTarget() {
  return getVisibleMainTasks().reduce((sum, task) => sum + task.durationMinutes / 60, 0);
}

function completedMainCount(day) {
  return getVisibleMainTasks().reduce((sum, task) => {
    const done = task.lockedFromCompany ? task.companyDone : day.main[task.id];
    return sum + (done ? task.durationMinutes / 60 : 0);
  }, 0);
}

function allXP() {
  const dayXP = Object.values(state.days).reduce((sum, day) => sum + xpForDay(day), 0);
  const weekXP = Object.values(state.weeks || {}).reduce((sum, week) => sum + xpForWeek(week), 0);
  return dayXP + weekXP;
}

function xpForDay(day) {
  const mainXP = getVisibleMainTasks().reduce((sum, task) => {
    const done = task.lockedFromCompany ? task.companyDone : day.main?.[task.id];
    return sum + (done ? task.xp : 0);
  }, 0);
  const sideXP = getVisibleSideQuests(selectedDate).reduce((sum, quest) => sum + (day.side?.[quest.id] || quest.marketDone ? quest.xp : 0), 0);
  const lowXP = lowTasks.reduce((sum, task) => sum + (day.low?.[task.id] ? task.xp : 0), 0);
  const safetyXP = day.safeMode ? 10 : 0;
  const target = plannedMainTaskTarget(day);
  const passXP = target && day.settled && completedMainCount(day) >= target ? 25 : 0;
  return mainXP + sideXP + lowXP + safetyXP + passXP;
}

function xpForWeek(week) {
  return lifeGroups.reduce((sum, group) => {
    return (
      sum +
      lifeIds(group).reduce((inner, id) => inner + (week.life?.[id] ? group.xp : 0), 0)
    );
  }, 0);
}

function toggleTaskTimer(type, id) {
  const task = getTaskDefinition(type, id);
  const edited = getEditableItem(type, task);
  if (!task || !edited) return;
  const day = ensureDay(selectedDate);
  day.taskActive ||= { main: {}, side: {} };
  day.taskActive[type] ||= {};

  if (day.taskActive[type][id]) {
    openTaskProgressDialog(type, id);
    return;
  }

  if (!day.planned?.[type]?.[id]) {
    planTaskOnTimeline(day, type, id);
    saveState();
    const synced = syncGameTaskToBaseSchedule(type, id, true);
    render();
    showToast(`${edited.title} 已加入时间轴${synced ? "，并同步到日程。" : "。"}再点一次开始计时。`);
    return;
  }

  startTaskTimer(day, type, id);
  saveState();
  syncGameTaskToBaseSchedule(type, id, true);
  render();
  openTaskProgressDialog(type, id);
  showToast(`${edited.title} 开始计时。`);
}

function planTaskOnTimeline(day, type, id, startMinute = currentMinuteOfDay()) {
  const task = getTaskDefinition(type, id);
  if (!task) return;
  const duration = Math.max(1, Number(task.durationMinutes) || 60);
  const start = clamp(Math.round(startMinute), 0, Math.max(0, 24 * 60 - duration));
  day.planned ||= { main: {}, side: {} };
  day.planned[type] ||= {};
  day.planned[type][id] = true;
  day.schedule = normalizeDaySchedule(day.schedule);
  day.schedule[type] ||= {};
  const existingTop = Number(day.schedule[type][id]?.top);
  day.schedule[type][id] = {
    start,
    top: Number.isFinite(existingTop) ? existingTop : suggestedScheduleTop(day, type, id),
  };
  day.settled = false;
}

function suggestedScheduleTop(day, type, id) {
  if (type === "main") {
    const order = getVisibleMainTasks().filter((task) => task.id !== id && day.planned?.main?.[task.id]).length;
    return order * 58;
  }
  const mainCount = getVisibleMainTasks().filter((task) => day.planned?.main?.[task.id]).length;
  const sideOrder = getVisibleSideQuests(selectedDate).filter((quest) => quest.id !== id && day.planned?.side?.[quest.id]).length;
  return (mainCount ? mainCount * 58 + 8 : 0) + sideOrder * 36;
}

function startTaskTimer(day, type, id, startMinute = currentMinuteOfDay()) {
  day.taskActive ||= { main: {}, side: {} };
  day.taskActive[type] ||= {};
  const task = getTaskDefinition(type, id);
  if (!task) return;
  const duration = Math.max(1, Number(task.durationMinutes) || 60);
  const start = clamp(Math.round(startMinute), 0, Math.max(0, 24 * 60 - duration));
  day.planned ||= { main: {}, side: {} };
  day.planned[type] ||= {};
  day.planned[type][id] = true;
  day.schedule = normalizeDaySchedule(day.schedule);
  day.schedule[type] ||= {};
  day.schedule[type][id] ||= { start, top: suggestedScheduleTop(day, type, id) };
  day.schedule[type][id].start = start;
  day.taskActive[type][id] = {
    startedAt: Date.now(),
    startMinute: start,
  };
  day.settled = false;
}

function processActiveTaskTimers(day) {
  let changed = false;
  ["main", "side"].forEach((type) => {
    Object.keys(day.taskActive?.[type] || {}).forEach((id) => {
      const task = getTaskDefinition(type, id);
      const timer = day.taskActive[type][id];
      if (!task || !timer) return;
      const maxRemaining = Math.max(1, 24 * 60 - Number(timer.startMinute || 0));
      if (elapsedTaskMinutes(timer) < maxRemaining) return;
      const run = finishTaskTimer(day, type, id, { forcedDuration: maxRemaining, completeIfFull: false });
      if (run) syncGameRunToBaseSchedule(run);
      syncGameTaskToBaseSchedule(type, id, false);
      changed = true;
    });
  });
  return changed;
}

function finishTaskTimer(day, type, id, options = {}) {
  const task = getTaskDefinition(type, id);
  const edited = getEditableItem(type, task);
  const timer = day.taskActive?.[type]?.[id];
  if (!task || !edited || !timer) return null;
  const plannedDuration = Math.max(1, Number(task.durationMinutes) || 60);
  const elapsed = Math.max(1, elapsedTaskMinutes(timer));
  const duration = clamp(
    Math.round(Number(options.forcedDuration) || elapsed),
    1,
    Math.max(1, 24 * 60 - Number(timer.startMinute || 0))
  );
  const start = clamp(Math.round(Number(timer.startMinute) || currentMinuteOfDay()), 0, 24 * 60 - 1);
  const end = clamp(start + duration, start + 1, 24 * 60);
  const run = {
    id: makeId(`${type}-run`),
    type,
    sourceTaskId: id,
    title: edited.title,
    icon: edited.icon || task.icon || "•",
    start,
    end,
    duration: end - start,
    done: Boolean(day[type]?.[id]) || options.completeIfFull || duration >= plannedDuration,
    createdAt: new Date().toISOString(),
  };
  day.taskRuns ||= [];
  day.taskRuns.push(run);
  day[type] ||= {};
  if (run.done) day[type][id] = true;
  if (type === "main" && isLifeCompanyMainTaskId(id)) setLifeCompanyTaskDoneFromMainTask(id, run.done);
  if (type === "side" && run.done && isSkillMarketSideQuestId(id)) {
    setSkillMarketTaskDoneFromSideQuest(id, true);
  }
  if (run.done) awardCompanyEconomyForCompletedTask(type, id, edited);
  day.planned ||= { main: {}, side: {} };
  day.planned[type] ||= {};
  day.planned[type][id] = false;
  if (day.schedule?.[type]) delete day.schedule[type][id];
  delete day.taskActive[type][id];
  day.settled = false;
  return run;
}

function elapsedTaskMinutes(timer) {
  if (!timer?.startedAt) return 0;
  const endTime = Number(timer.pausedAt) || Date.now();
  return Math.max(1, Math.round((endTime - Number(timer.startedAt)) / 60000));
}

function toggleMainTask(id) {
  const task = getEditableItem("main", getTaskDefinition("main", id));
  if (!task) return;
  const day = ensureDay(selectedDate);
  day.planned.main[id] = true;
  const nextDone = isLifeCompanyMainTaskId(id) ? !task.companyDone : !day.main[id];
  day.main[id] = nextDone;
  if (isLifeCompanyMainTaskId(id)) setLifeCompanyTaskDoneFromMainTask(id, nextDone);
  if (nextDone) awardCompanyEconomyForCompletedTask("main", id, task);
  day.settled = false;
  saveState();
  syncGameTaskToBaseSchedule("main", id, true);
  render();
  showToast(nextDone ? `${task.title} 完成，+${task.xp} XP` : `${task.title} 已取消`);
}

function toggleSideQuest(id) {
  const quest = getEditableItem("side", getTaskDefinition("side", id));
  if (!quest) return;
  const day = ensureDay(selectedDate);
  day.planned.side[id] = true;
  const nextDone = isSkillMarketSideQuestId(id) ? !quest.marketDone : !day.side[id];
  day.side[id] = nextDone;
  if (isSkillMarketSideQuestId(id)) setSkillMarketTaskDoneFromSideQuest(id, nextDone);
  if (nextDone) awardCompanyEconomyForCompletedTask("side", id, quest);
  saveState();
  syncGameTaskToBaseSchedule("side", id, true);
  render();
  showToast(nextDone ? `${quest.title} 完成，+${quest.xp} XP` : `${quest.title} 已取消`);
}

function toggleTaskRunComplete(id) {
  const day = ensureDay(selectedDate);
  const run = day.taskRuns.find((item) => item.id === id);
  if (!run) return;
  run.done = !run.done;
  day[run.type] ||= {};
  const hasDoneRun = day.taskRuns.some((item) =>
    item.id !== id &&
    item.type === run.type &&
    item.sourceTaskId === run.sourceTaskId &&
    item.done
  );
  day[run.type][run.sourceTaskId] = run.done || hasDoneRun;
  if (run.type === "side" && isSkillMarketSideQuestId(run.sourceTaskId)) {
    setSkillMarketTaskDoneFromSideQuest(run.sourceTaskId, day[run.type][run.sourceTaskId]);
  }
  if (run.done) awardCompanyEconomyForCompletedTask(run.type, run.sourceTaskId, run);
  day.settled = false;
  saveState();
  syncGameRunToBaseSchedule(run);
  render();
  showToast(run.done ? `${run.title} 已手动打卡完成。` : `${run.title} 已取消完成。`);
}

function toggleMainPlan(id) {
  toggleTaskTimer("main", id);
}

function toggleSidePlan(id) {
  toggleTaskTimer("side", id);
}

function toggleLowTask(id) {
  const day = ensureDay(selectedDate);
  day.low[id] = !day.low[id];
  saveState();
  render();
  const task = lowTasks.find((item) => item.id === id);
  const title = getLowTaskDisplayTitle(task);
  showToast(day.low[id] ? `${title} 已完成，低能量也算推进` : `${title} 已取消`);
}

function toggleLifeTask(id) {
  const day = ensureDay(selectedDate);
  const week = ensureWeek(selectedDate);
  day.lifeMaintenanceSlots ||= {};
  const nextDone = !day.lifeMaintenanceSlots[id];
  if (nextDone) {
    week.life[id] = true;
    day.lifeMaintenanceSlots[id] = true;
  } else {
    delete day.lifeMaintenanceSlots[id];
  }
  updateMoodWhenTaskChanges(selectedDate);
  saveState();
  render();
  const group = lifeGroups.find((item) => id.startsWith(`${item.id}-`));
  const edited = getEditableItem("life", group);
  showToast(nextDone ? `${edited.title} 已记录，情绪维护 +${LIFE_MAINTENANCE_SLOT_MINUTES} 分钟` : `${edited.title} 已取消今日记录`);
}

function toggleLifeTimer(groupId) {
  const group = lifeGroups.find((item) => item.id === groupId);
  if (!group) return;
  const day = ensureDay(selectedDate);
  const week = ensureWeek(selectedDate);
  const edited = getEditableItem("life", group);
  day.lifeActive ||= {};

  if (!day.lifeActive[groupId]) {
    day.lifeActive[groupId] = {
      startedAt: Date.now(),
      startMinute: currentMinuteOfDay(),
    };
    saveState();
    render();
    showToast(`${edited.title} 开始计时。`);
    return;
  }

  const record = finishLifeTimer(day, week, group, edited);
  saveState();
  render();
  showToast(record ? `${record.title} 已停止，记录 ${formatDuration(record.duration)}。` : `${edited.title} 已停止。`);
}

function finishLifeTimer(day, week, group, edited) {
  const groupId = group.id;
  if (!day.lifeActive?.[groupId]) return null;

  const timer = day.lifeActive[groupId];
  const start = clamp(Math.round(Number(timer.startMinute) || currentMinuteOfDay()), 0, 24 * 60 - 1);
  const nowMinute = currentMinuteOfDay();
  const elapsedByRealTime = elapsedLifeMinutes(timer);
  const elapsedByClock = timer.pausedAt ? elapsedByRealTime : nowMinute > start ? nowMinute - start : 1;
  const duration = clamp(Math.max(1, elapsedByClock, elapsedByRealTime), 1, 24 * 60);
  const end = clamp(start + duration, start + 1, 24 * 60);
  day.lifeRecords ||= [];
  day.lifeRecords.push({
    id: makeId("life"),
    groupId,
    title: edited.title,
    start,
    end,
    duration: end - start,
    createdAt: new Date().toISOString(),
  });
  delete day.lifeActive[groupId];
  markNextLifeSlot(week, group);
  return { title: edited.title, duration: end - start };
}

function openTaskProgressDialog(type, id) {
  if (type === "life") return;
  activeProgressTask = { type, id };
  renderTaskProgressDialog();
  if (!dom.taskProgressDialog) return;
  if (typeof dom.taskProgressDialog.showModal === "function" && !dom.taskProgressDialog.open) {
    dom.taskProgressDialog.showModal();
  } else {
    dom.taskProgressDialog.setAttribute("open", "");
  }
  startTaskProgressTicker();
}

function closeTaskProgressDialog() {
  stopTaskProgressTicker();
  window.clearTimeout(taskProgressNoticeTimer);
  dom.taskProgressDialog?.querySelector(".task-progress-inline-notice")?.remove();
  activeProgressTask = null;
  if (!dom.taskProgressDialog) return;
  if (typeof dom.taskProgressDialog.close === "function") {
    dom.taskProgressDialog.close();
  } else {
    dom.taskProgressDialog.removeAttribute("open");
  }
}

function startTaskProgressTicker() {
  stopTaskProgressTicker();
  taskProgressRenderTimer = window.setInterval(renderTaskProgressDialog, 1000);
}

function stopTaskProgressTicker() {
  window.clearInterval(taskProgressRenderTimer);
  taskProgressRenderTimer = null;
}

function showTaskProgressNotice(message) {
  const host = dom.taskProgressDialog;
  if (!host?.open) return;
  window.clearTimeout(taskProgressNoticeTimer);
  const existing = host.querySelector(".task-progress-inline-notice");
  if (existing?.textContent === message) {
    taskProgressNoticeTimer = window.setTimeout(() => existing.remove(), 1800);
    return;
  }
  existing?.remove();
  const notice = document.createElement("div");
  notice.className = "task-progress-inline-notice";
  notice.setAttribute("role", "status");
  notice.textContent = message;
  host.appendChild(notice);
  taskProgressNoticeTimer = window.setTimeout(() => {
    notice.remove();
  }, 1800);
}

function syncTaskProgressPauseButton(paused, sourceButton = null) {
  const button = sourceButton || dom.taskProgressContent?.querySelector(".task-action-pause");
  if (!button) return;
  button.textContent = paused ? "开始" : "暂停";
  button.setAttribute("aria-label", paused ? "开始计时" : "暂停计时");
  button.dataset.paused = paused ? "true" : "false";
}

function toggleTaskProgressPauseFromDialog(sourceButton = null) {
  const timer = getActiveProgressTimer();
  if (!timer) return;
  if (timer.pausedAt) {
    resumeTaskProgressFromDialog(sourceButton);
  } else {
    pauseTaskProgressFromDialog(sourceButton);
  }
}

function pauseTaskProgressFromDialog(sourceButton = null) {
  const timer = getActiveProgressTimer();
  if (!timer) return;
  if (timer.pausedAt) {
    syncTaskProgressPauseButton(true, sourceButton);
    return;
  }
  timer.pausedAt = Date.now();
  syncTaskProgressPauseButton(true, sourceButton);
  saveState();
  render();
  syncTaskProgressPauseButton(true);
  showTaskProgressNotice("时间已暂停。点开始继续。");
  syncTaskProgressPauseButton(true);
}

function resumeTaskProgressFromDialog(sourceButton = null) {
  const timer = getActiveProgressTimer();
  if (!timer) return;
  if (!timer.pausedAt) {
    syncTaskProgressPauseButton(false, sourceButton);
    return;
  }
  const pausedMs = Math.max(0, Date.now() - Number(timer.pausedAt));
  timer.startedAt = Number(timer.startedAt) + pausedMs;
  delete timer.pausedAt;
  syncTaskProgressPauseButton(false, sourceButton);
  saveState();
  render();
  syncTaskProgressPauseButton(false);
  showTaskProgressNotice("继续计时。");
  syncTaskProgressPauseButton(false);
}

function getActiveProgressTimer() {
  if (!activeProgressTask) return null;
  const day = ensureDay(selectedDate);
  const { type, id } = activeProgressTask;
  if (type === "main" || type === "side") return day.taskActive?.[type]?.[id] || null;
  if (type === "life") return day.lifeActive?.[id] || null;
  return null;
}

function stopTaskProgressFromDialog(completeIfFull = false) {
  if (!activeProgressTask) return;
  const { type, id } = activeProgressTask;
  const day = ensureDay(selectedDate);
  let message = "计时已停止。";

  if (type === "main" || type === "side") {
    const task = getTaskDefinition(type, id);
    const edited = getEditableItem(type, task);
    const run = finishTaskTimer(day, type, id, { completeIfFull });
    syncGameTaskToBaseSchedule(type, id, false);
    if (run) syncGameRunToBaseSchedule(run);
    message = run
      ? `${edited?.title || run.title} 已${completeIfFull ? "完成" : "退出"}，记录 ${formatDuration(run.duration)}。`
      : `${edited?.title || "任务"} 已停止。`;
  }

  if (type === "life") {
    const group = lifeGroups.find((item) => item.id === id);
    const week = ensureWeek(selectedDate);
    const edited = getEditableItem("life", group);
    const record = group && edited ? finishLifeTimer(day, week, group, edited) : null;
    message = record ? `${record.title} 已退出，记录 ${formatDuration(record.duration)}。` : "日常计时已停止。";
  }

  saveState();
  closeTaskProgressDialog();
  render();
  showToast(message);
}

function renderTaskProgressDialog() {
  if (!dom.taskProgressContent || !activeProgressTask) return;
  const data = getTaskProgressData(activeProgressTask.type, activeProgressTask.id);
  if (!data) {
    if (dom.taskProgressDialog?.open) closeTaskProgressDialog();
    return;
  }
  const character = getSelectedCharacter();
  const expression = getCharacterExpressionState(ensureDay(selectedDate));
  const characterImage = getCharacterImage(character, expression);
  const percent = Math.round(data.percent);
  const pauseLabel = data.paused ? "开始" : "暂停";
  dom.taskProgressContent.innerHTML = `
    <button class="task-progress-close" type="button" data-action="close-task-progress" aria-label="关闭">×</button>
    <section class="task-progress-scene ${data.paused ? "is-paused" : ""}" aria-label="任务进行中">
      <div class="task-progress-message">加油！你正在变得更好！</div>
      <strong class="task-progress-percent">${percent}%</strong>
      <div class="task-progress-cloud cloud-left" aria-hidden="true"></div>
      <div class="task-progress-cloud cloud-right" aria-hidden="true"></div>
      <div class="task-progress-track" style="--task-progress:${data.percent}%">
        <span class="task-progress-fill"></span>
        <span class="task-progress-dash"></span>
        <img class="task-progress-runner" src="${escapeHtml(characterImage)}" alt="" aria-hidden="true" />
      </div>
      <div class="task-progress-marks" aria-hidden="true">
        <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
      </div>
    </section>
    <section class="task-progress-info">
      <div>
        <span>已用时间</span>
        <strong>${formatDuration(data.elapsed)}</strong>
      </div>
      <div>
        <span>${data.remaining > 0 ? "剩余时间" : "已达目标"}</span>
        <strong>${data.remaining > 0 ? formatDuration(data.remaining) : "完成"}</strong>
      </div>
      <div class="task-progress-note">${escapeHtml(data.note)}</div>
    </section>
    <section class="task-progress-actions" aria-label="任务操作">
      <button class="task-action-pause" type="button" data-action="toggle-task-progress-pause" data-paused="${data.paused ? "true" : "false"}" aria-label="${data.paused ? "开始计时" : "暂停计时"}">${pauseLabel}</button>
      <button class="task-action-exit" type="button" data-action="exit-task-progress">结束记录</button>
    </section>
    <section class="task-progress-reward">
      <div>
        <span>${escapeHtml(data.icon)}</span>
        <strong>${escapeHtml(data.title)}</strong>
        <small>${escapeHtml(data.typeLabel)} · 目标 ${formatDuration(data.target)}</small>
      </div>
      <p>完成任务后你将获得 <b>+${data.xp} XP</b> 和一次今日推进。</p>
    </section>
  `;
}

function getTaskProgressData(type, id) {
  const day = ensureDay(selectedDate);
  if (type === "main" || type === "side") {
    const task = getTaskDefinition(type, id);
    const edited = getEditableItem(type, task);
    const timer = day.taskActive?.[type]?.[id];
    if (!task || !edited || !timer) return null;
    const target = Math.max(1, Number(task.durationMinutes) || 60);
    const elapsed = elapsedTaskMinutes(timer);
    const percent = clamp((elapsed / target) * 100, 0, 100);
    const paused = Boolean(timer.pausedAt);
    return {
      type,
      paused,
      typeLabel: type === "main" ? "主线任务" : "副线任务",
      title: edited.title,
      icon: edited.icon || task.icon || "✦",
      xp: Number(task.xp) || (type === "main" ? 15 : 20),
      target,
      elapsed,
      remaining: Math.max(0, target - elapsed),
      percent,
      note: paused ? "计时已暂停，点开始继续推进。" : elapsed >= target ? "已经达到卡片目标，可以结束记录。" : "每一分钟都算数，先专注这一件事。",
    };
  }

  if (type === "life") {
    const group = lifeGroups.find((item) => item.id === id);
    const edited = getEditableItem("life", group);
    const timer = day.lifeActive?.[id];
    if (!group || !edited || !timer) return null;
    const target = 25;
    const elapsed = elapsedLifeMinutes(timer);
    const percent = clamp((elapsed / target) * 100, 0, 100);
    const paused = Boolean(timer.pausedAt);
    return {
      type,
      paused,
      typeLabel: "日常维护",
      title: edited.title,
      icon: "日",
      xp: Number(group.xp) || 12,
      target,
      elapsed,
      remaining: Math.max(0, target - elapsed),
      percent,
      note: paused ? "计时已暂停，点开始继续推进。" : "和卡面小进度条同步，25 分钟就是一格漂亮推进。",
    };
  }

  return null;
}

function markNextLifeSlot(week, group) {
  const next = lifeIds(group).find((id) => !week.life[id]);
  if (next) week.life[next] = true;
}

function currentMinuteOfDay() {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

function elapsedLifeMinutes(timer) {
  if (!timer?.startedAt) return 0;
  const endTime = Number(timer.pausedAt) || Date.now();
  return Math.max(1, Math.round((endTime - Number(timer.startedAt)) / 60000));
}

function renderActiveTimers() {
  if (!state) return;
  const day = ensureDay(selectedDate);
  const hasLife = Object.keys(day.lifeActive || {}).length;
  const hasTasks = Object.keys(day.taskActive?.main || {}).length || Object.keys(day.taskActive?.side || {}).length;
  if (!hasLife && !hasTasks) return;
  render();
}

function openProtection() {
  const day = ensureDay(selectedDate);
  day.protectionOpen = true;
  saveState();
  render();
  jumpTo("#protectionPanel");
}

function closeProtection() {
  const day = ensureDay(selectedDate);
  if (day.risk >= 6 || day.safeMode) {
    showToast("保护模式正在生效，先把安全放在第一位。");
    return;
  }
  day.protectionOpen = false;
  saveState();
  render();
}

function activateSafeMode() {
  const day = ensureDay(selectedDate);
  day.safeMode = true;
  day.protectionOpen = true;
  day.settled = false;
  saveState();
  render();
  showToast("已切换：今天不要求完成主线，只保证安全。");
}

function markSafePlace() {
  const day = ensureDay(selectedDate);
  day.safePlace = true;
  saveState();
  render();
  showToast("已记录安全行动。先让自己离危险远一点。");
}

async function copyHelpMessage() {
  try {
    await navigator.clipboard.writeText(helpMessage);
    showToast("求助短信已复制，可以直接发给信任的人。");
  } catch {
    showToast(helpMessage);
  }
}

function settleDay() {
  const day = ensureDay(selectedDate);
  const mainDone = completedMainCount(day);
  const mainTarget = plannedMainTaskTarget(day);
  if (!mainTarget && !day.safeMode) {
    showToast("先新增至少一张主线卡片，再进行结算。");
    return;
  }
  if (day.risk >= 6 || day.safeMode) {
    day.safeMode = true;
    day.protectionOpen = true;
    const penalty = penalizeCompanyEconomyForMissedMainTasks(selectedDate);
    day.settled = true;
    saveState();
    render();
    showToast(penalty.count ? `保护模式结算完成，未完成公司任务 -${formatCoins(penalty.coins)}。` : "今天按保护模式结算：安全优先，也算通关。");
    return;
  }
  if (mainDone < mainTarget && day.energy > 20 && day.mood > 20) {
    showToast(`还没完成 ${formatDuration(mainDone * 60)} / ${formatDuration(mainTarget * 60)}。也可以先写战报，或把能量调成低能量版本。`);
    return;
  }
  const penalty = penalizeCompanyEconomyForMissedMainTasks(selectedDate);
  day.settled = true;
  saveState();
  render();
  if (penalty.count) {
    showToast(`今日已结算，未完成公司任务 -${formatCoins(penalty.coins)}。`);
  } else {
    showToast(mainDone >= mainTarget ? "今日通关结算完成，额外 +25 XP。" : "低能量日已结算，明天继续接上。");
  }
}

function openGrowthDialog() {
  renderGrowthDialog();
  if (typeof dom.growthDialog.showModal === "function") {
    dom.growthDialog.showModal();
  } else {
    dom.growthDialog.setAttribute("open", "");
  }
}

function closeGrowthDialog() {
  if (typeof dom.growthDialog.close === "function") {
    dom.growthDialog.close();
  } else {
    dom.growthDialog.removeAttribute("open");
  }
}

function renderOnboardingTypeOptions() {
  if (!dom.onboardingCompanyTypeInput) return;
  dom.onboardingCompanyTypeInput.innerHTML = ONBOARDING_COMPANY_TYPES.map((type) => `
    <option value="${escapeHtml(type.id)}">${escapeHtml(type.name)}</option>
  `).join("");
}

function updateOnboardingDefaults() {
  const type = lifeCompanyTypeById(dom.onboardingCompanyTypeInput?.value);
  if (!type) return;
  const nameInput = dom.onboardingCompanyNameInput;
  const goalInput = dom.onboardingGoalInput;
  const previousName = nameInput?.dataset.suggested || "";
  const previousGoal = goalInput?.dataset.suggested || "";
  if (nameInput && (!nameInput.value.trim() || nameInput.value.trim() === previousName)) {
    nameInput.value = type.defaultName;
    nameInput.dataset.suggested = type.defaultName;
  }
  if (goalInput && (!goalInput.value.trim() || goalInput.value.trim() === previousGoal)) {
    goalInput.value = type.defaultGoal;
    goalInput.dataset.suggested = type.defaultGoal;
  }
}

function maybeOpenOnboarding() {
  state.onboarding = normalizeOnboardingState(state.onboarding, state);
  if (state.onboarding.completed || state.onboarding.dismissed || hasUserCreatedLifeCompany()) return;
  if (!dom.onboardingDialog || !dom.onboardingForm) return;
  renderOnboardingTypeOptions();
  if (dom.onboardingDeadlineInput && !dom.onboardingDeadlineInput.value) {
    dom.onboardingDeadlineInput.value = addDays(selectedDate, TOTAL_DAYS - 1);
  }
  updateOnboardingDefaults();
  if (typeof dom.onboardingDialog.show === "function") {
    if (!dom.onboardingDialog.open) dom.onboardingDialog.show();
  } else {
    dom.onboardingDialog.setAttribute("open", "");
  }
}

function hasUserCreatedLifeCompany() {
  const company = readLifeCompanyState()?.company;
  return Boolean(company && !isRelationshipFallbackCompany(company));
}

function isRelationshipFallbackCompany(company) {
  if (!company || typeof company !== "object") return false;
  if (company.relationshipFallbackOnly) return true;
  const hasCompanyShape = Array.isArray(company.departments) || Array.isArray(company.projects) || company.mainGoal;
  return company.name === "我的人生公司" && company.typeId === "personal" && !hasCompanyShape;
}

function closeOnboardingDialog() {
  if (!dom.onboardingDialog) return;
  if (typeof dom.onboardingDialog.close === "function") {
    dom.onboardingDialog.close();
  } else {
    dom.onboardingDialog.removeAttribute("open");
  }
}

function skipOnboarding() {
  if (!state) return;
  state.onboarding = normalizeOnboardingState(state.onboarding, state);
  state.onboarding.dismissed = true;
  saveState();
  closeOnboardingDialog();
}

function completeOnboarding(event) {
  event?.preventDefault();
  const type = lifeCompanyTypeById(dom.onboardingCompanyTypeInput?.value);
  const companyName = cleanEditableText(dom.onboardingCompanyNameInput?.value, type.defaultName, 24);
  const goal = cleanEditableText(dom.onboardingGoalInput?.value, type.defaultGoal, 42);
  const deadline = isDateKey(dom.onboardingDeadlineInput?.value)
    ? dom.onboardingDeadlineInput.value
    : addDays(selectedDate, TOTAL_DAYS - 1);
  if (!confirmCompanyStartingStake(companyName)) return;

  createOnboardingCompany({
    name: companyName,
    typeId: type.id,
    goal,
    deadline,
  });

  const title = cleanEditableText(`${companyName}作战台`, `${companyName}作战台`, 28);
  const objective = cleanEditableText(`今日目标：${goal}`, `今日目标：${goal}`, 42);
  state.editable = normalizeEditableState(state.editable);
  state.editable.page.heroTitle = title;
  state.editable.page.todayObjective = objective;
  state.editable.page.mainlineTitle = objective;
  state.battleSettings = normalizeBattleSettings({
    ...state.battleSettings,
    title,
    objective,
    startDate: selectedDate,
    endDate: deadline,
    locked: true,
  }, state.editable);
  syncBattleProjectToBaseSchedule(state.battleSettings);
  state.onboarding = {
    completed: true,
    dismissed: false,
    completedAt: new Date().toISOString(),
  };

  saveState();
  render();
  closeOnboardingDialog();
  showToast("目标部署完成，公司已经启动。");
}

function confirmCompanyStartingStake(companyName = "人生公司") {
  return window.confirm(`默认个人金币：${PLAYER_STARTING_COINS}\n建立「${companyName}」需要投入 ${COMPANY_STARTING_STAKE} 金币作为启动资金。\n\n确认创建公司吗？`);
}

function openBlessingDialog() {
  state.blessing = normalizeBlessingState(state.blessing);
  renderBlessingDialog();
  if (typeof dom.blessingDialog?.showModal === "function") {
    if (!dom.blessingDialog.open) dom.blessingDialog.showModal();
  } else {
    dom.blessingDialog?.setAttribute("open", "");
  }
}

function closeBlessingDialog() {
  if (typeof dom.blessingDialog?.close === "function") {
    dom.blessingDialog.close();
  } else {
    dom.blessingDialog?.removeAttribute("open");
  }
}

function renderBlessingDialog() {
  if (!dom.blessingMeritValue) return;
  state.blessing = normalizeBlessingState(state.blessing);
  dom.blessingMeritValue.textContent = String(state.blessing.merit);
}

function tapWoodenFish() {
  state.blessing = normalizeBlessingState(state.blessing);
  state.blessing.merit += 1;
  state.blessing.taps += 1;
  state.blessing.lastTappedAt = new Date().toISOString();
  saveState();
  renderBlessingDialog();
  playWoodenFishSound();
  dom.blessingWoodenFish?.classList.remove("is-tapping");
  void dom.blessingWoodenFish?.offsetWidth;
  dom.blessingWoodenFish?.classList.add("is-tapping");
  showToast("功德 +1");
}

function playWoodenFishSound() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  const audioContext = new AudioContextClass();
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(420, now);
  oscillator.frequency.exponentialRampToValueAtTime(145, now + 0.16);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(820, now);
  filter.Q.setValueAtTime(7, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.34, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.24);
  window.setTimeout(() => audioContext.close?.(), 360);
}

function openDiaryDialog() {
  diarySelectedDate = selectedDate;
  diaryViewDate = parseDate(diarySelectedDate);
  renderDiarySystem();
  if (typeof dom.diaryDialog?.showModal === "function") {
    if (!dom.diaryDialog.open) dom.diaryDialog.showModal();
  } else {
    dom.diaryDialog?.setAttribute("open", "");
  }
}

function closeDiaryDialog() {
  const day = ensureDay(diarySelectedDate || selectedDate);
  if (dom.reportInput) day.report = dom.reportInput.value;
  saveState();
  if (typeof dom.diaryDialog?.close === "function") {
    dom.diaryDialog.close();
  } else {
    dom.diaryDialog?.removeAttribute("open");
  }
  render();
  showToast("日记已保存。");
}

function renderDiarySystem() {
  renderDiaryCalendar();
  renderDiaryDay();
  renderComicDiaryForm();
}

function renderDiaryCalendar() {
  if (!dom.diaryCalendarGrid) return;
  const year = diaryViewDate.getFullYear();
  const month = diaryViewDate.getMonth();
  const first = new Date(year, month, 1);
  const start = new Date(first);
  start.setDate(first.getDate() - first.getDay());
  if (dom.diaryMonthLabel) dom.diaryMonthLabel.textContent = `${year}年${month + 1}月`;
  const today = dateKey(new Date());
  const comicDates = new Set(loadComicDiaries().map((comic) => comic.date));
  const weekHeads = ["日", "一", "二", "三", "四", "五", "六"]
    .map((label) => `<span class="diary-week-head">${label}</span>`)
    .join("");
  const days = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const key = dateKey(date);
    const day = state.days?.[key];
    const hasContent = Boolean(day?.report || day?.diaryChecklist?.length || comicDates.has(key));
    return `
      <button class="${date.getMonth() === month ? "" : "is-muted"} ${key === diarySelectedDate ? "is-selected" : ""} ${key === today ? "is-today" : ""} ${hasContent ? "has-content" : ""}" type="button" data-action="select-diary-date" data-date="${key}">
        <span>${date.getDate()}</span>
      </button>
    `;
  }).join("");
  dom.diaryCalendarGrid.innerHTML = weekHeads + days;
}

function renderDiaryDay() {
  const day = ensureDay(diarySelectedDate);
  if (dom.diarySelectedDateLabel) dom.diarySelectedDateLabel.textContent = diaryDateTitle(diarySelectedDate);
  if (dom.reportInput && dom.reportInput.value !== day.report) {
    dom.reportInput.value = day.report;
  }
  renderDiaryChecklist();
  renderComicDiarySavedList();
}

function renderDiaryChecklist() {
  if (!dom.diaryChecklist) return;
  const day = ensureDay(diarySelectedDate);
  if (!day.diaryChecklist.length) {
    dom.diaryChecklist.innerHTML = `<p class="diary-empty">还没有清单，点“新增”写一件今天的小事。</p>`;
    return;
  }
  dom.diaryChecklist.innerHTML = day.diaryChecklist.map((item) => `
    <div class="diary-check-item ${item.done ? "is-done" : ""}">
      <button type="button" data-action="toggle-diary-check-item" data-id="${escapeHtml(item.id)}" aria-label="${item.done ? "取消完成" : "完成"}">${item.done ? "✓" : ""}</button>
      <input type="text" data-diary-check-text data-id="${escapeHtml(item.id)}" value="${escapeHtml(item.text)}" maxlength="60" />
      <button type="button" data-action="delete-diary-check-item" data-id="${escapeHtml(item.id)}" aria-label="删除">×</button>
    </div>
  `).join("");
}

function diaryDateTitle(dayKey) {
  const label = formatTimelineDate(dayKey);
  if (dayKey === dateKey(new Date())) return `${label} · 今天`;
  return label;
}

function selectDiaryDate(dayKey) {
  if (!isDateKey(dayKey)) return;
  if (dom.reportInput) ensureDay(diarySelectedDate).report = dom.reportInput.value;
  diarySelectedDate = dayKey;
  diaryViewDate = parseDate(dayKey);
  saveState();
  renderDiarySystem();
}

function shiftDiaryMonth(delta) {
  diaryViewDate = new Date(diaryViewDate.getFullYear(), diaryViewDate.getMonth() + delta, 1);
  renderDiaryCalendar();
}

function addDiaryCheckItem() {
  const day = ensureDay(diarySelectedDate);
  day.diaryChecklist = normalizeDiaryChecklist(day.diaryChecklist);
  if (day.diaryChecklist.length >= 12) {
    showToast("当天清单最多 12 条。");
    return;
  }
  day.diaryChecklist.push({
    id: makeId("diary-item"),
    text: "新的清单",
    done: false,
    createdAt: new Date().toISOString(),
  });
  saveState();
  renderDiarySystem();
}

function updateDiaryCheckItem(id, text) {
  const day = ensureDay(diarySelectedDate);
  const item = day.diaryChecklist.find((entry) => entry.id === id);
  if (!item) return;
  item.text = cleanEditableText(text, item.text, 60);
  saveState();
  renderDiaryCalendar();
}

function toggleDiaryCheckItem(id) {
  const day = ensureDay(diarySelectedDate);
  const item = day.diaryChecklist.find((entry) => entry.id === id);
  if (!item) return;
  item.done = !item.done;
  saveState();
  renderDiaryChecklist();
  renderDiaryCalendar();
}

function deleteDiaryCheckItem(id) {
  const day = ensureDay(diarySelectedDate);
  day.diaryChecklist = day.diaryChecklist.filter((item) => item.id !== id);
  saveState();
  renderDiarySystem();
}

function openComicDiaryPanel() {
  if (!dom.comicDiaryPanel) return;
  dom.comicDiaryPanel.hidden = false;
  renderComicDiaryForm();
  renderComicDiarySavedList();
  if (!dom.comicSourceInput?.value) {
    const day = ensureDay(diarySelectedDate || selectedDate);
    dom.comicSourceInput.value = day.report || "";
  }
  dom.comicSourceInput?.focus();
}

function closeComicDiaryPanel() {
  if (dom.comicDiaryPanel) dom.comicDiaryPanel.hidden = true;
}

function toggleComicDiaryPanel() {
  if (!dom.comicDiaryPanel) return;
  if (dom.comicDiaryPanel.hidden) {
    openComicDiaryPanel();
  } else {
    closeComicDiaryPanel();
  }
}

function renderComicDiaryForm() {
  renderCharacterSelectForComic();
  if (dom.comicPanelCountInput && !["4", "6"].includes(dom.comicPanelCountInput.value)) {
    dom.comicPanelCountInput.value = "4";
  }
  if (dom.comicMoodStyleInput && !COMIC_MOOD_LABELS[dom.comicMoodStyleInput.value]) {
    dom.comicMoodStyleInput.value = "cute";
  }
  renderComicDiarySavedList();
}

function renderCharacterSelectForComic() {
  if (!dom.comicCharacterSelect) return;
  const comicCharacters = getComicCharacterOptions();
  const current = dom.comicCharacterSelect.value || getSelectedCharacter()?.id || comicCharacters[0]?.id || "bunny";
  dom.comicCharacterSelect.innerHTML = comicCharacters.map((character) => `
    <option value="${escapeHtml(character.id)}">${escapeHtml(character.name)}</option>
  `).join("");
  dom.comicCharacterSelect.value = comicCharacters.some((character) => character.id === current)
    ? current
    : (comicCharacters[0]?.id || "bunny");
}

function getComicCharacterOptions() {
  const builtIn = characters.map((character) => ({
    id: character.id,
    name: character.name,
    avatar: getCharacterImage(character, "calm"),
    expressions: character.expressions || {},
    source: "game",
  }));
  const relationshipCards = loadRelationshipCardsForComic();
  const relationshipOptions = relationshipCards.map((card) => ({
    id: `relationship:${card.id}`,
    name: comicRelationshipCardName(card),
    avatar: comicRelationshipCardAvatar(card),
    expressions: {},
    source: "relationship",
  }));
  const seen = new Set();
  return [...builtIn, ...relationshipOptions].filter((character) => {
    if (!character.id || seen.has(character.id)) return false;
    seen.add(character.id);
    return true;
  });
}

function loadRelationshipCardsForComic() {
  try {
    const raw = localStorage.getItem(RELATIONSHIP_CARDS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((card) => card && typeof card === "object") : [];
  } catch (error) {
    return [];
  }
}

function comicRelationshipCardName(card) {
  return cleanEditableText(card?.basic?.name || card?.basic?.realName || card?.name, "关系角色", 24);
}

function comicRelationshipCardAvatar(card) {
  const firstImage = Array.isArray(card?.avatar?.imageItems)
    ? card.avatar.imageItems.find((item) => String(item?.src || "").startsWith("data:image/"))
    : null;
  return firstImage?.src || absoluteAssetUrl(characters[0]?.image || "./assets/characters/bunny-white.png");
}

function getSelectedComicCharacter() {
  const options = getComicCharacterOptions();
  const id = dom.comicCharacterSelect?.value || getSelectedCharacter()?.id || "bunny";
  return options.find((character) => character.id === id) || options[0] || {
    id: "bunny",
    name: "兔兔",
    avatar: "./assets/characters/bunny-white.png",
    expressions: {},
  };
}

function generateComicDiary() {
  openComicDiaryPanel();
  const selectedCharacter = getSelectedComicCharacter();
  const sourceText = cleanComicSourceText(dom.comicSourceInput?.value || ensureDay(diarySelectedDate).report || "");
  if (dom.comicSourceInput) dom.comicSourceInput.value = sourceText;
  const panelCount = Number(dom.comicPanelCountInput?.value) === 6 ? 6 : 4;
  const moodStyle = COMIC_MOOD_LABELS[dom.comicMoodStyleInput?.value] ? dom.comicMoodStyleInput.value : "cute";
  currentComicDiaryDraft = generateComicScriptFromText(sourceText, selectedCharacter, panelCount, moodStyle);
  renderComicDiaryPage(currentComicDiaryDraft);
  showToast("漫画日记生成好了。");
}

function clearComicDiaryDraft() {
  currentComicDiaryDraft = null;
  if (dom.comicSourceInput) dom.comicSourceInput.value = "";
  if (dom.comicPanelCountInput) dom.comicPanelCountInput.value = "4";
  if (dom.comicMoodStyleInput) dom.comicMoodStyleInput.value = "cute";
  if (dom.comicDiaryPreview) {
    dom.comicDiaryPreview.innerHTML = `<p class="diary-empty">漫画草稿已清空，可以重新输入。</p>`;
  }
  dom.comicSourceInput?.focus();
  showToast("漫画草稿已清空。");
}

function cleanComicSourceText(value) {
  return cleanEditableText(value, "今天发生了一点小事，我想把它记下来。", 420);
}

function generateComicScriptFromText(sourceText, selectedCharacter, panelCount = 4, moodStyle = "cute") {
  const now = new Date().toISOString();
  const count = panelCount === 6 ? 6 : 4;
  const text = cleanComicSourceText(sourceText);
  const segments = splitComicSourceText(text, count);
  const expression = COMIC_EXPRESSION_MAP[moodStyle] || "calm";
  const backgrounds = comicBackgroundSequence(moodStyle, count);
  const dialogueTemplates = comicDialogueTemplates(moodStyle);
  const panels = Array.from({ length: count }, (_, index) => {
    const narration = segments[index] || comicFallbackNarration(index, count, moodStyle);
    return {
      id: makeId("comic-panel"),
      index: index + 1,
      scene: COMIC_BACKGROUND_MAP[backgrounds[index]] || COMIC_BACKGROUND_MAP.default,
      emotion: comicEmotionLabel(moodStyle, index),
      characterId: selectedCharacter.id,
      characterName: selectedCharacter.name,
      narration,
      dialogue: dialogueTemplates[index % dialogueTemplates.length],
      pose: "default",
      expression,
      background: backgrounds[index] || "default",
    };
  });
  return {
    id: makeId("comic-diary"),
    title: comicTitleFromText(text, moodStyle),
    date: diarySelectedDate || selectedDate || dateKey(new Date()),
    characterIds: [selectedCharacter.id],
    characterName: selectedCharacter.name,
    characterAvatar: absoluteAssetUrl(selectedCharacter.avatar || characters[0]?.image || ""),
    sourceText: text,
    moodStyle,
    panelCount: count,
    panels,
    createdAt: now,
    updatedAt: now,
  };
}

async function generateComicScriptWithAI(sourceText, selectedCharacter, panelCount, moodStyle) {
  // TODO: future AI API integration. Keep local rules as the stable fallback for now.
  return generateComicScriptFromText(sourceText, selectedCharacter, panelCount, moodStyle);
}

function splitComicSourceText(text, count) {
  const parts = String(text || "")
    .split(/[\n。！？!?；;，,]+/g)
    .map((item) => cleanEditableText(item, "", 70))
    .filter(Boolean);
  if (!parts.length) return [];
  if (parts.length >= count) return parts.slice(0, count);
  const expanded = [...parts];
  while (expanded.length < count) {
    expanded.push(comicBridgeNarration(expanded.length, count));
  }
  return expanded;
}

function comicBridgeNarration(index, count) {
  if (index === count - 1) return "最后，我把这一刻收进今天的小小记录里。";
  return ["事情慢慢展开，我也在里面一点点反应。", "我停下来想了想，决定先照顾好当下。", "下一步不需要很大，只要继续往前一点。"][index % 3];
}

function comicFallbackNarration(index, count, moodStyle) {
  if (index === 0) return "今天发生了一件值得记录的小事。";
  if (index === count - 1) return moodStyle === "sad" ? "虽然不完美，但我还是撑到了这一格。" : "今天没有白过，我有认真生活。";
  return comicBridgeNarration(index, count);
}

function comicBackgroundSequence(moodStyle, count) {
  const presets = {
    cute: ["room", "desk", "sparkle", "night", "sparkle", "room"],
    funny: ["room", "street", "desk", "sparkle", "street", "night"],
    sad: ["night", "room", "desk", "sparkle", "room", "night"],
    healing: ["room", "desk", "sparkle", "night", "room", "sparkle"],
    angry: ["street", "desk", "room", "sparkle", "night", "room"],
    strange: ["sparkle", "street", "room", "night", "desk", "sparkle"],
  };
  return (presets[moodStyle] || presets.cute).slice(0, count);
}

function comicDialogueTemplates(moodStyle) {
  const templates = {
    cute: ["先试试看！", "我有在努力哦。", "这格也要可爱一点。", "今天收工，给自己一朵花。"],
    funny: ["等一下，这也太突然了。", "我宣布：先假装很懂。", "好，剧情开始拐弯。", "至少很好笑，算赢。"],
    sad: ["我有点没力气。", "但我还是来了。", "慢一点也可以。", "明天再轻轻继续吧。"],
    healing: ["先呼吸一下。", "一点点就很好。", "我正在恢复中。", "把今天温柔收好。"],
    angry: ["我真的会生气。", "这件事需要边界。", "先保护自己。", "我可以认真表达不满。"],
    strange: ["咦，事情变怪了。", "我先观察一下。", "这个走向不简单。", "算了，也是一种剧情。"],
  };
  return templates[moodStyle] || templates.cute;
}

function comicEmotionLabel(moodStyle, index) {
  const labels = {
    cute: ["期待", "努力", "闪闪", "满足", "开心", "收藏"],
    funny: ["惊讶", "混乱", "好笑", "转折", "离谱", "收场"],
    sad: ["低落", "挣扎", "缓慢", "一点光", "安静", "继续"],
    healing: ["呼吸", "照顾", "放松", "治愈", "稳定", "晚安"],
    angry: ["不满", "边界", "保护", "表达", "冷静", "收束"],
    strange: ["奇怪", "观察", "谜团", "漂浮", "转圈", "落地"],
  };
  return (labels[moodStyle] || labels.cute)[index] || "日常";
}

function comicTitleFromText(text, moodStyle) {
  const first = splitComicSourceText(text, 1)[0] || "";
  if (first) return cleanEditableText(first, "今天也努力活着", 16);
  const titleMap = {
    cute: "今天也努力活着",
    funny: "今天的离谱小剧场",
    sad: "慢慢撑过今天",
    healing: "今天的温柔存档",
    angry: "边界启动日",
    strange: "奇怪但真实的一天",
  };
  return titleMap[moodStyle] || "今天也努力活着";
}

function renderComicDiaryPage(comic = currentComicDiaryDraft) {
  if (!dom.comicDiaryPreview) return;
  if (!comic) {
    dom.comicDiaryPreview.innerHTML = `<p class="diary-empty">还没有生成漫画。</p>`;
    return;
  }
  dom.comicDiaryPreview.innerHTML = comicDiaryPageHtml(comic);
}

function comicDiaryPageHtml(comic) {
  const safe = normalizeComicDiary(comic);
  return `
    <article class="comic-diary-page comic-export-target is-${escapeHtml(safe.moodStyle)}" data-comic-id="${escapeHtml(safe.id)}">
      <header class="comic-page-head">
        <span>漫画日记</span>
        <div>
          <h3>${escapeHtml(safe.title)}</h3>
          <p>${escapeHtml(safe.date)} · ${escapeHtml(safe.characterName || "角色")}</p>
        </div>
      </header>
      <section class="comic-panel-grid is-${safe.panelCount === 6 ? "six" : "four"}">
        ${safe.panels.map((panel) => renderComicPanel(panel, safe)).join("")}
      </section>
    </article>
  `;
}

function renderComicPanel(panel, comic) {
  const avatar = absoluteAssetUrl(getComicPanelAvatar(comic, panel.expression));
  const icon = comicEmotionIcon(comic.moodStyle, panel.index);
  return `
    <article class="comic-panel is-bg-${escapeHtml(panel.background || "default")}">
      <span class="comic-panel-index">${panel.index}</span>
      <span class="comic-emotion-icon" aria-hidden="true">${escapeHtml(icon)}</span>
      <p class="comic-narration">${escapeHtml(panel.narration)}</p>
      <img class="comic-character" src="${escapeHtml(avatar)}" alt="${escapeHtml(panel.characterName || comic.characterName || "角色")}" />
      <p class="comic-dialogue">${escapeHtml(panel.dialogue)}</p>
    </article>
  `;
}

function getComicPanelAvatar(comic, expression = "calm") {
  const character = characters.find((item) => item.id === comic.characterIds?.[0] || item.id === comic.characterId);
  if (character) return getCharacterImage(character, expression === "happy" ? "excited" : expression);
  return comic.characterAvatar || characters[0]?.image || "./assets/characters/bunny-white.png";
}

function absoluteAssetUrl(src) {
  const value = String(src || "");
  if (!value || value.startsWith("data:") || /^https?:/i.test(value) || value.startsWith("file:")) return value;
  try {
    return new URL(value, window.location.href).href;
  } catch (error) {
    return value;
  }
}

function comicEmotionIcon(moodStyle, index) {
  const icons = {
    cute: ["✦", "♡", "✿"],
    funny: ["!?", "♪", "哈"],
    sad: ["☁", "…", "滴"],
    healing: ["☾", "✧", "呼"],
    angry: ["!", "火", "界"],
    strange: ["?", "◇", "嗡"],
  };
  const list = icons[moodStyle] || icons.cute;
  return list[(index - 1) % list.length];
}

function saveComicDiary() {
  if (!currentComicDiaryDraft) {
    generateComicDiary();
  }
  if (!currentComicDiaryDraft) return;
  const now = new Date().toISOString();
  const comic = normalizeComicDiary({
    ...currentComicDiaryDraft,
    date: diarySelectedDate || selectedDate,
    updatedAt: now,
  });
  const saved = loadComicDiaries().filter((item) => item.id !== comic.id);
  saveComicDiaries([comic, ...saved].slice(0, 80));
  currentComicDiaryDraft = comic;
  renderComicDiarySavedList();
  renderDiaryCalendar();
  showToast("漫画日记已保存。");
}

function loadComicDiaryDraft(id) {
  const comic = loadComicDiaries().find((item) => item.id === id);
  if (!comic) return;
  openComicDiaryPanel();
  currentComicDiaryDraft = comic;
  if (dom.comicSourceInput) dom.comicSourceInput.value = comic.sourceText || "";
  if (dom.comicPanelCountInput) dom.comicPanelCountInput.value = String(comic.panelCount || 4);
  if (dom.comicMoodStyleInput) dom.comicMoodStyleInput.value = comic.moodStyle || "cute";
  renderComicDiaryPage(comic);
}

function renderComicDiarySavedList() {
  if (!dom.comicDiarySavedList) return;
  const date = diarySelectedDate || selectedDate;
  const comics = loadComicDiaries().filter((item) => item.date === date).slice(0, 6);
  if (!comics.length) {
    dom.comicDiarySavedList.innerHTML = `<p class="diary-empty">这一天还没有保存漫画日记。</p>`;
    return;
  }
  dom.comicDiarySavedList.innerHTML = `
    <strong>已保存漫画</strong>
    ${comics.map((comic) => `
      <button type="button" data-action="load-comic-diary" data-id="${escapeHtml(comic.id)}">
        <span>${escapeHtml(comic.title || "漫画日记")}</span>
        <small>${escapeHtml(COMIC_MOOD_LABELS[comic.moodStyle] || "可爱")} · ${comic.panelCount || 4} 格</small>
      </button>
    `).join("")}
  `;
}

function loadComicDiaries() {
  try {
    const raw = localStorage.getItem(COMIC_DIARY_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.map(normalizeComicDiary).filter(Boolean) : [];
  } catch (error) {
    return [];
  }
}

function saveComicDiaries(comics) {
  localStorage.setItem(COMIC_DIARY_KEY, JSON.stringify((Array.isArray(comics) ? comics : []).map(normalizeComicDiary).filter(Boolean)));
}

function normalizeComicDiary(comic) {
  if (!comic || typeof comic !== "object") return null;
  const now = new Date().toISOString();
  const panelCount = Number(comic.panelCount) === 6 ? 6 : 4;
  const moodStyle = COMIC_MOOD_LABELS[comic.moodStyle] ? comic.moodStyle : "cute";
  const characterIds = Array.isArray(comic.characterIds) && comic.characterIds.length
    ? comic.characterIds.map((id) => String(id)).slice(0, 4)
    : [state?.selectedCharacter || "bunny"];
  const character = getComicCharacterOptions().find((item) => item.id === characterIds[0])
    || characters.find((item) => item.id === characterIds[0])
    || characters[0]
    || { id: "bunny", name: "兔兔", avatar: "./assets/characters/bunny-white.png" };
  const panels = Array.isArray(comic.panels) ? comic.panels : [];
  return {
    id: cleanEditableText(comic.id, makeId("comic-diary"), 90),
    title: cleanEditableText(comic.title, "今天也努力活着", 28),
    date: isDateKey(comic.date) ? comic.date : (diarySelectedDate || selectedDate || dateKey(new Date())),
    characterIds,
    characterName: cleanEditableText(comic.characterName || character.name, "兔兔", 24),
    characterAvatar: absoluteAssetUrl(comic.characterAvatar || character.avatar || characters[0]?.image || ""),
    sourceText: cleanComicSourceText(comic.sourceText || ""),
    moodStyle,
    panelCount,
    panels: panels.slice(0, panelCount).map((panel, index) => normalizeComicPanel(panel, comic, index, moodStyle)),
    createdAt: comic.createdAt || now,
    updatedAt: comic.updatedAt || now,
  };
}

function normalizeComicPanel(panel, comic, index, moodStyle) {
  const source = panel && typeof panel === "object" ? panel : {};
  const characterId = source.characterId || comic.characterIds?.[0] || "";
  return {
    id: cleanEditableText(source.id, makeId("comic-panel"), 90),
    index: index + 1,
    scene: cleanEditableText(source.scene, COMIC_BACKGROUND_MAP.default, 20),
    emotion: cleanEditableText(source.emotion, comicEmotionLabel(moodStyle, index), 16),
    characterId,
    characterName: cleanEditableText(source.characterName || comic.characterName, "角色", 24),
    narration: cleanEditableText(source.narration, comicFallbackNarration(index, Number(comic.panelCount) || 4, moodStyle), 96),
    dialogue: cleanEditableText(source.dialogue, comicDialogueTemplates(moodStyle)[index % comicDialogueTemplates(moodStyle).length], 56),
    pose: cleanEditableText(source.pose, "default", 20),
    expression: cleanEditableText(source.expression, COMIC_EXPRESSION_MAP[moodStyle] || "calm", 20),
    background: cleanEditableText(source.background, "default", 20),
  };
}

async function exportComicDiaryAsPng() {
  if (!currentComicDiaryDraft) {
    showToast("请先生成漫画。");
    return;
  }
  const source = dom.comicDiaryPreview?.querySelector(".comic-export-target");
  if (!source) {
    showToast("找不到要导出的漫画页。");
    return;
  }
  let exportLayer = null;
  try {
    if (document.fonts?.ready) await document.fonts.ready;
    exportLayer = document.createElement("div");
    exportLayer.className = "invoice-export-layer comic-export-layer";
    const clone = source.cloneNode(true);
    clone.classList.add("comic-export-clone");
    exportLayer.appendChild(clone);
    document.body.appendChild(exportLayer);
    await waitForInvoiceImages(clone);
    await nextAnimationFrame();
    await nextAnimationFrame();
    const width = Math.ceil(clone.scrollWidth || clone.getBoundingClientRect().width || 330);
    const height = Math.ceil(clone.scrollHeight || clone.getBoundingClientRect().height || 520);
    await exportComicCloneToPng(clone, width, height, currentComicDiaryDraft);
  } catch (error) {
    showToast("漫画导出失败，请再试一次。");
  } finally {
    exportLayer?.remove();
  }
}

function exportComicCloneToPng(clone, width, height, comic) {
  const css = comicExportCss();
  const serialized = new XMLSerializer().serializeToString(clone);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="width:${width}px;height:${height}px;background:transparent;overflow:visible;"><style>${css}</style>${serialized}</div></foreignObject></svg>`;
  const image = new Image();
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
  return new Promise((resolve) => {
    image.onload = () => {
      const scale = Math.min(Math.max(2, Math.ceil(window.devicePixelRatio || 1)), 3);
      const canvas = document.createElement("canvas");
      canvas.width = width * scale;
      canvas.height = height * scale;
      const context = canvas.getContext("2d");
      context.scale(scale, scale);
      context.clearRect(0, 0, width, height);
      context.drawImage(image, 0, 0, width, height);
      URL.revokeObjectURL(url);
      downloadComicPngFromCanvas(canvas, comic);
      resolve();
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      showToast("漫画导出失败，请再试一次。");
      resolve();
    };
    image.src = url;
  });
}

function downloadComicPngFromCanvas(canvas, comic) {
  canvas.toBlob((blob) => {
    if (!blob) {
      showToast("漫画导出失败，请再试一次。");
      return;
    }
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `comic-diary-${comic?.date || selectedDate}.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1200);
    showToast("漫画 PNG 已导出。");
  }, "image/png");
}

function comicExportCss() {
  return Array.from(document.styleSheets)
    .map((sheet) => {
      try {
        return Array.from(sheet.cssRules || []).map((rule) => rule.cssText).join("\n");
      } catch (error) {
        return "";
      }
    })
    .join("\n");
}

function renderGrowthDialog() {
  const xp = allXP();
  const companyLevelStatus = getCompanyLevelStatus();
  const mainTotal = Object.values(state.days).reduce((sum, day) => sum + completedMainCount(day), 0);
  const mainTarget = plannedMainTaskTarget(ensureDay(selectedDate));
  const passDays = Object.values(state.days).filter((day) => mainTarget && day.settled && completedMainCount(day) >= mainTarget).length;
  const safeDays = Object.values(state.days).filter((day) => day.safeMode).length;
  const sideDone = Object.values(state.days).reduce(
    (sum, day) => sum + sideQuests.filter((quest) => day.side?.[quest.id]).length,
    0
  );
  const lifeDone = Object.values(state.weeks || {}).reduce(
    (sum, week) => sum + lifeGroups.flatMap(lifeIds).filter((id) => week.life?.[id]).length,
    0
  );

  const achievements = [
    { title: "开局启动", text: "完成任意 1 个主线任务", unlocked: mainTotal >= 1 },
    { title: "今日通关", text: `完成 ${formatDuration(mainTarget * 60)} 主线并结算一天`, unlocked: passDays >= 1 },
    { title: "安全优先", text: "使用保护模式完成一次安全结算", unlocked: safeDays >= 1 },
    { title: "副线冒险", text: "完成任意 1 个作品集或软件任务", unlocked: sideDone >= 1 },
    { title: "生命值维护", text: "记录任意 1 个本周维护任务", unlocked: lifeDone >= 1 },
    { title: "Lv.2 解锁", text: "累计达到 200 XP", unlocked: xp >= 200 },
  ];

  dom.growthTitle.textContent = `Lv.${companyLevelStatus.level} ${companyLevelStatus.levelName}`;
  dom.growthSummary.textContent = companyLevelStatus.isMax
    ? `公司已满级，当前金币 ${formatCoins(companyLevelStatus.coins)}。`
    : `当前金币 ${formatCoins(companyLevelStatus.coins)}，升级到 ${companyLevelStatus.nextLevelName} 需要 ${formatCoins(companyLevelStatus.requiredCoins)}。`;
  dom.achievementList.innerHTML = achievements
    .map(
      (item) => `
        <article class="achievement ${item.unlocked ? "is-unlocked" : ""}">
          <span>${item.unlocked ? "✓" : "?"}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function exportData() {
  const payload = {
    ...state,
    exportedAt: new Date().toISOString(),
    storageKey: STORAGE_KEY,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `30-day-quest-${selectedDate}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("存档已导出。");
}

function importData(event) {
  const [file] = event.target.files;
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(String(reader.result));
      if (!imported || typeof imported !== "object" || !imported.days) {
        throw new Error("bad save");
      }
      imported.weeks ||= {};
      imported.mainTasks = normalizeMainTasks(imported.mainTasks);
      mainTasks = imported.mainTasks;
      imported.ledger = normalizeLedger(imported.ledger);
      imported.editable = normalizeEditableState(imported.editable);
      imported.selectedCharacter = validCharacterId(imported.selectedCharacter);
      state = imported;
      ensureDay(selectedDate);
      ensureWeek(selectedDate);
      saveState();
      render();
      showToast("存档已读取。");
    } catch {
      showToast("这个存档读不了，请检查 JSON 文件。");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function jumpTo(selector) {
  const page = gamePageForSelector(selector);
  switchPage(page);
  const target = document.querySelector(selector);
  if (!target) return;
  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function scrollToPageTop() {
  requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  });
}

function activateGamePage(pageId = "home", updateHash = true) {
  switchPage(pageId, { updateHash, animate: false });
}

function switchPage(nextPageId, options = {}) {
  const safePage = normalizeGamePageId(nextPageId);
  const { updateHash = true, animate = true } = options;
  if (isPageSwitching) return false;
  if (safePage === currentPageId) {
    updatePageNav(safePage, updateHash);
    return false;
  }

  const currentPage = document.querySelector(`[data-page="${currentPageId}"]`);
  const nextPage = document.querySelector(`[data-page="${safePage}"]`);
  if (!nextPage) return false;

  if (!animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    if (currentPage) {
      currentPage.classList.remove("is-active", "is-entering", "is-leaving");
      currentPage.style.display = "none";
    }
    nextPage.classList.remove("is-entering", "is-leaving");
    nextPage.classList.add("is-active");
    nextPage.style.display = "block";
    currentPageId = safePage;
    updatePageNav(safePage, updateHash);
    return true;
  }

  isPageSwitching = true;

  if (currentPage) {
    currentPage.classList.remove("is-active", "is-entering");
    currentPage.classList.add("is-leaving");
    currentPage.style.display = "block";
  }

  nextPage.classList.remove("is-leaving", "is-active");
  nextPage.classList.add("is-entering");
  nextPage.style.display = "block";

  requestAnimationFrame(() => {
    nextPage.classList.remove("is-entering");
    nextPage.classList.add("is-active");
  });

  window.setTimeout(() => {
    if (currentPage) {
      currentPage.classList.remove("is-leaving");
      currentPage.style.display = "none";
    }
    currentPageId = safePage;
    isPageSwitching = false;
    updatePageNav(safePage, updateHash);
  }, 280);

  return true;
}

function updatePageNav(pageId, updateHash = true) {
  const safePage = normalizeGamePageId(pageId);
  document.body.dataset.gamePage = safePage;
  document.querySelectorAll(".bottom-dock button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.navPage === safePage);
  });
  if (updateHash) {
    const hash = pageDefaultSelector(safePage);
    if (window.location.hash !== hash) window.history.replaceState(null, "", hash);
  }
}

function pageDefaultSelector(pageId = "home") {
  const activeButton = document.querySelector(`.bottom-dock button[data-nav-page="${pageId}"]`);
  return activeButton?.dataset.jump || "#today-stage";
}

function gamePageForSelector(selector = "") {
  if (selector === "#time-distribution-zone") return "home";
  if (["#mainline", "#sidequests", "#daily-goals", "#timeline-zone"].includes(selector)) return "tasks";
  if (["#finance-zone", "#virtual-finance-zone", "#ledger-zone", "#report-zone", "#archive-zone"].includes(selector)) return "finance";
  return "home";
}

function normalizeGamePageId(pageId) {
  if (pageId === "report") return "finance";
  return ["home", "tasks", "finance"].includes(pageId) ? pageId : "home";
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  dom.toast.textContent = message;
  dom.toast.hidden = false;
  toastTimer = window.setTimeout(() => {
    dom.toast.hidden = true;
  }, 2600);
}

function setRangeFill(input, value, max = 10) {
  if (!input) return;
  const percent = clamp((Number(value) / max) * 100, 0, 100);
  input.style.setProperty("--fill", `${percent}%`);
}

function getSelectedCharacter() {
  const day = state?.days?.[selectedDate];
  const dayCharacterId = day?.characterId && characters.some((item) => item.id === day.characterId)
    ? day.characterId
    : "";
  return characters.find((item) => item.id === (dayCharacterId || state.selectedCharacter)) || characters[0];
}

function validCharacterId(id) {
  return characters.some((item) => item.id === id) ? id : characters[0].id;
}

function lifeIds(group) {
  return Array.from({ length: group.target }, (_, index) => `${group.id}-${index + 1}`);
}

function clampMood(value) {
  const mood = Number(value);
  if (!Number.isFinite(mood)) return MOOD_MIN;
  return clamp(Math.round(mood), MOOD_MIN, MOOD_MAX);
}

function moodNowForDate(dayKey = selectedDate, now = new Date()) {
  const todayKey = dateKey(now);
  if (dayKey < todayKey) return new Date(`${dayKey}T23:59:00`);
  if (dayKey > todayKey) return new Date(`${dayKey}T${String(MOOD_DAY_START_HOUR).padStart(2, "0")}:00:00`);
  return now;
}

function getMoodDayProgress(now = new Date()) {
  const hour = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;
  if (hour < MOOD_DAY_START_HOUR) {
    return { status: "before-start", elapsedHours: 0, percent: 0 };
  }
  if (hour >= MOOD_DAY_END_HOUR) {
    return { status: "settled", elapsedHours: MOOD_DAY_TOTAL_HOURS, percent: 100 };
  }
  const elapsedHours = clamp(hour - MOOD_DAY_START_HOUR, 0, MOOD_DAY_TOTAL_HOURS);
  return {
    status: "running",
    elapsedHours,
    percent: (elapsedHours / MOOD_DAY_TOTAL_HOURS) * 100,
  };
}

function calculateMoodBase(now = new Date()) {
  const progress = getMoodDayProgress(now);
  return clamp(Math.round(MOOD_MID - progress.elapsedHours * (MOOD_MID / MOOD_DAY_TOTAL_HOURS)), MOOD_MIN, MOOD_MID);
}

function isLifeMaintenanceTask(task = {}) {
  return Boolean(task?.isLifeMaintenance || task?.taskType === "life-maintenance");
}

function getLifeMaintenanceMinutesForDate(dayKey = selectedDate) {
  const day = state?.days?.[dayKey] || defaultDay();
  const recordMinutes = normalizeLifeRecords(day.lifeRecords).reduce((sum, record) => sum + Number(record.duration || 0), 0);
  const activeMinutes = Object.values(normalizeLifeActive(day.lifeActive)).reduce((sum, timer) => sum + elapsedLifeMinutes(timer), 0);
  const slotMinutes = Object.keys(normalizeLifeMaintenanceSlots(day.lifeMaintenanceSlots)).length * LIFE_MAINTENANCE_SLOT_MINUTES;
  const mainTaskMinutes = getVisibleMainTasks().reduce((sum, task) => {
    if (!isLifeMaintenanceTask(task)) return sum;
    const done = task.lockedFromCompany ? Boolean(task.companyDone) : Boolean(day.main?.[task.id]);
    if (done) return sum + Math.max(LIFE_MAINTENANCE_SLOT_MINUTES, Number(task.durationMinutes) || LIFE_MAINTENANCE_SLOT_MINUTES);
    const active = day.taskActive?.main?.[task.id];
    if (active) return sum + elapsedTaskMinutes(active);
    const runs = (day.taskRuns || []).filter((run) => run.type === "main" && run.sourceTaskId === task.id);
    return sum + runs.reduce((inner, run) => inner + Number(run.duration || 0), 0);
  }, 0);
  return Math.max(0, Math.round(recordMinutes + activeMinutes + slotMinutes + mainTaskMinutes));
}

function calculateMaintenanceBonus(minutes) {
  return clamp((Math.max(0, Number(minutes) || 0) / LIFE_MAINTENANCE_TARGET_MINUTES) * MOOD_MAX, MOOD_MIN, MOOD_MAX);
}

function calculateDailyMood(dayKey = selectedDate, now = new Date()) {
  const moodNow = moodNowForDate(dayKey, now);
  const maintenanceMinutes = getLifeMaintenanceMinutesForDate(dayKey);
  const moodBase = calculateMoodBase(moodNow);
  const maintenanceBonus = calculateMaintenanceBonus(maintenanceMinutes);
  const progress = getMoodDayProgress(moodNow);
  if (dayKey < dateKey(now)) progress.status = "settled";
  return {
    mood: clampMood(moodBase + maintenanceBonus),
    moodBase,
    maintenanceBonus,
    maintenanceMinutes,
    progress,
  };
}

function updateMoodWhenTaskChanges(dayKey = selectedDate) {
  const day = state?.days?.[dayKey];
  if (!day) return null;
  const result = calculateDailyMood(dayKey);
  day.mood = result.mood;
  return result;
}

function getEnergyDayProgress(now = new Date()) {
  const hour = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;
  if (hour < ENERGY_DAY_START_HOUR) return { status: "before-start", percent: 0 };
  if (hour >= ENERGY_DAY_END_HOUR) return { status: "settled", percent: 100 };
  return {
    status: "running",
    percent: ((hour - ENERGY_DAY_START_HOUR) / (ENERGY_DAY_END_HOUR - ENERGY_DAY_START_HOUR)) * 100,
  };
}

function getTaskWorkMinutesForDate(dayKey = selectedDate) {
  const day = state?.days?.[dayKey] || defaultDay();
  const completedMainMinutes = getVisibleMainTasks().reduce((sum, task) => {
    const done = task.lockedFromCompany ? Boolean(task.companyDone) : Boolean(day.main?.[task.id]);
    return sum + (done ? Math.max(1, Number(task.durationMinutes) || 60) : 0);
  }, 0);
  const completedSideMinutes = getVisibleSideQuests(dayKey).reduce((sum, quest) => {
    const done = quest.lockedFromMarket ? Boolean(quest.marketDone) : Boolean(day.side?.[quest.id]);
    return sum + (done ? Math.max(1, Number(quest.durationMinutes) || 60) : 0);
  }, 0);
  const runMinutes = (day.taskRuns || []).reduce((sum, run) => sum + Number(run.duration || 0), 0);
  const activeTaskMinutes = Object.values(day.taskActive?.main || {}).reduce((sum, timer) => sum + elapsedTaskMinutes(timer), 0)
    + Object.values(day.taskActive?.side || {}).reduce((sum, timer) => sum + elapsedTaskMinutes(timer), 0);
  const lifeMinutes = normalizeLifeRecords(day.lifeRecords).reduce((sum, record) => sum + Number(record.duration || 0), 0)
    + Object.values(normalizeLifeActive(day.lifeActive)).reduce((sum, timer) => sum + elapsedLifeMinutes(timer), 0);
  return Math.max(0, Math.round(completedMainMinutes + completedSideMinutes + runMinutes + activeTaskMinutes + lifeMinutes));
}

function calculateDailyEnergy(dayKey = selectedDate, now = new Date()) {
  const workMinutes = getTaskWorkMinutesForDate(dayKey);
  const consumedPercent = clamp(workMinutes / ENERGY_DEPLETION_MINUTES, 0, 1);
  const energy = clamp(Math.round(ENERGY_MAX - consumedPercent * ENERGY_MAX), 0, ENERGY_MAX);
  return {
    energy,
    workMinutes,
    depleted: workMinutes >= ENERGY_DEPLETION_MINUTES,
    progress: getEnergyDayProgress(now),
  };
}

function updateEnergyWhenTaskChanges(dayKey = selectedDate) {
  const day = state?.days?.[dayKey];
  if (!day) return null;
  const result = calculateDailyEnergy(dayKey);
  day.energy = result.energy;
  return result;
}

function isEnergyDepletedForDate(dayKey = selectedDate) {
  return calculateDailyEnergy(dayKey).depleted;
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDate(key) {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function isDateKey(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ""))) return false;
  return dateKey(parseDate(value)) === value;
}

function addDays(dayKey, amount) {
  const date = parseDate(dayKey);
  date.setDate(date.getDate() + amount);
  return dateKey(date);
}

function dayDiff(a, b) {
  return Math.round((parseDate(a) - parseDate(b)) / 86400000);
}

function chapterDay() {
  const diff = Math.max(0, dayDiff(selectedDate, START_DATE));
  return Math.min(TOTAL_DAYS, diff + 1);
}

function gameUsageDay() {
  const createdAt = state?.createdAt ? new Date(state.createdAt) : new Date();
  const createdKey = Number.isNaN(createdAt.getTime()) ? dateKey(new Date()) : dateKey(createdAt);
  return Math.max(1, dayDiff(dateKey(new Date()), createdKey) + 1);
}

function weekIndex(dayKey) {
  const diff = Math.max(0, dayDiff(dayKey, START_DATE));
  return Math.floor(diff / 7);
}

function weekKey(dayKey) {
  return `week-${weekIndex(dayKey) + 1}`;
}

function makeId(prefix) {
  if (window.crypto?.randomUUID) return `${prefix}-${window.crypto.randomUUID()}`;
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

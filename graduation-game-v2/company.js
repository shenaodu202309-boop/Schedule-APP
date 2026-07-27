const LIFE_COMPANY_KEY = "life-game-company-v1";
const ACTIVE_SKIN_KEY = "life-game-active-skin-v1";
const DEFAULT_SKIN = "warm-pixel";
const WARM_PIXEL_SKIN_ID = "warm-pixel";
const WARM_PIXEL_ASSET_BASE = "../assets/skins/warm-pixel";
const GAME_STATE_KEY = "thirty-day-quest-v2";
const COMPANY_TASK_LIMIT = 6;
const COMPANY_DEPARTMENT_LIMIT = 6;
const COMPANY_LONG_PRESS_MS = 520;
const SKILL_MARKET_STORAGE_KEY = "life-skill-market-v1";
const COMPANY_STARTING_STAKE = 600;
const RELATIONSHIP_CARDS_KEY = "life-game-relationship-cards-v1";
const COMPANY_LOCAL_DATA_RESET_KEYS = [
  LIFE_COMPANY_KEY,
  ACTIVE_SKIN_KEY,
  GAME_STATE_KEY,
  SKILL_MARKET_STORAGE_KEY,
  RELATIONSHIP_CARDS_KEY,
  "private-schedule-app-v1",
  "life-game-comic-diary-v1",
  "life-game-ootd-v1",
  "private-schedule-daily-reminder-v1",
  "private-schedule-voice-game-sync-v1",
  "life-game-relationship-file-library-v1",
  "life-game-relationship-reactions-v1",
  "life-game-relationship-self-onboarding-v1",
  "skillMarketEnabled",
];
const COMPANY_EXPLORATION_CELL_COUNT = 25;
const COMPANY_EXPLORATION_SCAN_COST = 20;
const COMPANY_ROOM_MEMBER_LIMIT = 4;
const COMPANY_GARDEN_EVENT_POINTS = 10;
const COMPANY_GARDEN_PLANT_POINTS = 100;
const COMPANY_GARDEN_TARGET_PLANTS = 10;
const COMPANY_DEPARTMENT_SCENE_PRICE = 1000;
const COMPANY_GARDEN_SCENES = [
  { id: "community-day", name: "友谊花园", plantKind: "friendship", src: "./assets/garden-scenes/community-garden-day.png" },
  { id: "courtyard-day", name: "亲情花园", plantKind: "family", src: "./assets/garden-scenes/courtyard-garden-day.png" },
  { id: "rose-dusk", name: "黄昏花园", plantKind: "love", src: "./assets/garden-scenes/rose-garden-dusk.png" },
];
const COMPANY_GARDEN_PLANT_VARIANTS = {
  love: [
    { id: "rose", name: "玫瑰" },
    { id: "tulip", name: "郁金香" },
    { id: "peony", name: "牡丹" },
  ],
  friendship: [
    { id: "daisy", name: "雏菊" },
    { id: "sunflower", name: "向日葵" },
    { id: "hydrangea", name: "绣球花" },
  ],
  family: [
    { id: "apple-tree", name: "苹果树" },
    { id: "orange-tree", name: "橙树" },
    { id: "ginkgo-tree", name: "银杏树" },
  ],
};
const COMPANY_GARDEN_PLANT_OPTIONS = Object.values(COMPANY_GARDEN_PLANT_VARIANTS).flat();
const COMPANY_GARDEN_PLANT_ANCHORS = {
  "apple-tree": [[50.1, 96.5], [40.3, 96.5], [36.8, 96.5], [32.4, 96.5], [38.9, 98.1]],
  daisy: [[55, 91.2], [50.2, 91.2], [47.1, 91.2], [43, 91.2], [40, 91.4]],
  "ginkgo-tree": [[49.8, 86.1], [40.3, 86.1], [34.3, 86.1], [33, 86.1], [37, 87.2]],
  hydrangea: [[56.1, 67.1], [49.6, 67.1], [47.6, 67.4], [42.8, 67.4], [39.3, 67.4]],
  "orange-tree": [[50, 91.4], [40.3, 91.2], [35.8, 91.2], [33.5, 91.2], [39.3, 92.5]],
  peony: [[52.9, 74.6], [47.3, 74.6], [41.4, 74.6], [37.3, 74.6], [39, 75.9]],
  rose: [[54.4, 93.9], [49.1, 93.9], [43.3, 94.1], [37.3, 94.1], [37.8, 95.2]],
  sunflower: [[57, 82.4], [50.5, 82.4], [49.4, 82.6], [43.9, 82.6], [39.6, 82.9]],
  tulip: [[53.9, 82.1], [48.8, 82.1], [43.1, 81.8], [37.5, 81.8], [35.9, 82.9]],
};
const COMPANY_GARDEN_PLACEMENT_LIMIT = 10;
const COMPANY_DEPARTMENT_SCENES = [
  { id: "illustration-studio", name: "插画创作室", src: "./assets/company-scenes/illustration-studio.png", price: 0, aspectRatio: 3 },
  { id: "animation-studio", name: "动画制作室", src: "./assets/company-scenes/animation-studio.png", price: 0, aspectRatio: 3 },
  { id: "technology-lab", name: "技术研发室", src: "./assets/company-scenes/technology-lab.png", price: 0, aspectRatio: 3 },
  { id: "photo-studio", name: "摄影内容室", src: "./assets/company-scenes/photo-studio.png", price: 0, aspectRatio: 3 },
  { id: "meeting-office", name: "商务会议室", src: "./assets/company-scenes/meeting-office.png", price: 0, aspectRatio: 3 },
  { id: "premium-sunlit-studio", name: "暖阳设计室", src: "./assets/company-scenes/premium-sunlit-studio.png", price: COMPANY_DEPARTMENT_SCENE_PRICE, aspectRatio: 1916 / 821 },
  { id: "premium-botanical-office", name: "绿植研究室", src: "./assets/company-scenes/premium-botanical-office.png", price: COMPANY_DEPARTMENT_SCENE_PRICE, aspectRatio: 1916 / 821 },
  { id: "premium-starlight-studio", name: "星夜动画室", src: "./assets/company-scenes/premium-starlight-studio.png", price: COMPANY_DEPARTMENT_SCENE_PRICE, aspectRatio: 1916 / 821 },
  { id: "premium-midnight-lab", name: "深夜技术部", src: "./assets/company-scenes/premium-midnight-lab.png", price: COMPANY_DEPARTMENT_SCENE_PRICE, aspectRatio: 1916 / 821 },
  { id: "premium-editorial-office", name: "复古编辑部", src: "./assets/company-scenes/premium-editorial-office.png", price: COMPANY_DEPARTMENT_SCENE_PRICE, aspectRatio: 1916 / 821 },
];

const COMPANY_LEVELS = [
  { level: 1, name: "起步公司", requiredExp: 0, requiredCoins: 0 },
  { level: 2, name: "小型工作室", requiredExp: 100, requiredCoins: 300 },
  { level: 3, name: "稳定运营", requiredExp: 350, requiredCoins: 800 },
  { level: 4, name: "专业机构", requiredExp: 800, requiredCoins: 1800 },
  { level: 5, name: "品牌公司", requiredExp: 1500, requiredCoins: 3500 },
  { level: 6, name: "梦想企业", requiredExp: 3000, requiredCoins: 7000 },
];

const DEPARTMENT_UPGRADE_COSTS = {
  1: 80,
  2: 180,
  3: 360,
};

const COMPANY_TASK_BASE_MINUTES = 60;
const COMPANY_TASK_MINUTES_STEP = 30;
const COMPANY_TASK_PRICING_STANDARD_HOURS = 8;
const COMPANY_TASK_PRICING_STANDARD_COINS = 80;
const COMPANY_TASK_COINS_PER_STEP = COMPANY_TASK_PRICING_STANDARD_COINS / (COMPANY_TASK_PRICING_STANDARD_HOURS * 2);
const PROJECT_REWARD_MIN = 80;
const PROJECT_REWARD_MAX = 150;

const COMPANY_TYPES = [
  {
    id: "animation-company",
    name: "动画公司",
    icon: "影",
    description: "适合动画、短片、角色表演、作品集和求职方向。",
    defaultDepartments: ["创作部", "动画制作部", "技术研发部", "作品集部", "宣传发行部", "求职商务部"],
    recommendedSkillStocks: ["动画股", "绘画股", "分镜股", "3D 动画股", "作品集股", "英语股", "求职股"],
    projectTemplates: ["完成 showreel 剪辑", "完成角色动画测试", "整理作品集结构"],
  },
  {
    id: "school",
    name: "学校 / 教育机构",
    icon: "校",
    description: "适合教学、课程设计、导师、讲师和教育内容方向。",
    defaultDepartments: ["课程研发部", "教学部", "学生关系部", "案例作品部", "行政申请部", "宣传招生部"],
    recommendedSkillStocks: ["教学表达股", "课程设计股", "英语股", "作品集股", "社交股", "项目管理股"],
    projectTemplates: ["准备一节试讲课程", "整理课程大纲", "制作教学案例"],
  },
  {
    id: "illustration-studio",
    name: "插画工作室",
    icon: "画",
    description: "适合插画、视觉设计、接单和个人品牌方向。",
    defaultDepartments: ["创作部", "视觉研发部", "作品集部", "接单商务部", "宣传部"],
    recommendedSkillStocks: ["绘画股", "设计股", "作品集股", "社交股", "理财股"],
    projectTemplates: ["完成一组插画作品", "整理接单展示页", "发布个人作品集"],
  },
  {
    id: "writing-publisher",
    name: "写作出版社",
    icon: "书",
    description: "适合小说、剧本、博客、出版和内容创作方向。",
    defaultDepartments: ["选题部", "写作部", "编辑部", "发布部", "读者关系部"],
    recommendedSkillStocks: ["写作股", "阅读股", "项目管理股", "社交股"],
    projectTemplates: ["完成一个章节初稿", "整理选题库", "修改一篇文章"],
  },
  {
    id: "game-studio",
    name: "游戏工作室",
    icon: "游",
    description: "适合游戏 Demo、角色设计、关卡、玩法和作品集方向。",
    defaultDepartments: ["玩法设计部", "美术部", "程序协作部", "关卡部", "测试部", "发布部"],
    recommendedSkillStocks: ["设计股", "绘画股", "项目管理股", "作品集股", "英语股"],
    projectTemplates: ["完成一个 Demo 场景", "整理玩法原型", "制作角色设定页"],
  },
  {
    id: "freelance-studio",
    name: "自由职业工作室",
    icon: "工",
    description: "适合接单、个人服务、客户沟通和自由职业方向。",
    defaultDepartments: ["服务产品部", "客户关系部", "交付部", "报价财务部", "宣传部"],
    recommendedSkillStocks: ["设计股", "社交股", "理财股", "项目管理股", "英语股"],
    projectTemplates: ["整理服务菜单", "完成一个作品案例", "联系一个潜在客户"],
  },
  {
    id: "health-center",
    name: "健康恢复中心",
    icon: "康",
    description: "适合睡眠、运动、饮食、情绪恢复和生活重建方向。",
    defaultDepartments: ["睡眠部", "运动部", "饮食部", "情绪管理部", "生活维护部"],
    recommendedSkillStocks: ["睡眠股", "运动股", "做饭股", "情绪管理股", "整理房间股"],
    projectTemplates: ["建立睡前流程", "完成一周稳定饮食", "恢复房间基础秩序"],
  },
];

const PROJECT_STATUS_LABELS = {
  active: "推进中",
  paused: "暂停",
  completed: "完成",
  overdue: "延期",
};

const DEPARTMENT_STATUS_LABELS = {
  normal: "正常",
  busy: "繁忙",
  stuck: "停摆",
  urgent: "高压",
  resting: "休整中",
};

let lifeCompanyState = null;
let editingCompanyMode = "create";
let companyToastTimer = null;
let companyDepartmentLongPressTimer = null;
let companyDepartmentLongPressStart = null;
let companyDepartmentLongPressId = "";
let companyDepartmentDeleteArmed = false;
let openCompanyRoomDepartmentId = "";
let companyGardenTacticsPage = 0;
let companyGardenSceneMenuOpen = false;
let companyGardenCharacterPickerOpen = false;
let companyGardenPlantPickerOpen = false;
let companyGardenPendingPlantId = "";
let companyGardenCharacterLongPressTimer = null;
let companyGardenCharacterLongPressStart = null;
let companyGardenCharacterSuppressClickUntil = 0;
let companyOfficeMemberDrag = null;
let companyScenePan = null;
let companyInlineMembersExpanded = false;
let companyInlineTasksExpanded = false;
let companyRoomMemberSearch = "";
let companyPreviewMode = "";

const companyDom = {};

document.addEventListener("DOMContentLoaded", () => {
  maybeClearLocalDataFromUrl();
  const previewFromPath = window.location.pathname.endsWith("/company-scan-preview.html") ? "scan" : "";
  companyPreviewMode = previewFromPath || new URLSearchParams(window.location.search).get("preview") || "";
  applyCompanySkin();
  cacheCompanyDom();
  lifeCompanyState = companyPreviewMode === "scan" ? createCompanyScanPreviewState() : loadLifeCompany();
  document.documentElement.dataset.companyPreview = companyPreviewMode;
  bindCompanyEvents();
  renderCompanyTypeOptions();
  renderLifeCompanyPage();
  if (window.__companyLocalDataWasCleared) showCompanyToast("本地数据已清空。现在是全新状态。");
});

function maybeClearLocalDataFromUrl() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("clearLocalData") !== "1") return;
  COMPANY_LOCAL_DATA_RESET_KEYS.forEach((key) => localStorage.removeItem(key));
  sessionStorage.clear();
  window.__companyLocalDataWasCleared = true;
  if (window.caches?.keys) {
    caches.keys().then((keys) => {
      keys.filter((key) => key.startsWith("daily-schedule-native-")).forEach((key) => caches.delete(key));
    }).catch(() => undefined);
  }
  params.delete("clearLocalData");
  const nextSearch = params.toString();
  const nextUrl = `${window.location.pathname}${nextSearch ? `?${nextSearch}` : ""}${window.location.hash}`;
  window.history.replaceState({}, "", nextUrl);
}

function applyCompanySkin() {
  const activeSkin = localStorage.getItem(ACTIVE_SKIN_KEY) || DEFAULT_SKIN;
  document.documentElement.dataset.skin = activeSkin;
}

function isWarmPixelSkin() {
  return document.documentElement.dataset.skin === WARM_PIXEL_SKIN_ID;
}

function warmPixelAsset(path) {
  return `${WARM_PIXEL_ASSET_BASE}/${path}`;
}

function warmPixelAsset2x(path) {
  return path.replace(/(\.[a-z0-9]+)$/i, "@2x$1");
}

function renderWarmPixelImage(path, className, alt = "", attrs = "") {
  return `
    <img class="${className} pixel-art" src="${warmPixelAsset(path)}" srcset="${warmPixelAsset(warmPixelAsset2x(path))} 2x" alt="${escapeHtml(alt)}" ${attrs} />
  `;
}

function cacheCompanyDom() {
  [
    "companyEmptyState",
    "companySystem",
    "companyExplorerType",
    "companyExplorerCompanyName",
    "companyExplorationStage",
    "companyExplorationTitle",
    "companyExplorationProgress",
    "companyDepartmentTrack",
    "companyMineBoard",
    "companyExplorationHint",
    "companyExplorationNextAction",
    "companyOperationsDrawer",
    "companyGardenButton",
    "companyGardenDialog",
    "companyGardenBody",
    "companyTypeLabel",
    "companyName",
    "companyVision",
    "companyMainGoal",
    "companyMainGoalMeta",
    "companyMainGoalMeter",
    "companyProgress",
    "companyProjectCount",
    "companyTaskCount",
    "companyCoinBalance",
    "companyAssetValue",
    "companyLevelLabel",
    "companyExpLabel",
    "companyNextLevelCost",
    "companyExpMeter",
    "companyTodayIncome",
    "companyTodaySpend",
    "companyTransactionPanel",
    "companyTransactionList",
    "companyDepartmentGrid",
    "companyProjectList",
    "companyTaskList",
    "companyStockList",
    "companyReportBody",
    "companyFormDialog",
    "companyForm",
    "companyFormPill",
    "companyFormTitle",
    "companyStartingMoneyNote",
    "companyNameInput",
    "companyTypeInput",
    "companyVisionInput",
    "companyMainGoalInput",
    "companyDeadlineInput",
    "companyProjectDialog",
    "companyProjectForm",
    "companyProjectFormPill",
    "companyProjectFormTitle",
    "companyProjectIdInput",
    "companyProjectTitleInput",
    "companyProjectDescriptionInput",
    "companyProjectDepartmentInput",
    "companyProjectStartInput",
    "companyProjectDeadlineInput",
    "companyProjectProgressInput",
    "companyProjectProgressValue",
    "companyProjectStatusInput",
    "companyDepartmentDialog",
    "companyDepartmentForm",
    "companyDepartmentFormPill",
    "companyDepartmentIdInput",
    "companyDepartmentNameInput",
    "companyDepartmentProjectCountInput",
    "companyDepartmentTaskCountInput",
    "companyDepartmentStatusInput",
    "companyDepartmentSceneOptions",
    "companyDepartmentLevelLabel",
    "companyInlineTaskPanel",
    "companyInlineTaskSummary",
    "companyInlineTaskList",
    "companyInlineRoomMembers",
    "companyInlineRoomToggle",
    "companyInlineRoomContent",
    "companyInlineRoomMemberCount",
    "companyInlineRoomSearchInput",
    "companyInlineRoomMemberList",
    "companyRoomDialog",
    "companyRoomTitle",
    "companyRoomRule",
    "companyPixelRoom",
    "companyRoomMemberCount",
    "companyRoomMemberList",
    "companyUnlockDialog",
    "companyUnlockText",
    "companyToast",
  ].forEach((id) => {
    companyDom[id] = document.getElementById(id);
  });
}

function bindCompanyEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-company-action]");
    if (!target) {
      if (companyGardenPendingPlantId && event.target.closest(".company-garden-world")) {
        placeCompanyGardenPlant(event);
        return;
      }
      let shouldRenderGarden = false;
      if (companyGardenSceneMenuOpen && !event.target.closest(".company-garden-scene-control")) {
        companyGardenSceneMenuOpen = false;
        shouldRenderGarden = true;
      }
      if (companyGardenCharacterPickerOpen && !event.target.closest(".company-garden-character-picker")) {
        companyGardenCharacterPickerOpen = false;
        shouldRenderGarden = true;
      }
      if (companyGardenPlantPickerOpen && !event.target.closest(".company-garden-plant-picker")) {
        companyGardenPlantPickerOpen = false;
        shouldRenderGarden = true;
      }
      if (shouldRenderGarden) renderCompanyGarden();
      return;
    }

    const action = target.dataset.companyAction;
    if (companyPreviewMode === "scan" && [
      "toggle-company-operations",
      "open-company-garden",
      "open-department-room",
      "prompt-next-department",
    ].includes(action)) {
      return;
    }
    if (action === "open-create-company") openCompanyForm("create");
    if (action === "open-edit-company") openCompanyForm("edit");
    if (action === "close-company-form") closeCompanyForm();
    if (action === "add-department") addCompanyDepartment();
    if (action === "open-department-form") openCompanyDepartmentForm(target.dataset.departmentId);
    if (action === "close-department-form") closeCompanyDepartmentForm();
    if (action === "delete-department") deleteCompanyDepartment();
    if (action === "upgrade-company") upgradeCompany();
    if (action === "upgrade-department") upgradeCompanyDepartment(target.dataset.departmentId || companyDom.companyDepartmentIdInput?.value);
    if (action === "purchase-company-scene") purchaseCompanyDepartmentScene(target.dataset.sceneId);
    if (action === "open-create-project") openCompanyProjectForm();
    if (action === "close-project-form") closeCompanyProjectForm();
    if (action === "edit-project") openCompanyProjectForm(target.dataset.projectId);
    if (action === "delete-project") deleteCompanyProject(target.dataset.projectId);
    if (action === "generate-project-task") generateCompanyTasksFromProject(target.dataset.projectId);
    if (action === "toggle-company-task") toggleCompanyTask(target.dataset.taskId);
    if (action === "delete-company-task") deleteCompanyTask(target.dataset.taskId);
    if (action === "toggle-company-operations") toggleCompanyOperations();
    if (action === "select-exploration-department") selectExplorationDepartment(target.dataset.departmentId);
    if (action === "reveal-company-cell") revealCompanyCell(Number(target.dataset.cellIndex));
    if (action === "open-department-room") openCompanyDepartmentRoom(target.dataset.departmentId);
    if (action === "close-department-room") closeCompanyDepartmentRoom();
    if (action === "toggle-room-member") toggleCompanyRoomMember(target.dataset.memberId);
    if (action === "add-room-member") addCompanyRoomMember(target.dataset.memberId);
    if (action === "remove-room-member") removeCompanyRoomMember(target.dataset.memberId);
    if (action === "toggle-inline-members") toggleCompanyInlineRoomMembers();
    if (action === "toggle-inline-tasks") toggleCompanyInlineTasks();
    if (action === "edit-room-department") editOpenRoomDepartment();
    if (action === "open-room-project") openProjectForRoomDepartment();
    if (action === "prompt-next-department") promptNextCompanyDepartment();
    if (action === "show-exploration-hint") showCompanyExplorationHint();
    if (action === "unlock-next-department") unlockNextCompanyDepartment();
    if (action === "close-unlock-dialog") closeDialog(companyDom.companyUnlockDialog);
    if (action === "open-company-garden") openCompanyGarden();
    if (action === "close-company-garden") closeDialog(companyDom.companyGardenDialog);
    if (action === "unlock-company-garden") unlockCompanyGarden();
    if (action === "toggle-garden-scene-menu") toggleCompanyGardenSceneMenu();
    if (action === "select-garden-scene") selectCompanyGardenScene(target.dataset.sceneId);
    if (action === "toggle-garden-character-picker") {
      if (Date.now() < companyGardenCharacterSuppressClickUntil) return;
      toggleCompanyGardenCharacterPicker();
    }
    if (action === "select-garden-character") selectCompanyGardenCharacter(target.dataset.characterId);
    if (action === "toggle-garden-plant-picker") toggleCompanyGardenPlantPicker();
    if (action === "select-garden-plant-type") selectCompanyGardenPlantType(target.dataset.plantId);
    if (action === "cancel-garden-plant-placement") cancelCompanyGardenPlantPlacement();
    if (action === "abandon-garden-target") abandonCompanyGardenTarget();
    if (action === "record-garden-event") recordCompanyGardenEvent(target.dataset.eventNote);
    if (action === "add-to-tactics-book") addCompanyGardenTargetToTacticsBook();
    if (action === "turn-tactics-page") turnCompanyTacticsPage(Number(target.dataset.direction) || 0);
  });

  companyDom.companyForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    saveCompanyFromForm();
  });

  companyDom.companyProjectForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    saveCompanyProjectFromForm();
  });

  companyDom.companyDepartmentForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    saveCompanyDepartmentFromForm();
  });

  document.addEventListener("input", handleCompanyRoomMemberSearchInput);

  companyDom.companyDepartmentGrid?.addEventListener("pointerdown", startCompanyDepartmentLongPress);
  companyDom.companyDepartmentGrid?.addEventListener("pointermove", moveCompanyDepartmentLongPress);
  companyDom.companyDepartmentGrid?.addEventListener("pointerup", cancelCompanyDepartmentLongPress);
  companyDom.companyDepartmentGrid?.addEventListener("pointercancel", cancelCompanyDepartmentLongPress);
  companyDom.companyDepartmentGrid?.addEventListener("pointerleave", cancelCompanyDepartmentLongPress);
  document.addEventListener("pointerdown", startCompanyScenePan);
  document.addEventListener("pointermove", moveCompanyScenePan);
  document.addEventListener("pointerup", endCompanyScenePan);
  document.addEventListener("pointercancel", endCompanyScenePan);
  document.addEventListener("keydown", handleCompanyScenePanKeydown);
  document.addEventListener("pointerdown", startCompanyGardenCharacterLongPress);
  document.addEventListener("pointermove", moveCompanyGardenCharacterLongPress);
  document.addEventListener("pointerup", cancelCompanyGardenCharacterLongPress);
  document.addEventListener("pointercancel", cancelCompanyGardenCharacterLongPress);
  document.addEventListener("contextmenu", preventCompanyGardenCharacterContextMenu);
  companyDom.companyPixelRoom?.addEventListener("pointerdown", startCompanyOfficeMemberDrag);
  companyDom.companyPixelRoom?.addEventListener("pointermove", moveCompanyOfficeMemberDrag);
  companyDom.companyPixelRoom?.addEventListener("pointerup", endCompanyOfficeMemberDrag);
  companyDom.companyPixelRoom?.addEventListener("pointercancel", endCompanyOfficeMemberDrag);
  companyDom.companyMineBoard?.addEventListener("pointerdown", startCompanyOfficeMemberDrag);
  companyDom.companyMineBoard?.addEventListener("pointermove", moveCompanyOfficeMemberDrag);
  companyDom.companyMineBoard?.addEventListener("pointerup", endCompanyOfficeMemberDrag);
  companyDom.companyMineBoard?.addEventListener("pointercancel", endCompanyOfficeMemberDrag);
  companyDom.companyDepartmentGrid?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".company-department-card[data-department-id]");
    if (!card) return;
    event.preventDefault();
    openCompanyDepartmentForm(card.dataset.departmentId);
  });

  companyDom.companyProjectProgressInput?.addEventListener("input", () => {
    setText(companyDom.companyProjectProgressValue, `${companyDom.companyProjectProgressInput.value}%`);
  });

  companyDom.companyTypeInput?.addEventListener("change", () => {
    const type = companyTypeById(companyDom.companyTypeInput.value);
    if (!type || editingCompanyMode !== "create") return;
    if (!companyDom.companyNameInput.value.trim()) companyDom.companyNameInput.value = defaultCompanyName(type);
    if (!companyDom.companyMainGoalInput.value.trim()) companyDom.companyMainGoalInput.value = defaultMainGoal(type);
  });
}

function loadLifeCompany() {
  try {
    const raw = localStorage.getItem(LIFE_COMPANY_KEY);
    if (!raw) return defaultLifeCompanyState();
    const parsed = JSON.parse(raw);
    return normalizeLifeCompanyState(parsed);
  } catch (error) {
    return defaultLifeCompanyState();
  }
}

function saveLifeCompany() {
  if (companyPreviewMode) return;
  localStorage.setItem(LIFE_COMPANY_KEY, JSON.stringify(lifeCompanyState));
  window.dispatchEvent(new CustomEvent("life-company-updated"));
}

function createCompanyScanPreviewState() {
  const now = new Date().toISOString();
  const type = companyTypeById("freelance-studio") || COMPANY_TYPES[0];
  const departments = type.defaultDepartments.slice(0, COMPANY_DEPARTMENT_LIMIT).map((name, index) => {
    const departmentId = `preview-dept-${index + 1}`;
    return {
      id: departmentId,
      name,
      status: "normal",
      progress: 0,
      level: 1,
      exp: 0,
      projectIds: [],
      taskIds: [],
      manualProjectCount: null,
      manualTaskCount: null,
      statusLocked: false,
      taskCardLimit: index === 0 ? 3 : COMPANY_TASK_LIMIT,
      exploration: {
        unlocked: index === 0,
        targetCell: 17,
        portalCell: null,
        revealedCells: index === 0 ? [0] : [],
        completed: false,
        completionPromptShown: false,
      },
      room: {
        sceneId: normalizeCompanyDepartmentSceneId("", index),
        memberIds: [],
        memberPositions: {},
      },
    };
  });
  return normalizeLifeCompanyState({
    company: {
      id: "preview-company-scan",
      name: "扫雷界面预览公司",
      type: type.id,
      vision: "用于单独检查公司扫雷 UI。",
      mainGoal: { title: "检查公司扫雷界面", deadline: "", status: "active", progress: 0 },
      departments,
      activeDepartmentId: departments[0]?.id || "",
      projects: [],
      linkedSkillStocks: type.recommendedSkillStocks,
      ownedSceneIds: COMPANY_DEPARTMENT_SCENES.filter((scene) => !scene.price).map((scene) => scene.id),
      garden: { unlocked: false },
      economy: {
        companyCoins: 1000,
        companyExp: 28,
        companyLevel: 1,
        assetValue: 1000,
        currencyName: "金币",
        transactions: [],
      },
      createdAt: now,
      updatedAt: now,
    },
    tasks: [],
    updatedAt: now,
  });
}

function syncCompanyNameToGameTitle() {
  if (companyPreviewMode) return;
  const companyName = String(lifeCompanyState?.company?.name || "").trim();
  if (!companyName) return;
  try {
    const raw = localStorage.getItem(GAME_STATE_KEY);
    const gameState = raw ? JSON.parse(raw) : {};
    if (!gameState || typeof gameState !== "object") return;
    gameState.editable ||= {};
    gameState.editable.page ||= {};
    gameState.editable.page.heroTitle = `${companyName}作战台`.slice(0, 28);
    gameState.battleSettings ||= {};
    gameState.battleSettings.title = gameState.editable.page.heroTitle;
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState));
  } catch (error) {
    console.warn("Failed to sync company name to game title.", error);
  }
}

function defaultLifeCompanyState() {
  return {
    company: null,
    tasks: [],
    updatedAt: new Date().toISOString(),
  };
}

function normalizeLifeCompanyState(value) {
  const fallback = defaultLifeCompanyState();
  if (!value || typeof value !== "object") return fallback;
  const normalized = {
    company: value.company ? normalizeCompany(value.company) : null,
    tasks: Array.isArray(value.tasks) ? value.tasks.map(normalizeCompanyTask).filter(Boolean) : [],
    updatedAt: value.updatedAt || new Date().toISOString(),
  };
  return normalized;
}

function normalizeCompany(company) {
  const type = companyTypeById(company.type) || COMPANY_TYPES[0];
  const now = new Date().toISOString();
  const companyId = company.id || createId("company");
  const departments = Array.isArray(company.departments) && company.departments.length
    ? company.departments.map((department, index) => normalizeDepartment(department, index)).filter(Boolean)
    : initializeCompanyDepartments(type.id);
  const activeDepartment = departments.find((department) => department.id === company.activeDepartmentId && department.exploration.unlocked)
    || departments.find((department) => department.exploration.unlocked)
    || departments[0];
  const projects = Array.isArray(company.projects) ? company.projects.map(normalizeCompanyProject).filter(Boolean) : [];
  return {
    id: companyId,
    name: company.name || defaultCompanyName(type),
    type: type.id,
    vision: company.vision || "",
    mainGoal: {
      title: company.mainGoal?.title || "",
      deadline: company.mainGoal?.deadline || "",
      status: company.mainGoal?.status || "active",
      progress: clampNumber(company.mainGoal?.progress, 0, 100, 0),
    },
    departments,
    activeDepartmentId: activeDepartment?.id || "",
    projects,
    linkedSkillStocks: Array.isArray(company.linkedSkillStocks) ? company.linkedSkillStocks : type.recommendedSkillStocks,
    ownedSceneIds: normalizeCompanyOwnedSceneIds(company.ownedSceneIds),
    garden: normalizeCompanyGarden(company.garden),
    economy: normalizeCompanyEconomy(company.economy),
    createdAt: company.createdAt || now,
    updatedAt: company.updatedAt || now,
  };
}

function normalizeCompanyGarden(garden) {
  const source = garden && typeof garden === "object" && !Array.isArray(garden) ? garden : {};
  const sceneId = COMPANY_GARDEN_SCENES.some((scene) => scene.id === source.sceneId)
    ? source.sceneId
    : COMPANY_GARDEN_SCENES[0].id;
  const rawScenes = source.scenes && typeof source.scenes === "object" && !Array.isArray(source.scenes)
    ? source.scenes
    : {};
  const hasDedicatedScenes = Object.keys(rawScenes).length > 0;
  const legacySceneState = {
    selectedCharacterId: source.selectedCharacterId,
    targets: source.targets,
  };
  const scenes = {};
  COMPANY_GARDEN_SCENES.forEach((scene) => {
    const rawSceneState = rawScenes[scene.id];
    const sceneState = rawSceneState && typeof rawSceneState === "object" && !Array.isArray(rawSceneState)
      ? rawSceneState
      : (!hasDedicatedScenes && scene.id === sceneId ? legacySceneState : {});
    scenes[scene.id] = normalizeCompanyGardenSceneState(sceneState);
  });
  return {
    unlocked: Boolean(source.unlocked),
    sceneId,
    scenes,
  };
}

function normalizeCompanyGardenSceneState(sceneState) {
  const source = sceneState && typeof sceneState === "object" && !Array.isArray(sceneState) ? sceneState : {};
  const rawTargets = source.targets && typeof source.targets === "object" && !Array.isArray(source.targets)
    ? source.targets
    : {};
  const targets = {};
  Object.entries(rawTargets).forEach(([characterId, target]) => {
    if (!characterId || !target || typeof target !== "object") return;
    const plantCount = clampNumber(target.plantCount, 0, COMPANY_GARDEN_TARGET_PLANTS, 0);
    targets[String(characterId)] = {
      characterId: String(characterId),
      intimacyPoints: clampNumber(target.intimacyPoints, 0, COMPANY_GARDEN_PLANT_POINTS - COMPANY_GARDEN_EVENT_POINTS, 0),
      plantCount,
      completed: plantCount >= COMPANY_GARDEN_TARGET_PLANTS || Boolean(target.completed),
      inTacticsBook: Boolean(target.inTacticsBook),
      events: Array.isArray(target.events)
        ? target.events.map((event) => ({
          id: String(event?.id || createId("garden-event")),
          note: String(event?.note || "一次亲密事件").slice(0, 80),
          createdAt: String(event?.createdAt || new Date().toISOString()),
        })).slice(0, 30)
        : [],
      updatedAt: String(target.updatedAt || new Date().toISOString()),
    };
  });
  const placedPlants = Array.isArray(source.placedPlants)
    ? source.placedPlants.map((plant) => {
      const variantId = String(plant?.variantId || "");
      if (!COMPANY_GARDEN_PLANT_OPTIONS.some((option) => option.id === variantId)) return null;
      return {
        id: String(plant?.id || createId("garden-plant")),
        variantId,
        characterId: String(plant?.characterId || ""),
        x: clampNumber(plant?.x, 5, 95, 50),
        y: clampNumber(plant?.y, 34, 96, 78),
        createdAt: String(plant?.createdAt || new Date().toISOString()),
      };
    }).filter(Boolean).slice(0, 60)
    : [];
  return {
    selectedCharacterId: String(source.selectedCharacterId || ""),
    placedPlants,
    targets,
  };
}

function normalizeDepartment(department, departmentIndex = 0) {
  if (!department?.name) return null;
  const departmentId = department.id || createId("dept");
  const rawExploration = department.exploration && typeof department.exploration === "object"
    ? department.exploration
    : {};
  const revealedCells = Array.isArray(rawExploration.revealedCells)
    ? Array.from(new Set(rawExploration.revealedCells
      .map(Number)
      .filter((value) => Number.isInteger(value) && value >= 0 && value < COMPANY_EXPLORATION_CELL_COUNT)))
    : [];
  const portalCell = rawExploration.portalCell !== null
    && rawExploration.portalCell !== undefined
    && Number.isInteger(Number(rawExploration.portalCell))
    && Number(rawExploration.portalCell) >= 0
    && Number(rawExploration.portalCell) < COMPANY_EXPLORATION_CELL_COUNT
    ? Number(rawExploration.portalCell)
    : null;
  const rawTargetCell = Number(rawExploration.targetCell);
  const targetCell = Number.isInteger(rawTargetCell) && rawTargetCell >= 0 && rawTargetCell < COMPANY_EXPLORATION_CELL_COUNT
    ? rawTargetCell
    : portalCell ?? companyExplorationTargetCell(departmentId);
  const rawRoom = department.room && typeof department.room === "object" ? department.room : {};
  const memberPositions = rawRoom.memberPositions && typeof rawRoom.memberPositions === "object" && !Array.isArray(rawRoom.memberPositions)
    ? Object.entries(rawRoom.memberPositions).reduce((positions, [memberId, position]) => {
      if (!memberId || !position || typeof position !== "object") return positions;
      positions[String(memberId)] = {
        x: clampNumber(position.x, 8, 92, 50),
        y: clampNumber(position.y, 28, 94, 76),
      };
      return positions;
    }, {})
    : {};
  return {
    id: departmentId,
    name: department.name,
    status: department.status || "normal",
    progress: clampNumber(department.progress, 0, 100, 0),
    level: clampNumber(department.level, 1, 4, 1),
    exp: Math.max(0, Math.floor(Number(department.exp || 0))),
    projectIds: Array.isArray(department.projectIds) ? department.projectIds : [],
    taskIds: Array.isArray(department.taskIds) ? department.taskIds : [],
    manualProjectCount: department.manualProjectCount === null || department.manualProjectCount === undefined
      ? null
      : clampNumber(department.manualProjectCount, 0, 99, 0),
    manualTaskCount: department.manualTaskCount === null || department.manualTaskCount === undefined
      ? null
      : clampNumber(department.manualTaskCount, 0, 99, 0),
    statusLocked: Boolean(department.statusLocked),
    taskCardLimit: clampNumber(department.taskCardLimit, 1, COMPANY_TASK_LIMIT, departmentIndex === 0 ? 3 : COMPANY_TASK_LIMIT),
    exploration: {
      unlocked: rawExploration.unlocked === undefined ? departmentIndex === 0 : Boolean(rawExploration.unlocked),
      targetCell,
      portalCell: portalCell ?? (revealedCells.includes(targetCell) ? targetCell : null),
      revealedCells,
      completed: Boolean(rawExploration.completed) || portalCell !== null || revealedCells.includes(targetCell),
      completionPromptShown: Boolean(rawExploration.completionPromptShown),
    },
    room: {
      sceneId: normalizeCompanyDepartmentSceneId(rawRoom.sceneId, departmentIndex),
      memberIds: Array.isArray(rawRoom.memberIds)
        ? Array.from(new Set(rawRoom.memberIds.map(String).filter(Boolean))).slice(0, COMPANY_ROOM_MEMBER_LIMIT)
        : [],
      memberPositions,
    },
  };
}

function normalizeCompanyDepartmentSceneId(sceneId, departmentIndex = 0) {
  const requested = String(sceneId || "");
  if (COMPANY_DEPARTMENT_SCENES.some((scene) => scene.id === requested)) return requested;
  return COMPANY_DEPARTMENT_SCENES[Math.abs(Number(departmentIndex) || 0) % COMPANY_DEPARTMENT_SCENES.length].id;
}

function companyDepartmentScene(department) {
  const sceneId = normalizeCompanyDepartmentSceneId(department?.room?.sceneId, 0);
  return COMPANY_DEPARTMENT_SCENES.find((scene) => scene.id === sceneId) || COMPANY_DEPARTMENT_SCENES[0];
}

function normalizeCompanyOwnedSceneIds(sceneIds) {
  if (!Array.isArray(sceneIds)) return [];
  const premiumIds = new Set(COMPANY_DEPARTMENT_SCENES.filter((scene) => scene.price > 0).map((scene) => scene.id));
  return Array.from(new Set(sceneIds.map(String).filter((sceneId) => premiumIds.has(sceneId))));
}

function companyOwnsDepartmentScene(sceneId) {
  const scene = COMPANY_DEPARTMENT_SCENES.find((item) => item.id === sceneId);
  return Boolean(scene && (!scene.price || lifeCompanyState.company?.ownedSceneIds?.includes(scene.id)));
}

function normalizeCompanyEconomy(economy) {
  const hasEconomy = economy && typeof economy === "object" && !Array.isArray(economy);
  const transactions = hasEconomy && Array.isArray(economy.transactions)
    ? economy.transactions.map(normalizeEconomyTransaction).filter(Boolean)
    : [];
  return {
    currencyName: normalizeCoinName(hasEconomy ? economy.currencyName : "金币"),
    currencySymbol: hasEconomy ? String(economy.currencySymbol || "◈") : "◈",
    companyCoins: roundCompanyCoins(hasEconomy && economy.companyCoins !== undefined ? economy.companyCoins : COMPANY_STARTING_STAKE),
    lifetimeEarned: roundCompanyCoins(hasEconomy && economy.lifetimeEarned !== undefined ? economy.lifetimeEarned : COMPANY_STARTING_STAKE),
    lifetimeSpent: roundCompanyCoins(hasEconomy && economy.lifetimeSpent !== undefined ? economy.lifetimeSpent : 0),
    companyLevel: clampNumber(hasEconomy ? economy.companyLevel : 1, 1, COMPANY_LEVELS.length, 1),
    companyExp: Math.max(0, Math.floor(Number(hasEconomy ? economy.companyExp : 0) || 0)),
    assetValue: roundCompanyCoins(hasEconomy && economy.assetValue !== undefined ? economy.assetValue : 0),
    lastCompanyUpgradeAt: String(hasEconomy ? economy.lastCompanyUpgradeAt || "" : ""),
    transactions: transactions.slice(0, 80),
  };
}

function normalizeEconomyTransaction(transaction) {
  if (!transaction || typeof transaction !== "object" || Array.isArray(transaction)) return null;
  const type = ["earn", "spend", "adjust"].includes(transaction.type) ? transaction.type : "adjust";
  const source = ["task", "company-task-missed", "project", "skill-stock", "company-upgrade", "department-upgrade", "exploration", "decoration", "relationship-reaction", "manual"].includes(transaction.source)
    ? transaction.source
    : "manual";
  return {
    id: String(transaction.id || createId("economy")),
    type,
    amount: roundCompanyCoins(transaction.amount),
    source,
    title: String(transaction.title || ""),
    note: String(transaction.note || ""),
    relatedCompanyId: String(transaction.relatedCompanyId || ""),
    relatedProjectId: String(transaction.relatedProjectId || ""),
    relatedTaskId: String(transaction.relatedTaskId || ""),
    relatedStockId: String(transaction.relatedStockId || ""),
    createdAt: String(transaction.createdAt || new Date().toISOString()),
  };
}

function normalizeCompanyProject(project) {
  if (!project?.title) return null;
  const progress = clampNumber(project.progress, 0, 100, 0);
  return {
    id: project.id || createId("project"),
    companyId: project.companyId || "",
    title: project.title,
    description: project.description || "",
    departmentName: project.departmentName || "",
    startDate: project.startDate || "",
    deadline: project.deadline || "",
    progress,
    status: progress >= 100 ? "completed" : project.status || "active",
    taskIds: Array.isArray(project.taskIds) ? project.taskIds : [],
    createdAt: project.createdAt || new Date().toISOString(),
    updatedAt: project.updatedAt || new Date().toISOString(),
  };
}

function normalizeCompanyTask(task) {
  if (!task?.title) return null;
  const durationMinutes = normalizeCompanyTaskMinutes(task.durationMinutes);
  return {
    id: task.id || createId("task"),
    title: task.title,
    done: Boolean(task.done),
    source: "life-company",
    companyId: task.companyId || "",
    projectId: task.projectId || "",
    departmentName: task.departmentName || "",
    durationMinutes,
    coinReward: normalizeCompanyTaskCoinReward(task.coinReward, durationMinutes),
    createdAt: task.createdAt || new Date().toISOString(),
    updatedAt: task.updatedAt || new Date().toISOString(),
  };
}

function renderLifeCompanyPage() {
  const company = lifeCompanyState.company;
  companyDom.companyEmptyState.hidden = Boolean(company);
  companyDom.companySystem.hidden = !company;
  if (!company) return;

  syncCompanyDerivedState();
  renderCompanyExploration();
  renderCompanyOverview();
  renderCompanyEconomy();
  renderCompanyDepartments();
  renderCompanyProjects();
  renderCompanyTasks();
  renderRecommendedSkillStocks();
  renderCompanyReport();
  saveLifeCompany();
}

function activeCompanyDepartment() {
  const company = lifeCompanyState.company;
  if (!company?.departments?.length) return null;
  const active = company.departments.find((department) => department.id === company.activeDepartmentId && department.exploration?.unlocked);
  const fallback = company.departments.find((department) => department.exploration?.unlocked) || company.departments[0];
  if (!active && fallback) company.activeDepartmentId = fallback.id;
  return active || fallback;
}

function renderCompanyExploration() {
  const company = lifeCompanyState.company;
  const department = activeCompanyDepartment();
  if (!company || !department) return;
  const type = companyTypeById(company.type);
  const departmentIndex = company.departments.findIndex((item) => item.id === department.id);
  const revealed = new Set(department.exploration.revealedCells);
  const nextDepartment = company.departments[departmentIndex + 1];
  const canPromptNext = Boolean(department.exploration.completed && nextDepartment && !nextDepartment.exploration.unlocked);

  setText(companyDom.companyExplorerType, type?.name || "人生公司");
  setText(companyDom.companyExplorerCompanyName, company.name);
  if (companyDom.companyGardenButton) {
    companyDom.companyGardenButton.textContent = companyPreviewMode === "scan" ? "花园入口" : company.garden.unlocked ? "后花园" : "开启花园";
    companyDom.companyGardenButton.classList.toggle("is-locked", !company.garden.unlocked);
  }
  setText(companyDom.companyExplorationStage, `部门 ${departmentIndex + 1} / ${company.departments.length}`);
  setText(companyDom.companyExplorationProgress, department.exploration.completed
    ? `${department.room.memberIds.length} / ${COMPANY_ROOM_MEMBER_LIMIT}`
    : `公司账户 · ${formatCompanyCoins(company.economy.companyCoins)}`);
  setText(companyDom.companyExplorationTitle, department.exploration.completed
    ? `${department.name}办公室`
    : `扫描格子，寻找${department.name}`);
  const explorationBoard = companyDom.companyMineBoard?.closest(".company-exploration-board");
  explorationBoard?.classList.toggle("is-department-room", department.exploration.completed);
  companyDom.companyExplorationHint.hidden = department.exploration.completed;
  if (!department.exploration.completed) {
    setText(companyDom.companyExplorationHint, `每次扫描消耗 ${formatCompanyCoins(COMPANY_EXPLORATION_SCAN_COST)}，本区域只有一个真正入口。`);
  }
  companyDom.companyMineBoard.classList.toggle("is-complete", department.exploration.completed);
  companyDom.companyMineBoard.classList.toggle("is-room-view", department.exploration.completed);

  companyDom.companyExplorationNextAction.hidden = !canPromptNext;
  companyDom.companyDepartmentTrack.innerHTML = company.departments.map((item, index) => {
    const isActive = item.id === department.id;
    const isUnlocked = Boolean(item.exploration?.unlocked);
    return `
      <button class="${isActive ? "is-active" : ""} ${item.exploration?.completed ? "is-complete" : ""}" type="button"
        data-company-action="select-exploration-department" data-department-id="${escapeHtml(item.id)}"
        ${isUnlocked ? "" : "disabled"} aria-label="${isUnlocked ? `查看${escapeHtml(item.name)}` : `尚未开启的部门 ${index + 1}`}">
        <span>${isUnlocked ? index + 1 : "?"}</span>
        <small>${isUnlocked ? escapeHtml(item.name) : "待开启"}</small>
      </button>
    `;
  }).join("");

  if (department.exploration.completed) {
    openCompanyRoomDepartmentId = department.id;
    companyDom.companyMineBoard.setAttribute("role", "group");
    companyDom.companyMineBoard.setAttribute("aria-label", `${department.name}办公室`);
    companyDom.companyMineBoard.innerHTML = renderCompanyDepartmentInteriorPreview(department);
    renderCompanyInlineTasks(department);
    renderCompanyInlineRoomMembers(department);
    return;
  }

  openCompanyRoomDepartmentId = "";
  if (companyDom.companyInlineTaskPanel) companyDom.companyInlineTaskPanel.hidden = true;
  if (companyDom.companyInlineRoomMembers) companyDom.companyInlineRoomMembers.hidden = true;

  companyDom.companyMineBoard.setAttribute("role", "grid");
  companyDom.companyMineBoard.setAttribute("aria-label", "部门探索格");

  const scanCells = Array.from({ length: COMPANY_EXPLORATION_CELL_COUNT }, (_, cellIndex) => {
    const isRevealed = revealed.has(cellIndex);
    const isPortal = department.exploration.portalCell === cellIndex;
    if (department.exploration.completed && !isPortal) {
      return `<button class="company-mine-cell is-cleared" type="button" role="gridcell" disabled aria-label="已清空格 ${cellIndex + 1}"><span></span></button>`;
    }
    if (!isRevealed) {
      return `<button class="company-mine-cell is-covered" type="button" role="gridcell" data-company-action="reveal-company-cell" data-cell-index="${cellIndex}" aria-label="扫描格 ${cellIndex + 1}，消耗 ${COMPANY_EXPLORATION_SCAN_COST} 金币"><span></span></button>`;
    }
    if (isPortal) {
      const portalState = department.exploration.completed ? "is-complete" : revealed.size <= 1 ? "is-entrance" : "is-open";
      return `<button class="company-mine-cell is-revealed is-department ${portalState} is-current" type="button" role="gridcell" data-company-action="open-department-room" data-department-id="${escapeHtml(department.id)}" aria-label="进入${escapeHtml(department.name)}"><span>部</span><small>${escapeHtml(department.name)}</small></button>`;
    }
    return `<button class="company-mine-cell is-revealed is-empty" type="button" role="gridcell" disabled aria-label="格 ${cellIndex + 1} 未发现入口"><span>空</span></button>`;
  }).join("");

  companyDom.companyMineBoard.innerHTML = isWarmPixelSkin() ? `
    <div class="company-scan-progress-card" aria-hidden="true">
      <strong>探索进度</strong>
      <span>已探索 <b>${revealed.size}</b>/${COMPANY_EXPLORATION_CELL_COUNT}</span>
      <small>找到${escapeHtml(department.name)}入口即可解锁</small>
    </div>
    <div class="company-scan-grid" role="presentation">${scanCells}</div>
    <div class="company-scan-cost-bar" aria-hidden="true">
      <span>每次扫描消耗 <b>${COMPANY_EXPLORATION_SCAN_COST}</b> 金币</span>
      <strong>${formatCompanyCoins(COMPANY_EXPLORATION_SCAN_COST)} 扫描格子</strong>
    </div>
  ` : scanCells;
}

function showCompanyExplorationHint() {
  const department = activeCompanyDepartment();
  if (!department || department.exploration?.completed) return;
  const revealedCount = department.exploration.revealedCells.length;
  const remainingCount = Math.max(0, COMPANY_EXPLORATION_CELL_COUNT - revealedCount);
  showCompanyToast(`提示：${department.name}入口藏在未扫描格里，还剩 ${remainingCount} 格可探索。`);
}

function renderCompanyDepartmentInteriorPreview(department) {
  const relationshipCards = loadCompanyRelationshipCards();
  const scene = companyDepartmentScene(department);
  const members = department.room.memberIds
    .map((id) => relationshipCards.find((card) => card.id === id))
    .filter(Boolean);
  const tasks = companyTasksForDepartment(department);
  const pendingTaskCount = tasks.filter((task) => !task.done).length;
  if (isWarmPixelSkin()) {
    return renderWarmPixelDepartmentRoom(department, scene, members, tasks, pendingTaskCount);
  }
  return `
    <section class="company-department-interior-preview">
      <div class="company-department-interior-pan" data-company-scene-pan tabindex="0" aria-label="${escapeHtml(department.name)}办公室场景，可左右移动">
        <div class="company-department-interior-scene company-office-scene" style="--scene-aspect:${scene.aspectRatio};">
          <img class="company-department-interior-image pixel-art" src="${escapeHtml(scene.src)}" alt="${escapeHtml(scene.name)}" draggable="false" />
          ${members.map((member, index) => renderPixelOfficeMember(member, department, index)).join("")}
          ${members.length ? "" : `<p class="pixel-room-empty">还没有安排部门成员</p>`}
        </div>
      </div>
      <button class="company-department-task-toggle" type="button" data-company-action="toggle-inline-tasks" aria-expanded="${companyInlineTasksExpanded}">
        <small>TASK MANAGEMENT</small>
        <strong>任务管理</strong>
        <span>${tasks.length} 项任务 · ${pendingTaskCount} 项待完成</span>
        <i aria-hidden="true">${companyInlineTasksExpanded ? "⌃" : "⌄"}</i>
      </button>
    </section>
  `;
}

function renderWarmPixelDepartmentRoom(department, scene, members, tasks, pendingTaskCount) {
  const company = lifeCompanyState.company;
  const departmentIndex = company?.departments.findIndex((item) => item.id === department.id) ?? 0;
  const projects = (company?.projects || []).filter((project) => project.departmentName === department.name);
  const doneTaskCount = tasks.filter((task) => task.done).length;
  const reportLines = company ? companyDepartmentReportLines(company, department, projects, tasks) : [];
  return `
    <section class="company-department-interior-preview company-room-dashboard-preview">
      <header class="company-room-dashboard-head">
        <div>
          <small>部门 ${departmentIndex + 1} / ${company?.departments.length || 1}</small>
          <strong>${escapeHtml(department.name)}办公室</strong>
        </div>
        <span>${department.room.memberIds.length} / ${COMPANY_ROOM_MEMBER_LIMIT}</span>
      </header>
      <div class="company-room-stage-card">
        <div class="company-department-interior-pan" data-company-scene-pan tabindex="0" aria-label="${escapeHtml(department.name)}办公室场景，可左右移动">
          <div class="company-department-interior-scene company-office-scene company-room-new-scene" style="--scene-aspect:${scene.aspectRatio};">
            <img class="company-department-interior-image pixel-art" src="${escapeHtml(scene.src)}" alt="${escapeHtml(scene.name)}" draggable="false" />
            ${members.map((member, index) => renderPixelOfficeMember(member, department, index)).join("")}
            ${members.length ? "" : `<p class="pixel-room-empty company-room-speech-bubble">还没有安排部门成员</p>`}
          </div>
        </div>
        <button class="company-department-task-toggle company-room-task-card" type="button" data-company-action="toggle-inline-tasks" aria-expanded="${companyInlineTasksExpanded}">
          <small>任务管理</small>
          <strong>${tasks.length} 项任务</strong>
          <span>${doneTaskCount} 项完成</span>
          <i aria-hidden="true">›</i>
        </button>
      </div>
      <div class="company-room-dashboard-grid">
        <article class="company-room-panel company-room-project-panel">
          <h3>小项目时间</h3>
          ${renderWarmPixelDepartmentProjects(projects)}
        </article>
        <article class="company-room-panel company-room-today-panel">
          <h3>今日公司任务</h3>
          ${renderWarmPixelDepartmentTasks(tasks)}
        </article>
        <article class="company-room-panel company-room-report-panel">
          <h3>公司运营报告</h3>
          <ul>${reportLines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
        </article>
      </div>
    </section>
  `;
}

function renderWarmPixelDepartmentProjects(projects) {
  if (!projects.length) {
    return `<p class="company-room-empty-copy">还没有小项目。</p><button type="button" data-company-action="open-room-project">新增项目</button>`;
  }
  return projects.slice(0, 2).map((project) => `
    <div class="company-room-project-row">
      <strong>${escapeHtml(project.title)}</strong>
      <span>${project.progress || 0}%</span>
      <i><b style="width:${project.progress || 0}%"></b></i>
      <small>${project.deadline ? `截止 ${escapeHtml(formatDateShort(project.deadline))}` : "未设置时间"}</small>
    </div>
  `).join("") + `<button type="button" data-company-action="open-room-project">新增项目</button>`;
}

function renderWarmPixelDepartmentTasks(tasks) {
  if (!tasks.length) {
    return `<p class="company-room-empty-copy">还没有公司任务卡。</p><button type="button" data-company-action="open-room-project">生成任务</button>`;
  }
  return tasks.slice(0, 3).map((task) => `
    <div class="company-room-task-row ${task.done ? "is-done" : ""}">
      <button type="button" data-company-action="toggle-company-task" data-task-id="${escapeHtml(task.id)}" aria-label="${task.done ? "取消完成" : "完成"}${escapeHtml(task.title)}">${task.done ? "✓" : ""}</button>
      <span><strong>${escapeHtml(task.title)}</strong><small>${formatCompanyTaskMinutes(task.durationMinutes)} · ${formatCompanyCoins(companyTaskCoinReward(task))}</small></span>
    </div>
  `).join("");
}

function companyDepartmentReportLines(company, department, projects, tasks) {
  const doneTaskCount = tasks.filter((task) => task.done).length;
  const statusLabel = DEPARTMENT_STATUS_LABELS[department.status] || "正常";
  if (!projects.length && !tasks.length) {
    return [`${department.name}暂无项目，状态${statusLabel}。`, "从一个项目开始生成任务，让公司今天产生实际行动。"];
  }
  return [
    `${department.name}：${projects.length} 个项目，${tasks.length} 张任务，状态${statusLabel}。`,
    `今日已完成 ${doneTaskCount} 项，待完成 ${Math.max(0, tasks.length - doneTaskCount)} 项。`,
    `公司等级 ${currentCompanyLevel().name}，可用金币 ${formatCompanyCoins(company.economy.companyCoins)}。`,
  ];
}

function companyTasksForDepartment(department) {
  return lifeCompanyState.tasks
    .filter((task) => task.departmentName === department.name)
    .sort((a, b) => Number(a.done) - Number(b.done) || new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}

function renderCompanyInlineTasks(department) {
  if (!companyDom.companyInlineTaskPanel || !companyDom.companyInlineTaskList) return;
  const tasks = companyTasksForDepartment(department);
  const pendingCount = tasks.filter((task) => !task.done).length;
  companyDom.companyInlineTaskPanel.hidden = !companyInlineTasksExpanded;
  setText(companyDom.companyInlineTaskSummary, `${tasks.length} 项任务 · ${pendingCount} 项待完成`);
  if (!tasks.length) {
    companyDom.companyInlineTaskList.innerHTML = `<p class="company-inline-task-empty">当前部门暂无任务。</p>`;
    return;
  }
  companyDom.companyInlineTaskList.innerHTML = tasks.map((task) => {
    const project = lifeCompanyState.company?.projects.find((item) => item.id === task.projectId);
    const details = [
      project?.title || "未关联项目",
      formatCompanyTaskMinutes(task.durationMinutes),
      project?.deadline ? `截止 ${formatDateShort(project.deadline)}` : "未设截止日期",
    ];
    return `
      <article class="company-inline-task-item ${task.done ? "is-done" : ""}">
        <button type="button" data-company-action="toggle-company-task" data-task-id="${escapeHtml(task.id)}" aria-label="${task.done ? "取消完成" : "完成"}${escapeHtml(task.title)}">${task.done ? "✓" : ""}</button>
        <div>
          <strong>${escapeHtml(task.title)}</strong>
          <small>${details.map((detail) => escapeHtml(detail)).join(" · ")}</small>
        </div>
        <span><b>${task.done ? "已完成" : "待完成"}</b><em>${formatCompanyCoins(companyTaskCoinReward(task))}</em></span>
      </article>
    `;
  }).join("");
}

function toggleCompanyInlineTasks() {
  const department = activeCompanyDepartment();
  if (!department?.exploration?.completed) return;
  companyInlineTasksExpanded = !companyInlineTasksExpanded;
  renderCompanyExploration();
}

function renderCompanyInlineRoomMembers(department) {
  if (!companyDom.companyInlineRoomMembers || !companyDom.companyInlineRoomMemberList) return;
  const relationshipCards = loadCompanyRelationshipCards();
  const validMemberIds = new Set(relationshipCards.map((card) => card.id));
  department.room.memberIds = department.room.memberIds
    .filter((id) => validMemberIds.has(id))
    .slice(0, COMPANY_ROOM_MEMBER_LIMIT);
  companyDom.companyInlineRoomMembers.hidden = false;
  companyDom.companyInlineRoomToggle?.setAttribute("aria-expanded", String(companyInlineMembersExpanded));
  if (companyDom.companyInlineRoomContent) companyDom.companyInlineRoomContent.hidden = !companyInlineMembersExpanded;
  companyDom.companyInlineRoomMembers.classList.toggle("is-expanded", companyInlineMembersExpanded);
  setText(companyDom.companyInlineRoomMemberCount, `${department.room.memberIds.length} / ${COMPANY_ROOM_MEMBER_LIMIT}`);
  if (companyDom.companyInlineRoomSearchInput && document.activeElement !== companyDom.companyInlineRoomSearchInput) {
    companyDom.companyInlineRoomSearchInput.value = companyRoomMemberSearch;
  }
  companyDom.companyInlineRoomMemberList.innerHTML = renderCompanyRoomMemberOptions(department, relationshipCards, companyRoomMemberSearch);
}

function renderCompanyRoomMemberOptions(department, relationshipCards, query = "") {
  if (!relationshipCards.length) {
    return `
      <div class="company-room-member-empty">
        <p>人际关系里还没有角色。</p>
        <a href="./relationships.html">去创建关系卡</a>
      </div>
    `;
  }
  const keyword = normalizeCompanyRelationshipSearchText(query);
  const filteredCards = relationshipCards
    .filter((member) => !keyword || member.searchText.includes(keyword))
    .sort((a, b) => Number(department.room.memberIds.includes(b.id)) - Number(department.room.memberIds.includes(a.id))
      || a.name.localeCompare(b.name, "zh-Hans-CN"));
  if (!filteredCards.length) {
    return `<div class="company-room-member-empty"><p>没有匹配的关系角色。</p></div>`;
  }
  return filteredCards.map((member) => {
    const isAssigned = department.room.memberIds.includes(member.id);
    return `
      <article class="company-room-member-option ${isAssigned ? "is-assigned" : ""}">
        <span class="company-room-member-avatar" style="--member-color: ${companyMemberColor(member.id)}">${renderCompanyRelationshipAvatar(member, "library")}</span>
        <span class="company-room-member-copy"><b>${escapeHtml(member.name)}</b><small>${escapeHtml(member.relationshipType)}</small></span>
        <button class="${isAssigned ? "is-remove" : "is-add"}" type="button" data-company-action="${isAssigned ? "remove-room-member" : "add-room-member"}" data-member-id="${escapeHtml(member.id)}" aria-label="${isAssigned ? `将${escapeHtml(member.name)}移出部门` : `将${escapeHtml(member.name)}加入部门`}" title="${isAssigned ? "移出部门" : "加入部门"}">${isAssigned ? "×" : "+"}</button>
      </article>
    `;
  }).join("");
}

function toggleCompanyInlineRoomMembers() {
  const department = activeCompanyDepartment();
  if (!department?.exploration?.completed) return;
  companyInlineMembersExpanded = !companyInlineMembersExpanded;
  renderCompanyInlineRoomMembers(department);
}

function handleCompanyRoomMemberSearchInput(event) {
  if (event.target?.id !== "companyInlineRoomSearchInput") return;
  companyRoomMemberSearch = event.target.value;
  const department = activeCompanyDepartment();
  if (!department?.exploration?.completed || !companyDom.companyInlineRoomMemberList) return;
  companyDom.companyInlineRoomMemberList.innerHTML = renderCompanyRoomMemberOptions(
    department,
    loadCompanyRelationshipCards(),
    companyRoomMemberSearch,
  );
}

function companyExplorationTargetCell(departmentId) {
  const seed = Array.from(String(departmentId)).reduce((sum, character, index) => sum + character.charCodeAt(0) * (index + 3), 0);
  return Math.abs(seed * 17 + 11) % COMPANY_EXPLORATION_CELL_COUNT;
}

function companyExplorationSignal(departmentId, cellIndex) {
  const seed = Array.from(String(departmentId)).reduce((sum, character) => sum + character.charCodeAt(0), 0);
  return (seed + cellIndex * 7 + Math.floor(cellIndex / 5) * 3) % 4;
}

function selectExplorationDepartment(departmentId) {
  const department = lifeCompanyState.company?.departments.find((item) => item.id === departmentId);
  if (!department?.exploration?.unlocked) {
    showCompanyToast("这个部门还没有开启。");
    return;
  }
  lifeCompanyState.company.activeDepartmentId = department.id;
  renderCompanyExploration();
  saveLifeCompany();
}

function revealCompanyCell(cellIndex) {
  if (companyPreviewMode === "scan") {
    showCompanyToast("扫雷预览页只展示未探索界面。");
    return;
  }
  const company = lifeCompanyState.company;
  const department = activeCompanyDepartment();
  if (!company || !department || !Number.isInteger(cellIndex) || cellIndex < 0 || cellIndex >= COMPANY_EXPLORATION_CELL_COUNT) return;
  const exploration = department.exploration;
  if (exploration.completed || exploration.revealedCells.includes(cellIndex)) return;
  const spent = spendCompanyCoins(COMPANY_EXPLORATION_SCAN_COST, "exploration", {
    title: `扫描${department.name}`,
    note: `探索格 ${cellIndex + 1}`,
  });
  if (!spent) {
    showCompanyToast(`公司金币不足，需要 ${formatCompanyCoins(COMPANY_EXPLORATION_SCAN_COST)} 才能扫描。`);
    return;
  }
  exploration.revealedCells.push(cellIndex);
  exploration.revealedCells.sort((a, b) => a - b);
  const foundPortal = cellIndex === exploration.targetCell;
  if (foundPortal) {
    exploration.portalCell = cellIndex;
    exploration.completed = true;
  }
  company.updatedAt = new Date().toISOString();
  renderLifeCompanyPage();
  if (!foundPortal) {
    showCompanyToast(`这里是空的，已消耗 ${formatCompanyCoins(COMPANY_EXPLORATION_SCAN_COST)}。`);
    return;
  }
  showCompanyToast(`找到${department.name}，办公室已经建立。`);
}

function toggleCompanyOperations() {
  if (!companyDom.companyOperationsDrawer) return;
  companyDom.companyOperationsDrawer.hidden = !companyDom.companyOperationsDrawer.hidden;
  if (!companyDom.companyOperationsDrawer.hidden) {
    companyDom.companyOperationsDrawer.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function nextLockedCompanyDepartment() {
  const company = lifeCompanyState.company;
  const department = activeCompanyDepartment();
  if (!company || !department) return null;
  const index = company.departments.findIndex((item) => item.id === department.id);
  const next = company.departments[index + 1];
  return next && !next.exploration.unlocked ? next : null;
}

function promptNextCompanyDepartment() {
  const department = activeCompanyDepartment();
  const next = nextLockedCompanyDepartment();
  if (!department?.exploration.completed) {
    showCompanyToast("先扫描出当前部门的真正入口。");
    return;
  }
  if (!next) {
    showCompanyToast("所有部门都已经开启。");
    return;
  }
  setText(companyDom.companyUnlockText, `${department.name}已经探索完成。要开启「${next.name}」吗？`);
  showDialog(companyDom.companyUnlockDialog);
}

function unlockNextCompanyDepartment() {
  const company = lifeCompanyState.company;
  const current = activeCompanyDepartment();
  const next = nextLockedCompanyDepartment();
  if (!company || !current || !next) return;
  current.exploration.completionPromptShown = true;
  next.exploration.unlocked = true;
  company.activeDepartmentId = next.id;
  company.updatedAt = new Date().toISOString();
  closeDialog(companyDom.companyUnlockDialog);
  renderLifeCompanyPage();
  showCompanyToast(`${next.name}已经开启。`);
}

function loadCompanyRelationshipCards() {
  try {
    const parsed = JSON.parse(localStorage.getItem(RELATIONSHIP_CARDS_KEY) || "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.map((card) => {
      const name = String(card?.basic?.name || card?.basic?.realName || "未命名角色").trim() || "未命名角色";
      const relationshipType = String(card?.basic?.relationshipType || "其他");
      return {
        id: String(card?.id || ""),
        name,
        relationshipType,
        avatar: card?.avatar && typeof card.avatar === "object" && !Array.isArray(card.avatar) ? card.avatar : {},
        searchText: normalizeCompanyRelationshipSearchText([
          name,
          relationshipType,
          card?.basic?.meaning,
          card?.basic?.note,
          card?.relationship?.status,
          card?.relationship?.boundary,
          ...(Array.isArray(card?.relationship?.tags) ? card.relationship.tags : []),
          ...(Array.isArray(card?.profile?.tags) ? card.profile.tags : []),
          ...(Array.isArray(card?.profile?.keywords) ? card.profile.keywords : []),
          card?.profile?.recentInteraction,
        ].filter(Boolean).join(" ")),
      };
    }).filter((card) => card.id);
  } catch (error) {
    return [];
  }
}

function normalizeCompanyRelationshipSearchText(value) {
  return String(value || "").replace(/\s+/g, "").toLowerCase();
}

function renderCompanyRelationshipAvatar(card, variant = "library") {
  if (window.RelationshipAvatarView?.render) return window.RelationshipAvatarView.render(card?.avatar || {}, variant);
  return `<span class="company-avatar-fallback" style="--member-color: ${companyMemberColor(card?.id)}">${escapeHtml(companyMemberInitial(card?.name))}</span>`;
}

function openCompanyGarden() {
  if (!lifeCompanyState.company) return;
  companyGardenSceneMenuOpen = false;
  companyGardenCharacterPickerOpen = false;
  companyGardenPlantPickerOpen = false;
  companyGardenPendingPlantId = "";
  renderCompanyGarden();
  showDialog(companyDom.companyGardenDialog);
}

function unlockCompanyGarden() {
  const company = lifeCompanyState.company;
  if (!company) return;
  company.garden.unlocked = true;
  company.updatedAt = new Date().toISOString();
  saveLifeCompany();
  renderCompanyExploration();
  renderCompanyGarden();
  showCompanyToast("后花园已经开启。");
}

function companyGardenRelationshipKind(relationshipType) {
  if (relationshipType === "恋人 / 前任") return "love";
  if (relationshipType === "家人") return "family";
  return "friendship";
}

function companyGardenPlantOptions(sceneId = lifeCompanyState.company?.garden?.sceneId) {
  const scene = COMPANY_GARDEN_SCENES.find((item) => item.id === sceneId) || COMPANY_GARDEN_SCENES[0];
  return COMPANY_GARDEN_PLANT_VARIANTS[scene.plantKind] || COMPANY_GARDEN_PLANT_VARIANTS.friendship;
}

function companyGardenKindLabel(kind) {
  if (kind === "love") return "爱情花圃";
  if (kind === "family") return "亲情果木";
  return "友情花圃";
}

function companyGardenSceneState(sceneId = lifeCompanyState.company?.garden?.sceneId) {
  const garden = lifeCompanyState.company?.garden;
  const selectedSceneId = COMPANY_GARDEN_SCENES.some((scene) => scene.id === sceneId)
    ? sceneId
    : COMPANY_GARDEN_SCENES[0].id;
  if (!garden) return null;
  if (!garden.scenes || typeof garden.scenes !== "object" || Array.isArray(garden.scenes)) garden.scenes = {};
  if (!garden.scenes[selectedSceneId]) {
    garden.scenes[selectedSceneId] = {
      selectedCharacterId: "",
      placedPlants: [],
      targets: {},
    };
  }
  return garden.scenes[selectedSceneId];
}

function companyGardenTarget(characterId, sceneId = lifeCompanyState.company?.garden?.sceneId) {
  const sceneState = companyGardenSceneState(sceneId);
  if (!sceneState || !characterId) return null;
  if (!sceneState.targets[characterId]) {
    sceneState.targets[characterId] = {
      characterId,
      intimacyPoints: 0,
      plantCount: 0,
      completed: false,
      inTacticsBook: false,
      events: [],
      updatedAt: new Date().toISOString(),
    };
  }
  return sceneState.targets[characterId];
}

function renderCompanyGarden() {
  const company = lifeCompanyState.company;
  if (!company || !companyDom.companyGardenBody) return;
  const garden = company.garden;
  if (!garden.unlocked) {
    companyDom.companyGardenBody.innerHTML = `
      <section class="company-garden-locked">
        <div class="company-garden-gate" aria-hidden="true">
          ${isWarmPixelSkin() ? renderWarmPixelImage("garden/gate_closed.png", "skin-garden-gate-image", "", 'loading="lazy"') : ""}
          <span></span><span></span>
        </div>
        <h3>开启公司的秘密后花园</h3>
        <p>把人际关系里的角色放进花园，用共同完成的亲密事件培育关系植物。</p>
        <button type="button" data-company-action="unlock-company-garden">开启后花园</button>
      </section>
    `;
    return;
  }

  const cards = loadCompanyRelationshipCards();
  const selectedScene = COMPANY_GARDEN_SCENES.find((scene) => scene.id === garden.sceneId)
    || COMPANY_GARDEN_SCENES[0];
  const sceneState = companyGardenSceneState(selectedScene.id);
  const selectedCard = cards.find((card) => card.id === sceneState.selectedCharacterId) || null;
  if (sceneState.selectedCharacterId && !selectedCard) sceneState.selectedCharacterId = "";
  const target = selectedCard ? companyGardenTarget(selectedCard.id, selectedScene.id) : null;
  const activeTargetLocked = Boolean(selectedCard && target && !target.completed);
  const tacticsCards = cards.filter((card) => sceneState.targets[card.id]?.inTacticsBook);
  const maxTacticsPage = Math.max(0, Math.ceil(tacticsCards.length / 4) - 1);
  companyGardenTacticsPage = Math.min(companyGardenTacticsPage, maxTacticsPage);

  companyDom.companyGardenBody.innerHTML = `
    <section class="company-garden-world ${companyGardenPendingPlantId ? "is-placing-plant" : ""}">
      <img class="company-garden-scene-image" src="${escapeHtml(selectedScene.src)}" alt="${escapeHtml(selectedScene.name)}" />
      ${renderCompanyGardenSceneControl(selectedScene)}
      ${companyGardenCharacterPickerOpen
        ? renderCompanyGardenCharacterPicker(cards, sceneState, selectedCard, activeTargetLocked)
        : selectedCard
          ? renderCompanyGardenCharacter(selectedCard)
          : renderCompanyGardenEmptyCharacterSlot()}
      ${renderCompanyGardenPlantControl(selectedCard, sceneState)}
      ${companyGardenPlantPickerOpen ? renderCompanyGardenPlantPicker(selectedScene) : ""}
      ${renderCompanyGardenPlacedPlants(sceneState)}
      ${companyGardenPendingPlantId ? renderCompanyGardenPlacementHint() : ""}
      ${!selectedCard && !sceneState.placedPlants.length
        ? `<div class="company-garden-plots"><div class="company-garden-empty-plot"><strong>这块花圃还空着</strong><small>先点击角色＋，再点击植物＋开始种植</small></div></div>`
        : ""}
    </section>

    ${selectedCard ? renderCompanyGardenEventPanel(selectedCard, target) : ""}

    <section class="company-tactics-book">
      <div class="company-garden-section-head">
        <div><strong>已攻略战术册</strong><small>种满 10 株并确认后会收藏在这里</small></div>
        <span>${tacticsCards.length}</span>
      </div>
      ${renderCompanyTacticsBook(tacticsCards)}
    </section>
  `;
}

function renderCompanyGardenCharacter(card) {
  return `
    <button class="company-garden-character" type="button" data-company-action="toggle-garden-character-picker" data-garden-character-id="${escapeHtml(card.id)}" style="--member-color:${companyMemberColor(card.id)};" aria-label="${escapeHtml(card.name)}位于花园中，点击查看角色选择，长按可移出花园">
      ${renderCompanyRelationshipAvatar(card, "map")}
      <b>${escapeHtml(card.name)}</b>
    </button>
  `;
}

function renderCompanyGardenEmptyCharacterSlot() {
  return `<button class="company-garden-empty-character-slot" type="button" data-company-action="toggle-garden-character-picker" aria-label="选择花园角色"><span aria-hidden="true">＋</span></button>`;
}

function renderCompanyGardenPlantControl(selectedCard, sceneState) {
  const disabled = !selectedCard;
  const growingPlant = selectedCard ? companyGardenGrowingPlant(sceneState, selectedCard.id) : null;
  const label = disabled
    ? "请先选择花园角色"
    : growingPlant
      ? "当前种子开花后才能种下一株植物"
      : "选择植物并种植";
  return `
    <button class="company-garden-empty-plant-slot ${growingPlant ? "is-locked" : ""}" type="button" data-company-action="toggle-garden-plant-picker" aria-label="${label}" title="${label}" ${disabled ? "disabled" : ""} ${growingPlant ? 'aria-disabled="true"' : ""}>＋</button>
  `;
}

function renderCompanyGardenPlantPicker(scene) {
  const plants = companyGardenPlantOptions(scene?.id);
  return `
    <section class="company-garden-plant-picker">
      <div class="company-garden-section-head">
        <div><strong>选择植物种类</strong><small>选择后点击花园中的位置完成种植</small></div>
        <button class="company-garden-picker-close" type="button" data-company-action="toggle-garden-plant-picker" aria-label="关闭植物选择">×</button>
      </div>
      <div class="company-garden-plant-options">
        ${plants.map((plant) => `
          <button type="button" data-company-action="select-garden-plant-type" data-plant-id="${escapeHtml(plant.id)}">
            <img src="./assets/garden-plants/${escapeHtml(plant.id)}/stage_05.png?v=2" alt="" loading="lazy" />
            <b>${escapeHtml(plant.name)}</b>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCompanyGardenPlacedPlants(sceneState) {
  const perCharacterIndexes = {};
  return `
    <div class="company-garden-placed-plants" aria-label="已种植的植物">
      ${sceneState.placedPlants.map((plant) => {
        const characterId = plant.characterId || "unassigned";
        const index = perCharacterIndexes[characterId] || 0;
        perCharacterIndexes[characterId] = index + 1;
        const target = sceneState.targets[plant.characterId];
        const stage = target ? companyGardenPlantStage(target, index) : 5;
        const stageName = `stage_${String(stage).padStart(2, "0")}.png`;
        const option = COMPANY_GARDEN_PLANT_OPTIONS.find((item) => item.id === plant.variantId);
        const [anchorX, anchorY] = COMPANY_GARDEN_PLANT_ANCHORS[plant.variantId]?.[stage - 1] || [50, 100];
        return `
          <span class="company-garden-placed-plant" style="left:${plant.x}%;top:${plant.y}%;--plant-anchor-x:-${anchorX}%;--plant-anchor-y:-${anchorY}%;" aria-label="${escapeHtml(option?.name || "植物")}，成长阶段 ${stage}">
            <img src="./assets/garden-plants/${escapeHtml(plant.variantId)}/${stageName}?v=2" alt="" loading="lazy" />
          </span>
        `;
      }).join("")}
    </div>
  `;
}

function renderCompanyGardenPlacementHint() {
  const plant = COMPANY_GARDEN_PLANT_OPTIONS.find((item) => item.id === companyGardenPendingPlantId);
  return `
    <div class="company-garden-placement-hint">
      <span>点击花园中的位置种下${escapeHtml(plant?.name || "植物")}</span>
      <button type="button" data-company-action="cancel-garden-plant-placement">取消</button>
    </div>
  `;
}

function renderCompanyGardenCharacterPicker(cards, sceneState, selectedCard, activeTargetLocked) {
  return `
    <section class="company-garden-character-picker is-scene-popover">
      <div class="company-garden-section-head">
        <div><strong>选择花园角色</strong><small>${activeTargetLocked ? `${escapeHtml(selectedCard.name)}攻略中，完成或放弃后可更换` : "每个花园一次只能放入一位攻略对象"}</small></div>
        <button class="company-garden-picker-close" type="button" data-company-action="toggle-garden-character-picker" aria-label="关闭角色选择">×</button>
      </div>
      <div class="company-garden-character-list">
        ${cards.length ? cards.map((card) => {
          const progress = sceneState.targets[card.id];
          const selected = card.id === sceneState.selectedCharacterId;
          const lockedByOtherTarget = activeTargetLocked && !selected;
          return `
            <button class="${selected ? "is-selected" : ""}" type="button" data-company-action="select-garden-character" data-character-id="${escapeHtml(card.id)}" ${lockedByOtherTarget ? "disabled" : ""}>
              <span class="company-garden-avatar-chip" style="--member-color: ${companyMemberColor(card.id)}">
                ${isWarmPixelSkin() ? renderWarmPixelImage("relationship-ui/avatar_frame.png", "skin-avatar-frame", "", 'loading="lazy"') : ""}
                ${renderCompanyRelationshipAvatar(card, "library")}
              </span>
              <b>${escapeHtml(card.name)}</b>
              <small>${lockedByOtherTarget ? "当前不可放入" : `${escapeHtml(card.relationshipType)} · ${progress?.plantCount || 0}/${COMPANY_GARDEN_TARGET_PLANTS} 株`}</small>
            </button>
          `;
        }).join("") : `<div class="company-room-member-empty"><p>还没有可放入花园的关系角色。</p><a href="./relationships.html">去创建关系卡</a></div>`}
      </div>
    </section>
  `;
}

function renderCompanyGardenSceneControl(selectedScene) {
  return `
    <div class="company-garden-target company-garden-scene-control ${companyGardenSceneMenuOpen ? "is-open" : ""}">
      <button class="company-garden-scene-trigger" type="button" data-company-action="toggle-garden-scene-menu" aria-expanded="${companyGardenSceneMenuOpen}">${escapeHtml(selectedScene.name)}</button>
      <div class="company-garden-scene-menu" role="menu" ${companyGardenSceneMenuOpen ? "" : "hidden"}>
        ${COMPANY_GARDEN_SCENES.map((scene) => `
          <button class="${scene.id === selectedScene.id ? "is-selected" : ""}" type="button" role="menuitemradio" data-company-action="select-garden-scene" data-scene-id="${escapeHtml(scene.id)}" aria-checked="${scene.id === selectedScene.id}">${escapeHtml(scene.name)}</button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderCompanyGardenPlants(card, target) {
  const kind = companyGardenRelationshipKind(card.relationshipType);
  return `
    <div class="company-plant-grid" aria-label="${escapeHtml(card.name)}的关系植物">
      ${Array.from({ length: COMPANY_GARDEN_TARGET_PLANTS }, (_, index) => renderCompanyGardenPlant(kind, target, index)).join("")}
    </div>
  `;
}

function companyGardenPlantStage(target, index) {
  if (index < target.plantCount) return 5;
  if (index > target.plantCount || target.completed) return 1;
  return Math.max(1, Math.min(5, Math.floor(Number(target.intimacyPoints || 0) / 25) + 1));
}

function companyGardenGrowingPlant(sceneState, characterId = sceneState?.selectedCharacterId) {
  const target = sceneState?.targets?.[characterId];
  if (!target || !characterId) return null;
  const plants = sceneState.placedPlants.filter((plant) => plant.characterId === characterId);
  return plants.find((plant, index) => companyGardenPlantStage(target, index) < 5) || null;
}

function renderCompanyGardenPlant(kind, target, index) {
  const stage = companyGardenPlantStage(target, index);
  const grown = index < target.plantCount;
  const current = index === target.plantCount && !target.completed;
  const variants = COMPANY_GARDEN_PLANT_VARIANTS[kind] || COMPANY_GARDEN_PLANT_VARIANTS.friendship;
  const variant = variants[index % variants.length];
  const stageName = `stage_${String(stage).padStart(2, "0")}.png`;
  return `
    <span class="company-garden-plant has-art ${kind} ${grown ? "is-grown" : ""} ${current ? "is-current" : ""}" aria-label="第 ${index + 1} 株${escapeHtml(variant.name)}${grown ? "已长成" : "成长阶段 " + stage}">
      <img class="company-garden-art-plant" src="./assets/garden-plants/${escapeHtml(variant.id)}/${stageName}?v=2" alt="" loading="lazy" />
    </span>
  `;
}

function renderCompanyGardenEventPanel(card, target) {
  const completed = target.plantCount >= COMPANY_GARDEN_TARGET_PLANTS;
  const recentEvents = target.events.slice(0, 3);
  return `
    <section class="company-garden-event-panel ${completed ? "is-complete" : ""}">
      ${isWarmPixelSkin() ? `
        <div class="skin-relationship-effects" aria-hidden="true">
          ${renderWarmPixelImage(completed ? "relationship-ui/relationship_complete_effect.png" : "relationship-ui/plant_growth_effect.png", "skin-relation-effect", "", 'loading="lazy"')}
          ${completed ? renderWarmPixelImage("relationship-ui/celebration_garland.png", "skin-celebration-garland", "", 'loading="lazy"') : ""}
        </div>
      ` : ""}
      <div class="company-garden-progress-copy">
        <div>
          <strong>${completed ? "攻略完成" : `第 ${Math.min(target.plantCount + 1, COMPANY_GARDEN_TARGET_PLANTS)} 株成长中`}</strong>
          <small>${target.plantCount} / ${COMPANY_GARDEN_TARGET_PLANTS} 株植物</small>
        </div>
        <b>${completed ? "100%" : `${target.intimacyPoints}%`}</b>
      </div>
      <i class="company-garden-meter"><b style="width: ${completed ? 100 : target.intimacyPoints}%"></b></i>
      ${completed
        ? `<button class="company-tactics-add-button" type="button" data-company-action="add-to-tactics-book" ${target.inTacticsBook ? "disabled" : ""}>${target.inTacticsBook ? "已加入战术册" : `把${escapeHtml(card.name)}加入已攻略战术册`}</button>`
        : `
          <label class="company-garden-event-input">
            <span>亲密事件</span>
            <input id="companyGardenEventInput" type="text" maxlength="80" placeholder="例如：一起散步、认真聊天、共同完成一件事" />
          </label>
          ${isWarmPixelSkin() ? `
            <div class="company-garden-event-presets" aria-label="亲密事件快捷记录">
              ${renderCompanyGardenEventPreset("relationship-ui/event_heart.png", "认真陪伴")}
              ${renderCompanyGardenEventPreset("relationship-ui/event_gift.png", "送出礼物")}
              ${renderCompanyGardenEventPreset("relationship-ui/event_message.png", "好好聊天")}
              ${renderCompanyGardenEventPreset("relationship-ui/event_record.png", "记录回忆")}
            </div>
          ` : ""}
          <button class="company-garden-event-button" type="button" data-company-action="record-garden-event">完成一次亲密事件 +${COMPANY_GARDEN_EVENT_POINTS}</button>
          <button class="company-garden-abandon-button" type="button" data-company-action="abandon-garden-target">放弃当前攻略</button>
        `}
      ${recentEvents.length ? `<ol class="company-garden-event-history">${recentEvents.map((event) => `<li><span>${escapeHtml(event.note)}</span><small>${escapeHtml(formatTransactionTime(event.createdAt))}</small></li>`).join("")}</ol>` : ""}
    </section>
  `;
}

function renderCompanyGardenEventPreset(iconPath, note) {
  return `
    <button type="button" data-company-action="record-garden-event" data-event-note="${escapeHtml(note)}" aria-label="${escapeHtml(note)}">
      ${renderWarmPixelImage(iconPath, "skin-event-icon", "", 'loading="lazy"')}
      <span>${escapeHtml(note)}</span>
    </button>
  `;
}

function renderCompanyTacticsBook(tacticsCards) {
  if (!tacticsCards.length) {
    return `
      <div class="company-tactics-book-stage is-empty">
        ${isWarmPixelSkin() ? renderWarmPixelImage("strategy-book/cover.png", "skin-tactics-cover", "", 'loading="lazy"') : ""}
        <p>还没有加入战术册的角色。</p>
      </div>
    `;
  }
  const pageCards = tacticsCards.slice(companyGardenTacticsPage * 4, companyGardenTacticsPage * 4 + 4);
  const maxTacticsPage = Math.max(0, Math.ceil(tacticsCards.length / 4) - 1);
  return `
    <div class="company-tactics-book-stage">
      ${isWarmPixelSkin() ? renderWarmPixelImage("strategy-book/open_book.png", "skin-tactics-open-book", "", 'loading="lazy"') : ""}
      <button class="company-tactics-page-button is-prev" type="button" data-company-action="turn-tactics-page" data-direction="-1" ${companyGardenTacticsPage <= 0 ? "disabled" : ""} aria-label="上一页">
        ${isWarmPixelSkin() ? renderWarmPixelImage("strategy-book/page_left_arrow.png", "skin-tactics-arrow", "", 'loading="lazy"') : "‹"}
      </button>
      <div class="company-tactics-list">
        ${pageCards.map((card) => `
          <article>
            <span style="--member-color: ${companyMemberColor(card.id)}">
              ${isWarmPixelSkin() ? renderWarmPixelImage("strategy-book/complete_stamp.png", "skin-tactics-stamp", "", 'loading="lazy"') : ""}
              ${renderCompanyRelationshipAvatar(card, "library")}
            </span>
            <div><b>${escapeHtml(card.name)}</b><small>${escapeHtml(companyGardenKindLabel(companyGardenRelationshipKind(card.relationshipType)))}</small></div>
            <em>攻略完成</em>
          </article>
        `).join("")}
      </div>
      <button class="company-tactics-page-button is-next" type="button" data-company-action="turn-tactics-page" data-direction="1" ${companyGardenTacticsPage >= maxTacticsPage ? "disabled" : ""} aria-label="下一页">
        ${isWarmPixelSkin() ? renderWarmPixelImage("strategy-book/page_right_arrow.png", "skin-tactics-arrow", "", 'loading="lazy"') : "›"}
      </button>
    </div>
  `;
}

function turnCompanyTacticsPage(direction) {
  const cards = loadCompanyRelationshipCards();
  const sceneState = companyGardenSceneState();
  const tacticsCount = cards.filter((card) => sceneState?.targets[card.id]?.inTacticsBook).length;
  const maxTacticsPage = Math.max(0, Math.ceil(tacticsCount / 4) - 1);
  companyGardenTacticsPage = Math.max(0, Math.min(maxTacticsPage, companyGardenTacticsPage + direction));
  renderCompanyGarden();
}

function selectCompanyGardenScene(sceneId) {
  const company = lifeCompanyState.company;
  const scene = COMPANY_GARDEN_SCENES.find((item) => item.id === sceneId);
  if (!company?.garden?.unlocked || !scene) return;
  companyGardenSceneMenuOpen = false;
  companyGardenCharacterPickerOpen = false;
  companyGardenPlantPickerOpen = false;
  companyGardenPendingPlantId = "";
  if (company.garden.sceneId === scene.id) {
    renderCompanyGarden();
    return;
  }
  company.garden.sceneId = scene.id;
  companyGardenTacticsPage = 0;
  company.updatedAt = new Date().toISOString();
  saveLifeCompany();
  renderCompanyGarden();
  showCompanyToast(`花园场景已切换为${scene.name}。`);
}

function toggleCompanyGardenSceneMenu() {
  if (!lifeCompanyState.company?.garden?.unlocked) return;
  companyGardenCharacterPickerOpen = false;
  companyGardenPlantPickerOpen = false;
  companyGardenPendingPlantId = "";
  companyGardenSceneMenuOpen = !companyGardenSceneMenuOpen;
  renderCompanyGarden();
}

function toggleCompanyGardenCharacterPicker() {
  if (!lifeCompanyState.company?.garden?.unlocked) return;
  companyGardenSceneMenuOpen = false;
  companyGardenPlantPickerOpen = false;
  companyGardenPendingPlantId = "";
  companyGardenCharacterPickerOpen = !companyGardenCharacterPickerOpen;
  renderCompanyGarden();
}

function toggleCompanyGardenPlantPicker() {
  const sceneState = companyGardenSceneState();
  if (!lifeCompanyState.company?.garden?.unlocked || !sceneState?.selectedCharacterId) {
    showCompanyToast("请先选择一位花园角色。");
    return;
  }
  if (companyGardenGrowingPlant(sceneState)) {
    showCompanyToast("当前种子还没有开花，开花后才能种下一株植物。");
    return;
  }
  companyGardenSceneMenuOpen = false;
  companyGardenCharacterPickerOpen = false;
  companyGardenPendingPlantId = "";
  companyGardenPlantPickerOpen = !companyGardenPlantPickerOpen;
  renderCompanyGarden();
}

function selectCompanyGardenPlantType(plantId) {
  const sceneState = companyGardenSceneState();
  const option = COMPANY_GARDEN_PLANT_OPTIONS.find((item) => item.id === plantId);
  const characterId = sceneState?.selectedCharacterId;
  if (!option || !characterId) return;
  if (!companyGardenPlantOptions().some((plant) => plant.id === option.id)) {
    companyGardenPlantPickerOpen = false;
    renderCompanyGarden();
    showCompanyToast("这种植物不能种在当前花园里。");
    return;
  }
  if (companyGardenGrowingPlant(sceneState, characterId)) {
    companyGardenPlantPickerOpen = false;
    renderCompanyGarden();
    showCompanyToast("当前种子还没有开花，暂时不能种第二株。");
    return;
  }
  const characterPlantCount = sceneState.placedPlants.filter((plant) => plant.characterId === characterId).length;
  if (characterPlantCount >= COMPANY_GARDEN_PLACEMENT_LIMIT) {
    showCompanyToast("每位攻略对象最多可以在一个花园种植 10 株植物。");
    return;
  }
  companyGardenPlantPickerOpen = false;
  companyGardenPendingPlantId = option.id;
  renderCompanyGarden();
  showCompanyToast(`已选择${option.name}，点击花园中的位置完成种植。`);
}

function placeCompanyGardenPlant(event) {
  const company = lifeCompanyState.company;
  const sceneState = companyGardenSceneState();
  const world = event.target.closest(".company-garden-world");
  const characterId = sceneState?.selectedCharacterId;
  const option = COMPANY_GARDEN_PLANT_OPTIONS.find((item) => item.id === companyGardenPendingPlantId);
  if (!company?.garden?.unlocked || !world || !sceneState || !characterId || !option) return;
  if (!companyGardenPlantOptions().some((plant) => plant.id === option.id)) {
    companyGardenPendingPlantId = "";
    renderCompanyGarden();
    showCompanyToast("这种植物不能种在当前花园里。");
    return;
  }
  if (companyGardenGrowingPlant(sceneState, characterId)) {
    companyGardenPendingPlantId = "";
    renderCompanyGarden();
    showCompanyToast("当前种子还没有开花，暂时不能种第二株。");
    return;
  }
  const characterPlantCount = sceneState.placedPlants.filter((plant) => plant.characterId === characterId).length;
  if (characterPlantCount >= COMPANY_GARDEN_PLACEMENT_LIMIT) {
    companyGardenPendingPlantId = "";
    renderCompanyGarden();
    showCompanyToast("当前攻略对象已经种满 10 株植物。");
    return;
  }
  const rect = world.getBoundingClientRect();
  const placementWidth = world.clientWidth || rect.width;
  const placementHeight = world.clientHeight || rect.height;
  if (!placementWidth || !placementHeight) return;
  const localX = event.clientX - rect.left - world.clientLeft;
  const localY = event.clientY - rect.top - world.clientTop;
  sceneState.placedPlants.push({
    id: createId("garden-plant"),
    variantId: option.id,
    characterId,
    x: Math.round(clampNumber((localX / placementWidth) * 100, 5, 95, 50) * 10) / 10,
    y: Math.round(clampNumber((localY / placementHeight) * 100, 34, 96, 78) * 10) / 10,
    createdAt: new Date().toISOString(),
  });
  companyGardenPendingPlantId = "";
  company.updatedAt = new Date().toISOString();
  saveLifeCompany();
  renderCompanyGarden();
  showCompanyToast(`${option.name}已经种进花园。`);
}

function cancelCompanyGardenPlantPlacement() {
  companyGardenPendingPlantId = "";
  renderCompanyGarden();
}

function startCompanyGardenCharacterLongPress(event) {
  if (event.button !== undefined && event.button !== 0) return;
  const character = event.target.closest(".company-garden-character[data-garden-character-id]");
  if (!character) return;
  cancelCompanyGardenCharacterLongPress();
  companyGardenCharacterLongPressStart = {
    characterId: character.dataset.gardenCharacterId || "",
    pointerId: event.pointerId,
    x: event.clientX,
    y: event.clientY,
  };
  companyGardenCharacterLongPressTimer = window.setTimeout(() => {
    const characterId = companyGardenCharacterLongPressStart?.characterId;
    companyGardenCharacterLongPressTimer = null;
    companyGardenCharacterLongPressStart = null;
    if (!characterId) return;
    companyGardenCharacterSuppressClickUntil = Date.now() + 900;
    removeCompanyGardenCharacter(characterId);
  }, COMPANY_LONG_PRESS_MS);
}

function moveCompanyGardenCharacterLongPress(event) {
  const start = companyGardenCharacterLongPressStart;
  if (!start || event.pointerId !== start.pointerId) return;
  if (Math.abs(event.clientX - start.x) > 8 || Math.abs(event.clientY - start.y) > 8) {
    cancelCompanyGardenCharacterLongPress();
  }
}

function cancelCompanyGardenCharacterLongPress() {
  if (companyGardenCharacterLongPressTimer) window.clearTimeout(companyGardenCharacterLongPressTimer);
  companyGardenCharacterLongPressTimer = null;
  companyGardenCharacterLongPressStart = null;
}

function preventCompanyGardenCharacterContextMenu(event) {
  if (event.target.closest(".company-garden-character")) event.preventDefault();
}

function removeCompanyGardenCharacter(characterId) {
  const company = lifeCompanyState.company;
  const sceneState = companyGardenSceneState();
  if (!company?.garden?.unlocked || !sceneState || sceneState.selectedCharacterId !== characterId) return;
  const card = loadCompanyRelationshipCards().find((item) => item.id === characterId);
  const target = sceneState.targets[characterId];
  const scene = COMPANY_GARDEN_SCENES.find((item) => item.id === company.garden.sceneId);
  const clearsProgress = Boolean(target && !target.completed);
  const confirmed = window.confirm(
    `确定将${card?.name || "当前角色"}移出${scene?.name || "当前花园"}吗？\n\n${clearsProgress
      ? "该角色在这个花园内的植物、成长值和事件记录会一并删除。"
      : "已完成的攻略记录和战术册收藏会继续保留。"}`,
  );
  if (!confirmed) return;
  if (clearsProgress) delete sceneState.targets[characterId];
  if (clearsProgress) sceneState.placedPlants = sceneState.placedPlants.filter((plant) => plant.characterId !== characterId);
  sceneState.selectedCharacterId = "";
  companyGardenCharacterPickerOpen = false;
  company.updatedAt = new Date().toISOString();
  saveLifeCompany();
  renderCompanyGarden();
  showCompanyToast(`${card?.name || "角色"}已移出${scene?.name || "当前花园"}。`);
}

function selectCompanyGardenCharacter(characterId) {
  const company = lifeCompanyState.company;
  const exists = loadCompanyRelationshipCards().some((card) => card.id === characterId);
  if (!company?.garden?.unlocked || !exists) return;
  const sceneState = companyGardenSceneState();
  const activeCharacterId = sceneState.selectedCharacterId;
  const activeTarget = activeCharacterId ? sceneState.targets[activeCharacterId] : null;
  if (activeCharacterId && activeCharacterId !== characterId && activeTarget && !activeTarget.completed) {
    showCompanyToast("请先完成或放弃当前攻略，再放入新的角色。");
    return;
  }
  if (activeCharacterId === characterId) {
    companyGardenCharacterPickerOpen = false;
    renderCompanyGarden();
    return;
  }
  sceneState.selectedCharacterId = characterId;
  companyGardenTarget(characterId);
  companyGardenCharacterPickerOpen = false;
  companyGardenPlantPickerOpen = false;
  companyGardenPendingPlantId = "";
  company.updatedAt = new Date().toISOString();
  saveLifeCompany();
  renderCompanyGarden();
}

function abandonCompanyGardenTarget() {
  const company = lifeCompanyState.company;
  const sceneState = companyGardenSceneState();
  const characterId = sceneState?.selectedCharacterId;
  const target = characterId ? sceneState.targets[characterId] : null;
  const card = loadCompanyRelationshipCards().find((item) => item.id === characterId);
  if (!company?.garden?.unlocked || !sceneState || !target || target.completed) return;
  const confirmed = window.confirm(`确定放弃${card?.name || "当前角色"}的攻略吗？\n\n这个花园内该角色的植物、成长值和事件记录会被清除。`);
  if (!confirmed) return;
  delete sceneState.targets[characterId];
  sceneState.placedPlants = sceneState.placedPlants.filter((plant) => plant.characterId !== characterId);
  sceneState.selectedCharacterId = "";
  companyGardenCharacterPickerOpen = false;
  company.updatedAt = new Date().toISOString();
  saveLifeCompany();
  renderCompanyGarden();
  showCompanyToast("已放弃当前攻略，可以放入新的角色了。");
}

function recordCompanyGardenEvent(presetNote = "") {
  const company = lifeCompanyState.company;
  const garden = company?.garden;
  const sceneState = companyGardenSceneState();
  const card = loadCompanyRelationshipCards().find((item) => item.id === sceneState?.selectedCharacterId);
  const target = card ? companyGardenTarget(card.id) : null;
  if (!company || !garden || !card || !target || target.completed) return;
  const input = document.getElementById("companyGardenEventInput");
  const note = String(presetNote || input?.value || "").trim() || "完成一次亲密事件";
  target.events.unshift({ id: createId("garden-event"), note, createdAt: new Date().toISOString() });
  target.events = target.events.slice(0, 30);
  target.intimacyPoints += COMPANY_GARDEN_EVENT_POINTS;
  let grewPlant = false;
  if (target.intimacyPoints >= COMPANY_GARDEN_PLANT_POINTS) {
    target.intimacyPoints = 0;
    target.plantCount = Math.min(COMPANY_GARDEN_TARGET_PLANTS, target.plantCount + 1);
    grewPlant = true;
  }
  target.completed = target.plantCount >= COMPANY_GARDEN_TARGET_PLANTS;
  target.updatedAt = new Date().toISOString();
  company.updatedAt = target.updatedAt;
  saveLifeCompany();
  renderCompanyGarden();
  showCompanyToast(target.completed ? `${card.name}的攻略已经完成。` : grewPlant ? "一株新的关系植物长成了。" : "亲密事件已记录，成长值 +10。 ");
}

function addCompanyGardenTargetToTacticsBook() {
  const company = lifeCompanyState.company;
  const garden = company?.garden;
  const sceneState = companyGardenSceneState();
  const target = sceneState ? sceneState.targets[sceneState.selectedCharacterId] : null;
  if (!company || !target?.completed) return;
  target.inTacticsBook = true;
  target.updatedAt = new Date().toISOString();
  company.updatedAt = target.updatedAt;
  saveLifeCompany();
  renderCompanyGarden();
  showCompanyToast("角色已经加入已攻略战术册。");
}

function openCompanyDepartmentRoom(departmentId) {
  const department = lifeCompanyState.company?.departments.find((item) => item.id === departmentId);
  if (!department?.exploration?.unlocked || department.exploration.portalCell === null) return;
  openCompanyRoomDepartmentId = department.id;
  renderCompanyDepartmentRoom();
  showDialog(companyDom.companyRoomDialog);
}

function closeCompanyDepartmentRoom() {
  openCompanyRoomDepartmentId = "";
  closeDialog(companyDom.companyRoomDialog);
}

function renderCompanyDepartmentRoom() {
  const company = lifeCompanyState.company;
  const department = company?.departments.find((item) => item.id === openCompanyRoomDepartmentId);
  if (!company || !department) return;
  const relationshipCards = loadCompanyRelationshipCards();
  const validMemberIds = new Set(relationshipCards.map((card) => card.id));
  department.room.memberIds = department.room.memberIds.filter((id) => validMemberIds.has(id)).slice(0, COMPANY_ROOM_MEMBER_LIMIT);
  const assignedMembers = department.room.memberIds
    .map((id) => relationshipCards.find((card) => card.id === id))
    .filter(Boolean);
  const departmentIndex = company.departments.findIndex((item) => item.id === department.id);
  const scene = companyDepartmentScene(department);

  setText(companyDom.companyRoomTitle, department.name);
  setText(companyDom.companyRoomRule, departmentIndex === 0
    ? `每日任务卡上限 ${department.taskCardLimit}`
    : `部门任务卡上限 ${department.taskCardLimit}`);
  setText(companyDom.companyRoomMemberCount, `${assignedMembers.length} / ${COMPANY_ROOM_MEMBER_LIMIT}`);
  companyDom.companyPixelRoom?.classList.toggle("has-warm-pixel-office", isWarmPixelSkin());
  companyDom.companyPixelRoom?.classList.add("has-wide-office-scene");
  companyDom.companyPixelRoom?.classList.toggle("is-empty-office", !assignedMembers.length);

  companyDom.companyPixelRoom.innerHTML = `
    <div class="company-office-pan" data-company-scene-pan tabindex="0" aria-label="${escapeHtml(department.name)}办公室场景，可左右移动">
      <div class="company-office-scene" style="--scene-aspect:${scene.aspectRatio};">
        <img class="company-office-scene-image pixel-art" src="${escapeHtml(scene.src)}" alt="${escapeHtml(scene.name)}" draggable="false" />
        ${assignedMembers.map((member, index) => renderPixelOfficeMember(member, department, index)).join("")}
        ${assignedMembers.length ? "" : `<p class="pixel-room-empty">从人际关系卡选择成员<br />加入后可以拖动位置</p>`}
      </div>
    </div>
  `;

  companyDom.companyRoomMemberList.innerHTML = renderCompanyRoomMemberOptions(department, relationshipCards);
}

function renderPixelOfficeMember(member, department, index) {
  const position = companyOfficeMemberPosition(department, member.id, index);
  return `
    <div class="pixel-office-member" data-member-id="${escapeHtml(member.id)}" style="--member-color: ${companyMemberColor(member.id)};left:${position.x}%;top:${position.y}%;" aria-label="拖动${escapeHtml(member.name)}调整办公室位置">
      ${renderCompanyRelationshipAvatar(member, "map")}
      <b>${escapeHtml(member.name)}</b>
    </div>
  `;
}

function companyOfficeMemberPosition(department, memberId, index = 0) {
  const defaults = [
    { x: 27, y: 88 },
    { x: 51, y: 88 },
    { x: 75, y: 88 },
    { x: 54, y: 63 },
  ];
  const fallback = defaults[index] || defaults[0];
  const stored = department?.room?.memberPositions?.[memberId];
  return {
    x: clampNumber(stored?.x, 8, 92, fallback.x),
    y: clampNumber(stored?.y, 28, 94, fallback.y),
  };
}

function startCompanyOfficeMemberDrag(event) {
  if (event.button !== undefined && event.button !== 0) return;
  const member = event.target.closest(".pixel-office-member[data-member-id]");
  const stage = member?.closest(".company-office-scene") || member?.closest(".company-pixel-room");
  if (!member || !stage || !openCompanyRoomDepartmentId) return;
  companyOfficeMemberDrag = {
    member,
    stage,
    memberId: member.dataset.memberId || "",
    pointerId: event.pointerId,
    moved: false,
    startX: event.clientX,
    startY: event.clientY,
    x: Number.parseFloat(member.style.left) || 50,
    y: Number.parseFloat(member.style.top) || 76,
  };
  member.setPointerCapture?.(event.pointerId);
  member.classList.add("is-dragging");
  event.preventDefault();
}

function startCompanyScenePan(event) {
  if (event.button !== undefined && event.button !== 0) return;
  if (event.target.closest("button, a, input, select, textarea, .pixel-office-member, .company-garden-character")) return;
  const scroller = event.target.closest("[data-company-scene-pan]");
  if (!scroller || scroller.scrollWidth <= scroller.clientWidth + 1) return;
  companyScenePan = {
    scroller,
    pointerId: event.pointerId,
    startX: event.clientX,
    startScrollLeft: scroller.scrollLeft,
    moved: false,
  };
  scroller.setPointerCapture?.(event.pointerId);
  scroller.classList.add("is-panning");
  event.preventDefault();
}

function moveCompanyScenePan(event) {
  if (!companyScenePan || event.pointerId !== companyScenePan.pointerId) return;
  const deltaX = event.clientX - companyScenePan.startX;
  companyScenePan.scroller.scrollLeft = companyScenePan.startScrollLeft - deltaX;
  if (Math.abs(deltaX) > 3) companyScenePan.moved = true;
  event.preventDefault();
}

function endCompanyScenePan(event) {
  if (!companyScenePan || event.pointerId !== companyScenePan.pointerId) return;
  companyScenePan.scroller.releasePointerCapture?.(event.pointerId);
  companyScenePan.scroller.classList.remove("is-panning");
  companyScenePan = null;
}

function handleCompanyScenePanKeydown(event) {
  const scroller = event.target.closest?.("[data-company-scene-pan]");
  if (!scroller || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return;
  event.preventDefault();
  scroller.scrollLeft += event.key === "ArrowRight" ? 96 : -96;
}

function moveCompanyOfficeMemberDrag(event) {
  if (!companyOfficeMemberDrag || event.pointerId !== companyOfficeMemberDrag.pointerId) return;
  const drag = companyOfficeMemberDrag;
  const rect = drag.stage.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  drag.x = clampNumber(((event.clientX - rect.left) / rect.width) * 100, 8, 92, drag.x);
  drag.y = clampNumber(((event.clientY - rect.top) / rect.height) * 100, 28, 94, drag.y);
  drag.member.style.left = `${drag.x}%`;
  drag.member.style.top = `${drag.y}%`;
  if (Math.abs(event.clientX - drag.startX) > 3 || Math.abs(event.clientY - drag.startY) > 3) drag.moved = true;
  event.preventDefault();
}

function endCompanyOfficeMemberDrag(event) {
  if (!companyOfficeMemberDrag || event.pointerId !== companyOfficeMemberDrag.pointerId) return;
  const drag = companyOfficeMemberDrag;
  drag.member.releasePointerCapture?.(event.pointerId);
  drag.member.classList.remove("is-dragging");
  companyOfficeMemberDrag = null;
  if (!drag.moved) return;
  const department = lifeCompanyState.company?.departments.find((item) => item.id === openCompanyRoomDepartmentId);
  if (!department || !drag.memberId) return;
  department.room.memberPositions ||= {};
  department.room.memberPositions[drag.memberId] = {
    x: Math.round(drag.x * 10) / 10,
    y: Math.round(drag.y * 10) / 10,
  };
  lifeCompanyState.company.updatedAt = new Date().toISOString();
  saveLifeCompany();
  showCompanyToast("办公室位置已保存。");
}

function companyMemberInitial(name) {
  return Array.from(String(name || "人"))[0] || "人";
}

function companyMemberColor(id) {
  const colors = ["#ff7aa8", "#6d8cff", "#38b98a", "#f3aa3d", "#9a6ce0", "#e96b5c"];
  const seed = Array.from(String(id)).reduce((sum, character) => sum + character.charCodeAt(0), 0);
  return colors[seed % colors.length];
}

function toggleCompanyRoomMember(memberId) {
  const department = lifeCompanyState.company?.departments.find((item) => item.id === openCompanyRoomDepartmentId);
  if (!department || !memberId) return;
  if (department.room.memberIds.includes(memberId)) removeCompanyRoomMember(memberId);
  else addCompanyRoomMember(memberId);
}

function addCompanyRoomMember(memberId) {
  const department = lifeCompanyState.company?.departments.find((item) => item.id === openCompanyRoomDepartmentId);
  if (!department || !memberId || department.room.memberIds.includes(memberId)) return;
  if (department.room.memberIds.length >= COMPANY_ROOM_MEMBER_LIMIT) {
    showCompanyToast(`每个部门最多安排 ${COMPANY_ROOM_MEMBER_LIMIT} 人。`);
    return;
  }
  department.room.memberIds.push(memberId);
  persistCompanyRoomMemberChange();
  showCompanyToast("角色已加入当前部门。");
}

function removeCompanyRoomMember(memberId) {
  const department = lifeCompanyState.company?.departments.find((item) => item.id === openCompanyRoomDepartmentId);
  if (!department || !memberId || !department.room.memberIds.includes(memberId)) return;
  department.room.memberIds = department.room.memberIds.filter((id) => id !== memberId);
  if (department.room.memberPositions) delete department.room.memberPositions[memberId];
  persistCompanyRoomMemberChange();
  showCompanyToast("角色已移出当前部门。");
}

function persistCompanyRoomMemberChange() {
  lifeCompanyState.company.updatedAt = new Date().toISOString();
  saveLifeCompany();
  if (companyDom.companyRoomDialog?.open) renderCompanyDepartmentRoom();
  renderCompanyExploration();
}

function editOpenRoomDepartment() {
  const departmentId = openCompanyRoomDepartmentId;
  closeCompanyDepartmentRoom();
  openCompanyDepartmentForm(departmentId);
}

function openProjectForRoomDepartment() {
  const department = lifeCompanyState.company?.departments.find((item) => item.id === openCompanyRoomDepartmentId);
  if (!department) return;
  closeCompanyDepartmentRoom();
  openCompanyProjectForm();
  if (companyDom.companyProjectDepartmentInput) companyDom.companyProjectDepartmentInput.value = department.name;
}

function renderCompanyOverview() {
  const company = lifeCompanyState.company;
  const type = companyTypeById(company.type);
  const progress = calculateCompanyProgress(company);
  const remaining = daysUntil(company.mainGoal.deadline);
  const goalMeta = company.mainGoal.deadline
    ? `${formatDateShort(company.mainGoal.deadline)} · ${remaining >= 0 ? `剩余 ${remaining} 天` : `已超期 ${Math.abs(remaining)} 天`}`
    : "先设置截止日期";

  setText(companyDom.companyTypeLabel, type?.name || "人生公司");
  setText(companyDom.companyName, company.name);
  setText(companyDom.companyVision, company.vision || "这家公司还没有写愿景。");
  setText(companyDom.companyMainGoal, company.mainGoal.title || "未设置大目标");
  setText(companyDom.companyMainGoalMeta, goalMeta);
  setText(companyDom.companyProgress, `${progress}%`);
  setText(companyDom.companyProjectCount, String(company.projects.length));
  setText(companyDom.companyTaskCount, String(lifeCompanyState.tasks.length));
  if (companyDom.companyMainGoalMeter) companyDom.companyMainGoalMeter.style.width = `${progress}%`;
}

function renderCompanyEconomy() {
  const company = lifeCompanyState.company;
  if (!company?.economy) return;
  updateCompanyAssetValue();
  const economy = company.economy;
  const level = currentCompanyLevel();
  const progress = calculateCompanyLevelProgress();
  const totals = todayEconomyTotals();
  const nextLevel = nextCompanyLevel();
  const canUpgrade = canUpgradeCompany();
  setText(companyDom.companyCoinBalance, formatCompanyCoins(economy.companyCoins));
  setText(companyDom.companyAssetValue, formatCompanyCoins(economy.assetValue));
  setText(companyDom.companyLevelLabel, `Lv.${level.level} ${level.name}`);
  setText(companyDom.companyExpLabel, nextLevel ? `经验值 ${economy.companyExp} / ${nextLevel.requiredExp}` : `经验值 ${economy.companyExp} · 已满级`);
  setText(companyDom.companyNextLevelCost, nextLevel ? companyUpgradeRequirementText(nextLevel) : "已经是最高等级");
  setText(companyDom.companyTodayIncome, `今日收入 +${formatCompanyCoins(totals.income)}`);
  setText(companyDom.companyTodaySpend, `今日支出 -${formatCompanyCoins(totals.spend)}`);
  if (companyDom.companyExpMeter) companyDom.companyExpMeter.style.width = `${progress.percent}%`;
  const upgradeButton = document.querySelector("[data-company-action='upgrade-company']");
  if (upgradeButton) {
    upgradeButton.disabled = !nextLevel || !canUpgrade;
    upgradeButton.textContent = nextLevel ? "升级公司" : "已满级";
  }
  renderCompanyTransactions();
}

function renderCompanyTransactions() {
  const transactions = lifeCompanyState.company?.economy?.transactions || [];
  if (!companyDom.companyTransactionList) return;
  if (!transactions.length) {
    companyDom.companyTransactionList.innerHTML = `<li class="company-transaction-empty">还没有交易记录。完成任务后这里会开始记账。</li>`;
    return;
  }
  companyDom.companyTransactionList.innerHTML = transactions.slice(0, 12).map((transaction) => {
    const sign = transaction.type === "spend" ? "-" : transaction.type === "earn" ? "+" : "";
    const typeClass = transaction.type === "spend" ? "is-spend" : transaction.type === "earn" ? "is-earn" : "is-adjust";
    return `
      <li class="${typeClass}">
        <span>
          <b>${escapeHtml(transaction.title || economySourceLabel(transaction.source))}</b>
          <small>${escapeHtml(formatTransactionTime(transaction.createdAt))}${transaction.note ? ` · ${escapeHtml(transaction.note)}` : ""}</small>
        </span>
        <strong>${sign}${formatCompanyCoins(transaction.amount)}</strong>
      </li>
    `;
  }).join("");
}

function renderCompanyDepartments() {
  const company = lifeCompanyState.company;
  companyDom.companyDepartmentGrid.innerHTML = company.departments.map((department) => {
    const statusLabel = DEPARTMENT_STATUS_LABELS[department.status] || "正常";
    const projectCount = displayDepartmentProjectCount(department);
    const taskCount = displayDepartmentTaskCount(department);
    const upgradeCost = departmentUpgradeCost(department);
    const canUpgrade = Boolean(upgradeCost) && company.economy.companyCoins >= upgradeCost;
    return `
      <article class="company-department-card" data-department-id="${escapeHtml(department.id)}" tabindex="0" role="button" aria-label="长按编辑 ${escapeHtml(department.name)}">
        <div class="company-department-topline">
          <span>${escapeHtml(statusLabel)}</span>
          <em>Lv.${department.level}</em>
        </div>
        <strong>${escapeHtml(department.name)}</strong>
        <i><b style="width: ${department.progress}%"></b></i>
        <small>${projectCount} 个项目 · ${taskCount} 张任务</small>
        <button type="button" data-company-action="upgrade-department" data-department-id="${escapeHtml(department.id)}" ${canUpgrade ? "" : "disabled"}>${upgradeCost ? `升级 ${formatCompanyCoins(upgradeCost)}` : "已满级"}</button>
      </article>
    `;
  }).join("");
}

function renderCompanyProjects() {
  const company = lifeCompanyState.company;
  if (!company.projects.length) {
    const type = companyTypeById(company.type);
    companyDom.companyProjectList.innerHTML = `
      <div class="company-empty-list">
        <strong>还没有小项目</strong>
        <p>可以从 ${escapeHtml((type?.projectTemplates || ["一个小项目"])[0])} 开始。</p>
      </div>
    `;
    return;
  }

  companyDom.companyProjectList.innerHTML = company.projects.map((project) => {
    const remaining = daysUntil(project.deadline);
    const deadlineText = project.deadline
      ? `${formatDateShort(project.startDate) || "未设开始"} - ${formatDateShort(project.deadline)}`
      : "未设置时间";
    const riskClass = project.status === "overdue" || remaining < 0 ? "is-risk" : "";
    return `
      <article class="company-project-card ${riskClass}">
        <div>
          <span>${escapeHtml(project.departmentName || "未分配部门")}</span>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description || "这个小项目还没有说明。")}</p>
        </div>
        <div class="company-project-meta">
          <small>${escapeHtml(deadlineText)}</small>
          <strong>${escapeHtml(PROJECT_STATUS_LABELS[project.status] || "推进中")} · ${project.progress}%</strong>
        </div>
        <i><b style="width: ${project.progress}%"></b></i>
        <div class="company-project-actions">
          <button type="button" data-company-action="generate-project-task" data-project-id="${escapeHtml(project.id)}">生成任务</button>
          <button type="button" data-company-action="edit-project" data-project-id="${escapeHtml(project.id)}">编辑</button>
          <button type="button" data-company-action="delete-project" data-project-id="${escapeHtml(project.id)}">删除</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderCompanyTasks() {
  const tasks = lifeCompanyState.tasks;
  if (!tasks.length) {
    companyDom.companyTaskList.innerHTML = `
      <div class="company-empty-list">
        <strong>还没有公司任务卡</strong>
        <p>从小项目里点“生成任务”，这里会出现今天要执行的公司工作。</p>
      </div>
    `;
    return;
  }

  companyDom.companyTaskList.innerHTML = tasks.map((task) => {
    const company = lifeCompanyState.company;
    return `
      <article class="company-task-card ${task.done ? "is-done" : ""}">
        <button type="button" data-company-action="toggle-company-task" data-task-id="${escapeHtml(task.id)}" aria-label="切换任务完成状态">${task.done ? "✓" : ""}</button>
        <div>
          <strong>${escapeHtml(task.title)}</strong>
          <small>来自：${escapeHtml(company?.name || "人生公司")} · ${escapeHtml(task.departmentName || "未分配部门")} · ${formatCompanyTaskMinutes(task.durationMinutes)}</small>
          <em class="company-task-coin-value">${formatCompanyCoins(companyTaskCoinReward(task))}</em>
        </div>
        <button type="button" data-company-action="delete-company-task" data-task-id="${escapeHtml(task.id)}" aria-label="删除任务">×</button>
      </article>
    `;
  }).join("");
}

function renderRecommendedSkillStocks() {
  const type = companyTypeById(lifeCompanyState.company.type);
  const stocks = lifeCompanyState.company.linkedSkillStocks?.length
    ? lifeCompanyState.company.linkedSkillStocks
    : type?.recommendedSkillStocks || [];
  companyDom.companyStockList.innerHTML = stocks.map((stock) => `<span>${escapeHtml(stock)}</span>`).join("");
}

function renderCompanyReport() {
  const report = generateCompanyDailyReport();
  companyDom.companyReportBody.innerHTML = `
    <strong>${escapeHtml(report.title)}</strong>
    <ul>
      ${report.lines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
    </ul>
    <p>${escapeHtml(report.advice)}</p>
  `;
}

function renderCompanyTypeOptions() {
  if (!companyDom.companyTypeInput) return;
  companyDom.companyTypeInput.innerHTML = COMPANY_TYPES.map((type) => `
    <option value="${escapeHtml(type.id)}">${escapeHtml(type.name)}</option>
  `).join("");
}

function openCompanyForm(mode = "create") {
  editingCompanyMode = mode;
  const company = lifeCompanyState.company;
  const type = companyTypeById(company?.type) || COMPANY_TYPES[0];
  setText(companyDom.companyFormPill, mode === "edit" ? "编辑人生公司" : "创建人生公司");
  setText(companyDom.companyFormTitle, mode === "edit" ? "调整这家公司的人生方向" : "你正在经营哪种人生公司？");
  const moneyNote = companyDom.companyStartingMoneyNote;
  if (moneyNote) moneyNote.hidden = mode === "edit";
  companyDom.companyNameInput.value = mode === "edit" && company ? company.name : defaultCompanyName(type);
  companyDom.companyTypeInput.value = mode === "edit" && company ? company.type : type.id;
  companyDom.companyVisionInput.value = mode === "edit" && company ? company.vision : "";
  companyDom.companyMainGoalInput.value = mode === "edit" && company ? company.mainGoal.title : defaultMainGoal(type);
  companyDom.companyDeadlineInput.value = mode === "edit" && company ? company.mainGoal.deadline : "";
  showDialog(companyDom.companyFormDialog);
}

function closeCompanyForm() {
  closeDialog(companyDom.companyFormDialog);
}

function addCompanyDepartment() {
  const company = lifeCompanyState.company;
  if (!company) return;
  if (company.departments.length >= COMPANY_DEPARTMENT_LIMIT) {
    showCompanyToast(`部门最多 ${COMPANY_DEPARTMENT_LIMIT} 个。`);
    return;
  }
  const departmentId = createId("dept");
  const department = {
    id: departmentId,
    name: `新部门 ${company.departments.length + 1}`,
    status: "normal",
    progress: 0,
    level: 1,
    exp: 0,
    projectIds: [],
    taskIds: [],
    manualProjectCount: 0,
    manualTaskCount: 0,
    taskCardLimit: COMPANY_TASK_LIMIT,
    exploration: {
      unlocked: true,
      targetCell: companyExplorationTargetCell(departmentId),
      portalCell: null,
      revealedCells: [],
      completed: false,
      completionPromptShown: false,
    },
    room: {
      sceneId: normalizeCompanyDepartmentSceneId("", company.departments.length),
      memberIds: [],
      memberPositions: {},
    },
  };
  company.departments.push(department);
  company.updatedAt = new Date().toISOString();
  renderLifeCompanyPage();
  openCompanyDepartmentForm(department.id);
  showCompanyToast("已新增一个部门。");
}

function openCompanyDepartmentForm(departmentId = "") {
  const company = lifeCompanyState.company;
  const department = company?.departments.find((item) => item.id === departmentId);
  if (!department) return;
  companyDepartmentDeleteArmed = false;
  setText(companyDom.companyDepartmentFormPill, "编辑部门");
  companyDom.companyDepartmentIdInput.value = department.id;
  companyDom.companyDepartmentNameInput.value = department.name;
  companyDom.companyDepartmentProjectCountInput.value = displayDepartmentProjectCount(department);
  companyDom.companyDepartmentTaskCountInput.value = displayDepartmentTaskCount(department);
  companyDom.companyDepartmentStatusInput.value = department.status || "normal";
  renderCompanyDepartmentSceneOptions(department.room.sceneId);
  renderDepartmentEconomyState(department);
  const deleteButton = companyDom.companyDepartmentForm?.querySelector("[data-company-action='delete-department']");
  if (deleteButton) deleteButton.textContent = "删除部门";
  showDialog(companyDom.companyDepartmentDialog);
}

function renderCompanyDepartmentSceneOptions(selectedSceneId) {
  if (!companyDom.companyDepartmentSceneOptions) return;
  const selected = normalizeCompanyDepartmentSceneId(selectedSceneId, 0);
  companyDom.companyDepartmentSceneOptions.innerHTML = COMPANY_DEPARTMENT_SCENES.map((scene) => {
    const owned = companyOwnsDepartmentScene(scene.id);
    const canAfford = (lifeCompanyState.company?.economy?.companyCoins || 0) >= scene.price;
    return `
      <article class="company-department-scene-option ${owned ? "is-owned" : "is-locked"}">
        <label>
          <input type="radio" name="departmentScene" value="${escapeHtml(scene.id)}" ${scene.id === selected && owned ? "checked" : ""} ${owned ? "" : "disabled"} />
          <span>
            <img src="${escapeHtml(scene.src)}" alt="" loading="lazy" draggable="false" />
            <b>${escapeHtml(scene.name)}</b>
            <small>${owned ? (scene.price ? "已购买" : "免费") : formatCompanyCoins(scene.price)}</small>
          </span>
        </label>
        ${owned ? "" : `<button type="button" data-company-action="purchase-company-scene" data-scene-id="${escapeHtml(scene.id)}" ${canAfford ? "" : "disabled"}>${canAfford ? `购买 ${formatCompanyCoins(scene.price)}` : `需要 ${formatCompanyCoins(scene.price)}`}</button>`}
      </article>
    `;
  }).join("");
}

function purchaseCompanyDepartmentScene(sceneId) {
  const company = lifeCompanyState.company;
  const scene = COMPANY_DEPARTMENT_SCENES.find((item) => item.id === sceneId);
  if (!company || !scene?.price || companyOwnsDepartmentScene(scene.id)) return;
  const spent = spendCompanyCoins(scene.price, "decoration", {
    title: `购买${scene.name}`,
    note: "部门办公室场景",
  });
  if (!spent) {
    showCompanyToast(`公司金币不足，需要 ${formatCompanyCoins(scene.price)}。`);
    return;
  }
  company.ownedSceneIds = normalizeCompanyOwnedSceneIds([...(company.ownedSceneIds || []), scene.id]);
  company.updatedAt = new Date().toISOString();
  saveLifeCompany();
  renderCompanyDepartmentSceneOptions(scene.id);
  renderCompanyEconomy();
  showCompanyToast(`${scene.name}已购买，可以用于所有部门。`);
}

function renderDepartmentEconomyState(department) {
  const cost = departmentUpgradeCost(department);
  setText(companyDom.companyDepartmentLevelLabel, `Lv.${department.level} · ${cost ? `升级需要 ${formatCompanyCoins(cost)}` : "已满级"}`);
  const button = companyDom.companyDepartmentForm?.querySelector("[data-company-action='upgrade-department']");
  if (!button) return;
  button.disabled = !cost || !lifeCompanyState.company?.economy || lifeCompanyState.company.economy.companyCoins < cost;
  button.textContent = cost ? `升级部门 ${formatCompanyCoins(cost)}` : "部门已满级";
}

function closeCompanyDepartmentForm() {
  closeDialog(companyDom.companyDepartmentDialog);
}

function saveCompanyDepartmentFromForm() {
  const company = lifeCompanyState.company;
  if (!company) return;
  const departmentId = companyDom.companyDepartmentIdInput.value;
  const department = company.departments.find((item) => item.id === departmentId);
  if (!department) return;
  const oldName = department.name;
  const nextName = companyDom.companyDepartmentNameInput.value.trim();
  if (!nextName) {
    showCompanyToast("先写一个部门名字。");
    return;
  }

  department.name = nextName;
  department.status = companyDom.companyDepartmentStatusInput.value || "normal";
  department.room.sceneId = normalizeCompanyDepartmentSceneId(
    companyDom.companyDepartmentSceneOptions?.querySelector("input[name='departmentScene']:checked")?.value,
    company.departments.indexOf(department),
  );
  if (!companyOwnsDepartmentScene(department.room.sceneId)) {
    showCompanyToast("请先购买这个场景。 ");
    return;
  }
  department.statusLocked = true;
  department.manualProjectCount = clampNumber(companyDom.companyDepartmentProjectCountInput.value, 0, 99, 0);
  department.manualTaskCount = clampNumber(companyDom.companyDepartmentTaskCountInput.value, 0, 99, 0);
  department.updatedAt = new Date().toISOString();

  if (oldName !== nextName) {
    company.projects.forEach((project) => {
      if (project.departmentName === oldName) project.departmentName = nextName;
    });
    lifeCompanyState.tasks.forEach((task) => {
      if (task.departmentName === oldName) task.departmentName = nextName;
    });
  }

  company.updatedAt = new Date().toISOString();
  closeCompanyDepartmentForm();
  renderLifeCompanyPage();
  showCompanyToast("部门卡片已更新。");
}

function deleteCompanyDepartment() {
  const company = lifeCompanyState.company;
  if (!company) return;
  const departmentId = companyDom.companyDepartmentIdInput.value;
  const department = company.departments.find((item) => item.id === departmentId);
  if (!department) return;

  if (!companyDepartmentDeleteArmed) {
    companyDepartmentDeleteArmed = true;
    const deleteButton = companyDom.companyDepartmentForm?.querySelector("[data-company-action='delete-department']");
    if (deleteButton) deleteButton.textContent = "再点一次确认删除";
    showCompanyToast("再点一次删除按钮，才会真的删除。");
    return;
  }

  company.departments = company.departments.filter((item) => item.id !== departmentId);
  if (company.activeDepartmentId === departmentId) {
    company.activeDepartmentId = company.departments.find((item) => item.exploration?.unlocked)?.id || company.departments[0]?.id || "";
  }
  company.projects.forEach((project) => {
    if (project.departmentName === department.name) project.departmentName = "";
  });
  lifeCompanyState.tasks.forEach((task) => {
    if (task.departmentName === department.name) task.departmentName = "";
  });
  company.updatedAt = new Date().toISOString();
  closeCompanyDepartmentForm();
  renderLifeCompanyPage();
  showCompanyToast(`${department.name} 已删除。`);
}

function saveCompanyFromForm() {
  const type = companyTypeById(companyDom.companyTypeInput.value) || COMPANY_TYPES[0];
  const now = new Date().toISOString();
  const existing = editingCompanyMode === "edit" ? lifeCompanyState.company : null;
  const companyName = companyDom.companyNameInput.value.trim() || defaultCompanyName(type);
  if (!existing && !confirmCompanyStartingStake(companyName)) return;
  const nextDepartments = existing && existing.type === type.id ? existing.departments : initializeCompanyDepartments(type.id);
  lifeCompanyState.company = {
    id: existing?.id || createId("company"),
    name: companyName,
    type: type.id,
    vision: companyDom.companyVisionInput.value.trim(),
    mainGoal: {
      title: companyDom.companyMainGoalInput.value.trim(),
      deadline: companyDom.companyDeadlineInput.value,
      status: "active",
      progress: existing?.mainGoal?.progress || 0,
    },
    departments: nextDepartments,
    activeDepartmentId: existing && existing.type === type.id
      ? existing.activeDepartmentId
      : nextDepartments[0]?.id || "",
    projects: existing ? existing.projects : [],
    linkedSkillStocks: type.recommendedSkillStocks,
    ownedSceneIds: existing?.ownedSceneIds || [],
    garden: existing?.garden || normalizeCompanyGarden(null),
    economy: existing?.economy || normalizeCompanyEconomy(null),
    createdAt: existing?.createdAt || now,
    updatedAt: now,
  };
  lifeCompanyState.updatedAt = now;
  closeCompanyForm();
  syncCompanyNameToGameTitle();
  renderLifeCompanyPage();
  showCompanyToast(editingCompanyMode === "edit" ? "公司资料已更新。" : "人生公司创建好了。");
}

function confirmCompanyStartingStake(companyName = "人生公司") {
  return window.confirm(`默认个人金币：1000\n建立「${companyName}」需要投入 ${COMPANY_STARTING_STAKE} 金币作为启动资金。\n\n确认创建公司吗？`);
}

function openCompanyProjectForm(projectId = "") {
  if (!lifeCompanyState.company) return;
  if (!lifeCompanyState.company.departments.length) {
    showCompanyToast("先增加一个部门，再创建小项目。");
    return;
  }
  const project = lifeCompanyState.company.projects.find((item) => item.id === projectId);
  setText(companyDom.companyProjectFormPill, project ? "编辑小项目" : "新增小项目");
  setText(companyDom.companyProjectFormTitle, project ? "调整这个小项目" : "这家公司下一步要交付什么？");
  companyDom.companyProjectIdInput.value = project?.id || "";
  companyDom.companyProjectTitleInput.value = project?.title || "";
  companyDom.companyProjectDescriptionInput.value = project?.description || "";
  renderDepartmentOptions(project?.departmentName);
  companyDom.companyProjectStartInput.value = project?.startDate || dateKey(new Date());
  companyDom.companyProjectDeadlineInput.value = project?.deadline || "";
  companyDom.companyProjectProgressInput.value = project?.progress || 0;
  setText(companyDom.companyProjectProgressValue, `${project?.progress || 0}%`);
  companyDom.companyProjectStatusInput.value = project?.status || "active";
  showDialog(companyDom.companyProjectDialog);
}

function closeCompanyProjectForm() {
  closeDialog(companyDom.companyProjectDialog);
}

function renderDepartmentOptions(selectedName = "") {
  const departments = lifeCompanyState.company?.departments || [];
  companyDom.companyProjectDepartmentInput.innerHTML = departments.map((department) => `
    <option value="${escapeHtml(department.name)}">${escapeHtml(department.name)}</option>
  `).join("");
  if (selectedName) companyDom.companyProjectDepartmentInput.value = selectedName;
}

function startCompanyDepartmentLongPress(event) {
  if (event.target.closest("button")) return;
  const card = event.target.closest(".company-department-card[data-department-id]");
  if (!card) return;
  companyDepartmentLongPressId = card.dataset.departmentId;
  companyDepartmentLongPressStart = { x: event.clientX, y: event.clientY };
  window.clearTimeout(companyDepartmentLongPressTimer);
  companyDepartmentLongPressTimer = window.setTimeout(() => {
    openCompanyDepartmentForm(companyDepartmentLongPressId);
    card.classList.remove("is-pressing");
    companyDepartmentLongPressId = "";
    companyDepartmentLongPressStart = null;
  }, COMPANY_LONG_PRESS_MS);
  card.classList.add("is-pressing");
}

function moveCompanyDepartmentLongPress(event) {
  if (!companyDepartmentLongPressStart) return;
  const dx = Math.abs(event.clientX - companyDepartmentLongPressStart.x);
  const dy = Math.abs(event.clientY - companyDepartmentLongPressStart.y);
  if (dx > 12 || dy > 12) cancelCompanyDepartmentLongPress();
}

function cancelCompanyDepartmentLongPress() {
  if (companyDepartmentLongPressId) {
    const card = companyDom.companyDepartmentGrid?.querySelector(`[data-department-id="${cssEscape(companyDepartmentLongPressId)}"]`);
    card?.classList.remove("is-pressing");
  }
  window.clearTimeout(companyDepartmentLongPressTimer);
  companyDepartmentLongPressTimer = null;
  companyDepartmentLongPressStart = null;
  companyDepartmentLongPressId = "";
}

function saveCompanyProjectFromForm() {
  const company = lifeCompanyState.company;
  if (!company) return;

  const projectId = companyDom.companyProjectIdInput.value || createId("project");
  const existingIndex = company.projects.findIndex((project) => project.id === projectId);
  const wasCompleted = existingIndex >= 0 && company.projects[existingIndex].status === "completed";
  const progress = clampNumber(companyDom.companyProjectProgressInput.value, 0, 100, 0);
  const status = progress >= 100 ? "completed" : companyDom.companyProjectStatusInput.value;
  const project = {
    id: projectId,
    companyId: company.id,
    title: companyDom.companyProjectTitleInput.value.trim(),
    description: companyDom.companyProjectDescriptionInput.value.trim(),
    departmentName: companyDom.companyProjectDepartmentInput.value,
    startDate: companyDom.companyProjectStartInput.value,
    deadline: companyDom.companyProjectDeadlineInput.value,
    progress,
    status,
    taskIds: existingIndex >= 0 ? company.projects[existingIndex].taskIds : [],
    createdAt: existingIndex >= 0 ? company.projects[existingIndex].createdAt : new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  if (!project.title) {
    showCompanyToast("先写一个项目名称。");
    return;
  }

  if (existingIndex >= 0) {
    company.projects.splice(existingIndex, 1, project);
  } else {
    company.projects.unshift(project);
  }
  if (project.status === "completed" && !wasCompleted) awardProjectCompletion(project);
  company.updatedAt = new Date().toISOString();
  closeCompanyProjectForm();
  renderLifeCompanyPage();
  showCompanyToast(existingIndex >= 0 ? "小项目已更新。" : "小项目已创建。");
}

function deleteCompanyProject(projectId) {
  const company = lifeCompanyState.company;
  if (!company) return;
  const project = company.projects.find((item) => item.id === projectId);
  company.projects = company.projects.filter((item) => item.id !== projectId);
  lifeCompanyState.tasks = lifeCompanyState.tasks.filter((task) => task.projectId !== projectId);
  company.updatedAt = new Date().toISOString();
  renderLifeCompanyPage();
  showCompanyToast(project ? `${project.title} 已删除。` : "小项目已删除。");
}

function generateCompanyTasksFromProject(projectId) {
  const company = lifeCompanyState.company;
  const project = company?.projects.find((item) => item.id === projectId);
  if (!company || !project) return;
  if (lifeCompanyState.tasks.length >= COMPANY_TASK_LIMIT) {
    showCompanyToast(`今日公司任务最多 ${COMPANY_TASK_LIMIT} 张。`);
    return;
  }
  const department = company.departments.find((item) => item.name === project.departmentName);
  if (department) {
    const today = dateKey(new Date());
    const departmentTaskCount = lifeCompanyState.tasks.filter((task) => (
      task.departmentName === department.name
      && dateKey(new Date(task.createdAt)) === today
    )).length;
    if (departmentTaskCount >= department.taskCardLimit) {
      showCompanyToast(`${department.name}每天最多生成 ${department.taskCardLimit} 张任务卡。`);
      return;
    }
  }

  const durationMinutes = calculateCompanyTaskMinutes(project);
  const task = {
    id: createId("task"),
    title: nextTaskTitleFromProject(project),
    done: false,
    source: "life-company",
    companyId: company.id,
    projectId: project.id,
    departmentName: project.departmentName,
    durationMinutes,
    coinReward: calculateCompanyTaskCoinReward(durationMinutes),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  lifeCompanyState.tasks.unshift(task);
  project.taskIds = Array.from(new Set([...(project.taskIds || []), task.id]));
  company.updatedAt = new Date().toISOString();
  renderLifeCompanyPage();
  showCompanyToast("已生成一张公司任务卡。");
}

function toggleCompanyTask(taskId) {
  const task = lifeCompanyState.tasks.find((item) => item.id === taskId);
  if (!task) return;
  const wasDone = Boolean(task.done);
  task.done = !task.done;
  task.updatedAt = new Date().toISOString();
  if (!wasDone && task.done) awardCompanyTaskCompletion(task);
  updateProjectProgressFromTasks(task.projectId);
  renderLifeCompanyPage();
  showCompanyToast(task.done ? "公司任务完成。" : "公司任务已取消完成。");
}

function deleteCompanyTask(taskId) {
  const company = lifeCompanyState.company;
  const task = lifeCompanyState.tasks.find((item) => item.id === taskId);
  lifeCompanyState.tasks = lifeCompanyState.tasks.filter((item) => item.id !== taskId);
  company.projects.forEach((project) => {
    project.taskIds = (project.taskIds || []).filter((id) => id !== taskId);
  });
  renderLifeCompanyPage();
  showCompanyToast(task ? `${task.title} 已删除。` : "任务已删除。");
}

function awardCompanyTaskCompletion(task) {
  const company = lifeCompanyState.company;
  if (!company || !task?.id) return false;
  const reward = companyTaskCoinReward(task);
  return earnCompanyCoins(reward, "task", {
    title: "完成公司项目任务",
    note: task.title,
    relatedTaskId: `company:${task.id}`,
    relatedProjectId: task.projectId,
    exp: reward,
    uniqueKey: `company:${task.id}`,
  });
}

function awardProjectCompletion(project) {
  if (!project?.id) return false;
  const amount = projectCompletionReward(project);
  return earnCompanyCoins(amount, "project", {
    title: "完成小项目",
    note: project.title,
    relatedProjectId: project.id,
    exp: 50,
    uniqueKey: `project:${project.id}`,
  });
}

function earnCompanyCoins(amount, source = "manual", meta = {}) {
  const company = lifeCompanyState.company;
  if (!company?.economy) return false;
  const economy = company.economy;
  const cleanAmount = roundCompanyCoins(amount);
  if (cleanAmount <= 0) return false;
  if (meta.uniqueKey && hasEconomyTransaction(meta.uniqueKey, source)) return false;
  economy.companyCoins = roundCompanyCoins(economy.companyCoins + cleanAmount);
  economy.lifetimeEarned = roundCompanyCoins(economy.lifetimeEarned + cleanAmount);
  earnCompanyExp(meta.exp || 0);
  pushCompanyTransaction("earn", cleanAmount, source, meta);
  updateCompanyAssetValue();
  return true;
}

function spendCompanyCoins(amount, source = "manual", meta = {}) {
  const company = lifeCompanyState.company;
  if (!company?.economy) return false;
  const economy = company.economy;
  const cleanAmount = roundCompanyCoins(amount);
  if (cleanAmount <= 0 || economy.companyCoins < cleanAmount) return false;
  economy.companyCoins = roundCompanyCoins(economy.companyCoins - cleanAmount);
  economy.lifetimeSpent = roundCompanyCoins(economy.lifetimeSpent + cleanAmount);
  pushCompanyTransaction("spend", cleanAmount, source, meta);
  updateCompanyAssetValue();
  return true;
}

function adjustCompanyCoins(amount, note = "") {
  const company = lifeCompanyState.company;
  if (!company?.economy) return false;
  const economy = company.economy;
  const cleanAmount = roundCompanyCoins(amount);
  economy.companyCoins = roundCompanyCoins(Math.max(0, economy.companyCoins + cleanAmount));
  pushCompanyTransaction("adjust", Math.abs(cleanAmount), "manual", {
    title: "手动调整金币",
    note,
  });
  updateCompanyAssetValue();
  return true;
}

function earnCompanyExp(amount) {
  const economy = lifeCompanyState.company?.economy;
  const cleanAmount = Math.max(0, Math.floor(Number(amount || 0)));
  if (!economy || cleanAmount <= 0) return false;
  economy.companyExp += cleanAmount;
  return true;
}

function pushCompanyTransaction(type, amount, source, meta = {}) {
  const company = lifeCompanyState.company;
  const economy = company?.economy;
  if (!economy) return;
  const transaction = {
    id: createId("economy"),
    type,
    amount: roundCompanyCoins(amount),
    source,
    title: meta.title || economySourceLabel(source),
    note: meta.note || "",
    relatedCompanyId: company.id,
    relatedProjectId: meta.relatedProjectId || "",
    relatedTaskId: meta.relatedTaskId || meta.uniqueKey || "",
    relatedStockId: meta.relatedStockId || "",
    createdAt: new Date().toISOString(),
  };
  economy.transactions = [transaction, ...(economy.transactions || [])].slice(0, 80);
}

function hasEconomyTransaction(uniqueKey, source = "") {
  const transactions = lifeCompanyState.company?.economy?.transactions || [];
  const cleanKey = String(uniqueKey || "");
  const taskKey = cleanKey.startsWith("task:") ? cleanKey.slice(5) : cleanKey;
  const projectKey = cleanKey.startsWith("project:") ? cleanKey.slice(8) : cleanKey;
  const stockKey = cleanKey.startsWith("stock:") ? cleanKey.slice(6) : cleanKey;
  return transactions.some((transaction) =>
    (!source || transaction.source === source) &&
    (
      transaction.relatedTaskId === cleanKey ||
      transaction.relatedTaskId === taskKey ||
      transaction.relatedProjectId === cleanKey ||
      transaction.relatedProjectId === projectKey ||
      transaction.relatedStockId === cleanKey ||
      transaction.relatedStockId === stockKey
    )
  );
}

function canUpgradeCompany() {
  const economy = lifeCompanyState.company?.economy;
  const next = nextCompanyLevel();
  if (!economy || !next) return false;
  return areAllCompanyProjectsCompleted() && isCompanyUpgradeWeekReady() && economy.companyCoins >= next.requiredCoins;
}

function upgradeCompany() {
  const economy = lifeCompanyState.company?.economy;
  const next = nextCompanyLevel();
  if (!economy || !next) return;
  if (!canUpgradeCompany()) {
    showCompanyToast(companyUpgradeBlockReason());
    return;
  }
  const upgradeCost = roundCompanyCoins(next.requiredCoins);
  if (upgradeCost > 0) {
    economy.companyCoins = roundCompanyCoins(economy.companyCoins - upgradeCost);
    economy.lifetimeSpent = roundCompanyCoins(economy.lifetimeSpent + upgradeCost);
  }
  economy.companyLevel = next.level;
  economy.lastCompanyUpgradeAt = new Date().toISOString();
  pushCompanyTransaction("spend", upgradeCost, "company-upgrade", {
    title: `公司升级到 Lv.${next.level}`,
    note: next.name,
  });
  lifeCompanyState.company.updatedAt = new Date().toISOString();
  renderLifeCompanyPage();
  showCompanyToast(`公司升级为 ${next.name}。`);
}

function upgradeCompanyDepartment(departmentId = "") {
  const company = lifeCompanyState.company;
  const department = company?.departments.find((item) => item.id === departmentId);
  if (!company || !department) return;
  const cost = departmentUpgradeCost(department);
  if (!cost) {
    showCompanyToast("这个部门已经满级。");
    return;
  }
  const spent = spendCompanyCoins(cost, "department-upgrade", {
    title: `升级${department.name}`,
    note: `Lv.${department.level} → Lv.${department.level + 1}`,
  });
  if (!spent) {
    showCompanyToast("金币不够，暂时不能升级这个部门。");
    return;
  }
  department.level += 1;
  department.exp = Math.max(0, Number(department.exp || 0));
  department.updatedAt = new Date().toISOString();
  company.updatedAt = new Date().toISOString();
  renderDepartmentEconomyState(department);
  renderLifeCompanyPage();
  showCompanyToast(`${department.name} 升到 Lv.${department.level}。`);
}

function currentCompanyLevel() {
  const economy = lifeCompanyState.company?.economy;
  const level = clampNumber(economy?.companyLevel, 1, COMPANY_LEVELS.length, 1);
  return COMPANY_LEVELS.find((item) => item.level === level) || COMPANY_LEVELS[0];
}

function nextCompanyLevel() {
  const current = currentCompanyLevel();
  return COMPANY_LEVELS.find((item) => item.level === current.level + 1) || null;
}

function calculateCompanyLevelProgress() {
  const economy = lifeCompanyState.company?.economy;
  const current = currentCompanyLevel();
  const next = nextCompanyLevel();
  if (!economy || !next) return { percent: 100, currentExp: economy?.companyExp || 0, nextExp: current.requiredExp };
  const span = Math.max(1, next.requiredExp - current.requiredExp);
  const done = clampNumber(economy.companyExp - current.requiredExp, 0, span, 0);
  return {
    percent: Math.round((done / span) * 100),
    currentExp: economy.companyExp,
    nextExp: next.requiredExp,
  };
}

function departmentUpgradeCost(department) {
  return DEPARTMENT_UPGRADE_COSTS[clampNumber(department?.level, 1, 4, 1)] || 0;
}

function areAllCompanyProjectsCompleted() {
  const projects = lifeCompanyState.company?.projects || [];
  return projects.length > 0 && projects.every((project) => project.status === "completed" || project.progress >= 100);
}

function isCompanyUpgradeWeekReady() {
  const lastUpgradeAt = lifeCompanyState.company?.economy?.lastCompanyUpgradeAt;
  if (!lastUpgradeAt) return true;
  const lastDate = new Date(lastUpgradeAt);
  if (Number.isNaN(lastDate.getTime())) return true;
  return Date.now() - lastDate.getTime() >= 7 * 86400000;
}

function companyUpgradeDaysRemaining() {
  const lastUpgradeAt = lifeCompanyState.company?.economy?.lastCompanyUpgradeAt;
  if (!lastUpgradeAt) return 0;
  const lastDate = new Date(lastUpgradeAt);
  if (Number.isNaN(lastDate.getTime())) return 0;
  const remaining = 7 * 86400000 - (Date.now() - lastDate.getTime());
  return Math.max(0, Math.ceil(remaining / 86400000));
}

function companyUpgradeRequirementText(nextLevel) {
  if (!areAllCompanyProjectsCompleted()) return "升级条件：完成全部公司项目";
  const remainingDays = companyUpgradeDaysRemaining();
  if (remainingDays > 0) return `升级冷却：还差 ${remainingDays} 天`;
  const coins = roundCompanyCoins(lifeCompanyState.company?.economy?.companyCoins || 0);
  if (coins < nextLevel.requiredCoins) return `升级需要 ${formatCompanyCoins(nextLevel.requiredCoins)}`;
  return `可升级到 Lv.${nextLevel.level}`;
}

function companyUpgradeBlockReason() {
  if (!areAllCompanyProjectsCompleted()) return "完成全部公司项目后，公司才能升级。";
  const remainingDays = companyUpgradeDaysRemaining();
  if (remainingDays > 0) return `距离上次升级还差 ${remainingDays} 天。`;
  const next = nextCompanyLevel();
  const coins = roundCompanyCoins(lifeCompanyState.company?.economy?.companyCoins || 0);
  if (next && coins < next.requiredCoins) return `金币不足，升级需要 ${formatCompanyCoins(next.requiredCoins)}。`;
  return "暂时不能升级。";
}

function projectCompletionReward(project) {
  const base = PROJECT_REWARD_MIN + Math.min(40, Math.max(0, String(project?.title || "").length * 2));
  const deadlineBonus = project?.deadline && daysUntil(project.deadline) >= 0 ? 20 : 0;
  return clampNumber(base + deadlineBonus, PROJECT_REWARD_MIN, PROJECT_REWARD_MAX, PROJECT_REWARD_MIN);
}

function normalizeCompanyTaskMinutes(value) {
  const minutes = Math.round(Number(value || COMPANY_TASK_BASE_MINUTES));
  if (!Number.isFinite(minutes)) return COMPANY_TASK_BASE_MINUTES;
  return clampNumber(minutes, COMPANY_TASK_MINUTES_STEP, 240, COMPANY_TASK_BASE_MINUTES);
}

function calculateCompanyTaskMinutes(project) {
  if (project?.progress >= 80) return 30;
  if (project?.progress >= 45) return 60;
  if (project?.deadline && daysUntil(project.deadline) <= 3) return 90;
  return COMPANY_TASK_BASE_MINUTES;
}

function calculateCompanyTaskCoinReward(durationMinutes) {
  const minutes = normalizeCompanyTaskMinutes(durationMinutes);
  return Math.max(COMPANY_TASK_COINS_PER_STEP, Math.round(minutes / COMPANY_TASK_MINUTES_STEP) * COMPANY_TASK_COINS_PER_STEP);
}

function normalizeCompanyTaskCoinReward(value, durationMinutes = COMPANY_TASK_BASE_MINUTES) {
  const fallback = calculateCompanyTaskCoinReward(durationMinutes);
  const reward = Math.round(Number(value || fallback));
  if (!Number.isFinite(reward)) return fallback;
  return clampNumber(reward, COMPANY_TASK_COINS_PER_STEP, 80, fallback);
}

function companyTaskCoinReward(task) {
  return normalizeCompanyTaskCoinReward(task?.coinReward, task?.durationMinutes);
}

function formatCompanyTaskMinutes(value) {
  const minutes = normalizeCompanyTaskMinutes(value);
  if (minutes % 60 === 0) return `${minutes / 60} 小时`;
  return `${minutes} 分钟`;
}

function updateCompanyAssetValue() {
  const company = lifeCompanyState.company;
  const economy = company?.economy;
  if (!company || !economy) return 0;
  const completedProjectValue = company.projects.filter((project) => project.status === "completed").length * 120;
  const companyLevelValue = currentCompanyLevel().level * 420;
  const departmentValue = company.departments.reduce((sum, department) => sum + (department.level - 1) * 90, 0);
  const skillHoldingValue = calculateSkillHoldingAssetValue();
  economy.assetValue = roundCompanyCoins(economy.companyCoins + completedProjectValue + companyLevelValue + departmentValue + skillHoldingValue);
  return economy.assetValue;
}

function calculateSkillHoldingAssetValue() {
  try {
    const raw = localStorage.getItem(SKILL_MARKET_STORAGE_KEY);
    const market = raw ? JSON.parse(raw) : null;
    const stocks = Array.isArray(market?.stocks) ? market.stocks : [];
    return Object.entries(market?.holdings || {}).reduce((sum, [symbol, holding]) => {
      const shares = Math.max(0, Math.floor(Number(holding?.shares || 0)));
      const stock = stocks.find((item) => item.symbol === symbol);
      return sum + shares * roundCompanyCoins(stock?.price || holding?.avgCost || 0);
    }, 0);
  } catch (error) {
    return 0;
  }
}

function todayEconomyTotals() {
  const today = dateKey(new Date());
  const transactions = lifeCompanyState.company?.economy?.transactions || [];
  return transactions.reduce((totals, transaction) => {
    if (!String(transaction.createdAt || "").startsWith(today)) return totals;
    if (transaction.type === "earn") totals.income += Number(transaction.amount || 0);
    if (transaction.type === "spend") totals.spend += Number(transaction.amount || 0);
    return totals;
  }, { income: 0, spend: 0 });
}

function economySourceLabel(source) {
  const labels = {
    task: "任务收入",
    "company-task-missed": "公司任务未完成",
    project: "项目收入",
    "skill-stock": "技能股交易",
    "company-upgrade": "公司升级",
    "department-upgrade": "部门升级",
    exploration: "部门扫描",
    decoration: "装饰解锁",
    manual: "手动调整",
  };
  return labels[source] || "金币变动";
}

function initializeCompanyDepartments(companyTypeId) {
  const type = companyTypeById(companyTypeId) || COMPANY_TYPES[0];
  return type.defaultDepartments.slice(0, COMPANY_DEPARTMENT_LIMIT).map((name, index) => {
    const departmentId = createId("dept");
    return {
      id: departmentId,
      name,
      status: "normal",
      progress: 0,
      level: 1,
      exp: 0,
      projectIds: [],
      taskIds: [],
      manualProjectCount: null,
      manualTaskCount: null,
      taskCardLimit: index === 0 ? 3 : COMPANY_TASK_LIMIT,
      exploration: {
        unlocked: index === 0,
        targetCell: companyExplorationTargetCell(departmentId),
        portalCell: null,
        revealedCells: [],
        completed: false,
        completionPromptShown: false,
      },
      room: {
        sceneId: normalizeCompanyDepartmentSceneId("", index),
        memberIds: [],
        memberPositions: {},
      },
    };
  });
}

function syncCompanyDerivedState() {
  const company = lifeCompanyState.company;
  if (!company) return;

  company.projects.forEach((project) => {
    if (project.status !== "completed" && project.deadline && daysUntil(project.deadline) < 0) {
      project.status = "overdue";
    }
  });

  company.departments.forEach((department) => {
    const projects = company.projects.filter((project) => project.departmentName === department.name);
    const tasks = lifeCompanyState.tasks.filter((task) => task.departmentName === department.name);
    department.projectIds = projects.map((project) => project.id);
    department.taskIds = tasks.map((task) => task.id);
    department.progress = projects.length
      ? Math.round(projects.reduce((sum, project) => sum + project.progress, 0) / projects.length)
      : 0;
    if (!department.statusLocked) department.status = calculateDepartmentStatus(projects, tasks);
  });

  company.mainGoal.progress = calculateCompanyProgress(company);
}

function calculateCompanyProgress(company) {
  if (!company.projects.length) return clampNumber(company.mainGoal?.progress, 0, 100, 0);
  const progress = company.projects.reduce((sum, project) => sum + project.progress, 0) / company.projects.length;
  return Math.round(progress);
}

function calculateDepartmentStatus(projects, tasks) {
  if (!projects.length && !tasks.length) return "resting";
  if (projects.some((project) => project.status === "overdue")) return "urgent";
  if (projects.some((project) => project.status === "paused")) return "stuck";
  if (tasks.filter((task) => !task.done).length >= 3 || projects.length >= 2) return "busy";
  return "normal";
}

function generateCompanyDailyReport() {
  const company = lifeCompanyState.company;
  const doneCount = lifeCompanyState.tasks.filter((task) => task.done).length;
  const undoneCount = lifeCompanyState.tasks.length - doneCount;
  const riskProjects = company.projects.filter((project) => project.status === "overdue" || (project.deadline && daysUntil(project.deadline) <= 3 && project.progress < 80));
  const lines = company.departments.slice(0, 5).map((department) => {
    const status = DEPARTMENT_STATUS_LABELS[department.status] || "正常";
    const projectCount = displayDepartmentProjectCount(department);
    const taskCount = displayDepartmentTaskCount(department);
    if (!projectCount && !taskCount) return `${department.name}：暂无项目，状态${status}。`;
    return `${department.name}：${projectCount} 个项目，${taskCount} 张任务，状态${status}。`;
  });
  const advice = riskProjects.length
    ? `系统建议：明天优先推进「${riskProjects[0].title}」，否则大目标可能延期。`
    : undoneCount
      ? `系统建议：先完成 ${undoneCount} 张未完成公司任务，让公司保持运转。`
      : doneCount
        ? "系统建议：今天公司运转良好，可以做一次短复盘。"
        : "系统建议：从一个小项目开始生成任务，让公司今天有实际动作。";

  return {
    title: "今日公司运营报告",
    lines,
    advice,
  };
}

function updateProjectProgressFromTasks(projectId) {
  const company = lifeCompanyState.company;
  const project = company?.projects.find((item) => item.id === projectId);
  if (!project) return;
  const wasCompleted = project.status === "completed";
  const projectTasks = lifeCompanyState.tasks.filter((task) => task.projectId === projectId);
  if (!projectTasks.length) return;
  const doneCount = projectTasks.filter((task) => task.done).length;
  project.progress = Math.max(project.progress, Math.round((doneCount / projectTasks.length) * 100));
  if (project.progress >= 100) project.status = "completed";
  if (!wasCompleted && project.status === "completed") awardProjectCompletion(project);
  project.updatedAt = new Date().toISOString();
}

function nextTaskTitleFromProject(project) {
  const cleanTitle = project.title.replace(/^完成/, "").trim();
  if (project.progress <= 0) return `启动 ${cleanTitle}`;
  if (project.progress < 60) return `推进 ${cleanTitle}`;
  if (project.progress < 100) return `收尾 ${cleanTitle}`;
  return `复盘 ${cleanTitle}`;
}

function displayDepartmentProjectCount(department) {
  return department.manualProjectCount !== null && department.manualProjectCount !== undefined
    ? clampNumber(department.manualProjectCount, 0, 99, 0)
    : department.projectIds.length;
}

function displayDepartmentTaskCount(department) {
  return department.manualTaskCount !== null && department.manualTaskCount !== undefined
    ? clampNumber(department.manualTaskCount, 0, 99, 0)
    : department.taskIds.length;
}

function companyTypeById(typeId) {
  return COMPANY_TYPES.find((type) => type.id === typeId);
}

function defaultCompanyName(type) {
  if (type.id === "school") return "星星学校";
  if (type.id === "health-center") return "健康恢复中心";
  return `我的${type.name}`;
}

function defaultMainGoal(type) {
  if (type.id === "animation-company") return "完成动画作品集";
  if (type.id === "school") return "准备教学作品集";
  if (type.id === "health-center") return "建立稳定生活系统";
  return "完成第一阶段作品";
}

function setText(element, value) {
  if (element) element.textContent = value;
}

function showDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

function showCompanyToast(message) {
  if (!companyDom.companyToast) return;
  companyDom.companyToast.textContent = message;
  companyDom.companyToast.hidden = false;
  clearTimeout(companyToastTimer);
  companyToastTimer = window.setTimeout(() => {
    companyDom.companyToast.hidden = true;
  }, 2200);
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDate(value) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function daysUntil(value) {
  const target = parseDate(value);
  if (!target) return 0;
  const today = parseDate(dateKey(new Date()));
  return Math.ceil((target - today) / 86400000);
}

function formatDateShort(value) {
  if (!value) return "";
  const date = parseDate(value);
  if (!date) return "";
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(max, Math.max(min, number));
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

function formatCompanyCoins(value) {
  const economy = lifeCompanyState?.company?.economy;
  const symbol = economy?.currencySymbol || "◈";
  return `${symbol} ${roundCompanyCoins(value).toLocaleString("zh-CN")}`;
}

function formatTransactionTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "刚刚";
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  return `${month}/${day} ${hour}:${minute}`;
}

function createId(prefix) {
  if (window.crypto?.randomUUID) return `${prefix}-${window.crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function cssEscape(value) {
  if (window.CSS?.escape) return window.CSS.escape(value);
  return String(value).replaceAll('"', '\\"').replaceAll("\\", "\\\\");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const LIFE_COMPANY_KEY = "life-game-company-v1";
const GAME_STATE_KEY = "thirty-day-quest-v2";
const COMPANY_TASK_LIMIT = 6;
const COMPANY_DEPARTMENT_LIMIT = 6;
const COMPANY_LONG_PRESS_MS = 520;
const SKILL_MARKET_STORAGE_KEY = "life-skill-market-v1";
const COMPANY_STARTING_STAKE = 600;

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

const companyDom = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheCompanyDom();
  lifeCompanyState = loadLifeCompany();
  bindCompanyEvents();
  renderCompanyTypeOptions();
  renderLifeCompanyPage();
});

function cacheCompanyDom() {
  [
    "companyEmptyState",
    "companySystem",
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
    "companyDepartmentLevelLabel",
    "companyToast",
  ].forEach((id) => {
    companyDom[id] = document.getElementById(id);
  });
}

function bindCompanyEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-company-action]");
    if (!target) return;

    const action = target.dataset.companyAction;
    if (action === "open-create-company") openCompanyForm("create");
    if (action === "open-edit-company") openCompanyForm("edit");
    if (action === "close-company-form") closeCompanyForm();
    if (action === "add-department") addCompanyDepartment();
    if (action === "open-department-form") openCompanyDepartmentForm(target.dataset.departmentId);
    if (action === "close-department-form") closeCompanyDepartmentForm();
    if (action === "delete-department") deleteCompanyDepartment();
    if (action === "upgrade-company") upgradeCompany();
    if (action === "upgrade-department") upgradeCompanyDepartment(target.dataset.departmentId || companyDom.companyDepartmentIdInput?.value);
    if (action === "open-create-project") openCompanyProjectForm();
    if (action === "close-project-form") closeCompanyProjectForm();
    if (action === "edit-project") openCompanyProjectForm(target.dataset.projectId);
    if (action === "delete-project") deleteCompanyProject(target.dataset.projectId);
    if (action === "generate-project-task") generateCompanyTasksFromProject(target.dataset.projectId);
    if (action === "toggle-company-task") toggleCompanyTask(target.dataset.taskId);
    if (action === "delete-company-task") deleteCompanyTask(target.dataset.taskId);
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

  companyDom.companyDepartmentGrid?.addEventListener("pointerdown", startCompanyDepartmentLongPress);
  companyDom.companyDepartmentGrid?.addEventListener("pointermove", moveCompanyDepartmentLongPress);
  companyDom.companyDepartmentGrid?.addEventListener("pointerup", cancelCompanyDepartmentLongPress);
  companyDom.companyDepartmentGrid?.addEventListener("pointercancel", cancelCompanyDepartmentLongPress);
  companyDom.companyDepartmentGrid?.addEventListener("pointerleave", cancelCompanyDepartmentLongPress);
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
  localStorage.setItem(LIFE_COMPANY_KEY, JSON.stringify(lifeCompanyState));
  window.dispatchEvent(new CustomEvent("life-company-updated"));
}

function syncCompanyNameToGameTitle() {
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
    ? company.departments.map(normalizeDepartment).filter(Boolean)
    : initializeCompanyDepartments(type.id);
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
    projects,
    linkedSkillStocks: Array.isArray(company.linkedSkillStocks) ? company.linkedSkillStocks : type.recommendedSkillStocks,
    economy: normalizeCompanyEconomy(company.economy),
    createdAt: company.createdAt || now,
    updatedAt: company.updatedAt || now,
  };
}

function normalizeDepartment(department) {
  if (!department?.name) return null;
  return {
    id: department.id || createId("dept"),
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
  };
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
  const source = ["task", "company-task-missed", "project", "skill-stock", "company-upgrade", "department-upgrade", "decoration", "relationship-reaction", "manual"].includes(transaction.source)
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
  renderCompanyOverview();
  renderCompanyEconomy();
  renderCompanyDepartments();
  renderCompanyProjects();
  renderCompanyTasks();
  renderRecommendedSkillStocks();
  renderCompanyReport();
  saveLifeCompany();
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
  const department = {
    id: createId("dept"),
    name: `新部门 ${company.departments.length + 1}`,
    status: "normal",
    progress: 0,
    level: 1,
    exp: 0,
    projectIds: [],
    taskIds: [],
    manualProjectCount: 0,
    manualTaskCount: 0,
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
  renderDepartmentEconomyState(department);
  const deleteButton = companyDom.companyDepartmentForm?.querySelector("[data-company-action='delete-department']");
  if (deleteButton) deleteButton.textContent = "删除部门";
  showDialog(companyDom.companyDepartmentDialog);
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
    departments: existing && existing.type === type.id ? existing.departments : initializeCompanyDepartments(type.id),
    projects: existing ? existing.projects : [],
    linkedSkillStocks: type.recommendedSkillStocks,
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
    decoration: "装饰解锁",
    manual: "手动调整",
  };
  return labels[source] || "金币变动";
}

function initializeCompanyDepartments(companyTypeId) {
  const type = companyTypeById(companyTypeId) || COMPANY_TYPES[0];
  return type.defaultDepartments.slice(0, COMPANY_DEPARTMENT_LIMIT).map((name) => ({
    id: createId("dept"),
    name,
    status: "normal",
    progress: 0,
    level: 1,
    exp: 0,
    projectIds: [],
    taskIds: [],
    manualProjectCount: null,
    manualTaskCount: null,
  }));
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

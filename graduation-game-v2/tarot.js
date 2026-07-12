const STORAGE_KEY = "thirty-day-quest-v2";
const TAROT_IMAGE_PATH = "./assets/tarot/rws/";

const majorArcana = [
  { title: "愚者", file: "RWS_Tarot_00_Fool.jpg", keyword: "新开始", meaning: "允许自己用轻一点的方式开始。今天先迈出一步，再慢慢修正方向。" },
  { title: "魔术师", file: "RWS_Tarot_01_Magician.jpg", keyword: "启动", meaning: "你手边的资源已经够用。把想法变成一个明确动作。" },
  { title: "女祭司", file: "RWS_Tarot_02_High_Priestess.jpg", keyword: "直觉", meaning: "先听见心里的声音，再决定要不要说出口。答案可能在安静里。" },
  { title: "皇后", file: "RWS_Tarot_03_Empress.jpg", keyword: "滋养", meaning: "照顾身体和环境，会让事情更容易生长。别急着催熟自己。" },
  { title: "皇帝", file: "RWS_Tarot_04_Emperor.jpg", keyword: "秩序", meaning: "给今天一个边界和结构。越清楚，越不容易被拖走。" },
  { title: "教皇", file: "RWS_Tarot_05_Hierophant.jpg", keyword: "传统", meaning: "向可靠的方法借力。需要时，可以找一个已有规则来承托你。" },
  { title: "恋人", file: "RWS_Tarot_06_Lovers.jpg", keyword: "选择", meaning: "真正的选择会暴露你的价值排序。选那个更接近真实自己的方向。" },
  { title: "战车", file: "RWS_Tarot_07_Chariot.jpg", keyword: "推进", meaning: "保持方向感，不必等一切都完美。今天适合向前推一段。" },
  { title: "力量", file: "RWS_Tarot_08_Strength.jpg", keyword: "柔韧", meaning: "力量不只是硬撑，也包括温柔地驯服焦躁，稳定地开始。" },
  { title: "隐者", file: "RWS_Tarot_09_Hermit.jpg", keyword: "内省", meaning: "留一点独处时间。把问题写清楚，灯会慢慢亮起来。" },
  { title: "命运之轮", file: "RWS_Tarot_10_Wheel_of_Fortune.jpg", keyword: "转机", meaning: "节奏正在变。与其抓紧旧计划，不如抓住当下能转动的一小格。" },
  { title: "正义", file: "RWS_Tarot_11_Justice.jpg", keyword: "校准", meaning: "回到事实、边界和责任。今天适合做一个公平而清楚的判断。" },
  { title: "倒吊人", file: "RWS_Tarot_12_Hanged_Man.jpg", keyword: "换角度", meaning: "如果卡住，先换一个视角。暂停不是失败，可能是在重排意义。" },
  { title: "死神", file: "RWS_Tarot_13_Death.jpg", keyword: "结束", meaning: "有些旧方式可以退场了。结束之后，新的空间才会出现。" },
  { title: "节制", file: "RWS_Tarot_14_Temperance.jpg", keyword: "调和", meaning: "把速度调到可持续。少一点过量，多一点稳定。" },
  { title: "恶魔", file: "RWS_Tarot_15_Devil.jpg", keyword: "束缚", meaning: "看清正在消耗你的习惯。今天先松开一个最小的扣子。" },
  { title: "高塔", file: "RWS_Tarot_16_Tower.jpg", keyword: "重建", meaning: "突然的变化不一定只是在破坏，也可能是在拆掉不稳的结构。" },
  { title: "星星", file: "RWS_Tarot_17_Star.jpg", keyword: "希望", meaning: "保留一点希望，然后继续照顾自己。灵感会在放松后回来。" },
  { title: "月亮", file: "RWS_Tarot_18_Moon.jpg", keyword: "迷雾", meaning: "模糊的时候不要急着定论。先记录感受，再等信息变清楚。" },
  { title: "太阳", file: "RWS_Tarot_19_Sun.jpg", keyword: "显化", meaning: "今天适合把一件小事做亮。完成一个能看见结果的动作。" },
  { title: "审判", file: "RWS_Tarot_20_Judgement.jpg", keyword: "觉醒", meaning: "听见内心的召唤。复盘不是责备，而是准备进入下一阶段。" },
  { title: "世界", file: "RWS_Tarot_21_World.jpg", keyword: "完成", meaning: "一个循环正在收束。认真收尾，会给新的开始腾出位置。" },
];

const rankCards = [
  { slug: "ace", label: "一", file: "01", keyword: "种子", meaning: "一件事刚刚冒头，先保护它的火苗。" },
  { slug: "two", label: "二", file: "02", keyword: "选择", meaning: "两个方向都在召唤你，先看清自己真正想要什么。" },
  { slug: "three", label: "三", file: "03", keyword: "扩展", meaning: "事情需要协作、表达或向外推进一点。" },
  { slug: "four", label: "四", file: "04", keyword: "稳定", meaning: "把基础放稳，别急着进入下一个刺激。" },
  { slug: "five", label: "五", file: "05", keyword: "摩擦", meaning: "冲突正在提示你哪里需要调整。" },
  { slug: "six", label: "六", file: "06", keyword: "回流", meaning: "资源、帮助或记忆正在回来，记得接住。" },
  { slug: "seven", label: "七", file: "07", keyword: "防守", meaning: "守住重要位置，不必回应所有噪音。" },
  { slug: "eight", label: "八", file: "08", keyword: "推进", meaning: "连续行动会带来变化，今天适合动起来。" },
  { slug: "nine", label: "九", file: "09", keyword: "临界", meaning: "快到一个节点了，照顾好体力和耐心。" },
  { slug: "ten", label: "十", file: "10", keyword: "承担", meaning: "事情进入收束期，分清哪些真的需要你背。" },
  { slug: "page", label: "侍从", file: "11", keyword: "学习", meaning: "用初学者的眼光看问题，今天适合试探和练习。" },
  { slug: "knight", label: "骑士", file: "12", keyword: "行动", meaning: "能量正在向前冲，记得给它一个清楚方向。" },
  { slug: "queen", label: "皇后", file: "13", keyword: "照料", meaning: "成熟的力量来自稳定照料，而不是过度控制。" },
  { slug: "king", label: "国王", file: "14", keyword: "掌控", meaning: "把经验用出来。今天适合做一个更成熟的安排。" },
];

const suitCards = [
  { slug: "wands", title: "权杖", file: "Wands", theme: "行动与热情", meaning: "把灵感落到行动上，但别把自己烧干。" },
  { slug: "cups", title: "圣杯", file: "Cups", theme: "情绪与关系", meaning: "先照顾情绪，再处理关系和选择。" },
  { slug: "swords", title: "宝剑", file: "Swords", theme: "思考与沟通", meaning: "把话说清，把念头理顺，事情会少一点缠绕。" },
  { slug: "pents", title: "星币", file: "Pents", theme: "资源与现实", meaning: "现实层面的小推进，会给安全感打地基。" },
];

const tarotCards = [
  ...majorArcana.map((card, index) => ({
    ...card,
    id: `major_${String(index).padStart(2, "0")}`,
    name: card.title,
    suit: "大阿尔卡那",
    uprightMeaning: card.meaning,
    reversedMeaning: `逆位提醒：${card.keyword}的能量可能被压住、延迟或转向内在。先不要急着推进，检查哪里需要松动或重新校准。${card.meaning}`,
    image: imageUrl(card.file),
  })),
  ...suitCards.flatMap((suit) => rankCards.map((rank) => ({
    id: `${suit.slug}_${rank.file}`,
    title: `${suit.title}${rank.label}`,
    name: `${suit.title}${rank.label}`,
    suit: suit.title,
    keyword: rank.keyword,
    meaning: `${rank.meaning}${suit.meaning}`,
    uprightMeaning: `${rank.meaning}${suit.meaning}`,
    reversedMeaning: `逆位提醒：${suit.theme}里的${rank.keyword}可能正在阻滞、过量或反向表达。先看见卡住的位置，再决定是否继续。${rank.meaning}${suit.meaning}`,
    image: imageUrl(`${suit.file}${rank.file}.jpg`),
  }))),
];

const tarotDeck = tarotCards;

const tarotSpreads = [
  { id: "one", label: "今日指引", count: 1, category: "日常", positions: ["今日指引"], use: "适合每天快速问一件事。", description: "一张牌牌阵适合快速聚焦，不追求完整预测，只给今天一个提醒或行动方向。" },
  { id: "past-present-future", label: "过去现在未来", count: 3, category: "通用", positions: ["过去", "现在", "未来"], use: "适合看一件事的时间线。", description: "经典三张牌牌阵，用过去、现在、未来看事件脉络，适合复盘关系、计划或阶段变化。" },
  { id: "situation-obstacle-advice", label: "现状阻碍建议", count: 3, category: "通用", positions: ["现状", "阻碍", "建议"], use: "适合卡住时找下一步。", description: "把问题拆成现状、卡点和可执行建议，适合不知道下一步怎么走的时候。" },
  { id: "situation-action-outcome", label: "情境行动结果", count: 3, category: "通用", positions: ["情境", "行动", "结果"], use: "适合判断一件事怎么推进。", description: "常见三张牌结构，用来把局面、应对动作和可能结果连起来看。" },
  { id: "problem-cause-solution", label: "问题原因解法", count: 3, category: "通用", positions: ["问题", "原因", "解法"], use: "适合拆解明确困扰。", description: "适合处理一个已经能命名的问题，帮助看见根源和解决方式。" },
  { id: "focus-outcome", label: "背景焦点结果", count: 3, category: "通用", positions: ["背景", "需要聚焦", "结果"], use: "适合注意力很散时。", description: "从背景中抽出真正需要关注的点，适合任务太多或情绪太乱的时候。" },
  { id: "love", label: "关系牌阵", count: 3, category: "关系", positions: ["我", "对方", "关系"], use: "适合亲密关系、朋友或合作。", description: "关系类经典三张牌，看双方状态和关系本身的主题，不只适合恋爱，也适合合作与友情。" },
  { id: "relationship-attention", label: "靠近拉开关注", count: 3, category: "关系", positions: ["靠近你的", "拉开你的", "需要关注"], use: "适合关系出现拉扯时。", description: "适合关系里既有吸引也有摩擦的时候，用来观察连接和距离的原因。" },
  { id: "choice", label: "选择牌阵", count: 3, category: "决策", positions: ["方案 A", "关键提醒", "方案 B"], use: "适合在两个方向之间做选择。", description: "用两个方案和中间提醒看选择。它不替你决定，而是让你看清两个方向的代价。" },
  { id: "strengths-weaknesses-advice", label: "优势弱点建议", count: 3, category: "决策", positions: ["优势", "弱点", "建议"], use: "适合评估自己手上的牌。", description: "常用于决策与自我评估，帮助你看清资源、短板和下一步。" },
  { id: "opportunities-challenges-outcome", label: "机会挑战结果", count: 3, category: "决策", positions: ["机会", "挑战", "结果"], use: "适合判断计划可行性。", description: "适合新计划、新项目或新关系，先看机会，再看挑战，最后看走向。" },
  { id: "mind-body-spirit", label: "身心灵", count: 3, category: "自我", positions: ["头脑", "身体", "灵魂"], use: "适合整理状态和能量。", description: "把状态拆成思考、身体和深层感受，适合做每日自检。" },
  { id: "conscious-subconscious-superconscious", label: "显意识潜意识高我", count: 3, category: "自我", positions: ["显意识", "潜意识", "高我"], use: "适合探索内在矛盾。", description: "适合当理智和感受不一致时，观察表层想法、深层驱动和更高视角。" },
  { id: "material-emotional-spiritual", label: "物质情绪精神", count: 3, category: "自我", positions: ["物质状态", "情绪状态", "精神状态"], use: "适合做现实与内在盘点。", description: "把生活状态分成现实资源、情绪状态和精神层面，适合压力较大时。" },
  { id: "stop-start-continue", label: "停止开始继续", count: 3, category: "行动", positions: ["停止", "开始", "继续"], use: "适合行动复盘和习惯调整。", description: "很适合月底、周末或做习惯复盘时使用，把行动分成该停、该开、该保留。" },
  { id: "next-step", label: "站位愿望路径", count: 3, category: "行动", positions: ["现在站位", "真正想要", "如何抵达"], use: "适合目标推进。", description: "来自未来导向三张牌思路，适合目标很明确但路径还模糊的时候。" },
  { id: "full-moon", label: "满月释放", count: 4, category: "月相", positions: ["看见", "释放", "滋养", "整合"], use: "适合复盘和放下。", description: "满月类牌阵常用于看见主题、释放旧能量，并把经验整合回生活。" },
  { id: "new-moon", label: "新月播种", count: 4, category: "月相", positions: ["意图", "种子", "支持", "行动"], use: "适合立新目标。", description: "新月类牌阵常用于设置意图、发现支持资源，并决定接下来的一步。" },
  { id: "career", label: "事业路径", count: 5, category: "事业", positions: ["现状", "优势", "挑战", "机会", "下一步"], use: "适合职业、学习和项目。", description: "把事业或项目问题拆成现状、能力、阻碍、机会和下一步，适合做计划前使用。" },
  {
    id: "celtic-cross",
    label: "凯尔特十字",
    count: 10,
    category: "复杂",
    positions: ["现状", "挑战", "过去", "近未来", "目标", "潜意识", "建议", "外部影响", "希望 / 恐惧", "结果"],
    use: "适合复杂问题的完整展开。",
    description: "凯尔特十字是非常常见的十张牌牌阵，适合复杂问题。它会同时看事件核心、时间线、内在驱动、外部影响和结果。",
  },
];

const dom = {};
let state;
let selectedDate = dateKey(new Date());
let toastTimer;
let shuffleGesture;
let pendingSpreadId = "";
let spreadInfoId = "";
let spreadPressTimer;
let spreadInfoJustOpened = false;

document.addEventListener("DOMContentLoaded", () => {
  cacheDom();
  state = loadState();
  ensureDay(selectedDate);
  bindEvents();
  renderTarot();
});

function cacheDom() {
  ["tarotQuestionInput", "tarotQuestionField", "tarotSpreadTabs", "tarotSpreadHint", "tarotTable", "tarotActions", "tarotReading", "shuffleTarotButton", "drawTarotButton", "toast"].forEach((id) => {
    dom[id] = document.getElementById(id);
  });
  dom.tarotHero = document.querySelector(".tarot-hero");
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = button.dataset.action;
    if (action === "open-spread-library") openSpreadLibrary();
    if (action === "close-spread-library") closeSpreadLibrary();
    if (action === "select-tarot-spread") {
      if (spreadInfoJustOpened) {
        spreadInfoJustOpened = false;
        return;
      }
      previewTarotSpread(button.dataset.spread);
    }
    if (action === "confirm-spread") confirmTarotSpread(button.dataset.spread);
    if (action === "shuffle-tarot") startShuffleRitual();
    if (action === "confirm-shuffle") confirmShuffleRitual();
    if (action === "draw-tarot-spread") startDrawRitual();
    if (action === "pick-tarot-card") pickTarotCard(Number(button.dataset.order));
    if (action === "reveal-tarot-card") revealTarotCard(Number(button.dataset.index));
    if (action === "restart-tarot") restartTarotReading();
    if (action === "return-game") resetIncompleteTarotReading();
  });

  document.addEventListener("pointerdown", startShuffleGesture);
  document.addEventListener("pointermove", moveShuffleGesture);
  document.addEventListener("pointerup", endShuffleGesture);
  document.addEventListener("pointercancel", endShuffleGesture);
  document.addEventListener("pointerdown", startSpreadInfoPress);
  document.addEventListener("pointerup", clearSpreadInfoPress);
  document.addEventListener("pointercancel", clearSpreadInfoPress);

  dom.tarotQuestionInput?.addEventListener("input", () => {
    const day = ensureDay(selectedDate);
    day.tarot.question = cleanText(dom.tarotQuestionInput.value, "", 120);
    saveState();
  });

  window.addEventListener("pagehide", resetIncompleteTarotReading);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    const next = parsed && typeof parsed === "object" ? parsed : {};
    next.days = next.days && typeof next.days === "object" ? next.days : {};
    return next;
  } catch {
    return { days: {} };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function ensureDay(dayKey) {
  state.days ||= {};
  state.days[dayKey] ||= {};
  const day = state.days[dayKey];
  day.tarot = normalizeTarotState(day.tarot);
  return day;
}

function selectTarotSpread(id) {
  const spread = getTarotSpread(id);
  const day = ensureDay(selectedDate);
  day.tarot.spread = spread.id;
  day.tarot.cards = [];
  day.tarot.reversals = [];
  day.tarot.reading = [];
  day.tarot.selectedCards = [];
  day.tarot.revealedCards = [];
  day.tarot.deck = [];
  day.tarot.deckReversals = [];
  day.tarot.ritual = "";
  day.tarot.drawnAt = "";
  saveState();
  renderTarot();
}

function openSpreadLibrary() {
  const day = ensureDay(selectedDate);
  pendingSpreadId = day.tarot.spread;
  spreadInfoId = "";
  day.tarot.ritual = "spread";
  saveState();
  renderTarot();
}

function closeSpreadLibrary() {
  const day = ensureDay(selectedDate);
  pendingSpreadId = "";
  spreadInfoId = "";
  day.tarot.ritual = "";
  saveState();
  renderTarot();
}

function previewTarotSpread(id) {
  pendingSpreadId = getTarotSpread(id).id;
  spreadInfoId = "";
  renderTarot();
}

function confirmTarotSpread(id) {
  selectTarotSpread(id);
  pendingSpreadId = "";
  spreadInfoId = "";
  startShuffleRitual();
}

function startShuffleRitual() {
  const day = ensureDay(selectedDate);
  day.tarot.cards = [];
  day.tarot.reversals = [];
  day.tarot.reading = [];
  day.tarot.selectedCards = [];
  day.tarot.revealedCards = [];
  day.tarot.deck = day.tarot.deck.length ? day.tarot.deck : shuffleIndices(tarotCards.length);
  day.tarot.deckReversals = [];
  day.tarot.ritual = "shuffle";
  day.tarot.shuffleAngle = 0;
  day.tarot.shuffleTurns = 0;
  day.tarot.shuffleDirection = "";
  day.tarot.drawnAt = "";
  saveState();
  renderTarot();
  showToast("进入洗牌仪式。用手指在牌堆上绕圈打散。");
}

function confirmShuffleRitual() {
  const day = ensureDay(selectedDate);
  const turns = Math.max(1, Math.ceil(Number(day.tarot.shuffleTurns) || 1));
  let deck = day.tarot.deck.length ? [...day.tarot.deck] : shuffleIndices(tarotCards.length);
  for (let index = 0; index < turns; index += 1) {
    deck = remixDeck(deck);
  }
  day.tarot.deck = deck;
  day.tarot.deckReversals = [];
  day.tarot.cards = [];
  day.tarot.reversals = [];
  day.tarot.reading = [];
  day.tarot.selectedCards = [];
  day.tarot.revealedCards = [];
  day.tarot.ritual = "draw";
  day.tarot.drawnAt = "";
  day.tarot.shuffledAt = new Date().toISOString();
  saveState();
  renderTarot();
  showToast(`已洗牌，请从牌阵中选择 ${getTarotSpread(day.tarot.spread).count} 张牌。`);
}

function startDrawRitual() {
  const day = ensureDay(selectedDate);
  const spread = getTarotSpread(day.tarot.spread);
  day.tarot.question = cleanText(dom.tarotQuestionInput?.value, "", 120);
  day.tarot.cards = [];
  day.tarot.reversals = [];
  day.tarot.reading = [];
  day.tarot.selectedCards = [];
  day.tarot.revealedCards = [];
  day.tarot.deck = day.tarot.deck.length ? day.tarot.deck : shuffleIndices(tarotCards.length);
  day.tarot.deckReversals = [];
  day.tarot.ritual = "draw";
  day.tarot.drawnAt = "";
  saveState();
  renderTarot();
  showToast(`请静下心来，从牌阵中选择 ${spread.count} 张牌。`);
}

function pickTarotCard(order) {
  const day = ensureDay(selectedDate);
  const spread = getTarotSpread(day.tarot.spread);
  const cardIndex = day.tarot.deck[order];
  if (day.tarot.ritual !== "draw" || !tarotDeck[cardIndex]) return;
  if (day.tarot.selectedCards.length >= spread.count) return;
  const card = tarotDeck[cardIndex];
  if (day.tarot.selectedCards.some((item) => item.cardId === card.id)) return;
  const positionIndex = day.tarot.selectedCards.length;
  const positionLabel = spread.positions[positionIndex] || `第 ${positionIndex + 1} 张`;
  day.tarot.selectedCards.push({
    cardId: card.id,
    cardIndex,
    deckOrder: order,
    position: positionKey(positionLabel, positionIndex),
    positionLabel,
    selectedAt: new Date().toISOString(),
  });
  day.tarot.cards = day.tarot.selectedCards.map((item) => item.cardIndex).filter((index) => tarotDeck[index]);
  day.tarot.reversals = [];
  if (day.tarot.selectedCards.length >= spread.count) {
    createReadingFromSelection(day, spread);
    day.tarot.revealedCards = [];
    day.tarot.ritual = "reveal";
    showToast("牌已选好，请逐张翻牌。");
  } else {
    showToast(`${positionLabel}已选。继续选择下一张。`);
  }
  saveState();
  renderTarot();
}

function createReadingFromSelection(day, spread) {
  const usedIds = new Set();
  day.tarot.reading = day.tarot.selectedCards.slice(0, spread.count).map((selection, index) => {
    const positionLabel = selection.positionLabel || spread.positions[index] || `第 ${index + 1} 张`;
    const drawnCard = drawCard(tarotDeck, usedIds, selection.cardId);
    return drawnCard ? {
      ...drawnCard,
      position: positionKey(positionLabel, index),
      positionLabel,
    } : null;
  }).filter(Boolean);
  if (day.tarot.reading.length >= spread.count) {
    syncLegacyCardsFromReading(day);
  }
}

function revealTarotCard(index) {
  const day = ensureDay(selectedDate);
  const spread = getTarotSpread(day.tarot.spread);
  if (day.tarot.ritual !== "reveal" || !day.tarot.reading[index]) return;
  if (!day.tarot.revealedCards.includes(index)) {
    day.tarot.revealedCards.push(index);
  }
  if (day.tarot.revealedCards.length >= spread.count) {
    day.tarot.ritual = "";
    day.tarot.drawnAt = new Date().toISOString();
  }
  saveState();
  renderTarot();
  showToast(day.tarot.ritual ? "继续翻下一张。" : "牌阵已翻开，向下滑动查看解读。");
}

function restartTarotReading() {
  const day = ensureDay(selectedDate);
  day.tarot.cards = [];
  day.tarot.reversals = [];
  day.tarot.reading = [];
  day.tarot.selectedCards = [];
  day.tarot.revealedCards = [];
  day.tarot.deck = [];
  day.tarot.deckReversals = [];
  day.tarot.ritual = "";
  day.tarot.drawnAt = "";
  day.tarot.shuffledAt = "";
  saveState();
  renderTarot();
  showToast("已重置，可以重新开始一局。");
}

function resetIncompleteTarotReading() {
  const day = ensureDay(selectedDate);
  const spread = getTarotSpread(day.tarot.spread);
  const isCompleteReading = !day.tarot.ritual && day.tarot.drawnAt && day.tarot.reading.length >= spread.count;
  if (isCompleteReading) return;
  day.tarot.cards = [];
  day.tarot.reversals = [];
  day.tarot.reading = [];
  day.tarot.selectedCards = [];
  day.tarot.revealedCards = [];
  day.tarot.deck = [];
  day.tarot.deckReversals = [];
  day.tarot.ritual = "";
  day.tarot.drawnAt = "";
  day.tarot.shuffledAt = "";
  saveState();
}

function renderTarot() {
  const day = ensureDay(selectedDate);
  const spread = getTarotSpread(day.tarot.spread);
  const isLanding = !day.tarot.ritual && !day.tarot.reading.length;
  if (dom.tarotQuestionInput && dom.tarotQuestionInput.value !== day.tarot.question) {
    dom.tarotQuestionInput.value = day.tarot.question;
  }
  if (dom.tarotHero) dom.tarotHero.hidden = true;
  if (dom.tarotSpreadTabs) dom.tarotSpreadTabs.hidden = !isLanding;
  if (dom.tarotSpreadHint) dom.tarotSpreadHint.hidden = !isLanding;
  if (dom.tarotReading) dom.tarotReading.hidden = isLanding || ["spread", "shuffle", "draw", "reveal"].includes(day.tarot.ritual);
  renderSpreadTabs(spread);
  if (dom.tarotSpreadHint) {
    dom.tarotSpreadHint.textContent = isLanding ? "先选择牌阵，再写下你想问的问题。" : day.tarot.ritual === "spread" ? "点击牌阵后确认选择，长按牌阵名字查看介绍。" : `${spread.count} 张 · ${spread.use}`;
  }
  if (dom.tarotQuestionField) {
    dom.tarotQuestionField.hidden = !isLanding;
  }
  if (dom.tarotActions) {
    dom.tarotActions.hidden = true;
  }
  if (dom.shuffleTarotButton) {
    dom.shuffleTarotButton.textContent = day.tarot.reading.length ? "重新开始" : day.tarot.ritual === "shuffle" ? "洗牌中" : "洗牌";
    dom.shuffleTarotButton.dataset.action = day.tarot.reading.length ? "restart-tarot" : "shuffle-tarot";
  }
  if (dom.drawTarotButton) {
    dom.drawTarotButton.textContent = day.tarot.ritual === "draw" ? "重新抽牌" : "抽牌";
    dom.drawTarotButton.disabled = day.tarot.ritual === "shuffle";
  }
  if (day.tarot.ritual === "spread") {
    renderSpreadLibrary(day);
  } else if (day.tarot.ritual === "shuffle") {
    renderShuffleRitual(day);
  } else if (day.tarot.ritual === "draw") {
    renderDrawRitual(day, spread);
  } else if (day.tarot.ritual === "reveal") {
    renderRevealRitual(day, spread);
  } else if (isLanding) {
    renderTarotLanding(spread);
  } else {
    renderTarotResult(day, spread);
  }
  dom.tarotReading.innerHTML = renderTarotReading(day, spread);
}

function renderSpreadTabs(activeSpread) {
  if (!dom.tarotSpreadTabs) return;
  dom.tarotSpreadTabs.innerHTML = `
    <button class="is-selected tarot-current-spread" type="button" data-action="open-spread-library">
      <span>选择牌阵</span>
      <strong>${escapeHtml(activeSpread.label)}</strong>
    </button>
  `;
}

function renderTarotLanding(spread) {
  dom.tarotTable.className = "tarot-table tarot-table-landing";
  dom.tarotTable.innerHTML = "";
}

function renderSpreadLibrary(day) {
  const activeSpread = getTarotSpread(day.tarot.spread);
  const pendingSpread = getTarotSpread(pendingSpreadId || activeSpread.id);
  const infoSpread = spreadInfoId ? getTarotSpread(spreadInfoId) : null;
  dom.tarotTable.className = "tarot-table tarot-table-ritual tarot-table-spread-library";
  dom.tarotTable.innerHTML = `
    <div class="tarot-spread-library-stage">
      <div class="tarot-ritual-heading">
        <span>牌阵选择</span>
        <strong>${tarotSpreads.length} 个</strong>
      </div>
      <div class="tarot-spread-library-grid">
        ${tarotSpreads.map((spread) => renderSpreadChoice(spread, activeSpread, pendingSpread)).join("")}
      </div>
      ${renderSpreadConfirmPanel(pendingSpread, infoSpread)}
    </div>
  `;
}

function renderSpreadChoice(spread, activeSpread, pendingSpread) {
  const isActive = spread.id === activeSpread.id;
  const isPending = spread.id === pendingSpread.id;
  return `
    <button class="tarot-spread-choice ${isActive ? "is-active" : ""} ${isPending ? "is-pending" : ""}" type="button" data-action="select-tarot-spread" data-spread="${escapeHtml(spread.id)}" data-spread-info="${escapeHtml(spread.id)}">
      <span>${escapeHtml(spread.category || "牌阵")}</span>
      <strong>${escapeHtml(spread.label)}</strong>
      <em>${spread.count} 张</em>
    </button>
  `;
}

function renderSpreadConfirmPanel(pendingSpread, infoSpread) {
  const spread = infoSpread || pendingSpread;
  return `
    <div class="tarot-spread-confirm">
      <div>
        <span>${escapeHtml(infoSpread ? "牌阵介绍" : "确认选择")}</span>
        <h3>${escapeHtml(spread.label)}</h3>
        <p>${escapeHtml(spread.description || spread.use)}</p>
        <small>${escapeHtml(spread.positions.join(" / "))}</small>
      </div>
      <div class="tarot-spread-confirm-actions">
        <button class="ghost-button" type="button" data-action="close-spread-library">返回</button>
        <button class="primary-button" type="button" data-action="confirm-spread" data-spread="${escapeHtml(spread.id)}">确认选择</button>
      </div>
    </div>
  `;
}

function renderShuffleRitual(day) {
  const turns = Number(day.tarot.shuffleTurns) || 0;
  const direction = day.tarot.shuffleDirection === "clockwise" ? "顺时针" : day.tarot.shuffleDirection === "counterclockwise" ? "逆时针" : "等待打散";
  dom.tarotTable.className = "tarot-table tarot-table-ritual tarot-table-shuffle";
  dom.tarotTable.innerHTML = `
    <div class="tarot-ritual-stage">
      <div class="tarot-ritual-heading">
        <span>洗牌仪式</span>
        <strong>${escapeHtml(direction)}</strong>
      </div>
      <div class="tarot-shuffle-pad" data-shuffle-pad style="--shuffle-angle: ${Number(day.tarot.shuffleAngle) || 0}deg" aria-label="旋转打散牌堆">
        ${Array.from({ length: 38 }, (_, index) => renderShuffleCard(index, turns)).join("")}
      </div>
      <div class="tarot-ritual-meter">
        <span>打散度</span>
        <strong>${Math.min(99, Math.round(turns * 24))}%</strong>
      </div>
      <button class="primary-button tarot-ritual-confirm" type="button" data-action="confirm-shuffle">确认洗牌结束</button>
    </div>
  `;
}

function renderShuffleCard(index, turns = 0) {
  const ring = index % 2 ? 54 : 24;
  const ringY = ring * -1;
  const angle = (360 / 38) * index;
  const returnAngle = -angle - 8;
  const lift = index % 3 === 0 ? -6 : index % 3 === 1 ? 2 : 7;
  const scatter = Math.min(110, turns * 24);
  const driftAngle = (index * 137.5) * Math.PI / 180;
  const driftWeight = 0.35 + (index % 5) * 0.16;
  const driftX = Math.cos(driftAngle) * scatter * driftWeight;
  const driftY = Math.sin(driftAngle) * scatter * driftWeight;
  const liveSpin = (index % 2 ? -1 : 1) * scatter * 0.34;
  return `<span class="tarot-shuffle-card" style="--card-angle: ${angle}deg; --card-return: ${returnAngle}deg; --card-ring-y: ${ringY}px; --card-lift: ${lift}px; --live-x: ${driftX}px; --live-y: ${driftY}px; --live-spin: ${liveSpin}deg"></span>`;
}

function renderDrawRitual(day, spread) {
  const selectedCount = day.tarot.selectedCards.length;
  const pickedIds = new Set(day.tarot.selectedCards.map((item) => item.cardId));
  const readyToReveal = selectedCount >= spread.count;
  dom.tarotTable.className = `tarot-table tarot-table-ritual tarot-table-spread-select tarot-table-${spread.id}`;
  dom.tarotTable.innerHTML = `
    <section class="tarot-draw-panel" aria-label="抽牌仪式">
      <div class="tarot-draw-actions">
        <button class="ghost-button" type="button" data-action="shuffle-tarot">重新洗牌</button>
        <button class="primary-button" type="button" data-action="reveal-tarot" ${readyToReveal ? "" : "disabled"}>翻牌</button>
      </div>
      <p class="tarot-guide-text">
        ${readyToReveal ? "三张牌已选好，点击翻牌。" : `请静下心来，从牌阵中选择 ${spread.count} 张牌。`}
      </p>
      <div class="tarot-pick-status">
        <strong>${selectedCount} / ${spread.count}</strong>
        <span>${escapeHtml(spread.label)}</span>
      </div>
      <div class="tarot-spread-scroll" aria-label="矩形塔罗牌阵">
        <div class="tarot-spread-row" id="tarotSpreadRow">
          ${day.tarot.deck.map((cardIndex, order) => renderSpreadCard(cardIndex, order, pickedIds.has(tarotDeck[cardIndex]?.id))).join("")}
        </div>
      </div>
      <div class="tarot-selected-slots">
        ${spread.positions.map((position, index) => renderSelectedSlot(position, day.tarot.selectedCards[index], index)).join("")}
      </div>
    </section>
  `;
}

function renderRevealRitual(day, spread) {
  const revealed = new Set(day.tarot.revealedCards);
  dom.tarotTable.className = `tarot-table tarot-table-ritual tarot-table-reveal tarot-table-${spread.id}`;
  dom.tarotTable.innerHTML = `
    <section class="tarot-reveal-panel" aria-label="翻牌仪式">
      <div class="tarot-ritual-heading">
        <span>翻牌仪式</span>
        <strong>${revealed.size} / ${spread.count}</strong>
      </div>
      <p class="tarot-guide-text">请按你选择的顺序，一张一张翻开。</p>
      <div class="tarot-reveal-slots ${spreadLayoutClass(spread)}">
        ${spread.positions.map((position, index) => renderRevealSlot(position, day.tarot.reading[index], index, revealed.has(index))).join("")}
      </div>
    </section>
  `;
}

function renderRevealSlot(position, card, index, revealed) {
  if (!card) return "";
  return `
    <article class="tarot-slot tarot-reveal-slot ${revealed ? "is-revealed" : ""}">
      ${revealed ? renderTarotSlot(position, card, index).replace(/^\s*<article class="tarot-slot is-revealed[^>]*>/, "").replace(/<\/article>\s*$/, "") : `
        <button class="tarot-flip-card" type="button" data-action="reveal-tarot-card" data-index="${index}" aria-label="翻开${escapeHtml(position)}">
          <div class="tarot-card-back"></div>
          <small>${escapeHtml(position)}</small>
        </button>
      `}
    </article>
  `;
}

function renderSpreadCard(cardIndex, order, selected) {
  const card = tarotDeck[cardIndex];
  return `
    <button class="tarot-spread-card ${selected ? "is-picked" : ""}" type="button" data-action="pick-tarot-card" data-order="${order}" aria-label="选择一张塔罗牌" ${selected ? "disabled" : ""}>
      <span class="tarot-spread-card-mark" aria-hidden="true"></span>
      <span class="sr-only">${escapeHtml(card?.name || "塔罗牌")}</span>
    </button>
  `;
}

function renderSelectedSlot(position, selectedCard, index) {
  return `
    <article class="tarot-slot tarot-selected-slot ${selectedCard ? "is-selected" : ""}" data-position="${escapeHtml(positionKey(position, index))}">
      <small>${escapeHtml(position)}</small>
      <div class="slot-card">
        ${selectedCard ? `<div class="tarot-card-back tarot-selected-card-back" aria-label="${escapeHtml(position)}已选"></div>` : `<div class="tarot-empty-card" aria-hidden="true"></div>`}
      </div>
    </article>
  `;
}

function renderTarotResult(day, spread) {
  dom.tarotTable.className = `tarot-table tarot-table-result tarot-table-${spread.id} ${spreadLayoutClass(spread)}`;
  dom.tarotTable.innerHTML = spread.positions
    .map((position, index) => renderTarotSlot(position, day.tarot.reading[index], index))
    .join("");
}

function spreadLayoutClass(spread) {
  if (spread.id === "celtic-cross") return "tarot-layout-celtic";
  if (spread.id === "love" || spread.id === "relationship-attention") return "tarot-layout-triangle";
  if (spread.count === 1) return "tarot-layout-one";
  if (spread.count === 3) return "tarot-layout-three";
  if (spread.count === 4) return "tarot-layout-four";
  if (spread.count === 5) return "tarot-layout-five";
  return "tarot-layout-grid";
}

function renderTarotSlot(position, readingCard, index) {
  if (!readingCard) {
    return `
      <article class="tarot-slot is-empty">
        <div class="tarot-card-back"><span>${index + 1}</span></div>
        <small>${escapeHtml(position)}</small>
      </article>
    `;
  }
  const reversed = readingCard.orientation === "reversed";
  const label = orientationLabel(readingCard.orientation);
  return `
    <article class="tarot-slot is-revealed ${reversed ? "is-reversed" : ""}">
      <div class="tarot-card-front ${reversed ? "is-reversed" : ""}">
        <span class="tarot-image-fallback">${escapeHtml(readingCard.name)}</span>
        <img class="tarot-card-image card-image ${reversed ? "reversed" : ""}" src="${escapeHtml(readingCard.image)}" alt="${escapeHtml(readingCard.name)} ${label}" loading="lazy" onerror="this.hidden=true;this.parentElement.classList.add('is-image-missing');" />
      </div>
      <small>${escapeHtml(position)}</small>
      <strong class="tarot-card-name">${escapeHtml(readingCard.name)} · ${label}</strong>
    </article>
  `;
}

function renderTarotReading(day, spread) {
  if (day.tarot.ritual === "spread") {
    return `<p class="tarot-empty-reading">正在选择牌阵。确认后会直接进入洗牌仪式。</p>`;
  }
  if (day.tarot.ritual === "shuffle") {
    return `<p class="tarot-empty-reading">正在洗牌：按住牌堆绕圈，顺时针或逆时针都可以。觉得够了就确认洗牌结束。</p>`;
  }
  if (day.tarot.ritual === "draw") {
    const selectedCount = day.tarot.selectedCards.length;
    return `<p class="tarot-empty-reading">正在选牌：${selectedCount} / ${spread.count}。选满后点击“翻牌”查看牌面。</p>`;
  }
  if (day.tarot.ritual === "reveal") {
    return `<p class="tarot-empty-reading">逐张翻牌中。全部翻完后，解读会出现在下方。</p>`;
  }
  if (!day.tarot.reading.length) {
    return `<p class="tarot-empty-reading">选择牌阵后点击抽牌，牌会横向铺开，你可以手动选择。</p>`;
  }
  const spreadSummary = `<div class="tarot-reading-meta"><span>牌阵</span><strong>${escapeHtml(spread.label)} · ${spread.count} 张</strong></div>`;
  const question = day.tarot.question ? `<p class="tarot-question-display">${escapeHtml(day.tarot.question)}</p>` : "";
  const rows = day.tarot.reading.map((card, positionIndex) => {
    const position = card.positionLabel || spread.positions[positionIndex] || `第 ${positionIndex + 1} 张`;
    return `
      <article class="tarot-meaning-row">
        <span>${escapeHtml(position)}</span>
        <div>
          <h3>${escapeHtml(card.name)} · ${orientationLabel(card.orientation)} · ${escapeHtml(card.keyword || card.suit)}</h3>
          <p>${escapeHtml(card.meaning)}</p>
        </div>
      </article>
    `;
  }).join("");
  return `${spreadSummary}${question}<div class="tarot-meaning-list">${rows}</div><div class="tarot-reading-actions"><button class="ghost-button" type="button" data-action="restart-tarot">重置</button><a class="primary-button" href="./index.html#today-stage">返回游戏主页</a></div>`;
}

function startShuffleGesture(event) {
  const pad = event.target.closest("[data-shuffle-pad]");
  if (!pad) return;
  const day = ensureDay(selectedDate);
  if (day.tarot.ritual !== "shuffle") return;
  const angle = pointerAngle(event, pad);
  shuffleGesture = {
    pointerId: event.pointerId,
    pad,
    lastAngle: angle,
    totalDelta: 0,
  };
  pad.setPointerCapture?.(event.pointerId);
  event.preventDefault();
}

function startSpreadInfoPress(event) {
  const choice = event.target.closest("[data-spread-info]");
  if (!choice) return;
  window.clearTimeout(spreadPressTimer);
  spreadPressTimer = window.setTimeout(() => {
    spreadInfoId = choice.dataset.spreadInfo;
    pendingSpreadId = choice.dataset.spreadInfo;
    spreadInfoJustOpened = true;
    renderTarot();
  }, 520);
}

function clearSpreadInfoPress() {
  window.clearTimeout(spreadPressTimer);
}

function moveShuffleGesture(event) {
  if (!shuffleGesture || shuffleGesture.pointerId !== event.pointerId) return;
  const day = ensureDay(selectedDate);
  if (day.tarot.ritual !== "shuffle") return;
  const angle = pointerAngle(event, shuffleGesture.pad);
  const delta = normalizeAngleDelta(angle - shuffleGesture.lastAngle);
  if (Math.abs(delta) < 0.5) return;
  shuffleGesture.lastAngle = angle;
  shuffleGesture.totalDelta += Math.abs(delta);
  day.tarot.shuffleAngle = (Number(day.tarot.shuffleAngle) || 0) + delta;
  day.tarot.shuffleTurns = (Number(day.tarot.shuffleTurns) || 0) + Math.abs(delta) / 360;
  day.tarot.shuffleDirection = delta > 0 ? "clockwise" : "counterclockwise";
  shuffleGesture.pad.style.setProperty("--shuffle-angle", `${day.tarot.shuffleAngle}deg`);
  updateShuffleCardScatter(day);
  updateShuffleRitualLabels(day);
  event.preventDefault();
}

function endShuffleGesture(event) {
  if (!shuffleGesture || shuffleGesture.pointerId !== event.pointerId) return;
  const day = ensureDay(selectedDate);
  if (day.tarot.ritual === "shuffle" && Math.abs(shuffleGesture.totalDelta) > 8) {
    day.tarot.deck = remixDeck(day.tarot.deck.length ? day.tarot.deck : shuffleIndices(tarotCards.length));
    saveState();
  }
  shuffleGesture.pad.releasePointerCapture?.(event.pointerId);
  shuffleGesture = null;
}

function updateShuffleRitualLabels(day) {
  const direction = day.tarot.shuffleDirection === "clockwise" ? "顺时针" : "逆时针";
  const directionNode = dom.tarotTable?.querySelector(".tarot-ritual-heading strong");
  const meterNode = dom.tarotTable?.querySelector(".tarot-ritual-meter strong");
  if (directionNode) directionNode.textContent = direction;
  if (meterNode) meterNode.textContent = `${Math.min(99, Math.round((Number(day.tarot.shuffleTurns) || 0) * 24))}%`;
}

function updateShuffleCardScatter(day) {
  const cards = dom.tarotTable?.querySelectorAll(".tarot-shuffle-card") || [];
  const scatter = Math.min(110, (Number(day.tarot.shuffleTurns) || 0) * 24);
  cards.forEach((card, index) => {
    const driftAngle = (index * 137.5) * Math.PI / 180;
    const driftWeight = 0.35 + (index % 5) * 0.16;
    const driftX = Math.cos(driftAngle) * scatter * driftWeight;
    const driftY = Math.sin(driftAngle) * scatter * driftWeight;
    const liveSpin = (index % 2 ? -1 : 1) * scatter * 0.34;
    card.style.setProperty("--live-x", `${driftX}px`);
    card.style.setProperty("--live-y", `${driftY}px`);
    card.style.setProperty("--live-spin", `${liveSpin}deg`);
  });
}

function pointerAngle(event, element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  return Math.atan2(event.clientY - centerY, event.clientX - centerX) * 180 / Math.PI;
}

function normalizeAngleDelta(delta) {
  if (delta > 180) return delta - 360;
  if (delta < -180) return delta + 360;
  return delta;
}

function normalizeTarotState(tarot) {
  if (!tarot || typeof tarot !== "object") return defaultTarotState();
  const spread = getTarotSpread(tarot.spread).id;
  const question = cleanText(tarot.question, "", 120);
  if (Number.isFinite(Number(tarot.index)) && tarotCards[Math.round(Number(tarot.index))]) {
    return {
      spread: "one",
      question,
      cards: [Math.round(Number(tarot.index))],
      reversals: [Boolean(tarot.reversed)],
      reading: legacyReadingFromCards([Math.round(Number(tarot.index))], [Boolean(tarot.reversed)], getTarotSpread("one")),
      selectedCards: [],
      revealedCards: [0],
      deck: [],
      deckReversals: [],
      ritual: "",
      drawnAt: tarot.drawnAt || new Date().toISOString(),
      shuffledAt: tarot.shuffledAt || "",
    };
  }
  const spreadCount = getTarotSpread(spread).count;
  const cards = normalizeCardIndexes(tarot.cards).slice(0, spreadCount);
  const deck = normalizeCardIndexes(tarot.deck);
  const reversals = normalizeBooleanList(tarot.reversals).slice(0, cards.length);
  const reading = normalizeReading(tarot.reading, spread);
  const ritual = tarot.ritual || (tarot.pickMode ? "draw" : "");
  const normalizedDeck = deck.length ? deck : ritual === "draw" ? shuffleIndices(tarotDeck.length) : [];
  const selectedCards = normalizeSelectedCards(tarot.selectedCards, spread).slice(0, spreadCount);
  const legacySelectedCards = selectedCards.length ? selectedCards : ritual === "draw" ? selectedCardsFromIndexes(cards, getTarotSpread(spread)) : [];
  const normalizedReading = reading.length
    ? reading.slice(0, spreadCount)
    : legacySelectedCards.length ? [] : legacyReadingFromCards(cards, reversals, getTarotSpread(spread));
  const revealedCards = normalizeRevealedCards(tarot.revealedCards, spreadCount, normalizedReading.length);
  const cardIndexes = normalizedReading.length
    ? normalizedReading.map((item) => cardIndexById(item.cardId)).filter((index) => index >= 0)
    : legacySelectedCards.map((item) => item.cardIndex).filter((index) => tarotDeck[index]);
  return {
    spread,
    question,
    cards: cardIndexes,
    reversals: normalizedReading.map((item) => item.orientation === "reversed"),
    reading: normalizedReading,
    selectedCards: legacySelectedCards,
    revealedCards,
    deck: normalizedDeck,
    deckReversals: [],
    ritual: normalizeRitual(ritual, legacySelectedCards.length || normalizedReading.length, spreadCount, normalizedReading.length > 0, revealedCards.length),
    shuffleAngle: Number.isFinite(Number(tarot.shuffleAngle)) ? Number(tarot.shuffleAngle) : 0,
    shuffleTurns: Number.isFinite(Number(tarot.shuffleTurns)) ? Number(tarot.shuffleTurns) : 0,
    shuffleDirection: tarot.shuffleDirection === "clockwise" || tarot.shuffleDirection === "counterclockwise" ? tarot.shuffleDirection : "",
    drawnAt: tarot.drawnAt || "",
    shuffledAt: tarot.shuffledAt || "",
  };
}

function normalizeRitual(ritual, cardCount, spreadCount, hasReading = false, revealedCount = 0) {
  if (ritual === "spread") return "spread";
  if (ritual === "shuffle") return "shuffle";
  if (ritual === "reveal" && hasReading && revealedCount < spreadCount) return "reveal";
  if (ritual === "draw" && !hasReading && cardCount <= spreadCount) return "draw";
  return "";
}

function normalizeCardIndexes(value) {
  return Array.isArray(value)
    ? value
        .map((index) => Math.round(Number(index)))
        .filter((index, position, list) => tarotCards[index] && list.indexOf(index) === position)
    : [];
}

function normalizeBooleanList(value) {
  return Array.isArray(value) ? value.map(Boolean) : [];
}

function selectedCardsFromIndexes(cards, spread) {
  return cards.map((cardIndex, index) => {
    const card = tarotDeck[cardIndex];
    if (!card) return null;
    const positionLabel = spread.positions[index] || `第 ${index + 1} 张`;
    return {
      cardId: card.id,
      cardIndex,
      deckOrder: index,
      position: positionKey(positionLabel, index),
      positionLabel,
      selectedAt: "",
    };
  }).filter(Boolean);
}

function normalizeSelectedCards(value, spreadId) {
  if (!Array.isArray(value)) return [];
  const spread = getTarotSpread(spreadId);
  const usedIds = new Set();
  return value.map((item, index) => {
    if (!item || typeof item !== "object") return null;
    const cardIndex = tarotDeck[item.cardIndex] ? Number(item.cardIndex) : cardIndexById(item.cardId);
    const card = tarotDeck[cardIndex];
    if (!card || usedIds.has(card.id)) return null;
    usedIds.add(card.id);
    const positionLabel = cleanText(item.positionLabel || spread.positions[index] || `第 ${index + 1} 张`, spread.positions[index] || `第 ${index + 1} 张`, 40);
    return {
      cardId: card.id,
      cardIndex,
      deckOrder: Number.isFinite(Number(item.deckOrder)) ? Math.max(0, Math.round(Number(item.deckOrder))) : index,
      position: cleanText(item.position || positionKey(positionLabel, index), positionKey(positionLabel, index), 40),
      positionLabel,
      selectedAt: cleanText(item.selectedAt, "", 40),
    };
  }).filter(Boolean);
}

function normalizeRevealedCards(value, spreadCount, readingCount) {
  if (readingCount >= spreadCount && !Array.isArray(value)) {
    return Array.from({ length: spreadCount }, (_, index) => index);
  }
  return Array.isArray(value)
    ? value
        .map((index) => Math.round(Number(index)))
        .filter((index, position, list) => index >= 0 && index < spreadCount && list.indexOf(index) === position)
    : [];
}

function defaultTarotState() {
  return { spread: "one", question: "", cards: [], reversals: [], reading: [], selectedCards: [], revealedCards: [], deck: [], deckReversals: [], ritual: "", shuffleAngle: 0, shuffleTurns: 0, shuffleDirection: "", drawnAt: "", shuffledAt: "" };
}

function getTarotSpread(id) {
  return tarotSpreads.find((spread) => spread.id === id) || tarotSpreads[0];
}

function shuffleIndices(length) {
  const pool = Array.from({ length }, (_, index) => index);
  return remixDeck(pool);
}

function remixDeck(deck) {
  const pool = [...deck];
  for (let index = pool.length - 1; index > 0; index -= 1) {
    const pick = Math.floor(Math.random() * (index + 1));
    [pool[index], pool[pick]] = [pool[pick], pool[index]];
  }
  return pool;
}

function drawCard(deck, usedIds = new Set(), forcedCardId = "") {
  if (!Array.isArray(deck) || !deck.length) return null;
  const availableCards = deck.filter((card) => card?.id && !usedIds.has(card.id));
  if (!availableCards.length) return null;
  const card = forcedCardId
    ? availableCards.find((item) => item.id === forcedCardId)
    : availableCards[Math.floor(Math.random() * availableCards.length)];
  if (!card) return null;
  usedIds.add(card.id);
  const orientation = Math.random() < 0.5 ? "upright" : "reversed";
  return readingCardFromDeckCard(card, orientation);
}

function drawOneCard(deck, usedIds = new Set()) {
  return drawCard(deck, usedIds);
}

function drawThreeCards() {
  const day = ensureDay(selectedDate);
  const usedIds = new Set();
  const spread = getTarotSpread("past-present-future");
  day.tarot.spread = spread.id;
  day.tarot.reading = spread.positions.map((label, index) => {
    const card = drawOneCard(tarotDeck, usedIds);
    return card ? {
      ...card,
      position: positionKey(label, index),
      positionLabel: label,
    } : null;
  }).filter(Boolean);
  syncLegacyCardsFromReading(day);
  day.tarot.drawnAt = new Date().toISOString();
  day.tarot.ritual = "";
  saveState();
  renderTarot();
}

function readingCardFromDeckCard(card, orientation, positionLabel = "", positionIndex = 0) {
  const normalizedOrientation = orientation === "reversed" ? "reversed" : "upright";
  const meaning = normalizedOrientation === "upright"
    ? card.uprightMeaning || card.meaning
    : card.reversedMeaning || "这张牌处于逆位，含义偏向阻滞、内在化、延迟或反向表达。";
  return {
    cardId: card.id,
    name: card.name || card.title,
    suit: card.suit,
    image: card.image,
    orientation: normalizedOrientation,
    position: positionKey(positionLabel, positionIndex),
    positionLabel,
    keyword: card.keyword,
    meaning,
  };
}

function syncLegacyCardsFromReading(day) {
  day.tarot.cards = day.tarot.reading
    .map((item) => cardIndexById(item.cardId))
    .filter((index) => index >= 0);
  day.tarot.reversals = day.tarot.reading.map((item) => item.orientation === "reversed");
}

function legacyReadingFromCards(cards, reversals, spread) {
  return cards.map((index, positionIndex) => {
    const card = tarotDeck[index];
    if (!card) return null;
    const positionLabel = spread.positions[positionIndex] || `第 ${positionIndex + 1} 张`;
    return readingCardFromDeckCard(card, reversals[positionIndex] ? "reversed" : "upright", positionLabel, positionIndex);
  }).filter(Boolean);
}

function normalizeReading(value, spreadId) {
  if (!Array.isArray(value)) return [];
  const spread = getTarotSpread(spreadId);
  return value.map((item, index) => {
    if (!item || typeof item !== "object") return null;
    const card = tarotDeck.find((candidate) => candidate.id === item.cardId) || tarotDeck.find((candidate) => candidate.name === item.name || candidate.title === item.name);
    if (!card) return null;
    const orientation = item.orientation === "reversed" ? "reversed" : "upright";
    const positionLabel = cleanText(item.positionLabel || spread.positions[index] || `第 ${index + 1} 张`, spread.positions[index] || `第 ${index + 1} 张`, 40);
    const orientationMeaning = orientation === "upright"
      ? card.uprightMeaning || card.meaning
      : card.reversedMeaning || "这张牌处于逆位，含义偏向阻滞、内在化、延迟或反向表达。";
    return {
      ...readingCardFromDeckCard(card, orientation, positionLabel, index),
      position: cleanText(item.position || positionKey(positionLabel, index), positionKey(positionLabel, index), 40),
      meaning: cleanText(orientationMeaning, orientationMeaning, 260),
    };
  }).filter(Boolean);
}

function cardIndexById(cardId) {
  return tarotDeck.findIndex((card) => card.id === cardId);
}

function orientationLabel(orientation) {
  return orientation === "reversed" ? "逆位" : "正位";
}

function positionKey(label, index) {
  const known = {
    "过去": "past",
    "现在": "present",
    "未来": "future",
    "我": "self",
    "对方": "other",
    "关系": "relationship",
  };
  return known[label] || `position_${index + 1}`;
}

function imageUrl(file) {
  return `${TAROT_IMAGE_PATH}${encodeURIComponent(file)}`;
}

function cleanText(value, fallback = "", max = 80) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim().slice(0, max);
  return text || String(fallback || "").slice(0, max);
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  dom.toast.textContent = message;
  dom.toast.hidden = false;
  toastTimer = window.setTimeout(() => {
    dom.toast.hidden = true;
  }, 2400);
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
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

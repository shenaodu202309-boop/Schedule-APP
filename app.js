const STORAGE_KEY = "private-schedule-app-v1";
const SUPABASE_CONFIG = {
  url: "https://hduussoaxnpqrzmwbqtj.supabase.co",
  anonKey: "sb_publishable_kkFeRKdaf2ReNHaJSJIZDg_SkG8wPgL",
};
const AUTH_REDIRECT_URL = "https://shenaodu202309-boop.github.io/Schedule-APP/";
const CLOUD_BACKUP_SCHEMA_VERSION = "cloud-backup-v1";
const CLOUD_LOCAL_META_KEY = "private-schedule-cloud-sync-meta-v1";
const DAY_MS = 24 * 60 * 60 * 1000;
const DAY_WIDTH = 112;
const HOUR_HEIGHT = 64;
const DAY_HOUR_WIDTH = 34;
const START_HOUR = 0;
const END_HOUR = 24;
const COLORS = ["#d7ff2f", "#ff4f6d", "#ff9f1c", "#3d7dff", "#20d47b", "#9b5cff", "#00d2ff"];
const DEFAULT_DATE_MARK_COLOR = "#ff4f6d";
const LANGUAGES = ["zh", "en"];
const UNDO_LIMIT = 24;
const JOURNAL_CANVAS_WIDTH = 1120;
const JOURNAL_CANVAS_HEIGHT = 1520;
const JOURNAL_AUDIO_PIXELS_PER_SECOND = 26;
const JOURNAL_NOTEBOOK_COLORS = ["#2f77ff", "#18c94b", "#ffd875", "#ff74b8", "#9e67ff", "#ff8a3d"];
const JOURNAL_COVER_STYLES = [
  { id: "blue", color: "#2f77ff", label: "Engineering" },
  { id: "green", color: "#18c94b", label: "Data" },
  { id: "gold", color: "#ffd875", label: "Notes" },
  { id: "pink", color: "#ff74b8", label: "Design" },
  { id: "purple", color: "#9e67ff", label: "Dream" },
  { id: "orange", color: "#ff8a3d", label: "Ideas" },
];
const JOURNAL_MOOD_EMOJI = {
  calm: "😌",
  happy: "😊",
  tired: "😴",
  sensitive: "🥺",
  idea: "✨",
};
const JOURNAL_MOODS = Object.keys(JOURNAL_MOOD_EMOJI);
const REVIEW_MOODS = [
  { id: "happy", emoji: "😊", zh: "开心", en: "Happy" },
  { id: "calm", emoji: "😌", zh: "平静", en: "Calm" },
  { id: "tired", emoji: "😴", zh: "疲惫", en: "Tired" },
  { id: "sensitive", emoji: "🥺", zh: "敏感", en: "Sensitive" },
  { id: "idea", emoji: "✨", zh: "灵感", en: "Inspired" },
];
const REVIEW_WEATHER = [
  { id: "sunny", emoji: "☀️", zh: "晴", en: "Sunny" },
  { id: "cloudy", emoji: "☁️", zh: "阴", en: "Cloudy" },
  { id: "rainy", emoji: "🌧️", zh: "雨", en: "Rain" },
  { id: "snowy", emoji: "❄️", zh: "雪", en: "Snow" },
  { id: "windy", emoji: "🍃", zh: "风", en: "Wind" },
];
const REVIEW_FEELS = [
  { id: "cold", emoji: "🥶", zh: "偏冷", en: "Cold" },
  { id: "ok", emoji: "🙂", zh: "刚好", en: "Just right" },
  { id: "hot", emoji: "🥵", zh: "偏热", en: "Hot" },
];
const FIXED_HOLIDAYS = {
  "01-01": { zh: "元旦", en: "New Year", type: "holiday" },
  "02-14": { zh: "情人节", en: "Valentine's Day", type: "international" },
  "03-08": { zh: "妇女节", en: "Women's Day", type: "international" },
  "04-01": { zh: "愚人节", en: "April Fools", type: "international" },
  "05-01": { zh: "劳动节", en: "Labor Day", type: "holiday" },
  "06-01": { zh: "儿童节", en: "Children's Day", type: "international" },
  "07-04": { zh: "美国独立日", en: "US Independence Day", type: "international" },
  "10-01": { zh: "国庆节", en: "China National Day", type: "holiday" },
  "10-31": { zh: "万圣夜", en: "Halloween", type: "international" },
  "12-24": { zh: "平安夜", en: "Christmas Eve", type: "international" },
  "12-25": { zh: "圣诞节", en: "Christmas", type: "international" },
};
const YEAR_HOLIDAYS = {
  "2026-02-17": { zh: "春节", en: "Lunar New Year", type: "holiday" },
  "2026-04-05": { zh: "清明节", en: "Qingming Festival", type: "holiday" },
  "2026-06-19": { zh: "端午节", en: "Dragon Boat Festival", type: "holiday" },
  "2026-09-25": { zh: "中秋节", en: "Mid-Autumn Festival", type: "holiday" },
};
const I18N = {
  appKicker: { zh: "私人排期", en: "Private Schedule" },
  appTitle: { zh: "私人排期", en: "Private Schedule" },
  language: { zh: "语言", en: "Language" },
  rangeStart: { zh: "起始", en: "Start" },
  rangeDays: { zh: "天数", en: "Days" },
  previousRange: { zh: "上一段", en: "Previous" },
  nextRange: { zh: "下一段", en: "Next" },
  today: { zh: "今天", en: "Today" },
  navPlan: { zh: "计划", en: "Plan" },
  navToday: { zh: "今天", en: "Today" },
  navStats: { zh: "复盘", en: "Stats" },
  navJournal: { zh: "日记", en: "Journal" },
  relationshipArchive: { zh: "人际档案库", en: "Relationship Archive" },
  relationshipArchiveComing: { zh: "人际档案库正在研发中", en: "Relationship Archive is in development." },
  relationshipArchiveDeveloping: { zh: "人际档案库正在研发中", en: "Relationship Archive is in development." },
  newProject: { zh: "新建长期项目", en: "New Long Project" },
  projectsMetric: { zh: "项目", en: "Projects" },
  tasksMetric: { zh: "任务", en: "Tasks" },
  plannedMetric: { zh: "计划", en: "Planned" },
  dates: { zh: "日期", en: "Dates" },
  dailyReport: { zh: "日报", en: "Daily Report" },
  reviewNote: { zh: "复盘备注", en: "Review Notes" },
  reviewMood: { zh: "心情", en: "Mood" },
  reviewWeather: { zh: "天气", en: "Weather" },
  reviewFeel: { zh: "体感", en: "Feels" },
  notePlaceholder: { zh: "今天的状态、卡点、明天要顺手接上的事", en: "Today's state, blockers, and tomorrow's next step" },
  timelineKicker: { zh: "时间轴", en: "Timeline" },
  longProjects: { zh: "长期项目", en: "Long Projects" },
  newTask: { zh: "新建小任务", en: "New Task" },
  export: { zh: "导出", en: "Export" },
  import: { zh: "导入", en: "Import" },
  dayPlanKicker: { zh: "每日计划", en: "Day Plan" },
  list: { zh: "清单", en: "List" },
  projectName: { zh: "项目名称", en: "Project Name" },
  startDate: { zh: "开始日期", en: "Start Date" },
  durationDays: { zh: "持续天数", en: "Duration Days" },
  color: { zh: "颜色", en: "Color" },
  goal: { zh: "目标", en: "Goal" },
  projectComplete: { zh: "完成长期任务", en: "Complete Project" },
  projectVictory: { zh: "长期项目完成", en: "Long Project Complete" },
  projectVictoryText: { zh: "太棒了，今天完成了：{title}", en: "Great work. Completed today: {title}" },
  delete: { zh: "删除", en: "Delete" },
  cancel: { zh: "取消", en: "Cancel" },
  save: { zh: "保存", en: "Save" },
  taskText: { zh: "任务文字", en: "Task Text" },
  project: { zh: "所属项目", en: "Project" },
  date: { zh: "日期", en: "Date" },
  startTime: { zh: "开始时间", en: "Start Time" },
  durationHours: { zh: "时长", en: "Duration" },
  spanDays: { zh: "跨天长度", en: "Timeline Days" },
  status: { zh: "状态", en: "Status" },
  statusTodo: { zh: "未完成", en: "To Do" },
  statusDone: { zh: "已完成", en: "Done" },
  statusMissed: { zh: "未做完", en: "Missed" },
  taskReminder: { zh: "闹钟", en: "Alarm" },
  reminderOff: { zh: "关闭", en: "Off" },
  reminderAtStart: { zh: "开始提醒", en: "At Start" },
  reminderVolume: { zh: "音量", en: "Volume" },
  reminderSound: { zh: "音乐", en: "Sound" },
  volumeLow: { zh: "低", en: "Low" },
  volumeMedium: { zh: "中", en: "Medium" },
  volumeHigh: { zh: "高", en: "High" },
  soundSoft: { zh: "柔和", en: "Soft" },
  soundBright: { zh: "清亮", en: "Bright" },
  soundPulse: { zh: "节奏", en: "Pulse" },
  reminderAlert: { zh: "任务开始了", en: "Task started" },
  notificationPermissionDenied: { zh: "通知权限没有开启，请在手机系统设置里允许通知。", en: "Notification permission is off. Please allow notifications in system settings." },
  details: { zh: "细节", en: "Details" },
  close: { zh: "关闭", en: "Close" },
  dailyScore: { zh: "当天评分", en: "Daily score" },
  dateList: { zh: "日期列表", en: "Date list" },
  projectTimeline: { zh: "项目时间轴", en: "Project timeline" },
  daySchedule: { zh: "当天时间块", en: "Day schedule" },
  liveEstimate: { zh: "实时预估", en: "Live estimate" },
  autoGenerated: { zh: "已自动生成", en: "Auto-generated" },
  planSuffix: { zh: "安排", en: "Plan" },
  completed: { zh: "已完成", en: "Completed" },
  unfinished: { zh: "未完成", en: "Unfinished" },
  none: { zh: "暂无", en: "None yet" },
  allDone: { zh: "全部完成", en: "All done" },
  noProjects: { zh: "还没有项目", en: "No projects yet" },
  noTasksForDay: { zh: "这一天还没有安排", en: "No tasks planned for this day" },
  addTask: { zh: "添加任务", en: "Add task" },
  addTaskToProject: { zh: "给这个项目加任务", en: "Add task to this project" },
  addTaskToProjectShort: { zh: "＋", en: "+" },
  blockActionTitle: { zh: "条形操作", en: "Block actions" },
  copyBlock: { zh: "复制", en: "Copy" },
  splitBlock: { zh: "拆分", en: "Split" },
  pasteBlock: { zh: "粘贴", en: "Paste" },
  customDateLabel: { zh: "手动标注", en: "Custom Label" },
  customDatePlaceholder: { zh: "生日、纪念日、考试日", en: "Birthday, anniversary, exam" },
  markDate: { zh: "标注", en: "Mark" },
  clearMark: { zh: "清除", en: "Clear" },
  specialDate: { zh: "特殊日期", en: "Special Date" },
  dateMarkDialogTitle: { zh: "标注日期", en: "Mark Date" },
  noDateMarks: { zh: "暂无标记", en: "No marks" },
  builtInHoliday: { zh: "节假日", en: "Holiday" },
  editProject: { zh: "编辑项目", en: "Edit project" },
  progress: { zh: "完成度", en: "Progress" },
  noGoal: { zh: "未填写目标", en: "No goal yet" },
  projectDialogNew: { zh: "新建长期项目", en: "New Long Project" },
  projectDialogEdit: { zh: "编辑长期项目", en: "Edit Long Project" },
  taskDialogNew: { zh: "新建小任务", en: "New Task" },
  taskDialogTodayNew: { zh: "新建今天任务", en: "New Today Task" },
  taskDialogEdit: { zh: "编辑小任务", en: "Edit Task" },
  toggleStatus: { zh: "切换完成状态", en: "Change status" },
  confirmDeleteProject: { zh: "确定删除这个长期项目吗？里面的小任务也会一起删除。", en: "Delete this long project? Its tasks will be deleted too." },
  confirmDeleteTask: { zh: "确定删除这个小任务吗？", en: "Delete this task?" },
  confirmDeleteJournal: { zh: "确定删除这篇日记吗？", en: "Delete this journal entry?" },
  undo: { zh: "撤销", en: "Undo" },
  undoUnavailable: { zh: "暂无可撤销操作", en: "Nothing to undo" },
  journalKicker: { zh: "私人日记", en: "Private Journal" },
  journalTitle: { zh: "日记本", en: "Journal" },
  journalOpen: { zh: "日记", en: "Journal" },
  journalNew: { zh: "新建", en: "New" },
  journalShelfTitle: { zh: "我的手帐", en: "My Notebooks" },
  journalShelfHint: { zh: "选择一本本子开始记录", en: "Choose a notebook" },
  journalAddNotebook: { zh: "新建本子", en: "New Notebook" },
  journalBackShelf: { zh: "本子区", en: "Shelf" },
  journalRenameNotebook: { zh: "改名", en: "Rename" },
  journalCover: { zh: "封面", en: "Cover" },
  journalCoverColor: { zh: "封面颜色", en: "Cover color" },
  journalRemoveCover: { zh: "删封面图", en: "Remove image" },
  journalConfirmRemoveCover: { zh: "确定删除这本本子的封面图片吗？", en: "Remove this notebook cover image?" },
  journalDeleteNotebook: { zh: "删除本子", en: "Delete notebook" },
  journalConfirmDeleteNotebook: { zh: "确定删除这本本子吗？里面的草稿也会一起删除。", en: "Delete this notebook? Its canvas will be deleted too." },
  journalAddPage: { zh: "新增页", en: "Add Page" },
  journalDeletePage: { zh: "删除页", en: "Delete Page" },
  journalPage: { zh: "第 {n} 页", en: "Page {n}" },
  journalPageSummary: { zh: "第 {current} / {total} 页", en: "Page {current} / {total}" },
  journalPageManager: { zh: "页面管理", en: "Page Manager" },
  journalPageNumber: { zh: "页码", en: "Page number" },
  journalJumpPage: { zh: "跳转", en: "Jump" },
  journalPreviousPage: { zh: "上一页", en: "Previous Page" },
  journalNextPage: { zh: "下一页", en: "Next Page" },
  journalConfirmDeletePage: { zh: "确定删除这一页吗？页面里的笔迹和素材都会一起删除。", en: "Delete this page? Its ink and items will be deleted too." },
  journalDefaultNotebook: { zh: "日记本", en: "Diary" },
  journalIdeaNotebook: { zh: "灵感本", en: "Ideas" },
  journalNotebookNamePrompt: { zh: "给这本本子取个名字", en: "Name this notebook" },
  journalNotebookActionPrompt: { zh: "输入 1 改名，2 改封面颜色，3 导入封面图片，4 删除封面图片", en: "Enter 1 rename, 2 cover color, 3 import cover image, 4 remove cover image" },
  journalColorPrompt: { zh: "输入颜色，例如 #2f77ff", en: "Enter a color, e.g. #2f77ff" },
  journalNotebookActions: { zh: "本子设置", en: "Notebook" },
  journalToolActions: { zh: "工具设置", en: "Tool" },
  journalTextActions: { zh: "文字操作", en: "Text actions" },
  journalItemActions: { zh: "元素操作", en: "Item actions" },
  journalTextFrame: { zh: "有框", en: "Frame" },
  journalTextFrameColor: { zh: "气泡背景色", en: "Bubble color" },
  journalImageLayerAbove: { zh: "上移一层（盖住笔迹文字）", en: "Move up above ink/text" },
  journalImageLayerBelow: { zh: "下移一层（笔迹文字在上）", en: "Move down below ink/text" },
  journalImageCrop: { zh: "图片裁剪", en: "Image crop" },
  journalImageFit: { zh: "显示方式", en: "Fit" },
  journalImageFitCover: { zh: "裁剪填满", en: "Crop to fill" },
  journalImageFitContain: { zh: "完整显示", en: "Show full image" },
  journalImageCropScale: { zh: "图片缩放", en: "Image scale" },
  journalImageCropX: { zh: "左右位置", en: "Horizontal" },
  journalImageCropY: { zh: "上下位置", en: "Vertical" },
  journalBrushSize: { zh: "大小", en: "Size" },
  journalBrushOpacity: { zh: "透明度", en: "Opacity" },
  journalCanvasZoom: { zh: "画布缩放", en: "Canvas zoom" },
  journalZoomIn: { zh: "放大", en: "Zoom in" },
  journalZoomOut: { zh: "缩小", en: "Zoom out" },
  journalEditText: { zh: "修改文字", en: "Edit text" },
  journalCopyText: { zh: "复制", en: "Copy" },
  journalPasteText: { zh: "粘贴", en: "Paste" },
  journalDeleteItem: { zh: "删除", en: "Delete" },
  journalFont: { zh: "字体", en: "Font" },
  journalStrikeText: { zh: "划线", en: "Strike" },
  journalTextPlaceholder: { zh: "输入文字", en: "Type here" },
  journalNewText: { zh: "新建文本", en: "New Text" },
  journalCreateNotebook: { zh: "创建本子", en: "Create Notebook" },
  journalCanvas: { zh: "草稿本", en: "Canvas" },
  journalToolBrush: { zh: "笔刷", en: "Brush" },
  journalToolEraser: { zh: "橡皮", en: "Eraser" },
  journalToolText: { zh: "文本", en: "Text" },
  journalToolShape: { zh: "形状", en: "Shape" },
  journalTextPrompt: { zh: "输入要放到画布上的文字", en: "Text to place on canvas" },
  journalTextStylePrompt: { zh: "输入字体名称，例如 system-ui、serif、monospace", en: "Enter a font, e.g. system-ui, serif, monospace" },
  journalCanvasItemActionPrompt: { zh: "输入 1 编辑，2 删除", en: "Enter 1 edit, 2 delete" },
  journalConfirmDeleteCanvasItem: { zh: "确定删除这个画布元素吗？", en: "Delete this canvas item?" },
  journalAudioClipPrompt: { zh: "输入裁剪范围，例如 2-8 秒", en: "Clip range, e.g. 2-8 seconds" },
  journalAudioClipLabel: { zh: "剪辑", en: "Clip" },
  journalAudioBar: { zh: "录音条", en: "Audio Bar" },
  journalAudioStart: { zh: "开始秒", en: "Start second" },
  journalAudioEnd: { zh: "结束秒", en: "End second" },
  journalAudioExport: { zh: "导出录音", en: "Export audio" },
  journalAudioExportFailed: { zh: "录音导出失败。", en: "Audio export failed." },
  journalAudioConfirmTrim: { zh: "确认把原录音裁剪成当前长度吗？这个操作会替换原录音。", en: "Trim the original audio to this range? This will replace the original recording." },
  journalAudioTrimFailed: { zh: "录音裁剪失败，已保留当前裁剪范围。", en: "Audio trim failed. The current clip range was kept." },
  journalCamera: { zh: "拍照", en: "Camera" },
  journalImage: { zh: "图片", en: "Image" },
  journalRecord: { zh: "录音", en: "Record" },
  journalStopRecord: { zh: "停止", en: "Stop" },
  journalCaption: { zh: "添加标注", en: "Add note" },
  journalMediaEmpty: { zh: "暂无素材", en: "No media yet" },
  journalHandwrite: { zh: "手写", en: "Write" },
  journalInk: { zh: "手写纸页", en: "Handwriting Page" },
  journalInkHint: { zh: "支持手指和电容笔", en: "Works with finger and stylus" },
  journalClearInk: { zh: "清空本页", en: "Clear Page" },
  journalConfirmInk: { zh: "确认", en: "Insert" },
  journalConfirmClearInk: { zh: "确定清空这一页的所有内容吗？笔迹、文本、图片、形状和录音都会清除。", en: "Clear everything on this page? Ink, text, images, shapes, and recordings will be removed." },
  journalTitleField: { zh: "标题", en: "Title" },
  journalTags: { zh: "标签", en: "Tags" },
  journalBody: { zh: "正文", en: "Entry" },
  journalFavorite: { zh: "收藏", en: "Favorite" },
  journalSearch: { zh: "搜索日记", en: "Search Journal" },
  journalEmpty: { zh: "还没有日记", en: "No journal entries yet" },
  journalUntitled: { zh: "未命名日记", en: "Untitled entry" },
  moodCalm: { zh: "平静", en: "Calm" },
  moodHappy: { zh: "开心", en: "Happy" },
  moodTired: { zh: "疲惫", en: "Tired" },
  moodStress: { zh: "压力", en: "Stress" },
  moodSensitive: { zh: "敏感", en: "Sensitive" },
  moodIdea: { zh: "灵感", en: "Idea" },
  moveUp: { zh: "上移", en: "Move up" },
  moveDown: { zh: "下移", en: "Move down" },
  journalWordCount: { zh: "字", en: "words" },
  importError: { zh: "导入失败：文件格式不对。", en: "Import failed: the file format is invalid." },
};
const WEEKDAYS = {
  zh: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

const dom = {};
let state = null;
let dragState = null;
let suppressNextClick = false;
let lastDateTap = { date: "", time: 0 };
let longPressTimer = null;
let longPressStart = null;
let contextTarget = null;
let copiedBlock = null;
let undoStack = [];
let activeJournalId = "";
let activeNotebookId = "";
let selectedJournalCanvasItemId = "";
let selectedJournalMood = "calm";
let currentJournalAttachments = [];
let journalMediaRecorder = null;
let journalRecordingChunks = [];
let journalRecordingStream = null;
let journalRecordingStartedAt = 0;
let journalInkData = "";
let inkDrawingState = null;
let journalTool = "brush";
let journalItemDrag = null;
let journalAudioPressTimer = null;
let journalItemPressTimer = null;
let journalNotebookPressTimer = null;
let journalToolPressTimer = null;
let journalPressStart = null;
let journalCoverPaletteOpen = false;
let journalItemResize = null;
let journalAudioTrim = null;
let journalBrushColor = "#111111";
let journalBrushOpacity = 1;
let journalBrushSize = 4;
let journalEraserSize = 24;
let journalTextStyle = { color: "#111111", font: "system-ui" };
let copiedJournalText = "";
let journalCanvasScale = 1;
let journalPinchState = null;
let journalPanState = null;
let journalMenuTarget = null;
let journalIsPinching = false;
let journalPinchCooldownUntil = 0;
let journalInteractionMode = "idle";
let activeInkPointerId = null;
let journalInkSaveTimer = null;
let journalInkSnapshotTimer = null;
let reminderTimer = null;
let nativeReminderSyncTimer = null;
let supabaseClient = null;
let currentAuthUser = null;
let cloudBackupStatus = null;
let cloudBackupBusy = false;

document.addEventListener("DOMContentLoaded", () => {
  cacheDom();
  state = loadState();
  normalizeState();
  bindEvents();
  void initSupabaseClient();
  render();
  scheduleMidnightRefresh();
  scheduleMinuteRefresh();
  scheduleTaskReminderCheck();
});

function cacheDom() {
  dom.rangeStartInput = document.querySelector("#rangeStartInput");
  dom.rangeDaysInput = document.querySelector("#rangeDaysInput");
  dom.languageInput = document.querySelector("#languageInput");
  dom.dateStrip = document.querySelector("#dateStrip");
  dom.customDateInput = document.querySelector("#customDateInput");
  dom.specialDateTitle = document.querySelector("#specialDateTitle");
  dom.specialDateInfo = document.querySelector("#specialDateInfo");
  dom.timeline = document.querySelector("#timeline");
  dom.daySchedule = document.querySelector("#daySchedule");
  dom.taskList = document.querySelector("#taskList");
  dom.dailyReport = document.querySelector("#dailyReport");
  dom.dailyNoteInput = document.querySelector("#dailyNoteInput");
  dom.reviewMoodRow = document.querySelector("#reviewMoodRow");
  dom.reviewWeatherRow = document.querySelector("#reviewWeatherRow");
  dom.reviewFeelRow = document.querySelector("#reviewFeelRow");
  dom.todayVictory = document.querySelector("#todayVictory");
  dom.selectedDateLabel = document.querySelector("#selectedDateLabel");
  dom.dayBoardTitle = document.querySelector("#dayBoardTitle");
  dom.scoreRing = document.querySelector("#scoreRing");
  dom.scoreValue = document.querySelector("#scoreValue");
  dom.reportState = document.querySelector("#reportState");
  dom.metricProjects = document.querySelector("#metricProjects");
  dom.metricTasks = document.querySelector("#metricTasks");
  dom.metricHours = document.querySelector("#metricHours");
  dom.importInput = document.querySelector("#importInput");
  dom.createMenu = document.querySelector("#createMenu");
  dom.createFab = document.querySelector("[data-action='open-create-menu']");
  dom.undoButton = document.querySelector("#undoButton");
  dom.blockActionMenu = document.querySelector("#blockActionMenu");
  dom.blockActionTitle = document.querySelector("#blockActionTitle");
  dom.journalActionMenu = document.querySelector("#journalActionMenu");
  dom.bottomNav = document.querySelector(".bottom-nav");
  dom.settingsPanel = document.querySelector("#settingsPanel");
  dom.settingsToggle = document.querySelector("[data-action='toggle-settings']");
  dom.appSections = Array.from(document.querySelectorAll("#timelineSection, #overviewSection, #todaySection, #journalSection"));
  dom.navTabs = Array.from(document.querySelectorAll('.bottom-nav a[href^="#"]'));
  dom.projectDialog = document.querySelector("#projectDialog");
  dom.projectForm = document.querySelector("#projectForm");
  dom.projectDialogTitle = document.querySelector("#projectDialogTitle");
  dom.projectIdInput = document.querySelector("#projectIdInput");
  dom.projectTitleInput = document.querySelector("#projectTitleInput");
  dom.projectStartInput = document.querySelector("#projectStartInput");
  dom.projectDurationInput = document.querySelector("#projectDurationInput");
  dom.projectColorInput = document.querySelector("#projectColorInput");
  dom.projectGoalInput = document.querySelector("#projectGoalInput");
  dom.projectCompleteInput = document.querySelector("#projectCompleteInput");
  dom.deleteProjectButton = document.querySelector("#deleteProjectButton");
  dom.taskDialog = document.querySelector("#taskDialog");
  dom.taskForm = document.querySelector("#taskForm");
  dom.taskDialogTitle = document.querySelector("#taskDialogTitle");
  dom.taskIdInput = document.querySelector("#taskIdInput");
  dom.taskTitleInput = document.querySelector("#taskTitleInput");
  dom.taskProjectInput = document.querySelector("#taskProjectInput");
  dom.taskDateInput = document.querySelector("#taskDateInput");
  dom.taskSpanInput = document.querySelector("#taskSpanInput");
  dom.taskStartInput = document.querySelector("#taskStartInput");
  dom.taskDurationInput = document.querySelector("#taskDurationInput");
  dom.taskStatusInput = document.querySelector("#taskStatusInput");
  dom.taskColorInput = document.querySelector("#taskColorInput");
  dom.taskReminderInput = document.querySelector("#taskReminderInput");
  dom.taskReminderOptions = document.querySelector("#taskReminderOptions");
  dom.taskReminderVolumeInput = document.querySelector("#taskReminderVolumeInput");
  dom.taskReminderSoundInput = document.querySelector("#taskReminderSoundInput");
  dom.taskDetailInput = document.querySelector("#taskDetailInput");
  dom.deleteTaskButton = document.querySelector("#deleteTaskButton");
  dom.dateMarkDialog = document.querySelector("#dateMarkDialog");
  dom.dateMarkForm = document.querySelector("#dateMarkForm");
  dom.dateMarkDateInput = document.querySelector("#dateMarkDateInput");
  dom.dateMarkTextInput = document.querySelector("#dateMarkTextInput");
  dom.dateMarkColorInput = document.querySelector("#dateMarkColorInput");
  dom.dateMarkDialogTitle = document.querySelector("#dateMarkDialogTitle");
  dom.dateMarkBuiltInInfo = document.querySelector("#dateMarkBuiltInInfo");
  dom.dateMarkCount = document.querySelector("#dateMarkCount");
  dom.dateMarkList = document.querySelector("#dateMarkList");
  dom.deleteDateMarkButton = document.querySelector("#deleteDateMarkButton");
  dom.journalShelfView = document.querySelector("#journalShelfView");
  dom.journalPanel = document.querySelector(".journal-panel");
  dom.journalNotebookView = document.querySelector("#journalNotebookView");
  dom.accountDialog = document.querySelector("#accountDialog");
  dom.accountCenterEntry = document.querySelector("#accountCenterEntry");
  dom.accountEntryStatus = document.querySelector("#accountEntryStatus");
  dom.accountModeText = document.querySelector("#accountModeText");
  dom.accountCurrentEmail = document.querySelector("#accountCurrentEmail");
  dom.accountCloudText = document.querySelector("#accountCloudText");
  dom.accountEmailInput = document.querySelector("#accountEmailInput");
  dom.accountPasswordInput = document.querySelector("#accountPasswordInput");
  dom.accountMessage = document.querySelector("#accountMessage");
  dom.accountSignUpButton = document.querySelector("#accountSignUpButton");
  dom.accountSignInButton = document.querySelector("#accountSignInButton");
  dom.accountSignOutButton = document.querySelector("#accountSignOutButton");
  dom.cloudBackupPanel = document.querySelector("#cloudBackupPanel");
  dom.cloudBackupStatusText = document.querySelector("#cloudBackupStatusText");
  dom.cloudBackupEmail = document.querySelector("#cloudBackupEmail");
  dom.cloudBackupUpdatedAt = document.querySelector("#cloudBackupUpdatedAt");
  dom.cloudLocalUpdatedAt = document.querySelector("#cloudLocalUpdatedAt");
  dom.cloudBackupVersion = document.querySelector("#cloudBackupVersion");
  dom.cloudBackupNote = document.querySelector("#cloudBackupNote");
  dom.cloudUploadButton = document.querySelector("#cloudUploadButton");
  dom.cloudDownloadButton = document.querySelector("#cloudDownloadButton");
  dom.cloudStatusButton = document.querySelector("#cloudStatusButton");
  dom.journalNotebookList = document.querySelector("#journalNotebookList");
  dom.journalNotebookTitle = document.querySelector("#journalNotebookTitle");
  dom.journalPageButton = document.querySelector("#journalPageButton");
  dom.journalPreviousPageButton = document.querySelector("[data-action='previous-journal-page']");
  dom.journalNextPageButton = document.querySelector("[data-action='next-journal-page']");
  dom.journalCameraInput = document.querySelector("#journalCameraInput");
  dom.journalImageInput = document.querySelector("#journalImageInput");
  dom.journalCoverInput = document.querySelector("#journalCoverInput");
  dom.journalRecordButton = document.querySelector("#journalRecordButton");
  dom.journalInkCanvas = document.querySelector("#journalInkCanvas");
  dom.journalCanvasBoard = document.querySelector("#journalCanvasBoard");
  dom.journalCanvasShell = document.querySelector(".journal-canvas-shell");
  dom.journalUnderlayItems = document.querySelector("#journalUnderlayItems");
  dom.journalCanvasItems = document.querySelector("#journalCanvasItems");
  dom.journalCoverPalette = document.querySelector("#journalCoverPalette");
  dom.journalToolButtons = Array.from(document.querySelectorAll("[data-action='set-journal-tool']"));
}

function bindEvents() {
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("dblclick", handleDocumentDoubleClick);
  document.addEventListener("pointerdown", handlePointerDown);
  document.addEventListener("pointerdown", handleJournalLongPressStart);
  document.addEventListener("pointermove", handleJournalLongPressMove);
  document.addEventListener("dragstart", handleDateMarkDragStart);
  document.addEventListener("dragover", handleDateMarkDragOver);
  document.addEventListener("drop", handleDateMarkDrop);
  document.addEventListener("dragend", handleDateMarkDragEnd);
  dom.languageInput.addEventListener("change", () => {
    state.settings.language = dom.languageInput.value;
    saveAndRender();
  });
  dom.rangeStartInput.addEventListener("change", () => {
    state.settings.rangeStart = dom.rangeStartInput.value || todayISO();
    saveAndRender();
  });
  dom.rangeDaysInput.addEventListener("change", () => {
    state.settings.rangeDays = clamp(Number(dom.rangeDaysInput.value) || 30, 7, 90);
    saveAndRender();
  });
  dom.dailyNoteInput.addEventListener("input", () => {
    state.notes[state.selectedDate] = dom.dailyNoteInput.value;
    saveState();
  });
  dom.reviewMoodRow?.addEventListener("click", handleReviewMetaClick);
  dom.reviewWeatherRow?.addEventListener("click", handleReviewMetaClick);
  dom.reviewFeelRow?.addEventListener("click", handleReviewMetaClick);
  dom.projectForm.addEventListener("submit", handleProjectSubmit);
  dom.taskForm.addEventListener("submit", handleTaskSubmit);
  dom.taskReminderInput?.addEventListener("change", updateTaskReminderOptions);
  dom.dateMarkForm?.addEventListener("submit", handleDateMarkSubmit);
  dom.dateMarkColorInput?.addEventListener("input", updateDateMarkPickerColor);
  dom.importInput.addEventListener("change", handleImport);
  dom.journalCameraInput?.addEventListener("change", handleJournalImageInput);
  dom.journalImageInput?.addEventListener("change", handleJournalImageInput);
  dom.journalCoverInput?.addEventListener("change", handleJournalCoverInput);
  dom.journalActionMenu?.addEventListener("input", handleJournalActionMenuInput);
  dom.journalActionMenu?.addEventListener("change", handleJournalActionMenuInput);
  dom.journalCanvasBoard?.addEventListener("pointerdown", handleInkPointerDown);
  dom.journalCanvasBoard?.addEventListener("pointermove", handleInkPointerMove);
  dom.journalCanvasBoard?.addEventListener("pointerup", handleInkPointerUp);
  dom.journalCanvasBoard?.addEventListener("pointercancel", handleInkPointerCancel);
  dom.journalInkCanvas?.addEventListener("pointerdown", handleInkPointerDown);
  dom.journalInkCanvas?.addEventListener("pointermove", handleInkPointerMove);
  dom.journalInkCanvas?.addEventListener("pointerup", handleInkPointerUp);
  dom.journalInkCanvas?.addEventListener("pointercancel", handleInkPointerCancel);
  dom.journalUnderlayItems?.addEventListener("pointerdown", handleJournalCanvasItemPointerDown);
  dom.journalCanvasItems?.addEventListener("pointerdown", handleJournalCanvasItemPointerDown);
  dom.journalCanvasItems?.addEventListener("input", handleJournalCanvasInput);
  dom.journalCanvasItems?.addEventListener("focusin", handleJournalCanvasTextFocus);
  dom.journalCanvasItems?.addEventListener("focusout", handleJournalCanvasTextBlur);
  dom.journalCanvasItems?.addEventListener("dblclick", handleJournalCanvasTextDoubleClick);
  dom.journalCanvasItems?.addEventListener("play", handleJournalAudioPlay, true);
  dom.journalCanvasItems?.addEventListener("timeupdate", handleJournalAudioTimeUpdate, true);
  dom.journalCanvasShell?.addEventListener("wheel", handleJournalCanvasWheel, { passive: false });
  dom.journalCanvasShell?.addEventListener("touchstart", handleJournalCanvasTouchStart, { passive: false });
  dom.journalCanvasShell?.addEventListener("touchmove", handleJournalCanvasTouchMove, { passive: false });
  dom.journalCanvasShell?.addEventListener("touchend", handleJournalCanvasTouchEnd);
  dom.journalCanvasShell?.addEventListener("touchcancel", handleJournalCanvasTouchEnd);
  dom.timeline.addEventListener("scroll", handleTimelineScroll, { passive: true });
  window.addEventListener("hashchange", applyAppView);
  document.addEventListener("pointermove", handlePointerMove);
  document.addEventListener("pointermove", handleJournalCanvasItemMove);
  document.addEventListener("pointerup", stopDrag);
  document.addEventListener("pointerup", handleJournalCanvasItemEnd);
  document.addEventListener("pointerup", clearJournalLongPressTimers);
  document.addEventListener("pointercancel", handleJournalCanvasItemEnd);
  document.addEventListener("pointercancel", clearJournalLongPressTimers);
  document.addEventListener("contextmenu", handleJournalNativeMenu);
  document.addEventListener("selectstart", handleJournalNativeSelection);
  document.addEventListener("selectionchange", handleJournalSelectionChange);
  document.addEventListener("touchstart", handleJournalNativeTouchStart, { passive: false });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) scheduleNativeReminderSync();
  });
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (error) {
    console.warn("Failed to load saved schedule.", error);
  }
  return createSeedState();
}

function createSeedState() {
  const today = todayISO();
  const tomorrow = addDays(today, 1);
  const dayAfter = addDays(today, 2);
  return {
    settings: {
      rangeStart: today,
      rangeDays: 30,
      language: "zh",
    },
    selectedDate: today,
    notes: {},
    journal: {
      entries: [],
    },
    projects: [
      {
        id: makeId("project"),
        title: "30天作品集冲刺 / 30-Day Portfolio Sprint",
        goal: "每天推进一个可见成果 / Ship one visible result every day",
        start: today,
        duration: 30,
        color: "#2f80ed",
        tasks: [
          {
            id: makeId("task"),
            title: "拆分目录和素材清单 / Outline and asset list",
            detail: "先定结构，再补内容。 / Structure first, content second.",
            date: today,
            startTime: "09:00",
            duration: 2,
            status: "todo",
            color: "#2f80ed",
          },
          {
            id: makeId("task"),
            title: "完成第一章初稿 / Draft chapter one",
            detail: "",
            date: today,
            startTime: "14:00",
            duration: 2.5,
            status: "todo",
            color: "#d66a2e",
          },
          {
            id: makeId("task"),
            title: "整理参考案例 / Organize references",
            detail: "",
            date: tomorrow,
            startTime: "10:00",
            duration: 1.5,
            status: "todo",
            color: "#196f73",
          },
        ],
      },
      {
        id: makeId("project"),
        title: "身体状态恢复 / Energy Recovery",
        goal: "轻量运动和早睡 / Light workouts and earlier sleep",
        start: today,
        duration: 14,
        color: "#4f7f36",
        tasks: [
          {
            id: makeId("task"),
            title: "力量训练 / Strength training",
            detail: "",
            date: today,
            startTime: "18:30",
            duration: 1,
            status: "todo",
            color: "#4f7f36",
          },
          {
            id: makeId("task"),
            title: "拉伸和复盘 / Stretch and review",
            detail: "",
            date: dayAfter,
            startTime: "21:00",
            duration: 0.5,
            status: "todo",
            color: "#9b4d64",
          },
        ],
      },
    ],
  };
}

function normalizeState() {
  const today = todayISO();
  state.settings ||= {};
  state.settings.rangeStart ||= today;
  state.settings.rangeDays = clamp(Number(state.settings.rangeDays) || 30, 7, 90);
  state.settings.language = LANGUAGES.includes(state.settings.language) ? state.settings.language : "zh";
  state.selectedDate ||= today;
  state.notes ||= {};
  state.dayMeta = state.dayMeta && typeof state.dayMeta === "object" && !Array.isArray(state.dayMeta)
    ? state.dayMeta
    : {};
  state.reminderLog = state.reminderLog && typeof state.reminderLog === "object" && !Array.isArray(state.reminderLog)
    ? state.reminderLog
    : {};
  Object.keys(state.dayMeta).forEach((date) => {
    const meta = state.dayMeta[date] && typeof state.dayMeta[date] === "object" ? state.dayMeta[date] : {};
    meta.mood = REVIEW_MOODS.some((item) => item.id === meta.mood) ? meta.mood : "";
    meta.weather = REVIEW_WEATHER.some((item) => item.id === meta.weather) ? meta.weather : "";
    meta.feel = REVIEW_FEELS.some((item) => item.id === meta.feel) ? meta.feel : "";
    state.dayMeta[date] = meta;
  });
  state.journal = state.journal && typeof state.journal === "object" && !Array.isArray(state.journal)
    ? state.journal
    : {};
  state.journal.notebooks = Array.isArray(state.journal.notebooks) ? state.journal.notebooks : [];
  if (!state.journal.notebooks.length) {
    state.journal.notebooks = createDefaultNotebooks();
  }
  state.journal.notebooks.forEach((notebook, index) => {
    notebook.id ||= makeId("notebook");
    notebook.title = String(notebook.title || localizedPair("日记本", "Diary")).trim();
    notebook.color = normalizeNotebookColor(notebook.color, index);
    notebook.coverStyle = normalizeCoverStyle(notebook.coverStyle, notebook.color, index);
    notebook.coverImage = typeof notebook.coverImage === "string" ? notebook.coverImage : "";
    notebook.canvas = normalizeJournalCanvas(notebook.canvas);
    notebook.createdAt ||= new Date().toISOString();
  });
  state.journal.entries = Array.isArray(state.journal.entries) ? state.journal.entries : [];
  const defaultNotebookId = state.journal.notebooks[0]?.id || "";
  state.journal.entries.forEach((entry) => {
    entry.id ||= makeId("journal");
    entry.notebookId ||= defaultNotebookId;
    entry.date ||= today;
    entry.title = String(entry.title || "").trim();
    entry.body = String(entry.body || "");
    entry.mood = entry.mood === "stress" ? "sensitive" : entry.mood;
    entry.mood = JOURNAL_MOODS.includes(entry.mood) ? entry.mood : "calm";
    entry.tags = Array.isArray(entry.tags) ? entry.tags.map((tag) => String(tag).trim()).filter(Boolean) : parseJournalTags(entry.tags || "");
    entry.attachments = Array.isArray(entry.attachments) ? entry.attachments.map(normalizeJournalAttachment).filter(Boolean) : [];
    entry.ink = typeof entry.ink === "string" ? entry.ink : "";
    if (entry.ink && !entry.attachments.some((attachment) => attachment.type === "ink" && attachment.src === entry.ink)) {
      entry.attachments.push({
        id: makeId("ink"),
        type: "ink",
        src: entry.ink,
        name: text("journalHandwrite"),
        caption: "",
      });
      entry.ink = "";
    }
    entry.favorite = Boolean(entry.favorite);
    entry.updatedAt ||= new Date().toISOString();
  });
  activeNotebookId = state.journal.notebooks.some((notebook) => notebook.id === activeNotebookId)
    ? activeNotebookId
    : defaultNotebookId;
  state.specialDates = state.specialDates && typeof state.specialDates === "object" && !Array.isArray(state.specialDates)
    ? state.specialDates
    : {};
  Object.keys(state.specialDates).forEach((date) => {
    const marks = normalizeDateMarkList(state.specialDates[date]);
    if (marks.length) {
      state.specialDates[date] = marks;
    } else {
      delete state.specialDates[date];
    }
  });
  state.dateMarkOrder = state.dateMarkOrder && typeof state.dateMarkOrder === "object" && !Array.isArray(state.dateMarkOrder)
    ? state.dateMarkOrder
    : {};
  state.projects = Array.isArray(state.projects) ? state.projects : [];
  state.projects.forEach((project, index) => {
    project.id ||= makeId("project");
    project.title ||= `${text("project")} ${index + 1}`;
    project.start ||= today;
    project.duration = Math.max(1, Number(project.duration) || 1);
    project.color ||= COLORS[index % COLORS.length];
    project.goal ||= "";
    project.completed = Boolean(project.completed);
    project.completedDate = project.completed && isValidISODate(project.completedDate) ? project.completedDate : "";
    project.tasks = Array.isArray(project.tasks) ? project.tasks : [];
    project.tasks.forEach((task, taskIndex) => {
      task.id ||= makeId("task");
      task.title ||= `${text("tasksMetric")} ${taskIndex + 1}`;
      task.date ||= project.start;
      task.spanDays = clamp(Number(task.spanDays) || 1, 1, 365);
      task.startTime ||= "09:00";
      task.duration = Math.max(0.25, Number(task.duration) || 1);
      task.status = ["todo", "done", "missed"].includes(task.status) ? task.status : "todo";
      task.color ||= project.color;
      task.detail ||= "";
      task.reminder = normalizeTaskReminder(task.reminder);
    });
  });
  closePastDays();
  saveState();
}

function closePastDays() {
  const today = todayISO();
  getAllTasks().forEach(({ task }) => {
    const endDate = addDays(task.date, Math.max(1, Number(task.spanDays) || 1));
    if (endDate <= today && task.status === "todo") {
      task.status = "missed";
    }
  });
}

function normalizeTaskReminder(value = {}) {
  const reminder = value && typeof value === "object" && !Array.isArray(value) ? value : {};
  const sound = ["soft", "bright", "pulse"].includes(reminder.sound) ? reminder.sound : "soft";
  return {
    enabled: Boolean(reminder.enabled),
    volume: clamp(Number(reminder.volume) || 0.65, 0.1, 1),
    sound,
  };
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    markLocalAppDataUpdated();
  } catch (error) {
    console.warn("Failed to save schedule state.", error);
  }
}

function saveAndRender() {
  saveState();
  render();
}

function rememberUndo() {
  pushUndoSnapshot(JSON.stringify(state));
}

function pushUndoSnapshot(snapshot) {
  if (!snapshot) return;
  if (undoStack[undoStack.length - 1] === snapshot) return;
  undoStack.push(snapshot);
  if (undoStack.length > UNDO_LIMIT) undoStack.shift();
  updateUndoButton();
}

function undoLastChange() {
  const snapshot = undoStack.pop();
  if (!snapshot) {
    updateUndoButton();
    return;
  }
  try {
    state = JSON.parse(snapshot);
    normalizeState();
    render();
  } catch (error) {
    console.warn("Failed to undo change.", error);
  }
  updateUndoButton();
}

function updateUndoButton() {
  if (!dom.undoButton) return;
  const canUndo = undoStack.length > 0;
  dom.undoButton.hidden = !canUndo;
  dom.undoButton.disabled = !canUndo;
  dom.undoButton.setAttribute("aria-label", canUndo ? text("undo") : text("undoUnavailable"));
}

function render() {
  closePastDays();
  applyStaticTranslations();
  dom.rangeStartInput.value = state.settings.rangeStart;
  dom.rangeDaysInput.value = state.settings.rangeDays;
  dom.languageInput.value = state.settings.language;
  renderDateStrip();
  renderSummary();
  renderSpecialDateEditor();
  renderTimeline();
  renderDayBoard();
  renderJournal();
  renderTaskProjectOptions();
  applyAppView();
  updateUndoButton();
}

function applyAppView() {
  const targetId = getActiveViewId();
  document.body.dataset.view = targetId;
  dom.appSections.forEach((section) => {
    const isActive = section.id === targetId;
    section.classList.toggle("is-active-view", isActive);
    section.setAttribute("aria-hidden", String(!isActive));
  });
  dom.navTabs.forEach((tab) => {
    const isActive = tab.getAttribute("href") === `#${targetId}`;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-current", isActive ? "page" : "false");
  });
  if (targetId !== "journalSection") {
    document.body.classList.remove("journal-notebook-open");
  }
  updateCreateFab(targetId);
  if (targetId !== "timelineSection") {
    setSettingsPanel(false);
    closeCreateMenu();
  }
}

function updateCreateFab(viewId) {
  if (!dom.createFab) return;
  const label = viewId === "todaySection" ? text("taskDialogTodayNew") : localizedPair("新建", "Create");
  dom.createFab.setAttribute("aria-label", label);
  dom.createFab.setAttribute("aria-haspopup", viewId === "todaySection" ? "dialog" : "menu");
}

function getActiveViewId() {
  const hashId = window.location.hash.replace("#", "");
  return dom.appSections.some((section) => section.id === hashId) ? hashId : "timelineSection";
}

function showAppView(sectionId) {
  if (!dom.appSections.some((section) => section.id === sectionId)) return;
  if (window.location.hash === `#${sectionId}`) {
    applyAppView();
    return;
  }
  window.location.hash = sectionId;
}

function renderDateStrip() {
  const days = getVisibleDays();
  dom.dateStrip.innerHTML = days.map((date) => {
    const report = getDayReport(date);
    const active = date === state.selectedDate ? "active" : "";
    const todayClass = date === todayISO() ? text("today") : weekdayName(date);
    const marks = getDateMarks(date);
    const visibleMark = marks[0];
    const markStyle = visibleMark?.color ? ` style="--mark-color:${visibleMark.color};--mark-text:${readableText(visibleMark.color)}"` : "";
    const markHtml = visibleMark ? `<em class="date-mark ${visibleMark.type}"${markStyle}>${escapeHtml(visibleMark.label)}</em>` : "";
    return `
      <button class="date-pill ${active} ${marks.length ? "has-date-mark" : ""}" type="button" data-action="select-date" data-date="${date}">
        <strong>${monthDay(date)}</strong>
        <span>${todayClass}</span>
        ${markHtml}
        <small>${report.scoreLabel}</small>
        <span class="progress-track" aria-hidden="true"><i style="--progress:${report.score}"></i></span>
      </button>
    `;
  }).join("");
}

function renderSpecialDateEditor() {
  if (!dom.customDateInput || !dom.specialDateTitle || !dom.specialDateInfo) return;
  const marks = getDateMarks(state.selectedDate);
  const report = getDayReport(state.selectedDate);
  const planLabel = report.totalTasks
    ? localizedPair(`${report.totalTasks}个安排`, `${report.totalTasks} plans`)
    : localizedPair("暂无安排", "No plans");
  dom.specialDateTitle.textContent = `${text("specialDate")} · ${formatDateShort(state.selectedDate)}`;
  const markLabel = marks.length ? marks.map((mark) => mark.label).join(" · ") : text("noDateMarks");
  dom.specialDateInfo.textContent = `${markLabel} · ${planLabel}`;
  dom.customDateInput.value = state.specialDates[state.selectedDate] || "";
}

function renderSummary() {
  const date = state.selectedDate;
  const report = getDayReport(date);
  const selectedProjects = new Set(getTasksForDate(date).map((item) => item.project.id));
  report.completedProjects.forEach((project) => selectedProjects.add(project.id));
  dom.selectedDateLabel.textContent = formatDateLong(date);
  dom.dayBoardTitle.textContent = `${formatDateShort(date)} ${text("planSuffix")}`;
  dom.scoreValue.textContent = report.hasTasks ? report.score : "-";
  dom.scoreRing.style.setProperty("--score", report.score);
  dom.reportState.textContent = date < todayISO() ? text("autoGenerated") : text("liveEstimate");
  dom.metricProjects.textContent = selectedProjects.size;
  dom.metricTasks.textContent = report.totalTasks;
  dom.metricHours.textContent = `${trimNumber(report.plannedHours)}h`;
  dom.dailyNoteInput.value = state.notes[date] || "";
  renderTodayVictory(report);
  renderReviewMeta(date);
  renderDailyReport(report);
}

function renderTodayVictory(report) {
  if (!dom.todayVictory) return;
  if (!report.completedProjects.length) {
    dom.todayVictory.hidden = true;
    dom.todayVictory.innerHTML = "";
    return;
  }
  const project = report.completedProjects[0];
  const extra = report.completedProjects.length > 1 ? ` +${report.completedProjects.length - 1}` : "";
  dom.todayVictory.hidden = false;
  dom.todayVictory.style.setProperty("--victory-color", project.color);
  dom.todayVictory.style.setProperty("--victory-text", readableText(project.color));
  dom.todayVictory.innerHTML = `
    <span aria-hidden="true">★</span>
    <strong>${escapeHtml(text("projectVictory"))}</strong>
    <small>${escapeHtml(project.title)}${extra}</small>
  `;
}

function renderReviewMeta(date = state.selectedDate) {
  const meta = state.dayMeta?.[date] || {};
  renderReviewChipRow(dom.reviewMoodRow, "mood", REVIEW_MOODS, meta.mood);
  renderReviewChipRow(dom.reviewWeatherRow, "weather", REVIEW_WEATHER, meta.weather);
  renderReviewChipRow(dom.reviewFeelRow, "feel", REVIEW_FEELS, meta.feel);
}

function renderReviewChipRow(container, type, items, activeId) {
  if (!container) return;
  container.innerHTML = items.map((item) => {
    const active = item.id === activeId ? "active" : "";
    return `<button class="${active}" type="button" data-meta-type="${type}" data-meta-value="${item.id}"><span>${item.emoji}</span><small>${escapeHtml(localizedPair(item.zh, item.en))}</small></button>`;
  }).join("");
}

function handleReviewMetaClick(event) {
  const button = event.target.closest("[data-meta-type]");
  if (!button) return;
  const date = state.selectedDate;
  state.dayMeta[date] ||= {};
  const type = button.dataset.metaType;
  const value = button.dataset.metaValue;
  state.dayMeta[date][type] = state.dayMeta[date][type] === value ? "" : value;
  saveState();
  renderReviewMeta(date);
}

function renderDailyReport(report) {
  const victoryHtml = report.completedProjects.length
    ? report.completedProjects.map((project) => `
      <div class="project-victory-card" style="--victory-color:${project.color};--victory-text:${readableText(project.color)}">
        <span aria-hidden="true">★</span>
        <div>
          <strong>${text("projectVictory")}</strong>
          <p>${escapeHtml(text("projectVictoryText").replace("{title}", project.title))}</p>
        </div>
      </div>
    `).join("")
    : "";
  const doneList = report.completed.length
    ? report.completed.map(({ task, project }) => reportItem(task, project, "done")).join("")
    : `<li><span class="status-dot"></span><span>${text("none")}</span></li>`;
  const missedList = report.unfinished.length
    ? report.unfinished.map(({ task, project }) => reportItem(task, project, task.status === "missed" ? "missed" : "")).join("")
    : `<li><span class="status-dot done"></span><span>${text("allDone")}</span></li>`;

  dom.dailyReport.innerHTML = `
    ${victoryHtml}
    <div class="report-block">
      <h3>${text("completed")}</h3>
      <ul class="report-list">${doneList}</ul>
    </div>
    <div class="report-block">
      <h3>${text("unfinished")}</h3>
      <ul class="report-list">${missedList}</ul>
    </div>
  `;
}

function reportItem(task, project, statusClass) {
  return `
    <li>
      <span class="status-dot ${statusClass}"></span>
      <span>${escapeHtml(task.title)} · ${escapeHtml(project.title)} · ${timeRange(task)}</span>
    </li>
  `;
}

function renderTimeline() {
  if (!state.projects.length) {
    dom.timeline.innerHTML = `<div class="empty-state">${text("noProjects")}</div>`;
    return;
  }
  const days = getVisibleDays();
  const visibleProjects = state.projects.filter(projectIntersectsVisibleRange);
  const header = `
    <div class="timeline-header schedule-row">
      <div class="corner-cell schedule-time-label">${visibleProjects.length ? text("project") : ""}</div>
      <div class="date-grid schedule-grid-cells">
        ${days.map((date) => {
          const marks = getDateMarks(date);
          const visibleMark = marks[0];
          const markStyle = visibleMark?.color ? ` style="--mark-color:${visibleMark.color};--mark-text:${readableText(visibleMark.color)}"` : "";
          const markHtml = visibleMark
            ? `<span class="timeline-date-mark ${visibleMark.type}"${markStyle}>${escapeHtml(visibleMark.label)}</span>`
            : "";
          const active = date === state.selectedDate ? "active" : "";
          const markClass = marks.some((mark) => mark.type === "custom") ? "custom-date-cell" : marks.length ? "has-date-mark" : "";
          return `
          <button class="date-cell ${date === todayISO() ? "today" : ""} ${markClass} ${active}" type="button" data-action="select-plan-date" data-date="${date}">
            <strong>${monthDay(date)}</strong><br />
            <span>${weekdayName(date)}</span>
            ${markHtml}
          </button>
        `;
        }).join("")}
      </div>
    </div>
  `;

  const rows = visibleProjects.length
    ? visibleProjects.map((project) => renderProjectRow(project, days)).join("")
    : renderEmptyTimelineRange(days);
  dom.timeline.innerHTML = `<div class="timeline-inner day-schedule-inner ${visibleProjects.length ? "" : "empty-timeline"}" style="--days:${days.length}">${header}${rows}</div>`;
}

function renderEmptyTimelineRange(days) {
  const todayIndex = diffDays(state.settings.rangeStart, todayISO());
  const todayLine = todayIndex >= 0 && todayIndex < state.settings.rangeDays
    ? `<span class="today-line" style="left:${todayIndex * DAY_WIDTH}px"></span>`
    : "";
  const weekendCells = days.map((date, index) => {
    const day = parseDate(date).getDay();
    if (day !== 0 && day !== 6) return "";
    return `<span class="weekend-cell" style="left:${index * DAY_WIDTH}px"></span>`;
  }).join("");
  return `
    <div class="timeline-empty-range schedule-row" style="--row-height:260px">
      <div class="schedule-time-label"></div>
      <div class="project-grid schedule-grid-cells" style="--days:${days.length}; --row-height:260px">${weekendCells}${todayLine}</div>
    </div>
  `;
}

function projectIntersectsVisibleRange(project) {
  const rangeStart = state.settings.rangeStart;
  const rangeEnd = addDays(rangeStart, state.settings.rangeDays);
  const projectEnd = addDays(project.start, Math.max(1, Number(project.duration) || 1));
  const projectVisible = project.start < rangeEnd && projectEnd > rangeStart;
  const taskVisible = project.tasks?.some((task) => {
    const taskEnd = addDays(task.date, Math.max(1, Number(task.spanDays) || 1));
    return task.date < rangeEnd && taskEnd > rangeStart;
  });
  return projectVisible || taskVisible;
}

function renderProjectRow(project, days) {
  const lanes = assignTimelineLanes(project.tasks);
  const maxLane = Math.max(1, ...Object.values(lanes).map((lane) => lane + 1));
  const rowHeight = Math.max(118, 88 + maxLane * 30);
  const progress = getProjectProgress(project);
  const projectBar = renderProjectBar(project);
  const taskBars = project.tasks.map((task) => renderTimelineTask(project, task, lanes[task.id])).join("");
  const weekendCells = days.map((date, index) => {
    const day = parseDate(date).getDay();
    if (day !== 0 && day !== 6) return "";
    return `<span class="weekend-cell" style="left:${index * DAY_WIDTH}px"></span>`;
  }).join("");
  const todayIndex = diffDays(state.settings.rangeStart, todayISO());
  const todayLine = todayIndex >= 0 && todayIndex < state.settings.rangeDays
    ? `<span class="today-line" style="left:${todayIndex * DAY_WIDTH}px"></span>`
    : "";

  return `
    <div class="project-row schedule-row ${project.completed ? "completed" : ""}" data-search="${escapeHtml(`${project.title} ${project.goal} ${project.tasks.map((task) => `${task.title} ${task.detail}`).join(" ")}`)}" style="--row-height:${rowHeight}px">
      <div class="project-meta schedule-time-label timeline-time-label">
        <div class="project-title-row">
          <h3>${escapeHtml(project.title)}</h3>
          <div class="project-actions">
            <button class="mini-icon task-shortcut" type="button" data-action="add-task-to-project" data-project-id="${project.id}" title="${text("addTaskToProject")}" aria-label="${text("addTaskToProject")}">${text("addTaskToProjectShort")}</button>
            <button class="mini-icon" type="button" data-action="edit-project" data-project-id="${project.id}" title="${text("editProject")}" aria-label="${text("editProject")}">⋯</button>
          </div>
        </div>
        <p class="project-range">${project.start} · ${formatDays(project.duration)}</p>
        <div class="progress-track" title="${text("progress")}" style="--progress:${progress}"><i></i></div>
        <p class="muted">${escapeHtml(project.goal || text("noGoal"))}</p>
      </div>
      <div class="project-grid schedule-grid-cells timeline-grid-cells" style="--days:${days.length}; --row-height:${rowHeight}px">
        ${weekendCells}${todayLine}${projectBar}${taskBars}
      </div>
    </div>
  `;
}

function renderProjectBar(project) {
  const startOffset = diffDays(state.settings.rangeStart, project.start);
  const left = startOffset * DAY_WIDTH + 6;
  const width = project.duration * DAY_WIDTH - 12;
  if (left + width < 0 || left > state.settings.rangeDays * DAY_WIDTH) return "";
  return `
    <button class="project-bar ${project.completed ? "completed" : ""}" type="button"
      data-drag-type="project"
      data-project-id="${project.id}"
      data-action="edit-project"
      style="left:${left}px;width:${Math.max(44, width)}px;--bar-color:${project.color};--bar-text:${readableText(project.color)}">
      <span class="resize-handle left" data-drag-type="project-left" data-project-id="${project.id}"></span>
      <span class="floating-bar-label">
        <strong>${project.completed ? "✓ " : ""}${escapeHtml(project.title)}</strong>
        <small>${formatDays(project.duration)}</small>
      </span>
      <span class="resize-handle right" data-drag-type="project-right" data-project-id="${project.id}"></span>
    </button>
  `;
}

function renderTimelineTask(project, task, lane) {
  const offset = diffDays(state.settings.rangeStart, task.date);
  const spanDays = Math.max(1, Number(task.spanDays) || 1);
  const left = offset * DAY_WIDTH + 8;
  const width = spanDays * DAY_WIDTH - 16;
  if (left + width < 0 || left > state.settings.rangeDays * DAY_WIDTH) return "";
  const top = 60 + lane * 28;
  const statusMark = task.status === "done" ? "✓ " : task.status === "missed" ? "! " : "";
  return `
    <button class="timeline-task ${task.status}" type="button"
      data-action="edit-task"
      data-drag-type="task-date"
      data-task-id="${task.id}"
      style="left:${left}px;top:${top}px;width:${Math.max(48, width)}px;--bar-color:${task.color};--bar-text:${readableText(task.color)}">
      <span class="resize-handle left" data-drag-type="task-left" data-task-id="${task.id}"></span>
      <span class="floating-bar-label">
        <strong>${statusMark}${escapeHtml(task.title)}</strong>
        <small>${formatDays(spanDays)}</small>
      </span>
      <span class="resize-handle right" data-drag-type="task-right" data-task-id="${task.id}"></span>
    </button>
  `;
}

function renderDayBoard() {
  renderDaySchedule();
  renderTaskList();
}

function renderDaySchedule() {
  const tasks = getTasksForDate(state.selectedDate).sort((a, b) => {
    return timeToMinutes(a.task.startTime) - timeToMinutes(b.task.startTime);
  });
  if (!tasks.length) {
    dom.daySchedule.innerHTML = `<div class="empty-state">${text("noTasksForDay")}</div>`;
    return;
  }
  const hours = [];
  for (let hour = START_HOUR; hour <= END_HOUR; hour += 1) {
    hours.push(`<span>${String(hour).padStart(2, "0")}</span>`);
  }
  const nowLine = getDayNowLine();
  const nowLineHtml = nowLine
    ? `<span class="day-now-column" style="--now-left:${nowLine.left}px"><i>${nowLine.label}</i></span>`
    : "";
  const rows = tasks.map(({ task, project }) => {
    const start = timeToMinutes(task.startTime);
    const left = ((start - START_HOUR * 60) / 60) * DAY_HOUR_WIDTH + 8;
    const width = task.duration * DAY_HOUR_WIDTH;
    const statusMark = task.status === "done" ? "✓ " : task.status === "missed" ? "! " : "";
    return `
      <div class="day-track-row" data-search="${escapeHtml(`${task.title} ${task.detail} ${project.title}`)}">
        <div class="day-track-label">
          <strong>${timeRange(task)}</strong>
          <small>${trimNumber(task.duration)}h</small>
        </div>
        <div class="day-track">
          <button class="day-task-block ${task.status}" type="button"
            data-action="edit-task"
            data-drag-type="task-time"
            data-task-id="${task.id}"
            style="left:${left}px;width:${Math.max(56, width)}px;--bar-color:${task.color};--bar-text:${readableText(task.color)}">
            <span class="time-resize left" data-drag-type="task-start" data-task-id="${task.id}"></span>
            <strong>${statusMark}${escapeHtml(task.title)}</strong>
            <small>${timeRange(task)}</small>
            <span class="time-resize right" data-drag-type="task-duration" data-task-id="${task.id}"></span>
          </button>
        </div>
      </div>
    `;
  }).join("");

  dom.daySchedule.innerHTML = `
    <div class="day-schedule-inner" style="--hours:${END_HOUR - START_HOUR}; --ticks:${END_HOUR - START_HOUR + 1}; --hour-width:${DAY_HOUR_WIDTH}px">
      ${nowLineHtml}
      <div class="day-time-header">
        <span></span>
        <div class="day-hour-grid">${hours.join("")}</div>
      </div>
      ${rows}
    </div>
  `;
}

function getDayNowLine() {
  if (state.selectedDate !== todayISO()) return null;
  const now = new Date();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = START_HOUR * 60;
  const endMinutes = END_HOUR * 60;
  if (minutes < startMinutes || minutes > endMinutes) return null;
  return {
    left: ((minutes - startMinutes) / 60) * DAY_HOUR_WIDTH + 8,
    label: minutesToTime(minutes),
  };
}

function renderTaskList() {
  const tasks = getTasksForDate(state.selectedDate).sort((a, b) => {
    return timeToMinutes(a.task.startTime) - timeToMinutes(b.task.startTime);
  });
  if (!tasks.length) {
    dom.taskList.innerHTML = `<div class="empty-state">${text("noTasksForDay")}</div>`;
    return;
  }
  dom.taskList.innerHTML = tasks.map(({ task, project }) => {
    const icon = task.status === "done" ? "✓" : task.status === "missed" ? "!" : "";
    return `
      <div class="task-row ${task.status}" data-search="${escapeHtml(`${task.title} ${task.detail} ${project.title}`)}">
        <button class="status-button ${task.status}" type="button" data-action="cycle-task-status" data-task-id="${task.id}" aria-label="${text("toggleStatus")}">${icon}</button>
        <button class="task-copy ghost-button" type="button" data-action="edit-task" data-task-id="${task.id}">
          <strong>${escapeHtml(task.title)}</strong>
          <small>${escapeHtml(project.title)}${task.detail ? ` · ${escapeHtml(task.detail)}` : ""}</small>
        </button>
        <span class="task-time">${timeRange(task)}</span>
      </div>
    `;
  }).join("");
}

function renderTaskProjectOptions() {
  dom.taskProjectInput.innerHTML = state.projects.map((project) => {
    return `<option value="${project.id}">${escapeHtml(project.title)}</option>`;
  }).join("");
}

function renderJournal() {
  if (!dom.journalShelfView || !dom.journalNotebookView) return;
  if (dom.journalPanel) dom.journalPanel.hidden = false;
  renderJournalShelf();
  renderJournalNotebook();
}

function renderJournalShelf() {
  if (!dom.journalNotebookList) return;
  dom.journalNotebookList.innerHTML = state.journal.notebooks.map((notebook, index) => {
    const hasCover = Boolean(notebook.coverImage);
    const coverImage = hasCover ? `<span class="notebook-cover-photo" aria-hidden="true"><img src="${escapeHtml(notebook.coverImage)}" alt="" /></span>` : "";
    const style = normalizeCoverStyle(notebook.coverStyle, notebook.color, index);
    const active = notebook.id === activeNotebookId ? "active" : "";
    return `
      <button class="journal-notebook-card ${hasCover ? "has-cover" : ""} ${active}" type="button" data-action="open-journal-notebook" data-notebook-id="${notebook.id}" data-cover-style="${style}" style="--notebook-color:${notebook.color};--notebook-text:${hasCover ? "#ffffff" : "#ffffff"}">
        ${coverImage}
        <span class="notebook-glass-shine" aria-hidden="true"></span>
        <strong>${escapeHtml(notebook.title)}</strong>
      </button>
    `;
  }).join("");
  renderJournalCoverPalette();
}

function renderJournalNotebook() {
  const notebook = getJournalNotebook(activeNotebookId);
  if (dom.journalNotebookTitle) {
    dom.journalNotebookTitle.textContent = notebook?.title || text("journalTitle");
  }
  syncJournalCanvasDimensions();
  renderJournalPages();
  renderJournalInk();
  renderJournalCanvasItems();
  renderJournalToolButtons();
  applyJournalCanvasScale();
}

function syncJournalCanvasDimensions() {
  if (dom.journalInkCanvas) {
    if (dom.journalInkCanvas.width !== JOURNAL_CANVAS_WIDTH) dom.journalInkCanvas.width = JOURNAL_CANVAS_WIDTH;
    if (dom.journalInkCanvas.height !== JOURNAL_CANVAS_HEIGHT) dom.journalInkCanvas.height = JOURNAL_CANVAS_HEIGHT;
  }
  if (dom.journalCanvasBoard) {
    dom.journalCanvasBoard.style.setProperty("--journal-canvas-width", `${JOURNAL_CANVAS_WIDTH}px`);
    dom.journalCanvasBoard.style.setProperty("--journal-canvas-height", `${JOURNAL_CANVAS_HEIGHT}px`);
  }
}

function applyJournalCanvasScale() {
  const board = dom.journalCanvasBoard;
  if (!board) return;
  board.style.setProperty("--journal-canvas-scale", String(journalCanvasScale));
  board.style.width = `${JOURNAL_CANVAS_WIDTH * journalCanvasScale}px`;
  board.style.height = `${JOURNAL_CANVAS_HEIGHT * journalCanvasScale}px`;
}

function renderJournalCoverPalette() {
  if (!dom.journalCoverPalette) return;
  const notebook = getJournalNotebook(activeNotebookId);
  dom.journalCoverPalette.hidden = !notebook || dom.journalShelfView?.hidden || !journalCoverPaletteOpen;
  if (!notebook) return;
  const removeCoverButton = notebook?.coverImage
    ? `<button class="cover-clear-button" type="button" data-action="remove-journal-cover" aria-label="${escapeHtml(text("journalRemoveCover"))}">${escapeHtml(text("journalRemoveCover"))}</button>`
    : "";
  dom.journalCoverPalette.innerHTML = `
    <span>${escapeHtml(text("journalCoverColor"))}</span>
    ${JOURNAL_COVER_STYLES.map((cover) => {
      const active = notebook?.coverStyle === cover.id ? "active" : "";
      return `<button class="${active}" type="button" data-action="set-journal-cover-color" data-color="${cover.color}" data-cover-style="${cover.id}" style="--swatch:${cover.color}" aria-label="${escapeHtml(cover.label)}"></button>`;
    }).join("")}
    <button class="cover-import-button" type="button" data-action="change-journal-cover">${escapeHtml(text("journalImage"))}</button>
    ${removeCoverButton}
  `;
}

function renderJournalPages() {
  if (!dom.journalPageButton) return;
  const canvas = getActiveNotebookCanvas();
  if (!canvas) {
    dom.journalPageButton.textContent = text("journalPageSummary").replace("{current}", "0").replace("{total}", "0");
    return;
  }
  const index = getActiveJournalPageIndex(canvas);
  const total = canvas.pages.length;
  dom.journalPageButton.textContent = text("journalPageSummary")
    .replace("{current}", String(index + 1))
    .replace("{total}", String(total));
  if (dom.journalPreviousPageButton) dom.journalPreviousPageButton.disabled = index <= 0;
  if (dom.journalNextPageButton) dom.journalNextPageButton.disabled = index >= total - 1;
}

function selectJournalPage(pageId) {
  const canvas = getActiveNotebookCanvas();
  if (!canvas?.pages.some((page) => page.id === pageId)) return;
  flushJournalInkSnapshot();
  canvas.activePageId = pageId;
  saveState();
  renderJournalNotebook();
  centerJournalCanvasView(false);
}

function getActiveJournalPageIndex(canvas = getActiveNotebookCanvas()) {
  if (!canvas?.pages?.length) return 0;
  return Math.max(0, canvas.pages.findIndex((page) => page.id === canvas.activePageId));
}

function selectJournalPageByIndex(index) {
  const canvas = getActiveNotebookCanvas();
  if (!canvas?.pages.length) return;
  const safeIndex = clamp(Number(index) || 0, 0, canvas.pages.length - 1);
  canvas.activePageId = canvas.pages[safeIndex].id;
  saveState();
  renderJournalNotebook();
  centerJournalCanvasView(false);
}

function moveJournalPage(delta) {
  const canvas = getActiveNotebookCanvas();
  if (!canvas?.pages.length) return;
  selectJournalPageByIndex(getActiveJournalPageIndex(canvas) + delta);
}

function addJournalPage() {
  const canvas = getActiveNotebookCanvas();
  if (!canvas) return;
  flushJournalInkSnapshot();
  const page = createJournalPage(canvas.pages.length + 1);
  canvas.pages.push(page);
  canvas.activePageId = page.id;
  saveState();
  renderJournalNotebook();
  centerJournalCanvasView(true);
}

function deleteJournalPage() {
  const canvas = getActiveNotebookCanvas();
  if (!canvas) return;
  if (canvas.pages.length <= 1) {
    alert(localizedPair("至少保留一页。", "Keep at least one page."));
    return;
  }
  if (!window.confirm(text("journalConfirmDeletePage"))) return;
  flushJournalInkSnapshot();
  const activeIndex = Math.max(0, canvas.pages.findIndex((page) => page.id === canvas.activePageId));
  canvas.pages.splice(activeIndex, 1);
  canvas.activePageId = canvas.pages[Math.max(0, activeIndex - 1)]?.id || canvas.pages[0]?.id || "";
  saveState();
  renderJournalNotebook();
}

function handleJournalLongPressStart(event) {
  if (event.button && event.button !== 0) return;
  if (!event.target.closest("#journalSection")) return;
  if (journalInteractionMode === "pinching" || journalInteractionMode === "panning") return;
  clearJournalLongPressTimers();
  journalPressStart = { x: event.clientX, y: event.clientY };

  const notebookCard = event.target.closest(".journal-notebook-card");
  if (notebookCard && !dom.journalShelfView?.hidden) {
    const notebookId = notebookCard.dataset.notebookId;
    const { x, y } = journalPressStart;
    journalNotebookPressTimer = window.setTimeout(() => {
      suppressNextClick = true;
      openJournalNotebookActionMenu(notebookId, x, y);
    }, 650);
    return;
  }

  const toolButton = event.target.closest(".journal-canvas-tools button");
  if (toolButton && !dom.journalNotebookView?.hidden) {
    const canEditTool = toolButton.dataset.tool === "brush" || toolButton.dataset.tool === "eraser" || toolButton.dataset.action === "add-canvas-text";
    if (!canEditTool) return;
    const { x, y } = journalPressStart;
    journalToolPressTimer = window.setTimeout(() => {
      suppressNextClick = true;
      if (toolButton.dataset.tool === "brush") {
        openJournalBrushMenu(x, y);
      } else if (toolButton.dataset.tool === "eraser") {
        openJournalEraserMenu(x, y);
      } else if (toolButton.dataset.action === "add-canvas-text") {
        openJournalTextToolMenu(x, y);
      }
    }, 650);
    return;
  }

  const canvasItem = event.target.closest(".journal-canvas-item");
  if (canvasItem && !dom.journalNotebookView?.hidden) {
    const item = findJournalCanvasItem(canvasItem.dataset.itemId);
    const { x, y } = journalPressStart;
    const pressTarget = event.target;
    journalItemPressTimer = window.setTimeout(() => {
      suppressNextClick = true;
      cancelJournalInkStroke();
      openJournalCanvasItemMenu(canvasItem.dataset.itemId, x, y, pressTarget);
    }, 650);
  }
}

function handleJournalLongPressMove(event) {
  if (!journalPressStart) return;
  const distance = Math.abs(event.clientX - journalPressStart.x) + Math.abs(event.clientY - journalPressStart.y);
  if (distance > 10) clearJournalLongPressTimers();
}

function clearJournalLongPressTimers() {
  clearTimeout(journalNotebookPressTimer);
  clearTimeout(journalToolPressTimer);
  clearTimeout(journalItemPressTimer);
  journalNotebookPressTimer = null;
  journalToolPressTimer = null;
  journalItemPressTimer = null;
  journalPressStart = null;
}

function openJournalNotebookActionMenu(notebookId, x = window.innerWidth / 2, y = window.innerHeight / 2) {
  const notebook = getJournalNotebook(notebookId);
  if (!notebook) return;
  activeNotebookId = notebook.id;
  journalMenuTarget = { kind: "notebook", notebookId };
  renderJournalShelf();
  openJournalActionMenu(text("journalNotebookActions"), `
    <label class="journal-menu-field">
      <span>${escapeHtml(text("journalTitleField"))}</span>
      <input data-menu-field="notebook-title" value="${escapeHtml(notebook.title)}" />
    </label>
    <button type="button" data-action="journal-rename-notebook">${escapeHtml(text("save"))}</button>
    <div class="journal-menu-swatch-row">
      ${JOURNAL_COVER_STYLES.map((cover) => `<button class="${cover.id === notebook.coverStyle ? "active" : ""}" type="button" data-action="journal-set-cover-style" data-cover-style="${cover.id}" data-color="${cover.color}" style="--swatch:${cover.color}" aria-label="${escapeHtml(cover.label)}"></button>`).join("")}
    </div>
    <button type="button" data-action="journal-cover-import">${escapeHtml(text("journalImage"))}</button>
    <button type="button" data-action="journal-cover-remove" ${notebook.coverImage ? "" : "disabled"}>${escapeHtml(text("journalRemoveCover"))}</button>
    <button class="danger-menu-button" type="button" data-action="journal-delete-notebook-menu">${escapeHtml(text("journalDeleteNotebook"))}</button>
  `, x, y);
}

function openJournalBrushMenu(x = window.innerWidth / 2, y = window.innerHeight / 2) {
  journalMenuTarget = { kind: "brush" };
  openJournalActionMenu(text("journalToolBrush"), `
    <label class="journal-menu-field compact">
      <span>${escapeHtml(text("color"))}</span>
      <input type="color" data-journal-setting="brush-color" value="${journalBrushColor}" />
    </label>
    <label class="journal-menu-field">
      <span>${escapeHtml(text("journalBrushSize"))}: <b id="brushSizeValue">${journalBrushSize}</b></span>
      <input type="range" min="1" max="24" step="1" data-journal-setting="brush-size" value="${journalBrushSize}" />
    </label>
    <label class="journal-menu-field">
      <span>${escapeHtml(text("journalBrushOpacity"))}: <b id="brushOpacityValue">${Math.round(journalBrushOpacity * 100)}%</b></span>
      <input type="range" min="10" max="100" step="5" data-journal-setting="brush-opacity" value="${Math.round(journalBrushOpacity * 100)}" />
    </label>
    ${journalZoomControlsHtml()}
  `, x, y);
}

function openJournalEraserMenu(x = window.innerWidth / 2, y = window.innerHeight / 2) {
  journalMenuTarget = { kind: "eraser" };
  openJournalActionMenu(text("journalToolEraser"), `
    <label class="journal-menu-field">
      <span>${escapeHtml(text("journalBrushSize"))}: <b id="eraserSizeValue">${journalEraserSize}</b></span>
      <input type="range" min="8" max="72" step="2" data-journal-setting="eraser-size" value="${journalEraserSize}" />
    </label>
    ${journalZoomControlsHtml()}
  `, x, y);
}

function openJournalTextToolMenu(x = window.innerWidth / 2, y = window.innerHeight / 2) {
  journalMenuTarget = { kind: "text-tool" };
  openJournalActionMenu(text("journalToolText"), `
    <label class="journal-menu-field compact">
      <span>${escapeHtml(text("color"))}</span>
      <input type="color" data-journal-setting="text-color" value="${journalTextStyle.color}" />
    </label>
    <label class="journal-menu-field">
      <span>${escapeHtml(text("journalFont"))}</span>
      ${fontSelectHtml(journalTextStyle.font, "text-font")}
    </label>
    ${journalZoomControlsHtml()}
  `, x, y);
}

function openJournalCanvasItemMenu(itemId, x = window.innerWidth / 2, y = window.innerHeight / 2, pressTarget = null) {
  const item = findJournalCanvasItem(itemId);
  if (!item) return;
  const selection = getJournalTextSelection(itemId, pressTarget);
  journalMenuTarget = { kind: "canvas-item", itemId, selectionStart: selection.start, selectionEnd: selection.end };
  const title = item.type === "text" ? text("journalTextActions") : item.type === "audio" ? text("journalAudioBar") : text("journalItemActions");
  const textFields = item.type === "text" ? `
    <label class="journal-menu-field compact">
      <span>${escapeHtml(text("color"))}</span>
      <input type="color" data-menu-field="item-text-color" value="${item.textColor || journalTextStyle.color}" />
    </label>
    <label class="journal-menu-field">
      <span>${escapeHtml(text("journalFont"))}</span>
      ${fontSelectHtml(item.font || journalTextStyle.font, "item-font")}
    </label>
    <label class="journal-menu-toggle">
      <input type="checkbox" data-menu-field="item-strike" ${item.strike ? "checked" : ""} />
      <span>${escapeHtml(text("journalStrikeText"))}</span>
    </label>
    <label class="journal-menu-toggle">
      <input type="checkbox" data-menu-field="item-frame" ${item.frame ? "checked" : ""} />
      <span>${escapeHtml(text("journalTextFrame"))}</span>
    </label>
    <label class="journal-menu-field compact">
      <span>${escapeHtml(text("journalTextFrameColor"))}</span>
      <input type="color" data-menu-field="item-frame-color" value="${item.frameColor || "#ffffff"}" />
    </label>
    <button type="button" data-action="journal-apply-text-item">${escapeHtml(text("save"))}</button>
    <button type="button" data-action="journal-copy-text">${escapeHtml(text("journalCopyText"))}</button>
    <button type="button" data-action="journal-paste-text" ${copiedJournalText ? "" : "disabled"}>${escapeHtml(text("journalPasteText"))}</button>
  ` : "";
  const colorField = item.type === "shape" ? `
    <label class="journal-menu-field compact">
      <span>${escapeHtml(text("color"))}</span>
      <input type="color" data-menu-field="item-color" value="${item.color || "#d7ff2f"}" />
    </label>
    <button type="button" data-action="journal-apply-item-color">${escapeHtml(text("save"))}</button>
  ` : "";
  const audioFields = item.type === "audio" ? `
    <label class="journal-menu-field compact">
      <span>${escapeHtml(text("color"))}</span>
      <input type="color" data-menu-field="item-color" value="${item.color || "#050505"}" />
    </label>
    <label class="journal-menu-field">
      <span>${escapeHtml(text("journalAudioStart"))}</span>
      <input type="number" min="0" step="0.1" data-menu-field="audio-start" value="${item.clipStart || 0}" />
    </label>
    <label class="journal-menu-field">
      <span>${escapeHtml(text("journalAudioEnd"))}</span>
      <input type="number" min="0" step="0.1" data-menu-field="audio-end" value="${item.clipEnd || ""}" />
    </label>
    <button type="button" data-action="journal-apply-audio-clip">${escapeHtml(text("save"))}</button>
    <button type="button" data-action="journal-export-audio">${escapeHtml(text("journalAudioExport"))}</button>
  ` : "";
  const imageFields = item.type === "image" ? `
    <label class="journal-menu-field">
      <span>${escapeHtml(text("journalImageFit"))}</span>
      <select data-menu-field="image-fit">
        <option value="cover" ${item.fit !== "contain" ? "selected" : ""}>${escapeHtml(text("journalImageFitCover"))}</option>
        <option value="contain" ${item.fit === "contain" ? "selected" : ""}>${escapeHtml(text("journalImageFitContain"))}</option>
      </select>
    </label>
    <label class="journal-menu-field">
      <span>${escapeHtml(text("journalImageCropScale"))}: <b>${trimNumber(item.cropScale || 1)}x</b></span>
      <input type="range" min="1" max="3" step="0.05" data-menu-field="image-crop-scale" value="${item.cropScale || 1}" />
    </label>
    <label class="journal-menu-field">
      <span>${escapeHtml(text("journalImageCropX"))}</span>
      <input type="range" min="-50" max="50" step="1" data-menu-field="image-crop-x" value="${item.cropX || 0}" />
    </label>
    <label class="journal-menu-field">
      <span>${escapeHtml(text("journalImageCropY"))}</span>
      <input type="range" min="-50" max="50" step="1" data-menu-field="image-crop-y" value="${item.cropY || 0}" />
    </label>
    <button type="button" data-action="journal-image-layer-below">${escapeHtml(text("journalImageLayerBelow"))}</button>
    <button type="button" data-action="journal-image-layer-above">${escapeHtml(text("journalImageLayerAbove"))}</button>
  ` : "";
  openJournalActionMenu(title, `
    ${textFields}
    ${colorField}
    ${audioFields}
    ${imageFields}
    <button class="danger-menu-button" type="button" data-action="journal-delete-item">${escapeHtml(text("journalDeleteItem"))}</button>
  `, x, y);
}

function editJournalCanvasItem(item) {
  if (item.type === "text") {
    const value = window.prompt(text("journalTextPrompt"), item.text || "");
    if (value !== null) item.text = value.trim();
    const font = window.prompt(text("journalTextStylePrompt"), item.font || journalTextStyle.font);
    if (font !== null) item.font = normalizeJournalFont(font);
    const color = window.prompt(text("journalColorPrompt"), item.textColor || journalTextStyle.color);
    if (color) item.textColor = normalizeHexColor(color, item.textColor || journalTextStyle.color);
  } else if (item.type === "shape") {
    const color = window.prompt(text("journalColorPrompt"), item.color || "#d7ff2f");
    if (color) item.color = normalizeHexColor(color, item.color || "#d7ff2f");
  } else if (item.type === "image") {
    const name = window.prompt(text("journalCaption"), item.name || "");
    if (name !== null) item.name = name.trim();
  }
  saveState();
  renderJournalCanvasItems();
}

function openJournalActionMenu(title, bodyHtml, x, y) {
  if (!dom.journalActionMenu) return;
  dom.journalActionMenu.innerHTML = `
    <strong>${escapeHtml(title)}</strong>
    ${bodyHtml}
  `;
  dom.journalActionMenu.hidden = false;
  const width = dom.journalActionMenu.offsetWidth || 230;
  const height = dom.journalActionMenu.offsetHeight || 240;
  dom.journalActionMenu.style.left = `${clamp(x - width / 2, 12, window.innerWidth - width - 12)}px`;
  dom.journalActionMenu.style.top = `${clamp(y + 12, 12, window.innerHeight - height - 12)}px`;
}

function closeJournalActionMenu() {
  if (!dom.journalActionMenu) return;
  dom.journalActionMenu.hidden = true;
  dom.journalActionMenu.innerHTML = "";
  journalMenuTarget = null;
}

function journalZoomControlsHtml() {
  return `
    <div class="journal-menu-zoom">
      <span data-zoom-label>${escapeHtml(text("journalCanvasZoom"))}: ${Math.round(journalCanvasScale * 100)}%</span>
      <button type="button" data-action="journal-zoom-out">${escapeHtml(text("journalZoomOut"))}</button>
      <button type="button" data-action="journal-zoom-in">${escapeHtml(text("journalZoomIn"))}</button>
    </div>
  `;
}

function fontSelectHtml(value, fieldName) {
  const fonts = ["system-ui", "serif", "monospace", "cursive"];
  return `
    <select data-menu-field="${fieldName}">
      ${fonts.map((font) => `<option value="${font}" ${font === value ? "selected" : ""}>${font}</option>`).join("")}
    </select>
  `;
}

function getJournalTextSelection(itemId, pressTarget) {
  const textarea = pressTarget?.closest?.("textarea[data-item-id]")
    || getJournalCanvasTextarea(itemId);
  if (!textarea) return { start: 0, end: 0 };
  return {
    start: Number(textarea.selectionStart) || 0,
    end: Number(textarea.selectionEnd) || 0,
  };
}

function openJournalNewNotebookMenu(x = window.innerWidth / 2, y = window.innerHeight / 2) {
  journalMenuTarget = { kind: "new-notebook" };
  openJournalActionMenu(text("journalCreateNotebook"), `
    <label class="journal-menu-field">
      <span>${escapeHtml(text("journalTitleField"))}</span>
      <input data-menu-field="notebook-title" value="${escapeHtml(text("journalIdeaNotebook"))}" />
    </label>
    <div class="journal-menu-swatch-row">
      ${JOURNAL_COVER_STYLES.map((cover, index) => `<button class="${index === 0 ? "active" : ""}" type="button" data-action="journal-set-new-cover-style" data-cover-style="${cover.id}" data-color="${cover.color}" style="--swatch:${cover.color}" aria-label="${escapeHtml(cover.label)}"></button>`).join("")}
    </div>
    <button type="button" data-action="journal-create-notebook">${escapeHtml(text("save"))}</button>
  `, x, y);
}

function openJournalNewTextMenu(x = window.innerWidth / 2, y = window.innerHeight / 2) {
  journalMenuTarget = { kind: "new-text" };
  openJournalActionMenu(text("journalNewText"), `
    <label class="journal-menu-field">
      <span>${escapeHtml(text("journalToolText"))}</span>
      <textarea data-menu-field="new-text" rows="3">${escapeHtml(localizedPair("新的想法", "New idea"))}</textarea>
    </label>
    <label class="journal-menu-field compact">
      <span>${escapeHtml(text("color"))}</span>
      <input type="color" data-journal-setting="text-color" value="${journalTextStyle.color}" />
    </label>
    <label class="journal-menu-field">
      <span>${escapeHtml(text("journalFont"))}</span>
      ${fontSelectHtml(journalTextStyle.font, "text-font")}
    </label>
    <button type="button" data-action="journal-create-text">${escapeHtml(text("save"))}</button>
  `, x, y);
}

function createJournalNotebookFromMenu() {
  const title = dom.journalActionMenu?.querySelector("[data-menu-field='notebook-title']")?.value?.trim();
  if (!title) return;
  const selectedStyle = dom.journalActionMenu?.querySelector("[data-action='journal-set-new-cover-style'].active");
  const coverStyle = selectedStyle?.dataset.coverStyle || JOURNAL_COVER_STYLES[state.journal.notebooks.length % JOURNAL_COVER_STYLES.length].id;
  const color = selectedStyle?.dataset.color || JOURNAL_COVER_STYLES.find((style) => style.id === coverStyle)?.color || JOURNAL_NOTEBOOK_COLORS[0];
  const notebook = {
    id: makeId("notebook"),
    title,
    color: normalizeHexColor(color, JOURNAL_NOTEBOOK_COLORS[0]),
    coverStyle,
    coverImage: "",
    canvas: createEmptyJournalCanvas(),
    createdAt: new Date().toISOString(),
  };
  state.journal.notebooks.push(notebook);
  activeNotebookId = notebook.id;
  saveState();
  closeJournalActionMenu();
  renderJournalShelf();
  openJournalNotebook(notebook.id);
}

function renameJournalNotebookFromMenu() {
  const notebook = getJournalNotebook(journalMenuTarget?.notebookId || activeNotebookId);
  const title = dom.journalActionMenu?.querySelector("[data-menu-field='notebook-title']")?.value?.trim();
  if (!notebook || !title) return;
  notebook.title = title;
  saveState();
  closeJournalActionMenu();
  renderJournal();
}

function createJournalTextFromMenu() {
  const value = dom.journalActionMenu?.querySelector("[data-menu-field='new-text']")?.value?.trim();
  if (!value) return;
  const size = getJournalTextItemSize(value);
  addJournalCanvasItem({
    type: "text",
    text: value,
    w: size.w,
    h: size.h,
    color: "#ffffff",
    textColor: journalTextStyle.color,
    font: journalTextStyle.font,
    textAutoHeight: true,
  });
  closeJournalActionMenu();
}

function applyJournalTextItemFromMenu() {
  const item = findJournalCanvasItem(journalMenuTarget?.itemId);
  if (!item || item.type !== "text") return;
  const colorValue = dom.journalActionMenu?.querySelector("[data-menu-field='item-text-color']")?.value;
  const fontValue = dom.journalActionMenu?.querySelector("[data-menu-field='item-font']")?.value;
  const strikeValue = dom.journalActionMenu?.querySelector("[data-menu-field='item-strike']")?.checked;
  const frameValue = dom.journalActionMenu?.querySelector("[data-menu-field='item-frame']")?.checked;
  const frameColorValue = dom.journalActionMenu?.querySelector("[data-menu-field='item-frame-color']")?.value;
  item.textColor = normalizeHexColor(colorValue, item.textColor || journalTextStyle.color);
  item.font = normalizeJournalFont(fontValue || item.font || journalTextStyle.font);
  item.strike = Boolean(strikeValue);
  item.frame = Boolean(frameValue);
  item.frameColor = normalizeHexColor(frameColorValue, item.frameColor || "#ffffff");
  saveState();
  closeJournalActionMenu();
  renderJournalCanvasItems();
}

function copyJournalTextFromMenu() {
  const item = findJournalCanvasItem(journalMenuTarget?.itemId);
  if (!item || item.type !== "text") return;
  const value = item.text ?? "";
  const start = journalMenuTarget.selectionStart || 0;
  const end = journalMenuTarget.selectionEnd || 0;
  copiedJournalText = end > start ? value.slice(start, end) : value;
  closeJournalActionMenu();
}

function pasteJournalTextFromMenu() {
  const item = findJournalCanvasItem(journalMenuTarget?.itemId);
  if (!item || item.type !== "text" || !copiedJournalText) return;
  const value = item.text ?? "";
  const start = journalMenuTarget.selectionStart || value.length;
  const end = journalMenuTarget.selectionEnd || start;
  item.text = `${value.slice(0, start)}${copiedJournalText}${value.slice(end)}`;
  item.h = Math.max(item.h || 0, getJournalTextItemSize(item.text, item.w).h);
  saveState();
  closeJournalActionMenu();
  renderJournalCanvasItems();
}

function getJournalTextItemSize(value, width = 280) {
  const textValue = String(value || "");
  const safeWidth = clamp(Number(width) || 280, 230, 420);
  const charsPerLine = Math.max(7, Math.floor(safeWidth / 24));
  const visualLines = textValue.split("\n").reduce((count, line) => {
    return count + Math.max(1, Math.ceil(Array.from(line || " ").length / charsPerLine));
  }, 0);
  return {
    w: safeWidth,
    h: clamp(visualLines * 35 + 42, 92, 540),
  };
}

function deleteJournalMenuItem() {
  const itemId = journalMenuTarget?.itemId;
  if (!itemId || !window.confirm(text("journalConfirmDeleteCanvasItem"))) return;
  deleteJournalCanvasItem(itemId);
  closeJournalActionMenu();
}

function setJournalImageLayer(layer) {
  const itemId = journalMenuTarget?.itemId;
  const page = getActiveJournalPage();
  const item = findJournalCanvasItem(itemId);
  if (!page || !item || item.type !== "image") return;
  page.items = page.items.filter((entry) => entry.id !== item.id);
  if (layer === "above") {
    item.layer = "above";
    page.items.push(item);
  } else {
    item.layer = "below";
    page.items.unshift(item);
  }
  selectedJournalCanvasItemId = item.id;
  saveState();
  closeJournalActionMenu();
  renderJournalCanvasItems();
}

function applyJournalItemColorFromMenu() {
  const item = findJournalCanvasItem(journalMenuTarget?.itemId);
  if (!item || !["shape", "audio"].includes(item.type)) return;
  const colorValue = dom.journalActionMenu?.querySelector("[data-menu-field='item-color']")?.value;
  item.color = normalizeHexColor(colorValue, item.color || (item.type === "audio" ? "#050505" : "#d7ff2f"));
  saveState();
  closeJournalActionMenu();
  renderJournalCanvasItems();
}

function applyJournalAudioClipFromMenu() {
  const item = findJournalCanvasItem(journalMenuTarget?.itemId);
  if (!item || item.type !== "audio") return;
  const startValue = Number(dom.journalActionMenu?.querySelector("[data-menu-field='audio-start']")?.value || 0);
  const endValue = Number(dom.journalActionMenu?.querySelector("[data-menu-field='audio-end']")?.value || 0);
  item.clipStart = Math.max(0, startValue);
  item.clipEnd = Math.max(0, endValue);
  if (item.clipEnd && item.clipEnd <= item.clipStart) item.clipEnd = 0;
  const colorValue = dom.journalActionMenu?.querySelector("[data-menu-field='item-color']")?.value;
  item.color = normalizeHexColor(colorValue, item.color || "#050505");
  item.w = getJournalAudioVisualWidth(item);
  saveState();
  closeJournalActionMenu();
  renderJournalCanvasItems();
}

async function exportJournalAudioItem() {
  const item = findJournalCanvasItem(journalMenuTarget?.itemId);
  if (!item || item.type !== "audio" || !item.src) return;
  closeJournalActionMenu();
  try {
    const exportResult = await createJournalAudioExport(item);
    downloadBlob(exportResult.blob, journalAudioExportFilename(item, exportResult.extension));
  } catch (error) {
    try {
      downloadDataUrl(item.src, journalAudioExportFilename(item, journalAudioSourceExtension(item.src)));
    } catch (fallbackError) {
      alert(text("journalAudioExportFailed"));
    }
  }
}

async function createJournalAudioExport(item) {
  const hasClip = Boolean(item.clipStart || item.clipEnd);
  const response = await fetch(item.src);
  if (!hasClip) {
    const blob = await response.blob();
    return { blob, extension: journalAudioMimeExtension(blob.type) };
  }
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) throw new Error("AudioContext unavailable");
  const arrayBuffer = await response.arrayBuffer();
  let audioContext = null;
  try {
    audioContext = new AudioContextClass();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    const start = Math.max(0, Number(item.clipStart) || 0);
    const end = getJournalAudioClipEnd(item);
    const wavBuffer = encodeAudioBufferRangeToWav(audioBuffer, start, end);
    return { blob: new Blob([wavBuffer], { type: "audio/wav" }), extension: "wav" };
  } finally {
    audioContext?.close?.();
  }
}

function encodeAudioBufferRangeToWav(audioBuffer, startSeconds, endSeconds) {
  const sampleRate = audioBuffer.sampleRate;
  const channelCount = Math.min(2, audioBuffer.numberOfChannels || 1);
  const startFrame = clamp(Math.floor(startSeconds * sampleRate), 0, audioBuffer.length - 1);
  const endFrame = clamp(Math.ceil(endSeconds * sampleRate), startFrame + 1, audioBuffer.length);
  const frameCount = endFrame - startFrame;
  const bytesPerSample = 2;
  const dataSize = frameCount * channelCount * bytesPerSample;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);
  let offset = 0;
  const writeString = (value) => {
    for (let index = 0; index < value.length; index += 1) {
      view.setUint8(offset, value.charCodeAt(index));
      offset += 1;
    }
  };
  writeString("RIFF");
  view.setUint32(offset, 36 + dataSize, true); offset += 4;
  writeString("WAVE");
  writeString("fmt ");
  view.setUint32(offset, 16, true); offset += 4;
  view.setUint16(offset, 1, true); offset += 2;
  view.setUint16(offset, channelCount, true); offset += 2;
  view.setUint32(offset, sampleRate, true); offset += 4;
  view.setUint32(offset, sampleRate * channelCount * bytesPerSample, true); offset += 4;
  view.setUint16(offset, channelCount * bytesPerSample, true); offset += 2;
  view.setUint16(offset, 16, true); offset += 2;
  writeString("data");
  view.setUint32(offset, dataSize, true); offset += 4;
  for (let frame = startFrame; frame < endFrame; frame += 1) {
    for (let channel = 0; channel < channelCount; channel += 1) {
      const sample = clamp(audioBuffer.getChannelData(channel)[frame] || 0, -1, 1);
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
      offset += 2;
    }
  }
  return buffer;
}

function journalAudioExportFilename(item, extension = "webm") {
  const base = String(item.name || text("journalRecord"))
    .trim()
    .replace(/[\\/:*?"<>|]+/g, "-")
    .replace(/\s+/g, "-")
    .slice(0, 48) || "audio";
  const clipLabel = item.clipStart || item.clipEnd ? `-${trimNumber(item.clipStart || 0)}-${trimNumber(getJournalAudioClipEnd(item))}s` : "";
  return `${base}${clipLabel}.${extension || "webm"}`;
}

function journalAudioSourceExtension(src) {
  const match = String(src || "").match(/^data:audio\/([^;,]+)/i);
  return journalAudioMimeExtension(match ? `audio/${match[1]}` : "");
}

function journalAudioMimeExtension(mimeType) {
  const type = String(mimeType || "").toLowerCase();
  if (type.includes("wav")) return "wav";
  if (type.includes("mpeg") || type.includes("mp3")) return "mp3";
  if (type.includes("mp4") || type.includes("aac")) return "m4a";
  if (type.includes("ogg")) return "ogg";
  return "webm";
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function downloadDataUrl(dataUrl, filename) {
  const anchor = document.createElement("a");
  anchor.href = dataUrl;
  anchor.download = filename;
  anchor.click();
}

function refreshJournalZoomMenu(button) {
  const label = button.closest(".journal-menu-zoom")?.querySelector("[data-zoom-label]");
  if (label) label.textContent = `${text("journalCanvasZoom")}: ${Math.round(journalCanvasScale * 100)}%`;
}

function openJournalPageMenu(x = window.innerWidth / 2, y = window.innerHeight / 2) {
  const canvas = getActiveNotebookCanvas();
  if (!canvas) return;
  const current = getActiveJournalPageIndex(canvas) + 1;
  journalMenuTarget = { kind: "page-manager" };
  openJournalActionMenu(text("journalPageManager"), `
    <label class="journal-menu-field">
      <span>${escapeHtml(text("journalPageNumber"))}</span>
      <input type="number" min="1" max="${canvas.pages.length}" step="1" data-menu-field="page-number" value="${current}" />
    </label>
    <button type="button" data-action="journal-jump-page">${escapeHtml(text("journalJumpPage"))}</button>
    <button type="button" data-action="add-journal-page">${escapeHtml(text("journalAddPage"))}</button>
    <button class="danger-menu-button" type="button" data-action="delete-journal-page" ${canvas.pages.length <= 1 ? "disabled" : ""}>${escapeHtml(text("journalDeletePage"))}</button>
  `, x, y);
}

function jumpJournalPageFromMenu() {
  const canvas = getActiveNotebookCanvas();
  if (!canvas) return;
  const input = dom.journalActionMenu?.querySelector("[data-menu-field='page-number']");
  const pageNumber = clamp(Number(input?.value) || 1, 1, canvas.pages.length);
  closeJournalActionMenu();
  selectJournalPageByIndex(pageNumber - 1);
}

function handleJournalActionMenuInput(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) return;
  const setting = target.dataset.journalSetting || target.dataset.menuField;
  if (setting === "brush-color") {
    journalBrushColor = normalizeHexColor(target.value, journalBrushColor);
  }
  if (setting === "brush-size") {
    journalBrushSize = clamp(Number(target.value) || journalBrushSize, 1, 24);
    const value = dom.journalActionMenu?.querySelector("#brushSizeValue");
    if (value) value.textContent = String(journalBrushSize);
  }
  if (setting === "brush-opacity") {
    journalBrushOpacity = clamp((Number(target.value) || 100) / 100, 0.1, 1);
    const value = dom.journalActionMenu?.querySelector("#brushOpacityValue");
    if (value) value.textContent = `${Math.round(journalBrushOpacity * 100)}%`;
  }
  if (setting === "eraser-size") {
    journalEraserSize = clamp(Number(target.value) || journalEraserSize, 8, 72);
    const value = dom.journalActionMenu?.querySelector("#eraserSizeValue");
    if (value) value.textContent = String(journalEraserSize);
  }
  if (setting === "text-color") {
    journalTextStyle.color = normalizeHexColor(target.value, journalTextStyle.color);
  }
  if (setting === "text-font") {
    journalTextStyle.font = normalizeJournalFont(target.value);
  }
  if (journalMenuTarget?.kind === "canvas-item") {
    updateJournalCanvasItemFromMenu(target);
  }
}

function updateJournalCanvasItemFromMenu(target) {
  const item = findJournalCanvasItem(journalMenuTarget?.itemId);
  if (!item) return;
  const field = target.dataset.menuField;
  if (item.type === "text") {
    if (field === "item-text-color") item.textColor = normalizeHexColor(target.value, item.textColor || journalTextStyle.color);
    if (field === "item-font") item.font = normalizeJournalFont(target.value || item.font || journalTextStyle.font);
    if (field === "item-strike") item.strike = Boolean(target.checked);
    if (field === "item-frame") item.frame = Boolean(target.checked);
    if (field === "item-frame-color") item.frameColor = normalizeHexColor(target.value, item.frameColor || "#ffffff");
    saveState();
    applyJournalTextItemVisuals(item);
    return;
  }
  if (item.type === "audio" && field === "item-color") {
    item.color = normalizeHexColor(target.value, item.color || "#050505");
    saveState();
    renderJournalCanvasItems();
  }
  if (item.type === "image") {
    if (field === "image-fit") item.fit = target.value === "contain" ? "contain" : "cover";
    if (field === "image-crop-scale") item.cropScale = clamp(Number(target.value) || 1, 1, 3);
    if (field === "image-crop-x") item.cropX = clamp(Number(target.value) || 0, -50, 50);
    if (field === "image-crop-y") item.cropY = clamp(Number(target.value) || 0, -50, 50);
    saveState();
    renderJournalCanvasItems();
  }
}

function setJournalCanvasScale(scale) {
  const nextScale = clamp(Number(scale) || 1, 0.45, 2.5);
  if (Math.abs(nextScale - journalCanvasScale) < 0.01) return;
  cancelJournalInkStroke();
  const shell = dom.journalCanvasShell;
  const board = dom.journalCanvasBoard;
  if (shell && board) {
    const centerX = (shell.scrollLeft + shell.clientWidth / 2) / journalCanvasScale;
    const centerY = (shell.scrollTop + shell.clientHeight / 2) / journalCanvasScale;
    journalCanvasScale = nextScale;
    applyJournalCanvasScale();
    shell.scrollLeft = Math.max(0, centerX * journalCanvasScale - shell.clientWidth / 2);
    shell.scrollTop = Math.max(0, centerY * journalCanvasScale - shell.clientHeight / 2);
    return;
  }
  journalCanvasScale = nextScale;
  applyJournalCanvasScale();
}

function handleJournalCanvasWheel(event) {
  if (!event.ctrlKey && !event.metaKey) return;
  event.preventDefault();
  setJournalCanvasScale(journalCanvasScale + (event.deltaY < 0 ? 0.1 : -0.1));
}

function handleJournalCanvasTouchStart(event) {
  if (event.touches.length >= 2) {
    event.preventDefault();
    enterJournalPinchMode(event);
  }
}

function handleJournalCanvasTouchMove(event) {
  if (event.touches.length >= 2) {
    event.preventDefault();
    if (!journalPinchState || journalInteractionMode !== "pinching") {
      enterJournalPinchMode(event);
    }
    updateJournalPinchPan(event);
    return;
  }
  if (journalInteractionMode === "panning" && journalPanState && event.touches.length === 1) {
    event.preventDefault();
    const touch = event.touches[0];
    dom.journalCanvasShell.scrollLeft = journalPanState.scrollLeft - (touch.clientX - journalPanState.x);
    dom.journalCanvasShell.scrollTop = journalPanState.scrollTop - (touch.clientY - journalPanState.y);
  }
}

function handleJournalCanvasTouchEnd(event) {
  if (event.touches.length >= 2) {
    enterJournalPinchMode(event);
    return;
  }
  journalPinchState = null;
  journalIsPinching = false;
  journalPinchCooldownUntil = Date.now() + 260;
  if (event.touches.length === 1 && journalInteractionMode === "pinching") {
    const touch = event.touches[0];
    journalInteractionMode = "panning";
    journalPanState = {
      x: touch.clientX,
      y: touch.clientY,
      scrollLeft: dom.journalCanvasShell?.scrollLeft || 0,
      scrollTop: dom.journalCanvasShell?.scrollTop || 0,
    };
    return;
  }
  journalPanState = null;
  if (journalInteractionMode === "pinching" || journalInteractionMode === "panning") {
    journalInteractionMode = "idle";
  }
}

function handleJournalNativeMenu(event) {
  if (!event.target.closest?.("#journalSection")) return;
  if (journalTool === "brush" || journalTool === "eraser") {
    event.preventDefault();
    clearJournalNativeSelection();
    return;
  }
  if (!event.target.closest?.(".journal-canvas-shell")) return;
  if (isJournalTextEditingTarget(event.target)) return;
  event.preventDefault();
  clearJournalNativeSelection();
}

function handleJournalNativeSelection(event) {
  if (!event.target.closest?.("#journalSection")) return;
  if (journalTool === "brush" || journalTool === "eraser") {
    event.preventDefault();
    clearJournalNativeSelection();
    return;
  }
  if (!event.target.closest?.(".journal-canvas-shell")) return;
  if (isJournalTextEditingTarget(event.target)) return;
  event.preventDefault();
}

function handleJournalNativeTouchStart(event) {
  const target = event.target;
  if (!target.closest?.("#journalSection")) return;
  if (isJournalTextEditingTarget(target)) return;
  if (target.closest?.("button, input, select, audio")) return;
  if (target.closest?.("textarea") && !target.closest?.(".journal-canvas-shell")) return;
  if (!target.closest?.(".journal-canvas-shell")) return;
  const canvasItem = target.closest?.(".journal-canvas-item");
  if (canvasItem && !canvasItem.classList.contains("text-item")) return;
  clearJournalNativeSelection();
  if ((journalTool === "brush" || journalTool === "eraser") && event.cancelable) {
    event.preventDefault();
  }
}

function isJournalTextEditingTarget(target) {
  const textarea = target.closest?.("textarea[data-item-id]");
  return Boolean(textarea && document.activeElement === textarea && textarea.closest(".text-item.is-editing"));
}

function clearJournalNativeSelection() {
  const selection = window.getSelection?.();
  if (selection && selection.rangeCount) selection.removeAllRanges();
}

function handleJournalSelectionChange() {
  if (journalTool !== "brush" && journalTool !== "eraser") return;
  const selection = window.getSelection?.();
  if (!selection || !selection.rangeCount) return;
  const node = selection.anchorNode;
  const element = node?.nodeType === Node.ELEMENT_NODE ? node : node?.parentElement;
  if (element?.closest?.("#journalSection")) selection.removeAllRanges();
}

function touchDistance(first, second) {
  return Math.hypot(first.clientX - second.clientX, first.clientY - second.clientY);
}

function touchCenter(first, second) {
  return {
    x: (first.clientX + second.clientX) / 2,
    y: (first.clientY + second.clientY) / 2,
  };
}

function enterJournalPinchMode(event) {
  const shell = dom.journalCanvasShell;
  if (!shell || event.touches.length < 2) return;
  clearJournalLongPressTimers();
  cancelJournalInkStroke();
  journalItemDrag = null;
  journalItemResize = null;
  journalInteractionMode = "pinching";
  journalIsPinching = true;
  journalPinchCooldownUntil = Date.now() + 260;
  const first = event.touches[0];
  const second = event.touches[1];
  const center = touchCenter(first, second);
  const shellRect = shell.getBoundingClientRect();
  const viewportX = center.x - shellRect.left;
  const viewportY = center.y - shellRect.top;
  journalPinchState = {
    distance: touchDistance(first, second),
    scale: journalCanvasScale,
    contentX: (shell.scrollLeft + viewportX) / journalCanvasScale,
    contentY: (shell.scrollTop + viewportY) / journalCanvasScale,
  };
}

function updateJournalPinchPan(event) {
  const shell = dom.journalCanvasShell;
  if (!shell || !journalPinchState || event.touches.length < 2) return;
  const first = event.touches[0];
  const second = event.touches[1];
  const distance = touchDistance(first, second);
  const nextScale = clamp(
    journalPinchState.scale * (distance / Math.max(1, journalPinchState.distance)),
    0.45,
    2.5
  );
  const center = touchCenter(first, second);
  const shellRect = shell.getBoundingClientRect();
  const viewportX = center.x - shellRect.left;
  const viewportY = center.y - shellRect.top;
  journalCanvasScale = nextScale;
  applyJournalCanvasScale();
  shell.scrollLeft = Math.max(0, journalPinchState.contentX * journalCanvasScale - viewportX);
  shell.scrollTop = Math.max(0, journalPinchState.contentY * journalCanvasScale - viewportY);
}

function openJournalScreen() {
  journalCoverPaletteOpen = false;
  showAppView("journalSection");
  requestAnimationFrame(() => {
    showJournalShelf();
  });
}

function closeJournalScreen() {
  flushJournalInkSnapshot();
  stopJournalRecording();
  document.body.classList.remove("journal-notebook-open");
  showAppView("overviewSection");
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
      if (currentAuthUser) {
        void getCloudBackupStatus({ silent: true });
      } else {
        cloudBackupStatus = null;
        updateCloudBackupStatusUI();
      }
    });
    if (currentAuthUser) void getCloudBackupStatus({ silent: true });
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
    setAccountMessage("登录成功。你已进入云端账号模式，可以上传或恢复云端备份。", "success");
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
  renderCloudBackupPanel();
}

function updateAuthUI(user = currentAuthUser) {
  currentAuthUser = user || null;
  const email = currentAuthUser?.email || "";
  if (dom.accountEntryStatus) {
    dom.accountEntryStatus.textContent = email ? `已登录：${email}` : "本地模式";
  }
  if (dom.accountCenterEntry) {
    dom.accountCenterEntry.classList.toggle("is-signed-in", Boolean(email));
    dom.accountCenterEntry.title = email ? `已登录：${email}` : "当前为本地模式";
  }
  if (dom.accountModeText) {
    dom.accountModeText.textContent = email
      ? "你已登录，之后可以将本地数据同步到云端。"
      : "你正在使用本地模式。登录后可以开启云端备份。";
  }
  if (dom.accountCurrentEmail) dom.accountCurrentEmail.textContent = email || "未登录";
  if (dom.accountCloudText) dom.accountCloudText.textContent = email ? "云端备份：可用" : "云端功能：未开启";
  if (dom.accountSignOutButton) dom.accountSignOutButton.hidden = !email;
  if (dom.accountSignInButton) dom.accountSignInButton.hidden = Boolean(email);
  if (dom.accountSignUpButton) dom.accountSignUpButton.hidden = Boolean(email);
  updateCloudBackupStatusUI();
}

function setAccountMessage(message, type = "muted") {
  if (!dom.accountMessage) return;
  dom.accountMessage.textContent = message;
  dom.accountMessage.dataset.state = type;
}

function setAccountBusy(isBusy) {
  [dom.accountSignUpButton, dom.accountSignInButton, dom.accountSignOutButton].forEach((button) => {
    if (button) button.disabled = isBusy;
  });
}

function setCloudBackupBusy(isBusy) {
  cloudBackupBusy = isBusy;
  updateCloudBackupStatusUI();
}

function readCloudLocalMeta() {
  try {
    const raw = localStorage.getItem(CLOUD_LOCAL_META_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function writeCloudLocalMeta(meta) {
  try {
    localStorage.setItem(CLOUD_LOCAL_META_KEY, JSON.stringify({
      ...readCloudLocalMeta(),
      ...meta,
      updatedAt: meta.updatedAt || new Date().toISOString(),
    }));
  } catch (error) {
    console.warn("Failed to save cloud sync meta.", error);
  }
}

function markLocalAppDataUpdated() {
  writeCloudLocalMeta({ updatedAt: new Date().toISOString() });
}

function getLocalAppUpdatedAt() {
  const meta = readCloudLocalMeta();
  const candidates = [
    meta.updatedAt,
    state?.updatedAt,
    state?.lastSavedAt,
  ].filter(Boolean);
  const valid = candidates
    .map((value) => new Date(value))
    .filter((date) => !Number.isNaN(date.getTime()))
    .sort((a, b) => b.getTime() - a.getTime());
  return valid[0]?.toISOString() || "";
}

function compareCloudTimes(localTime, cloudTime) {
  const localDate = localTime ? new Date(localTime) : null;
  const cloudDate = cloudTime ? new Date(cloudTime) : null;
  const localMs = localDate && !Number.isNaN(localDate.getTime()) ? localDate.getTime() : 0;
  const cloudMs = cloudDate && !Number.isNaN(cloudDate.getTime()) ? cloudDate.getTime() : 0;
  if (!localMs || !cloudMs) return "unknown";
  if (cloudMs + 60 * 1000 < localMs) return "cloud-older";
  if (localMs + 60 * 1000 < cloudMs) return "local-older";
  return "same";
}

function collectAllLocalAppData() {
  const data = {};
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (!key) continue;
    data[key] = localStorage.getItem(key);
  }
  return {
    exportedAt: new Date().toISOString(),
    localUpdatedAt: getLocalAppUpdatedAt() || new Date().toISOString(),
    schemaVersion: CLOUD_BACKUP_SCHEMA_VERSION,
    origin: window.location.origin,
    localStorage: data,
  };
}

function exportLocalBackupJson() {
  const dataPackage = collectAllLocalAppData();
  const blob = new Blob([JSON.stringify(dataPackage, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `life-app-local-backup-${todayISO()}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
  setAccountMessage("已导出本地备份 JSON。", "success");
}

function restoreAllLocalAppData(data, options = {}) {
  if (!data || typeof data !== "object" || !data.localStorage || typeof data.localStorage !== "object") {
    alert("云端数据格式不正确。");
    return false;
  }
  const { skipConfirm = false } = options;
  const ok = skipConfirm || confirm("这会用云端数据覆盖当前本地数据，建议先导出本地备份。是否继续？");
  if (!ok) return false;
  Object.entries(data.localStorage).forEach(([key, value]) => {
    if (typeof key !== "string") return;
    localStorage.setItem(key, value == null ? "" : String(value));
  });
  writeCloudLocalMeta({
    updatedAt: data.localUpdatedAt || data.exportedAt || new Date().toISOString(),
    restoredAt: new Date().toISOString(),
  });
  alert("云端数据已恢复，请刷新页面。");
  return true;
}

function confirmCloudUploadOverwrite(localTime, cloudTime) {
  const relation = compareCloudTimes(localTime, cloudTime);
  const lines = [
    "这会用当前本地数据覆盖云端备份，是否继续？",
    "",
    `本地最后更新：${formatCloudBackupTime(localTime)}`,
    `云端最后备份：${formatCloudBackupTime(cloudTime)}`,
  ];
  if (relation === "local-older") {
    lines.push("", "本地数据看起来比云端旧，确认要覆盖云端吗？");
  }
  return confirm(lines.join("\n"));
}

function confirmCloudDownloadOverwrite(localTime, cloudTime) {
  const relation = compareCloudTimes(localTime, cloudTime);
  const lines = [
    "这会用云端数据覆盖当前本地数据，建议先导出本地备份。",
    "",
    `本地最后更新：${formatCloudBackupTime(localTime)}`,
    `云端最后备份：${formatCloudBackupTime(cloudTime)}`,
  ];
  if (relation === "cloud-older") {
    lines.push("", "云端备份看起来比本地数据旧。");
  }
  lines.push("", "是否继续？");
  return confirm(lines.join("\n"));
}

async function uploadLocalDataToCloud() {
  const client = await ensureSupabaseClientForAuth();
  const user = getCurrentUser();
  if (!client || !user) {
    alert("请先登录账号。");
    return;
  }
  setCloudBackupBusy(true);
  setAccountMessage("正在检查云端状态...", "muted");
  try {
    const latestStatus = await getCloudBackupStatus({ silent: true });
    const dataPackage = collectAllLocalAppData();
    const cloudTime = latestStatus?.updated_at || "";
    const localTime = dataPackage.localUpdatedAt || dataPackage.exportedAt;
    if (!confirmCloudUploadOverwrite(localTime, cloudTime)) {
      setAccountMessage("已取消上传。", "muted");
      return;
    }
    setAccountMessage("正在上传本地数据到云端...", "muted");
    const uploadedAt = new Date().toISOString();
    const { error } = await client
      .from("user_app_data")
      .upsert(
        {
          user_id: user.id,
          data_json: dataPackage,
          version: CLOUD_BACKUP_SCHEMA_VERSION,
          updated_at: uploadedAt,
        },
        { onConflict: "user_id" }
      );
    if (error) throw error;
    writeCloudLocalMeta({ updatedAt: localTime, lastUploadedAt: uploadedAt });
    setAccountMessage("已上传到云端。", "success");
    await getCloudBackupStatus({ silent: true });
  } catch (error) {
    console.error(error);
    setAccountMessage(`上传失败：${authErrorMessage(error)}`, "error");
    alert(`上传失败：${authErrorMessage(error)}`);
  } finally {
    setCloudBackupBusy(false);
  }
}

async function downloadCloudDataToLocal() {
  const client = await ensureSupabaseClientForAuth();
  const user = getCurrentUser();
  if (!client || !user) {
    alert("请先登录账号。");
    return;
  }
  setCloudBackupBusy(true);
  setAccountMessage("正在读取云端数据...", "muted");
  try {
    const { data, error } = await client
      .from("user_app_data")
      .select("data_json, updated_at, version")
      .eq("user_id", user.id)
      .maybeSingle();
    if (error) throw error;
    if (!data?.data_json) {
      setAccountMessage("云端还没有备份数据。", "muted");
      alert("云端还没有备份数据。");
      return;
    }
    cloudBackupStatus = data;
    updateCloudBackupStatusUI();
    const localTime = getLocalAppUpdatedAt();
    const cloudTime = data.updated_at || data.data_json?.localUpdatedAt || data.data_json?.exportedAt || "";
    if (!confirmCloudDownloadOverwrite(localTime, cloudTime)) {
      setAccountMessage("已取消恢复。", "muted");
      return;
    }
    if (restoreAllLocalAppData(data.data_json, { skipConfirm: true })) {
      setAccountMessage("云端数据已恢复，请刷新页面。", "success");
    } else {
      setAccountMessage("已取消恢复。", "muted");
    }
  } catch (error) {
    console.error(error);
    setAccountMessage(`读取云端数据失败：${authErrorMessage(error)}`, "error");
    alert(`读取云端数据失败：${authErrorMessage(error)}`);
  } finally {
    setCloudBackupBusy(false);
  }
}

async function getCloudBackupStatus(options = {}) {
  const { silent = false } = options;
  const client = await ensureSupabaseClientForAuth();
  const user = getCurrentUser();
  if (!client || !user) {
    cloudBackupStatus = null;
    updateCloudBackupStatusUI();
    if (!silent) alert("请先登录账号。");
    return null;
  }
  if (!silent) setAccountMessage("正在查看云端状态...", "muted");
  try {
    const { data, error } = await client
      .from("user_app_data")
      .select("updated_at, version, data_json")
      .eq("user_id", user.id)
      .maybeSingle();
    if (error) throw error;
    cloudBackupStatus = data || null;
    updateCloudBackupStatusUI();
    if (!silent) {
      setAccountMessage(data ? "已读取云端备份状态。" : "云端还没有备份。", data ? "success" : "muted");
    }
    return data || null;
  } catch (error) {
    console.error(error);
    if (!silent) setAccountMessage(`查看云端状态失败：${authErrorMessage(error)}`, "error");
    return null;
  }
}

function renderCloudBackupPanel() {
  updateCloudBackupStatusUI();
}

function updateCloudBackupStatusUI() {
  const user = getCurrentUser();
  const isSignedIn = Boolean(user);
  const email = user?.email || "未登录";
  const updatedAt = cloudBackupStatus?.updated_at ? formatCloudBackupTime(cloudBackupStatus.updated_at) : "暂无";
  const localUpdatedAt = getLocalAppUpdatedAt();
  const version = cloudBackupStatus?.version || "暂无";
  if (dom.cloudBackupEmail) dom.cloudBackupEmail.textContent = email;
  if (dom.cloudBackupUpdatedAt) dom.cloudBackupUpdatedAt.textContent = updatedAt;
  if (dom.cloudLocalUpdatedAt) dom.cloudLocalUpdatedAt.textContent = formatCloudBackupTime(localUpdatedAt);
  if (dom.cloudBackupVersion) dom.cloudBackupVersion.textContent = version;
  if (dom.cloudBackupStatusText) {
    const relation = compareCloudTimes(localUpdatedAt, cloudBackupStatus?.updated_at || "");
    const relationText = relation === "cloud-older"
      ? "云端备份看起来比本地旧。"
      : relation === "local-older"
        ? "本地数据看起来比云端旧。"
        : "";
    dom.cloudBackupStatusText.textContent = isSignedIn
      ? (cloudBackupStatus?.updated_at ? `云端最后备份：${updatedAt}${relationText ? ` ${relationText}` : ""}` : "云端还没有备份。")
      : "登录后可以将本地数据备份到云端。";
  }
  if (dom.cloudBackupNote) {
    dom.cloudBackupNote.textContent = isSignedIn
      ? "上传和恢复前都会二次确认；恢复前建议先导出本地备份 JSON。"
      : "未登录时继续使用本地模式，登录后再开启云端备份。";
  }
  [dom.cloudUploadButton, dom.cloudDownloadButton, dom.cloudStatusButton].forEach((button) => {
    if (button) button.disabled = !isSignedIn || cloudBackupBusy;
  });
}

function formatCloudBackupTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "暂无";
  const pad = (number) => String(number).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function authErrorMessage(error) {
  const message = String(error?.message || error || "账号请求失败。");
  if (message.includes("Invalid login credentials")) return "邮箱或密码不正确。";
  if (message.includes("Email not confirmed")) return "邮箱还没有确认，请先查看邮箱里的确认邮件。";
  if (message.includes("User already registered")) return "这个邮箱已经注册过了，可以直接登录。";
  if (message.includes("Password should be")) return "密码强度不够，请至少使用 6 位密码。";
  if (message.includes("Failed to fetch")) return "网络连接失败，请稍后再试。";
  return message;
}

function showJournalShelf() {
  flushJournalInkSnapshot();
  stopJournalRecording();
  document.body.classList.remove("journal-notebook-open");
  if (dom.journalPanel) dom.journalPanel.hidden = false;
  if (dom.journalShelfView) dom.journalShelfView.hidden = false;
  if (dom.journalNotebookView) dom.journalNotebookView.hidden = true;
  activeJournalId = "";
  renderJournalShelf();
}

function openJournalNotebook(notebookId) {
  const notebook = getJournalNotebook(notebookId);
  if (!notebook) return;
  activeNotebookId = notebook.id;
  if (dom.journalPanel) dom.journalPanel.hidden = false;
  document.body.classList.add("journal-notebook-open");
  if (dom.journalShelfView) dom.journalShelfView.hidden = true;
  if (dom.journalNotebookView) dom.journalNotebookView.hidden = false;
  renderJournalNotebook();
  requestAnimationFrame(() => centerJournalCanvasView(true));
}

function addJournalNotebook() {
  openJournalNewNotebookMenu(window.innerWidth / 2, window.innerHeight / 2);
}

function renameJournalNotebook() {
  const notebook = getJournalNotebook(activeNotebookId);
  if (!notebook) return;
  openJournalNotebookActionMenu(notebook.id, window.innerWidth / 2, window.innerHeight / 2);
}

function setJournalCoverColor(color, coverStyle) {
  const notebook = getJournalNotebook(activeNotebookId);
  if (!notebook) return;
  notebook.color = normalizeHexColor(color, notebook.color || JOURNAL_NOTEBOOK_COLORS[0]);
  notebook.coverStyle = normalizeCoverStyle(coverStyle, notebook.color, 0);
  saveState();
  renderJournalCoverPalette();
  renderJournalShelf();
}

function removeJournalCoverImage() {
  const notebook = getJournalNotebook(activeNotebookId);
  if (!notebook?.coverImage) return;
  if (!window.confirm(text("journalConfirmRemoveCover"))) return;
  notebook.coverImage = "";
  saveState();
  renderJournalCoverPalette();
  renderJournalShelf();
}

function deleteJournalNotebook() {
  const notebook = getJournalNotebook(activeNotebookId);
  if (!notebook) return;
  if (state.journal.notebooks.length <= 1) {
    alert(localizedPair("至少保留一本本子。", "Keep at least one notebook."));
    return;
  }
  if (!window.confirm(text("journalConfirmDeleteNotebook"))) return;
  state.journal.notebooks = state.journal.notebooks.filter((item) => item.id !== notebook.id);
  state.journal.entries = state.journal.entries.filter((entry) => entry.notebookId !== notebook.id);
  activeNotebookId = state.journal.notebooks[0]?.id || "";
  saveState();
  showJournalShelf();
}

function setJournalTool(tool) {
  if (!["brush", "eraser", "select"].includes(tool)) return;
  journalTool = tool;
  renderJournalToolButtons();
  if (tool === "brush" || tool === "eraser") {
    selectJournalCanvasItem("");
  }
}

function renderJournalToolButtons() {
  dom.journalToolButtons?.forEach((button) => {
    const active = button.dataset.tool === journalTool;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function getActiveNotebookCanvas() {
  const notebook = getJournalNotebook(activeNotebookId);
  if (!notebook) return null;
  notebook.canvas = normalizeJournalCanvas(notebook.canvas);
  return notebook.canvas;
}

function getActiveJournalPage() {
  const canvas = getActiveNotebookCanvas();
  if (!canvas) return null;
  let page = canvas.pages.find((item) => item.id === canvas.activePageId);
  if (!page) {
    page = canvas.pages[0];
    canvas.activePageId = page?.id || "";
  }
  return page || null;
}

function addJournalCanvasItem(item) {
  const page = getActiveJournalPage();
  if (!page) return null;
  const position = getCanvasDropPosition();
  const canvasItem = {
    id: makeId(item.type || "canvas"),
    x: clamp(position.x, 0, JOURNAL_CANVAS_WIDTH - 80),
    y: clamp(position.y, 0, JOURNAL_CANVAS_HEIGHT - 80),
    w: item.w || 220,
    h: item.h || 120,
    color: item.color || "#d7ff2f",
    ...item,
  };
  page.items.push(canvasItem);
  saveState();
  renderJournalCanvasItems();
  return canvasItem;
}

function getCanvasDropPosition() {
  const shell = dom.journalCanvasBoard?.parentElement;
  return {
    x: Math.round(((shell?.scrollLeft || 0) + 120) / journalCanvasScale),
    y: Math.round(((shell?.scrollTop || 0) + 120) / journalCanvasScale),
  };
}

function centerJournalCanvasView(force = false) {
  const shell = dom.journalCanvasBoard?.parentElement;
  const board = dom.journalCanvasBoard;
  if (!shell || !board) return;
  if (!force && (shell.scrollLeft > 0 || shell.scrollTop > 0)) return;
  shell.scrollLeft = Math.max(0, Math.round((board.scrollWidth - shell.clientWidth) / 2));
  shell.scrollTop = Math.max(0, Math.min(260, Math.round((board.scrollHeight - shell.clientHeight) / 5)));
}

function addJournalTextItem() {
  const item = addJournalCanvasItem({
    type: "text",
    text: "",
    w: 280,
    h: 80,
    color: "transparent",
    textColor: journalTextStyle.color,
    font: journalTextStyle.font,
    strike: false,
    frame: false,
    frameColor: "#ffffff",
    textAutoHeight: true,
  });
  if (!item) return;
  selectJournalCanvasItem(item.id);
}

function addJournalShapeItem() {
  const colors = ["#d7ff2f", "#2f77ff", "#ff74b8", "#18c94b", "#ffd875"];
  const page = getActiveJournalPage();
  const index = page?.items.filter((item) => item.type === "shape").length || 0;
  addJournalCanvasItem({
    type: "shape",
    shape: index % 2 === 0 ? "round" : "circle",
    w: index % 2 === 0 ? 210 : 132,
    h: index % 2 === 0 ? 118 : 132,
    color: colors[index % colors.length],
  });
}

function renderJournalCanvasItems() {
  const page = getActiveJournalPage();
  if (!dom.journalCanvasItems || !page) return;
  if (selectedJournalCanvasItemId && !page.items.some((item) => item.id === selectedJournalCanvasItemId)) {
    selectedJournalCanvasItemId = "";
  }
  const underlayItems = page.items.filter(isJournalUnderlayItem);
  const overlayItems = page.items.filter((item) => !isJournalUnderlayItem(item));
  if (dom.journalUnderlayItems) {
    dom.journalUnderlayItems.innerHTML = underlayItems.map((item) => renderJournalCanvasItem(item)).join("");
  }
  dom.journalCanvasItems.innerHTML = overlayItems.map((item) => renderJournalCanvasItem(item)).join("");
  requestAnimationFrame(() => resizeJournalTextAreas());
}

function isJournalUnderlayItem(item) {
  return item?.type === "image" && item.layer !== "above";
}

function renderJournalCanvasItem(item) {
  const baseWidth = item.type === "audio" ? getJournalAudioVisualWidth(item) : item.w;
  const style = `left:${item.x}px;top:${item.y}px;width:${baseWidth}px;min-height:${item.h}px;--item-color:${item.color || "#d7ff2f"};--item-text:${item.textColor || "#111111"};--item-font:${item.font || "system-ui"};--item-decoration:${item.strike ? "line-through" : "none"};--item-frame-bg:${item.frameColor || "#ffffff"};--item-bar-text:${readableText(item.color || "#050505")};--image-fit:${item.fit || "cover"};--image-scale:${item.cropScale || 1};--image-x:${item.cropX || 0}%;--image-y:${item.cropY || 0}%`;
  if (item.type === "text") {
    const classes = [
      "journal-canvas-item",
      "text-item",
      item.id === selectedJournalCanvasItemId ? "selected" : "",
      item.frame ? "framed" : "",
      item.strike ? "struck" : "",
    ].filter(Boolean).join(" ");
    return `
      <div class="${classes}" data-item-id="${item.id}" data-type="text" style="${style}">
        <span class="canvas-item-move-handle" aria-hidden="true"></span>
        <textarea data-item-id="${item.id}" rows="1" spellcheck="false" placeholder="${escapeHtml(text("journalTextPlaceholder"))}" aria-label="${text("journalToolText")}">${escapeHtml(item.text || "")}</textarea>
        <span class="canvas-item-resize-handle" aria-hidden="true"></span>
      </div>
    `;
  }
  if (item.type === "shape") {
    const classes = [
      "journal-canvas-item",
      "shape-item",
      item.shape === "circle" ? "circle" : "",
      item.id === selectedJournalCanvasItemId ? "selected" : "",
    ].filter(Boolean).join(" ");
    return `
      <div class="${classes}" data-item-id="${item.id}" data-type="shape" style="${style}">
        <button class="canvas-item-delete" type="button" data-action="delete-canvas-item" data-item-id="${item.id}" aria-label="${escapeHtml(text("journalDeleteItem"))}">×</button>
      </div>
    `;
  }
  if (item.type === "image") {
    const classes = [
      "journal-canvas-item",
      "image-item",
      item.id === selectedJournalCanvasItemId ? "selected" : "",
    ].filter(Boolean).join(" ");
    return `
      <figure class="${classes}" data-item-id="${item.id}" data-type="image" style="${style}">
        <span class="canvas-item-move-handle" aria-hidden="true"></span>
        <span class="image-crop-frame">
          <img src="${item.src}" alt="${escapeHtml(item.name || text("journalImage"))}" />
        </span>
        <span class="canvas-item-resize-handle" aria-hidden="true"></span>
      </figure>
    `;
  }
  if (item.type === "audio") {
    const label = formatAudioBarLabel(item);
    const classes = [
      "journal-canvas-item",
      "audio-item",
      item.id === selectedJournalCanvasItemId ? "selected" : "",
    ].filter(Boolean).join(" ");
    return `
      <div class="${classes}" data-item-id="${item.id}" data-type="audio" style="${style}">
        <span class="audio-trim-handle audio-trim-start" data-audio-trim="start" aria-hidden="true"></span>
        <button class="audio-play-button" type="button" data-action="toggle-journal-audio" data-item-id="${item.id}" aria-label="${escapeHtml(text("journalRecord"))}">▶</button>
        <span class="audio-wave" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
        <small>${escapeHtml(label)}</small>
        <span class="audio-trim-handle audio-trim-end" data-audio-trim="end" aria-hidden="true"></span>
        <audio src="${item.src}" data-item-id="${item.id}" preload="metadata"></audio>
      </div>
    `;
  }
  return "";
}

function handleJournalCanvasInput(event) {
  const input = event.target.closest("textarea[data-item-id]");
  if (!input) return;
  const item = findJournalCanvasItem(input.dataset.itemId);
  if (!item) return;
  item.text = input.value;
  resizeJournalTextArea(input, item);
  saveState();
}

function handleJournalCanvasTextFocus(event) {
  const input = event.target.closest("textarea[data-item-id]");
  const itemId = input?.dataset.itemId;
  if (itemId) selectJournalCanvasItem(itemId);
  input?.closest(".journal-canvas-item")?.classList.add("is-editing");
}

function handleJournalCanvasTextBlur(event) {
  const input = event.target.closest("textarea[data-item-id]");
  input?.closest(".journal-canvas-item")?.classList.remove("is-editing");
  clearJournalNativeSelection();
}

function handleJournalCanvasTextDoubleClick(event) {
  const input = event.target.closest("textarea[data-item-id]");
  if (!input) return;
  input.focus({ preventScroll: true });
}

function resizeJournalTextAreas() {
  dom.journalCanvasItems?.querySelectorAll("textarea[data-item-id]").forEach((textarea) => {
    resizeJournalTextArea(textarea, findJournalCanvasItem(textarea.dataset.itemId), false);
  });
  dom.journalUnderlayItems?.querySelectorAll("textarea[data-item-id]").forEach((textarea) => {
    resizeJournalTextArea(textarea, findJournalCanvasItem(textarea.dataset.itemId), false);
  });
}

function resizeJournalTextArea(textarea, item, persist = true) {
  if (!textarea || !item) return;
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
  const element = textarea.closest(".journal-canvas-item");
  const contentHeight = textarea.scrollHeight + 34;
  const nextHeight = item.textAutoHeight === false
    ? clamp(Math.max(Number(item.h) || 0, contentHeight), 78, JOURNAL_CANVAS_HEIGHT)
    : clamp(contentHeight, 78, JOURNAL_CANVAS_HEIGHT);
  item.h = nextHeight;
  if (element) element.style.minHeight = `${item.h}px`;
  if (persist) saveState();
}

function deleteJournalCanvasItem(itemId) {
  const page = getActiveJournalPage();
  if (!page) return;
  page.items = page.items.filter((item) => item.id !== itemId);
  saveState();
  renderJournalCanvasItems();
}

function findJournalCanvasItem(itemId) {
  return getActiveJournalPage()?.items.find((item) => item.id === itemId) || null;
}

function getJournalCanvasItemElement(itemId) {
  if (!itemId) return null;
  return dom.journalCanvasItems?.querySelector(`[data-item-id="${itemId}"]`)
    || dom.journalUnderlayItems?.querySelector(`[data-item-id="${itemId}"]`)
    || null;
}

function getJournalCanvasTextarea(itemId) {
  return dom.journalCanvasItems?.querySelector(`textarea[data-item-id="${itemId}"]`)
    || dom.journalUnderlayItems?.querySelector(`textarea[data-item-id="${itemId}"]`)
    || null;
}

function forEachJournalCanvasItemElement(callback) {
  [dom.journalCanvasItems, dom.journalUnderlayItems].filter(Boolean).forEach((container) => {
    container.querySelectorAll(".journal-canvas-item").forEach(callback);
  });
}

function applyJournalTextItemVisuals(item) {
  if (!item || item.type !== "text") return;
  const element = getJournalCanvasItemElement(item.id);
  if (!element) return;
  element.classList.toggle("framed", Boolean(item.frame));
  element.classList.toggle("struck", Boolean(item.strike));
  element.style.setProperty("--item-text", item.textColor || "#111111");
  element.style.setProperty("--item-font", item.font || "system-ui");
  element.style.setProperty("--item-decoration", item.strike ? "line-through" : "none");
  element.style.setProperty("--item-frame-bg", item.frameColor || "#ffffff");
  const textarea = element.querySelector("textarea[data-item-id]");
  if (textarea) resizeJournalTextArea(textarea, item, false);
}

function selectJournalCanvasItem(itemId = "") {
  selectedJournalCanvasItemId = itemId;
  if (itemId) {
    journalTool = "select";
    renderJournalToolButtons();
  }
  forEachJournalCanvasItemElement((element) => {
    element.classList.toggle("selected", Boolean(itemId) && element.dataset.itemId === itemId);
  });
}

function handleJournalCanvasItemPointerDown(event) {
  if (journalInteractionMode === "pinching" || journalInteractionMode === "panning") return;
  const element = event.target.closest(".journal-canvas-item");
  if (!element || event.target.closest("audio, button")) return;
  const item = findJournalCanvasItem(element.dataset.itemId);
  if (!item) return;
  if (item.type === "image" && isJournalUnderlayItem(item) && ["brush", "eraser"].includes(journalTool)) return;
  selectJournalCanvasItem(item.id);
  const resizeHandle = event.target.closest(".canvas-item-resize-handle");
  const moveHandle = event.target.closest(".canvas-item-move-handle");
  const audioTrimHandle = event.target.closest("[data-audio-trim]");
  if (resizeHandle || moveHandle || audioTrimHandle) clearJournalLongPressTimers();
  if (!resizeHandle && !moveHandle && !audioTrimHandle && !event.target.closest("textarea")) {
    clearTimeout(journalItemPressTimer);
    const { clientX: x, clientY: y } = event;
    const pressTarget = event.target;
    journalPressStart = { x, y };
    journalItemPressTimer = window.setTimeout(() => {
      suppressNextClick = true;
      openJournalCanvasItemMenu(item.id, x, y, pressTarget);
    }, 650);
  }
  if (audioTrimHandle && item.type === "audio") {
    event.preventDefault();
    event.stopPropagation();
    const duration = getJournalAudioDuration(item);
    const effectiveStart = Math.max(0, Number(item.clipStart) || 0);
    const effectiveEnd = getJournalAudioClipEnd(item);
    journalAudioTrim = {
      id: item.id,
      side: audioTrimHandle.dataset.audioTrim,
      startX: event.clientX,
      itemX: item.x,
      itemW: item.w,
      clipStart: effectiveStart,
      clipEnd: effectiveEnd,
      originalClipStart: Math.max(0, Number(item.clipStart) || 0),
      originalClipEnd: Math.max(0, Number(item.clipEnd) || 0),
      duration,
      pointerId: event.pointerId,
      captureTarget: element,
    };
    element.setPointerCapture?.(event.pointerId);
    return;
  }
  if (resizeHandle) {
    event.preventDefault();
    event.stopPropagation();
    element.querySelector("textarea[data-item-id]")?.blur();
    if (item.type === "text") item.textAutoHeight = false;
    journalItemResize = {
      id: item.id,
      startX: event.clientX,
      startY: event.clientY,
      itemW: item.w,
      itemH: item.h,
      pointerId: event.pointerId,
      captureTarget: element,
    };
    element.setPointerCapture?.(event.pointerId);
    return;
  }
  if (event.target.closest("textarea") && !moveHandle) return;
  event.preventDefault();
  event.stopPropagation();
  element.querySelector("textarea[data-item-id]")?.blur();
  journalItemDrag = {
    id: item.id,
    startX: event.clientX,
    startY: event.clientY,
    itemX: item.x,
    itemY: item.y,
    moved: false,
    pointerId: event.pointerId,
    captureTarget: element,
  };
  element.setPointerCapture?.(event.pointerId);
}

function handleJournalCanvasItemMove(event) {
  if (journalInteractionMode === "pinching" || journalInteractionMode === "panning") return;
  if (journalAudioTrim) {
    const item = findJournalCanvasItem(journalAudioTrim.id);
    if (!item || item.type !== "audio") return;
    const dx = (event.clientX - journalAudioTrim.startX) / journalCanvasScale;
    if (journalAudioTrim.side === "start") {
      const nextStart = roundJournalAudioSecond(clamp(
        journalAudioTrim.clipStart + dx / JOURNAL_AUDIO_PIXELS_PER_SECOND,
        0,
        Math.max(0, journalAudioTrim.clipEnd - 0.1),
      ));
      item.clipStart = nextStart <= 0.05 ? 0 : nextStart;
      item.clipEnd = journalAudioTrim.clipEnd >= journalAudioTrim.duration - 0.05 ? 0 : journalAudioTrim.clipEnd;
      item.x = clamp(
        Math.round(journalAudioTrim.itemX + (nextStart - journalAudioTrim.clipStart) * JOURNAL_AUDIO_PIXELS_PER_SECOND),
        0,
        Math.max(0, JOURNAL_CANVAS_WIDTH - 48),
      );
    } else {
      const nextEnd = roundJournalAudioSecond(clamp(
        journalAudioTrim.clipEnd + dx / JOURNAL_AUDIO_PIXELS_PER_SECOND,
        Math.min(journalAudioTrim.duration, journalAudioTrim.clipStart + 0.1),
        journalAudioTrim.duration,
      ));
      item.clipStart = journalAudioTrim.clipStart <= 0.05 ? 0 : journalAudioTrim.clipStart;
      item.clipEnd = nextEnd >= journalAudioTrim.duration - 0.05 ? 0 : nextEnd;
    }
    item.w = getJournalAudioVisualWidth(item);
    applyJournalAudioItemVisuals(item);
    clearTimeout(journalAudioPressTimer);
    clearTimeout(journalItemPressTimer);
    event.preventDefault();
    return;
  }
  if (journalItemResize) {
    const item = findJournalCanvasItem(journalItemResize.id);
    if (!item) return;
    const dx = (event.clientX - journalItemResize.startX) / journalCanvasScale;
    const dy = (event.clientY - journalItemResize.startY) / journalCanvasScale;
    item.w = clamp(Math.round(journalItemResize.itemW + dx), 110, Math.min(720, JOURNAL_CANVAS_WIDTH - item.x));
    item.h = clamp(Math.round(journalItemResize.itemH + dy), 54, Math.min(640, JOURNAL_CANVAS_HEIGHT - item.y));
    const element = getJournalCanvasItemElement(journalItemResize.id);
    if (element) {
      element.style.width = `${item.w}px`;
      element.style.minHeight = `${item.h}px`;
      const textarea = element.querySelector("textarea[data-item-id]");
      if (textarea) resizeJournalTextArea(textarea, item, false);
    }
    event.preventDefault();
    return;
  }
  if (!journalItemDrag) return;
  const item = findJournalCanvasItem(journalItemDrag.id);
  if (!item) return;
  const dx = (event.clientX - journalItemDrag.startX) / journalCanvasScale;
  const dy = (event.clientY - journalItemDrag.startY) / journalCanvasScale;
  if (Math.abs(dx) + Math.abs(dy) > 8) {
    journalItemDrag.moved = true;
    clearTimeout(journalAudioPressTimer);
    clearTimeout(journalItemPressTimer);
  }
  item.x = clamp(Math.round(journalItemDrag.itemX + dx), 0, Math.max(0, JOURNAL_CANVAS_WIDTH - 48));
  item.y = clamp(Math.round(journalItemDrag.itemY + dy), 0, Math.max(0, JOURNAL_CANVAS_HEIGHT - 48));
  const element = getJournalCanvasItemElement(journalItemDrag.id);
  if (element) {
    element.style.left = `${item.x}px`;
    element.style.top = `${item.y}px`;
  }
}

async function handleJournalCanvasItemEnd() {
  if (journalAudioTrim) {
    const trimState = journalAudioTrim;
    if (journalAudioTrim.captureTarget?.releasePointerCapture && journalAudioTrim.pointerId !== undefined) {
      try {
        journalAudioTrim.captureTarget.releasePointerCapture(journalAudioTrim.pointerId);
      } catch (error) {
        // Element may have been redrawn before pointer capture is released.
      }
    }
    clearTimeout(journalAudioPressTimer);
    clearTimeout(journalItemPressTimer);
    journalAudioTrim = null;
    const item = findJournalCanvasItem(trimState.id);
    if (!item || item.type !== "audio") return;
    if (!hasJournalAudioTrimChanged(item, trimState)) {
      renderJournalCanvasItems();
      return;
    }
    if (!window.confirm(text("journalAudioConfirmTrim"))) {
      restoreJournalAudioTrimState(item, trimState);
      saveState();
      renderJournalCanvasItems();
      return;
    }
    try {
      await commitJournalAudioTrimToSource(item);
    } catch (error) {
      alert(text("journalAudioTrimFailed"));
    }
    saveState();
    renderJournalCanvasItems();
    return;
  }
  if (journalItemResize) {
    if (journalItemResize.captureTarget?.releasePointerCapture && journalItemResize.pointerId !== undefined) {
      try {
        journalItemResize.captureTarget.releasePointerCapture(journalItemResize.pointerId);
      } catch (error) {
        // Element may have been redrawn before pointer capture is released.
      }
    }
    clearTimeout(journalItemPressTimer);
    saveState();
    journalItemResize = null;
    return;
  }
  if (!journalItemDrag) return;
  if (journalItemDrag.captureTarget?.releasePointerCapture && journalItemDrag.pointerId !== undefined) {
    try {
      journalItemDrag.captureTarget.releasePointerCapture(journalItemDrag.pointerId);
    } catch (error) {
      // Element may have been redrawn before pointer capture is released.
    }
  }
  clearTimeout(journalAudioPressTimer);
  clearTimeout(journalItemPressTimer);
  saveState();
  journalItemDrag = null;
}

function editJournalAudioClip(itemId) {
  const item = findJournalCanvasItem(itemId);
  if (!item || item.type !== "audio") return;
  const current = item.clipStart || item.clipEnd ? `${item.clipStart || 0}-${item.clipEnd || ""}` : "";
  const value = window.prompt(text("journalAudioClipPrompt"), current);
  if (value === null) return;
  const match = value.trim().match(/^(\d+(?:\.\d+)?)?\s*-\s*(\d+(?:\.\d+)?)?$/);
  if (!match) return;
  item.clipStart = match[1] ? Number(match[1]) : 0;
  item.clipEnd = match[2] ? Number(match[2]) : 0;
  saveState();
  renderJournalCanvasItems();
}

function formatAudioClipLabel(item) {
  if (item.clipStart || item.clipEnd) {
    const start = item.clipStart || 0;
    const end = item.clipEnd ? `${item.clipEnd}s` : localizedPair("结束", "end");
    return `${text("journalAudioClipLabel")} ${start}s-${end}`;
  }
  return localizedPair("长按剪辑", "Hold to clip");
}

function getJournalAudioClipSeconds(item) {
  const duration = Math.max(0, Number(item.durationSeconds) || 0);
  const start = Math.max(0, Number(item.clipStart) || 0);
  const end = Math.max(0, Number(item.clipEnd) || 0);
  if (end && end > start) return end - start;
  if (duration > start) return duration - start;
  return duration || 3;
}

function getJournalAudioVisualWidth(item) {
  return clamp(Math.round(getJournalAudioClipSeconds(item) * JOURNAL_AUDIO_PIXELS_PER_SECOND + 118), 148, 520);
}

function getJournalAudioDuration(item) {
  return Math.max(0.1, Number(item?.durationSeconds) || getJournalAudioClipSeconds(item) || 3);
}

function getJournalAudioClipEnd(item) {
  const duration = getJournalAudioDuration(item);
  const end = Math.max(0, Number(item?.clipEnd) || 0);
  return end > 0 ? clamp(end, 0.1, duration) : duration;
}

function roundJournalAudioSecond(value) {
  return Math.round((Number(value) || 0) * 10) / 10;
}

function applyJournalAudioItemVisuals(item) {
  const element = getJournalCanvasItemElement(item.id);
  if (!element) return;
  element.style.left = `${item.x}px`;
  element.style.width = `${getJournalAudioVisualWidth(item)}px`;
  element.style.setProperty("--item-color", item.color || "#050505");
  element.style.setProperty("--item-bar-text", readableText(item.color || "#050505"));
  const label = element.querySelector("small");
  if (label) label.textContent = formatAudioBarLabel(item);
}

function hasJournalAudioTrimChanged(item, trimState) {
  const startChanged = Math.abs((Number(item.clipStart) || 0) - (Number(trimState.originalClipStart) || 0)) > 0.05;
  const endChanged = Math.abs((Number(item.clipEnd) || 0) - (Number(trimState.originalClipEnd) || 0)) > 0.05;
  return startChanged || endChanged;
}

function restoreJournalAudioTrimState(item, trimState) {
  item.x = trimState.itemX;
  item.w = trimState.itemW;
  item.clipStart = trimState.originalClipStart;
  item.clipEnd = trimState.originalClipEnd;
}

async function commitJournalAudioTrimToSource(item) {
  const nextDuration = Math.max(0.1, getJournalAudioClipSeconds(item));
  const exportResult = await createJournalAudioExport(item);
  item.src = await readFileAsDataURL(exportResult.blob);
  item.durationSeconds = roundJournalAudioSecond(nextDuration);
  item.clipStart = 0;
  item.clipEnd = 0;
  item.w = getJournalAudioVisualWidth(item);
}

function formatAudioBarLabel(item) {
  const seconds = getJournalAudioClipSeconds(item);
  const rounded = Math.max(1, Math.round(seconds));
  return `${rounded}s`;
}

function toggleJournalAudioItem(itemId) {
  const item = findJournalCanvasItem(itemId);
  const audio = dom.journalCanvasItems?.querySelector(`audio[data-item-id="${itemId}"]`)
    || dom.journalUnderlayItems?.querySelector(`audio[data-item-id="${itemId}"]`);
  if (!item || !audio) return;
  if (!audio.paused) {
    audio.pause();
    return;
  }
  [dom.journalCanvasItems, dom.journalUnderlayItems].filter(Boolean).forEach((container) => {
    container.querySelectorAll("audio").forEach((player) => {
      if (player !== audio) player.pause();
    });
  });
  audio.currentTime = Math.max(0, Number(item.clipStart) || 0);
  audio.play().catch(() => undefined);
}

function handleJournalAudioPlay(event) {
  const audio = event.target.closest("audio[data-item-id]");
  if (!audio) return;
  const item = findJournalCanvasItem(audio.dataset.itemId);
  if (item?.clipStart) audio.currentTime = item.clipStart;
}

function handleJournalAudioTimeUpdate(event) {
  const audio = event.target.closest("audio[data-item-id]");
  if (!audio) return;
  const item = findJournalCanvasItem(audio.dataset.itemId);
  if (item?.clipEnd && audio.currentTime >= item.clipEnd) audio.pause();
}

async function handleJournalImageInput(event) {
  const files = Array.from(event.target.files || []);
  for (const file of files) {
    if (!file.type.startsWith("image/")) continue;
    const src = await resizeJournalImage(file);
    const item = addJournalCanvasItem({
      type: "image",
      src,
      name: file.name || text("journalImage"),
      w: 260,
      h: 190,
      layer: "below",
      fit: "cover",
      cropScale: 1,
      cropX: 0,
      cropY: 0,
    });
    if (item) selectJournalCanvasItem(item.id);
  }
  event.target.value = "";
}

async function handleJournalCoverInput(event) {
  const file = event.target.files?.[0];
  const notebook = getJournalNotebook(activeNotebookId);
  if (file?.type?.startsWith("image/") && notebook) {
    notebook.coverImage = await resizeJournalImage(file, 1200);
    saveState();
    renderJournalCoverPalette();
    renderJournalShelf();
  }
  event.target.value = "";
}

async function toggleJournalRecording() {
  if (journalMediaRecorder?.state === "recording") {
    journalMediaRecorder.stop();
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia) {
    alert(localizedPair("当前浏览器不支持录音。", "Recording is not supported in this browser."));
    return;
  }
  try {
    journalRecordingChunks = [];
    journalRecordingStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    journalMediaRecorder = new MediaRecorder(journalRecordingStream);
    journalMediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data?.size) journalRecordingChunks.push(event.data);
    });
    journalMediaRecorder.addEventListener("stop", handleJournalRecordingStop);
    journalRecordingStartedAt = Date.now();
    journalMediaRecorder.start();
    if (dom.journalRecordButton) {
      dom.journalRecordButton.textContent = text("journalStopRecord");
      dom.journalRecordButton.classList.add("is-recording");
    }
  } catch (error) {
    alert(localizedPair("无法开启麦克风，请检查权限。", "Could not start microphone. Please check permission."));
  }
}

function stopJournalRecording() {
  if (journalMediaRecorder?.state === "recording") {
    journalMediaRecorder.stop();
  }
  journalRecordingStream?.getTracks().forEach((track) => track.stop());
  journalRecordingStream = null;
  if (dom.journalRecordButton) {
    dom.journalRecordButton.textContent = text("journalRecord");
    dom.journalRecordButton.classList.remove("is-recording");
  }
}

async function handleJournalRecordingStop() {
  const blob = new Blob(journalRecordingChunks, { type: journalMediaRecorder?.mimeType || "audio/webm" });
  const durationSeconds = journalRecordingStartedAt
    ? Math.max(1, Math.round((Date.now() - journalRecordingStartedAt) / 1000))
    : 3;
  if (blob.size) {
    const src = await readFileAsDataURL(blob);
    addJournalCanvasItem({
      type: "audio",
      src,
      name: localizedPair("录音", "Recording"),
      durationSeconds,
      color: "#050505",
      w: clamp(durationSeconds * 26 + 118, 148, 520),
      h: 54,
    });
  }
  journalRecordingChunks = [];
  journalRecordingStartedAt = 0;
  journalRecordingStream?.getTracks().forEach((track) => track.stop());
  journalRecordingStream = null;
  if (dom.journalRecordButton) {
    dom.journalRecordButton.textContent = text("journalRecord");
    dom.journalRecordButton.classList.remove("is-recording");
  }
}

function renderJournalInk() {
  const canvas = dom.journalInkCanvas;
  if (!canvas) return;
  const page = getActiveJournalPage();
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.globalCompositeOperation = "source-over";
  if (!page?.ink) return;
  const image = new Image();
  image.onload = () => {
    if (getActiveJournalPage()?.ink === image.src) {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
  };
  image.src = page.ink;
}

function handleInkPointerDown(event) {
  const canvas = dom.journalInkCanvas;
  if (!canvas || !["brush", "eraser"].includes(journalTool)) return;
  const hitItem = event.target.closest?.(".journal-canvas-item");
  if (hitItem) {
    const item = findJournalCanvasItem(hitItem.dataset.itemId);
    if (!(item?.type === "image" && isJournalUnderlayItem(item))) return;
  }
  if (!hitItem && event.target.closest?.("button, input, textarea, select, audio")) return;
  if (journalInteractionMode !== "idle" || journalIsPinching || Date.now() < journalPinchCooldownUntil) return;
  if (event.pointerType === "touch" && !event.isPrimary) return;
  if (activeInkPointerId !== null) return;
  event.preventDefault();
  selectJournalCanvasItem("");
  clearJournalNativeSelection();
  const captureTarget = event.currentTarget || canvas;
  captureTarget.setPointerCapture?.(event.pointerId);
  const point = getInkPoint(event, canvas);
  const context = canvas.getContext("2d");
  context.lineCap = "round";
  context.lineJoin = "round";
  context.globalCompositeOperation = journalTool === "eraser" ? "destination-out" : "source-over";
  context.strokeStyle = journalTool === "eraser" ? "rgba(0,0,0,1)" : hexToRgba(journalBrushColor, journalBrushOpacity);
  context.lineWidth = journalTool === "eraser" ? getEraserWidth(canvas) : getInkWidth(event, canvas);
  context.beginPath();
  context.moveTo(point.x, point.y);
  activeInkPointerId = event.pointerId;
  journalInteractionMode = "inking";
  inkDrawingState = { x: point.x, y: point.y, mode: journalTool, pointerId: event.pointerId, captureTarget };
}

function handleInkPointerMove(event) {
  if (!inkDrawingState || !dom.journalInkCanvas) return;
  if (event.pointerId !== activeInkPointerId) return;
  if (journalInteractionMode !== "inking" || journalIsPinching) {
    cancelJournalInkStroke(event.pointerId);
    return;
  }
  event.preventDefault();
  const canvas = dom.journalInkCanvas;
  const context = canvas.getContext("2d");
  context.globalCompositeOperation = inkDrawingState.mode === "eraser" ? "destination-out" : "source-over";
  context.strokeStyle = inkDrawingState.mode === "eraser" ? "rgba(0,0,0,1)" : hexToRgba(journalBrushColor, journalBrushOpacity);
  context.lineWidth = inkDrawingState.mode === "eraser" ? getEraserWidth(canvas) : getInkWidth(event, canvas);
  context.beginPath();
  context.moveTo(inkDrawingState.x, inkDrawingState.y);
  const pointerEvents = typeof event.getCoalescedEvents === "function" ? event.getCoalescedEvents() : [event];
  let point = { x: inkDrawingState.x, y: inkDrawingState.y };
  pointerEvents.forEach((pointerEvent) => {
    point = getInkPoint(pointerEvent, canvas);
    context.lineTo(point.x, point.y);
  });
  context.stroke();
  inkDrawingState = {
    x: point.x,
    y: point.y,
    mode: inkDrawingState.mode,
    pointerId: inkDrawingState.pointerId,
    captureTarget: inkDrawingState.captureTarget,
  };
}

function handleInkPointerUp(event) {
  if (!inkDrawingState || !dom.journalInkCanvas) return;
  if (event.pointerId !== activeInkPointerId) return;
  try {
    (inkDrawingState.captureTarget || dom.journalInkCanvas).releasePointerCapture?.(event.pointerId);
  } catch (error) {
    // Pointer capture can already be released after pinch gestures on mobile.
  }
  finishJournalInkDrawing(event.pointerId);
}

function handleInkPointerCancel(event) {
  if (event.pointerId !== activeInkPointerId) return;
  cancelJournalInkStroke(event.pointerId);
  journalPinchCooldownUntil = Date.now() + 260;
}

function finishJournalInkDrawing(pointerId) {
  if (!inkDrawingState || !dom.journalInkCanvas) return;
  if (pointerId !== undefined && pointerId !== activeInkPointerId) return;
  if (activeInkPointerId !== null) {
    try {
      (inkDrawingState.captureTarget || dom.journalInkCanvas).releasePointerCapture?.(activeInkPointerId);
    } catch (error) {
      // Ignore stale pointer captures after touch cancellation.
    }
  }
  inkDrawingState = null;
  activeInkPointerId = null;
  journalInteractionMode = "idle";
  const context = dom.journalInkCanvas.getContext("2d");
  context.globalCompositeOperation = "source-over";
  scheduleJournalInkSnapshot();
}

function cancelJournalInkStroke(pointerId = activeInkPointerId) {
  if (!inkDrawingState || !dom.journalInkCanvas) return;
  if (pointerId !== undefined && pointerId !== null) {
    try {
      (inkDrawingState.captureTarget || dom.journalInkCanvas).releasePointerCapture?.(pointerId);
    } catch (error) {
      // Stale pointer captures are expected when a second touch starts pinching.
    }
  }
  inkDrawingState = null;
  activeInkPointerId = null;
  const context = dom.journalInkCanvas.getContext("2d");
  context.globalCompositeOperation = "source-over";
  if (journalInteractionMode === "inking") journalInteractionMode = "idle";
  renderJournalInk();
}

function scheduleJournalInkSave() {
  window.clearTimeout(journalInkSaveTimer);
  journalInkSaveTimer = window.setTimeout(() => {
    journalInkSaveTimer = null;
    saveState();
  }, 90);
}

function scheduleJournalInkSnapshot() {
  const pageId = getActiveJournalPage()?.id;
  if (!pageId || !dom.journalInkCanvas) return;
  window.clearTimeout(journalInkSnapshotTimer);
  journalInkSnapshotTimer = window.setTimeout(() => {
    journalInkSnapshotTimer = null;
    saveJournalInkSnapshot(pageId);
  }, 520);
}

function flushJournalInkSnapshot() {
  if (!journalInkSnapshotTimer) return;
  window.clearTimeout(journalInkSnapshotTimer);
  journalInkSnapshotTimer = null;
  saveJournalInkSnapshot(getActiveJournalPage()?.id);
}

function saveJournalInkSnapshot(pageId) {
  const canvas = dom.journalInkCanvas;
  const page = getActiveNotebookCanvas()?.pages.find((item) => item.id === pageId);
  if (!canvas || !page) return;
  page.ink = canvas.toDataURL("image/png");
  scheduleJournalInkSave();
}

function clearJournalInk() {
  if (!dom.journalInkCanvas) return;
  const page = getActiveJournalPage();
  if (!page) return;
  const hasContent = Boolean(page.ink) || Boolean(page.items?.length);
  if (hasContent && !window.confirm(text("journalConfirmClearInk"))) return;
  finishJournalInkDrawing();
  window.clearTimeout(journalInkSnapshotTimer);
  journalInkSnapshotTimer = null;
  window.clearTimeout(journalInkSaveTimer);
  journalInkSaveTimer = null;
  page.ink = "";
  page.items = [];
  const context = dom.journalInkCanvas.getContext("2d");
  context.clearRect(0, 0, dom.journalInkCanvas.width, dom.journalInkCanvas.height);
  context.globalCompositeOperation = "source-over";
  journalItemDrag = null;
  saveState();
  renderJournalCanvasItems();
}

function syncJournalInkCanvasSize(canvas) {
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 3);
  const width = Math.round(rect.width * pixelRatio);
  const height = Math.round(rect.height * pixelRatio);
  if (canvas.width === width && canvas.height === height) return;
  canvas.width = width;
  canvas.height = height;
}

function getInkPoint(event, canvas) {
  const rect = canvas.getBoundingClientRect();
  const width = rect.width || canvas.width || 1;
  const height = rect.height || canvas.height || 1;
  return {
    x: clamp(((event.clientX - rect.left) / width) * canvas.width, 0, canvas.width),
    y: clamp(((event.clientY - rect.top) / height) * canvas.height, 0, canvas.height),
  };
}

function getInkWidth(event, canvas) {
  const pressure = event.pressure && event.pressure > 0 ? event.pressure : 0.48;
  const rect = canvas.getBoundingClientRect();
  const scale = rect.width ? canvas.width / rect.width : 1;
  return clamp(journalBrushSize * (0.62 + pressure), 1, 36) * scale;
}

function getEraserWidth(canvas) {
  const rect = canvas.getBoundingClientRect();
  const scale = rect.width ? canvas.width / rect.width : 1;
  return journalEraserSize * scale;
}

async function resizeJournalImage(file, maxSide = 1400) {
  const source = await readFileAsDataURL(file);
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      const ratio = Math.min(1, maxSide / Math.max(image.width, image.height));
      const width = Math.max(1, Math.round(image.width * ratio));
      const height = Math.max(1, Math.round(image.height * ratio));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(image, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", 0.82));
    };
    image.onerror = () => resolve(source);
    image.src = source;
  });
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function updateJournalWordCount() {
  if (!dom.journalWordCount || !dom.journalBodyInput) return;
  const body = dom.journalBodyInput.value.trim();
  const zhCount = (body.match(/[\u4e00-\u9fff]/g) || []).length;
  const wordCount = body ? body.replace(/[\u4e00-\u9fff]/g, " ").trim().split(/\s+/).filter(Boolean).length : 0;
  const count = zhCount + wordCount;
  dom.journalWordCount.textContent = localizedPair(`${count} 字`, `${count} words`);
}

function getJournalEntry(entryId) {
  return state.journal?.entries?.find((entry) => entry.id === entryId) || null;
}

function getJournalNotebook(notebookId) {
  return state.journal?.notebooks?.find((notebook) => notebook.id === notebookId) || null;
}

function normalizeJournalAttachment(value) {
  if (!value || typeof value !== "object") return null;
  const type = ["audio", "image", "ink"].includes(value.type) ? value.type : "";
  const src = String(value.src || "");
  if (!type || !src) return null;
  return {
    id: value.id || makeId(type),
    type,
    src,
    name: String(value.name || ""),
    caption: String(value.caption || ""),
  };
}

function createEmptyJournalCanvas() {
  return {
    activePageId: "",
    pages: [createJournalPage(1)],
  };
}

function createJournalPage(index = 1) {
  return {
    id: makeId("page"),
    name: String(index),
    date: state?.selectedDate || todayISO(),
    ink: "",
    items: [],
  };
}

function normalizeJournalCanvas(value) {
  const canvas = value && typeof value === "object" && !Array.isArray(value) ? value : createEmptyJournalCanvas();
  let pages = Array.isArray(canvas.pages)
    ? canvas.pages.map(normalizeJournalPage).filter(Boolean)
    : [];
  if (!pages.length) {
    const page = createJournalPage(1);
    page.ink = typeof canvas.ink === "string" ? canvas.ink : "";
    page.items = Array.isArray(canvas.items) ? canvas.items.map(normalizeJournalCanvasItem).filter(Boolean) : [];
    pages = [page];
  }
  canvas.pages = pages;
  canvas.activePageId = pages.some((page) => page.id === canvas.activePageId) ? canvas.activePageId : pages[0].id;
  canvas.ink = "";
  canvas.items = [];
  return canvas;
}

function normalizeJournalPage(value, index = 0) {
  const page = value && typeof value === "object" && !Array.isArray(value) ? value : createJournalPage(index + 1);
  page.id ||= makeId("page");
  page.name = String(page.name || index + 1);
  page.date = isValidISODate(page.date) ? page.date : (state?.selectedDate || todayISO());
  page.ink = typeof page.ink === "string" ? page.ink : "";
  page.items = Array.isArray(page.items) ? page.items.map(normalizeJournalCanvasItem).filter(Boolean) : [];
  return page;
}

function normalizeJournalCanvasItem(value) {
  if (!value || typeof value !== "object") return null;
  const type = ["text", "shape", "image", "audio"].includes(value.type) ? value.type : "";
  if (!type) return null;
  const item = {
    id: value.id || makeId(type),
    type,
    x: clamp(Number(value.x) || 120, 0, Math.max(0, JOURNAL_CANVAS_WIDTH - 48)),
    y: clamp(Number(value.y) || 120, 0, Math.max(0, JOURNAL_CANVAS_HEIGHT - 48)),
    w: clamp(Number(value.w) || 220, 48, Math.min(720, JOURNAL_CANVAS_WIDTH)),
    h: clamp(Number(value.h) || 100, 40, Math.min(540, JOURNAL_CANVAS_HEIGHT)),
    color: normalizeHexColor(value.color, "#d7ff2f"),
  };
  if (type === "text") {
    item.text = String(value.text || "");
    item.textColor = normalizeHexColor(value.textColor, "#111111");
    item.font = normalizeJournalFont(value.font);
    item.strike = Boolean(value.strike);
    item.frame = Boolean(value.frame);
    item.frameColor = normalizeHexColor(value.frameColor, "#ffffff");
  }
  if (type === "shape") item.shape = value.shape === "circle" ? "circle" : "round";
  if (type === "image" || type === "audio") {
    item.src = String(value.src || "");
    if (!item.src) return null;
    item.name = String(value.name || "");
    if (type === "image") {
      item.layer = value.layer === "above" ? "above" : "below";
      item.fit = value.fit === "contain" ? "contain" : "cover";
      item.cropScale = clamp(Number(value.cropScale) || 1, 1, 3);
      item.cropX = clamp(Number(value.cropX) || 0, -50, 50);
      item.cropY = clamp(Number(value.cropY) || 0, -50, 50);
    }
    if (type === "audio") {
      item.durationSeconds = Math.max(0, Number(value.durationSeconds) || 0);
      item.clipStart = Math.max(0, Number(value.clipStart) || 0);
      item.clipEnd = Math.max(0, Number(value.clipEnd) || 0);
      if (item.clipEnd && item.clipEnd <= item.clipStart) item.clipEnd = 0;
      item.color = normalizeHexColor(value.color, "#050505");
      item.w = getJournalAudioVisualWidth(item);
      item.h = clamp(Number(value.h) || 54, 44, 96);
    }
  }
  if (type === "audio") {
    item.clipStart = Math.max(0, Number(value.clipStart) || 0);
    item.clipEnd = Math.max(0, Number(value.clipEnd) || 0);
  }
  return item;
}

function createDefaultNotebooks() {
  return [
    { id: makeId("notebook"), title: text("journalDefaultNotebook"), color: JOURNAL_NOTEBOOK_COLORS[0], coverStyle: "blue", coverImage: "", canvas: createEmptyJournalCanvas(), createdAt: new Date().toISOString() },
    { id: makeId("notebook"), title: text("journalIdeaNotebook"), color: JOURNAL_NOTEBOOK_COLORS[2], coverStyle: "gold", coverImage: "", canvas: createEmptyJournalCanvas(), createdAt: new Date().toISOString() },
  ];
}

function parseJournalTags(value) {
  if (Array.isArray(value)) return value.map((tag) => String(tag).trim()).filter(Boolean);
  return String(value || "")
    .split(/[,\uFF0C#\s]+/)
    .map((tag) => tag.trim())
    .filter(Boolean)
    .slice(0, 8);
}

function moodLabel(mood) {
  const key = `mood${mood.charAt(0).toUpperCase()}${mood.slice(1)}`;
  return text(key);
}

function handleDocumentClick(event) {
  if (suppressNextClick) {
    suppressNextClick = false;
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  const button = event.target.closest("[data-action]");
  if (!button) {
    if (event.target.closest("#journalCanvasBoard") && !event.target.closest(".journal-canvas-item")) {
      selectJournalCanvasItem("");
      clearJournalNativeSelection();
    }
    closeCreateMenu();
    closeBlockActionMenu();
    closeJournalActionMenu();
    return;
  }

  const action = button.dataset.action;
  if (action === "copy-block") {
    copyContextBlock();
    return;
  }
  if (action === "split-block") {
    splitContextBlock();
    return;
  }
  if (action === "paste-block") {
    pasteCopiedBlock();
    return;
  }
  if (!button.closest("#journalActionMenu")) closeJournalActionMenu();
  if (action === "journal-create-notebook") {
    createJournalNotebookFromMenu();
    return;
  }
  if (action === "journal-set-new-cover-style") {
    dom.journalActionMenu?.querySelectorAll("[data-action='journal-set-new-cover-style']").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    return;
  }
  if (action === "journal-rename-notebook") {
    renameJournalNotebookFromMenu();
    return;
  }
  if (action === "journal-set-cover-style") {
    setJournalCoverColor(button.dataset.color, button.dataset.coverStyle);
    closeJournalActionMenu();
    return;
  }
  if (action === "journal-cover-import") {
    dom.journalCoverInput?.click();
    closeJournalActionMenu();
    return;
  }
  if (action === "journal-cover-remove") {
    removeJournalCoverImage();
    closeJournalActionMenu();
    return;
  }
  if (action === "journal-delete-notebook-menu") {
    deleteJournalNotebook();
    closeJournalActionMenu();
    return;
  }
  if (action === "journal-create-text") {
    createJournalTextFromMenu();
    return;
  }
  if (action === "journal-apply-text-item") {
    applyJournalTextItemFromMenu();
    return;
  }
  if (action === "journal-copy-text") {
    copyJournalTextFromMenu();
    return;
  }
  if (action === "journal-paste-text") {
    pasteJournalTextFromMenu();
    return;
  }
  if (action === "journal-delete-item") {
    deleteJournalMenuItem();
    return;
  }
  if (action === "journal-image-layer-above") {
    setJournalImageLayer("above");
    return;
  }
  if (action === "journal-image-layer-below") {
    setJournalImageLayer("below");
    return;
  }
  if (action === "journal-apply-item-color") {
    applyJournalItemColorFromMenu();
    return;
  }
  if (action === "journal-apply-audio-clip") {
    applyJournalAudioClipFromMenu();
    return;
  }
  if (action === "journal-export-audio") {
    exportJournalAudioItem();
    return;
  }
  if (action === "toggle-journal-audio") {
    toggleJournalAudioItem(button.dataset.itemId);
    return;
  }
  if (action === "journal-zoom-in") {
    setJournalCanvasScale(journalCanvasScale + 0.12);
    refreshJournalZoomMenu(button);
    return;
  }
  if (action === "journal-zoom-out") {
    setJournalCanvasScale(journalCanvasScale - 0.12);
    refreshJournalZoomMenu(button);
    return;
  }
  if (action === "journal-jump-page") {
    jumpJournalPageFromMenu();
    return;
  }
  if (action === "undo-change") {
    undoLastChange();
    return;
  }
  if (action === "open-journal") {
    openJournalScreen();
    return;
  }
  if (action === "close-journal") {
    closeJournalScreen();
    return;
  }
  if (action === "open-journal-notebook") {
    openJournalNotebook(button.dataset.notebookId);
    return;
  }
  if (action === "add-journal-notebook") {
    addJournalNotebook();
    return;
  }
  if (action === "open-account-center") {
    openAccountCenter();
    return;
  }
  if (action === "close-account-center") {
    closeAccountCenter();
    return;
  }
  if (action === "account-sign-up") {
    void signUpWithEmail();
    return;
  }
  if (action === "account-sign-in") {
    void signInWithEmail();
    return;
  }
  if (action === "account-sign-out") {
    void signOutAccount();
    return;
  }
  if (action === "cloud-upload-local") {
    void uploadLocalDataToCloud();
    return;
  }
  if (action === "cloud-export-local") {
    exportLocalBackupJson();
    return;
  }
  if (action === "cloud-download-local") {
    void downloadCloudDataToLocal();
    return;
  }
  if (action === "cloud-check-status") {
    void getCloudBackupStatus();
    return;
  }
  if (action === "back-journal-home" || action === "back-journal-shelf") {
    showJournalShelf();
    return;
  }
  if (action === "rename-journal-notebook") {
    renameJournalNotebook();
    return;
  }
  if (action === "change-journal-cover") {
    dom.journalCoverInput?.click();
    return;
  }
  if (action === "set-journal-cover-color") {
    setJournalCoverColor(button.dataset.color, button.dataset.coverStyle);
    return;
  }
  if (action === "remove-journal-cover") {
    removeJournalCoverImage();
    return;
  }
  if (action === "delete-journal-notebook") {
    deleteJournalNotebook();
    return;
  }
  if (action === "select-journal-page") {
    selectJournalPage(button.dataset.pageId);
    return;
  }
  if (action === "previous-journal-page") {
    moveJournalPage(-1);
    return;
  }
  if (action === "next-journal-page") {
    moveJournalPage(1);
    return;
  }
  if (action === "open-journal-page-menu") {
    openJournalPageMenu(button.getBoundingClientRect().left + button.offsetWidth / 2, button.getBoundingClientRect().bottom);
    return;
  }
  if (action === "add-journal-page") {
    addJournalPage();
    if (button.closest("#journalActionMenu")) closeJournalActionMenu();
    return;
  }
  if (action === "delete-journal-page") {
    deleteJournalPage();
    if (button.closest("#journalActionMenu")) closeJournalActionMenu();
    return;
  }
  if (action === "set-journal-tool") {
    setJournalTool(button.dataset.tool);
    return;
  }
  if (action === "add-canvas-text") {
    addJournalTextItem();
    return;
  }
  if (action === "add-canvas-shape") {
    addJournalShapeItem();
    return;
  }
  if (action === "journal-camera") {
    dom.journalCameraInput?.click();
    return;
  }
  if (action === "journal-import-image") {
    dom.journalImageInput?.click();
    return;
  }
  if (action === "journal-record") {
    toggleJournalRecording();
    return;
  }
  if (action === "delete-canvas-item") {
    if (!window.confirm(text("journalConfirmDeleteCanvasItem"))) return;
    deleteJournalCanvasItem(button.dataset.itemId);
    return;
  }
  if (action === "clear-journal-ink") {
    clearJournalInk();
    return;
  }
  if (action === "toggle-settings") {
    setSettingsPanel(dom.settingsPanel?.hidden ?? true);
    return;
  }
  if (action === "open-create-menu") {
    if (getActiveViewId() === "todaySection") {
      closeCreateMenu();
      openTaskDialog();
      return;
    }
    toggleCreateMenu();
    return;
  }
  closeCreateMenu();
  if (!button.closest("#blockActionMenu")) closeBlockActionMenu();
  if (!button.closest("#journalActionMenu")) closeJournalActionMenu();

  if (action === "select-date") {
    const date = button.dataset.date;
    const now = Date.now();
    const shouldEditDate = lastDateTap.date === date && now - lastDateTap.time < 700;
    lastDateTap = { date, time: now };
    state.selectedDate = date;
    saveAndRender();
    if (shouldEditDate) {
      requestAnimationFrame(() => openDateMarkDialog(date));
    }
    return;
  }
  if (action === "select-plan-date") {
    state.selectedDate = button.dataset.date;
    saveAndRender();
    return;
  }
  if (action === "previous-range") moveRange(-state.settings.rangeDays);
  if (action === "next-range") moveRange(state.settings.rangeDays);
  if (action === "go-today") goToday();
  if (action === "add-project") openProjectDialog();
  if (action === "edit-project") openProjectDialog(button.dataset.projectId);
  if (action === "delete-project") deleteCurrentProject();
  if (action === "add-task" || action === "add-task-selected") openTaskDialog();
  if (action === "add-task-to-project") openTaskDialog(null, button.dataset.projectId);
  if (action === "edit-task") openTaskDialog(button.dataset.taskId);
  if (action === "delete-task") deleteCurrentTask();
  if (action === "cycle-task-status") cycleTaskStatus(button.dataset.taskId);
  if (action === "close-dialog") document.querySelector(`#${button.dataset.dialog}`)?.close();
  if (action === "export-data") exportData();
  if (action === "import-data") dom.importInput.click();
  if (action === "save-custom-date") saveCustomDate();
  if (action === "clear-custom-date") clearCustomDate();
  if (action === "delete-date-mark") deleteDateMark(button.dataset.index);
}

function handleDocumentDoubleClick(event) {
  const dateButton = event.target.closest("[data-action='select-date']");
  if (!dateButton) return;
  event.preventDefault();
  state.selectedDate = dateButton.dataset.date;
  saveAndRender();
  requestAnimationFrame(() => openDateMarkDialog(dateButton.dataset.date));
}

function toggleCreateMenu() {
  if (!dom.createMenu) return;
  const shouldOpen = dom.createMenu.hidden;
  dom.createMenu.hidden = !shouldOpen;
  document.querySelectorAll('[data-action="open-create-menu"]').forEach((button) => {
    button.setAttribute("aria-expanded", String(shouldOpen));
    button.classList.toggle("is-open", shouldOpen);
  });
}

function closeCreateMenu() {
  if (!dom.createMenu || dom.createMenu.hidden) return;
  dom.createMenu.hidden = true;
  document.querySelectorAll('[data-action="open-create-menu"]').forEach((button) => {
    button.setAttribute("aria-expanded", "false");
    button.classList.remove("is-open");
  });
}

function setSettingsPanel(open) {
  if (!dom.settingsPanel || !dom.settingsToggle) return;
  dom.settingsPanel.hidden = !open;
  dom.settingsToggle.setAttribute("aria-expanded", String(open));
  dom.settingsToggle.classList.toggle("is-open", open);
}

function openDateMarkDialog(date) {
  if (!dom.dateMarkDialog || !dom.dateMarkDateInput || !dom.dateMarkTextInput) return;
  const builtInMarks = getDateMarks(date).filter((mark) => mark.type !== "custom");
  const customMarks = getCustomDateMarks(date);
  dom.dateMarkDateInput.value = date;
  dom.dateMarkTextInput.value = "";
  if (dom.dateMarkColorInput) {
    dom.dateMarkColorInput.value = DEFAULT_DATE_MARK_COLOR;
    updateDateMarkPickerColor();
  }
  dom.dateMarkDialogTitle.textContent = `${formatDateShort(date)} · ${text("dateMarkDialogTitle")}`;
  if (dom.dateMarkBuiltInInfo) {
    dom.dateMarkBuiltInInfo.hidden = !builtInMarks.length;
    dom.dateMarkBuiltInInfo.textContent = builtInMarks.length
      ? `${text("builtInHoliday")} · ${builtInMarks.map((mark) => mark.label).join(" · ")}`
      : "";
  }
  renderDateMarkList(date, builtInMarks, customMarks);
  if (dom.deleteDateMarkButton) {
    dom.deleteDateMarkButton.hidden = !customMarks.length;
  }
  if (!dom.dateMarkDialog.open) dom.dateMarkDialog.showModal();
}

function handleDateMarkSubmit(event) {
  event.preventDefault();
  saveCustomDate();
}

function updateDateMarkPickerColor() {
  if (!dom.dateMarkColorInput) return;
  const color = normalizeHexColor(dom.dateMarkColorInput.value, DEFAULT_DATE_MARK_COLOR);
  dom.dateMarkColorInput.closest(".date-mark-color-picker")?.style.setProperty("--date-mark-picker-color", color);
}

function saveCustomDate() {
  const input = dom.dateMarkTextInput || dom.customDateInput;
  if (!input) return;
  const date = dom.dateMarkDateInput?.value || state.selectedDate;
  const label = input.value.trim();
  const color = normalizeHexColor(dom.dateMarkColorInput?.value, DEFAULT_DATE_MARK_COLOR);
  if (label) {
    rememberUndo();
    const marks = getCustomDateMarks(date);
    state.specialDates[date] = [...marks, { id: makeId("mark"), label, color }];
  }
  state.selectedDate = date;
  dom.dateMarkDialog?.close();
  saveAndRender();
}

function clearCustomDate() {
  const date = dom.dateMarkDateInput?.value || state.selectedDate;
  rememberUndo();
  delete state.specialDates[date];
  state.selectedDate = date;
  dom.dateMarkDialog?.close();
  saveAndRender();
}

function deleteDateMark(index) {
  const date = dom.dateMarkDateInput?.value || state.selectedDate;
  const markIndex = Number(index);
  const marks = getCustomDateMarks(date);
  if (!Number.isInteger(markIndex) || markIndex < 0 || markIndex >= marks.length) return;
  rememberUndo();
  marks.splice(markIndex, 1);
  if (marks.length) {
    state.specialDates[date] = marks;
  } else {
    delete state.specialDates[date];
  }
  state.selectedDate = date;
  saveState();
  renderDateStrip();
  renderTimeline();
  openDateMarkDialog(date);
}

function renderDateMarkList(date, builtInMarks = [], customMarks = getCustomDateMarks(date)) {
  const allMarks = getDateMarks(date);
  const total = allMarks.length;
  if (dom.dateMarkCount) {
    dom.dateMarkCount.textContent = localizedPair(`共有 ${total} 个标注`, `${total} marks`);
  }
  if (!dom.dateMarkList) return;
  dom.dateMarkList.innerHTML = allMarks.length
    ? allMarks.map((mark, index) => {
      const style = mark.color ? ` style="--mark-color:${mark.color};--mark-text:${readableText(mark.color)}"` : "";
      const customIndex = mark.customId ? customMarks.findIndex((customMark) => customMark.id === mark.customId) : -1;
      const deleteButton = customIndex >= 0
        ? `<button class="mini-delete-button" type="button" data-action="delete-date-mark" data-index="${customIndex}" aria-label="${text("delete")}">×</button>`
        : `<span class="mark-lock-label">${text("builtInHoliday")}</span>`;
      return `
      <div class="date-mark-list-item" draggable="true" data-date="${date}" data-mark-key="${mark.key}">
        <span class="drag-grip" aria-hidden="true">≡</span>
        <span class="date-mark ${mark.type}"${style}>${escapeHtml(mark.label)}</span>
        ${deleteButton}
      </div>
    `;
    }).join("")
    : `<div class="date-mark-empty">${text("noDateMarks")}</div>`;
}

function handleDateMarkDragStart(event) {
  const item = event.target.closest(".date-mark-list-item[data-mark-key]");
  if (!item) return;
  item.classList.add("is-dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", item.dataset.markKey);
}

function handleDateMarkDragOver(event) {
  const item = event.target.closest(".date-mark-list-item[data-mark-key]");
  if (!item) return;
  event.preventDefault();
  item.classList.add("is-drop-target");
}

function handleDateMarkDrop(event) {
  const item = event.target.closest(".date-mark-list-item[data-mark-key]");
  if (!item) return;
  event.preventDefault();
  const fromKey = event.dataTransfer.getData("text/plain");
  const toKey = item.dataset.markKey;
  const date = item.dataset.date || dom.dateMarkDateInput?.value || state.selectedDate;
  reorderDateMark(date, fromKey, toKey);
}

function handleDateMarkDragEnd() {
  document.querySelectorAll(".date-mark-list-item.is-dragging, .date-mark-list-item.is-drop-target").forEach((item) => {
    item.classList.remove("is-dragging", "is-drop-target");
  });
}

function reorderDateMark(date, fromKey, toKey) {
  if (!date || !fromKey || !toKey || fromKey === toKey) return;
  const keys = getDateMarks(date).map((mark) => mark.key).filter(Boolean);
  const fromIndex = keys.indexOf(fromKey);
  const toIndex = keys.indexOf(toKey);
  if (fromIndex < 0 || toIndex < 0) return;
  rememberUndo();
  const [moved] = keys.splice(fromIndex, 1);
  keys.splice(toIndex, 0, moved);
  state.dateMarkOrder[date] = keys;
  saveState();
  renderDateStrip();
  renderTimeline();
  openDateMarkDialog(date);
}

function clampTimelineScroll() {
  const maxScroll = Math.max(0, dom.timeline.scrollWidth - dom.timeline.clientWidth);
  if (dom.timeline.scrollLeft > maxScroll) dom.timeline.scrollLeft = maxScroll;
}

function handleTimelineScroll() {
  clampTimelineScroll();
  const timelineRect = dom.timeline.getBoundingClientRect();
  const scrollLeft = dom.timeline.scrollLeft;
  const stubWidth = getStubWidth();
  const visibleLeft = timelineRect.left + Math.max(0, stubWidth - scrollLeft);
  const visibleRight = timelineRect.right;
  dom.timeline.querySelectorAll(".project-bar, .timeline-task").forEach((bar) => {
    const label = bar.querySelector(".floating-bar-label");
    if (!label) return;
    const barRect = bar.getBoundingClientRect();
    const barWidth = barRect.width || Number.parseFloat(bar.style.width) || bar.offsetWidth;
    const overlapLeft = Math.max(barRect.left, visibleLeft);
    const overlapRight = Math.min(barRect.right, visibleRight);
    const inset = clamp(overlapLeft - barRect.left + 10, 10, Math.max(10, barWidth - 42));
    const maxLabelWidth = Math.max(42, Math.min(220, barWidth - inset - 12, overlapRight - barRect.left - inset - 12));
    label.style.left = `${inset}px`;
    label.style.maxWidth = `${maxLabelWidth}px`;
    label.style.opacity = overlapRight - overlapLeft > 34 ? "1" : "0";
  });
}

function getStubWidth() {
  return Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--stub-width")) || 210;
}

function prepareLongPress(event, target) {
  if (event.button !== 0 || event.target.closest(".resize-handle, .time-resize")) return;
  const block = target.closest(".project-bar, .timeline-task, .day-task-block");
  if (!block) return;
  cancelLongPress();
  longPressStart = { x: event.clientX, y: event.clientY };
  longPressTimer = window.setTimeout(() => {
    contextTarget = buildBlockContext(event, block);
    if (!contextTarget) return;
    dragState = null;
    suppressNextClick = true;
    showBlockActionMenu(event.clientX, event.clientY);
  }, 560);
}

function cancelLongPress() {
  if (longPressTimer) window.clearTimeout(longPressTimer);
  longPressTimer = null;
  longPressStart = null;
}

function buildBlockContext(event, block) {
  const rect = block.getBoundingClientRect();
  if (block.classList.contains("project-bar")) {
    const project = findProject(block.dataset.projectId);
    if (!project) return null;
    const splitDays = clamp(Math.round((event.clientX - rect.left) / DAY_WIDTH), 1, Math.max(1, project.duration - 1));
    return { kind: "project", projectId: project.id, splitDays };
  }
  if (block.classList.contains("timeline-task")) {
    const found = findTask(block.dataset.taskId);
    if (!found) return null;
    const spanDays = Math.max(1, Number(found.task.spanDays) || 1);
    const splitDays = clamp(Math.round((event.clientX - rect.left) / DAY_WIDTH), 1, Math.max(1, spanDays - 1));
    return { kind: "timeline-task", taskId: found.task.id, splitDays };
  }
  if (block.classList.contains("day-task-block")) {
    const found = findTask(block.dataset.taskId);
    if (!found) return null;
    const durationMinutes = Math.round(Number(found.task.duration || 1) * 60);
    const splitMinutes = clamp(roundTo(((event.clientX - rect.left) / Math.max(1, rect.width)) * durationMinutes, 15), 15, Math.max(15, durationMinutes - 15));
    return { kind: "day-task", taskId: found.task.id, splitMinutes };
  }
  return null;
}

function showBlockActionMenu(x, y) {
  if (!dom.blockActionMenu) return;
  dom.blockActionTitle.textContent = text("blockActionTitle");
  const pasteButton = dom.blockActionMenu.querySelector("[data-action='paste-block']");
  if (pasteButton) pasteButton.disabled = !copiedBlock;
  dom.blockActionMenu.hidden = false;
  const width = dom.blockActionMenu.offsetWidth || 190;
  const height = dom.blockActionMenu.offsetHeight || 160;
  dom.blockActionMenu.style.left = `${clamp(x - width / 2, 12, window.innerWidth - width - 12)}px`;
  dom.blockActionMenu.style.top = `${clamp(y + 12, 12, window.innerHeight - height - 12)}px`;
}

function closeBlockActionMenu() {
  if (!dom.blockActionMenu) return;
  dom.blockActionMenu.hidden = true;
}

function copyContextBlock() {
  if (!contextTarget) return;
  if (contextTarget.kind === "project") {
    const project = findProject(contextTarget.projectId);
    if (project) {
      copiedBlock = { kind: "project", title: project.title, goal: project.goal, duration: project.duration, color: project.color };
    }
  } else {
    const found = findTask(contextTarget.taskId);
    if (found) {
      copiedBlock = {
        kind: "task",
        projectId: found.project.id,
        task: { ...found.task },
      };
    }
  }
  closeBlockActionMenu();
}

function splitContextBlock() {
  if (!contextTarget) return;
  if (contextTarget.kind === "project") splitProjectBlock(contextTarget.projectId, contextTarget.splitDays);
  if (contextTarget.kind === "timeline-task") splitTaskByDays(contextTarget.taskId, contextTarget.splitDays);
  if (contextTarget.kind === "day-task") splitTaskByTime(contextTarget.taskId, contextTarget.splitMinutes);
  closeBlockActionMenu();
}

function pasteCopiedBlock() {
  if (!copiedBlock) return;
  rememberUndo();
  if (copiedBlock.kind === "project") {
    state.projects.push({
      id: makeId("project"),
      title: copiedBlock.title,
      goal: copiedBlock.goal,
      start: state.selectedDate,
      duration: copiedBlock.duration,
      color: copiedBlock.color,
      tasks: [],
    });
  }
  if (copiedBlock.kind === "task") {
    const project = findProject(copiedBlock.projectId) || state.projects[0];
    if (!project) return;
    const task = { ...copiedBlock.task, id: makeId("task"), date: state.selectedDate };
    project.tasks.push(task);
  }
  closeBlockActionMenu();
  closeCreateMenu();
  saveAndRender();
}

function splitProjectBlock(projectId, splitDays) {
  const project = findProject(projectId);
  if (!project || project.duration < 2) return;
  rememberUndo();
  const firstDuration = clamp(splitDays, 1, project.duration - 1);
  const secondDuration = project.duration - firstDuration;
  const clone = {
    id: makeId("project"),
    title: project.title,
    goal: project.goal,
    start: addDays(project.start, firstDuration),
    duration: secondDuration,
    color: project.color,
    tasks: [],
  };
  project.duration = firstDuration;
  state.projects.splice(state.projects.indexOf(project) + 1, 0, clone);
  saveAndRender();
}

function splitTaskByDays(taskId, splitDays) {
  const found = findTask(taskId);
  if (!found) return;
  const spanDays = Math.max(1, Number(found.task.spanDays) || 1);
  if (spanDays < 2) return;
  rememberUndo();
  const firstSpan = clamp(splitDays, 1, spanDays - 1);
  const clone = {
    ...found.task,
    id: makeId("task"),
    date: addDays(found.task.date, firstSpan),
    spanDays: spanDays - firstSpan,
  };
  found.task.spanDays = firstSpan;
  found.project.tasks.push(clone);
  saveAndRender();
}

function splitTaskByTime(taskId, splitMinutes) {
  const found = findTask(taskId);
  if (!found) return;
  const durationMinutes = Math.round(Number(found.task.duration || 1) * 60);
  if (durationMinutes < 30) return;
  rememberUndo();
  const firstMinutes = clamp(splitMinutes, 15, durationMinutes - 15);
  const clone = {
    ...found.task,
    id: makeId("task"),
    startTime: minutesToTime(timeToMinutes(found.task.startTime) + firstMinutes),
    duration: (durationMinutes - firstMinutes) / 60,
  };
  found.task.duration = firstMinutes / 60;
  found.project.tasks.push(clone);
  saveAndRender();
}

function handlePointerDown(event) {
  const dragTarget = event.target.closest("[data-drag-type]");
  if (!dragTarget) return;
  prepareLongPress(event, dragTarget);
  startDrag(event, dragTarget);
}

function moveRange(amount) {
  state.settings.rangeStart = addDays(state.settings.rangeStart, amount);
  saveAndRender();
}

function goToday() {
  const today = todayISO();
  state.settings.rangeStart = today;
  state.selectedDate = today;
  saveAndRender();
}

function openProjectDialog(projectId = "") {
  const project = projectId ? findProject(projectId) : null;
  dom.projectDialogTitle.textContent = project ? text("projectDialogEdit") : text("projectDialogNew");
  dom.projectIdInput.value = project?.id || "";
  dom.projectTitleInput.value = project?.title || "";
  dom.projectStartInput.value = project?.start || state.selectedDate;
  dom.projectDurationInput.value = project?.duration || 30;
  dom.projectColorInput.value = project?.color || nextColor();
  dom.projectGoalInput.value = project?.goal || "";
  if (dom.projectCompleteInput) dom.projectCompleteInput.checked = Boolean(project?.completed);
  dom.deleteProjectButton.hidden = !project;
  dom.projectDialog.showModal();
}

function handleProjectSubmit(event) {
  event.preventDefault();
  const id = dom.projectIdInput.value;
  const payload = {
    title: dom.projectTitleInput.value.trim(),
    start: dom.projectStartInput.value,
    duration: Math.max(1, Number(dom.projectDurationInput.value) || 1),
    color: dom.projectColorInput.value,
    goal: dom.projectGoalInput.value.trim(),
    completed: Boolean(dom.projectCompleteInput?.checked),
  };
  if (!payload.title) return;

  rememberUndo();
  const completedDate = state.selectedDate || todayISO();
  if (id) {
    const project = findProject(id);
    if (project) {
      const wasCompleted = Boolean(project.completed);
      Object.assign(project, payload);
      project.completedDate = payload.completed
        ? (wasCompleted && isValidISODate(project.completedDate) ? project.completedDate : completedDate)
        : "";
    }
  } else {
    state.projects.push({
      id: makeId("project"),
      ...payload,
      completedDate: payload.completed ? completedDate : "",
      tasks: [],
    });
  }
  dom.projectDialog.close();
  saveAndRender();
}

function deleteCurrentProject() {
  const id = dom.projectIdInput.value;
  if (!id) return;
  if (!window.confirm(text("confirmDeleteProject"))) return;
  rememberUndo();
  state.projects = state.projects.filter((project) => project.id !== id);
  dom.projectDialog.close();
  saveAndRender();
}

function openTaskDialog(taskId = "", projectId = "") {
  const found = taskId ? findTask(taskId) : null;
  if (!state.projects.length) {
    openProjectDialog();
    return;
  }
  const project = found?.project || findProject(projectId) || state.projects[0];
  const task = found?.task;
  const isTodayAdd = !task && getActiveViewId() === "todaySection";
  dom.taskDialogTitle.textContent = task ? text("taskDialogEdit") : text(isTodayAdd ? "taskDialogTodayNew" : "taskDialogNew");
  renderTaskProjectOptions();
  dom.taskIdInput.value = task?.id || "";
  dom.taskTitleInput.value = task?.title || "";
  dom.taskProjectInput.value = project.id;
  dom.taskDateInput.value = task?.date || state.selectedDate;
  dom.taskSpanInput.value = task?.spanDays || 1;
  dom.taskStartInput.value = task?.startTime || "09:00";
  dom.taskDurationInput.value = task?.duration || 1;
  dom.taskStatusInput.value = task?.status || "todo";
  dom.taskColorInput.value = task?.color || project.color || nextColor();
  const reminder = normalizeTaskReminder(task?.reminder);
  dom.taskReminderInput.value = reminder.enabled ? "start" : "off";
  dom.taskReminderVolumeInput.value = String(reminder.volume);
  dom.taskReminderSoundInput.value = reminder.sound;
  updateTaskReminderOptions();
  dom.taskDetailInput.value = task?.detail || "";
  dom.deleteTaskButton.hidden = !task;
  dom.taskDialog.showModal();
}

function handleTaskSubmit(event) {
  event.preventDefault();
  const id = dom.taskIdInput.value;
  const targetProject = findProject(dom.taskProjectInput.value);
  if (!targetProject) return;
  const payload = {
    title: dom.taskTitleInput.value.trim(),
    date: dom.taskDateInput.value,
    spanDays: clamp(Number(dom.taskSpanInput.value) || 1, 1, 365),
    startTime: dom.taskStartInput.value,
    duration: Math.max(0.25, Number(dom.taskDurationInput.value) || 1),
    status: dom.taskStatusInput.value,
    color: dom.taskColorInput.value,
    reminder: readTaskReminderForm(),
    detail: dom.taskDetailInput.value.trim(),
  };
  if (!payload.title) return;

  rememberUndo();
  let savedTask = null;
  if (id) {
    const found = findTask(id);
    if (found) {
      found.project.tasks = found.project.tasks.filter((task) => task.id !== id);
      savedTask = { id, ...payload };
      targetProject.tasks.push(savedTask);
    }
  } else {
    savedTask = { id: makeId("task"), ...payload };
    targetProject.tasks.push(savedTask);
  }
  dom.taskDialog.close();
  saveAndRender();
  if (savedTask) scheduleNativeTaskReminder(savedTask, targetProject.title);
}

function updateTaskReminderOptions() {
  if (!dom.taskReminderOptions || !dom.taskReminderInput) return;
  dom.taskReminderOptions.hidden = dom.taskReminderInput.value !== "start";
}

function readTaskReminderForm() {
  const enabled = dom.taskReminderInput?.value === "start";
  return normalizeTaskReminder({
    enabled,
    volume: Number(dom.taskReminderVolumeInput?.value) || 0.65,
    sound: dom.taskReminderSoundInput?.value || "soft",
  });
}

function deleteCurrentTask() {
  const id = dom.taskIdInput.value;
  const found = findTask(id);
  if (!found) return;
  if (!window.confirm(text("confirmDeleteTask"))) return;
  rememberUndo();
  found.project.tasks = found.project.tasks.filter((task) => task.id !== id);
  dom.taskDialog.close();
  saveAndRender();
  cancelNativeTaskReminder(id);
}

function cycleTaskStatus(taskId) {
  const found = findTask(taskId);
  if (!found) return;
  const order = ["todo", "done", "missed"];
  const current = order.indexOf(found.task.status);
  rememberUndo();
  found.task.status = order[(current + 1) % order.length];
  saveAndRender();
  scheduleNativeReminderSync();
}

function startDrag(event, target) {
  if (event.button !== 0) return;
  const dragType = target.dataset.dragType;
  const projectId = target.dataset.projectId;
  const taskId = target.dataset.taskId;
  const project = projectId ? findProject(projectId) : null;
  const foundTask = taskId ? findTask(taskId) : null;

  if (dragType?.startsWith("project") && project) {
    dragState = {
      type: dragType,
      startX: event.clientX,
      projectId,
      startDate: project.start,
      duration: project.duration,
      undoSnapshot: JSON.stringify(state),
      moved: false,
    };
  }

  if ((dragType === "task-date" || dragType === "task-left" || dragType === "task-right") && foundTask) {
    dragState = {
      type: dragType,
      startX: event.clientX,
      taskId,
      date: foundTask.task.date,
      spanDays: Math.max(1, Number(foundTask.task.spanDays) || 1),
      undoSnapshot: JSON.stringify(state),
      moved: false,
    };
  }

  if ((dragType === "task-time" || dragType === "task-start" || dragType === "task-duration") && foundTask) {
    const start = timeToMinutes(foundTask.task.startTime);
    const block = target.closest(".day-task-block");
    dragState = {
      type: dragType,
      startX: event.clientX,
      taskId,
      startMinutes: start,
      durationMinutes: foundTask.task.duration * 60,
      undoSnapshot: JSON.stringify(state),
      block,
      captureTarget: target,
      pointerId: event.pointerId,
      moved: false,
    };
  }

  if (dragState) {
    if (target.setPointerCapture && event.pointerId !== undefined) {
      try {
        target.setPointerCapture(event.pointerId);
      } catch (error) {
        // Some mobile browsers drop capture when a drag starts near a scroll edge.
      }
    }
    event.preventDefault();
    event.stopPropagation();
  }
}

function handlePointerMove(event) {
  if (longPressStart && (Math.abs(event.clientX - longPressStart.x) > 8 || Math.abs(event.clientY - longPressStart.y) > 8)) {
    cancelLongPress();
  }
  if (!dragState) return;

  if (dragState.type === "project") {
    const project = findProject(dragState.projectId);
    if (!project) return;
    const deltaDays = Math.round((event.clientX - dragState.startX) / DAY_WIDTH);
    if (!deltaDays) return;
    const maxStart = state.settings.rangeDays - project.duration;
    const newOffset = clamp(diffDays(state.settings.rangeStart, dragState.startDate) + deltaDays, 0, Math.max(0, maxStart));
    project.start = addDays(state.settings.rangeStart, newOffset);
    dragState.moved = true;
    renderTimeline();
  }

  if (dragState.type === "project-left" || dragState.type === "project-right") {
    const project = findProject(dragState.projectId);
    if (!project) return;
    const deltaDays = Math.round((event.clientX - dragState.startX) / DAY_WIDTH);
    if (!deltaDays) return;
    if (dragState.type === "project-left") {
      const startOffset = diffDays(state.settings.rangeStart, dragState.startDate);
      const newOffset = clamp(startOffset + deltaDays, 0, startOffset + dragState.duration - 1);
      const endOffset = startOffset + dragState.duration;
      project.start = addDays(state.settings.rangeStart, newOffset);
      project.duration = Math.max(1, endOffset - newOffset);
    } else {
      const newDuration = clamp(dragState.duration + deltaDays, 1, state.settings.rangeDays - diffDays(state.settings.rangeStart, project.start));
      project.duration = newDuration;
    }
    dragState.moved = true;
    renderTimeline();
  }

  if (dragState.type === "task-date") {
    const found = findTask(dragState.taskId);
    if (!found) return;
    const deltaDays = Math.round((event.clientX - dragState.startX) / DAY_WIDTH);
    if (!deltaDays) return;
    const maxStart = Math.max(0, state.settings.rangeDays - dragState.spanDays);
    const newOffset = clamp(diffDays(state.settings.rangeStart, dragState.date) + deltaDays, 0, maxStart);
    found.task.date = addDays(state.settings.rangeStart, newOffset);
    state.selectedDate = found.task.date;
    dragState.moved = true;
    renderTimeline();
    renderSummary();
    renderDayBoard();
  }

  if (dragState.type === "task-left" || dragState.type === "task-right") {
    const found = findTask(dragState.taskId);
    if (!found) return;
    const deltaDays = Math.round((event.clientX - dragState.startX) / DAY_WIDTH);
    if (!deltaDays) return;
    const startOffset = diffDays(state.settings.rangeStart, dragState.date);
    if (dragState.type === "task-left") {
      const newOffset = clamp(startOffset + deltaDays, 0, startOffset + dragState.spanDays - 1);
      const endOffset = startOffset + dragState.spanDays;
      found.task.date = addDays(state.settings.rangeStart, newOffset);
      found.task.spanDays = Math.max(1, endOffset - newOffset);
      state.selectedDate = found.task.date;
    } else {
      const maxSpan = Math.max(1, state.settings.rangeDays - diffDays(state.settings.rangeStart, found.task.date));
      found.task.spanDays = clamp(dragState.spanDays + deltaDays, 1, maxSpan);
    }
    dragState.moved = true;
    renderTimeline();
    renderSummary();
    renderDayBoard();
  }

  if (dragState.type === "task-time" || dragState.type === "task-start" || dragState.type === "task-duration") {
    const found = findTask(dragState.taskId);
    if (!found) return;
    const deltaMinutes = roundTo((event.clientX - dragState.startX) / DAY_HOUR_WIDTH * 60, 15);
    if (!deltaMinutes) return;
    if (dragState.type === "task-time") {
      const latestStart = END_HOUR * 60 - found.task.duration * 60;
      const minutes = clamp(dragState.startMinutes + deltaMinutes, START_HOUR * 60, latestStart);
      found.task.startTime = minutesToTime(roundTo(minutes, 15));
    } else if (dragState.type === "task-start") {
      const fixedEnd = dragState.startMinutes + dragState.durationMinutes;
      const minutes = clamp(dragState.startMinutes + deltaMinutes, START_HOUR * 60, fixedEnd - 15);
      found.task.startTime = minutesToTime(roundTo(minutes, 15));
      found.task.duration = (fixedEnd - timeToMinutes(found.task.startTime)) / 60;
    } else {
      const maxDuration = END_HOUR * 60 - dragState.startMinutes;
      const duration = clamp(dragState.durationMinutes + deltaMinutes, 15, maxDuration);
      found.task.duration = roundTo(duration, 15) / 60;
    }
    dragState.moved = true;
    updateDayTaskDragPreview(found.task, dragState.block);
  }
}

function stopDrag() {
  cancelLongPress();
  if (!dragState) return;
  const wasMoved = dragState.moved;
  const undoSnapshot = dragState.undoSnapshot;
  if (dragState.captureTarget?.releasePointerCapture && dragState.pointerId !== undefined) {
    try {
      dragState.captureTarget.releasePointerCapture(dragState.pointerId);
    } catch (error) {
      // Ignore capture release errors from elements that were redrawn during drag.
    }
  }
  dragState = null;
  if (wasMoved) {
    suppressNextClick = true;
    pushUndoSnapshot(undoSnapshot);
    saveAndRender();
    scheduleNativeReminderSync();
  }
}

function updateDayTaskDragPreview(task, block) {
  if (!block) return;
  const start = timeToMinutes(task.startTime);
  const left = ((start - START_HOUR * 60) / 60) * DAY_HOUR_WIDTH + 8;
  const width = task.duration * DAY_HOUR_WIDTH;
  block.style.left = `${left}px`;
  block.style.width = `${Math.max(56, width)}px`;
  const timeLabel = timeRange(task);
  const small = block.querySelector("small");
  if (small) small.textContent = timeLabel;
  const label = block.closest(".day-track-row")?.querySelector(".day-track-label");
  if (!label) return;
  const range = label.querySelector("strong");
  const duration = label.querySelector("small");
  if (range) range.textContent = timeLabel;
  if (duration) duration.textContent = `${trimNumber(task.duration)}h`;
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `private-schedule-${todayISO()}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function handleImport() {
  const file = dom.importInput.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(String(reader.result));
      rememberUndo();
      state = imported;
      normalizeState();
      render();
    } catch (error) {
      alert(text("importError"));
    } finally {
      dom.importInput.value = "";
    }
  };
  reader.readAsText(file);
}

function getVisibleDays() {
  return Array.from({ length: state.settings.rangeDays }, (_, index) => addDays(state.settings.rangeStart, index));
}

function getAllTasks() {
  return state.projects.flatMap((project) => project.tasks.map((task) => ({ project, task })));
}

function getTasksForDate(date) {
  return getAllTasks().filter(({ task }) => {
    const spanDays = Math.max(1, Number(task.spanDays) || 1);
    return date >= task.date && date < addDays(task.date, spanDays);
  });
}

function getDayReport(date) {
  const items = getTasksForDate(date);
  const completedProjects = getProjectsCompletedOnDate(date);
  const completed = items.filter(({ task }) => task.status === "done");
  const unfinished = items.filter(({ task }) => task.status !== "done");
  const plannedHours = items.reduce((sum, { task }) => sum + Number(task.duration || 0), 0);
  const completedHours = completed.reduce((sum, { task }) => sum + Number(task.duration || 0), 0);
  const taskRatio = items.length ? completed.length / items.length : 0;
  const hourRatio = plannedHours ? completedHours / plannedHours : 0;
  const score = items.length ? Math.round((taskRatio * 0.55 + hourRatio * 0.45) * 100) : 0;
  return {
    hasTasks: items.length > 0,
    totalTasks: items.length,
    plannedHours,
    completed,
    completedProjects,
    unfinished,
    score,
    scoreLabel: items.length ? `${score}` : "-",
  };
}

function getProjectsCompletedOnDate(date) {
  return state.projects.filter((project) => project.completed && project.completedDate === date);
}

function getProjectProgress(project) {
  if (!project.tasks.length) return 0;
  const done = project.tasks.filter((task) => task.status === "done").length;
  return Math.round((done / project.tasks.length) * 100);
}

function assignTimelineLanes(tasks) {
  const lanes = {};
  const laneEnds = [];
  [...tasks].sort((a, b) => a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime)).forEach((task) => {
    const start = diffDays("1970-01-01", task.date);
    const end = start + Math.max(1, Number(task.spanDays) || 1);
    let lane = laneEnds.findIndex((laneEnd) => laneEnd <= start);
    if (lane === -1) {
      lane = laneEnds.length;
    }
    laneEnds[lane] = end;
    lanes[task.id] = lane;
  });
  return lanes;
}

function getDateMarks(iso) {
  const marks = [];
  const fixed = FIXED_HOLIDAYS[iso.slice(5)];
  const yearly = YEAR_HOLIDAYS[iso];
  const customMarks = getCustomDateMarks(iso);
  if (yearly) marks.push({ ...formatDateMark(yearly), key: `year:${iso}` });
  if (fixed) marks.push({ ...formatDateMark(fixed), key: `fixed:${iso.slice(5)}` });
  customMarks.forEach((mark) => marks.push({ label: mark.label, type: "custom", color: mark.color, key: `custom:${mark.id}`, customId: mark.id }));
  return sortDateMarks(iso, marks);
}

function getCustomDateMark(iso) {
  return getCustomDateMarks(iso)[0] || null;
}

function getCustomDateMarks(iso) {
  const value = state.specialDates?.[iso];
  if (!value) return [];
  if (Array.isArray(value)) {
    return normalizeDateMarkList(value);
  }
  if (typeof value === "string") {
    return [{ id: makeId("mark"), label: value, color: DEFAULT_DATE_MARK_COLOR }];
  }
  const mark = normalizeDateMark(value);
  return mark ? [mark] : [];
}

function normalizeDateMarkList(value) {
  if (Array.isArray(value)) {
    return value.map(normalizeDateMark).filter(Boolean);
  }
  if (typeof value === "string") {
    const label = value.trim();
    return label ? [{ id: makeId("mark"), label, color: DEFAULT_DATE_MARK_COLOR }] : [];
  }
  const mark = normalizeDateMark(value);
  return mark ? [mark] : [];
}

function normalizeDateMark(value) {
  if (!value || typeof value !== "object") return null;
  const label = String(value.label || "").trim();
  if (!label) return null;
  return {
    id: value.id || makeId("mark"),
    label,
    color: normalizeHexColor(value.color, DEFAULT_DATE_MARK_COLOR),
  };
}

function sortDateMarks(iso, marks) {
  const order = Array.isArray(state.dateMarkOrder?.[iso]) ? state.dateMarkOrder[iso] : [];
  if (!order.length) return marks;
  const rank = new Map(order.map((key, index) => [key, index]));
  return [...marks].sort((a, b) => {
    const aRank = rank.has(a.key) ? rank.get(a.key) : Number.MAX_SAFE_INTEGER;
    const bRank = rank.has(b.key) ? rank.get(b.key) : Number.MAX_SAFE_INTEGER;
    return aRank - bRank;
  });
}

function formatDateMark(mark) {
  return {
    label: localizedPair(mark.zh, mark.en),
    type: mark.type,
  };
}

function layoutDayTasks(items) {
  const sorted = [...items].sort((a, b) => timeToMinutes(a.task.startTime) - timeToMinutes(b.task.startTime));
  const columns = [];
  const result = [];
  sorted.forEach((item) => {
    const start = timeToMinutes(item.task.startTime);
    const end = start + item.task.duration * 60;
    let lane = columns.findIndex((columnEnd) => columnEnd <= start);
    if (lane === -1) {
      lane = columns.length;
      columns.push(end);
    } else {
      columns[lane] = end;
    }
    result.push({ ...item, lane });
  });
  const laneCount = Math.max(1, columns.length);
  return result.map((item) => ({ ...item, laneCount }));
}

function findProject(projectId) {
  return state.projects.find((project) => project.id === projectId);
}

function findTask(taskId) {
  for (const project of state.projects) {
    const task = project.tasks.find((item) => item.id === taskId);
    if (task) return { project, task };
  }
  return null;
}

function nextColor() {
  return COLORS[state.projects.length % COLORS.length];
}

function makeId(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function parseDate(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function toISO(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isValidISODate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ""))) return false;
  return toISO(parseDate(value)) === value;
}

function todayISO() {
  return toISO(new Date());
}

function addDays(iso, days) {
  const date = parseDate(iso);
  date.setDate(date.getDate() + days);
  return toISO(date);
}

function diffDays(startIso, endIso) {
  return Math.round((parseDate(endIso) - parseDate(startIso)) / DAY_MS);
}

function monthDay(iso) {
  const date = parseDate(iso);
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function weekdayName(iso) {
  const index = parseDate(iso).getDay();
  return localizedPair(WEEKDAYS.zh[index], WEEKDAYS.en[index]);
}

function formatDateShort(iso) {
  return `${monthDay(iso)} ${weekdayName(iso)}`;
}

function formatDateLong(iso) {
  return `${iso} ${weekdayName(iso)}`;
}

function timeToMinutes(value) {
  const [hour, minute] = value.split(":").map(Number);
  return hour * 60 + minute;
}

function minutesToTime(minutes) {
  const safeMinutes = clamp(Math.round(minutes), 0, 24 * 60);
  if (safeMinutes === 24 * 60) return "24:00";
  const hour = Math.floor(safeMinutes / 60);
  const minute = safeMinutes % 60;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function timeRange(task) {
  const start = timeToMinutes(task.startTime);
  const end = start + task.duration * 60;
  return `${task.startTime}-${minutesToTime(end)}`;
}

function readableText(hex) {
  const normalized = hex.replace("#", "");
  const red = parseInt(normalized.slice(0, 2), 16);
  const green = parseInt(normalized.slice(2, 4), 16);
  const blue = parseInt(normalized.slice(4, 6), 16);
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
  return luminance > 0.58 ? "#202124" : "#ffffff";
}

function normalizeHexColor(value, fallback) {
  const color = String(value || "").trim();
  return /^#[0-9a-f]{6}$/i.test(color) ? color : fallback;
}

function hexToRgba(hex, alpha = 1) {
  const color = normalizeHexColor(hex, "#111111").replace("#", "");
  const red = parseInt(color.slice(0, 2), 16);
  const green = parseInt(color.slice(2, 4), 16);
  const blue = parseInt(color.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${clamp(Number(alpha) || 1, 0, 1)})`;
}

function normalizeJournalFont(value) {
  const font = String(value || "").trim();
  const allowed = ["system-ui", "sans-serif", "serif", "monospace", "cursive", "fantasy"];
  if (allowed.includes(font)) return font;
  return /^[a-zA-Z0-9\s'",.-]{1,48}$/.test(font) ? font : "system-ui";
}

function normalizeNotebookColor(value, index) {
  const fallback = JOURNAL_NOTEBOOK_COLORS[index % JOURNAL_NOTEBOOK_COLORS.length];
  const color = normalizeHexColor(value, fallback);
  const oldDefaultMap = new Map([
    ["#8fc8e8", JOURNAL_NOTEBOOK_COLORS[0]],
    ["#a8c983", JOURNAL_NOTEBOOK_COLORS[4]],
    ["#ffb084", JOURNAL_NOTEBOOK_COLORS[1]],
    ["#f2d16b", JOURNAL_NOTEBOOK_COLORS[2]],
    ["#c9b6ff", JOURNAL_NOTEBOOK_COLORS[3]],
  ]);
  return oldDefaultMap.get(color.toLowerCase()) || color;
}

function normalizeCoverStyle(value, color, index) {
  if (JOURNAL_COVER_STYLES.some((style) => style.id === value)) return value;
  const normalized = String(color || "").toLowerCase();
  const matched = JOURNAL_COVER_STYLES.find((style) => style.color.toLowerCase() === normalized);
  return matched?.id || JOURNAL_COVER_STYLES[index % JOURNAL_COVER_STYLES.length].id;
}

function styleLabel(styleId) {
  return JOURNAL_COVER_STYLES.find((style) => style.id === styleId)?.label || text("journalCanvas");
}

function trimNumber(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function currentLanguage() {
  return state?.settings?.language === "en" ? "en" : "zh";
}

function localizedPair(zh, en) {
  return currentLanguage() === "en" ? en : zh;
}

function text(key) {
  const entry = I18N[key];
  if (!entry) return key;
  return localizedPair(entry.zh, entry.en);
}

function formatDays(days) {
  return localizedPair(`${days}天`, `${days}d`);
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLanguage() === "en" ? "en" : "zh-CN";
  document.title = text("appTitle");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text(element.dataset.i18n);
  });
  dom.dailyNoteInput.placeholder = text("notePlaceholder");
  if (dom.customDateInput) dom.customDateInput.placeholder = text("customDatePlaceholder");
  if (dom.dateMarkTextInput) dom.dateMarkTextInput.placeholder = text("customDatePlaceholder");
  if (dom.journalTitleInput) dom.journalTitleInput.placeholder = localizedPair("今天的标题", "Today's title");
  if (dom.journalTagsInput) dom.journalTagsInput.placeholder = localizedPair("工作, 健康, 灵感", "work, health, idea");
  if (dom.journalBodyInput) dom.journalBodyInput.placeholder = localizedPair("写下今天想留下的事", "Write what you want to remember");
  if (dom.journalSearchInput) dom.journalSearchInput.placeholder = localizedPair("搜索标题、正文或标签", "Search title, body, or tags");
  dom.scoreRing.setAttribute("aria-label", text("dailyScore"));
  dom.dateStrip.setAttribute("aria-label", text("dateList"));
  dom.timeline.setAttribute("aria-label", text("projectTimeline"));
  dom.daySchedule.setAttribute("aria-label", text("daySchedule"));
  if (dom.undoButton) dom.undoButton.setAttribute("aria-label", text("undo"));
  document.querySelectorAll("[data-action='previous-range']").forEach((element) => {
    element.title = text("previousRange");
    element.setAttribute("aria-label", text("previousRange"));
  });
  document.querySelectorAll("[data-action='next-range']").forEach((element) => {
    element.title = text("nextRange");
    element.setAttribute("aria-label", text("nextRange"));
  });
  document.querySelectorAll("[data-action='close-dialog']").forEach((element) => {
    element.setAttribute("aria-label", text("close"));
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function roundTo(value, step) {
  return Math.round(value / step) * step;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function scheduleMidnightRefresh() {
  const now = new Date();
  const next = new Date(now);
  next.setDate(now.getDate() + 1);
  next.setHours(0, 0, 5, 0);
  setTimeout(() => {
    closePastDays();
    saveAndRender();
    scheduleMidnightRefresh();
  }, next - now);
}

function scheduleMinuteRefresh() {
  setInterval(() => {
    if (!state || getActiveViewId() !== "todaySection" || state.selectedDate !== todayISO()) return;
    renderDaySchedule();
  }, 60 * 1000);
}

function scheduleTaskReminderCheck() {
  clearInterval(reminderTimer);
  scheduleNativeReminderSync();
}

function checkTaskReminders() {
  scheduleNativeReminderSync();
}

function playTaskReminderSound(reminder) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  const context = new AudioContextClass();
  const gain = context.createGain();
  gain.gain.value = clamp(Number(reminder.volume) || 0.65, 0.1, 1) * 0.16;
  gain.connect(context.destination);
  const patterns = {
    soft: [523, 659],
    bright: [784, 988],
    pulse: [440, 440, 660],
  };
  (patterns[reminder.sound] || patterns.soft).forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    oscillator.type = reminder.sound === "pulse" ? "square" : "sine";
    oscillator.frequency.value = frequency;
    oscillator.connect(gain);
    const start = context.currentTime + index * 0.22;
    oscillator.start(start);
    oscillator.stop(start + 0.16);
  });
  setTimeout(() => context.close?.(), 1400);
}

function getNativeReminderClient() {
  return window.NativeReminderClient || null;
}

function getNativeReminderItems() {
  return getAllTasks()
    .filter(({ task }) => {
      const reminder = normalizeTaskReminder(task.reminder);
      return reminder.enabled && task.status !== "done" && task.status !== "missed";
    })
    .map(({ task, project }) => ({
      task,
      projectTitle: project.title,
    }));
}

function scheduleNativeReminderSync(options = {}) {
  clearTimeout(nativeReminderSyncTimer);
  nativeReminderSyncTimer = setTimeout(() => {
    syncNativeTaskReminders(options);
  }, 250);
}

async function syncNativeTaskReminders(options = {}) {
  const client = getNativeReminderClient();
  if (!client?.isAvailable?.()) return;
  try {
    await client.syncTasks(getNativeReminderItems(), {
      requestPermission: Boolean(options.requestPermission),
    });
  } catch (error) {
    console.warn("Failed to sync native task reminders.", error);
  }
}

async function scheduleNativeTaskReminder(task, projectTitle) {
  const reminder = normalizeTaskReminder(task?.reminder);
  const client = getNativeReminderClient();
  if (!reminder.enabled) {
    cancelNativeTaskReminder(task?.id);
    return;
  }
  if (!client?.isAvailable?.()) {
    console.info("Native local notifications are available only inside the Capacitor app.");
    return;
  }
  try {
    const result = await client.scheduleTask(task, projectTitle, { requestPermission: true });
    if (!result?.ok && result?.reason === "denied") {
      window.alert(`${text("taskReminder")}：${text("notificationPermissionDenied")}`);
    }
    scheduleNativeReminderSync();
  } catch (error) {
    console.warn("Failed to schedule native reminder.", error);
  }
}

async function cancelNativeTaskReminder(taskId) {
  if (!taskId) return;
  const client = getNativeReminderClient();
  if (!client?.isAvailable?.()) return;
  try {
    await client.cancelTask(taskId);
  } catch (error) {
    console.warn("Failed to cancel native reminder.", error);
  }
}

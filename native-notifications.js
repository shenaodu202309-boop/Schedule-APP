(function () {
  const STORAGE_KEY = "private-schedule-native-reminder-ids-v1";

  function getCapacitor() {
    return window.Capacitor || null;
  }

  function isNativeApp() {
    const capacitor = getCapacitor();
    if (!capacitor) return false;
    if (typeof capacitor.isNativePlatform === "function") return capacitor.isNativePlatform();
    const platform = typeof capacitor.getPlatform === "function" ? capacitor.getPlatform() : "";
    return platform === "ios" || platform === "android";
  }

  function getLocalNotifications() {
    return getCapacitor()?.Plugins?.LocalNotifications || null;
  }

  function isAvailable() {
    return Boolean(isNativeApp() && getLocalNotifications());
  }

  function loadScheduledIds() {
    try {
      const ids = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(ids) ? ids.filter(Number.isInteger) : [];
    } catch (error) {
      return [];
    }
  }

  function saveScheduledIds(ids) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(new Set(ids)).filter(Number.isInteger)));
    } catch (error) {
      console.warn("Failed to save native reminder ids.", error);
    }
  }

  function hashToNotificationId(value) {
    const input = String(value || "task");
    let hash = 0;
    for (let index = 0; index < input.length; index += 1) {
      hash = (hash * 31 + input.charCodeAt(index)) >>> 0;
    }
    return 100000 + (hash % 1900000000);
  }

  function parseReminderDate(task) {
    const date = String(task?.date || "");
    const time = String(task?.startTime || "09:00");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(time)) return null;
    const at = new Date(`${date}T${time}:00`);
    return Number.isNaN(at.getTime()) ? null : at;
  }

  function buildNotification(task, projectTitle) {
    const at = parseReminderDate(task);
    if (!at || at <= new Date()) return null;
    return {
      id: hashToNotificationId(task.id),
      title: task.title || "任务提醒",
      body: projectTitle ? `${projectTitle} · ${task.startTime || ""}` : `开始时间 ${task.startTime || ""}`,
      schedule: { at },
      extra: {
        taskId: task.id,
        date: task.date,
        url: "./index.html#todaySection",
      },
    };
  }

  async function checkPermissions() {
    const localNotifications = getLocalNotifications();
    if (!localNotifications?.checkPermissions) return { display: "unavailable" };
    return localNotifications.checkPermissions();
  }

  async function requestPermissions() {
    const localNotifications = getLocalNotifications();
    if (!localNotifications?.requestPermissions) return { display: "unavailable" };
    return localNotifications.requestPermissions();
  }

  async function ensurePermission(shouldRequest) {
    if (!isAvailable()) return { ok: false, reason: "not-native" };
    const current = await checkPermissions();
    if (current.display === "granted") return { ok: true };
    if (!shouldRequest) return { ok: false, reason: current.display || "not-granted" };
    const next = await requestPermissions();
    return next.display === "granted"
      ? { ok: true }
      : { ok: false, reason: next.display || "denied" };
  }

  async function cancelIds(ids) {
    const localNotifications = getLocalNotifications();
    const cleanIds = Array.from(new Set(ids)).filter(Number.isInteger);
    if (!localNotifications?.cancel || !cleanIds.length) return;
    await localNotifications.cancel({ notifications: cleanIds.map((id) => ({ id })) });
  }

  async function scheduleNotifications(notifications) {
    const localNotifications = getLocalNotifications();
    if (!localNotifications?.schedule || !notifications.length) return;
    await localNotifications.schedule({ notifications });
  }

  async function scheduleTask(task, projectTitle = "", options = {}) {
    const permission = await ensurePermission(Boolean(options.requestPermission));
    if (!permission.ok) return permission;
    const notification = buildNotification(task, projectTitle);
    if (!notification) return { ok: false, reason: "past-or-invalid" };
    await cancelIds([notification.id]);
    await scheduleNotifications([notification]);
    saveScheduledIds([...loadScheduledIds(), notification.id]);
    return { ok: true, id: notification.id };
  }

  async function cancelTask(taskId) {
    const id = hashToNotificationId(taskId);
    await cancelIds([id]);
    saveScheduledIds(loadScheduledIds().filter((savedId) => savedId !== id));
    return { ok: true };
  }

  async function syncTasks(taskItems, options = {}) {
    const permission = await ensurePermission(Boolean(options.requestPermission));
    if (!permission.ok) return permission;
    const desired = taskItems
      .map((item) => buildNotification(item.task, item.projectTitle))
      .filter(Boolean);
    const desiredIds = desired.map((notification) => notification.id);
    await cancelIds(loadScheduledIds());
    await scheduleNotifications(desired);
    saveScheduledIds(desiredIds);
    return { ok: true, count: desired.length };
  }

  window.NativeReminderClient = {
    isNativeApp,
    isAvailable,
    checkPermissions,
    requestPermissions,
    scheduleTask,
    cancelTask,
    syncTasks,
  };
})();

# 交给 Codex 的接入指令

请把随附的 `warm_pixel_codex_assets` 素材包接入当前“人生游戏”App。

## 项目约束

- 当前项目是普通 HTML / CSS / JavaScript PWA。
- 不要使用 React、Vue、Tailwind。
- 不要重写整个 App。
- 不要修改任何现有 localStorage key。
- 不要破坏账号、Supabase 云备份、任务闹钟、公司、银行、发票、人际关系、技能股市功能。
- 不要把 PNG 转成 base64。
- 只修改必要文件。
- 若修改静态资源，请同步更新 service worker cache version 与资源版本号。

## 素材放置

把整个素材包复制到：

`assets/skins/warm-pixel/`

保持目录结构和文件名不变。

## 第一阶段接入目标

### 1. 公司探索地图

- 使用 `previews/company_map_full.png` 作为第一版背景效果。
- 5×5 交互格子继续由 HTML 渲染并覆盖在背景上。
- 格子状态分别使用：
  - `company-map/tile_hidden.png`
  - `company-map/tile_hidden_pressed.png`
  - `company-map/tile_revealed.png`
  - `company-map/department_entrance.png`
  - `company-map/department_locked.png`
  - `company-map/department_open.png`
  - `company-map/department_complete.png`
  - `company-map/current_highlight.png`
- 每个格子保持正方形。
- 部门名称用 HTML 文字，不要写进图片。

### 2. 创作部办公室

- 使用 `previews/creative_office_full.png` 作为首个完整办公室场景。
- 家具可独立使用 `office/` 下的透明 PNG。
- 办公室人物优先使用：
  - `characters/actions/stand_front.png`
  - `characters/actions/use_computer.png`
  - `characters/actions/read_file.png`
  - `characters/actions/rest.png`
  - `characters/actions/celebrate.png`
- 人物名字用 HTML 名字底牌显示。

### 3. 后花园

- 使用 `previews/garden_full.png` 作为场景背景。
- 可交互物体使用 `garden/` 下透明 PNG。
- 爱情、友情、亲情植物分别使用：
  - `plants/rose/`
  - `plants/daisy/`
  - `plants/family-tree/`
- 植物阶段字段保持 1–5。
- 成长、完成、选中和浇水状态使用各目录中的对应 PNG。

### 4. 攻略角色区域

使用：

- `relationship-ui/avatar_frame.png`
- `relationship-ui/event_heart.png`
- `relationship-ui/event_gift.png`
- `relationship-ui/event_message.png`
- `relationship-ui/event_record.png`
- `relationship-ui/progress_bar.png`
- `relationship-ui/feedback_plus_10.png`
- `relationship-ui/plant_growth_effect.png`
- `relationship-ui/relationship_complete_effect.png`
- `relationship-ui/celebration_garland.png`

AI 或程序不能自动改变攻略数据，所有增加亲密值的操作继续走现有用户操作逻辑。

### 5. 已攻略战术册

使用：

- `strategy-book/cover.png`
- `strategy-book/open_book.png`
- `strategy-book/page_left_arrow.png`
- `strategy-book/page_right_arrow.png`
- `strategy-book/tab_love.png`
- `strategy-book/tab_friendship.png`
- `strategy-book/tab_family.png`
- `strategy-book/complete_stamp.png`

页签和角色名字由 HTML 文字覆盖显示。

### 6. 通用 UI

按钮状态使用：

- `ui/button_normal.png`
- `ui/button_pressed.png`
- `ui/button_selected.png`
- `ui/button_disabled.png`
- `ui/button_primary.png`

不要把按钮文字写进图片。按钮中文字由 HTML 居中显示。

## CSS 要求

```css
[data-skin="warm-pixel"] img,
[data-skin="warm-pixel"] .pixel-art {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}

.skin-sprite {
  position: absolute;
  object-fit: contain;
  pointer-events: none;
}

.skin-button {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
```

- 手机竖屏 390px 优先。
- 使用 `srcset` 加载 `@2x` 版本。
- 图片加载失败时保留 CSS fallback。
- 不要让图片阻塞 App 初始化。
- 图片 alt 为空或使用可访问文本，功能名称必须由 HTML 提供。

## 皮肤状态

新增独立配置：

```js
const ACTIVE_SKIN_KEY = "life-game-active-skin-v1";
const DEFAULT_SKIN = "warm-pixel";
```

不要修改旧 key。

## 验收

1. 公司地图能显示并点击格子。
2. 格子不同状态能切换图片。
3. 创作部办公室能显示人物工作状态。
4. 后花园能显示三类植物 5 阶段。
5. 战术册能打开和翻页。
6. 通用按钮有正常、按下、选中、禁用状态。
7. 390px 手机宽度不横向溢出。
8. 不出现 base64 图片。
9. 不影响原有数据。
10. 更新 service worker cache version。

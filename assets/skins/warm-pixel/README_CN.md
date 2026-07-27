# Warm Pixel Codex Asset Pack

这是从“人生游戏·温暖像素经营”美术效果图中拆分出的第一版可直接接入素材包。

## 内容

- `company-map/`：5×5 公司探索地图格子、部门状态、地面装饰、传送门
- `office/`：创作部办公室家具与小物件
- `characters/`：办公室人物基础角色、分层部件、动作状态
- `garden/`：后花园门、长椅、灯、浇水壶、花盆、温室、地面块
- `plants/`：玫瑰、雏菊、亲情树 5 阶段与成长/完成/选中/浇水状态
- `relationship-ui/`：攻略角色头像框、事件图标、进度条与特效
- `strategy-book/`：战术册、翻页箭头、分类页签、完成印章
- `ui/`：按钮状态、关闭按钮、进度条、徽章、图标、弹窗和提示框
- `previews/`：完整公司地图、办公室、后花园、战术册和 UI 效果图

## 尺寸与使用

每个透明元素都同时提供：

- `asset.png`：原始像素尺寸
- `asset@2x.png`：2 倍最近邻放大版本

网页中建议：

```css
.pixel-art {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
```

优先用普通 PNG 作为逻辑素材；高分屏可用 `@2x`：

```html
<img
  class="pixel-art"
  src="./assets/skins/warm-pixel/garden/bench.png"
  srcset="./assets/skins/warm-pixel/garden/bench@2x.png 2x"
  alt=""
>
```

## 重要说明

1. `previews/` 是完整场景底图，可以先快速接入作为背景。
2. 其他目录是透明 PNG，用于可点击、可移动、可换状态的游戏元素。
3. 不要把素材转成 base64。
4. 角色名字、部门名字、数字和按钮文案继续由 HTML/CSS 渲染。
5. 第一版素材来自同一张生成式美术表，已尽量去除说明文字和背景；后续做正式动画序列时，建议逐项重绘或扩帧。
6. 不要更改现有 localStorage key。皮肤选择请新增独立 key，例如 `life-game-active-skin-v1`。

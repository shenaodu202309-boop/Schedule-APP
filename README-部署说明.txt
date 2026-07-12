这是完整 Cloudflare Pages 上传包。

包含：
- 私人排期日程首页：index.html
- 新皮肤游戏：graduation-game-v2/index.html
- assets、icons、manifest、service-worker
- 游戏所需角色、银行、塔罗、人际关系、发票、换装素材

上传方法：
1. 打开 Cloudflare Pages。
2. 选择 Upload assets / 直接上传静态资源。
3. 把整个 cloudflare-complete-upload 文件夹拖进去。
4. 部署完成后访问根地址，会先进入私人排期日程首页。
5. 首页里的游戏入口会进入 graduation-game-v2。

说明：
- 纯静态 HTML / CSS / JS，不需要构建命令。
- 不包含 node_modules、原生 App 工程或旧压缩包。
- 浏览器 localStorage 是本地存档；本机存档不会自动同步到线上。

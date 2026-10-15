# ParkMemo Support

泊记 / ParkMemo 的独立技术支持网站。静态 HTML、CSS 和 JavaScript，无构建依赖。

- 中英双语与系统语言自动选择
- 三步设置指引与可搜索的常见问题
- 联系邮箱：dev.mintolaw@gmail.com
- 邮件反馈模板；网站不会代替访客发送邮件
- 自适应布局与键盘访问

## 网站语言链接

- 默认英文：https://mintoro.github.io/parkmemo-support/?lang=en
- 默认中文：https://mintoro.github.io/parkmemo-support/?lang=zh
- 自动跟随浏览器语言：https://mintoro.github.io/parkmemo-support/

`lang=en` 或 `lang=zh` 优先于浏览器语言；未指定或不支持的参数自动回退到浏览器语言（中文为中文，其他语言为英文）。手动切换语言会更新当前链接，刷新或分享该链接可保留所选语言。

## 本地预览

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

打开 http://127.0.0.1:4173/ 。

## 发布到 GitHub Pages

1. 在 `mintoRo` 下创建独立公开仓库 `parkmemo-support`。
2. 只将本目录中的网站文件推送到新仓库的 `main` 分支。
3. 打开新仓库的 Settings → Pages。
4. 在 Build and deployment 中选择 Deploy from a branch，再选择 `main` 和 `/ (root)`，保存。
5. 等待 GitHub Pages 构建成功，并使用页面显示的实际网址。

网站已发布至 https://mintoro.github.io/parkmemo-support/ 。后续推送至 `main` 会自动部署。

不要将 App 源码仓库及其 Git 历史复制到本仓库。本目录与 App 仓库相互独立。

## 验证记录

- `node --check app.js` 通过。
- 本地 HTTP 返回 200。
- 浏览器验证：中英切换、搜索匹配与无结果状态、复制邮箱成功、邮件链接收件人及反馈模板。
- 390px 手机宽度与桌面布局已目视检查，手机页面无横向溢出。

## 更新脚本

修改 `app.js` 后，同步更新 `index.html` 中脚本 URL 的 `v` 参数（使用脚本内容的 SHA-256 前 12 位），避免浏览器继续使用 GitHub Pages 缓存中的旧脚本。

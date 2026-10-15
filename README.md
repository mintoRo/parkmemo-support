# ParkMemo Support

泊记 / ParkMemo 的独立技术支持网站。静态 HTML、CSS 和 JavaScript，无构建依赖。

- 中英双语与系统语言自动选择
- 三步设置指引与可搜索的常见问题
- 联系邮箱：dev.mintolaw@gmail.com
- 邮件反馈模板；网站不会代替访客发送邮件
- 自适应布局与键盘访问

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

预计网址为 https://mintoro.github.io/parkmemo-support/ ，该网址需部署成功后才能使用。

不要将 App 源码仓库及其 Git 历史复制到本仓库。本目录与 App 仓库相互独立。

## 验证记录

- `node --check app.js` 通过。
- 本地 HTTP 返回 200。
- 浏览器验证：中英切换、搜索匹配与无结果状态、复制邮箱成功、邮件链接收件人及反馈模板。
- 390px 手机宽度与桌面布局已目视检查，手机页面无横向溢出。

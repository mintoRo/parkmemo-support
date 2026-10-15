'use strict';
let language = 'zh';
const search = document.querySelector('#search');
const entries = [...document.querySelectorAll('.faq-list details')];
function filterQuestions() {
  const query = search.value.trim().toLocaleLowerCase();
  let count = 0;
  entries.forEach(entry => {
    const match = entry.textContent.toLocaleLowerCase().includes(query);
    entry.hidden = !match;
    if (match) count++;
    entry.open = Boolean(query && match);
  });
  document.querySelector('#no-results').hidden = count > 0;
  document.querySelector('#search-status').textContent = query ? (language === 'zh' ? `找到 ${count} 个相关问题` : `${count} matching question${count === 1 ? '' : 's'}`) : '';
}
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-zh]').forEach(element => { element.innerHTML = element.dataset[next]; });
  document.title = next === 'zh' ? '泊记 ParkMemo · 技术支持' : 'ParkMemo · Support';
  document.querySelector('meta[name="description"]').content = next === 'zh' ? '泊记 ParkMemo 技术支持：快速设置、自动停车记录、楼层识别、定位与小组件帮助。联系 dev.mintolaw@gmail.com。' : 'ParkMemo support: setup, automatic parking records, floor estimates, location and widget help. Contact dev.mintolaw@gmail.com.';
  const toggle = document.querySelector('#language');
  toggle.innerHTML = next === 'zh' ? 'EN <span aria-hidden="true">↗</span>' : '中文 <span aria-hidden="true">↗</span>';
  toggle.setAttribute('aria-label', next === 'zh' ? 'Switch to English' : '切换为中文');
  search.placeholder = next === 'zh' ? '搜索问题，例如：楼层' : 'Search questions, e.g. floor';
  search.setAttribute('aria-label', next === 'zh' ? '搜索常见问题' : 'Search frequently asked questions');
  const body = next === 'zh' ? '你好，泊记开发者：\n\n问题描述：\n重现步骤：\n预期结果：\n实际结果：\n\niPhone 型号：\niOS 版本：\n泊记版本：\n\n（如需附加截图，请遮盖私人信息。）' : 'Hello ParkMemo developer,\n\nIssue description:\nSteps to reproduce:\nExpected result:\nActual result:\n\niPhone model:\niOS version:\nParkMemo version:\n\nPlease hide private details in any screenshots.';
  document.querySelector('#report').href = `mailto:dev.mintolaw@gmail.com?subject=${encodeURIComponent(next === 'zh' ? '泊记 ParkMemo 技术支持' : 'ParkMemo Support')}&body=${encodeURIComponent(body)}`;
  document.querySelector('#copy-status').textContent = '';
  search.value = '';
  filterQuestions();
}
document.querySelector('#language').addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));
search.addEventListener('input', filterQuestions);
document.querySelector('#copy-email').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('dev.mintolaw@gmail.com');
    document.querySelector('#copy-status').textContent = language === 'zh' ? '邮箱已复制。' : 'Email address copied.';
  } catch {
    document.querySelector('#copy-status').textContent = language === 'zh' ? '请长按或选中上方邮箱手动复制。' : 'Select the email address above to copy it manually.';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
setLanguage(navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en');

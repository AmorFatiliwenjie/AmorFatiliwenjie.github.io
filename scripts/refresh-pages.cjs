/* Optional maintenance command: node scripts/refresh-pages.cjs
 * Materialize both language versions for crawlers, text-only browsers and static file previews.
 * The browser reads the same data and views for language switching.
 */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const env = vm.createContext({ window: {} });
for (const file of ['data/interface.js', 'data/research.js', 'data/profile.js', 'app.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), env, { filename: file });
}
const host = 'https://amorfatiliwenjie.github.io/';
for (const lang of ['en', 'zh']) {
  const zh = lang === 'zh';
  const view = env.window.homepageView(lang);
  const canonical = host + (zh ? 'zh.html' : '');
  const doc = `<!doctype html>
<html lang="${zh ? 'zh-CN' : 'en'}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${view.title}</title>
  <meta name="description" content="${view.description}">
  <meta name="author" content="Wenjie Li">
  <meta name="theme-color" content="#fafaf8">
  <meta property="og:type" content="profile">
  <meta property="og:title" content="${view.title}">
  <meta property="og:description" content="${view.description}">
  <meta property="og:locale" content="${zh ? 'zh_CN' : 'en_US'}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${host}assets/portrait-413.webp">
  <meta property="og:image:alt" content="${zh ? '李文婕' : 'Wenjie Li'}">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="en" href="${host}">
  <link rel="alternate" hreflang="zh-CN" href="${host}zh.html">
  <link rel="alternate" hreflang="x-default" href="${host}">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="styles.css">
  <script defer src="data/interface.js"></script>
  <script defer src="data/research.js"></script>
  <script defer src="data/profile.js"></script>
  <script defer src="app.js"></script>
</head>
<body>
  <div id="site-header">${view.header}</div>
  <main id="main" class="wrap" tabindex="-1">${view.main}</main>
  <div id="site-footer">${view.contact}</div>
</body>
</html>
`;
  fs.writeFileSync(path.join(root, zh ? 'zh.html' : 'index.html'), doc);
}

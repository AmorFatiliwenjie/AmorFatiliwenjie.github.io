/* Page views are shared by the browser and the optional static HTML refresh script. */
window.homepageView = function homepageView(language) {
  const zh = language === 'zh';
  const words = window.interfaceData;
  const research = window.researchData;
  const profile = window.profileData;
  const t = (key) => words[key][zh ? 1 : 0];
  const local = (value) => (typeof value === 'string' ? value : value[language]);
  const esc = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch],
    );
  const tr = (value) => esc(local(value));
  const labUrl = 'https://nbjl.nankai.edu.cn/2019/0513/c13371a553060/page.htm';
  const github = 'https://github.com/AmorFatiliwenjie';
  const email = 'liwj@nbjl.nankai.edu.cn';
  const paths = {
    mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 7 9-7"/>',
    file: '<path d="M5 2.5h9l5 5v14H5z"/><path d="M14 2.5v5h5M8.5 12h7M8.5 16h7"/>',
    github:
      '<path fill="currentColor" stroke="none" d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.29-1.25-1.64-1.25-1.64-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.4-1.22.72-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.01-.12-.29-.5-1.43.11-2.98 0 0 .95-.31 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.54.24 2.68.12 2.98.72.78 1.15 1.78 1.15 3.01 0 4.32-2.63 5.27-5.14 5.55.41.35.77 1.03.77 2.08v3.09c0 .3.2.66.77.54A11.2 11.2 0 0 0 12 .8Z"/>',
    pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.2"/>',
  };
  const icon = (name) =>
    `<svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</svg>`;
  const link = (url, label) => `<a href="${esc(url)}">${label}</a>`;
  const resources = (record) =>
    record.links?.length
      ? `<div class="resources">${record.links
          .map((item) => link(item.url, tr(item.label)))
          .join('')}</div>`
      : '';
  const figure = (record) =>
    record.figure
      ? `<figure class="research-figure"><img loading="lazy" src="${esc(record.figure)}" alt="${tr(
          record.alt,
        )}">${record.caption ? `<figcaption>${tr(record.caption)}</figcaption>` : ''}</figure>`
      : '';
  const sectionHeading = (key) => `<h2 id="${key}-heading">${t(key)}</h2>`;
  const section = (key, body) =>
    `<section class="chapter" id="${key}" aria-labelledby="${key}-heading">${sectionHeading(
      key,
    )}${body}</section>`;
  const menuLinks = [
    ['about', 'navAbout'],
    ['research', 'navResearch'],
    ['publications', 'navPublications'],
    ['projects', 'navProjects'],
  ];
  const menu = (list) => list.map(([id, key]) => link(`#${id}`, t(key))).join('');
  const moreLinks = ['news', 'education', 'honors', 'patents', 'contact'].map((key) => [key, key]);
  const primaryName = zh ? '李文婕' : 'Wenjie Li';
  const secondaryName = zh ? 'Wenjie Li' : '李文婕';
  const languages = `<div class="languages" role="group" aria-label="${t(
    'lang',
  )}"><a lang="en" hreflang="en" href="index.html?lang=en" data-lang="en" ${
    zh ? '' : 'aria-current="true"'
  }>EN</a><a lang="zh-CN" hreflang="zh-CN" href="zh.html?lang=zh" data-lang="zh" ${
    zh ? 'aria-current="true"' : ''
  }>中文</a></div>`;
  const header = `<a class="skip" href="#main">${t(
    'skip',
  )}</a><header class="masthead"><div class="wrap head-inner"><a class="brand" href="#profile" aria-label="${t(
    'home',
  )}"><span class="monogram" aria-hidden="true">W<span>L</span></span><span>${primaryName}</span></a><nav aria-label="${t(
    'navLabel',
  )}"><div class="major-links">${menu(
    menuLinks,
  )}</div><details class="menu"><summary><span class="menu-desktop">${t(
    'navMore',
  )}</span><span class="menu-mobile">${t(
    'navMenu',
  )}</span><i class="chevron"></i></summary><div class="menu-pop"><div class="menu-mobile-links">${menu(
    menuLinks,
  )}</div>${menu(moreLinks)}</div></details></nav>${languages}</div></header>`;
  const actions = `<div class="hero-links"><a class="cv" href="assets/wenjie-li-cv.pdf" download aria-label="${t(
    'cvTitle',
  )}">${icon('file')}${t('cv')}<small>${t('cvFormat')}</small></a><a href="mailto:${email}">${icon(
    'mail',
  )}${t('email')}</a><a href="${github}">${icon('github')}GitHub</a></div>`;
  const hero = `<section id="profile" class="hero" aria-labelledby="name"><div class="identity"><p class="eyebrow"><span class="accent-rule"></span>${t(
    'university',
  )}</p><h1 id="name"><span>${primaryName}</span><span lang="${
    zh ? 'en' : 'zh-CN'
  }" class="other-name">${secondaryName}</span></h1><p class="role">${t(
    'role',
  )}</p><p class="affiliation">${link(
    labUrl,
    t('lab'),
  )} <span>(NBJL)</span></p><p class="introduction">${t(
    'introduction',
  )}</p>${actions}</div><figure class="portrait"><div class="photo-mat"><img src="assets/portrait-413.webp" srcset="assets/portrait-220.webp 220w, assets/portrait-413.webp 413w" sizes="(max-width: 620px) 118px, (max-width: 820px) 180px, 245px" alt="${t(
    'portrait',
  )}" width="413" height="521" fetchpriority="high"></div><figcaption>${icon('pin')}${t(
    'location',
  )}</figcaption></figure></section>`;
  const dateText = (date) =>
    new Intl.DateTimeFormat(zh ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: zh ? 'numeric' : 'short',
      timeZone: 'UTC',
    }).format(new Date(`${date}-01T00:00:00Z`));
  const newsItems = (entries) => entries.map((item) => {
    const reference = item.url
      ? `<a class="news-source" href="${esc(item.url)}">${tr(item.linkLabel)}</a>`
      : '';
    return `<li><time datetime="${esc(item.date)}">${esc(dateText(item.date))}</time><p>${tr(item.text)}</p>${reference}</li>`;
  }).join('');
  const earlier = profile.news.slice(3);
  const archive = earlier.length ? `<details id="earlier-news" class="technical news-archive"><summary>${t('earlier')} (${earlier.length})<span aria-hidden="true"></span></summary><ol class="news-list">${newsItems(earlier)}</ol></details>` : '';
  const aboutNews = `<div class="opening">
    <section id="about" aria-labelledby="about-heading">${sectionHeading('about')}
      ${profile.bio[language].map(p => `<p>${esc(p)}</p>`).join('')}
    </section>
    <section id="news" aria-labelledby="news-heading">${sectionHeading('news')}
      <ol class="news-list">${newsItems(profile.news.slice(0, 3))}</ol>
      ${archive}
    </section>
  </div>`;
  const interests = section(
    'research',
    `<div class="interest-grid">${research.interests
      .map((i) => `<article><h3>${tr(i.title)}</h3><p>${tr(i.description)}</p></article>`)
      .join('')}</div>`,
  );
  const byline = (p) =>
    p.authors.length
      ? `<p class="authors">${p.authors
          .map((a) => (a === 'Wenjie Li' ? `<strong>${esc(a)}</strong>` : esc(a)))
          .join(', ')}${p.role ? ` · ${tr(p.role)}` : ''}</p>`
      : `<p class="authors">${tr(p.role)}</p>`;
  const publications = section(
    'publications',
    research.publications
      .map(
        (p) =>
          `<article id="${esc(p.id)}" class="publication"><div class="venue"><span>${esc(
            p.venue,
          )}</span><b>${esc(p.year)}</b></div><div><p class="metadata">${tr(
            p.status,
          )}</p><h3 lang="en">${tr(p.title)}</h3>${byline(p)}<p>${tr(p.description)}</p>${figure(
            p,
          )}${resources(p)}</div></article>`,
      )
      .join(''),
  );
  const projects = section(
    'projects',
    research.projects
      .map(
        (p) =>
          `<article id="${esc(
            p.id,
          )}" class="project"><div class="project-title"><p class="metadata">${tr(
            p.category,
          )}</p><h3>${tr(p.title)}</h3></div><div class="project-copy"><p>${tr(
            p.intro,
          )}</p><details class="technical"><summary>${t(
            'topics',
          )}<span aria-hidden="true"></span></summary><div class="technical-body">${figure(
            p,
          )}<dl>${p.details
            .map((d) => `<dt>${tr(d.label)}</dt><dd>${tr(d.text)}</dd>`)
            .join('')}</dl></div></details>${resources(p)}</div></article>`,
      )
      .join(''),
  );
  const education = section(
    'education',
    profile.experience
      .map(
        (e) =>
          `<article class="timeline-row"><p class="period">${tr(e.dates)}</p><div><h3>${tr(
            e.role,
          )}</h3><p>${tr(e.institution)}</p><p class="muted">${tr(
            e.description,
          )}</p></div></article>`,
      )
      .join(''),
  );
  const honors = section(
    'honors',
    profile.honors
      .map(
        (h) =>
          `<div class="honor-group"><h3>${tr(h.category)}</h3><ul>${h.items
            .map(
              (i) =>
                `<li><span class="period">${esc(i.date)}</span><div>${tr(i.name)}${
                  i.issuer ? `<small>${tr(i.issuer)}</small>` : ''
                }</div></li>`,
            )
            .join('')}</ul></div>`,
      )
      .join(''),
  );
  const patents = section(
    'patents',
    profile.patents
      .map(
        (p) =>
          `<article class="patent"><h3>${tr(p.title)}</h3><p>${tr(
            p.details,
          )}</p><div class="resources">${link(p.url, t('source'))}</div></article>`,
      )
      .join(''),
  );
  const contact = `<footer id="contact"><div class="wrap"><div class="contact-inner"><div>${sectionHeading(
    'contact',
  )}<a class="email-address" href="mailto:${email}">${email}</a></div><div class="footer-links">${link(
    github,
    'GitHub',
  )}${link(labUrl, t('labProfile'))}</div></div><div class="colophon"><span>© ${primaryName} · ${t(
    'university',
  )}</span>${link('#profile', t('top'))}</div></div></footer>`;
  return {
    header,
    main: hero + aboutNews + interests + publications + projects + education + honors + patents,
    contact,
    title: t('title'),
    description: t('description'),
  };
};

if (typeof document !== 'undefined') {
  const storageKey = 'wenjie-homepage-language';
  const valid = (value) => ['en', 'zh'].includes(value);
  const languageInPage = () => (document.documentElement.lang.startsWith('zh') ? 'zh' : 'en');
  function preferredLanguage() {
    const requested = new URL(location.href).searchParams.get('lang');
    if (valid(requested)) return requested;
    if (location.pathname.endsWith('/zh.html')) return 'zh';
    try {
      const saved = localStorage.getItem(storageKey);
      if (valid(saved)) return saved;
    } catch {}
    return 'en';
  }
  function display(language, keepPosition) {
    if (languageInPage() === language) return;
    const marker = 100;
    const sections = Array.from(
      document.querySelectorAll('main section[id], main article[id], footer[id]'),
    );
    const target = sections
      .filter(
        (e) => e.getBoundingClientRect().top <= marker && e.getBoundingClientRect().bottom > marker,
      )
      .at(-1);
    const offset = target ? target.getBoundingClientRect().top : 0;
    const y = window.scrollY;
    const archiveOpen = document.getElementById('earlier-news')?.open;
    const expanded = Array.from(document.querySelectorAll('article:has(.technical[open])')).map(
      (e) => e.id,
    );
    const content = window.homepageView(language);
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = content.title;
    document.querySelector('meta[name=description]').content = content.description;
    document.querySelector('meta[property="og:title"]').content = content.title;
    document.querySelector('meta[property="og:description"]').content = content.description;
    document.querySelector('meta[property="og:locale"]').content =
      language === 'zh' ? 'zh_CN' : 'en_US';
    const canonical = `https://amorfatiliwenjie.github.io/${language === 'zh' ? 'zh.html' : ''}`;
    document.querySelector('link[rel=canonical]').href = canonical;
    document.querySelector('meta[property="og:url"]').content = canonical;
    document.querySelector('#site-header').innerHTML = content.header;
    document.querySelector('main').innerHTML = content.main;
    document.querySelector('#site-footer').innerHTML = content.contact;
    expanded.forEach((id) => {
      const details = document.getElementById(id)?.querySelector('details');
      if (details) details.open = true;
    });
    const archive = document.getElementById('earlier-news');
    if (archive && archiveOpen) archive.open = true;
    if (keepPosition) {
      const newTarget = target && document.getElementById(target.id);
      const top = newTarget ? window.scrollY + newTarget.getBoundingClientRect().top - offset : y;
      window.scrollTo({ top, behavior: 'instant' });
    }
  }
  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[data-lang]');
    if (
      anchor &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.shiftKey &&
      !event.altKey &&
      event.button === 0
    ) {
      event.preventDefault();
      const language = anchor.dataset.lang;
      const url = new URL(location.href);
      url.searchParams.set('lang', language);
      if (url.href !== location.href) {
        // Browsers restrict URL changes for documents opened directly from disk.
        try {
          history.pushState({ language }, '', url);
        } catch {}
      }
      try {
        localStorage.setItem(storageKey, language);
      } catch {}
      display(language, true);
      document.querySelector(`[data-lang="${language}"]`).focus({ preventScroll: true });
    }
    const menu = document.querySelector('.menu[open]');
    if (menu && (!menu.contains(event.target) || event.target.closest('a'))) menu.open = false;
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const menu = document.querySelector('.menu[open]');
      if (menu) {
        menu.open = false;
        menu.querySelector('summary').focus();
      }
    }
  });
  window.addEventListener('popstate', (event) =>
    display(valid(event.state?.language) ? event.state.language : preferredLanguage(), true),
  );
  const initialLanguage = preferredLanguage();
  history.replaceState({ language: initialLanguage }, '');
  display(initialLanguage, false);
}

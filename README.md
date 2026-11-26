# Wenjie Li · Bilingual academic homepage

Wenjie Li’s academic homepage at Nankai University. The site runs directly from HTML, CSS and vanilla JavaScript on GitHub Pages. [Public site](https://amorfatiliwenjie.github.io/)

## Preview locally

Open [the English homepage](index.html?lang=en) or [the Chinese homepage](zh.html?lang=zh) in a browser. Both HTML files contain complete, readable page content. An explicit `?lang=en` or `?lang=zh` selects a language. Without a query, the root page uses a saved preference if available and otherwise opens in English.

## Update the homepage

| File | Content |
| --- | --- |
| `data/research.js` | Research interests, publications, projects, methods, evaluations and resource links |
| `data/profile.js` | Biography, education, news, awards and patents |
| `data/interface.js` | Introduction, titles, navigation and control labels |
| `app.js` | Shared semantic markup and browser interactions |
| `styles.css` | Typography, colors, responsive layouts and focus styles |
| `assets/` | Public portraits, favicon and downloadable academic CV |

Keep translations together in each record. Use the official paper title in both languages. Add news in reverse chronological order using `YYYY-MM`. A linked news item includes bilingual `linkLabel` text describing the destination. The three newest entries appear first, and visitors can expand the archive.

After changing data or page markup, run the following command from the repository root. It refreshes the two checked-in HTML files with Node.js built-ins. GitHub Pages serves the output directly. CSS-only changes take effect immediately.

```sh
node scripts/refresh-pages.cjs
```

The English academic CV is a separately prepared public document. Update it independently if a biographical detail changes. Use public material for photo derivatives and publication assets.

## GitHub Pages deployment

This checkout has its entry point and `.nojekyll` at repository root on `main`. The redesign uses that same layout. The repository owner can view the active publishing source in **Settings → Pages → Build and deployment**. Keep the existing source configuration. [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

After approval to publish, review the exact files for the release. The following stages the redesigned site and its maintenance sources explicitly.

```sh
git add -- .gitignore README.md index.html zh.html app.js styles.css data/interface.js data/profile.js data/research.js assets/favicon.svg assets/portrait-220.webp assets/portrait-413.webp assets/wenjie-li-cv.pdf scripts/refresh-pages.cjs robots.txt sitemap.xml
git diff --cached --stat
```

Check the staged content, commit the reviewed changes to the configured source branch, then push that branch to `origin`. Follow the Pages run in the repository’s **Actions** tab and open the English and Chinese URLs after it succeeds. Local review screenshots, working photographs, private application material and backup bundles are excluded from normal staging.

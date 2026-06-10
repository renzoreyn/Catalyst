# Catalyst

**WordPress backend. Your frontend.**

Catalyst is a WordPress plugin that replaces frontend rendering with an internal theme system. WordPress stays your CMS — database, REST API, users, and media library all remain intact. Catalyst intercepts public requests and renders them through folder-based PHP themes with a modern admin panel for settings, content, SEO, and analytics.

- **Author:** [@renzoreyn](https://github.com/renzoreyn)
- **Requires:** WordPress 6.0+, PHP 7.4+
- **License:** GPL-2.0-or-later

---

## Features

### Theme engine
- Folder-based themes with `layout.php`, `landing.php`, `single.php`, and `page.php`
- Built-in themes: **Mono**, **Null**, **Grain**
- Auto-discovery of new theme folders + `theme.json` metadata
- Optional per-page overrides at `themes/{theme}/pages/{slug}.php`
- Universal light 404 page (plugin-level)

### Integrated content admin
- Manage posts and pages inside Catalyst (optional hide of default WP menus)
- Visual editor with live theme preview
- Drag-and-drop **sections** builder (hero, text, image, CTA, quote, columns, spacer)
- **Gutenberg** block editor embed
- Per-post/page **SEO** fields (title, description, OG, noindex)
- Auto-save drafts

### SEO & discovery
- Global SEO and Open Graph settings
- Per-route dynamic meta (posts, pages)
- `sitemap.xml`, `robots.txt`, and `llms.txt` at your domain root
- `<link rel="sitemap">` and optimized robots meta tags

### Analytics
- **Google Analytics 4** — paste Measurement ID, gtag injected on frontend
- **Google Search Console** — verification meta tag + sitemap URL for submission

### Performance
- Optional CSS/JS minification (cached in uploads)
- WebP generation on image upload
- Post query transient caching
- DNS prefetch and font preconnect hints

### Security
- Optional HTTP security headers
- Configurable referrer policy
- Hide generator meta tag

### Other
- GitHub release auto-updates
- Theme marketplace tab (coming soon)

---

## Install

1. **Download** the latest release from [GitHub Releases](https://github.com/renzoreyn/catalyst/releases).

   The zip must be structured as `catalyst/catalyst.php` (not the GitHub source zipball).

2. **Upload** via WordPress → Plugins → Add New → Upload Plugin, or copy the `catalyst` folder to `wp-content/plugins/`.

3. **Activate** the plugin.

4. Open **Catalyst** in wp-admin:
   - **Theme** — pick an active theme
   - **SEO & OG** — site-wide meta
   - **Content** — posts/pages settings + integrated editor
   - **Performance** / **Security** / **Analytics** — as needed

### Development

Clone the repository into `wp-content/plugins/catalyst` and activate. No build step required for the plugin.

---

## Custom themes

Themes live in `catalyst/themes/{your-theme-slug}/`.

### Required files

| File | Purpose |
|------|---------|
| `layout.php` | Document shell; wraps all route output |
| `landing.php` | Homepage |
| `single.php` | Single blog post |
| `page.php` | WordPress page |

### Recommended: theme.json

```json
{
  "name": "My Theme",
  "description": "Short description for the admin picker.",
  "version": "1.0.0",
  "author": "Your name",
  "accent": "#2563eb"
}
```

Add `preview.png` for a thumbnail in the theme picker.

### Folder layout

```
themes/my-theme/
├── layout.php
├── landing.php
├── single.php
├── page.php
├── theme.json
├── pages/              (optional per-slug overrides)
│   └── about.php
└── assets/
    ├── style.css
    └── script.js
```

Drop the folder in `themes/` — Catalyst detects it on the next admin load. Incomplete themes appear as **Incomplete** with missing-file hints until all required templates exist.

### Runtime data

Templates receive `$catalyst` (site, SEO, OG, posts, nav, route, etc.) and output HTML into `$content` for `layout.php`.

Common helpers:

```php
catalyst_meta_tags( $catalyst );
catalyst_assets( $catalyst );
catalyst_nav( $catalyst );
catalyst_footer( $catalyst );
catalyst_img( $url ); // prefers WebP when available
```

See **[theme_guide.md](theme_guide.md)** for the full rendering contract.

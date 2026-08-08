import { renderToString } from 'react-dom/server';
import App from './App';
import { SITE } from './site';

/**
 * Build-time render of the whole page. `scripts/prerender.js` injects `html`
 * into `dist/index.html` so crawlers that do not execute JavaScript -- which is
 * most of them, including the majority of AI fetchers -- receive the full
 * content instead of an empty `#root`.
 *
 * `renderToString` rather than `renderToStaticMarkup`: the client hydrates this
 * markup rather than replacing it. `siteUrl` rides along so the generated
 * robots.txt and sitemap.xml keep site.ts as their single source of truth.
 */
export function render() {
    return { html: renderToString(<App/>), siteUrl: SITE.url };
}

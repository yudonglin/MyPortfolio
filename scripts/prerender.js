/*
 * Bakes the rendered app into dist/index.html after `vite build`, and writes the
 * robots.txt and sitemap.xml that point at it.
 *
 * Runs against the SSR bundle in dist-ssr rather than the source, so CSS module
 * class names and asset URLs come from the same Vite pipeline as the client
 * build and match it exactly.
 */
import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { render } from '../dist-ssr/entry-server.js';

const ROOT_MARKER = '<div id="root"></div>';

const path = (relative) => fileURLToPath(new URL(relative, import.meta.url));

const indexPath = path('../dist/index.html');
const template = await readFile(indexPath, 'utf8');

// A silent no-op here would ship an empty page to every crawler -- exactly what
// this script exists to prevent.
if (!template.includes(ROOT_MARKER)) {
    throw new Error(`prerender: ${ROOT_MARKER} not found in dist/index.html`);
}

const { html: appHtml, siteUrl } = render();

// split/join rather than replace: the rendered markup can contain `$&`-style
// sequences that replace would read as capture-group references.
const html = template.split(ROOT_MARKER).join(`<div id="root">${appHtml}</div>`);

await writeFile(indexPath, html);

await writeFile(
    path('../dist/robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);

await writeFile(
    path('../dist/sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${siteUrl}/</loc>
        <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    </url>
</urlset>
`,
);

await rm(path('../dist-ssr'), { recursive: true, force: true });

console.log(`prerender: wrote index.html (${html.length} bytes), robots.txt, sitemap.xml`);

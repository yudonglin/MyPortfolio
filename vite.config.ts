import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { SITE } from './src/site'

/**
 * Substitutes `__SITE_URL__` in index.html with the canonical URL from site.ts.
 * Runs in the dev server and the build alike, so the served HTML never carries
 * an unresolved placeholder.
 */
const siteUrl = {
    name: 'site-url',
    transformIndexHtml: (html: string) => html.replaceAll('__SITE_URL__', SITE.url),
}

export default defineConfig({
    plugins: [react(), siteUrl],
    base: '/',
})

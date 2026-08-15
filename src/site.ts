/** Contact details, referenced by the navbar, hero, and footer. */
export const SITE = {
    email: 'wynterlyd@gmail.com',
    github: 'https://github.com/yudonglin',
    linkedin: 'https://www.linkedin.com/in/wynterlin/',
    license: 'https://www.gnu.org/licenses/agpl-3.0.html',
    /**
     * Canonical deployed URL, no trailing slash. Vite substitutes this for every
     * `__SITE_URL__` token in index.html, and the prerender step generates
     * robots.txt and sitemap.xml from it, so it is the only place to change it.
     */
    url: 'https://wynter.icu',
} as const;

export const MAILTO = `mailto:${SITE.email}`;

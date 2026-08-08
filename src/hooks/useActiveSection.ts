import { useEffect, useState } from 'react';
import { type SectionId, SECTIONS } from '../sections';

/**
 * Narrows the observer's viewport to a thin band roughly 40% down the screen —
 * the line a reader's eye tends to sit on. Every section is far taller than the
 * band, so exactly one crosses it at a time.
 */
const ROOT_MARGIN = '-40% 0px -55% 0px';

/** Id of the section currently crossing the reading line, for nav highlighting. */
export function useActiveSection(): SectionId | null {
    const [active, setActive] = useState<SectionId | null>(null);

    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;

        const visible = new Set<string>();
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) visible.add(entry.target.id);
                    else visible.delete(entry.target.id);
                }
                // Past the last section nothing crosses the band. Holding the
                // previous match keeps the navbar from blinking empty at the
                // bottom of the page.
                const current = SECTIONS.find(({ id }) => visible.has(id));
                if (current) setActive(current.id);
            },
            { rootMargin: ROOT_MARGIN },
        );

        for (const { id } of SECTIONS) {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        }

        return () => observer.disconnect();
    }, []);

    return active;
}

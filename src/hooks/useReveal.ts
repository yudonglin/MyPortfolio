import { useCallback, useEffect, useState } from 'react';

/**
 * Pulls the trigger line up from the bottom of the viewport, so an element
 * starts fading in once it is properly on screen rather than the instant it
 * clips the edge. A margin rather than a threshold, because a threshold is a
 * fraction of the *element* and would never be met by anything taller than
 * the viewport.
 */
const ROOT_MARGIN = '0px 0px -10% 0px';

/**
 * Reveals an element the first time it scrolls into view.
 *
 * Attach `ref` to the element and gate the reveal styling on `revealed`. The
 * reveal is one-way: once it fires the observer disconnects, so scrolling back
 * up never re-hides content that has already been read.
 */
export function useReveal() {
    const [node, setNode] = useState<HTMLElement | null>(null);
    // Deliberately not derived from feature detection: the prerender renders
    // this on the server, and an initial value that differs between server and
    // client would break hydration.
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        if (revealed || !node) return;

        // Nothing to do without an observer -- the stylesheet only hides
        // un-revealed content once the inline script in index.html confirms
        // this API exists, so the content is already visible.
        if (typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) setRevealed(true);
            },
            { rootMargin: ROOT_MARGIN },
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [node, revealed]);

    // A callback ref rather than an object ref: it re-runs the effect when the
    // element actually mounts, and its type stays assignable to any host element.
    const ref = useCallback((el: HTMLElement | null) => setNode(el), []);

    return { ref, revealed };
}

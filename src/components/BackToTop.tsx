import { useEffect, useState } from 'react';
import { ArrowUpIcon } from './icons';
import styles from './BackToTop.module.css';

/** How far down, in viewports, before the trip back is worth a shortcut. */
const SHOW_AFTER_VIEWPORTS = 1.5;

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const update = () => setVisible(window.scrollY > window.innerHeight * SHOW_AFTER_VIEWPORTS);
        // A reload can restore a mid-page scroll position without firing a
        // scroll event, and rotating changes the threshold under our feet.
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update, { passive: true });
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    return (
        <button
            type="button"
            className={`${styles.button} ${visible ? styles.visible : ''}`}
            // No explicit `behavior`, so this inherits `scroll-behavior` from
            // the stylesheet, which global.css turns off under reduced motion.
            onClick={() => window.scrollTo({ top: 0 })}
            aria-label="Back to top"
        >
            <ArrowUpIcon/>
        </button>
    );
}

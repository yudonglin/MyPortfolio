import type { CSSProperties, ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';
import styles from './Reveal.module.css';

type RevealProps = {
    children: ReactNode;
    /**
     * Position among siblings that come into view together, e.g. cards in a
     * grid row. Each step delays the reveal a little, so the row cascades.
     * Leave unset for stacked lists, whose items are already reached at
     * different scroll positions.
     */
    index?: number;
};

/**
 * Fades and lifts its children into place the first time they scroll into view.
 *
 * Wraps the content instead of styling it directly: the cards inside already
 * drive their hover states from `transform` and `transition`, and sharing those
 * properties would leave the winner up to stylesheet order.
 */
export default function Reveal({ children, index = 0 }: RevealProps) {
    const { ref, revealed } = useReveal();

    return (
        <div
            ref={ref}
            className={styles.reveal}
            data-revealed={revealed || undefined}
            style={index ? ({ '--reveal-step': index } as CSSProperties) : undefined}
        >
            {children}
        </div>
    );
}

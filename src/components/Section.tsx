import type { ReactNode } from 'react';
import { type SectionId, sectionOrdinal } from '../sections';
import styles from './Section.module.css';

type SectionProps = {
    id: SectionId;
    /** Heading text. May differ from the navbar label, e.g. "Career Objective". */
    title: string;
    children: ReactNode;
};

/** Numbered section shell: anchor target, width cap, and heading. */
export default function Section({ id, title, children }: SectionProps) {
    return (
        <section id={id} className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    <span className={styles.headingAccent}>{sectionOrdinal(id)}.</span> {title}
                </h2>
                {children}
            </div>
        </section>
    );
}

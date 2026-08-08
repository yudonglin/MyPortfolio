import type { ReactNode } from 'react';
import styles from './TimelineCard.module.css';

export type TimelineEntry = {
    /** Role or position held. */
    title: string;
    /** Company, school, or organisation. */
    org: string;
    orgLink: string;
    logo: string;
    period: string;
    /** Plain strings, or JSX when parts of the line need emphasis. */
    points: ReactNode[];
    tags: string[];
};

/**
 * One entry in a dated timeline. Shared by the Experience and Volunteering
 * sections, which render identically.
 */
export default function TimelineCard({ entry }: { entry: TimelineEntry }) {
    return (
        <article className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.titleGroup}>
                    <img src={entry.logo} alt={entry.org} className={styles.logo}/>
                    <div>
                        <h3 className={styles.role}>{entry.title}</h3>
                        <p className={styles.org}>
                            <a
                                href={entry.orgLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.orgLink}
                            >
                                {entry.org}
                            </a>
                        </p>
                    </div>
                </div>
                <span className={styles.period}>{entry.period}</span>
            </div>
            <ul className={styles.points}>
                {/* Points never reorder, so the index is a stable key. */}
                {entry.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
            <div className={styles.tags}>
                {entry.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                ))}
            </div>
        </article>
    );
}

import styles from './Publications.module.css';

type Author = {
    name: string;
    isMe?: boolean;
};

type Publication = {
    title: string;
    authors: Author[];
    venue: string;
    link: string;
};

const publications: Publication[] = [
    {
        title: 'Predicting Time to Pushback of Flights in U.S. Airports',
        authors: [
            { name: 'D. Filienko' },
            { name: 'Y. Lin', isMe: true },
            { name: 'K. Robison' },
            { name: 'T. Tomlin' },
            { name: 'M. De Cock' },
        ],
        venue: 'KDD 2023',
        link: 'https://kdd.org/kdd2023/wp-content/uploads/2023/08/filienko2023predicting.pdf',
    },
];

export default function Publications() {
    return (
        <section id="publications" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    <span className={styles.headingAccent}>04.</span> Publications
                </h2>
                <div className={styles.list}>
                    {publications.map((pub, i) => (
                        <article key={i} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.title}>
                                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                                        {pub.title}
                                    </a>
                                </h3>
                                <span className={styles.venue}>{pub.venue}</span>
                            </div>
                            <p className={styles.authors}>
                                {pub.authors.map((author, j) => (
                                    <span key={j}>
                                        <span className={author.isMe ? styles.authorMe : undefined}>
                                            {author.name}
                                        </span>
                                        {j < pub.authors.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </p>
                            <div className={styles.actions}>
                                <a
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.action}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                                        <polyline points="14 2 14 8 20 8"/>
                                    </svg>
                                    Read PDF
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

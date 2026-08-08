import { Fragment } from 'react';
import Section from './Section';
import { DocumentIcon } from './icons';
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
        <Section id="publications" title="Publications">
            <div className={styles.list}>
                {publications.map((pub) => (
                    <article key={pub.title} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.title}>
                                <a href={pub.link} target="_blank" rel="noopener noreferrer">
                                    {pub.title}
                                </a>
                            </h3>
                            <span className={styles.venue}>{pub.venue}</span>
                        </div>
                        <p className={styles.authors}>
                            {pub.authors.map((author, i) => (
                                <Fragment key={author.name}>
                                    <span className={author.isMe ? styles.authorMe : undefined}>
                                        {author.name}
                                    </span>
                                    {i < pub.authors.length - 1 && ', '}
                                </Fragment>
                            ))}
                        </p>
                        <div className={styles.actions}>
                            <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.action}
                            >
                                <DocumentIcon/>
                                Read PDF
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}

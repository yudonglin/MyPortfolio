import { MAILTO, SITE } from '../site';
import styles from './Hero.module.css';

const stats = [
    { value: "KDD '23", label: 'Publication' },
    { value: 'Top 4/49', label: 'NASA Competition' },
    { value: 'UW', label: "Dean's Scholar" },
];

export default function Hero() {
    return (
        <section id="about" className={styles.hero}>
            <div className={styles.bgGlow}/>
            <div className={styles.container}>
                <p className={styles.greeting}>Hi, my name is</p>
                <h1 className={styles.name}>Wynter Lin</h1>
                <h2 className={styles.tagline}>
                    I build intelligent systems with{' '}
                    <span className={styles.accent}>AI &amp; Data Science</span>
                </h2>
                <div className={styles.actions}>
                    <a href={MAILTO} className={styles.primaryBtn}>
                        Get in Touch
                    </a>
                    <a
                        href={SITE.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondaryBtn}
                    >
                        View GitHub
                    </a>
                </div>
                <ul className={styles.stats}>
                    {stats.map((stat) => (
                        <li key={stat.label} className={styles.statItem}>
                            <span className={styles.statNumber}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="about" className={styles.hero}>
            <div className={styles.bgGlow}/>
            <div className={styles.container}>
                <p className={styles.greeting}>Hi, my name is</p>
                <h1 className={styles.name}>Wynter Lin</h1>
                <h2 className={styles.tagline}>
                    I build intelligent systems with{' '}
                    <span className={styles.accent}>AI & Data Science</span>
                </h2>
                <p className={styles.description}>
                    M.S. in Information Management (Data Science & AI) at the University of Washington.
                    I specialize in machine learning, LLM applications, and full-stack development.
                    Previously recognized for NASA research (Top 4/49) and published at KDD 2023.
                </p>
                <div className={styles.actions}>
                    <a href="mailto:wynterlyd@gmail.com" className={styles.primaryBtn}>
                        Get in Touch
                    </a>
                    <a
                        href="https://github.com/yudonglin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondaryBtn}
                    >
                        View GitHub
                    </a>
                </div>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>KDD '23</span>
                        <span className={styles.statLabel}>Publication</span>
                    </div>
                    <div className={styles.statDivider}/>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>Top 4/49</span>
                        <span className={styles.statLabel}>NASA Competition</span>
                    </div>
                    <div className={styles.statDivider}/>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>UW</span>
                        <span className={styles.statLabel}>Dean's Scholar</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

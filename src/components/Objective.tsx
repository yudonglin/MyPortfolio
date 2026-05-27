import styles from './Objective.module.css';

const focusAreas = ['Machine Learning', 'LLM Applications', 'Full-Stack Engineering', 'Data Science'];

export default function Objective() {
    return (
        <section id="objective" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    <span className={styles.headingAccent}>01.</span> Career Objective
                </h2>
                <div className={styles.card}>
                    <span className={styles.label}>// mission</span>
                    <p className={styles.statement}>
                        Master&apos;s candidate at the <span className={styles.accent}>University of Washington
                        (MSIM)</span> and published ML researcher seeking a Software Engineering role.
                    </p>
                    <p className={styles.body}>
                        Driven by a passion for bridging the gap between full-stack development and advanced
                        data science to create innovative, user-centric technology.
                    </p>
                    <div className={styles.tags}>
                        {focusAreas.map((area) => (
                            <span key={area} className={styles.tag}>{area}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

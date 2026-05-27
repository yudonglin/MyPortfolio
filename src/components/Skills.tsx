import styles from './Skills.module.css';

const skillCategories = [
    {
        title: 'Programming Languages',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                 strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
            </svg>
        ),
        skills: ['Python', 'Java', 'C#', 'C++', 'TypeScript', 'JavaScript'],
    },
    {
        title: 'Frameworks & Databases',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                 strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                <line x1="6" y1="6" x2="6.01" y2="6"/>
                <line x1="6" y1="18" x2="6.01" y2="18"/>
            </svg>
        ),
        skills: ['React', 'Angular', '.NET', 'MongoDB', 'PostgreSQL', 'MySQL', 'Docker', 'AWS', 'Azure'],
    },
    {
        title: 'Machine Learning & AI',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                 strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 014 4c0 1.95-1.4 3.58-3.25 3.93L12 22"/>
                <path d="M12 2a4 4 0 00-4 4c0 1.95 1.4 3.58 3.25 3.93"/>
                <path d="M8.56 13a8 8 0 006.88 0"/>
            </svg>
        ),
        skills: ['Ollama', 'PyTorch', 'XGBoost', 'LightGBM', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'R'],
    },
];

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    <span className={styles.headingAccent}>06.</span> Skills
                </h2>
                <div className={styles.grid}>
                    {skillCategories.map((cat, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardIcon}>{cat.icon}</div>
                            <h3 className={styles.catTitle}>{cat.title}</h3>
                            <div className={styles.skills}>
                                {cat.skills.map((skill) => (
                                    <span key={skill} className={styles.skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

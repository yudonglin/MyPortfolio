import styles from './Experience.module.css';

const experiences = [
    {
        title: 'ERP Implementation Intern',
        company: 'CFL Flooring',
        period: 'Jul 2025 - Sep 2025',
        points: [
            'Assisted in deploying the SAP ERP system through user acceptance testing, issue tracking, and cross-department coordination.',
            <span>Automated data processing with Python, <strong>increasing efficiency by 30%</strong> and reducing manual data entry errors.</span>,
            'Collaborated with production, warehouse, and quality teams to validate ERP data accuracy.',
            'Conducted research on AI applications for manufacturing optimization, supporting the company\'s digital transformation strategy.',
        ],
        tags: ['Python', 'SAP ERP', 'AI Research', 'Data Processing'],
    },
    {
        title: 'Support Engineer',
        company: 'Be&be International LLC',
        period: 'Feb 2024 - Sep 2024',
        points: [
            <span>Developed a .NET MAUI-based automation tool that <strong>reduced logistics team workload by 50%</strong>.</span>,
            'Configured professional email systems to improve team communication and security.',
            'Designed and implemented responsive web interfaces in Angular, improving customer engagement.',
        ],
        tags: ['.NET MAUI', 'Angular', 'Automation', 'Web Dev'],
    },
    {
        title: 'Researcher in Machine Learning',
        company: 'University of Washington',
        period: 'Mar 2023 - Aug 2023',
        points: [
            'Participated in a NASA international competition to enhance airplane departure prediction systems.',
            <span>Enhanced flight departure prediction accuracy by <strong>50%</strong> through optimized feature engineering and LightGBM tuning with Optuna.</span>,
            'Built and deployed federated learning models using TensorFlow and Flower.',
            <span>Team achieved <strong>4th place among 49 competitors</strong>. Published at <strong>KDD 2023</strong>.</span>,
        ],
        tags: ['LightGBM', 'TensorFlow', 'Federated Learning', 'Optuna'],
    },
];

export default function Experience() {
    return (
        <section id="experience" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    <span className={styles.headingAccent}>02.</span> Experience
                </h2>
                <div className={styles.timeline}>
                    {experiences.map((exp, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div>
                                    <h3 className={styles.role}>{exp.title}</h3>
                                    <p className={styles.company}>{exp.company}</p>
                                </div>
                                <span className={styles.period}>{exp.period}</span>
                            </div>
                            <ul className={styles.points}>
                                {exp.points.map((point, j) => (
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                            <div className={styles.tags}>
                                {exp.tags.map((tag) => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

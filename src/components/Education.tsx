import styles from './Education.module.css';
import uwLogo from '../assets/icons/uw.jpg';

type Degree = {
    degree: string;
    period: string;
    honors: string[];
};

type School = {
    school: string;
    schoolLink: string;
    logo: string;
    degrees: Degree[];
};

const education: School[] = [
    {
        school: 'University of Washington',
        schoolLink: 'https://www.washington.edu/',
        logo: uwLogo,
        degrees: [
            {
                degree: 'M.S. in Information Management (Data Science & AI)',
                period: 'Graduated Jun 2026',
                honors: ['MSIM Dean’s Scholarship'],
            },
            {
                degree: 'B.S. in Computer Science, Minor in Mathematics',
                period: 'Graduated 2023',
                honors: [
                    '2022–23 SET Outstanding Undergraduate Research Award',
                    'Published at KDD 2023',
                ],
            },
        ],
    },
];

export default function Education() {
    return (
        <section id="education" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    <span className={styles.headingAccent}>02.</span> Education
                </h2>
                <div className={styles.list}>
                    {education.map((edu, i) => (
                        <article key={i} className={styles.card}>
                            <header className={styles.schoolHeader}>
                                <img src={edu.logo} alt={edu.school} className={styles.logo}/>
                                <h3 className={styles.school}>
                                    <a
                                        href={edu.schoolLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.schoolLink}
                                    >
                                        {edu.school}
                                    </a>
                                </h3>
                            </header>
                            <ol className={styles.degreeList}>
                                {edu.degrees.map((d, j) => (
                                    <li key={j} className={styles.degreeItem}>
                                        <div className={styles.degreeHeader}>
                                            <h4 className={styles.degree}>{d.degree}</h4>
                                            <span className={styles.period}>{d.period}</span>
                                        </div>
                                        {d.honors.length > 0 && (
                                            <ul className={styles.honors}>
                                                {d.honors.map((honor) => (
                                                    <li key={honor}>{honor}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

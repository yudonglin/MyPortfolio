import styles from './Experience.module.css';
import cflLogo from '../assets/icons/cfl.jpg';
import bebeLogo from '../assets/icons/bebe.jpg';
import uwLogo from '../assets/icons/uw.jpg';
import watechLogo from '../assets/icons/watech.jpg';

const experiences = [
    {
        title: 'AI/ML Engineer (MSIM Capstone)',
        company: 'Washington Technology Solutions (WaTech)',
        period: 'Nov 2025 - Jun 2026',
        link: 'https://watech.wa.gov/',
        logo: <img src={watechLogo} alt="Washington Technology Solutions (WaTech)" className={styles.companyIcon}/>,
        points: [
            <span>Led a team of 4 on an <strong>MSIM Capstone</strong> project, authoring the full codebase — a <strong>React + TypeScript</strong> frontend and <strong>Python/FastAPI</strong> backend with OpenAI-compatible, real-time streaming API integration.</span>,
            'Engineered prompt templates meeting U.S. Plain Language standards for WA open government data on the Socrata platform, with prompt-injection hardening grounded in the portal\'s live category and tag vocabulary.',
            <span>Fine-tuned an open-weight model (<strong>Microsoft Phi-4</strong>) with QLoRA SFT + DPO, delivering <strong>zero-API-cost</strong>, fully private on-premise column-description generation.</span>,
            <span>Built an <strong>LLM-as-Judge</strong> evaluation tool scoring metadata on an 8-category, WA-aligned rubric plus deterministic plain-language checks, deployed to <strong>Databricks Apps</strong>.</span>,
        ],
        tags: ['LLMs', 'Prompt Engineering', 'Fine-Tuning (LoRA/DPO)', 'FastAPI', 'Socrata'],
    },
    {
        title: 'ERP Implementation Intern',
        company: 'CFL Flooring',
        period: 'Jul 2025 - Sep 2025',
        link: 'https://cflflooring.com/',
        logo: <img src={cflLogo} alt="CFL Flooring" className={styles.companyIcon}/>,
        points: [
            'Assisted in deploying the SAP ERP system through user acceptance testing, issue tracking, and cross-department coordination.',
            <span>Automated data processing with Python, <strong>increasing efficiency by 30%</strong> and reducing manual data entry errors.</span>,
            'Collaborated with production, warehouse, and quality teams to validate ERP data accuracy.',
            'Conducted research on AI applications for manufacturing optimization, supporting the company\'s digital transformation strategy.',
        ],
        tags: ['Python', 'SAP ERP', 'AI Research', 'Data Processing'],
    },
    {
        title: 'Software Engineer',
        company: 'Be&be International LLC',
        period: 'Feb 2024 - Sep 2024',
        link: 'https://benbeintl.com/',
        logo: <img src={bebeLogo} alt="Be&be International" className={styles.companyIcon}/>,
        points: [
            <span>Developed a .NET MAUI-based automation tool that <strong>reduced logistics team workload by 50%</strong>.</span>,
            'Configured professional email systems to improve team communication and security.',
            'Designed and implemented responsive web interfaces in Angular, improving customer engagement.',
        ],
        tags: ['.NET MAUI', 'Angular', 'Automation', 'Web Dev'],
    },
    {
        title: 'Machine Learning Researcher',
        company: 'University of Washington',
        period: 'Mar 2023 - Aug 2023',
        link: 'https://www.washington.edu/',
        logo: <img src={uwLogo} alt="University of Washington" className={styles.companyIcon}/>,
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
                    <span className={styles.headingAccent}>03.</span> Experience
                </h2>
                <div className={styles.timeline}>
                    {experiences.map((exp, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.companyInfo}>
                                    {exp.logo}
                                    <div>
                                        <h3 className={styles.role}>{exp.title}</h3>
                                        <p className={styles.company}>
                                            <a href={exp.link} target="_blank" rel="noopener noreferrer"
                                               className={styles.companyLink}>
                                                {exp.company}
                                            </a>
                                        </p>
                                    </div>
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

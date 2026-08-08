import Section from './Section';
import TimelineCard, { type TimelineEntry } from './TimelineCard';
import listStyles from './Timeline.module.css';
import cflLogo from '../assets/icons/cfl.jpg';
import bebeLogo from '../assets/icons/bebe.jpg';
import uwLogo from '../assets/icons/uw.jpg';
import watechLogo from '../assets/icons/watech.jpg';

const experiences: TimelineEntry[] = [
    {
        title: 'AI/ML Engineer (MSIM Capstone)',
        org: 'Washington Technology Solutions (WaTech)',
        orgLink: 'https://watech.wa.gov/',
        logo: watechLogo,
        period: 'Nov 2025 - Jun 2026',
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
        org: 'CFL Flooring',
        orgLink: 'https://cflflooring.com/',
        logo: cflLogo,
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
        title: 'Software Engineer',
        org: 'Be&be International LLC',
        orgLink: 'https://benbeintl.com/',
        logo: bebeLogo,
        period: 'Feb 2024 - Sep 2024',
        points: [
            <span>Developed a .NET MAUI-based automation tool that <strong>reduced logistics team workload by 50%</strong>.</span>,
            'Configured professional email systems to improve team communication and security.',
            'Designed and implemented responsive web interfaces in Angular, improving customer engagement.',
        ],
        tags: ['.NET MAUI', 'Angular', 'Automation', 'Web Dev'],
    },
    {
        title: 'Machine Learning Researcher',
        org: 'University of Washington',
        orgLink: 'https://www.washington.edu/',
        logo: uwLogo,
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
        <Section id="experience" title="Experience">
            <div className={listStyles.timeline}>
                {experiences.map((entry) => (
                    <TimelineCard key={`${entry.org}-${entry.title}`} entry={entry}/>
                ))}
            </div>
        </Section>
    );
}

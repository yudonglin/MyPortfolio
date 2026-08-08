import type { ReactNode } from 'react';
import Section from './Section';
import { CodeIcon, NeuronIcon, StackIcon } from './icons';
import styles from './Skills.module.css';

type SkillCategory = {
    title: string;
    icon: ReactNode;
    skills: string[];
};

const skillCategories: SkillCategory[] = [
    {
        title: 'Programming Languages',
        icon: <CodeIcon/>,
        skills: ['Python', 'Java', 'C#', 'C++', 'TypeScript', 'JavaScript'],
    },
    {
        title: 'Frameworks & Databases',
        icon: <StackIcon/>,
        skills: ['React', 'Angular', '.NET', 'MongoDB', 'PostgreSQL', 'MySQL', 'Docker', 'AWS', 'Azure'],
    },
    {
        title: 'Machine Learning & AI',
        icon: <NeuronIcon/>,
        skills: ['Ollama', 'PyTorch', 'XGBoost', 'LightGBM', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'R'],
    },
];

export default function Skills() {
    return (
        <Section id="skills" title="Skills">
            <div className={styles.grid}>
                {skillCategories.map((cat) => (
                    <div key={cat.title} className={styles.card}>
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
        </Section>
    );
}

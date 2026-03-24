import { useEffect, useState } from 'react';
import styles from './Projects.module.css';

type Project = {
    title: string;
    description: string;
    tags: string[];
    link: string | null;
    highlight: string | null;
    category: 'ai' | 'gamedev';
    pypiPackage?: string;
};

const projects: Project[] = [
    // AI & Data Science
    {
        title: 'Smart Prescription',
        description:
            'A prescription scanning application that digitizes and processes medical prescriptions using OCR for improved accuracy and accessibility in healthcare workflows.',
        tags: ['TypeScript', 'OCR', 'Healthcare', 'Computer Vision'],
        link: 'https://github.com/yudonglin/SmartPrescription',
        highlight: '3rd Prize - UW iSchool Startup Pitch',
        category: 'ai',
    },
    {
        title: 'NASA Flight Prediction Research',
        description:
            'Enhanced airplane departure prediction accuracy by 50% using LightGBM and Optuna. Built federated learning models with TensorFlow and Flower. Team placed 4th out of 49 competitors.',
        tags: ['Python', 'LightGBM', 'TensorFlow', 'Flower', 'Optuna'],
        link: null,
        highlight: 'Published at KDD 2023',
        category: 'ai',
    },
    // Game Dev
    {
        title: 'Linpg Game Engine',
        description:
            'An advanced 2D game engine built on top of pygame. Provides a comprehensive framework for creating visual novels and strategy games with built-in dialogue systems, map editors, and rendering pipelines.',
        tags: ['Python', 'Pygame', 'Game Engine', '2D Graphics', 'API Design'],
        link: 'https://github.com/LinpgFoundation/linpg',
        highlight: 'Foundation Project',
        category: 'gamedev',
    },
    {
        title: 'GFL: Last Wish',
        description:
            'A turn-based strategy indie game built on the Linpg engine. Features tactical grid-based combat, branching story-driven campaigns, and custom dialogue systems powered by VNS.',
        tags: ['Python', 'Linpg', 'Strategy RPG', 'Turn-based'],
        link: 'https://github.com/LinpgFoundation/GFL-LastWish',
        highlight: '18 stars on GitHub',
        category: 'gamedev',
    },
    {
        title: 'Visual Novel Script (VNS)',
        description:
            'A universal scripting language for in-game dialogues — write once, compile across platforms. Includes a C++ compiler for performance and a VS Code plugin for syntax highlighting.',
        tags: ['C++', 'Pybind11', 'Python', 'VS Code Extension', 'Compiler'],
        link: 'https://github.com/LinpgFoundation/vns',
        highlight: '8 stars on GitHub',
        category: 'gamedev',
    },
    {
        title: 'Sundew Valley',
        description:
            'A relaxing 2D pixel farming game where players inherit a farm and engage with a small town community. Built the game engine, framework, and UI from scratch.',
        tags: ['JavaScript', 'HTML', 'Pixel Art', '2D Game', 'Farming Sim'],
        link: 'https://github.com/HuskyDevClub/SundewValley',
        highlight: null,
        category: 'gamedev',
    },
    {
        title: 'Linpg Toolbox',
        description:
            'A developer toolkit for managing, compiling, and publishing Python packages. Streamlines the build-to-publish pipeline for Linpg ecosystem projects.',
        tags: ['Python', 'CLI', 'DevOps', 'Package Management'],
        link: 'https://github.com/LinpgFoundation/linpg-toolbox',
        highlight: null,
        category: 'gamedev',
        pypiPackage: 'linpgtoolbox',
    },
];

const categories = [
    { key: 'ai', label: 'AI & Data Science' },
    { key: 'gamedev', label: 'Game Development' },
] as const;

async function fetchPyPIDownloads(packageName: string): Promise<string | null> {
    try {
        const res = await fetch(`https://img.shields.io/pypi/dm/${packageName}.json`);
        if (!res.ok) return null;
        const data = await res.json();
        return data?.value ?? null;
    } catch {
        return null;
    }
}

export default function Projects() {
    const [pypiStats, setPypiStats] = useState<Record<string, string>>({});

    useEffect(() => {
        projects
            .filter((p) => p.pypiPackage)
            .forEach(async (p) => {
                const value = await fetchPyPIDownloads(p.pypiPackage!);
                if (value) {
                    setPypiStats((prev) => ({ ...prev, [p.pypiPackage!]: value }));
                }
            });
    }, []);

    function getHighlight(project: Project): string | null {
        if (project.pypiPackage && pypiStats[project.pypiPackage]) {
            return `${pypiStats[project.pypiPackage]} on PyPI`;
        }
        return project.highlight;
    }

    return (
        <section id="projects" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    <span className={styles.headingAccent}>03.</span> Projects
                </h2>

                {categories.map(({ key, label }) => {
                    const items = projects.filter((p) => p.category === key);
                    if (items.length === 0) return null;
                    return (
                        <div key={key} className={styles.categoryBlock}>
                            <h3 className={styles.categoryTitle}>{label}</h3>
                            <div className={styles.grid}>
                                {items.map((project, i) => {
                                    const highlight = getHighlight(project);
                                    return (
                                        <div key={i} className={styles.card}>
                                            <div className={styles.cardTop}>
                                                <div className={styles.folderIcon}>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                         strokeLinejoin="round">
                                                        <path
                                                            d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
                                                    </svg>
                                                </div>
                                                {project.link && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={styles.externalLink}
                                                        aria-label={`View ${project.title} on GitHub`}
                                                    >
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                             stroke="currentColor" strokeWidth="1.5"
                                                             strokeLinecap="round" strokeLinejoin="round">
                                                            <path
                                                                d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                                                            <polyline points="15 3 21 3 21 9"/>
                                                            <line x1="10" y1="14" x2="21" y2="3"/>
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                            <h3 className={styles.projectTitle}>{project.title}</h3>
                                            {highlight && (
                                                <span className={styles.highlight}>{highlight}</span>
                                            )}
                                            <p className={styles.projectDesc}>{project.description}</p>
                                            <div className={styles.tags}>
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className={styles.tag}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

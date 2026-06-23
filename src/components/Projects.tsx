import { useEffect, useState } from 'react';
import styles from './Projects.module.css';
import predictPushbackImg from '../assets/projects/PredictPushback.webp';
import linpgImg from '../assets/projects/linpg.webp';
import gflLastWishImg from '../assets/projects/GFL-LastWish.webp';
import sundewValleyImg from '../assets/projects/SundewValley.webp';
import linpgToolboxImg from '../assets/projects/linpgtoolbox.webp';
import sekaiBeyondImg from '../assets/projects/SekaiBeyond.webp';
import smartPrescriptionImg from '../assets/projects/SmartPrescription.webp';

type Project = {
    title: string;
    description: string;
    tags: string[];
    link: string | null;
    highlight: string | null;
    category: 'ai' | 'web' | 'gamedev';
    pypiPackage?: string;
    // Optional custom preview. Import a screenshot at the top of this file
    // (e.g. `import smartRxImg from '../assets/projects/smart-prescription.png'`)
    // and set `image: smartRxImg` to override the auto GitHub social card.
    image?: string;
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
        image: smartPrescriptionImg,
    },
    {
        title: 'NASA Flight Prediction Research',
        description:
            'Enhanced airplane departure prediction accuracy by 50% using LightGBM and Optuna. Built federated learning models with TensorFlow and Flower. Team placed 4th out of 49 competitors.',
        tags: ['Python', 'LightGBM', 'TensorFlow', 'Flower', 'Optuna'],
        link: 'https://www.tacoma.uw.edu/news/set-team-wins-national-airspace-system-competition',
        highlight: 'Published at KDD 2023',
        category: 'ai',
        image: predictPushbackImg,
    },
    // Web Development
    {
        title: 'Sekai Beyond',
        description:
            'The official website for Sekai Beyond, a UW student community for anime, gaming, cosplay, and creation. Built and maintained as Technical Lead, serving 400+ members and 600+ followers.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Vite'],
        link: 'https://sekaibeyond.com/',
        highlight: 'Live Site',
        category: 'web',
        image: sekaiBeyondImg,
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
        pypiPackage: 'linpg',
        image: linpgImg,
    },
    {
        title: 'GFL: Last Wish',
        description:
            'A turn-based strategy indie game built on the Linpg engine. Features tactical grid-based combat, branching story-driven campaigns, and custom dialogue systems powered by VNS.',
        tags: ['Python', 'Linpg', 'Strategy RPG', 'Turn-based'],
        link: 'https://github.com/LinpgFoundation/GFL-LastWish',
        highlight: '18 stars on GitHub',
        category: 'gamedev',
        image: gflLastWishImg,
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
        image: sundewValleyImg,
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
        image: linpgToolboxImg,
    },
];

const categories = [
    { key: 'ai', label: 'AI & Data Science' },
    { key: 'web', label: 'Web Development' },
    { key: 'gamedev', label: 'Game Development' },
] as const;

// Derive GitHub's auto-generated social preview card from a repo URL.
// Returns null for non-GitHub links (e.g. the NASA news article).
function githubPreview(link: string | null): string | null {
    if (!link) return null;
    try {
        const url = new URL(link);
        if (url.hostname !== 'github.com') return null;
        const parts = url.pathname.split('/').filter(Boolean);
        if (parts.length < 2) return null;
        const [owner, repo] = parts;
        return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
    } catch {
        return null;
    }
}

async function fetchPyPIDownloads(packageName: string): Promise<string | 'error'> {
    try {
        const res = await fetch(`https://img.shields.io/pypi/dm/${packageName}.json`);
        if (!res.ok) return 'error';
        const data = await res.json();
        const value = data?.value;
        if (!value || value.toLowerCase().includes('rate limited') || value.toLowerCase().includes('error')) {
            return 'error';
        }
        return value;
    } catch {
        return 'error';
    }
}

export default function Projects() {
    const [pypiStats, setPypiStats] = useState<Record<string, string>>({});
    const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

    useEffect(() => {
        let cancelled = false;

        async function loadStats() {
            const pypiProjects = projects.filter((p) => p.pypiPackage);
            const results = await Promise.all(
                pypiProjects.map((p) => fetchPyPIDownloads(p.pypiPackage!)),
            );
            if (cancelled) return;
            const stats: Record<string, string> = {};
            pypiProjects.forEach((p, i) => {
                stats[p.pypiPackage!] = results[i];
            });
            setPypiStats(stats);
        }

        loadStats();
        return () => {
            cancelled = true;
        };
    }, []);

    function getHighlight(project: Project): string | null {
        if (project.pypiPackage && pypiStats[project.pypiPackage]) {
            if (pypiStats[project.pypiPackage] === 'error') {
                return 'Available on PyPI';
            }
            return `${pypiStats[project.pypiPackage]} on PyPI`;
        }
        return project.highlight;
    }

    return (
        <section id="projects" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    <span className={styles.headingAccent}>04.</span> Projects
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
                                    const preview = project.image ?? githubPreview(project.link);
                                    const showImage = preview && !failedImages[project.title];
                                    return (
                                        <article key={i} className={styles.card}>
                                            <div className={styles.media}>
                                                {showImage ? (
                                                    <img
                                                        src={preview}
                                                        alt={`${project.title} preview`}
                                                        className={styles.previewImg}
                                                        loading="lazy"
                                                        onError={() =>
                                                            setFailedImages((prev) => ({
                                                                ...prev,
                                                                [project.title]: true,
                                                            }))
                                                        }
                                                    />
                                                ) : (
                                                    <div className={styles.previewFallback} aria-hidden="true">
                                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                                                             stroke="currentColor" strokeWidth="1.5"
                                                             strokeLinecap="round" strokeLinejoin="round">
                                                            <path
                                                                d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                            <div className={styles.cardBody}>
                                                <div className={styles.cardTop}>
                                                    <div className={styles.folderIcon}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                             stroke="currentColor" strokeWidth="1.5"
                                                             strokeLinecap="round"
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
                                                            aria-label={`View ${project.title}${project.link.includes('github.com') ? ' on GitHub' : ''}`}
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
                                                    <span className={styles.highlight}>
                                                        <strong>{highlight}</strong>
                                                    </span>
                                                )}
                                                <p className={styles.projectDesc}>{project.description}</p>
                                                <div className={styles.tags}>
                                                    {project.tags.map((tag) => (
                                                        <span key={tag} className={styles.tag}>{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </article>
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

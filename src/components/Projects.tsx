import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import Section from './Section';
import { ExternalLinkIcon, FolderIcon } from './icons';
import styles from './Projects.module.css';
import predictPushbackImg from '../assets/projects/PredictPushback.webp';
import linpgImg from '../assets/projects/linpg.webp';
import gflLastWishImg from '../assets/projects/GFL-LastWish.webp';
import sundewValleyImg from '../assets/projects/SundewValley.webp';
import linpgToolboxImg from '../assets/projects/linpgtoolbox.webp';
import sekaiBeyondImg from '../assets/projects/SekaiBeyond.webp';
import smartPrescriptionImg from '../assets/projects/SmartPrescription.webp';

type Category = 'ai' | 'web' | 'gamedev';

type Project = {
    title: string;
    description: string;
    tags: string[];
    link: string | null;
    highlight: string | null;
    category: Category;
    /** When set, the live download count replaces `highlight`. */
    pypiPackage?: string;
    /** Overrides the auto-generated GitHub social card. */
    image?: string;
};

const projects: Project[] = [
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

const CATEGORY_LABELS: Record<Category, string> = {
    ai: 'AI & Data Science',
    web: 'Web Development',
    gamedev: 'Game Development',
};

/** Grouped once at module scope — `projects` never changes. */
const groupedProjects = (Object.keys(CATEGORY_LABELS) as Category[])
    .map((category) => ({
        category,
        label: CATEGORY_LABELS[category],
        items: projects.filter((p) => p.category === category),
    }))
    .filter((group) => group.items.length > 0);

const pypiPackages = projects
    .map((p) => p.pypiPackage)
    .filter((pkg): pkg is string => pkg !== undefined);

/** Parses `owner`/`repo` out of a GitHub URL. Null for any other host. */
function githubRepo(link: string | null): { owner: string; repo: string } | null {
    if (!link) return null;
    try {
        const url = new URL(link);
        if (url.hostname !== 'github.com') return null;
        const [owner, repo] = url.pathname.split('/').filter(Boolean);
        if (!owner || !repo) return null;
        return { owner, repo };
    } catch {
        return null;
    }
}

/** GitHub's auto-generated social preview card for a repo. */
function githubPreview(link: string | null): string | null {
    const repo = githubRepo(link);
    return repo ? `https://opengraph.githubassets.com/1/${repo.owner}/${repo.repo}` : null;
}

/** Monthly download count via shields.io, or null when unavailable. */
async function fetchPyPIDownloads(packageName: string): Promise<string | null> {
    try {
        const res = await fetch(`https://img.shields.io/pypi/dm/${packageName}.json`);
        if (!res.ok) return null;
        const data = await res.json();
        const value: unknown = data?.value;
        if (typeof value !== 'string') return null;
        const normalized = value.toLowerCase();
        if (normalized.includes('rate limited') || normalized.includes('error')) return null;
        return value;
    } catch {
        return null;
    }
}

type ProjectCardProps = {
    project: Project;
    highlight: string | null;
    preview: string | null;
    onPreviewError: () => void;
};

function ProjectCard({ project, highlight, preview, onPreviewError }: ProjectCardProps) {
    const repo = githubRepo(project.link);

    return (
        <article className={styles.card}>
            <div className={styles.media}>
                {preview ? (
                    <img
                        src={preview}
                        alt={`${project.title} preview`}
                        className={styles.previewImg}
                        loading="lazy"
                        onError={onPreviewError}
                    />
                ) : (
                    <div className={styles.previewFallback} aria-hidden="true">
                        <FolderIcon size={40}/>
                    </div>
                )}
            </div>
            <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                    <div className={styles.folderIcon}>
                        <FolderIcon/>
                    </div>
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.externalLink}
                            aria-label={`View ${project.title}${repo ? ' on GitHub' : ''}`}
                        >
                            <ExternalLinkIcon/>
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
}

export default function Projects() {
    const [pypiStats, setPypiStats] = useState<ReadonlyMap<string, string | null>>(new Map());
    const [failedPreviews, setFailedPreviews] = useState<ReadonlySet<string>>(new Set());

    useEffect(() => {
        let cancelled = false;

        async function loadStats() {
            const results = await Promise.all(pypiPackages.map((pkg) => fetchPyPIDownloads(pkg)));
            if (cancelled) return;
            setPypiStats(new Map(pypiPackages.map((pkg, i) => [pkg, results[i]])));
        }

        loadStats();
        return () => {
            cancelled = true;
        };
    }, []);

    /** Live PyPI downloads win over the static highlight once they resolve. */
    function highlightFor(project: Project): string | null {
        const pkg = project.pypiPackage;
        if (pkg && pypiStats.has(pkg)) {
            const downloads = pypiStats.get(pkg);
            return downloads ? `${downloads} on PyPI` : 'Available on PyPI';
        }
        return project.highlight;
    }

    function previewFor(project: Project): string | null {
        if (failedPreviews.has(project.title)) return null;
        return project.image ?? githubPreview(project.link);
    }

    return (
        <Section id="projects" title="Projects">
            {groupedProjects.map(({ category, label, items }) => (
                <div key={category} className={styles.categoryBlock}>
                    <Reveal>
                        <h3 className={styles.categoryTitle}>{label}</h3>
                    </Reveal>
                    <div className={styles.grid}>
                        {items.map((project, i) => (
                            <Reveal key={project.title} index={i}>
                                <ProjectCard
                                    project={project}
                                    highlight={highlightFor(project)}
                                    preview={previewFor(project)}
                                    onPreviewError={() =>
                                        setFailedPreviews((prev) => new Set(prev).add(project.title))
                                    }
                                />
                            </Reveal>
                        ))}
                    </div>
                </div>
            ))}
        </Section>
    );
}

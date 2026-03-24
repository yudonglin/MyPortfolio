import styles from './Volunteering.module.css';
import sekaiBeyondLogo from '../assets/icons/sekai-beyond.jpg';
import cseedLogo from '../assets/icons/cseed.jpg';
import codedayLogo from '../assets/icons/codeday.jpg';

const volunteering = [
    {
        title: 'Technical Lead',
        organization: 'Sekai Beyond',
        period: 'Jan 2025 - Present',
        icon: <img src={sekaiBeyondLogo} alt="Sekai Beyond" className={styles.orgIcon}/>,
        points: [
            'Collaborate in a cross-organization team with students from diverse backgrounds and institutions.',
            'Help develop and maintain the official website (sekaibeyond.com).',
            'Resolve technical issues during live events to ensure smooth operations.',
            'Run and maintain a community Minecraft server.',
            'Contributing to the development of an unannounced video game project.',
        ],
        tags: ['Web Dev', 'DevOps', 'Game Dev', 'Event Support'],
        link: 'https://sekaibeyond.com/',
    },
    {
        title: 'Technical Mentor',
        organization: 'cseed',
        period: 'Jan 2024 - Jun 2024',
        icon: <img src={cseedLogo} alt="cseed" className={styles.orgIcon}/>,
        points: [
            'Guided students on their journey to becoming innovators, sharing strategies for success and inspiring positive community impact.',
            'Set up development environments, assisted in web development, and helped students evaluate technology stacks for their projects.',
            'Collaborated with students to brainstorm ideas, encouraging creative thinking and innovation.',
            'Assisted students in troubleshooting and debugging, fostering a growth-oriented learning environment.',
            'Worked to make technology accessible to students of different backgrounds and experience levels.',
        ],
        tags: ['Mentorship', 'Web Dev', 'Education'],
        link: 'https://www.cseed.co/',
    },
    {
        title: 'Mentor',
        organization: 'CodeDay',
        period: 'Nov 2019',
        icon: <img src={codedayLogo} alt="CodeDay" className={styles.orgIcon}/>,
        points: [
            'Guided attendees through the event venue, offering information and insights about facilities and scheduled activities.',
            'Assisted participants with expertise in game development, mobile app development, and full-stack web development.',
            'Ensured the safety and comfort of all attendees, with a focus on the well-being of minors.',
        ],
        tags: ['Mentorship', 'Game Dev', 'Full-Stack'],
        link: 'https://www.codeday.org/',
    },
];

export default function Volunteering() {
    return (
        <section id="volunteering" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    <span className={styles.headingAccent}>04.</span> Volunteering
                </h2>
                <div className={styles.timeline}>
                    {volunteering.map((vol, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardTitle}>
                                    {vol.icon}
                                    <div>
                                        <h3 className={styles.role}>{vol.title}</h3>
                                        <p className={styles.org}>
                                            {vol.link ? (
                                                <a href={vol.link} target="_blank" rel="noopener noreferrer">
                                                    {vol.organization}
                                                </a>
                                            ) : (
                                                vol.organization
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <span className={styles.period}>{vol.period}</span>
                            </div>
                            <ul className={styles.points}>
                                {vol.points.map((point, j) => (
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                            <div className={styles.tags}>
                                {vol.tags.map((tag) => (
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

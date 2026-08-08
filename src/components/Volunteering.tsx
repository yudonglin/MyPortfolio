import Section from './Section';
import TimelineCard, { type TimelineEntry } from './TimelineCard';
import listStyles from './Timeline.module.css';
import sekaiBeyondLogo from '../assets/icons/sekai-beyond.jpg';
import cseedLogo from '../assets/icons/cseed.jpg';
import codedayLogo from '../assets/icons/codeday.jpg';

const volunteering: TimelineEntry[] = [
    {
        title: 'Technical Lead',
        org: 'Sekai Beyond',
        orgLink: 'https://sekaibeyond.com/',
        logo: sekaiBeyondLogo,
        period: 'Jan 2025 - Present',
        points: [
            'Collaborate in a cross-organization team with students from diverse backgrounds and institutions.',
            'Help develop and maintain the official website (sekaibeyond.com).',
            'Resolve technical issues during live events to ensure smooth operations.',
            'Run and maintain a community Minecraft server.',
            'Contributing to the development of an unannounced video game project.',
        ],
        tags: ['Web Dev', 'DevOps', 'Game Dev', 'Event Support'],
    },
    {
        title: 'Technical Mentor',
        org: 'cseed',
        orgLink: 'https://www.cseed.co/',
        logo: cseedLogo,
        period: 'Jan 2024 - Jun 2024',
        points: [
            'Guided students on their journey to becoming innovators, sharing strategies for success and inspiring positive community impact.',
            'Set up development environments, assisted in web development, and helped students evaluate technology stacks for their projects.',
            'Collaborated with students to brainstorm ideas, encouraging creative thinking and innovation.',
            'Assisted students in troubleshooting and debugging, fostering a growth-oriented learning environment.',
            'Worked to make technology accessible to students of different backgrounds and experience levels.',
        ],
        tags: ['Mentorship', 'Web Dev', 'Education'],
    },
    {
        title: 'Mentor',
        org: 'CodeDay',
        orgLink: 'https://www.codeday.org/',
        logo: codedayLogo,
        period: 'Nov 2019',
        points: [
            'Guided attendees through the event venue, offering information and insights about facilities and scheduled activities.',
            'Assisted participants with expertise in game development, mobile app development, and full-stack web development.',
            'Ensured the safety and comfort of all attendees, with a focus on the well-being of minors.',
        ],
        tags: ['Mentorship', 'Game Dev', 'Full-Stack'],
    },
];

export default function Volunteering() {
    return (
        <Section id="volunteering" title="Volunteering">
            <div className={listStyles.timeline}>
                {volunteering.map((entry) => (
                    <TimelineCard key={`${entry.org}-${entry.title}`} entry={entry}/>
                ))}
            </div>
        </Section>
    );
}

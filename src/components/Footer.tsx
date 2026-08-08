import type { ReactNode } from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons';
import { MAILTO, SITE } from '../site';
import styles from './Footer.module.css';

type Social = {
    label: string;
    href: string;
    icon: ReactNode;
};

const socials: Social[] = [
    { label: 'GitHub', href: SITE.github, icon: <GitHubIcon/> },
    { label: 'LinkedIn', href: SITE.linkedin, icon: <LinkedInIcon/> },
    { label: 'Email', href: MAILTO, icon: <MailIcon/> },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.socials}>
                    {socials.map((social) => {
                        const isExternal = !social.href.startsWith('mailto:');
                        return (
                            <a
                                key={social.label}
                                href={social.href}
                                target={isExternal ? '_blank' : undefined}
                                rel={isExternal ? 'noopener noreferrer' : undefined}
                                className={styles.socialLink}
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        );
                    })}
                </div>
                <p className={styles.credit}>
                    Built by Wynter Lin
                </p>
                <p className={styles.license}>
                    Licensed under{' '}
                    <a href={SITE.license} target="_blank" rel="noopener noreferrer">
                        AGPL-3.0
                    </a>
                </p>
            </div>
        </footer>
    );
}

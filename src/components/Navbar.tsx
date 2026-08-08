import { useEffect, useState } from 'react';
import { type SectionId, SECTIONS } from '../sections';
import { MAILTO } from '../site';
import styles from './Navbar.module.css';

const MENU_ID = 'primary-navigation';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToSection = (id: SectionId) => {
        setMobileOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                <a href="#" className={styles.logo}>
                    <span className={styles.logoAccent}>W</span>ynter
                </a>

                <button
                    className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ''}`}
                    onClick={() => setMobileOpen((open) => !open)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                    aria-controls={MENU_ID}
                >
                    <span/><span/><span/>
                </button>

                <ul
                    id={MENU_ID}
                    className={`${styles.links} ${mobileOpen ? styles.linksOpen : ''}`}
                >
                    {SECTIONS.map(({ id, label }) => (
                        <li key={id}>
                            <button className={styles.link} onClick={() => scrollToSection(id)}>
                                {label}
                            </button>
                        </li>
                    ))}
                    <li>
                        <a href={MAILTO} className={styles.contactBtn}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

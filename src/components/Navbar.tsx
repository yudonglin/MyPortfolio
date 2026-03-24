import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const navLinks = ['About', 'Experience', 'Projects', 'Volunteering', 'Skills'];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = (id: string) => {
        setMobileOpen(false);
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                <a href="#" className={styles.logo}>
                    <span className={styles.logoAccent}>W</span>ynter
                </a>

                <button
                    className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span/><span/><span/>
                </button>

                <ul className={`${styles.links} ${mobileOpen ? styles.linksOpen : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link}>
                            <button className={styles.link} onClick={() => handleClick(link)}>
                                {link}
                            </button>
                        </li>
                    ))}
                    <li>
                        <a
                            href="mailto:wynterlyd@gmail.com"
                            className={styles.contactBtn}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

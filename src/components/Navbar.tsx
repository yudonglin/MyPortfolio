import { useEffect, useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { type SectionId, SECTIONS } from '../sections';
import { MAILTO } from '../site';
import styles from './Navbar.module.css';

const MENU_ID = 'primary-navigation';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const activeSection = useActiveSection();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // While the full-screen menu is up, Escape must dismiss it, and it must not
    // stay open past the breakpoint that hides the burger — a rotation to
    // landscape would otherwise leave an overlay with no way to close it.
    //
    // The page behind the menu is held still by `overscroll-behavior` on the
    // overlay, not by locking `body`. A lock would still be applied when a nav
    // tap calls `scrollIntoView` below, and an unscrollable viewport silently
    // swallows that scroll, so every menu item would do nothing.
    useEffect(() => {
        if (!mobileOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setMobileOpen(false);
        };
        const desktop = window.matchMedia('(min-width: 769px)');
        const onBreakpoint = () => {
            if (desktop.matches) setMobileOpen(false);
        };

        window.addEventListener('keydown', onKeyDown);
        desktop.addEventListener('change', onBreakpoint);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            desktop.removeEventListener('change', onBreakpoint);
        };
    }, [mobileOpen]);

    const scrollToSection = (id: SectionId) => {
        setMobileOpen(false);
        // No explicit `behavior`, so this inherits `scroll-behavior` from the
        // stylesheet — which global.css turns off under reduced motion. Passing
        // 'smooth' here would override that and ignore the preference.
        document.getElementById(id)?.scrollIntoView();
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                <a href="#" className={styles.logo} onClick={() => setMobileOpen(false)}>
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
                            <button
                                className={`${styles.link} ${activeSection === id ? styles.linkActive : ''}`}
                                onClick={() => scrollToSection(id)}
                                aria-current={activeSection === id ? 'true' : undefined}
                            >
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

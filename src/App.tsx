import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Objective from './components/Objective';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Volunteering from './components/Volunteering';
import Skills from './components/Skills';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import styles from './App.module.css';

// Section order here must match SECTIONS in src/sections.ts, which drives the
// navbar order and the heading ordinals.
export default function App() {
    return (
        <>
            <AnimatedBackground/>
            <div className={styles.content}>
                <Navbar/>
                <main>
                    <Hero/>
                    <Objective/>
                    <Education/>
                    <Experience/>
                    <Projects/>
                    <Publications/>
                    <Volunteering/>
                    <Skills/>
                </main>
                <Footer/>
                <BackToTop/>
            </div>
        </>
    );
}

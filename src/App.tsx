import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Objective from './components/Objective';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Volunteering from './components/Volunteering';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

export default function App() {
    return (
        <>
            <AnimatedBackground/>
            <div style={{ position: 'relative', zIndex: 1 }}>
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
            </div>
        </>
    );
}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
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
                    <Experience/>
                    <Projects/>
                    <Volunteering/>
                    <Skills/>
                </main>
                <Footer/>
            </div>
        </>
    );
}

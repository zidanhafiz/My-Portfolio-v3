import Navbar from '@/components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import styles from './page.module.scss';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import SubmitAlert from '@/components/SubmitAlert/SubmitAlert';

export default function Home() {
  return (
    <>
      <SubmitAlert />
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

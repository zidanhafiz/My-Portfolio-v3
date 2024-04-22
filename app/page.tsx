import Navbar from '@/components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import styles from './page.module.scss';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import SubmitAlert from '@/components/SubmitAlert/SubmitAlert';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <>
      <SubmitAlert />
      <header className={styles.header}>
        <Hero />
      </header>
      <main className={styles.main}></main>
    </>
  );
}

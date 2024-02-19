import Navbar from '@/components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import styles from './page.module.scss';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <section>Project</section>
        <section>Contact</section>
      </main>
    </>
  );
}

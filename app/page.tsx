import Navbar from '@/components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import styles from './page.module.scss';
import About from './components/About/About';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Hero />
        <About />
        <section>Skills</section>
        <section>Project</section>
        <section>Contact</section>
      </main>
    </>
  );
}

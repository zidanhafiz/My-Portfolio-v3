import Navbar from '@/components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Hero />
        <section>About</section>
        <section>Skills</section>
        <section>Project</section>
        <section>Contact</section>
      </main>
    </>
  );
}

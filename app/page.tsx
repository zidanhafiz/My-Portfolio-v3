import { righteous } from '@/utils/fonts';
import styles from './page.module.scss';
import { TechSlider } from '@/components/TechSlider/TechSlider';

const paragraph =
  'I am a web developer with considerable experience using the MERN tech stack (MongoDB, Express, React, and Node.js) to build, test, and develop websites. With this background, I possess strong skills in delivering innovative and efficient web solutions. I am always eager to expand my knowledge in web development and ready to make meaningful contributions to challenging projects.';

export default function Home() {
  return (
    <section className={styles.about}>
      <h3 className={righteous.className}>Hi 👋</h3>
      <p>{paragraph}</p>
      <TechSlider />
    </section>
  );
}

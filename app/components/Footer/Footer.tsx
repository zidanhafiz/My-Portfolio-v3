import Link from 'next/link';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <p>
          &copy;{' '}
          <Link
            href='/'
            className={styles.link}
          >
            Zidan Hafiz Rapiyani,
          </Link>{' '}
          2024 All rights reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;

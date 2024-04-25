import Link from 'next/link';
import styles from './page.module.scss';
import { righteous } from '@/utils/fonts';

export default function NotFound() {
  return (
    <div className={styles['not-found']}>
      <h2 className={righteous.className}>
        404 <br />
        Not Found!
      </h2>
      <p>Could not find requested resource</p>
      <Link
        className={styles['link']}
        href='/'
      >
        Return Home
      </Link>
    </div>
  );
}

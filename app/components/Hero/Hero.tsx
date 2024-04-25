'use client';
import Image from 'next/image';
import styles from './hero.module.scss';
import { righteous } from '@/utils/fonts';
import { sosmedList } from './list';
import { useEffect, useState } from 'react';
import { getResume } from '@/utils/firebase/getResume';
import Link from 'next/link';

const Hero = () => {
  const [resume, setResume] = useState<string>('');

  useEffect(() => {
    getResume()
      .then((url) => setResume(url))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      id='home'
      className={styles.hero}
    >
      <Link
        className={styles['img-link']}
        href='/zidan-img.jpg'
      >
        <Image
          className={styles.image}
          src='/zidan-img.jpg'
          width={300}
          height={300}
          alt='zidan'
        />
      </Link>
      <div className={styles.right}>
        <h1 className={righteous.className}>ZIDAN HAFIZ RAPIYANI</h1>
        <p>Fullstack Developer</p>
        <SosmedList />
      </div>
      <div className={styles['buttons-group']}>
        <Link
          href={resume}
          target='_blank'
        >
          See My CV
        </Link>
        <Link href='/contact'>Contact Me</Link>
      </div>
    </div>
  );
};

const SosmedList = () => {
  return (
    <div className={styles.sosmed}>
      {sosmedList.map((list, i) => (
        <Link
          key={i}
          href={list.link}
          target='_blank'
        >
          {list.icon()}
        </Link>
      ))}
    </div>
  );
};

export default Hero;

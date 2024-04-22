'use client';
import Image from 'next/image';
import styles from './hero.module.scss';
import { righteous } from '@/utils/fonts';
import { sosmedList } from './list';
import { useEffect, useState } from 'react';
import { getResume } from '@/utils/firebase/getResume';

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
      <Image
        className={styles.image}
        src='/zidan-img.jpg'
        width={300}
        height={300}
        alt='zidan'
      />
      <div className={styles.right}>
        <h1 className={righteous.className}>ZIDAN HAFIZ RAPIYANI</h1>
        <p>Fullstack Developer</p>
        <SosmedList />
      </div>
      <div className={styles['buttons-group']}>
        <a
          href={resume}
          target='_blank'
        >
          See My CV
        </a>
        <a href='#contact'>Contact Me</a>
      </div>
    </div>
  );
};

const SosmedList = () => {
  return (
    <div className={styles.sosmed}>
      {sosmedList.map((list, i) => (
        <a
          key={i}
          href={list.link}
          target='_blank'
        >
          {list.icon()}
        </a>
      ))}
    </div>
  );
};

export default Hero;

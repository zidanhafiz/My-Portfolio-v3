'use client';
import { RiReactjsFill } from 'react-icons/ri';
import { SiNextdotjs } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiFirebase } from 'react-icons/si';
import { RiSupabaseFill } from 'react-icons/ri';
import { SiPrisma } from 'react-icons/si';

import { motion, Variants } from 'framer-motion';

import styles from './tech-slider.module.scss';
import { ReactNode, useEffect, useState } from 'react';

const sliderList = [
  {
    name: 'React.JS',
    icon: () => <RiReactjsFill />,
  },
  {
    name: 'Next.JS',
    icon: () => <SiNextdotjs />,
  },
  {
    name: 'Node.JS',
    icon: () => <FaNode />,
  },
  {
    name: 'Express.JS',
    icon: () => <SiExpress />,
  },
  {
    name: 'Prisma',
    icon: () => <SiPrisma />,
  },
  {
    name: 'PostgreSQL',
    icon: () => <BiLogoPostgresql />,
  },
  {
    name: 'Firebase',
    icon: () => <SiFirebase />,
  },
  {
    name: 'Supabase',
    icon: () => <RiSupabaseFill />,
  },
];

const desktopVariants: Variants = {
  first: {
    x: 0,
  },
  slide: {
    x: -600,
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

const mobileVariants: Variants = {
  first: {
    x: 0,
  },
  slide: {
    x: -1200,
    transition: {
      duration: 15,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

export const TechSlider = () => {
  return (
    <Slider>
      {sliderList.map((list) => (
        <div
          key={list.name}
          className={styles['tech-list']}
        >
          {list.icon()}
          {list.name}
        </div>
      ))}
    </Slider>
  );
};

const Slider = ({ children }: { children: ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (windowWidth > 768) {
    return (
      <motion.div
        className={styles.container}
        variants={desktopVariants}
        initial='first'
        animate='slide'
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      className={styles.container}
      variants={mobileVariants}
      initial='first'
      animate='slide'
    >
      {children}
    </motion.div>
  );
};

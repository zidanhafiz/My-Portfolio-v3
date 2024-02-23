'use client';
import Image from 'next/image';
import './hero.scss';
import { poppins, righteous } from '@/utils/fonts';
import { motion } from 'framer-motion';
import { sliderList, sosmedList } from './list';

const sliderVariants = {
  first: {
    x: 0,
  },
  slide: {
    x: -2500,
  },
};

const heroVariants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <motion.section
      id='home'
      className='hero'
      variants={heroVariants}
      initial='hidden'
      whileInView='show'
    >
      <div className={`${poppins.className} hero__section--a`}>
        <motion.p
          className='hero__text'
          variants={heroVariants}
        >
          Hi! My name is,
        </motion.p>
        <motion.h1
          className={`${righteous.className} hero__title`}
          variants={heroVariants}
        >
          ZIDAN HAFIZ RAPIYANI
        </motion.h1>
        <motion.p
          className='hero__text'
          variants={heroVariants}
        >
          I am a Web Developer
        </motion.p>
        <ButtonGroup />
        <SosmedList />
      </div>
      <motion.div
        className='hero__section--b'
        variants={heroVariants}
        initial='hidden'
        whileInView='show'
      >
        <Image
          className='hero__img'
          src='/zidan-img.jpg'
          width={300}
          height={300}
          alt='zidan'
        />
      </motion.div>
      <SliderList />
    </motion.section>
  );
};

const ButtonGroup = () => {
  return (
    <div className='hero__buttons'>
      <motion.a
        href='#projects'
        className='button'
        variants={heroVariants}
      >
        My Projects
      </motion.a>
      <motion.a
        href='#contact'
        className='button'
        variants={heroVariants}
      >
        Contact Me
      </motion.a>
    </div>
  );
};

const SosmedList = () => {
  return (
    <div className='hero__sosmed--list'>
      {sosmedList.map((list, i) => (
        <motion.a
          key={i}
          href={list.link}
          target='_blank'
          variants={heroVariants}
        >
          {list.icon()}
        </motion.a>
      ))}
    </div>
  );
};

const SliderList = () => {
  return (
    <div className='hero__slider-container'>
      <motion.div
        className='hero__slider'
        variants={sliderVariants}
        initial='first'
        animate='slide'
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        {sliderList.map((list) => (
          <span
            key={list.name}
            className='slider__list'
          >
            {list.icon()} {list.name}
          </span>
        ))}
        {sliderList.map((list) => (
          <span
            key={list.name}
            className='slider__list'
          >
            {list.icon()} {list.name}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;

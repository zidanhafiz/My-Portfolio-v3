'use client';
import './about.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Heading from '@/components/Heading/Heading';

const aboutVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 100,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '160%']);
  const yMoon = useTransform(scrollYProgress, [0, 1], ['0%', '350%']);
  const sCloud = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const xCloud = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const reversexCloud = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const oText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id='about'
      className='about'
    >
      <motion.div
        className='about__container'
        variants={aboutVariants}
        initial='hidden'
        whileInView='show'
      >
        <motion.div
          className='about__text'
          style={{ y: yText, opacity: oText }}
        >
          <Heading
            type='h2'
            variants={aboutVariants}
          >
            About Me
          </Heading>
          <motion.p variants={aboutVariants}>
            I&apos;m a frontend-focused web developer specializing in React.js, crafting
            intuitive and responsive interfaces. I&apos;m experienced in both backend and
            serverless technologies, including PostgreSQL with Express.js, and
            Firebase/Supabase for scalable solutions. Continuously learning to stay ahead
            in the ever-evolving tech landscape. Let&apos;s build something great
            together!
          </motion.p>
        </motion.div>
        <motion.div
          className='about__cloud-1'
          variants={aboutVariants}
          style={{ scale: sCloud, x: reversexCloud }}
        ></motion.div>
        <motion.div
          className='about__cloud-2'
          variants={aboutVariants}
          style={{ scale: sCloud, x: xCloud }}
        ></motion.div>
        <motion.div
          className='about__cloud-3'
          variants={aboutVariants}
          style={{ scale: sCloud, x: xCloud }}
        ></motion.div>
        <motion.div
          className='about__moon'
          variants={aboutVariants}
          initial='hidden'
          animate='show'
          style={{ y: yMoon, opacity: oText }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default About;

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
  const yMoon = useTransform(scrollYProgress, [0, 1], ['0%', '400%']);
  const sForest = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const oText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      ref={ref}
      id='about'
      className='about'
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
          ABOUT ME
        </Heading>
        <motion.p variants={aboutVariants}>
          I&apos;m a frontend-focused web developer specializing in React.js, crafting
          intuitive and responsive interfaces. I&apos;m experienced in both backend and
          serverless technologies, including PostgreSQL with Express.js, and
          Firebase/Supabase for scalable solutions. Continuously learning to stay ahead in
          the ever-evolving tech landscape. Let&apos;s build something great together!
        </motion.p>
      </motion.div>
      <motion.div
        className='about__forest'
        variants={aboutVariants}
        style={{ scale: sForest }}
      ></motion.div>
      <motion.div
        className='about__moon'
        variants={aboutVariants}
        initial='hidden'
        animate='show'
        style={{ y: yMoon }}
      ></motion.div>
    </motion.section>
  );
};

export default About;

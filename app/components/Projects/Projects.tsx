'use client';
import Heading from '@/components/Heading/Heading';
import './projects.scss';
import Carousel from './Carousel';
import { motion } from 'framer-motion';

const projectVariants = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const Projects = () => {
  return (
    <motion.section
      id='projects'
      className='projects'
      initial='hidden'
      whileInView='show'
    >
      <Heading
        type='h2'
        variants={projectVariants}
      >
        My Projects
      </Heading>
      <div className='projects__list'>
        <Carousel />
      </div>
    </motion.section>
  );
};

export default Projects;

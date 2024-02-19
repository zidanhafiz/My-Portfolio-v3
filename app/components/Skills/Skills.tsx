'use client';
import Heading from '@/components/Heading/Heading';
import './skills.scss';
import { ReactNode } from 'react';
import { type Skills, database, framework, proLang } from './SkillList';
import { motion } from 'framer-motion';

const skillsVariant = {
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

const Skills = () => {
  return (
    <motion.section
      id='skills'
      className='skills'
      variants={skillsVariant}
      initial='hidden'
      whileInView='show'
    >
      <Heading
        type='h2'
        variants={skillsVariant}
      >
        MY SKILLS
      </Heading>
      <SkillList skills={proLang}>Programming Language</SkillList>
      <SkillList skills={framework}>Framework</SkillList>
      <SkillList skills={database}>Database</SkillList>
    </motion.section>
  );
};

const SkillList = ({ children, skills }: { children: ReactNode; skills: Skills[] }) => {
  return (
    <motion.div
      className='skills__list-container'
      variants={skillsVariant}
      initial='hidden'
      whileInView='show'
    >
      <motion.h3 variants={skillsVariant}>{children}</motion.h3>
      <ul className='skills__list-ul'>
        {skills.map((skill) => (
          <motion.li
            key={skill.name}
            variants={skillsVariant}
          >
            {skill.icon()} {skill.name}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;

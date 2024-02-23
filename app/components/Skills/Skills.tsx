'use client';
import Heading from '@/components/Heading/Heading';
import './skills.scss';
import { type Skills, getAllSkills } from './SkillList';
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
      duration: 0.7,
      type: 'spring',
      stiffness: 100,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const data = getAllSkills();

  return (
    <section
      id='skills'
      className='skills'
    >
      <Heading
        type='h2'
        variants={skillsVariant}
      >
        Skills
      </Heading>
      <SkillList skills={data} />
    </section>
  );
};

const SkillList = ({ skills }: { skills: Skills[] }) => {
  return (
    <motion.div
      className='skills__list-container'
      variants={skillsVariant}
      initial='hidden'
      whileInView='show'
    >
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

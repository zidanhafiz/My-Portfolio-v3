'use client';
import './contact.scss';
import Heading from '@/components/Heading/Heading';
import { motion } from 'framer-motion';
import { list } from './ListData';
import CardList from './CardList';
import Form from './Form';

const contactVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: 'spring',
      stiffness: 100,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  return (
    <section
      id='contact'
      className='contact'
    >
      <motion.div
        className='contact__container'
        variants={contactVariants}
        initial='hidden'
        whileInView='show'
      >
        <Heading
          type='h2'
          variants={contactVariants}
        >
          Contact Me
        </Heading>
        <div className='contact__list-container'>
          {list.map((data) => (
            <CardList
              key={data.name}
              name={data.name}
              link={data.link}
              icon={data.icon}
              variants={contactVariants}
            />
          ))}
        </div>
        <motion.div
          className='contact__divider'
          variants={contactVariants}
        >
          <div className='line'></div>
          <span>or</span>
          <div className='line'></div>
        </motion.div>
        <Form variants={contactVariants} />
      </motion.div>
    </section>
  );
};

export default Contact;

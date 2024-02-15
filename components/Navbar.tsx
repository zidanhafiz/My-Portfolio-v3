'use client';
import Image from 'next/image';
import Link from 'next/link';
import './navbar.scss';
import { motion } from 'framer-motion';

type Navlist = {
  name: string;
  link: string;
};

const navlist: Navlist[] = [
  {
    name: 'Home',
    link: '#home',
  },
  {
    name: 'About',
    link: '#about',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Projects',
    link: '#projects',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
];

const navlistVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const listItemVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  hover: {
    y: -5,
  },
};

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link
        href='/'
        as='/'
        className='navbar__logo'
        title='Home'
      >
        <Image
          className='navbar__logo-img'
          src='/logo.png'
          width={192}
          height={192}
          alt='logo'
        />
      </Link>
      <motion.ul
        className='navbar__list'
        variants={navlistVariants}
        initial='hidden'
        animate='show'
      >
        {navlist.map((nav) => (
          <motion.li
            key={nav.name}
            variants={listItemVariants}
          >
            <motion.a
              variants={listItemVariants}
              whileHover='hover'
              href={nav.link}
            >
              {nav.name}
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
      <a
        href='#'
        className='navbar__cta'
      >
        See My CV
      </a>
    </nav>
  );
};

export default Navbar;

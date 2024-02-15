'use client';
import Image from 'next/image';
import Link from 'next/link';
import './navbar.scss';
import { AnimatePresence, motion } from 'framer-motion';
import ToggleBtn from './ToggleBtn';
import { useState } from 'react';
import CloseBtn from './CloseBtn';

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

const listItemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: (i: any) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
    },
  }),
  hover: {
    y: -5,
  },
};

const sidebarVariants = {
  hidden: {
    x: -300,
    transition: {
      duration: 0.3,
    },
  },
  show: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);

  return (
    <nav className='navbar'>
      <ToggleBtn handleOpen={handleOpen} />
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
      <ul className='navbar__list--desktop'>
        <NavlistItems />
      </ul>
      <AnimatePresence>
        {open && (
          <motion.ul
            className='navbar__list--mobile'
            variants={sidebarVariants}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <CloseBtn handleOpen={handleOpen} />
            <NavlistItems handleOpen={handleOpen} />
          </motion.ul>
        )}
      </AnimatePresence>
      <a
        href='#'
        className='navbar__cta'
      >
        See My CV
      </a>
    </nav>
  );
};

const NavlistItems = ({ handleOpen }: { handleOpen?: () => void }) => {
  return (
    <>
      {navlist.map((nav, i) => (
        <motion.li
          key={nav.name}
          variants={listItemVariants}
          initial='hidden'
          animate='show'
          whileHover='hover'
          custom={i}
        >
          {handleOpen ? (
            <a
              href={nav.link}
              onClick={handleOpen}
            >
              {nav.name}
            </a>
          ) : (
            <a href={nav.link}>{nav.name}</a>
          )}
        </motion.li>
      ))}
    </>
  );
};

export default Navbar;

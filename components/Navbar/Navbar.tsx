'use client';
import Link from 'next/link';
import styles from './navbar.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';

type Navlist = {
  name: string;
  link: string;
};

const navlist: Navlist[] = [
  {
    name: 'About',
    link: '/',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Projects',
    link: '#projects',
  },
];

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState('About');

  return (
    <nav className={styles.navbar}>
      <ul>
        {navlist.map((list) => (
          <li key={list.name}>
            <Link
              className={styles.link}
              href={list.link}
              onClick={() => setSelectedTab(list.name)}
            >
              {list.name}
              {list.name === selectedTab ? (
                <motion.div
                  className={styles.underline}
                  layoutId='underline'
                />
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

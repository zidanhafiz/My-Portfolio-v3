'use client';
import Link from 'next/link';
import styles from './navbar.module.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

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
    link: '/skills',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const [selectedTab, setSelectedTab] = useState(pathName);

  return (
    <nav className={styles.navbar}>
      <ul>
        {navlist.map((list) => (
          <li key={list.name}>
            <Link
              className={styles.link}
              href={list.link}
              onClick={() => setSelectedTab(list.link)}
            >
              {list.name}
              {list.link === selectedTab ? (
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

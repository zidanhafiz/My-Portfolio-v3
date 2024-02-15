import Image from 'next/image';
import Link from 'next/link';
import './navbar.scss';

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
      <ul className='navbar__list'>
        {navlist.map((nav) => (
          <li key={nav.name}>
            <a href={nav.link}>{nav.name}</a>
          </li>
        ))}
      </ul>
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

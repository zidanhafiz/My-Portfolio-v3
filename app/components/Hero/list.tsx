import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export const sosmedList = [
  {
    link: 'https://facebook.com/hafiz.rofiyani',
    icon: () => <FaFacebookF />,
  },
  {
    link: 'https://instagram.com/hafiz.rofiyani',
    icon: () => <FaInstagram />,
  },
  {
    link: 'https://linkedin.com/in/zidanhafiz',
    icon: () => <FaLinkedin />,
  },
  {
    link: 'https://github.com/zidanhafiz',
    icon: () => <FaGithub />,
  },
];

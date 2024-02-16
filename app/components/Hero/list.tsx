import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import { RiReactjsFill } from 'react-icons/ri';
import { SiNextdotjs } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiFirebase } from 'react-icons/si';
import { RiSupabaseFill } from 'react-icons/ri';
import { SiPrisma } from 'react-icons/si';

export const sosmedList = [
  {
    link: 'https://facebook.com',
    icon: () => <FaFacebookF />,
  },
  {
    link: 'https://instagram.com/hafiz.rofiyani',
    icon: () => <FaInstagram />,
  },
  {
    link: 'https://linkedin.com',
    icon: () => <FaLinkedin />,
  },
  {
    link: 'https://github.com',
    icon: () => <FaGithub />,
  },
];

export const sliderList = [
  {
    name: 'React.JS',
    icon: () => <RiReactjsFill />,
  },
  {
    name: 'Next.JS',
    icon: () => <SiNextdotjs />,
  },
  {
    name: 'Node.JS',
    icon: () => <FaNode />,
  },
  {
    name: 'Express.JS',
    icon: () => <SiExpress />,
  },
  {
    name: 'Prisma',
    icon: () => <SiPrisma />,
  },
  {
    name: 'PostgreSQL',
    icon: () => <BiLogoPostgresql />,
  },
  {
    name: 'Firebase',
    icon: () => <SiFirebase />,
  },
  {
    name: 'Supabase',
    icon: () => <RiSupabaseFill />,
  },
];

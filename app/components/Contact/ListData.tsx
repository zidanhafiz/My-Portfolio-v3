import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

export const list = [
  {
    name: 'Whatsapp',
    link: 'https://wa.me/6285333416372',
    icon: () => <FaWhatsapp />,
  },
  {
    name: 'Email',
    link: 'mailto:hrofiyani@gmail.com',
    icon: () => <MdOutlineEmail />,
  },
];

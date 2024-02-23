import './cardList.scss';
import { Variants, motion } from 'framer-motion';
import { ReactNode } from 'react';

type CardListProps = {
  name: string;
  link: string;
  icon: () => ReactNode;
  variants: Variants;
};

const CardList = ({ name, link, icon, variants }: CardListProps) => {
  return (
    <motion.a
      className='contact__card-list'
      href={link}
      target='_blank'
      variants={variants}
    >
      {icon()}
      <span>{name}</span>
    </motion.a>
  );
};

export default CardList;

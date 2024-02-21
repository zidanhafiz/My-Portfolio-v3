import Image from 'next/image';
import './card.scss';
import { IoCodeSlash } from 'react-icons/io5';
import { MdOpenInNew } from 'react-icons/md';
import { DocumentData } from 'firebase/firestore';
import { Variants, motion } from 'framer-motion';

const Card = ({ data, variants }: { data: DocumentData; variants?: Variants }) => {
  const { imgSrc, title, description, sourceCode, link } = data;

  return (
    <motion.div
      className='card'
      variants={variants}
    >
      <div className='card__img-container'>
        <Image
          className='card__img'
          src={imgSrc}
          width={1000}
          height={1000}
          alt={title}
        />
      </div>
      <div className='card__desc'>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className='card__btn--group'>
          {sourceCode && (
            <a
              href={sourceCode}
              target='_blank'
            >
              <IoCodeSlash /> Source Code
            </a>
          )}
          <a
            href={link}
            target='_blank'
          >
            <MdOpenInNew />
            Visit
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

import Image from 'next/image';
import './card.scss';
import { IoCodeSlash } from 'react-icons/io5';
import { MdOpenInNew } from 'react-icons/md';

type CardProps = {
  name: string;
  desc: string;
  sourceCode?: string;
  link: string;
  img: string;
};

const Card = ({ data }: { data: CardProps }) => {
  const { img, name, desc, sourceCode, link } = data;
  return (
    <div className='card'>
      <div className='card__img-container'>
        <Image
          className='card__img'
          src={img}
          width={1000}
          height={1000}
          alt={name}
        />
      </div>
      <div className='card__desc'>
        <h3>{name}</h3>
        <p>{desc}</p>
        <div className='card__btn--group'>
          {sourceCode && (
            <a href={sourceCode}>
              <IoCodeSlash /> Source Code
            </a>
          )}
          <a href={link}>
            <MdOpenInNew />
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

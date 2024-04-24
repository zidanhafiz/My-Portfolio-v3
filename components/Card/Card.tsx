import { DocumentData } from 'firebase/firestore';
import Image from 'next/image';
import React from 'react';
import { IoCodeSlash } from 'react-icons/io5';
import { MdOpenInNew } from 'react-icons/md';
import styles from './card.module.scss';

type CardProps = {
  data: DocumentData;
};

const Card = ({ data }: CardProps) => {
  const { imgSrc, title, description, sourceCode, link } = data;

  return (
    <div className={styles.card}>
      <div className={styles['card-img']}>
        <Image
          className={styles.img}
          src={imgSrc}
          width={1000}
          height={1000}
          alt={title}
        />
      </div>
      <div className={styles['card-main']}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={styles['card-btn-group']}>
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
    </div>
  );
};

export default Card;

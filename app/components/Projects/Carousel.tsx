'use client';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import Card from './Card';
import './carousel.scss';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const dummy = [
  {
    name: 'Bookshelf1',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  {
    name: 'Bookshelf2',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  {
    name: 'Bookshelf3',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  {
    name: 'Bookshelf4',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  {
    name: 'Bookshelf5',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  {
    name: 'Bookshelf6',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  {
    name: 'Bookshelf7',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  {
    name: 'Bookshelf8',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  {
    name: 'Bookshelf9',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  {
    name: 'Bookshelf10',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  {
    name: 'Bookshelf11',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  {
    name: 'Bookshelf12',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  {
    name: 'Bookshelf13',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  {
    name: 'Bookshelf14',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  {
    name: 'Bookshelf15',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  {
    name: 'Bookshelf16',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  {
    name: 'Bookshelf17',
    desc: `Keep track of the books you've read and add them to your watchlist.`,
    sourceCode: '#',
    link: '#',
    img: '/desktop-all.png',
  },
  // {
  //   name: 'Bookshelf18',
  //   desc: `Keep track of the books you've read and add them to your watchlist.`,
  //   sourceCode: '#',
  //   link: '#',
  //   img: '/desktop-all.png',
  // },
  // {
  //   name: 'Bookshelf18',
  //   desc: `Keep track of the books you've read and add them to your watchlist.`,
  //   sourceCode: '#',
  //   link: '#',
  //   img: '/desktop-all.png',
  // },
];

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [posX, setPosX] = useState<number>(0);
  const totalPage = Math.ceil(dummy.length / 4);
  const arrPage = Array.from({ length: totalPage }, (_, i) => i + 1);
  const reducerX = 100 / totalPage;

  const prevBtnHandle = () => {
    if (currentPage === 1) {
      setCurrentIndex(totalPage * 4 - 4);
      return setCurrentPage(totalPage);
    }
    setCurrentIndex((currentPage - 1) * 4 - 4);
    return setCurrentPage(currentPage - 1);
  };

  const nextBtnHandle = () => {
    if (currentPage === totalPage) {
      setCurrentIndex(1 * 4 - 4);
      return setCurrentPage(1);
    }
    setCurrentIndex((currentPage + 1) * 4 - 4);
    return setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setPosX((currentPage - 1) * (reducerX * -1));
  }, [currentPage, reducerX]);

  return (
    <div className='carousel'>
      <motion.div
        className='carousel__container'
        initial={{ x: 0 }}
        animate={{ x: `${posX}%` }}
        transition={{
          duration: 0.7,
          type: 'spring',
          stiffness: 30,
        }}
      >
        {arrPage.map((page) => (
          <CarouselList
            key={page}
            index={page}
          />
        ))}
      </motion.div>
      <CarouselNavBtn
        prevBtnHandle={prevBtnHandle}
        nextBtnHandle={nextBtnHandle}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        arrPage={arrPage}
      />
    </div>
  );
};

type CarouselNavBtnProps = {
  prevBtnHandle: () => void;
  nextBtnHandle: () => void;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  arrPage: number[];
};

const CarouselNavBtn = ({
  prevBtnHandle,
  nextBtnHandle,
  currentPage,
  setCurrentPage,
  arrPage,
}: CarouselNavBtnProps) => {
  return (
    <div className='carousel__container-nav'>
      <button onClick={prevBtnHandle}>
        <IoMdArrowDropleft />
      </button>
      <div className='nav__dots'>
        {arrPage.map((page) => (
          <span
            key={page}
            className={`${page === currentPage && 'active'}`}
            onClick={() => setCurrentPage(page)}
          ></span>
        ))}
      </div>
      <button onClick={nextBtnHandle}>
        <IoMdArrowDropright />
      </button>
    </div>
  );
};

const CarouselList = ({ index }: { index: number }) => {
  const currentIndex = index * 4 - 4;
  const lastIndex = index * 4;

  return (
    <div className='carousel__container-list'>
      {dummy.map((dum, i) => {
        if (i >= currentIndex && i < lastIndex) {
          return (
            <Card
              key={i}
              data={dum}
            />
          );
        }
      })}
    </div>
  );
};

export default Carousel;

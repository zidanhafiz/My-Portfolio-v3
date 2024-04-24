'use client';
import styles from './carousel.module.scss';
import { DocumentData } from 'firebase/firestore';
import Card from '../Card/Card';
import { useRef } from 'react';

import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import Slider from 'react-slick';

type CarouselProps = {
  data: DocumentData[];
};

const Carousel = ({ data }: CarouselProps) => {
  let sliderRef = useRef(null) as unknown as Slider;

  const settings = {
    className: styles['carousel-main'],
    dots: true,
    dotsClass: styles['nav-indicators'],
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className={styles.carousel}>
      <Slider
        ref={(slider) => {
          sliderRef = slider as Slider;
        }}
        {...settings}
      >
        {data.map((list, i) => (
          <div
            key={i}
            className={styles['card-items']}
          >
            <Card data={list} />
          </div>
        ))}
      </Slider>
      <div className={styles['carousel-nav']}>
        <button
          className={styles['nav-button']}
          onClick={previous}
        >
          <IoIosArrowBack />
        </button>
        <button
          className={styles['nav-button']}
          onClick={next}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

'use client';
import './carousel.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getAllDocuments } from '@/utils/firebase/getData';
import List from './List';
import NavBtn from './NavBtn';

const Carousel = () => {
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [posX, setPosX] = useState<number>(0);
  const reducerX = 100 / totalPage;

  useEffect(() => {
    getAllDocuments()
      .then((res) => setTotalPage(res.totalPage))
      .catch((err) => console.log(err));
  }, []);

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
        <List totalPage={totalPage} />
      </motion.div>
      <NavBtn
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Carousel;

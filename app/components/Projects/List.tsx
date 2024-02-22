'use client';
import { DocumentData } from 'firebase/firestore';
import Card from './Card';
import './list.scss';
import { useEffect, useState } from 'react';
import { getAllDocumentsByPage } from '@/utils/firebase/getData';
import { motion } from 'framer-motion';

const projectVariants = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      type: 'spring',
      stiffness: 80,
      staggerChildren: 0.1,
    },
  },
};

const List = ({ totalPage }: { totalPage: number }) => {
  const arrTotalPage = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <>
      {arrTotalPage.map((page, i) => (
        <CardList
          key={i}
          page={page}
        />
      ))}
    </>
  );
};

const CardList = ({ page }: { page: number }) => {
  const [data, setData] = useState<DocumentData[]>([]);

  useEffect(() => {
    getAllDocumentsByPage(page)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [page]);

  console.log(data);

  return (
    <motion.div
      className='carousel__container-list'
      variants={projectVariants}
      initial='hidden'
      whileInView='show'
    >
      {data.map((d) => (
        <Card
          key={d.id}
          data={d}
          variants={projectVariants}
        />
      ))}
    </motion.div>
  );
};

export default List;

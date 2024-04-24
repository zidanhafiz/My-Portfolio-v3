'use client';
import { getAllDocuments } from '@/utils/firebase/getData';
import { DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Carousel from '@/components/Carousel/Carousel';

const Projects = () => {
  const [data, setData] = useState<DocumentData[]>([]);

  useEffect(() => {
    getAllDocuments()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.projects}>
      <Carousel data={data} />
    </div>
  );
};

export default Projects;

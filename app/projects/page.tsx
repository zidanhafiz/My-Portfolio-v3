'use client';
import { getAllDocuments } from '@/utils/firebase/getData';
import { DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Carousel from '@/components/Carousel/Carousel';
import Skeleton from '@/components/Skeleton/Skeleton';

const Projects = () => {
  const [data, setData] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getAllDocuments()
      .then((res) => {
        setData(res);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) {
    if (error) return <p className={styles['error-msg']}>Something went wrong!</p>;
    return (
      <div className={styles.projects}>
        <div className={styles.skeletons}>
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    );
  }

  if (error) return <p className={styles['error-msg']}>Something went wrong!</p>;
  return (
    <div className={styles.projects}>
      <Carousel data={data} />
    </div>
  );
};

export default Projects;

'use client';
import { FaCheckCircle } from 'react-icons/fa';
import { MdError } from 'react-icons/md';
import './submitAlert.scss';
import { useModal } from '@/context/showModal';
import { motion, AnimatePresence } from 'framer-motion';

const submitVarianst = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      duration: 0.5,
    },
  },
};

const SubmitAlert = () => {
  const { isShow, setIsShow, isSuccess } = useModal();

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          className='submit__alert'
          variants={submitVarianst}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <div className='submit__alert-container'>
            <span
              style={{
                color: `${isSuccess ? 'green' : 'red'}`,
              }}
            >
              {isSuccess ? <FaCheckCircle /> : <MdError />}
            </span>
            <p>{isSuccess ? 'Email was sent!' : 'Error sent email!'}</p>
            <button onClick={() => setIsShow(false)}>OK</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubmitAlert;

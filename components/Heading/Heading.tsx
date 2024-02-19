'use client';
import { ReactNode, createElement } from 'react';
import './heading.scss';
import { righteous } from '@/utils/fonts';
import { motion, Variants } from 'framer-motion';

const Heading = ({
  children,
  variants,
  type,
}: {
  children: ReactNode;
  variants?: Variants;
  type: string;
}) => {
  const Component = createElement(type, null, children);

  return (
    <motion.div
      variants={variants}
      className={`${righteous.className} heading`}
    >
      {Component}
    </motion.div>
  );
};

export default Heading;

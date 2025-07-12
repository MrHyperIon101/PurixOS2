import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.98,
      filter: "blur(10px)"
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)"
    },
    out: {
      opacity: 0,
      y: -30,
      scale: 1.02,
      filter: "blur(5px)"
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.6,
    filter: { duration: 0.4 }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: 'relative', zIndex: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

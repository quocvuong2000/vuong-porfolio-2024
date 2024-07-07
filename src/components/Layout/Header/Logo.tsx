'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const Logo = () => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
    },
  };

  const iconVariants = {
    hover: {
      y: [1, -3, -5, -10, -5, -3, 0],
      skewX: [0, 0, 5, 0, 0, 0],
    },
  };
  return (
    <Link href={'/'}>
      <motion.button
        className="flex items-center gap-2"
        whileHover={'hover'}
        variants={buttonVariants}
      >
        <span
          onPointerDownCapture={(e) => e.stopPropagation()}
          className="font-bold text-2xl"
        >
          Vguno{' '}
        </span>
        <motion.div
          className="bg-primary-steelblue py-1 pl-1 pr-3 rounded-md relative z-10"
          variants={iconVariants}
        >
          <span className="text-xs font-extralight">{'</>'}</span>
          <div className="absolute h-5 -right-2 top-1 w-4 rounded-xl bg-primary !-z-20" />
          {...Array(3)
            .fill(1)
            .map((_, idx) => {
              return (
                <motion.div
                  animate={{
                    scale: [1, 1.1],
                    y: [0, -50],
                    x: [0, 2, 4, 3],
                  }}
                  transition={{
                    duration: 3,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    delay: 1 * idx,
                  }}
                  key={idx}
                  style={{
                    left: 4 * (idx + 1),
                  }}
                  className={twMerge(
                    'h-1 w-1 rounded-xl absolute bg-primary-steelblue top-4 !-z-10'
                  )}
                />
              );
            })}
          {...Array(3)
            .fill(1)
            .map((_, idx) => {
              return (
                <motion.div
                  animate={{
                    scale: [1, 1.1],
                    y: [0, -50],
                    x: [3, 2, 1, 2],
                  }}
                  transition={{
                    duration: 3,
                    ease: 'linear',
                    repeat: Infinity,
                    delay: 4 * (idx + 1),
                  }}
                  key={idx}
                  style={{
                    left: 6 * (idx + 1),
                  }}
                  className={twMerge(
                    'h-1 w-1 rounded-xl absolute bg-primary-steelblue top-1 -z-10'
                  )}
                />
              );
            })}
        </motion.div>
      </motion.button>
    </Link>
  );
};

export default Logo;

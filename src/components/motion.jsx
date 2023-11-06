import { motion } from "framer-motion";


  const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };


  export const StagWrapper = (Component) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className="className='bg-[#ecf0f1] pb-[60px]'"
      >
        <span>
         
        </span>

        <Component />
      </motion.section>
    );
  };

  export const fadeIn = (delay, duration) => {
    return {
      hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          duration: duration,
          delay: delay,
        },
      },
    };
  };
  

  export const moveIn = (direction, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };



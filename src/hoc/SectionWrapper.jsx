import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const threshold = 0.5;
        const element = document.getElementById(idName);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * threshold && rect.bottom > 0;

        setIsInView(isVisible);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [idName]);

    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        animate='show'
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
         <Component isInView={isInView} />
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

       
      </motion.section>
    );
  };

export default StarWrapper;

import React, { useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, isInView }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial={!isInView ? "hidden" : undefined}
      animate={isInView ? "show" : "hidden"}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = ({ isInView }) => {
  return (
    <div id="about" className={`${styles.padding} relative z-0`}>
      <motion.div
        variants={textVariant()}
        initial={!isInView ? "hidden" : undefined}
        animate={isInView ? "show" : "hidden"}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial={!isInView ? "hidden" : undefined}
        animate={isInView ? "show" : "hidden"}
        className={`mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]`}
      >
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Passionate and dynamic Web
        Developer specializing in web application development,
        dedicated to serving small and medium-sized businesses. Our expertise
        encompasses a wide range of technologies, including HTML, CSS3,
        JavaScript, APIs, Database management, React, Shopify and much more.
        With a proven track record of managing projects from inception to
        completion,We are committed to delivering high-quality solutions that not
        only attract clients but also effectively showcase services and create
        captivating online stores."
        <br />
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I emphasize regular
        communication to ensure a seamless partnership throughout our journey.
        Let's connect and explore how I can contribute to your vision and
        objectives.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            initial={!isInView ? "hidden" : undefined}
            animate={isInView ? "show" : "hidden"}
            key={service.title}
            index={index}
            {...service}
            isInView={isInView}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");

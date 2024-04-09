import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What technologies and frameworks I´ve worked with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Techs.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((tec) => (
          <div className="w-28 h-28" key={tec.name}>
            <BallCanvas icon={tec.icon} />
            <p className="flex justify-center text-secondary">{tec.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

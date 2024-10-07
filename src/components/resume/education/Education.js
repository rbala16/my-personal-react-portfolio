import React from "react";
import { motion } from "framer-motion";
import { leftEducation,rightCertificates } from "../../../constants/educationData";
import EducationSection from "./EducationSection";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="flex-row lgl:flex-col">
        <EducationSection
          title="Education"
          educations={leftEducation}
        />
      </div>
      <div>
        <EducationSection
          title="Certificates"
          educations={rightCertificates}
        />
      </div>
    </motion.div>
  );
};

export default Education;

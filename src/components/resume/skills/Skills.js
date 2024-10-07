import React from "react";
import { motion } from "framer-motion";
import { skillsLeftColumn,skillsRightColumn } from "../../../constants/SkillBarData";
import SkillBar from "./SkillBar";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Left column */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl lgl:text-4xl font-bodyFont">Development Skills</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
        {skillsLeftColumn.map(({ skill, percentage }) => (
            <SkillBar key={skill} skill={skill} percentage={percentage} />
          ))}
          </div>
          </div>
         

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl lgl:text-4xl font-bodyFont">Development Skills</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
           {skillsRightColumn.map(({ skill, percentage }) => (
            <SkillBar key={skill} skill={skill} percentage={percentage} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

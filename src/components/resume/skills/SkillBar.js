import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">{skill}</p>
      <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: `${percentage}%`, opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        >
          <span className="absolute -top-7 right-0">{percentage}%</span>
        </motion.span>
      </span>
    </div>
  );
};

export default SkillBar;

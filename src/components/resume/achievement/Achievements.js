import React from "react";
import { motion } from "framer-motion";
import {
  leftAchievements,
  rightAchievements,
} from "../../../constants/achievementData";
import AchievementSection from "./AchievementSection";

const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="flex-row lgl:flex-col">
        <AchievementSection
          title="Achievements"
          achievements={leftAchievements}
        />
      </div>
      <div>
        <AchievementSection
          title="Achievements"
          achievements={rightAchievements}
        />
      </div>
    </motion.div>
  );
};

export default Achievements;

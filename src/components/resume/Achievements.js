import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="flex-row lgl:flex-col">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017-2023</p>
          <h2 className="text-3xl lgl:text-4xl font-bodyFont">Achievements</h2>
        </div>
        <div
          className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black
border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Technological Proficiency"
            des="Mastered key technologies such as HTML, CSS, JavaScript, and popular frameworks (e.g., React) during academic projects, demonstrating a quick learning curve and commitment to staying current."
          />
          <ResumeCard
            title="Problem Solving"
            des="Resolved complex coding challenges during coursework, showcasing problem-solving abilities and a strong understanding of algorithms and data structures."
          />
          <ResumeCard
            title="Team Collaboration"
            des="Collaborated with team members on group projects, contributing to the successful completion of tasks and fostering effective teamwork."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017-2023</p>
          <h2 className="text-3xl lgl:text-4xl font-bodyFont">Achievements</h2>
        </div>
        <div
          className="mt-6 lgl:mt-14  h-[1000px] border-l-[6px] border-l-black
border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Responsive Design Implementation"
            des="Implemented responsive design principles in personal projects, ensuring optimal user experiences across various devices."
          />
          <ResumeCard
            title="Testing and Debugging"
            des="Demonstrated proficiency in testing and debugging during coursework, ensuring the delivery of high-quality, error-free code."
          />
          <ResumeCard
            title="Recognition "
            des="Received recognition for outstanding performance in a specific project or academic achievement. Received positive feedback from instructors for clean code and attention to user experience."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;

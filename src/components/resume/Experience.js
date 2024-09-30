import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex gap-10 font-titleFont lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2017-Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bodyFont">Experience</h2>
        </div>
        <div
          className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black
border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Community Health Worker"
            subTitle="Bayshore"
            result="2021-Present"
            des={
              <ul className="list-disc list-inside">
                <li>
                  Identifying and resolving healthcare-related issues, adapting
                  to unforeseen circumstances and making critical decisions
                </li>
                <li>
                  Effective communication with patients, their families, and
                  colleagues for conveying information clearly and providing
                  proper care.
                </li>
                <li>
                  Efficiently managing patient appointments, treatments, and
                  paperwork to ensure optimal care delivery.
                </li>
                <li>
                  Analyzing complex healthcare situations and making informed
                  decisions to provide the best care
                </li>
              </ul>
            }
          />
          <ResumeCard
            title="Technical Customer Service Representative"
            subTitle="SITEL"
            result="2020-2021 "
            des={
              <ul className="list-disc list-inside">
                <li>
                  The ability to identify and analyze software technical
                  problems, use logical reasoning to diagnose issues, and
                  propose effective solutions.
                </li>
                <li>
                  Explaining technical concepts and solutions in plain,
                  understandable language, avoiding jargon and acronyms that
                  customers may not be familiar with.
                </li>
                <li>
                  Demonstrating understanding and compassion for customers&#39;
                  frustrations and difficulties while providing support.
                </li>
                <li>
                  Collaborating with other technical support team members or
                  department to address complex or escalated customer problems.
                </li>
                <li>
                  Managing multiple customer inquiries and providing efficient,
                  timely responses to resolve Issues. Provided technical
                  support to team members on using software tools.
                </li>
              </ul>
            }
          />
          <ResumeCard
            title="Line Cook "
            subTitle="Hilton Hotel"
            result="2017-2021"
            des={
              <ul className="list-disc list-inside">
                <li>
                  Efficiently managing several tasks simultaneously, such as
                  cooking multiple orders with varying preparation times
                </li>
                <li>
                  Remaining composed and focused when handling a high volume
                  of orders and challenging situations.
                </li>
                <li>
                  Clear and effective communication with other kitchen staff,
                  including chefs, sous chefs, and other line cooks.
                  Collaborating with other kitchen staff to ensure smooth and
                  efficient kitchen operation.
                </li>
                <li>
                  The ability to manage multiple orders and tasks
                  simultaneously, ensuring each dish is prepared in a timely
                  manner.
                </li>
                <li>
                  Efficiently prioritize and complete tasks to meet service
                  deadlines, especially during busy periods.
                </li>
              </ul>
            }
          />
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Experience;

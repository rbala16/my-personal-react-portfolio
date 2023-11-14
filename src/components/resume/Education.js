import React from 'react'
import { motion } from "framer-motion";
import ResumeCard from './ResumeCard'
const Education = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
className='w-full flex gap-20'> 
<div >
<div className='py-12 font-titleFont' >
  <p className='text-sm text-designColor tracking-[4px]'>2017-2023</p>
  <h2 className='text-4xl font-bodyFont'>Education Quality</h2>
</div>
<div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black
border-opacity-30 flex flex-col gap-10'>
<ResumeCard
title="Full Stack Web Developer Bootcamp (April 2023-November 2023)"
subTitle="University of Toronto School of Continuing Studies"
result="99/100"
des="Completed immersive Full Stack Web Developer bootcamp with a focus on both front-end and back-end technologies.
Proficient in HTML, CSS, and JavaScript, with expertise in React.js for building dynamic user interfaces.
Developed server-side scripting skills using Node.js and Express for building robust and scalable back-end systems.
Applied database management principles with MongoDB and MySQL.
Deployed web applications in cloud environments such as AWS, github or Heroku.
Enhanced problem-solving skills and attention to detail through rigorous testing practices, including unit testing and end-to-end testing."
/>
<ResumeCard
title="Computer Engineering Technician (2017-2018)"
subTitle="Niagara College Canada"
result="86/100"
des="Completed a comprehensive Computer Engineering Technician program with a focus on digital electronics, microprocessor systems, computer networks, and operating systems.
Developed proficiency in programming languages such as HTML,CSS,Javascript,Mysql ,etc with a solid foundation in computer architecture and organization."
/>
<ResumeCard
title="12 Grade- Non-Medical (2014-2016)"
subTitle="Government Girls Sen. Sec School"
result="86/100"
des="Demonstrated strong analytical and problem-solving skills through advanced mathematics courses.
Excelled in physical sciences, including Physics and Chemistry, showcasing a keen interest in scientific principles.
Completed non-medical coursework with a focus on computer-related skills."
/>
</div>
</div>
<div>
{/* <div className='py-12 font-titleFont' >
  <p className='text-sm text-designColor tracking-[4px]'>2017-2019</p>
  <h2 className='text-4xl font-bodyFont'>Education Quality</h2>
</div> */}
{/* <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black
border-opacity-30 flex flex-col gap-10'>
<ResumeCard
title="Community Health Worker-Bayshore ()"
subTitle="University of Toronto"
result=""
des="Html,css"
/>
<ResumeCard
title="Full Stack Web Developer"
subTitle="2021-Present"
result=""
des="Html,css"
/>
<ResumeCard
title="12 Grade- Non-Medical"
subTitle="Government Girls Sen. Sec School"
result="86/100"
des="Html,css"
/>

</div> */}
</div>
</motion.div>
  )
}

export default Education
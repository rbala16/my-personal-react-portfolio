import React from 'react'
import { motion } from "framer-motion";
import ResumeCard from './ResumeCard'

const Experience = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
     className='w-full flex gap-20'> 
<div >
<div className='py-12 font-titleFont' >
  <p className='text-sm text-designColor tracking-[4px]'>2017-Present</p>
  <h2 className='text-4xl font-bodyFont'>Experience</h2>
</div>
<div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black
border-opacity-30 flex flex-col gap-10'>
<ResumeCard
title="Community Health Worker"
subTitle="Bayshore"
result="2021-Present"
des="Improving public health by addressing local healthcare needs and fostering community 
engagement."
/>
<ResumeCard
title="Technical Customer Service Representative"
subTitle="SITEL"
result="2020-2021 "
des="Support to customers experiencing technical issues with products or services"
/>
<ResumeCard
title="Line Cook "
subTitle="Hilton Hotel"
result="2017-2021"
des="Responsible for the preparation and assembly of dishes in a restaurant or food service 
establishment.
"
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
title="Full Stack Web Developer"
subTitle="University of Toronto"
result="99/100"
des="Html,css"
/>
<ResumeCard
title="Full Stack Web Developer"
subTitle="University of Toronto"
result="99/100"
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

export default Experience
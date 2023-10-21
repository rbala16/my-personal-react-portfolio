import React from 'react';
import Title from '../layouts/Title';
import ResumeCard from './ResumeCard';

const Resume = () => {
  return (
<section 
id='resume'
className='w-full py-20 border-b-[1px] border-b-black'
>
<div className='flex justify-center items-center text-center'>
<Title 
title='MY EXPERIENCE'
des='My Resume'/>
</div>  
<div>
  <ul className='w-full grid grid-cols-4'>
    <li className='resumeLi'>Education</li>
    <li className='resumeLi'>Professional Skills</li>
    <li className='resumeLi'>Experience</li>
    <li className='resumeLi'>Achievements</li>
  </ul>
</div>
<div className='w-full flex gap-20'> 
<div >
<div className='py-12 font-titleFont' >
  <p className='text-sm text-designColor tracking-[4px]'>2017-2019</p>
  <h2 className='text-4xl font-bodyFont'>Education Quality</h2>
</div>
<div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black
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
</div>
</div>
<div>
<div className='py-12 font-titleFont' >
  <p className='text-sm text-designColor tracking-[4px]'>2017-2019</p>
  <h2 className='text-4xl font-bodyFont'>Education Quality</h2>
</div>
<div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black
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

</div>
</div>
</div>
</section>
  )
}

export default Resume
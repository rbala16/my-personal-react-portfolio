import React from 'react'
import ResumeCard from './ResumeCard'

const Achievements = () => {
  return (
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
  )
}

export default Achievements
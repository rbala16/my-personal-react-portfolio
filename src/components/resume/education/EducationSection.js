import React from 'react'
import ResumeCard from '../ResumeCard';

const EducationSection = ({title,educations,year= "2017-2024"}) => {
  return (
    <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">{year}</p>
          <h2 className="text-3xl md:text-4xl font-bodyFont">{title}</h2>
        </div>
        <div
          className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black
border-opacity-30 flex flex-col gap-10"
        >
            {educations.map((education,index)=>(
                 <ResumeCard key={index} title={education.title} subTitle={education.subTitle} result={education.result} des={education.des} />
            ))}
            </div>
            </div>
  )
}

export default EducationSection
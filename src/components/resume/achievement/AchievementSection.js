import React from 'react'
import ResumeCard from '../ResumeCard'

const AchievementSection = ({ title, achievements,year = "2017-2024" }) => {
  return (
    <div>
     <div className="py-12 font-titleFont flex flex-col gap-4">
    <p className="text-sm text-designColor tracking-[4px]">{year}</p>
    <h2 className="text-3xl lgl:text-4xl font-bodyFont">{title}</h2>
  </div>
  <div
    className="mt-6 lgl:mt-14  h-[1000px] border-l-[6px] border-l-black
border-opacity-30 flex flex-col gap-10"
  >
     {achievements.map((achievement, index) => (
        <ResumeCard key={index} title={achievement.title} des={achievement.des} />
      ))}
    </div>
    </div>
  )
}

export default AchievementSection
import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard';
import {project1,project2,project3,project4,project5,project6} from '../../assets/index';

const Projects = () => {
  return (
    <section id='projects'
    className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center'>
<Title 
title='VISIT MY RECENT PROJECTS'
des='my Projects'/>
</div>
<div className='grid grid-cols-3 gap-14'>
<ProjectCard
title='Note Maker'
des='Create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.'
src={project1}
/>
<ProjectCard
 title= "The Tech Blog"
 des='Build a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. I can publish articles, blog posts, and my thoughts and opinions'
src={project4}
/>
<ProjectCard
 title= "Text-Editor"
 des='Build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser.'
src={project5}
/>
<ProjectCard
    title= "Generate Logo"
    des='Create a Node.js command-line application that takes in user input to generate a logo . The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.'
src={project2}
/>
<ProjectCard
title= "Weather Forecast"
des='Third-party API,used to check the five days weather of any city ,its will also display current weather too with icons.I had great experience working on this project'
src={project6}
/>
<ProjectCard
  title= "CRM-lite"
  des='A CRM-lite is a Green Grass Lawn Care Services for employees to book appointment in order to have fastest lawn services and provide excellent customer lawn care services experience. This app uses 3rd party API s such Weather API and Canadian holiday api.'
src={project3}
/>

</div>
    </section>
  )
}

export default Projects
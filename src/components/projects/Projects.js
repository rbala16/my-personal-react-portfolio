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
view='https://deploying-note-maker-3b48ad0df49a.herokuapp.com/'
githubsrc='https://github.com/rbala16/note-maker_rb'
/>
<ProjectCard
 title= "The Tech Blog"
 des='Build a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. I can publish articles, blog posts, and my thoughts and opinions'
src={project4}
view='https://tech-blog-rb-776385415434.herokuapp.com/'
githubsrc='https://github.com/rbala16/The-Tech-blog_rb'
/>
<ProjectCard
 title= "Text-Editor"
 des='Build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser.'
src={project5}
view='https://text-editor-rb-86dc49448406.herokuapp.com/'
githubsrc='https://github.com/rbala16/text-editor_rb'
/>
<ProjectCard
     title= "Fresh Fit -Express"
     des='A platform for heathy food that allows users to browse the menu, add items to a virtual shopping cart, tailor their orders to their preferences, and complete their purchases using credit or debit cards. '
     src={project2}
     view='https://dry-badlands-70011-5660fc692bea.herokuapp.com/'
     githubsrc='https://github.com/sumanpreetk01/FreshFit-Express'
/>
<ProjectCard
title= "Weather Forecast"
des='Third-party API,used to check the five days weather of any city ,its will also display current weather too with icons.I had great experience working on this project'
src={project6}
view='https://rbala16.github.io/five-days-weather-forecast/'
githubsrc='https://github.com/rbala16/five-days-weather-forecast'
/>
<ProjectCard
  title= "CRM-lite"
  des='A CRM-lite is a Green Grass Lawn Care Services for employees to book appointment in order to have fastest lawn services and provide excellent customer lawn care services experience. This app uses 3rd party API s such Weather API and Canadian holiday api.'
src={project3}
view='https://dinozio-design.github.io/CRM-lite/'
githubsrc='https://github.com/dinozio-design/CRM-lite'
/>

</div>
    </section>
  )
}

export default Projects
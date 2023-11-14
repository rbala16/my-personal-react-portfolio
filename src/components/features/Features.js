import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import {FaBars} from 'react-icons/fa'

const Features = () => {
  return (
    <section id='features'
     className='w-full  py-20   border-b-[1px] border-b-black'>
      <Title title='Features' des='What I do'/>
    <div className='grid grid-cols-3 gap-20'>
      <Card title='Web Application Development'
      des='Designing and developing user interfaces using front-end technologies such as HTML, CSS, and JavaScript.Implementing interactive and responsive features using front-end frameworks like React'
      icon={<FaBars/>}/>
        <Card title='Back-End Development'
      des='Working with databases, handling data storage, retrieval, and management using technologies like MySQL, MongoDB, etc'
      icon={<FaBars/>}/>
              <Card title='API Development'
      des='Creating and maintaining RESTful APIs for communication between the front-end and back-end systems.Integrating third-party APIs to enhance the functionality of web applications.'
      icon={<FaBars/>}/>
                   <Card title='Database Management'
      des='Designing and implementing database schemas.Writing database queries, optimizing database performance, and ensuring data integrity.'
      icon={<FaBars/>}/>
                      <Card title='Troubleshooting and Debugging'
      des='Identifying and resolving bugs, performance issues, and other technical challenges.Conducting root cause analysis and implementing solutions.'
      icon={<FaBars/>}/>
                     <Card title='Server Configuration and Deployment'
      des='Configuring and deploying web applications on servers.'
      icon={<FaBars/>}/>
    </div>
    </section>
  )
}

export default Features
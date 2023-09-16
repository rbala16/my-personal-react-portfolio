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
      <Card title='Lorem'
      des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad.'
      icon={<FaBars/>}/>
        <Card title='Lorem'
      des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad.'
      icon={<FaBars/>}/>
              <Card title='Lorem'
      des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad.'
      icon={<FaBars/>}/>
                   <Card title='Lorem'
      des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad.'
      icon={<FaBars/>}/>
                      <Card title='Lorem'
      des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad.'
      icon={<FaBars/>}/>
                     <Card title='Lorem'
      des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad.'
      icon={<FaBars/>}/>
    </div>
    </section>
  )
}

export default Features
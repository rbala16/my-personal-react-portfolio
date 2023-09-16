import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const LeftHeader = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (

<div className='w-1/2 flex flex-col gap-20'>
  <div className='flex flex-col gap-5'>
    <h4 className='text-lg font-normal'>Welcome to my World</h4>
    <h1 className='text-6xl font-bold text-white'>
      Hi, I'm {" "}
      <span className='text-designColor capitalize'>Rajni Bala</span>
    </h1>
    <h2 className='text-4xl font-bold text-white'> 
    a <span>{text}</span>
    <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
          </h2>
    <p className='text-base font-bodyFont leading-6 tracking-wide'>
    I am an enthusiastic learner who has a deep passion for acquiring new skills and staying up-to-date with the latest technologies. My goal is to become a full-stack web developer, and I find great joy in coding while constantly seeking opportunities to expand my knowledge.
    </p>
 
</div >
<div>
<h2 className='text-base uppercase font-titleFont mb-4'>
  Find me in
</h2>
<div className='flex gap-4'>
  <span className='bannerIcon'>
    <FaFacebookF/>
  </span>
  <span className='bannerIcon'>
    <FaTwitter/>
  </span>
  <span className='bannerIcon'>
    <FaLinkedinIn/>
  </span>
</div>
</div>
</div>

  )
}

export default LeftHeader
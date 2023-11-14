import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Contactpic } from '../../assets';

const ContactLeft = () => {
  return (
    <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center ' >
    <img className='w-full h-64 object-cover rounded-lg mb-2'
    src={Contactpic} alt='contactImg'/>
    <div className='flex flex-col gap-4'>
      <h3 className='text-3xl font-bold text-white mb-3'>Rajni Bala</h3>
    <p className='text-lg font-normal text-gray-400'>Full Stack Web Developer</p>
    <p className='text-base text-gray-400'>nsnnnnnn</p>
    <p className="text-base text-gray-400 flex items-center gap-3">
              Phone: <span className="text-lightText">+1 2268994214</span>
            </p>
            <p className="text-base text-gray-400 flex items-center gap-3">
              Email:{''} <span className="text-lightText">bala12rajni@gmail.com</span>
            </p>
    </div>
    <div className="flex flex-col gap-4">
            <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
              <span className="bannerIcon">
                <FaTwitter />
              </span>
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
        </div>
  )
}

export default ContactLeft
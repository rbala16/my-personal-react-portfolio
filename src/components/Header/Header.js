import React from 'react'
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

const Header = () => {
  return (
<section
 id='home'
  className='w-full  pt-10 pb-20 flex items-center border-b-[1px] font-titleFont border-b-black'>

<LeftHeader/>
<RightHeader/>

</section>
  )
}

export default Header
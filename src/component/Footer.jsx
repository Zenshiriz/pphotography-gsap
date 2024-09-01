import React from 'react'

import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { navLinks } from './utils';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const navinfo = [
    {
      id: 1,
      info: "9844235429",
      icons: <FaPhone />,
    },
    {
      id: 2,
      info: "riza_gg@gmail.com",
      icons: <MdEmail />,
    },
    {
      id: 3,
      info: "riza_photography",
      icons: <RiInstagramFill />,
    },
  ];
  return (
    <footer className='px-4 md:px-8 lg:px-14 py-8 pt-10 bg-nav-bg bg-center bg-cover  text-white overflow-hidden' >
       <h3 className={`name-title pb-3 pt-6 drop-shadow-lg text-2xl`}>Mohammad Riza</h3>
       <ul className="flex gap-x-8 md:gap-x-12 flex-wrap  gap-y-6">
          {navLinks.map((link) => (
            <li key={link.id} >
              <p className={` text-gray-50 text-xl  capitalize   transition-all duration-300 cursor-pointer`}>
                {link.title}
              </p>
            </li>
          ))}
        </ul>
        <div className=" flex flex-col md:flex-row md:gap-x-8 lg:gap-x-12   gap-y-6 ">
          {navinfo.map((info) => (
            <div key={info.id}>
              <div className={` flex items-center gap-2 cursor-pointer  text-lg  lg:text-xl`}>
                <div className={` text-white translate-y-10`}>{info.icons}</div>
                <p className={` text-white  translate-y-10`}>{info.info}</p>
              </div>
            </div>
          ))}
        </div>
        <SocialIcons footer={true} className='pt-20 gap-4 items-center ' />

        <div className=' flex justify-between pt-20'>
          <p className='text-sm'>all rights are preserved</p>
          <p className='text-sm'>&copy; copyright {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer

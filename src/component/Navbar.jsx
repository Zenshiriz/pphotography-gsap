import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CgMenuLeftAlt } from "react-icons/cg";
import ButtonComponent from "./ButtonComponent";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

import SocialIcons from "./SocialIcons";
import { useState } from "react";
import {  navLinks } from "./utils";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu);
  // const navLinks = [
  //   {
  //     id: 1,
  //     title: "Home",
  //     path: "/",
  //   },
  //   {
  //     id: 2,
  //     title: "Who am i",
  //     path: "/About",
  //   },
  //   {
  //     id: 3,
  //     title: "Portfolio",
  //     path: "/portfolio",
  //   },
  // ];
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

  useGSAP(() => {
    gsap.to(".name-title", { duration: 1, y: -32 });
    gsap.to(".menu-title", { duration: 1, y: 0, });
    gsap.to(".nav-bg-nav-bg",{ duration: 1, height: "100%", minHeight:"100vh", y:0, ease:"power2"})
    gsap.from(".bg-transparent",{ duration: 1, height: "0%", minHeight:"0vh", ease:"power2"})
   
    gsap.fromTo(".para",{
      opacity:0,
      y:20
    },{
      opacity:1,
      y:0,
      delay:1,
      stagger:0.1
    })
  }, [showMenu]);
  return (
    <nav
      className={`${showMenu ? "bg-nav-bg nav-bg-nav-bg":" bg-transparent"} fixed w-full min-h-0  h-0 bg-no-repeat bg-left-bottom bg-cover z-50`}
    >
      <div className=" flex justify-between items-center px-5 py-3 md:px-8 md:py-4 lg:px-12">
        <div className=" bg-white w-fit p-2 rounded-full transition-all duration-300" onClick={toggleMenu}>
        { !showMenu? <CgMenuLeftAlt className=" text-black text-2xl font-bold" />:
          <MdOutlineClose className=" text-black text-2xl font-bold" />}
        </div>
        <div className="h-7 overflow-hidden self-center text-center">
          <p className={`${showMenu ? 'menu-title':""} name-title drop-shadow-lg`}>Mohammad</p>
          <p className={`${showMenu ? 'menu-title':""} name-title shadow-lg`}>Riza</p>
        </div>
        <ButtonComponent children={"Contact Us"} />
      </div>
    {showMenu &&  <div className={`${showMenu ? "":"hidden"} pt-14 md:pt-0 md:pb-14 h-[100%] flex flex-col items-center md:justify-center`}>
        <ul className="flex flex-col md:flex-row md:gap-x-8 lg:gap-x-12 flex-wrap justify-center items-center gap-y-6">
          {navLinks.map((link) => (
            <li key={link.id} className={`${showMenu? 'active-menu-text':""}`}>
              <p className={`${showMenu ? 'para' :""} text-white text-3xl lg:text-4xl uppercase font-bold  transition-all duration-300 cursor-pointer`}>
                {link.title}
              </p>
            </li>
          ))}
        </ul>
        <div className=" flex flex-col md:flex-row md:gap-x-8 lg:gap-x-12 justify-center items-center gap-y-6 mt-12">
          {navinfo.map((info) => (
            <div key={info.id}>
              <div className={`${showMenu ? 'active-menu-text':""} flex items-center gap-2 cursor-pointer  text-lg  lg:text-xl`}>
                <div className={`${showMenu ? 'para':""} text-white translate-y-10`}>{info.icons}</div>
                <p className={`${showMenu ? 'para':""} text-white  translate-y-10`}>{info.info}</p>
              </div>
            </div>
          ))}
        </div>
        <SocialIcons className={' hidden md:block md:absolute gap-y-8 flex-col right-3 translate-x-[-50%] top-[50%] space-y-4'} showMenu={showMenu}/>

        <SocialIcons className={' space-x-4 absolute bottom-6 md:hidden'} showMenu={showMenu}/>
      </div>}
    </nav>
  );
};

export default Navbar;

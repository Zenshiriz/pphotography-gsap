import React, { useRef } from 'react'
import aboutImg from "../assets/about-img.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger); 

const AboutSection = () => {
  const aboutRef = useRef()
  useGSAP(()=>{
    const about = aboutRef.current;

    if (about) {
      gsap.to("#about-img",{
        opacity:1,
        duration:1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#about-img',
          start: 'center bottom'
        }
      })
      gsap.to("#about-par",{
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#about-par',
          start: '20% bottom'
        }
      })
    }
  },[])
  return (
    <div className=' bg-black py-3 flex flex-col items-center'
     ref={aboutRef}
    >
      <div>
        <img src={aboutImg} className=' w-screen h-full opacity-0 max-h-[800px] object-cover aspect-video object-bottom' alt="img" id='about-img' />
      </div>
      <p className='  text-base md:text-lg text-white py-4 md:py-6 md:px-8 capitalize px-8 lg:px-12  md:max-w-[600px] lg:max-w-[1200px] lg:py-8 lg:text-xl tracking-wide leading-36 translate-y-10 opacity-0' id='about-par' >Meet riza, your new creative director and visual connoisseur. With a background in commercial and photojournalistic photography, he's a multidisciplinary visual creator with a focus on film and storytelling. From shooting weddings to founding two production company's in the last 5 years, fēlan films & emble studio. Andy collaborates with top-tier clients to create meaningful, impactful content. He also teaches, works on live stream events, and captures commercial photography & video. Currently, he's a commercial director based in Bright Victoria, creating content for a variety of clients ranging from Melbourne to Sydney and all along the East Coast of Australia.</p>
    </div>
  )
}

export default AboutSection

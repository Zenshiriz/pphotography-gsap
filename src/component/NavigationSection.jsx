import React, { useRef } from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger); // Ensure ScrollTrigger is registered

const NavigationSection = () => {
  const containerRef = useRef(null); 

  useGSAP(
    () => {
      const containers = containerRef.current;

    if (containers) {
      gsap.to(containers.querySelectorAll(".containers"), {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.containers',
          start: '20% bottom'
        }
      });


    }
  }, []); 
  const navCardInfo = [
    {
      id: 1,
      imgUrl: card1,
      title: "My Shots",
      link: "#",
    },
    {
      id: 2,
      imgUrl: card2,
      title: "Education",
      link: "#",
    },
    {
      id: 3,
      imgUrl: card3,
      title: "Contact",
      link: "#",
    },
    {
      id: 4,
      imgUrl: card4,
      title: "About",
      link: "#",
    },
  ];

  return (
    <div className=" bg-black py-8" ref={containerRef} >
      <div
        className=" flex gap-4 md:gap-6 lg:gap-10 flex-wrap px-6 py-6 md:py-8  lg:py-12 justify-center items-center "
      >
        {navCardInfo.map((item, index) => (
          <div
            className={`bg-[url(${item.imgUrl})] bg-left-bottom bg-no-repeat bg-cover h-[350px] w-[250px] flex justify-center items-end pb-4 containers translate-y-10 opacity-0`}
            style={{
              backgroundImage: `url(${item.imgUrl})`,
              marginTop: ` ${index * 2}px`,
            }}
            key={item.id}
          >
          <p className=" text-white uppercase">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationSection;

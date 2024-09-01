import React from "react";
import heroBg from "../assets/hero-bg.png";
import SocialIcons from "./SocialIcons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.to(".text-title", {
      ease: "power1.inOut",
      duration: 1,
      opacity: 1, // Animate from the initial opacity
      y: 0,
      stagger: 0.5
    });
  }, []);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="flex flex-col justify-between items-center w-full h-screen pb-8 pt-28 lg:pt-32">
        <h1 className="goblin-one-regular text-3xl md:text-4xl lg:text-5xl font-bold text-white w-fit uppercase text-center md:leading-[3rem] tracking-wider text-title opacity-0 translate-y-10" id="text">
          new <br />
          Perspective <br />
          to view
        </h1>
        <SocialIcons className="hidden md:block md:absolute gap-y-8 flex-col right-3 translate-x-[-50%] top-[50%] space-y-4" />
        <p className="text-white text-sm font-light text-title opacity-0 translate-y-10">Grouse Vista Trailhead, L-1200, Camas, WA, USA</p>
      </div>
    </div>
  );
};

export default Hero;
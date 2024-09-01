import React, { useEffect, useRef } from 'react';
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import gsap from "gsap";

const SocialIcons = ({ className, showMenu, footer }) => {
    const socialIconsRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline();

        if (showMenu) {
            timeline
                .to(socialIconsRef.current.querySelectorAll('.text-title'), {
                    ease: "power1.inOut",
                    duration: 0.5,
                    opacity: 1,
                    y: 0,
                    stagger: 0.5,
                })
                .fromTo(socialIconsRef.current.querySelectorAll('.text-title'), {
                    opacity: 0,
                    y: 20,
                }, {
                    opacity: 1,
                    y: 0,
                    delay: 1,
                    stagger: 0.1,
                });
        } else {
            // Animation for when showMenu is false (optional)
            // ...
        }

        return () => timeline.kill(); // Cleanup for unmounted component
    }, [showMenu]);

    return (
        <div ref={socialIconsRef} className={`flex ${className || ""}`}>
            <FaFacebookF className={`${showMenu ? "para translate-y-10 opacity-0" : "text-title translate-y-10 opacity-0"} ${footer ? "opacity-1 translate-y-0":"translate-y-10 opacity-0"} text-white text-2xl `} />
            <RiInstagramFill className={`${showMenu ? "para translate-y-10 opacity-0" : "text-title translate-y-10 opacity-0"} ${footer ? "opacity-1 translate-y-0":"translate-y-10 opacity-0"} text-white text-2xl `} />
            <FaTwitter className={`${showMenu ? "para " : "text-title "} ${footer ? "opacity-1 translate-y-0":"translate-y-10 opacity-0"} text-white text-2xl `} />
        </div>
    );
};

export default SocialIcons;
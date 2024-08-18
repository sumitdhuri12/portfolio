import React, { useState, useEffect, useCallback } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);


function BackToTop({setHovering}) {
  const textEnter = () => setHovering(true);
  const textLeave = () => setHovering(false);
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    // Using requestAnimationFrame for better performance
    window.requestAnimationFrame(() => {
      setVisible(window.scrollY > 1600);
    });
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { scrollTo: { y: 0 }, duration: 0.5 });
    console.log(window);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <>
        {visible && (<a onClick={scrollToTop} className="bg-[#000] w-[50px] h-[50px] rounded-full fixed right-[2%] bottom-[20%] text-center z-[9998] grid place-items-center">
        <IoIosArrowUp className="text-[#bcbcbc] text-3xl" />
        </a>)}
    </>
  );
}

export default BackToTop;

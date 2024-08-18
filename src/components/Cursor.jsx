import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

function Cursor({ hovering }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Mouse move event listener
    const handleMouseMove = (event) => {
      gsap.to(cursor, {
        duration: 0.1,
        x: event.clientX - cursor.offsetWidth / 2,
        y: event.clientY - cursor.offsetHeight / 2,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (hovering) {
      gsap.set(cursorRef.current, { mixBlendMode: "normal" });
      gsap.to(cursorRef.current, {
        scale: 2.5,
        duration: 0.3,
        opacity:0.7,
        ease: "back.out(1.7)",
      });
    } else {
      gsap.set(cursorRef.current, { mixBlendMode: "difference" });
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.3,
        opacity:1,
        ease: "back.out(1.7)",
      });
    }
  }, [hovering]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-[30px] h-[30px] bg-white rounded-full z-[9999] pointer-events-none mix-blend-difference hidden md:block"
      />
    </>
  );
}

export default Cursor;

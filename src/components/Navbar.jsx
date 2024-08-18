import React, { useState } from "react";
import { gsap } from "gsap";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    animateMenu();
  };

  const handleScrollTo = (id) => {
    gsap.to(window, { duration: 1, scrollTo: `#${id}` });
  };

  const animateMenu = () => {
    const tl = gsap.timeline();
    if (!menuOpen) {
      tl.to(".navbar", { duration: 0.3, background: "#fff" },0)
        .to(".line1",{ duration: 0.3, rotate: 45, y: 10, background: "#000" },0)
        .to(".line2", { duration: 0.3, opacity: 0 }, 0)
        .to(".line3",{ duration: 0.3, rotate: -45, y: -10, background: "#000" },0)
        .to(".menu", { duration: 0.5, opacity: 1, ease: "power3.inOut" });
    } else {
      tl.to(".menu", {
        duration: 0.3,
        opacity: 0,
        ease: "power3.inOut",
      })
        .to(".navbar", { duration: 0.3, background: "transparent" },0)
        .to(".line1", { duration: 0.3, rotate: 0, y: 0, background: "#fff" }, 0)
        .to(".line2", { duration: 0.3, opacity: 1, background: "#fff" }, 0)
        .to(".line3",{ duration: 0.3, rotate: 0, y: 0, background: "#fff" },0);
    }
  };

  return (
    <>
      <nav className="navbar w-full absolute z-[999] px-[7%] py-5 uppercase hidden md:flex">
        <ul className="w-full flex justify-between text-lightgray text-3xl">
          <li onClick={() => handleScrollTo("home")}>Home</li>
          <li onClick={() => handleScrollTo("projects")}>Projects</li>
          <li onClick={() => handleScrollTo("skills")}>Skills</li>
          <li onClick={() => handleScrollTo("contact")}>Contact</li>
        </ul>
      </nav>
      <nav className="navbar w-[82%] absolute z-[999] px-[3%] py-5 mx-[9%] uppercase flex md:hidden rounded-b-md">
          <div
            className="hamburger w-[30px] h-[30px] flex flex-col justify-around z-[10]"
            onClick={toggleMenu}
          >
            <div className="line line1 w-full h-[4px] bg-white rounded-md"></div>
            <div className="line line2 w-full h-[4px] bg-white rounded-md"></div>
            <div className="line line3 w-full h-[4px] bg-white rounded-md"></div>
          </div>
          <div className="menu opacity-0 pl-[15%]">
            <ul className="flex flex-col justify-between text-black text-3xl">
              <li onClick={() => handleScrollTo("home")}>Home</li>
              <li onClick={() => handleScrollTo("projects")}>Projects</li>
              <li onClick={() => handleScrollTo("skills")}>Skills</li>
              <li onClick={() => handleScrollTo("contact")}>Contact</li>
            </ul>
          </div>
      </nav>
    </>
  );
}

export default Navbar;

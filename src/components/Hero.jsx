import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Mac from "../models/Mac";

const Hero = ({setHovering}) => {

  const textEnter = () => setHovering(true);
  const textLeave = () => setHovering(false);

  return (
    <section id="hero">
      <div className="wrapper bg-darkgray h-screen flex flex-col md:flex-row">
        <div className="w-full h-full min-h-96 relative">
          <div className="banner_canvas absolute top-0 left-0 w-full h-full">
            <Canvas
              className=""
              camera={{
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [-3, 1.5, 4],
              }}
            >
              <Mac/>
            </Canvas>
          </div>
          <div className="hero-content-wrapper text-white w-full h-full lg:w-6/12 flex flex-col justify-end lg:justify-center items-start pl-0 lg:pl-24 2xl:pl-40 relative">
            <div className="home_title px-5 lg:px-0">
              <h2 className="text-6xl xl:text-9xl lg:text-8xl" >
                <span className="text-orange">Hello</span>, I'm
              </h2>
              <h2 className="text-6xl xl:text-9xl lg:text-8xl uppercase">
                Sumit Dhuri
              </h2>
            </div>
            <div className="description px-5 lg:px-0">
              <h5 className="text-3xl pt-4 actor-regular">
                <span className="text-orange">Creative</span> Web Developer
              </h5>
            </div>
            <div className="resume-cta px-5 lg:px-0 mt-10">
              <a className="text-xl font-light px-8 py-3 border rounded-full" href="https://drive.google.com/file/d/1DilBCDgbJHsrz1tgoLbU9aanfxO9oO3c/view" target="blank" onMouseEnter={textEnter} onMouseLeave={textLeave}>Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

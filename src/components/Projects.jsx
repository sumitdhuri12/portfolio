import React from "react";

const Projects = ({setHovering}) => {
  const textEnter = () => setHovering(true);
  const textLeave = () => setHovering(false);

  return (
    <section id="projects" className="relative px-10 bg-darkgray pb-[5vh] md:pb-[30vh]">
      <div className="pt-12">
        <p className="section_title text-lightgray text-center uppercase">Projects</p>
      </div>
      <div className="wrapper flex">
        <div className="w-full h-full grid grid-cols-12 gap-4 text-lightgray">
          <div className="col-span-12 md:col-span-4 py-4 md:py-9 relative">
            <a href="https://disneyhotstar-clone-two.vercel.app/" target="blank" onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <img className="" src="./projects/disney_clone.png" alt="" />
            </a>
            <h4 className="text-3xl pt-4 uppercase">
              Disney Clone
            </h4>
            <p className="actor-regular pb-4">
              Disney Website clone using React, Tailwind and Vite
            </p>
          </div>
          <div className="col-start-1 md:col-start-7 col-span-12 md:col-span-6 py-4 md:py-9 relative">
            <a href="https://riyapanchal.com/" target="blank" onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <img className="" src="./projects/riya.png" alt="" />
            </a>
            <h4 className="text-3xl pt-4 uppercase">
              Riya Panchal
            </h4>
            <p className="actor-regular pb-4">Makeup and Mehendi Artist</p>
          </div>
          <div className="col-start-1 md:col-start-8 col-span-12 md:col-span-4 py-4 md:py-9">
            <a href="https://threeportalscene.netlify.app/" target="blank" onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <img src="./projects/portal_scene.png" alt="" />
            </a>
            <h4 className="text-3xl pt-4 uppercase">
            Portal
            </h4>
            <p className="actor-regular pb-4">Portal scene using React three fiber</p>
          </div>
          <div className="col-start-1 md:col-start-2 col-span-12 md:col-span-7 py-4 md:py-9">
            <a href="https://threehauntedhouse.netlify.app" target="blank" onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <img src="./projects/haunted_house.png" alt="" />
            </a>
            <h4 className="text-3xl pt-4 uppercase">
              Haunted House
            </h4>
            <p className="actor-regular pb-4">Haunted house scene using Three.js</p>
          </div>
          <div className="col-start-1 md:col-start-5 col-span-12 md:col-span-4 py-4 md:py-9">
            <a href="https://www.pandb.studio/mahadev/" target="_blank" onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <img src="./projects/mahadev.png" alt="" />
            </a>
            <h4 className="text-3xl pt-4 uppercase">
              Mahadeva
            </h4>
            <p className="actor-regular pb-4">
              Webpage for downloading Mahadeva art
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

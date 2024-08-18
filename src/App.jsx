import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import { useState } from "react";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";

export default function App() {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div>
        <Cursor hovering={hovering} />
        <Navbar />
        <BackToTop />
        <Hero
          id="home"
          title="Home"
          className="h-screen w-screen max-w-screen-xl mx-auto flex flex-col item-start justify-center"
          setHovering={setHovering}
        />
        <Projects id="projects" title="Projects" setHovering={setHovering} />
        <Skills id="skills" title="Skills" />
        <Contact id="contact" title="Contact" />
      </div>
    </>
  );
}

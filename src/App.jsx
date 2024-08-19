import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import { useEffect, useState } from "react";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

export default function App() {
  const [hovering, setHovering] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust this time to simulate content loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader loading={loading} />}
      <div>
        <Cursor hovering={hovering} />
        <Navbar />
        <BackToTop setHovering={setHovering}/>
        <Hero
          id="home"
          title="Home"
          className="h-screen w-screen max-w-screen-xl mx-auto flex flex-col item-start justify-center"
          setHovering={setHovering}
        />
        <Projects id="projects" title="Projects" setHovering={setHovering} />
        <Skills id="skills" title="Skills" />
        <Contact id="contact" title="Contact" setHovering={setHovering}/>
      </div>
    </>
  );
}

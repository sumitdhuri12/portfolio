import React, { useRef } from 'react'
import { motion, useTransform, useScroll } from "framer-motion";

const Verticalscroll = () => {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["45%", "-45%"]);

   // Helper function to get a random justification class
  

    return (
      <section ref={targetRef} className="relative h-[400vh] md:h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex flex-col h-screen items-center overflow-hidden">
          <p className="section_title text-center uppercase text-lightgray pt-[8vh] md:pt-4 pb-[8vh] md:pb-0">Skills</p>
          <motion.div style={{ x }} className="flex justify-end content-end gap-1 h-[74vh] md:h-[88vh] pb-6">
            {cards.map((card, index) => {
              return <Card card={card} key={card.id} index={index} />;
            })}
          </motion.div>
        </div>
    </section>
    );
};

const Card = ({ card, index }) => {
  return (
    <div
      key={card.id}
      className={`card group relative w-full overflow-hidden bg-neutral-200 flex flex-col px-2`}
    >
      <div className={`w-[180px] h-[160px] min-h-min z-10 grid place-items-center rounded-sm`} style={{ backgroundColor: card.bg }}>
        <img
          src={card.url}
          className="w-[80px] h-auto"
        />
      </div>
      <div className='flex justify-between pt-1 actor-regular' >
        <p className="text-sm font-black uppercase text-lightgray">
          {card.title}
        </p>
        <p className="text-sm font-black uppercase text-lightgray">
          {card.exp}
        </p>
      </div>
    </div>
  );
};


const cards = [
  {
    url: "./skills_Icons/html.png",
    title: "HTML",
    bg:"#FFA15D",
    exp:"6+ years",
    id: 1,
  },
  {
    url: "./skills_Icons/css.png",
    title: "CSS",
    bg:"#32A9DD",
    exp:"6+ years",
    id: 2,
  },
  {
    url: "./skills_Icons/JavaScript.png",
    title: "JAVASCRIPT",
    bg:"#D6C54B",
    exp:"6+ years",
    id: 3,
  },
  {
    url: "./skills_Icons/jquery.png",
    title: "JQUERY",
    bg:"#000000",
    exp:"5+ years",
    id: 4,
  },
  {
    url: "./skills_Icons/react.png",
    title: "React",
    bg:"#008AA4",
    exp:"3+ years",
    id: 5,
  },
  {
    url: "./skills_Icons/Three.js.png",
    title: "Three.js",
    bg:"#ffffff",
    exp:"2+ years",
    id: 6,
  },
  {
    url: "./skills_Icons/gsap.png",
    title: "GSAP",
    bg:"#B4E752",
    exp:"4+ years",
    id: 14,
  },
  {
    url: "./skills_Icons/Tailwind.png",
    title: "Tailwind",
    bg:"#000000",
    exp:"1+ years",
    id: 7,
  },
  {
    url: "./skills_Icons/framer-motion.png",
    title: "Framer Motion",
    bg:"#4C0A80",
    exp:"1+ years",
    id: 13,
  },
  {
    url: "./skills_Icons/Git.png",
    title: "Git",
    bg:"#F7DF7C",
    exp:"1+ years",
    id: 8,
  },
  {
    url: "./skills_Icons/PHP.png",
    title: "PHP",
    bg:"#BFC2EE",
    exp:"4+ years",
    id: 12,
  },
  {
    url: "./skills_Icons/Sass.png",
    title: "SCSS",
    bg:"#FFCAE5",
    exp:"2+ years",
    id: 9,
  },
  {
    url: "./skills_Icons/Blender.png",
    title: "Blender",
    bg:"#95c5f0",
    exp:"1+ years",
    id: 16,
  },
  {
    url: "./skills_Icons/Vercel.png",
    title: "Vercel",
    bg:"#E0F4F5",
    exp:"1+ years",
    id: 10,
  },
  {
    url: "./skills_Icons/Vite.png",
    title: "Vite",
    bg:"#494CBF",
    exp:"1+ years",
    id: 11,
  },
];

export default Verticalscroll;
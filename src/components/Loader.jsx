import React, { useEffect, useState } from 'react'

function Loader({loading}) {
    const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.to('.loader', {
        duration: 1,
        opacity: 1,
        y: -50,
        ease: 'power4.out',
        onComplete: () => setPercentage(100),
      });
    }
  }, [loading]);

  return (
    <div className="loader h-screen w-full fixed grid place-content-center bg-darkgray z-[9999]">
      <div className='text-4xl uppercase font-bold text-white'>{percentage}%</div>
    </div>
  )
}

export default Loader
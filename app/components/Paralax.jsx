import Image from "next/image";
import React, { useEffect } from "react";

const ParallaxComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.getElementsByClassName("parallax");
      for (let i = 0; i < parallaxElements.length; i++) {
        const element = parallaxElements[i];
        const distance = element.getBoundingClientRect().top;
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translateY(${distance * speed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="parallax" data-speed="0.5">
        <Image className="" src="/car.png" alt="car" width={100} height={100} />
      </div>
      <div className="parallax" data-speed="0.8">
        {/* Your parallax content here */}
      </div>
      {/* Add more parallax sections as needed */}
    </div>
  );
};

export default ParallaxComponent;

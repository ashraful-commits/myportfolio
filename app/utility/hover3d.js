"use client";
import React, { useEffect, useState } from "react";

function hover3d(ref, { x = 0, y = 0, z = 0 }) {
  const [coords, setCoords] = useState({ x: 0, y: 0, z: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { offsetWidth: width, offsetHeight: height } = ref.current;
    const { clientX, clientY } = e;
    const x = (clientX - width / 2) / width;
    const y = (clientY - height / 2) / height;
    setCoords({ x, y });
    console.log({ x, y });
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };
  const handleMouseLeave = () => {
    setHovering(false);
  };
  console.log(hovering);
  useEffect(() => {
    const { current } = ref;
    console.log(current);
    current.addEventListener("mousemove", handleMouseMove);
    current.addEventListener("mouseenter", handleMouseEnter);
    current.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      current.removeEventListener("mousemove", handleMouseMove);
      current.removeEventListener("mouseenter", handleMouseEnter);
      current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);
  const { x: xCoord, y: yCoord } = coords;
  const xTransfrom = hovering ? xCoord * x : 0;
  const yTransfrom = hovering ? yCoord * y : 0;
  const zTransform = hovering ? z : 0;
  const transfrom = `perspective(1000px) rotateX(${xTransfrom}deg) rotateY(${yTransfrom}deg) rotateZ(${zTransform}deg)`;
  const transition = hovering ? "all 0.3s ease-in-out" : "";
  return { transfrom, transition };
}

export default hover3d;

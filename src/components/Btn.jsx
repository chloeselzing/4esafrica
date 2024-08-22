"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"


const Button = ({ href, text, color, border, borderColor,textColor }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      window.location.href = href;
      setIsClicked(false);
    }, 200);
  };

  return (
    <button
      className={`custom-button ${color} ${textColor}  ${border} ${borderColor} text-whiteBackground font-bold lg:py-2 lg:px-4 py-1 px-[10px] lg:min-w-[100px]  min-w-[90px] min-h-[20px] rounded md:text-[.7rem] lg:text-[15px] hover:bg-[#088bf7]`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;

"use client";

import React from "react";
import Btn from "./Btn";
import Image from "next/image";

const Card = ({ title, image, text, buttonText, buttonLink, text2, href }) => {
  return (
    <div className="w-[80vw] rounded-md mt-0 shadow-md overflow-hidden flex flex-col items-start bg-whiteBackground hover:bg-gray-200 lg:w-[30vw] md:w-[30vw] lg:h-[90vh] md:h-[70vh] p-2">
      <Image
        className="w-full h-[200px] object-cover"
        src={image}
        alt={title}
      />

      <div className="flex flex-col justify-center items-start py-2 px-4 gap-2">
        <h3 className="text-lg font-bold text-blackBackground">{title}</h3>
        <p className="text-sm text-gray-700 ">{text}</p>
        <p className="text-sm text-gray-700">{text2}</p>
      </div>

      <div className="grid w-full lg:w:auto lg:flex lg:justify-start bg-inherit items-center mt-auto px-4 py-2">
        <Btn
          text={buttonText}
          onClick={() => buttonLink && window.open(buttonLink, "_blank")}
          color="bg-primary"
          href={href}
        />
      </div>
    </div>
  );
};

export default Card;

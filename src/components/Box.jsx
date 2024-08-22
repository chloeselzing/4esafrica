import React from "react";

const Box = ({ heading, text, color,hover }) => {
  return (
    <div
      className={`lg:w-[350px] lg:h-[250px] w-[450px] h-[300px] border grid p-5 text-center rounded-lg ${color} ${hover}    place-items-start text-whiteBackground`}
    >
      <div className="h-auto grid gap-2">
        <h3 className="lg:text-xl text-2xl font-bold">{heading}</h3>
        <p className="lg:text-[17px] text-[20px]">{text}</p>
      </div>
    </div>
  );
};

export default Box;

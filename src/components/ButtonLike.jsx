import React from "react";

const ButtonLike = ({ color,  text }) => {
  return <li className={`${color} text-whiteBackground px-4 py-2 rounded-md`}>{text}</li>;
};

export default ButtonLike;

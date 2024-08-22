import React from "react";

const FooterLinks = ({
  text,
  link1,
  link2,
  link3,
  link4,
  label1,
  label2,
  label3,
  label4,
}) => {
  return (
    <div className="grid gap-5 lg:text-[20px] text-[13px] lg:mt-0 mt-8">
      <h3 className="lg:text-2xl text-[15px] font-bold">{text}</h3>
      <a href={link1}>{label1}</a>
      <a href={link2}>{label2}</a>
      <a href={link3}>{label3}</a>
      <a href={link4}>{label4}</a>
    </div>
  );
};

export default FooterLinks;

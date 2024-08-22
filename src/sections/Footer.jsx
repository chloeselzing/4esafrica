import FooterLinks from "@/components/FooterLinks";
import { links } from "@/data/links";
import React from "react";

const Footer = () => {
  return (
    <section
      id="footer"
      className="lg:relative absolute shadow text-whiteBackground w-full  bg-blackBackground  lg:px-[100px] px-[80px] lg:h-auto" 
    >
      <div className=" bottom-0 lg:text-left  text-left container lg:mx-auto lg:py-8 py-4 md:flex md:flex-wrap md:items-center grid grid-cols-2 lg:grid lg:grid-cols-3  lg:justify-items-center md:justify-between border-b ">
        {links.map((Link, index) => (
          <FooterLinks
            key={index}
            text={Link.text}
            link1={Link.link1}
            link2={Link.link2}
            link3={Link.link3}
            link4={Link.link4}
            label1={Link.label1}
            label2={Link.label2}
            label3={Link.label3}
            label4={Link.label4}
          />
        ))}
      </div>
        <p className="text-center py-5 lg:text-[17px] text-[12px]">
        Powered By{" "}
        <a
          href="https://corestream.ng/"
          className="text-[#09CCFF] hover:underline"
        >
          CorestremNG.<></>
        </a>
        <></> © 2024 4EsAfrica. All rights reserved
      </p>
     
    </section>
  );
};

export default Footer;

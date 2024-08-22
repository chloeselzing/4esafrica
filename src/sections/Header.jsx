"use client";
import React, { useState } from "react";
import * as Components from "@/components";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { NavLinks } from "@/data/NavLinks";
import { Buttons } from "@/data/Buttons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  return (
    <section
      id="nav"
      className="fixed top-0 right-0 left-0 z-50 bg-blackBackground w-[100vw] h-[100px] grid grid-cols-2 items-center px-5"
    >
      <a href="/" className="navbar-brand text-whiteBackground text-[20px] font-bold">
        <span className="text-[#0accff]">4Es </span> Africa
      </a>

      <div className="text-whiteBackground flex justify-end lg:grid lg:justify-center ">
        <div className="hidden md:flex  gap-4 items-center">
          {NavLinks.map((navLink, index) => (
            <Components.CustomLink
              key={index}
              href={navLink.href}
              title={navLink.title}
              className="mr-6"
            />
          ))}
          {Buttons.map((button, index) => (
            <Components.Btn
              key={index}
              href={button.link}
              text={button.text}
              color={button.color}
              border={button.border}
              borderColor={button.borderColor}
              textColor={button.textColor}
            />
          ))}
        </div>

        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
          onClick={handleClick}
        >
          <CiMenuBurger size="24" className="text-whiteBackground" />
        </button>
      </div>

      {isOpen && (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 z-50 bg-blackBackground md:hidden overflow-auto transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <div
            className=" py-10 items-center justify-end h-screen px-4"
            onClick={handleClose}
          >
            <button
              id="menu-btn"
              className="block hamburger md:hidden focus:outline-none relative right-0"
              onClick={handleClose}
            >
              <IoClose size={28} className="text-whiteBackground" />
            </button>

            <div className="pt-12">
              <div className="flex flex-col text-center items-center text-whiteBackground">
                {NavLinks.map((navLink, index) => (
                  <Components.CustomLink
                    key={index}
                    href={navLink.href}
                    title={navLink.title}
                  />
                ))}
                <div className="grid gap-4">
                  {Buttons.map((button, index) => (
                    <Components.Btn
                      key={index}
                      href={button.link}
                      text={button.text}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;

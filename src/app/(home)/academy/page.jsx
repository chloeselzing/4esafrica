"use client";

import React from "react";
import Card from "@/components/Card";
import * as Components from "@/components";
import { CardProps } from "@/data/CardProps";

export default function page() {
  return (
    <>
          <Components.MiniBanner bannerHeading="Academy" />

    <section
      id="academy"
      className=" grid items-center justify-items-center  py-[20px]  bg-[#e8e9e4] "
    >

      <div className="text-center m-0">
        <p className="lg:text-[17px] text-[.8em] py-1">
          FIND THE RIGHT ACADEMY FOR YOU
        </p>
      </div>
      <Components.ScrollXAnimation>
        <div className="px-10 grid lg:grid-cols-3 md:grid md:grid-cols-3 gap-6 md:my-5 w-full place-items-center">
          {CardProps.map((card, index) => (
            <Card
              key={index}
              buttonLink={card.link}
              buttonText={card.btnText}
              image={card.img}
              text={card.text}
              text2={card.text2}
              title={card.title}
              href={card.link}
            />
          ))}
        </div>
      </Components.ScrollXAnimation>
    </section>
    </>
  );
}

"use client";
import * as Components from "@/components";
import { BoxValues } from "@/data/Box";
import React from "react";

const page = () => {
  return (
    <>
      <Components.MiniBanner bannerHeading="Why Us" /> 
      <div className="py-[50px] grid items-center">
        <Components.ScrollYAnimation>
          <div className="grid lg:grid-cols-3 place-items-center px-[50px] py-[50px] lg:gap-3  gap-6">
            {BoxValues.map((val, index) => (
              <Components.Box
                key={index}
                color={val.color}
                heading={val.heading}
                text={val.text}
                hover={val.hover}
              />
            ))}
          </div>
        </Components.ScrollYAnimation>
      </div>
    </>
  );
};

export default page;

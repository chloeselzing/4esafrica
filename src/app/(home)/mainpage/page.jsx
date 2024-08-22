"use client";
import React from "react";
import Image from "next/image";
import womanonLaptop from "../../../../public/womanonLaptop.png";
import laptopman from "../../../../public/laptopman.png";
import * as Components from "@/components";
import { motion } from "framer-motion";
import { WwdData } from "@/data/WwdData";
import { CounterData } from "@/data/CounterData";

const MainPage = () => {
  return (
    <section id="home" className="grid bg-whiteBackground">
      <div className="w-full lg:h-screen h-[70vh] banner text-whiteBackground pt-[100px] flex justify-center items-center">
        <Components.ScrollYAnimation>
          <motion.div
            className="grid place-items-center gap-6 h-auto w-[87vw]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Components.LargeHeading heading="Welcome to 4Es Africa" />
            <p className="text-md text-center ">
              Empowering the next generation of tech leaders in Africa through
              Education, Employment, Entrepreneurship, and Excellence. Our
              mission is to provide accessible, high-quality tech education,
              mentorship, and job placement opportunities to talented
              individuals across the continent. Join our community of learners,
              mentors, and industry experts, and take the first step towards
              building a successful career in the tech industry. At 4Es Africa,
              we believe in your potential to shape the future of technology and
              make a positive impact in your community. Start your journey with
              us today and unlock endless possibilities.
            </p>
            <Components.Btn
              href="/signup"
              text="Get Started"
              color="bg-primary"
            />
          </motion.div>
        </Components.ScrollYAnimation>
      </div>
     
      <Components.ScrollXAnimation>
        <div className="top-0 grid lg:grid-cols-2 items-center mx-0 px-10  ">
          <div className=" lg:w-[35vw] lg:text-left text-center p-10 lg:my-0 my-[50px]">
            <Components.SectionHeading sectionHeading="The Sound of Learning in Africa" />
            <p className="text-[12px] pb-[10px] ">
              Learning | Mentorship | Internship | Job Placement
            </p>
            <p className="lg:text-[19px] text-[17px] mb-4 ">
              Learn highly sought after tech skills without hassle.Build a world
              class career with us. Get mentored by highly skilled expert from
              world leading tech companies. Join thousands across Africa
              learning in-demand tech-skills.
            </p>
            <Components.Btn
              href="/signup"
              text="Get Started"
              color="bg-primary"
            />
          </div>
          <div className="bg-blackBackground m-10 lg:block hidden ">
            <Image
              src={womanonLaptop}
              alt="Woman on laptop"
              className="h-[70vh] w-[50vw]"
            />
          </div>
        </div>
      </Components.ScrollXAnimation>
      <Components.ScrollXAnimation>
        <div className="flex flex-wrap justify-center gap-6 wwd place-items-center py-[50px]">
          {WwdData.map((card) => (
            <Components.WwdCards
              key={card.title}
              title={card.title}
              color={card.color}
              icon={card.icon}
            />
          ))}
        </div>
      </Components.ScrollXAnimation>
      <div className="flex  bg-whiteBackground lg:h-[250px]  place-items-center justify-center py-[50px]">
        <Components.ScrollXAnimation>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
            {CounterData.map((counter, index) => (
              <Components.Counter
                key={index}
                count={counter.count}
                color={counter.color}
                label={counter.label}
              />
            ))}
          </div>
        </Components.ScrollXAnimation>
      </div>

      <Components.ScrollXAnimation>
        <div className="grid lg:grid-cols-2 items-center px-10  ">
          <div className="relative hidden lg:block ">
            <Image
              src={laptopman}
              alt="Woman on laptop"
              className="h-[70vh] w-[50vw]"
            />
          </div>

          <div className=" lg:w-[35vw] m-auto lg:text-left text-center lg:my-0 my-[50px] bg-whiteBackground ">
            <Components.SectionHeading sectionHeading="From Fortune 500 Companies Shaping The Future Of Work" />

            <p className="lg:text-[19px] text-[17px] my-[0px] py-4 " >
              We equips high potential individuals with world-class Tech skills.
              Experience practical learning through real-life projects and
              internship placements over a six-month period.
            </p>
            <Components.Btn
              href="/signup"
              text="Get Started"
              color="bg-primary"
            />
          </div>
        </div>
      </Components.ScrollXAnimation>
    </section>
  );
};

export default MainPage;

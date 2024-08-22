"use client";

import school from "../../../../public/school.jpg";
import teaching from "../../../../public/teaching.jpg";
import * as Components from "@/components";
import Image from "next/image";

export default function about() {
  return (
    <div className=" bg-whiteBackground ">
      <Components.MiniBanner bannerHeading="About Us" />

      <Components.ScrollXAnimation>
        <div className="grid lg:grid-cols-2  p-10 lg:py-[100px] py-[70px] pb-0">
          <div className="lg:w-[40vw] lg:text-left text-center">
            <Components.SectionHeading sectionHeading="Tech Empowerment" />

            <p className="lg:text-[19px] text-[17px] my-[15px]">
              <span className="font-bold">
                4E School Africa
                <> </>
                <> </>
              </span>
              is an innovation by corestream Nigeria (an enterprise software
              development company). This is aim at training African youth with
              world most required soft-skills we provide this by partnering with
              Government, Organizations and Individuals interested in inspiring
              the next generation of top Software Engineers. We are committed to
              helping as many young Africans kickstart a career in technology by
              providing them with access to quality technical education by real
              world experts.
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src={school}
              alt="Students coding"
              className="h-[70vh] w-[45vw]"
            />
          </div>
        </div>
      </Components.ScrollXAnimation>
      <marquee>
        <div className="bg-whiteBackground w-full h-[70px] lg:text-[19px] text-[15px] lg:px-auto px-5  flex items-center justify-center lg:gap-7 gap-2">
          <p className="lg:w-auto w-[55vw]">
            Join thousands Across Africa Learning In-demand Tech-skills{" "}
          </p>
          <button className="border border-blackBackground lg:px-5 px-4 py-2 rounded-md">
            <Components.CustomLink href="/signup" title="Get Started" />
          </button>
        </div>
      </marquee>

      <div className="bg-whiteBackground">
        <Components.ScrollXAnimation>
          <div className="grid lg:grid-cols-2  p-10   py-[50px]">
            <div className="hidden lg:block">
              <Image
                src={teaching}
                alt="Tutor teaching students"
                className="h-[65vh] w-[40vw]"
              />
            </div>
            <div className=" lg:w-[40vw] m-auto lg:text-left text-center ">
              <Components.SectionHeading sectionHeading="Shaping the Future of Work" />

              <div className="lg:text-[19px] text-[17px] my-[15px] ">
                We equips high potential individuals with world-class Tech
                skills. Experience practical learning through real-life projects
                and internship placements over a six-month period.
                <p>
                  4Es Africa is a unique approach to learning, where students
                  are train on available tech jobs across the globe. Our
                  intention is to provide valued knowledge for teaming youth
                  across africa, through our vast experience in the World Wide
                  Web technology to produce the next Digital employed society.
                </p>
              </div>
            </div>
          </div>
        </Components.ScrollXAnimation>
      </div>
    </div>
  );
}

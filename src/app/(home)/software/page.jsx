'use client'
import * as Components from "@/components";
import ButtonLike from "@/components/ButtonLike";
import { ButtonLikeProps } from "@/data/ButtonLikeProps";

function page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 lg:pt-[200px] pt-[100px] md:pt-[200px] pb-[150px] lg:text-whiteBackground text-whiteBackground">
      <div className="box-image lg:rounded-lg lg:shadow-md px-8 pb-12 pt-16 max-w-5xl ">
        <Components.LargeHeading heading=" Software Development" />

        <p className="text-lg mb-8 text-center">
          We believe learning should be fun and such we carefully design Our
          unique curriculum curated by following best practices and innovative
          teaching approaches for our dev-enthusiasts to meet evolving employer
          demands.
        </p>
        <div>
          <h2 className="lg:text-2xl text-md font-bold ">Curriculum Overview</h2>
          <p>
            Learners gain fluency with the core software engineering techniques
            needed to tap into a fast-growing field. Our curriculum is curated
            by following best practices and innovative teaching approaches for
            our Learners to meet evolving employer demands.
          </p>
          <p>
            Our dev-enthusiasts go from zero knowledge to being able to build
            your technology platforms! Starting with the foundations of software
            engineering. By the end of this program you would have mastered a
            specialization and learn the art of effective collaboration to solve
            real world problems.
          </p>
        </div>
        <div className="my-5">
          <h2 className="text-2xl font-bold ">Our Stack Focus</h2>
          <ul className="flex flex-wrap gap-4">
            {ButtonLikeProps.map((btn, index) => (
              <ButtonLike key={index} color={btn.color} text={btn.text} />
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-blue-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2l-2-2-4 4"
                ></path>
              </svg>
              <p>Virtual Learning: 100%</p>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2l-2-2-4 4"
                ></path>
              </svg>
              <p>Internship: 85%</p>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-yellow-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2l-2-2-4 4"
                ></path>
              </svg>
              <p>Mentorship: 75%</p>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-purple-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2l-2-2-4 4"
                ></path>
              </svg>
              <p>Job Opportunities:90%</p>
            </div>
          </div>
        </div>

        <div className="text-center py-8">
          <Components.Btn
            color="bg-primary "
            href="/signup"
            text="Get Started"
          />
        </div>
      </div>
    </div>
  );
}

export default page;

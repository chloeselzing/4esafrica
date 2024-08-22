'use client'

import * as Components from "@/components";

function page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 lg:pt-[200px] pt-[100px] md:pt-[200px] pb-[150px] lg:text-whiteBackground text-whiteBackground">
      <Components.ScrollXAnimation>
        <div className=" lg:rounded-lg lg:shadow-md px-8 pb-12 pt-16 max-w-5xl data-image">
          <Components.LargeHeading heading="School Of Data Science" />
          <div>
            <h2 className="lg:text-2xl text-md font-bold mb-4 ">
              WHAT YOU WILL LEARN
            </h2>
            <ul className="list-disc list-inside mb-8">
              <li>Conduct an inferential statistical analysis</li>
              <li>Discern whether a data visualization is good or bad</li>
              <li>Enhance a data analysis with applied machine learning</li>
              <li>Analyze the connectivity of a social network</li>
            </ul>

            <h2 className="text-2xl font-bold ">Data Science Course Details</h2>
            <p className="mb-4">
              Our school data is designed to help data enthusiasts begin their
              journey to learning analytics and data strategy, as well as
              helping professionals advance in the data space. This program is
              well designed for Africans to master Data Science and prepare for
              jobs in Data Science.
            </p>
            <p className="mb-4">
              This program is designed for data enthusiasts to begin their
              journey of being a Data analyst from novice to pro.
            </p>
            <p className="mb-4">
              <strong>Duration:</strong> 4 months
            </p>
            <p className="mb-4">
              <strong>Tools Include:</strong> SQL, Excel, PowerBI & Python.
            </p>

            <div className="text-center py-8 flex justify-center gap-4">
              <p className="font-semibold">
                Ready to begin your journey in Data Science?
              </p>

              <Components.Btn
                color="bg-primary "
                href="/signup"
                text=" Get Started Here"
              />
            </div>
          </div>

          <div className="my-5">
            <h2 className="text-2xl font-bold ">Key Benefits</h2>
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
                <p>Job Opportunities: 90%</p>
              </div>
            </div>
          </div>
        </div>
      </Components.ScrollXAnimation>
    </div>
  );
}

export default page;

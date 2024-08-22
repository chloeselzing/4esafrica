'use client'
import * as Components from "@/components";

function page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 lg:pt-[200px] pt-[100px]  pb-[150px] lg:text-whiteBackground text-whiteBackground ">
      <div className=" lg:rounded-lg lg:adow-md px-8 pb-12 pt-16 max-w-5xl product-image ">
        <Components.LargeHeading heading="Product Management Course Details" />

        <div>
          <h2 className="text-2xl font-bold mb-4">Product Management Course Details</h2>
          <p className="mb-4">
            Ready to begin your journey in Product Management?
          </p>

          <div className="text-center py-8">
            <Components.Btn
              color="bg-primary "
              href="/signup"
              text="Get Started Here"
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
    </div>
  );
}

export default page;

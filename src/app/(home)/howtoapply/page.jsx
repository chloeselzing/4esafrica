'use client'

import { Btn } from "@/components";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary pt-[200px] pb-[150px]">
      <motion.div 
       initial={{ opacity: 0, scale: 0.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{
         duration: 0.8,
         delay: 0.5,
         ease: [0, 0.71, 0.2, 1.01],
       }} className="bg-whiteBackground p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8">How to Apply</h2>

        {/* Application process section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Application Process</h3>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>
              <span className="font-semibold">Step One:</span> Fill and submit
              the application form.
            </li>
            <li>
              <span className="font-semibold">Step Two:</span> Take and pass all
              assessment tests.
            </li>
            <li>
              <span className="font-semibold">Step Three:</span> Complete
              enrollment and begin your journey into your school of choice.
            </li>
          </ol>
        </div>

        {/* Application form or link */}
        <div className="text-center mb-4">
          <Btn color='bg-primary' text='Apply now' href='/apply'/>
          
        </div>

        
      </motion.div>
    </div>
  );
};

export default page;

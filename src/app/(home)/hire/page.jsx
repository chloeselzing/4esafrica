'use client'

import * as Components from "@/components";
import React from "react";
import { Formik, Form, Field } from "formik";
import { hireValidation } from "@/auth/hireValidation";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary pt-[200px] pb-[150px]">
      <motion.div 
       initial={{ opacity: 0, scale: 0.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{
         duration: 0.8,
         delay: 0.5,
         ease: [0, 0.71, 0.2, 1.01],
       }} className="w-full max-w-md p-6 bg-whiteBackground rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Hire Developer</h2>

        <Formik
          initialValues={{ name: "", email: "", organization: "", stack: "", type: "" }}
          validationSchema={hireValidation}
          onSubmit={(values) => {
            console.log(values);
            // Handle form submission
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="name">
                {({ field }) => (
                  <div className="mb-4">
                    <Components.InputField
                      {...field}
                      label="Name"
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                )}
              </Field>

              <Field name="email">
                {({ field }) => (
                  <div className="mb-4">
                    <Components.InputField
                      {...field}
                      label="Email"
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                )}
              </Field>

              <Field name="organization">
                {({ field }) => (
                  <div className="mb-4">
                    <Components.InputField
                      {...field}
                      label="Name of Organization"
                      type="text"
                      id="organization"
                      placeholder="Enter organization name"
                    />
                  </div>
                )}
              </Field>

              <Field name="stack">
                {({ field }) => (
                  <div className="mb-4">
                    <Components.InputField
                      {...field}
                      label="Stack Required"
                      type="text"
                      id="stack"
                      placeholder="Enter required stack"
                    />
                  </div>
                )}
              </Field>

              <Field name="type">
                {({ field }) => (
                  <div className="mb-4">
                    <Components.InputField
                      {...field}
                      label="Type of Hire"
                      type="text"
                      id="type"
                      placeholder="Enter hire type"
                    />
                  </div>
                )}
              </Field>

              <div className="flex items-center justify-center">
                <Components.Btn color="bg-primary" type="submit" text="Send" />
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  );
};

export default Page;

'use client'

import * as Components from "@/components";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { applyValidation } from "@/auth/applyValidation";
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
        <h2 className="text-2xl font-bold text-center mb-6">Book Call</h2>

        <Formik
          initialValues={{ name: "", email: "", purpose: "", message: "" }}
          validationSchema={applyValidation}
          onSubmit={(values) => {
            console.log(values);
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
                    {touched.name && errors.name && <div className="text-red-500">{errors.name}</div>}
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
                    {touched.email && errors.email && <div className="text-red-500">{errors.email}</div>}
                  </div>
                )}
              </Field>

              <Field name="purpose">
                {({ field }) => (
                  <div className="mb-4">
                    <Components.InputField
                      {...field}
                      label="Purpose"
                      type="text"
                      id="purpose"
                      placeholder="Enter your purpose"
                    />
                    {touched.purpose && errors.purpose && <div className="text-red-500">{errors.purpose}</div>}
                  </div>
                )}
              </Field>

              <Field name="message">
                {({ field }) => (
                  <div className="mb-4">
                    <Components.TextArea
                      {...field}
                      label="Message"
                      id="message"
                      placeholder="Your message"
                    />
                    {touched.message && errors.message && <div className="text-red-500">{errors.message}</div>}
                  </div>
                )}
              </Field>

              <div className="flex items-center justify-center">
                <Components.Btn color="bg-primary" type="submit" text="Book Call" />
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  );
};

export default Page;

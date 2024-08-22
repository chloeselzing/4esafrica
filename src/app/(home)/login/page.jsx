"use client";

import * as Components from "@/components";
import Link from "next/link";
import React from "react";
import { Formik, Form } from "formik";
import { loginValidationSchema } from "@/auth/loginValidationSchema";
import { motion } from "framer-motion";

const Page = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary pt-[150px] pb-[150px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full lg:max-w-sm max-w-md p-6 bg-whiteBackground rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Welcome</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form>
              <Components.InputField
                label="Email Address"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
              <Components.InputField
                label="Password"
                type="password"
                id="password"
                placeholder="******************"
              />
              <div className="flex items-center justify-between mb-4">
                <Link
                  href="#"
                  className="text-sm text-[#08B9F7] hover:text-[#085cf7] font-bold"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-primary text-whiteBackground py-2 px-4 rounded"
                >
                  Log in
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-[#08B9F7] hover:text-[#085cf7] font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;

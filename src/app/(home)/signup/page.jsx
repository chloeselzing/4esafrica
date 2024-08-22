"use client";
import * as Components from "@/components";
import Link from "next/link";
import React from "react";
import { Formik, Form } from "formik";
import { signupValidationSchema } from "@/auth/signupValidationSchema";
import { motion } from "framer-motion";

const SignUpPage = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div className="flex items-center justify-center bg-primary pt-[150px] pb-[150px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full lg:max-w-sm max-w-md p-6 bg-whiteBackground rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Your Account
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={signupValidationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form>
              <Components.InputField
                label="Full Name"
                type="text"
                id="fullName"
                placeholder="Enter your full name"
              />
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
                placeholder="Create a password"
              />
              <Components.InputField
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                placeholder="Confirm password"
              />
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-primary text-whiteBackground py-2 px-4 rounded"
                >
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#08B9F7] hover:text-[#085cf7] font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;

"use client";

import React from "react";
import styles from "./RegistrationForm.module.css";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "@/store/api/authenticationApi";

export type RegistrationFormType = {
  username: string;
  email: string;
  password: string;
};

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormType>({
    defaultValues: { username: "", email: "", password: "" },
  });

  const [registration] = useRegisterMutation();

  const onSubmit = (data: RegistrationFormType) => {
    registration(data);
  };

  return (
    <div className={styles.registrationFormContainer}>
      <div className="bg-gray-800 w-1/4 ">
        <div className="flex justify-end w-100 p-3"></div>
        <div className="border-b  mx-10">
          <div className="flex justify-center px-4 py-2">Make your registration</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-5 pt-10 flex justify-center ">
            <input
              type="text"
              className="bg-black px-3 py-1 rounded-md text-green-500"
              placeholder="Username"
              {...register("username", {
                pattern: {
                  value: /[A-Za-z]{3,}/,
                  message: "minimum is 3 characters",
                },
                required: "Username is required",
              })}
            />
          </div>
          <div className="flex justify-center text-red-500">
            <p>{errors.username?.message}</p>
          </div>
          <div className="p-5 flex justify-center">
            <input
              type="text"
              className="bg-black px-3 py-1 rounded-md text-green-500"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
              })}
            />
          </div>
          <div className="flex justify-center text-red-500">
            <p>{errors.email?.message}</p>
          </div>
          <div className="p-5 flex justify-center ">
            <input
              type="password"
              className="bg-black px-3 py-1 rounded-md text-green-500"
              placeholder="Password"
              {...register("password", {
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d).+$/,
                  message: "At least one big letter and one number",
                },
                required: "password is required",
              })}
            />
          </div>
          <div className="pb-5 flex justify-center text-red-500">
            <p>{errors.password?.message}</p>
          </div>
          <button className={styles.registrationButton} type="submit">
            Registration
          </button>
        </form>
      </div>
    </div>
  );
};

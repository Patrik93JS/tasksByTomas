"use client";

import React from "react";
import styles from "./RegistrationForm.module.css";
import { useForm } from "react-hook-form";

export type RegistrationFormType = {
  username: string;
  email: string;
  password: string;
};

export const RegistrationForm = () => {
  const { register, handleSubmit } = useForm<RegistrationFormType>({
    defaultValues: { username: "", email: "", password: "" },
  });

  const onSubmit = (data: RegistrationFormType) => {
    console.log("registr data", data);
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
            <input type="text" className="bg-black px-3 py-1 rounded-md text-green-500" placeholder="Username" {...register("username")} />
          </div>
          <div className="p-5 flex justify-center ">
            <input type="text" className="bg-black px-3 py-1 rounded-md text-green-500" placeholder="Email" {...register("email")} />
          </div>
          <div className="p-5 flex justify-center ">
            <input
              type="password"
              className="bg-black px-3 py-1 rounded-md text-green-500"
              placeholder="Password"
              {...register("password")}
            />
          </div>
          <button className={styles.registrationButton} type="submit">
            Registration
          </button>
        </form>
      </div>
    </div>
  );
};

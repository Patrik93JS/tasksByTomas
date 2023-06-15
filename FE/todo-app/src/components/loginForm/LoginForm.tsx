"use client";

import React from "react";
import styles from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/store/api/authenticationApi";

export type LoginFormType = {
  identifier: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    defaultValues: { identifier: "", password: "" },
  });
  const router = useRouter();
  const [login] = useLoginMutation();
  const onSubmit = (data: LoginFormType) => {
    login(data);
    router.push("/");
  };

  return (
    <div className={styles.loginFormContainer}>
      <div className="bg-gray-800 w-1/4 ">
        <div className="flex justify-end w-100 p-3"></div>
        <div className="border-b  mx-10">
          <div className="flex justify-center px-4 py-2">Log to ToDo app</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-5 pt-10 flex justify-center ">
            <input
              type="text"
              className="bg-black px-3 py-1 rounded-md text-green-500"
              placeholder="Username"
              {...register("identifier", {
                required: "Username is required",
              })}
            />
          </div>
          <div className="flex justify-center text-red-500">
            <p>{errors.identifier?.message}</p>
          </div>

          <div className="p-5 flex justify-center ">
            <input
              type="password"
              className="bg-black px-3 py-1 rounded-md text-green-500"
              placeholder="Password"
              {...register("password", {
                required: "password is required",
              })}
            />
          </div>
          <div className="pb-5 flex justify-center text-red-500">
            <p>{errors.password?.message}</p>
          </div>
          <button className={styles.loginButton} type="submit">
            Login
          </button>
          <div className="border-t  mx-10">
            <div className="flex justify-center px-4 py-2">Not account yet? Let&lsquo;s create one</div>
          </div>
        </form>
        <button className={styles.loginButton} type="submit" onClick={() => router.push("/registration")}>
          Registration
        </button>
      </div>
    </div>
  );
};

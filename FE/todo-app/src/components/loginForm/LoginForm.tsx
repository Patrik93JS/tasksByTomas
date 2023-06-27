"use client";

import React from "react";
import styles from "./LoginForm.module.css";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/store/api/authenticationApi";
import { Input } from "../formComponents/Input";
import { Error } from "../formComponents/Error";
import { SubmitButton } from "../formComponents/SubmitButton";
import { RedirectButton } from "../formComponents/RedirectButton";

export type LoginFormType = {
  identifier: string;
  password: string;
};

export const LoginForm = () => {
  const methods = useForm<LoginFormType>({
    defaultValues: { identifier: "", password: "" },
  });

  const router = useRouter();
  const [login, { isError }] = useLoginMutation();

  const onSubmit = async (data: LoginFormType) => {
    const [loginData] = await Promise.all([login(data).unwrap(), router.prefetch("/")]);
    if (loginData) router.push("/");
  };

  return (
    <div className={styles.loginFormContainer}>
      <div className="bg-gray-800 w-1/4 ">
        <div className="flex justify-end w-100 p-3"></div>
        <div className="border-b  mx-10">
          <div className="flex justify-center px-4 py-2">Log to ToDo app</div>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Input type="text" placeholder="Username" name="identifier" description="Username" />
            <Error errorMsg={methods.formState.errors.identifier?.message} />

            <Input type="password" placeholder="Password" name="password" description="Password" />
            <Error errorMsg={methods.formState.errors.password?.message} />

            <SubmitButton label="Login" />
            {isError && <Error errorMsg="wrong username or password" />}

            <div className="border-t  mx-10">
              <div className="flex justify-center px-4 py-2">Not account yet? Let&lsquo;s create one</div>
            </div>
          </form>
        </FormProvider>

        <RedirectButton path="/registration" label="Registration" />
      </div>
    </div>
  );
};

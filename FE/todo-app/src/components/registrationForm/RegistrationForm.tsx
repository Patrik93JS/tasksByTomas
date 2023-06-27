"use client";

import React from "react";
import styles from "./RegistrationForm.module.css";
import { FormProvider, useForm } from "react-hook-form";
import { useRegisterMutation } from "@/store/api/authenticationApi";
import { Input } from "../formComponents/Input";
import { Error } from "../formComponents/Error";
import { SubmitButton } from "../formComponents/SubmitButton";
import { useRouter } from "next/navigation";

export type RegistrationFormType = {
  username: string;
  email: string;
  password: string;
};

export const RegistrationForm = () => {
  const methods = useForm<RegistrationFormType>({
    defaultValues: { username: "", email: "", password: "" },
  });
  const router = useRouter();
  const [registration] = useRegisterMutation();

  const onSubmit = (data: RegistrationFormType) => {
    registration(data);
    router.push("/home");
  };

  return (
    <div className={styles.registrationFormContainer}>
      <div className="bg-gray-800 w-1/4 ">
        <div className="flex justify-end w-100 p-3"></div>
        <div className="border-b  mx-10">
          <div className="flex justify-center px-4 py-2">Make your registration</div>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Input
              type="text"
              name="username"
              description="Username"
              placeholder="Username"
              validationValue={/[A-Za-z]{3,}/}
              validationMessage="minimum is 3 characters"
            />
            <Error errorMsg={methods.formState.errors.username?.message} />

            <Input type="text" name="email" description="Email" placeholder="Email" />
            <Error errorMsg={methods.formState.errors.email?.message} />

            <Input
              type="password"
              name="password"
              description="Password"
              placeholder="Password"
              validationValue={/^(?=.*[A-Z])(?=.*\d).+$/}
              validationMessage="At least one big letter and one number"
            />
            <Error errorMsg={methods.formState.errors.password?.message} />

            <SubmitButton label="Registration" />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

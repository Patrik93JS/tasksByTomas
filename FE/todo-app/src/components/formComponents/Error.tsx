import React, { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"p"> & {
  errorMsg?: string;
};

export const Error: FC<Props> = ({ errorMsg, ...rest }) => {
  const errorClass = cn("flex justify-center text-red-500");
  return (
    <div className={errorClass}>
      <p {...rest}>{errorMsg}</p>
    </div>
  );
};

import React, { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import styles from "./Components.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"button"> & {
  buttonType?: "closeButton" | "submitType";
  children?: ReactNode;
};

export const Button: FC<Props> = ({ buttonType, children, ...rest }) => {
  const buttonClass = cn(buttonType === "closeButton" ? styles.closeButton : styles.submitButton);

  return (
    <button className={buttonClass} type={buttonType === "submitType" ? "submit" : undefined} {...rest}>
      {buttonType === "closeButton" ? <AiFillCloseCircle /> : children}
    </button>
  );
};

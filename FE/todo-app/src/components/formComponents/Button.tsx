import React, { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";
import styles from "./Components.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"button"> & {
  buttonType?: "closeButton" | "submitType";
};

export const Button: FC<PropsWithChildren<Props>> = ({ buttonType, children, ...rest }) => {
  const buttonClass = cn(buttonType === "closeButton" ? styles.closeButton : styles.submitButton);

  return (
    <button className={buttonClass} type={buttonType === "submitType" ? "submit" : undefined} {...rest}>
      {buttonType === "closeButton" ? <AiFillCloseCircle /> : children}
    </button>
  );
};

import React, { FC, ReactNode } from "react";
import styles from "./Components.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  buttonType?: "closeButton" | "submitType";
  children?: ReactNode;
};

export const Button: FC<Props> = (props: Props) => {
  const { buttonType, children, ...rest } = props;
  return (
    <button
      className={buttonType === "closeButton" ? styles.closeButton : styles.submitButton}
      type={buttonType === "submitType" ? "submit" : undefined}
      {...rest}
    >
      {buttonType === "closeButton" ? <AiFillCloseCircle /> : children}
    </button>
  );
};

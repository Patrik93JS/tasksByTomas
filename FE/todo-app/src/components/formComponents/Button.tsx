import React, { FC } from "react";
import styles from "./Components.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

type Props = {
  label?: "Create" | "Login" | "Registration";
  buttonType?: "closeButton" | "submitType";
  closeModal?: () => void;
  path?: string;
  ariaLabel?: string;
  className?: string;
};

export const Button: FC<Props> = ({ label, buttonType, closeModal, ariaLabel, className }) => {
  return (
    <button
      className={buttonType === "closeButton" ? `${styles.closeButton} ${className}` : `${styles.submitButton} ${className}`}
      type={buttonType === "submitType" ? "submit" : undefined}
      onClick={buttonType === "closeButton" ? closeModal : undefined}
      aria-label={ariaLabel}
    >
      {buttonType === "closeButton" ? <AiFillCloseCircle /> : label}
    </button>
  );
};

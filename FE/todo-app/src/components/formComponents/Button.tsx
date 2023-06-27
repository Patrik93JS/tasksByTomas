import React, { FC } from "react";
import styles from "./Components.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";

type Props = {
  label?: "Create" | "Login" | "Registration";
  buttonType?: "closeButton" | "submitType";
  closeModal?: () => void;
  path?: string;
  ariaLabel?: string;
  className?: string;
};

export const Button: FC<Props> = ({ label, buttonType, closeModal, path, ariaLabel, className }) => {
  const router = useRouter();
  const handleClick = () => {
    if (buttonType === "closeButton") {
      closeModal?.();
    } else if (path !== undefined) {
      router.push(path);
    }
  };
  return (
    <button
      className={buttonType === "closeButton" ? `${styles.closeButton} ${className}` : `${styles.submitButton} ${className}`}
      type={buttonType === "submitType" ? "submit" : undefined}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {buttonType === "closeButton" ? <AiFillCloseCircle /> : label}
    </button>
  );
};

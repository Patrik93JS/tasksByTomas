import React, { FC } from "react";
import styles from "./Components.module.css";

type Props = {
  label: "Create" | "Login";
};

export const SubmitButton: FC<Props> = ({ label }) => {
  return (
    <button className={styles.submitButton} type="submit">
      {label}
    </button>
  );
};

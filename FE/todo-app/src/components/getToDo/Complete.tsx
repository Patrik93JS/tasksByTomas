import React, { FC } from "react";
import styles from "./ToDo.module.css";

export const Complete: FC = () => {
  return (
    <div className={styles.completeCheckbox}>
      <input type="checkbox" />
    </div>
  );
};

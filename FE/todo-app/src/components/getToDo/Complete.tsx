import React, { FC } from "react";
import styles from "./ToDo.module.css";

export const Complete: FC = () => {
  const handleClick = () => {
    console.log("checkbox");
  };

  return (
    <div className={styles.completeCheckbox}>
      <input type="checkbox" onChange={handleClick} />
    </div>
  );
};

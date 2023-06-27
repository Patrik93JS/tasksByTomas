import React, { FC } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import styles from "./Components.module.css";

type Props = {
  closeModal: () => void;
};

export const CloseButton: FC<Props> = ({ closeModal }) => {
  return (
    <button className={styles.closeButton} onClick={closeModal}>
      <AiFillCloseCircle />
    </button>
  );
};

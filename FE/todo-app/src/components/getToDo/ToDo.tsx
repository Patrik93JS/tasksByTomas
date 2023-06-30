import React, { FC } from "react";
import styles from "./ToDo.module.css";
import { Description } from "../formComponents/Description";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";
import { Button } from "../formComponents/Button";
import { ToDoModal } from "./ToDoModal";

type Props = {
  title?: string;
  mustBeCompleted?: string;
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const ToDo: FC<Props> = ({ title, mustBeCompleted, isOpen, open, close }) => {
  const content = cn(styles.toDoContent);
  const container = cn(styles.toDoContainer);
  const toDoButtonModal = cn(styles.toDoButtonModal);

  return !isOpen ? (
    <div className={container}>
      <div className={content}>
        <Description>{title}</Description>
        <Description>{mustBeCompleted}</Description>
        <Button onClick={open} className={toDoButtonModal}>
          Open ToDo
        </Button>
      </div>
    </div>
  ) : (
    createPortal(<ToDoModal close={close} />, document.body)
  );
};

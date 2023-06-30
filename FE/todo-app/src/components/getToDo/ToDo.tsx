import React, { FC } from "react";
import styles from "./ToDo.module.css";
import { Description } from "../formComponents/Description";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";
import { Button } from "../formComponents/Button";
import { ToDoModal } from "./ToDoModal";
import { Complete } from "./Complete";

type Props = {
  title?: string;
  mustBeCompleted?: string;
  isOpen: boolean;
  description: string;
  open: () => void;
  close: () => void;
};

export const ToDo: FC<Props> = ({ title, mustBeCompleted, isOpen, description, open, close }) => {
  const content = cn(styles.toDoContent);
  const container = cn(styles.toDoContainer);
  const toDoButtonModal = cn(styles.toDoButtonModal);

  return !isOpen ? (
    <div className={container}>
      <div className={content}>
        <Complete />
        <Description>{title}</Description>
        <Description>{mustBeCompleted}</Description>
        <Description>{description}</Description>

        <Button onClick={open} className={toDoButtonModal}>
          Open ToDo
        </Button>
      </div>
    </div>
  ) : (
    createPortal(<ToDoModal close={close} />, document.body)
  );
};

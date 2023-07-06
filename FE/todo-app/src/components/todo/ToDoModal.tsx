import React, { FC } from "react";
import { Button } from "../formComponents/Button";
import { EditToDo } from "./EditToDo";
import styles from "./ToDo.module.css";
import { to_do } from "@/types/ToDo";
import { Description } from "../formComponents/Description";

type Props = {
  todo: to_do;
  close: () => void;
};

export const ToDoModal: FC<Props> = ({ close, todo }) => {
  return (
    <div className={styles.toDoModalContainer}>
      <div className="bg-gray-800 w-1/2 h-1/2 ">
        <div className="flex justify-end  p-3">
          <Button onClick={close} buttonType="closeButton" />
        </div>
        <div className="flex justify-center p-5 flex-col text-center">
          <Description>{todo.attributes.title}</Description>
          <Description>{todo.attributes.description}</Description>
        </div>
        <EditToDo />
      </div>
    </div>
  );
};

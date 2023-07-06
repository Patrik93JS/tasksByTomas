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
  console.log("rich", todo.attributes.longDescription);
  return (
    <div className={styles.toDoModalContainer}>
      <div className="bg-gray-800 w-1/2 h-auto ">
        <div className="flex justify-end  p-3">
          <Button onClick={close} buttonType="closeButton" />
        </div>
        <div className="flex justify-center p-5 flex-col text-center">
          <Description>{todo.attributes.title}</Description>
          <Description>{todo.attributes.description}</Description>
          <div className="break-all" dangerouslySetInnerHTML={{ __html: todo.attributes.longDescription }}></div>
          <EditToDo todo={todo} />
        </div>
      </div>
    </div>
  );
};

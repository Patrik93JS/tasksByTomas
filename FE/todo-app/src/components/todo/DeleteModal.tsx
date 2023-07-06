import React, { FC } from "react";
import { Button } from "../formComponents/Button";
import styles from "./ToDo.module.css";
import { useDeleteToDoMutation } from "@/store/api/todoApi";
type Props = {
  title: string;
  close: () => void;
};

export const DeleteModal: FC<Props> = ({ close, title }) => {
  const [deleteToDo] = useDeleteToDoMutation();

  return (
    <div className={styles.toDoDeleteModalContainer}>
      <div className="bg-gray-800 w-1/4">
        <div className="flex p-5 justify-center text-red-500">You are about to delete ToDo:</div>
        <div className="flex justify-center pb-5 border-b mx-10 ">{title}</div>
        <div className="flex p-5 justify-center text-red-500">are you sure?</div>

        <div className="flex flex-row pt-5">
          <Button className={styles.toDoDeleteButtonConfirm}>Delete</Button>
          <Button onClick={close}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

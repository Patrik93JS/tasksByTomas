import React, { FC } from "react";
import { Button } from "../formComponents/Button";
import styles from "./SideBar.module.css";

import { useDeleteGroupMutation, useGetGroupsQuery } from "@/store/api/groupToDoApi";
import { useDeleteToDoMutation } from "@/store/api/todoApi";

type Props = {
  title: string | null;
  close: () => void;
  selectedId: number | null;
};

export const DeleteGroupModal: FC<Props> = ({ close, title, selectedId }) => {
  const [deleteGroup, { isSuccess }] = useDeleteGroupMutation();
  const [deleteToDo] = useDeleteToDoMutation();
  const { data } = useGetGroupsQuery();
  const toDos = data?.data.map((e) => e.attributes.to_dos);

  const handleDeleteGroup = () => {
    deleteToDo(toDos);
    deleteGroup(selectedId);
    isSuccess && close();
    console.log(toDos);
  };
  return (
    <div className={styles.toDoDeleteModalGroupContainer}>
      <div className="bg-gray-800 w-1/4">
        <div className="flex p-5 justify-center text-red-500">Are you sure you want to delete Group:</div>
        <div className="flex justify-center pb-5 border-b mx-10 ">{title}</div>
        <div className="flex flex-row pt-5">
          <Button className={styles.toDoDeleteGroupButtonConfirm} onClick={handleDeleteGroup}>
            Delete
          </Button>
          <Button onClick={close}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

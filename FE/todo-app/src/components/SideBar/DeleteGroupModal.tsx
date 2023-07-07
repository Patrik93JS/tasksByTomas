import React, { FC } from "react";
import { Button } from "../formComponents/Button";
import styles from "./SideBar.module.css";
import { useDeleteGroupMutation, useGetGroupsQuery } from "@/store/api/groupToDoApi";
import { useDeleteToDoMutation } from "@/store/api/todoApi";
import { useAppDispatch } from "@/store/hooks";
import { setIdGroup } from "@/store/slices/idGroupToDo";

type Props = {
  title: string | null;
  close: () => void;
  selectedId: number | null;
};

export const DeleteGroupModal: FC<Props> = ({ close, title, selectedId }) => {
  const [deleteGroup, { isSuccess }] = useDeleteGroupMutation();
  const [deleteToDo] = useDeleteToDoMutation();
  const { data } = useGetGroupsQuery();
  const dispatch = useAppDispatch();
  const toDos = data?.data.map((e) => e.attributes.to_dos?.data.map((f) => f.id));

  const handleDeleteGroup = () => {
    deleteToDo(toDos);
    deleteGroup(selectedId);
    dispatch(setIdGroup(null));

    isSuccess && close();
    console.log(toDos);
  };

  return (
    <div className={styles.toDoDeleteModalGroupContainer}>
      <div className={styles.modalFrame}>
        <div className={styles.modalWarning}>Are you sure you want to delete Group:</div>
        <div className={styles.modalBorder}>{title}</div>
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

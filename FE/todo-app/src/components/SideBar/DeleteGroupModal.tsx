import React, { FC } from "react";
import { Button } from "../formComponents/Button";
import styles from "./SideBar.module.css";
import { useDeleteGroupMutation, useGetGroupsQuery } from "@/store/api/groupToDoApi";
import { useDeleteToDoMutation } from "@/store/api/todoApi";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIdGroup } from "@/store/slices/idGroupToDo";

type Props = {
  title: string | null;
  close: () => void;
};

export const DeleteGroupModal: FC<Props> = ({ close, title }) => {
  const [deleteGroup, { isSuccess }] = useDeleteGroupMutation();
  const [deleteToDo] = useDeleteToDoMutation();
  const { data } = useGetGroupsQuery();
  const dispatch = useAppDispatch();
  const selectedGroupId = useAppSelector(({ idGroupToDo }) => idGroupToDo.idGroup);

  const handleDeleteGroup = async () => {
    if (!data) {
      return;
    }

    const todoGroup = data?.data.find((group) => group.id == selectedGroupId);

    const toDos = todoGroup?.attributes.to_dos.data.map((todo) => todo.id);

    if (!toDos) {
      return;
    }

    await Promise.all(toDos?.map((todo) => deleteToDo(todo).unwrap()));
    await deleteGroup(selectedGroupId);
    dispatch(setIdGroup(null));

    isSuccess && close();
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

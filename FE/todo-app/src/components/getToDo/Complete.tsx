import React, { FC } from "react";
import styles from "./ToDo.module.css";
import { useUpdateToDoMutation } from "@/store/api/todoApi";
import { UpdateToDoRequest } from "@/types/ToDo";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setComplete } from "@/store/slices/todoCompleteSlice";

type Props = {
  id: number;
  title: string;
  description: string;
  mustBeCompleted: string;
};

export const Complete: FC<Props> = ({ id, title, description, mustBeCompleted }) => {
  const dispatch = useAppDispatch();
  const checked = useAppSelector((state) => state.todoComplete.todoComplete[id] || false);

  const [update] = useUpdateToDoMutation();
  const { idGroup } = useAppSelector(({ idGroupToDo }) => idGroupToDo);

  const handleChange = () => {
    const newChecked = !checked;
    dispatch(setComplete({ id, checked: newChecked }));

    const mustBeCompletedFormatted = new Date(mustBeCompleted).toISOString();

    const updateData: UpdateToDoRequest = {
      id: id,
      title: title,
      description: description,
      mustBeCompleted: mustBeCompletedFormatted,
      completed: newChecked,
      to_do_group: idGroup,
    };
    update(updateData);
  };

  return (
    <div className={styles.completeCheckbox}>
      <input type="checkbox" onChange={handleChange} checked={checked} />
    </div>
  );
};

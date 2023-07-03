import React, { FC, useState } from "react";
import styles from "./ToDo.module.css";
import { useUpdateToDoMutation } from "@/store/api/todoApi";
import { UpdateToDoRequest } from "@/types/ToDo";
import { useAppSelector } from "@/store/hooks";

type Props = {
  id: number;
  title: string;
  description: string;
  mustBeCompleted: string;
};

export const Complete: FC<Props> = ({ id, title, description, mustBeCompleted }) => {
  const [checked, setChecked] = useState(false);

  const [update] = useUpdateToDoMutation();
  const { idGroup } = useAppSelector(({ idGroupToDo }) => idGroupToDo);

  const handleChange = () => {
    setChecked(!checked);

    // if (!checked) {
    //   return;
    // }
    const mustBeCompletedFormatted = new Date(mustBeCompleted).toISOString();

    const updateData: UpdateToDoRequest = {
      id: id,
      title: title,
      description: description,
      mustBeCompleted: mustBeCompletedFormatted,
      completed: checked,
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

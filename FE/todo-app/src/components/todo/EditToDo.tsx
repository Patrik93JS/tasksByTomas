import React, { FC, useState } from "react";
import styles from "./ToDo.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toolbarOptions } from "./toolbarOptions";
import { UpdateToDoRequest, to_do } from "@/types/ToDo";
import { useUpdateToDoMutation } from "@/store/api/todoApi";
import { Button } from "../formComponents/Button";

type Props = {
  todo: to_do;
};

export const EditToDo: FC<Props> = ({ todo }) => {
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [update] = useUpdateToDoMutation();

  const handleChange = (content: string) => {
    setValue(content);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    const updateData: UpdateToDoRequest = {
      id: todo.id,
      title: todo.attributes.title,
      description: todo.attributes.description,
      longDescription: value,
      mustBeCompleted: todo.attributes.mustBeCompleted,
      completed: todo.attributes.completed,
      to_do_group: todo.attributes.to_do_group.data.id,
    };
    update(updateData);
    setEdit(false);
  };

  return (
    <>
      <div className={styles.editToDo}>
        <div>
          <ReactQuill theme="snow" modules={toolbarOptions} value={value} onChange={handleChange} readOnly={!edit} />
        </div>
        <div className="pt-5 flex justify-center">
          {!edit && (
            <Button className={styles.editButton} onClick={handleEdit}>
              Edit
            </Button>
          )}
          {edit && <Button onClick={handleSave}>Save</Button>}
        </div>
      </div>
    </>
  );
};

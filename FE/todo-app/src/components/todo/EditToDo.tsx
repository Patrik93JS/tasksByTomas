import React, { useState } from "react";
import styles from "./ToDo.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const EditToDo = () => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.editToDo}>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
};

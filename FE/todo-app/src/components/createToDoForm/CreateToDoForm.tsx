import React, { FC } from "react";
import { useForm } from "react-hook-form";
import styles from "./CreateToDoForm.module.css";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  closeModal: () => void;
};

export type CreateToDoType = {
  title: string;
  description: string;
  mustBeCompleted: string;
  completed: boolean;
  todoGroup: number | null;
};

export const CreateToDoForm: FC<Props> = ({ open, closeModal }) => {
  const { register, handleSubmit } = useForm<CreateToDoType>({
    defaultValues: {
      title: "",
      description: "",
      mustBeCompleted: "",
      completed: false,
      todoGroup: null,
    },
  });

  const onSubmit = async (data: CreateToDoType) => {
    console.log("createTodo", data);
  };

  return open
    ? createPortal(
        <>
          <div className={styles.createToDoContainer}>
            <div>
              <button onClick={closeModal}>{"closeModal"}</button>
            </div>
            <div>
              <div>Create your ToDo</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input type="text" placeholder="Write a name of ToDo" {...register("title")} />
              </div>
              <div>
                <input type="text" placeholder="Description" {...register("description")} />
              </div>
              <div>
                <input type="text" placeholder="mustBeCompleted" {...register("mustBeCompleted")} />
              </div>
              <div>
                <input type="checkbox" placeholder="completed" {...register("completed")} />
              </div>
            </form>
          </div>
        </>,
        document.body
      )
    : null;
};

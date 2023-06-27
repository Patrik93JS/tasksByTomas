import React, { FC } from "react";
import { useForm } from "react-hook-form";
import styles from "./CreateToDoForm.module.css";
import { createPortal } from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";

type Props = {
  open: boolean;
  closeModal: () => void;
};

export type CreateToDoType = {
  title: string;
  description: string;
  mustBeCompleted: Date;
};

export const CreateToDoForm: FC<Props> = ({ open, closeModal }) => {
  const { register, handleSubmit } = useForm<CreateToDoType>({
    defaultValues: {
      title: "",
      description: "",
      mustBeCompleted: new Date(),
    },
  });

  const onSubmit = async (data: CreateToDoType) => {
    console.log("createTodo", data);
  };

  return open
    ? createPortal(
        <>
          <div className={styles.createToDoContainer}>
            <div className="bg-gray-800 w-1/4">
              <div className="flex justify-end w-100 p-3">
                <button className={styles.closeButton} onClick={closeModal}>
                  <AiFillCloseCircle />
                </button>
              </div>
              <div className="border-b  mx-10">
                <div className="flex justify-center px-4 py-2">Create your ToDo</div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-6 flex justify-center items-center flex-col">
                  <p className="pb-2">Name ToDo</p>
                  <input type="text" placeholder="Name" className="bg-black px-3 py-1 rounded-md text-green-500" {...register("title")} />
                </div>
                <div className="p-6 flex justify-center items-center flex-col">
                  <p className="pb-2">Describe ToDo</p>
                  <input
                    type="text"
                    placeholder="Description"
                    className="bg-black px-3 py-1 rounded-md text-green-500"
                    {...register("description")}
                  />
                </div>
                <div className="p-6 flex justify-center items-center flex-col ">
                  <p className="pb-2">When does the ToDo have to be done?</p>
                  <input
                    type="datetime-local"
                    className=" px-3 py-1 rounded-md  appearance-none   shadow bg-black "
                    {...register("mustBeCompleted")}
                  />
                </div>
                <button className={styles.createButton} type="submit">
                  Create
                </button>
              </form>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
};

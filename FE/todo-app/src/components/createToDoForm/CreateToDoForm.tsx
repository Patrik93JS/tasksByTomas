import React, { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import styles from "./CreateToDoForm.module.css";
import { createPortal } from "react-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { useCreateToDoMutation } from "@/store/api/todoApi";
import { RegisterInput } from "../formComponents/RegisterInput";

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
  const methods = useForm<CreateToDoType>({
    defaultValues: {
      title: "",
      description: "",
      mustBeCompleted: new Date(),
    },
  });

  const [createToDo] = useCreateToDoMutation();

  const onSubmit = async (data: CreateToDoType) => {
    const dataForm = {
      data: {
        title: data.title,
        description: data.description,
        mustBeCompleted: data.mustBeCompleted,
      },
    };
    createToDo(dataForm);
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
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                  <RegisterInput name="title" description="Name ToDo" placeholder="Name" type="text" />

                  <RegisterInput name="description" description="Describe ToDo" placeholder="Description" type="text" />

                  <div className="p-6 flex justify-center items-center flex-col">
                    <p className="pb-2">When ToDo have to be done?</p>
                    <input
                      type="datetime-local"
                      className="px-3 py-1 rounded-md  appearance-none shadow bg-black "
                      {...methods.register("mustBeCompleted")}
                    />
                  </div>
                  <button className={styles.createButton} type="submit">
                    Create
                  </button>
                </form>
              </FormProvider>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
};

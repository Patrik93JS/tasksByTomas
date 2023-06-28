import React, { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import styles from "./CreateToDoForm.module.css";
import { createPortal } from "react-dom";
import { useCreateToDoMutation } from "@/store/api/todoApi";
import { Input } from "../formComponents/Input";
import { Button } from "../formComponents/Button";

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
    closeModal();
  };

  return open
    ? createPortal(
        <>
          <div className={styles.createToDoContainer}>
            <div className="bg-gray-800 w-1/4">
              <div className="flex justify-end w-100 p-3">
                <Button onClick={() => closeModal()} buttonType="closeButton" />
              </div>
              <div className="border-b  mx-10">
                <div className="flex justify-center px-4 py-2">Create your ToDo</div>
              </div>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                  <Input name="title" description="Name ToDo" placeholder="Name" type="text" />

                  <Input name="description" description="Describe ToDo" placeholder="Description" type="text" />

                  <Input name="mustBeCompleted" description="When ToDo have to be done?" placeholder="Description" type="datetime-local" />

                  <Button buttonType="submitType">Create</Button>
                </form>
              </FormProvider>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
};

import React, { FC } from "react";
import styles from "./CreateGroup.module.css";
import { createPortal } from "react-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useCreateGroupMutation } from "@/store/api/groupToDoApi";
import { Input } from "../formComponents/Input";
import { Button } from "../formComponents/Button";

type Props = {
  open: boolean;
  closeModal: () => void;
};

export type CreateGroupToDoType = {
  title: string;
};

export const CreateGroupForm: FC<Props> = ({ open, closeModal }) => {
  const methods = useForm<CreateGroupToDoType>({
    defaultValues: { title: "" },
  });

  const [createGroup] = useCreateGroupMutation();

  const onSubmit = async (data: CreateGroupToDoType) => {
    const dataInput = {
      data: {
        title: data.title,
      },
    };
    createGroup(dataInput);
    closeModal();
  };

  return open
    ? createPortal(
        <>
          <div className={styles.createGroupContainer}>
            <div className="bg-gray-800 w-1/4">
              <div className="flex justify-end w-100 p-3">
                <Button onClick={closeModal} buttonType="closeButton" />
              </div>
              <div className="border-b  mx-10">
                <div className="flex justify-center px-4 py-2">Create your group of ToDos</div>
              </div>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                  <Input type="text" name="title" description="Write a name of group" placeholder="name" />
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

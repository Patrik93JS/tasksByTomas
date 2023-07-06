import React, { FC } from "react";
import { Button } from "../formComponents/Button";

type Props = {
  close: () => void;
};

export const ToDoModal: FC<Props> = ({ close }) => {
  return (
    <div
      className="h-screen w-full fixed left-0 top-0 
  flex justify-center items-center bg-black
  rounded-xl
   bg-opacity-50 z-10 text-green-500"
    >
      <div className="bg-gray-800 w-1/4">
        ToDoModal
        <div className="flex justify-end w-100 p-3">
          <Button onClick={close} buttonType="closeButton" />
        </div>
      </div>
    </div>
  );
};

import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  description: string;
  placeholder: string;
};

export const CreateToDoInput: FC<Props> = ({ name, description, placeholder }) => {
  const { register } = useFormContext();
  return (
    <div className="p-6 flex justify-center items-center flex-col">
      <p className="pb-2">{description}</p>
      <input type="text" placeholder={placeholder} className="bg-black px-3 py-1 rounded-md text-green-500" {...register(`${name}`)} />
    </div>
  );
};

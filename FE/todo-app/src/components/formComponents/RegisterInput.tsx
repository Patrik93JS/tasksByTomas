import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  type: string;
  description?: string;
  placeholder?: string;
};

export const RegisterInput: FC<Props> = ({ name, description, placeholder, type }) => {
  const { register } = useFormContext();
  return (
    <div className="p-6 flex justify-center items-center flex-col">
      {description && <p className="pb-2">{description}</p>}
      {placeholder && (
        <input type={type} placeholder={placeholder} className="bg-black px-3 py-1 rounded-md text-green-500" {...register(`${name}`)} />
      )}
    </div>
  );
};

import React, { ComponentPropsWithoutRef, FC } from "react";
import { useFormContext } from "react-hook-form";
import { Description } from "./Description";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"input"> & {
  name: string;
  type: string;
  description?: string;
  placeholder?: string;
  validationValue?: RegExp;
  validationMessage?: string;
};

export const Input: FC<Props> = ({ name, description, placeholder, type, validationValue, validationMessage, ...rest }) => {
  const { register } = useFormContext();
  const inputStyle = cn("bg-black px-3 py-1 rounded-md text-green-500");
  return (
    <div className="p-6 flex justify-center items-center flex-col">
      {description && <Description>{description}</Description>}
      <input
        type={type}
        placeholder={placeholder}
        className={inputStyle}
        {...register(`${name}`, {
          pattern:
            validationValue && validationMessage
              ? {
                  value: validationValue,
                  message: validationMessage,
                }
              : undefined,
          required: `${name} is required`,
        })}
        {...rest}
      />
    </div>
  );
};

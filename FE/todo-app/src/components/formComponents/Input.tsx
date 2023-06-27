import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Description } from "./Description";

type Props = {
  name: string;
  type: string;
  description?: string;
  placeholder?: string;
  validationValue?: RegExp;
  validationMessage?: string;
  className?: string;
  ariaLabel?: string;
};

export const Input: FC<Props> = ({ name, description, placeholder, type, validationValue, validationMessage, className, ariaLabel }) => {
  const { register } = useFormContext();
  return (
    <div className="p-6 flex justify-center items-center flex-col">
      {description && <Description>{description}</Description>}
      <input
        aria-label={ariaLabel}
        type={type}
        placeholder={placeholder}
        className={`bg-black px-3 py-1 rounded-md text-green-500 ${className}`}
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
      />
    </div>
  );
};

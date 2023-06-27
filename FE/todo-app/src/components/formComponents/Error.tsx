import React, { FC } from "react";

type Props = {
  errorMsg?: string;
  className?: string;
};

export const Error: FC<Props> = ({ errorMsg, className }) => {
  return (
    <div className={`flex justify-center text-red-500 ${className}`}>
      <p>{errorMsg}</p>
    </div>
  );
};

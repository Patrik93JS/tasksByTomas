import React, { FC } from "react";

type Props = {
  errorMsg?: string;
};

export const Error: FC<Props> = ({ errorMsg }) => {
  return (
    <div className="flex justify-center text-red-500">
      <p>{errorMsg}</p>
    </div>
  );
};

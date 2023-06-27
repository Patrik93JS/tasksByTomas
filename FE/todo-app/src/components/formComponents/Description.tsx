import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Description: FC<Props> = ({ children }) => {
  return <p className="pb-2">{children}</p>;
};

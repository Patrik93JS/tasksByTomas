import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Description: FC<Props> = ({ children, className }) => {
  return <p className={`pb-2 ${className}`}>{children}</p>;
};

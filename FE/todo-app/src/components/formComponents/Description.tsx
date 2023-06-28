import React, { ComponentPropsWithoutRef, FC, ReactNode } from "react";

type Props = ComponentPropsWithoutRef<"p"> & {
  children: ReactNode;
  className?: string;
};

export const Description: FC<Props> = (props: Props) => {
  const { children, className, ...rest } = props;
  return (
    <p className={`pb-2 ${className}`} {...rest}>
      {children}
    </p>
  );
};

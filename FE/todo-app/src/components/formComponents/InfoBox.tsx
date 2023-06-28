import React, { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"p"> & {
  children: ReactNode;
};

export const InfoBox: FC<Props> = ({ children, ...rest }) => {
  const infoBoxClass = cn("border-t  mx-10 flex justify-center px-4 py-2");
  return (
    <div className={infoBoxClass}>
      <p {...rest}>{children}</p>
    </div>
  );
};

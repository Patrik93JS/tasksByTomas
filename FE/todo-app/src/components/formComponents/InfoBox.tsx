import React, { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export const InfoBox: FC<PropsWithChildren<ComponentPropsWithoutRef<"p">>> = ({ children, ...rest }) => {
  const infoBoxClass = cn("border-t  mx-10 flex justify-center px-4 py-2");
  return (
    <div className={infoBoxClass}>
      <p {...rest}>{children}</p>
    </div>
  );
};

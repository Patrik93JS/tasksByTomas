import React, { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"p"> & {
  children: string;
};

export const InfoBox = (props: Props) => {
  const { children, ...rest } = props;
  const infoBoxClass = cn("border-t  mx-10 flex justify-center px-4 py-2");
  return (
    <div className={infoBoxClass}>
      <p {...rest}>{children}</p>
    </div>
  );
};

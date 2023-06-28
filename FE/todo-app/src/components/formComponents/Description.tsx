import React, { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"p"> & {
  className?: string;
};

export const Description: FC<Props> = ({ className, ...rest }) => {
  const descriptionStyle = cn("pb-2");
  return <p className={descriptionStyle} {...rest} />;
};

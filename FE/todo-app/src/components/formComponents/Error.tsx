import React, { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"p"> & {
  errorMsg?: string;
  className?: string;
  ariaLabel?: string;
  ariaLive?: "off" | "polite" | "assertive";
  ariaAtomic?: boolean;
};

export const Error: FC<Props> = (props: Props) => {
  const { errorMsg, className, ariaLabel, ariaLive, ariaAtomic, ...rest } = props;
  const errorClass = cn(`flex justify-center text-red-500 ${className}`);
  return (
    <div className={errorClass}>
      <p aria-label={ariaLabel} aria-live={ariaLive} aria-atomic={ariaAtomic} {...rest}>
        {errorMsg}
      </p>
    </div>
  );
};

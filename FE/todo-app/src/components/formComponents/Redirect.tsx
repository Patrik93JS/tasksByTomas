import React, { FC, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import styles from "./Components.module.css";
import { cn } from "@/lib/utils";

type Props = LinkProps & {
  children?: ReactNode;
  className?: string;
};

export const Redirect: FC<Props> = (props: Props) => {
  const { children, className, ...rest } = props;
  const linkClass = cn(`${styles.redirect} ${className}`);

  return (
    <Link className={linkClass} {...rest}>
      {children}
    </Link>
  );
};

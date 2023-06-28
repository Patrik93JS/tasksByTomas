import React, { FC, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import styles from "./Components.module.css";

type Props = LinkProps & {
  children?: ReactNode;
  className?: string;
};

export const Redirect: FC<Props> = (props: Props) => {
  const { children, className, ...rest } = props;
  return (
    <Link className={`${styles.redirect} ${className}`} {...rest}>
      {children}
    </Link>
  );
};

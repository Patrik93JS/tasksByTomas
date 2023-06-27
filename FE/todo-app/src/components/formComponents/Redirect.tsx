import React, { FC, ReactNode } from "react";
import Link from "next/link";
import styles from "./Components.module.css";

type Props = {
  path: string;
  children?: ReactNode;
  className?: string;
};

export const Redirect: FC<Props> = ({ path, children, className }) => {
  return (
    <Link href={path} className={`${styles.redirect} ${className}`}>
      {children}
    </Link>
  );
};

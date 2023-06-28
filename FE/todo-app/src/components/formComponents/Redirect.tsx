import React, { FC, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
import styles from "./Components.module.css";
import { cn } from "@/lib/utils";

export const Redirect: FC<PropsWithChildren<LinkProps>> = ({ children, ...rest }) => {
  const linkClass = cn(`${styles.redirect} `);

  return (
    <Link className={linkClass} {...rest}>
      {children}
    </Link>
  );
};

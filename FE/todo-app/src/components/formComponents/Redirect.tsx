import React, { FC, HTMLProps, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import styles from "./Components.module.css";
import { cn } from "@/lib/utils";

// type Props = LinkProps & {};

export const Redirect: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({ children, ...rest }) => {
  const linkClass = cn(`${styles.redirect} `);

  return (
    <Link className={linkClass} {...rest}>
      {children}
    </Link>
  );
};

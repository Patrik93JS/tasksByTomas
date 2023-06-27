import React, { FC } from "react";
import styles from "./Components.module.css";
import { useRouter } from "next/navigation";

type Props = {
  path: string;
  label?: string;
};

export const RedirectButton: FC<Props> = ({ path, label }) => {
  const router = useRouter();

  return (
    <button className={styles.submitButton} onClick={() => router.push(path)}>
      {label}
    </button>
  );
};

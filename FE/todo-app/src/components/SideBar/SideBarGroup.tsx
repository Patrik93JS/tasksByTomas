import { FC } from "react";
import styles from "./SideBar.module.css";

type Props = {
  title: string | null;
};

export const SideBarGroup: FC<Props> = ({ title }) => {
  const titleLetter = title?.charAt(0).toUpperCase();

  return (
    <button className={`${styles.sidebar} group`}>
      {titleLetter}
      <span className={`${styles.sidebarTooltip} group-hover:scale-100`}>{title}</span>
    </button>
  );
};

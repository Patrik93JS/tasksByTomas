import { FC } from "react";
import styles from "./SideBar.module.css";
import { useAppDispatch } from "@/store/hooks";
import { setIdGroup } from "@/store/slices/idGroupToDo";

type Props = {
  title: string | null;
  idGroup: number;
};

export const SideBarGroup: FC<Props> = ({ title, idGroup }) => {
  const dispatch = useAppDispatch();

  const titleLetter = title?.charAt(0).toUpperCase();

  return (
    <button className={`${styles.sidebar} group`} onClick={() => dispatch(setIdGroup(idGroup))}>
      {titleLetter}
      <span className={`${styles.sidebarTooltip} group-hover:scale-100`}>{title}</span>
    </button>
  );
};

import { FC, ReactNode } from "react";
import styles from "./TopNavigation.module.css";

type Props = {
  icon: ReactNode;
  text?: string;
};

export const TopNavigationIcon: FC<Props> = ({ icon, text }) => (
  <div className={`${styles.topNavigationIconAction} group`}>
    {icon}
    <span className={`${styles.topNavigationTooltip} group-hover:scale-100`}>
      {text}
    </span>
  </div>
);

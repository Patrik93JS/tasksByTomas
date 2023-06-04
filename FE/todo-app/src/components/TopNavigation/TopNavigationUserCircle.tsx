import { FC } from "react";
import { FaUserCircle } from "react-icons/fa";
import styles from "./TopNavigation.module.css";

export const UserCircle: FC = () => (
  <FaUserCircle size="24" className={styles.topNavigationIconAccount} />
);

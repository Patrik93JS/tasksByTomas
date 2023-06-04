import { FC } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./TopNavigation.module.css";

export const Search: FC = () => (
  <div className={styles.topNavigationSearch}>
    <input
      className={styles.topNavigationSearchInput}
      type="text"
      placeholder="Search..."
    />
    <FaSearch
      size="18"
      className={`${styles.topNavigationSearchIcon} my-auto`}
    />
  </div>
);

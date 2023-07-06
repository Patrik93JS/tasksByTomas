import { ChangeEvent, FC } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./TopNavigation.module.css";
import { cn } from "@/lib/utils";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TopNavigationSearch: FC<Props> = ({ onChange }) => {
  const searchClass = cn(`${styles.topNavigationSearchIcon} my-auto`);

  return (
    <div className={styles.topNavigationSearch}>
      <input className={styles.topNavigationSearchInput} type="text" placeholder="Search..." onChange={onChange} />
      <FaSearch size="18" className={searchClass} />
    </div>
  );
};

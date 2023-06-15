import { FC } from "react";
import { FaUserCircle } from "react-icons/fa";
import styles from "./TopNavigation.module.css";
import { useModal } from "@/hooks/useModal";

export const UserCircle: FC = () => {
  const { isOpen, toggle } = useModal();
  return (
    <>
      <button onClick={toggle}>
        <FaUserCircle size="24" className={styles.topNavigationIconAccount} />
      </button>
      {isOpen && (
        <div className={styles.topNavigationAccountModal}>
          <div className="border-b mx-10">
            <div className="flex justify-center px-4 pb-2">Account</div>
          </div>
        </div>
      )}
    </>
  );
};

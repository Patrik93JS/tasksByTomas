import { FC } from "react";
import { BsPlus, BsCheckLg, BsCollection, BsFileEarmarkPlusFill } from "react-icons/bs";

import styles from "./TopNavigation.module.css";
import { Search } from "./TopNavigationSearch";
import { Title } from "./TopNavigationTitle";
import { TopNavigationIcon } from "./TopNavigationIcon";
import { UserCircle } from "./TopNavigationUserCircle";
import { CreateGroupForm } from "../createGroupForm/CreateGroupForm";
import { useModal } from "@/hooks/useModal";
import { useAppSelector } from "@/store/hooks";
import { CreateToDoForm } from "../createToDoForm/CreateToDoForm";

export const TopNavigation: FC = () => {
  const { isOpen, open, close } = useModal();
  const { isOpen: isToDoFormOpen, open: openToDoForm, close: closeToDoForm } = useModal();

  const { idGroup } = useAppSelector(({ idGroupToDo }) => idGroupToDo);

  return (
    <div className={styles.topNavigation}>
      <Title />
      <TopNavigationIcon icon={<BsPlus size="32" />} text="Add New Group" onClick={open} />
      {idGroup ? (
        <TopNavigationIcon icon={<BsFileEarmarkPlusFill size="28" />} text="Add New ToDo" onClick={openToDoForm} />
      ) : (
        <BsFileEarmarkPlusFill size="28" className={styles.topNavigationIconDisabled} />
      )}
      <TopNavigationIcon icon={<BsCheckLg size="28" />} text="Completed" />
      <TopNavigationIcon icon={<BsCollection size="28" />} text="All" />
      <Search />
      <UserCircle />
      <CreateGroupForm open={isOpen} closeModal={close} />
      <CreateToDoForm open={isToDoFormOpen} closeModal={closeToDoForm} />
    </div>
  );
};

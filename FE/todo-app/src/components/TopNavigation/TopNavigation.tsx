import { FC, useState } from "react";
import { BsPlus, BsCheckLg, BsCollection } from "react-icons/bs";
import styles from "./TopNavigation.module.css";
import { Search } from "./TopNavigationSearch";
import { Title } from "./TopNavigationTitle";
import { TopNavigationIcon } from "./TopNavigationIcon";
import { UserCircle } from "./TopNavigationUserCircle";
import { CreateGroupInput } from "../createGroupForm/CreateGroupInput";

export const TopNavigation: FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={styles.topNavigation}>
      <Title />
      <TopNavigationIcon
        icon={<BsPlus size="32" />}
        text="Add New Group"
        onClick={handleOpen}
      />
      <TopNavigationIcon icon={<BsCheckLg size="28" />} text="Completed" />
      <TopNavigationIcon icon={<BsCollection size="28" />} text="All" />
      <Search />
      <UserCircle />

      <CreateGroupInput open={open} setOpen={setOpen} />
    </div>
  );
};

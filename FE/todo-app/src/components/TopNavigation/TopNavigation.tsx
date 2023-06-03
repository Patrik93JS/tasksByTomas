import { FC } from "react";
import { Search } from "./TopNavigationSearch";
import { Title } from "./TopNavigationTitle";
import { UserCircle } from "./TopNavigationUserCircle";
import { BsPlus, BsCheckLg, BsCollection } from "react-icons/bs";
import { TopNavigationIcon } from "./TopNavigationIcon";

export const TopNavigation: FC = () => {
  return (
    <div className="top-navigation">
      <Title />
      <TopNavigationIcon icon={<BsPlus size="32" />} text="Add New Group" />
      <TopNavigationIcon icon={<BsCheckLg size="28" />} text="Completed" />
      <TopNavigationIcon icon={<BsCollection size="28" />} text="All" />
      <Search />
      <UserCircle />
    </div>
  );
};

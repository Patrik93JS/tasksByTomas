import { FC } from "react";
import { Search } from "./TopNavigationSearch";
import { Title } from "./TopNavigationTitle";
import { UserCircle } from "./TopNavigationUserCircle";

export const TopNavigation: FC = () => {
  return (
    <div className="top-navigation">
      <Title />
      <Search />
      <UserCircle />
    </div>
  );
};

import { Search } from "./TopNavigationSearch";
import { Title } from "./TopNavigationTitle";
import { UserCircle } from "./TopNavigationUserCircle";

export const TopNavigation = () => {
  return (
    <div className="top-navigation">
      <Title />
      <Search />
      <UserCircle />
    </div>
  );
};

import { FaSearch, FaUserCircle } from "react-icons/fa";

export default function TopNavigation() {
  return (
    <div className="top-navigation">
      <Title />
      <Search />
      <UserCircle />
    </div>
  );
}

const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search..." />
    <FaSearch size="18" className="text-secondary my-auto" />
  </div>
);

const UserCircle = () => (
  <FaUserCircle size="24" className="top-navigation-icon" />
);
const Title = () => <h5 className="title-text">ToDo Application</h5>;

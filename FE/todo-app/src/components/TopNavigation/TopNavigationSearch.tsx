import { FC } from "react";
import { FaSearch } from "react-icons/fa";

export const Search: FC = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search..." />
    <FaSearch size="18" className="search-icon my-auto" />
  </div>
);

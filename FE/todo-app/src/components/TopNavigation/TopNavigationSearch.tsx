import { FC } from "react";
import { FaSearch } from "react-icons/fa";

export const Search: FC = () => (
  <div className="top-navigation-search">
    <input
      className="top-navigation-search-input"
      type="text"
      placeholder="Search..."
    />
    <FaSearch size="18" className="top-navigation-search-icon my-auto" />
  </div>
);

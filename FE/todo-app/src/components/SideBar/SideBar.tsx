import React, { FC } from "react";
import { SideBarGroup } from "./SideBarGroup";
import { TopNavigationIcon } from "../topNavigation/TopNavigationIcon";
import { BsPlus } from "react-icons/bs";

export const SideBar: FC = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 mt-0 flex flex-col bg-myPrimary text-white shadow-lg">
      <SideBarGroup title="Ahoj" />
      <SideBarGroup title="Ratratahoj" />
      <SideBarGroup title="Hihihoj" />
      <SideBarGroup title="Papahoj" />
    </div>
  );
};

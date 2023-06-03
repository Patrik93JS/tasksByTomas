import React, { FC } from "react";
import { CardGroup } from "../CardGroup/CardGroup";
import { TopNavigationIcon } from "../TopNavigation/TopNavigationIcon";
import { BsPlus } from "react-icons/bs";

export const SideBar: FC = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 mt-0 flex flex-col bg-myPrimary text-white shadow-lg">
      <CardGroup title="Ahoj" />
      <CardGroup title="Ratratahoj" />
      <CardGroup title="Hihihoj" />
      <CardGroup title="Papahoj" />
    </div>
  );
};

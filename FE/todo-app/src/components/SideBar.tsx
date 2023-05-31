import React, { ReactNode } from "react";
import { BsPlus, BsCheckLg, BsCollection } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 mt-0 flex flex-col bg-myPrimary text-white shadow-lg">
      <SideBarIcon icon={<BsPlus size="28" />} text="Add New Group" />
      <SideBarIcon icon={<BsCheckLg size="28" />} text="Completed" />
      <SideBarIcon icon={<BsCollection size="28" />} text="All" />
    </div>
  );
}

type SideBarIconProps = {
  icon: ReactNode;
  text?: string;
};

const SideBarIcon = ({ icon, text }: SideBarIconProps) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

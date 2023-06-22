import React, { FC } from "react";
import { SideBarGroup } from "./SideBarGroup";
import { useGetGroupsQuery } from "@/store/api/groupToDoApi";

export const SideBar: FC = () => {
  const getGroups = useGetGroupsQuery();
  const title = getGroups.data?.data.attributes.map((e) => e.title);

  console.log("title", title);
  return (
    <div className="fixed top-0 left-0 h-screen w-16 mt-0 flex flex-col bg-myPrimary text-white shadow-lg">
      <SideBarGroup title="Ahoj" />
      <SideBarGroup title="Ratratahoj" />
      <SideBarGroup title="Hihihoj" />
      <SideBarGroup title="Papahoj" />
    </div>
  );
};

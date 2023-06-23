import React, { FC } from "react";
import { SideBarGroup } from "./SideBarGroup";
import { useGetGroupsQuery } from "@/store/api/groupToDoApi";

export const SideBar: FC = () => {
  const { data } = useGetGroupsQuery();

  console.log("title", data);
  return (
    <div className="fixed top-0 left-0 h-screen w-16 mt-0 flex flex-col bg-myPrimary text-white shadow-lg">
      {data &&
        data.data.map((group) => {
          return <SideBarGroup title={group.attributes.title} key={group.id} idGroup={group.id} />;
        })}
    </div>
  );
};

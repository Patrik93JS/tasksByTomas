import React, { FC } from "react";
import { SideBarGroup } from "./SideBarGroup";
import { useGetGroupsQuery } from "@/store/api/groupToDoApi";
import { cn } from "@/lib/utils";
import styles from "./SideBar.module.css";

export const SideBar: FC = () => {
  const { data } = useGetGroupsQuery();
  const container = cn(styles.container);

  return (
    <div className={container}>
      {data?.data.map((group) => {
        return <SideBarGroup title={group.attributes.title} key={group.id} idGroup={group.id} />;
      })}
    </div>
  );
};

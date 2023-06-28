import React, { FC } from "react";
import { useGetToDosQuery } from "@/store/api/todoApi";

export const ToDo: FC = () => {
  const { data } = useGetToDosQuery();
  const todo = data?.data.map((e) => e.attributes.title);

  return <div>{todo}</div>;
};

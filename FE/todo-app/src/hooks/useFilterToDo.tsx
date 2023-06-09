"use client";
import { useGetToDosQuery } from "@/store/api/todoApi";
import { useAppSelector } from "@/store/hooks";
import { useCallback, useMemo } from "react";

export const useFilteredToDos = () => {
  const { data } = useGetToDosQuery();
  const { idGroup } = useAppSelector(({ idGroupToDo }) => idGroupToDo);
  const { filter, searchValue } = useAppSelector(({ filter }) => filter);

  const handleSearch = useCallback(() => {
    const filteredData = data?.data.filter(
      (item) => item.attributes.to_do_group.data?.id === idGroup && item.attributes.title.includes(searchValue)
    );
    return filteredData;
  }, [data?.data, idGroup, searchValue]);

  const handleComplete = useCallback(() => {
    const completeData = data?.data.filter((item) => item.attributes.to_do_group.data?.id === idGroup && item.attributes.completed);
    return completeData;
  }, [data?.data, idGroup]);

  const handleIdGroup = useCallback(() => {
    const idGroupData = data?.data.filter(
      (item) => item.attributes.to_do_group.data?.id === idGroup && item.attributes.to_do_group.data.id === idGroup
    );
    return idGroupData;
  }, [data?.data, idGroup]);

  const filteredTodos = useMemo(() => {
    if (filter === "complete") {
      return handleComplete();
    } else if (filter === "search") {
      return handleSearch();
    } else if (filter === "all") {
      return data?.data;
    } else {
      return handleIdGroup();
    }
  }, [filter, handleComplete, handleSearch, data?.data, handleIdGroup]);

  return { filteredTodos };
};

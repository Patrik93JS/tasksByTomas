"use client";
import { useGetToDosQuery } from "@/store/api/todoApi";
import { ToDo } from "../components/getToDo/ToDo";
import styles from "./page.module.css";
import { useModal } from "@/hooks/useModal";
import { useAppSelector } from "@/store/hooks";

export default function Home() {
  const { data } = useGetToDosQuery();
  const { isOpen, open, close } = useModal();
  const { idGroup } = useAppSelector(({ idGroupToDo }) => idGroupToDo);
  const { filter, searchValue } = useAppSelector(({ filter }) => filter);

  const handleSearch = () => {
    const filteredData = data?.data.filter((item) => item.attributes.title.includes(searchValue));

    return filteredData;
  };
  const filteredData = handleSearch();

  const handleComplete = () => {
    const completeData = data?.data.filter((item) => item.attributes.completed);
    return completeData;
  };
  const completeData = handleComplete();

  const handleIdGroup = () => {
    const idGroupData = data?.data.filter((item) => item.attributes.to_do_group.data.id === idGroup);
    return idGroupData;
  };
  const idGroupData = handleIdGroup();

  return (
    <>
      <main>
        <div className={styles.toDoContainer}>
          {filter === "complete"
            ? completeData?.map((todo) => {
                return <ToDo todo={todo} key={todo.id} isOpen={isOpen} open={open} close={close} />;
              })
            : filter === "search"
            ? filteredData?.map((todo) => {
                return <ToDo todo={todo} key={todo.id} isOpen={isOpen} open={open} close={close} />;
              })
            : filter === "all"
            ? data?.data.map((todo) => {
                return <ToDo todo={todo} key={todo.id} isOpen={isOpen} open={open} close={close} />;
              })
            : idGroupData?.map((todo) => {
                return <ToDo todo={todo} key={todo.id} isOpen={isOpen} open={open} close={close} />;
              })}
        </div>
      </main>
    </>
  );
}

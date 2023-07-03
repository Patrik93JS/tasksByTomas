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

  return (
    <>
      <main>
        <div className={styles.toDoContainer}>
          {data?.data
            .filter((item) => item.attributes.to_do_group?.data?.id == idGroup)
            .map((todo) => {
              return (
                <ToDo
                  id={todo.id}
                  title={todo.attributes.title}
                  mustBeCompleted={todo.attributes.mustBeCompleted}
                  description={todo.attributes.description}
                  key={todo.id}
                  isOpen={isOpen}
                  open={open}
                  close={close}
                />
              );
            })}
        </div>
      </main>
    </>
  );
}

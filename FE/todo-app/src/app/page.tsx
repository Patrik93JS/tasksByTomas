"use client";
import { useGetToDosQuery } from "@/store/api/todoApi";
import { ToDo } from "../components/getToDo/ToDo";
import styles from "./page.module.css";
import { useModal } from "@/hooks/useModal";

export default function Home() {
  const { data } = useGetToDosQuery();
  const { isOpen, open, close } = useModal();

  return (
    <>
      <main>
        <div className={styles.toDoContainer}>
          {data?.data.map((todo) => {
            const mustBeCompleted = todo.attributes.mustBeCompleted.toLocaleString().split("T")[0].split("-").reverse().join("-");

            return (
              <ToDo
                title={todo.attributes.title}
                mustBeCompleted={mustBeCompleted}
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

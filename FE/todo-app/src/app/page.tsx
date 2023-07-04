"use client";
import { ToDo } from "../components/getToDo/ToDo";
import styles from "./page.module.css";
import { useModal } from "@/hooks/useModal";
import { useFilteredToDos } from "../hooks/useFilterToDo";

export default function Home() {
  const { isOpen, open, close } = useModal();
  const { useFilteredToDo } = useFilteredToDos();

  return (
    <>
      <main>
        <div className={styles.toDoContainer}>
          {useFilteredToDo?.map((todo) => {
            return <ToDo todo={todo} key={todo.id} isOpen={isOpen} open={open} close={close} />;
          })}
        </div>
      </main>
    </>
  );
}

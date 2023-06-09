"use client";
import { ToDo } from "../components/todo/ToDo";
import styles from "./page.module.css";
import { useModal } from "@/hooks/useModal";
import { useFilteredToDos } from "../hooks/useFilterToDo";

export default function Home() {
  const { isOpen, open, close } = useModal();
  const { filteredTodos } = useFilteredToDos();

  return (
    <>
      <main>
        <div className={styles.toDoContainer}>
          {filteredTodos?.map((todo) => {
            return <ToDo todo={todo} key={todo.id} isOpen={isOpen} open={open} close={close} />;
          })}
        </div>
      </main>
    </>
  );
}

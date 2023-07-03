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

  console.log("idGroup", idGroup);
  console.log("data", data);
  console.log(
    "data ID",
    data?.data.map((e) => e.attributes.to_do_group?.data?.id)
  );
  console.log(
    "complete",
    data?.data.map((e) => e.attributes.completed)
  );
  return (
    <>
      <main>
        <div className={styles.toDoContainer}>
          {data?.data
            .filter((item) => item.attributes.to_do_group?.data?.id == idGroup)
            .map((todo) => {
              const mustBeCompleted = todo.attributes.mustBeCompleted?.toLocaleString().split("T")[0].split("-").reverse().join("-");

              return (
                <ToDo
                  id={todo.id}
                  title={todo.attributes.title}
                  mustBeCompleted={mustBeCompleted}
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

"use client";
import { ToDo } from "../components/getToDo/ToDo";

export default function Home() {
  return (
    <>
      <main className="grid-cols-3 flex justify-center p-24">
        <ToDo />
      </main>
    </>
  );
}

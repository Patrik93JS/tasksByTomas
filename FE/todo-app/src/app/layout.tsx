"use client";

import "./globals.css";
import { ReactNode } from "react";
import { SideBar } from "../components/SideBar/SideBar";
import { TopNavigation } from "../components/TopNavigation/TopNavigation";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <TopNavigation />
        <SideBar />
        <div>{children}</div>
      </body>
    </html>
  );
}

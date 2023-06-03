"use client";

import "./globals.css";
import { ReactNode } from "react";
import { SideBar } from "../components/SideBar/SideBar";
import { TopNavigation } from "../components/TopNavigation/TopNavigation";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopNavigation />
        <SideBar />
        <div className="content-container">{children}</div>
      </body>
    </html>
  );
}

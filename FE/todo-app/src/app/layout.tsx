"use client";

import "./globals.css";
import { ReactNode } from "react";
import { SideBar } from "../components/sideBar/SideBar";
import { TopNavigation } from "../components/topNavigation/TopNavigation";

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

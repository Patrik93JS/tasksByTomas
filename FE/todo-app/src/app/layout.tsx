"use client";

import "./globals.css";
import { ReactNode } from "react";
import { SideBar } from "../components/sideBar/SideBar";
import { TopNavigation } from "../components/topNavigation/TopNavigation";
import { Providers } from "../store/provider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div id="modalRoot">
            <TopNavigation />
            <SideBar />
            <div className="content-container">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

"use client";

import "./globals.css";
import { ReactNode } from "react";
import { SideBar } from "../components/sideBar/SideBar";
import { TopNavigation } from "../components/topNavigation/TopNavigation";
import { Providers } from "../store/provider";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: ReactNode }) {
  const withoutLayout = "/login";
  ("/registration");

  const hideLayout = usePathname().includes(withoutLayout);

  return (
    <html lang="en">
      <body>
        <Providers>
          <div id="modalRoot">
            {!hideLayout && (
              <>
                <TopNavigation />
                <SideBar />
              </>
            )}
            <div className="content-container">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

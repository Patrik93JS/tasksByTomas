"use client";

import "./globals.css";
import { ReactNode } from "react";
import { SideBar } from "../components/sideBar/SideBar";
import { TopNavigation } from "../components/topNavigation/TopNavigation";
import { Providers } from "../store/provider";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const withoutLayout = ["/login", "/registration"];
  const pathname = usePathname();
  const hideLayout = withoutLayout.includes(pathname);

  return (
    <html lang="en">
      <body>
        <Providers>
          <div id="modalRoot ">
            {!hideLayout && (
              <>
                <SideBar />
                <TopNavigation />
              </>
            )}
            <div className={styles.contentContainer}>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

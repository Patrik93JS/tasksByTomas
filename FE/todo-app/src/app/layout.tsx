'use client'; // prettier-ignore
// import "./globals.css";
import { Inter } from "next/font/google";

import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <body> {children}</body>
    </>
  );
}

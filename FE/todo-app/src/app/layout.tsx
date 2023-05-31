'use client'; // prettier-ignore
// import "./globals.css";
import { Inter } from "next/font/google";

import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="text-indigo-500">
        <NavigationMenu className="bg-black">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="text-gray-700">{"ahoj"}</div>
        <p className="text-sky-400">The quick brown fox...</p>
        <div>{children}</div>
      </body>
    </html>
  );
}

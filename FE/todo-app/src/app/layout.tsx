"use client";

import "./globals.css";
import { ReactNode } from "react";
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
			<body className="text-indigo-500 p-10">
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
				<h1 className="text-3xl font-bold underline">Hello world!</h1>
				<div className="text-gray-700">ahoj</div>
				<p className="text-sky-400">The quick brown fox...</p>
				<div>{children}</div>
			</body>
		</html>
	);
}

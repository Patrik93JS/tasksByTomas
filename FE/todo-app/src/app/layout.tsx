"use client";

import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "../store/provider";
import { usePathname } from "next/navigation";
import { TopNavigation } from "@/components/TopNavigation/TopNavigation";
import { SideBar } from "@/components/SideBar/SideBar";

export default function RootLayout({ children }: { children: ReactNode }) {
	const withoutLayout = ["/login", "/registration"];
	const pathname = usePathname();
	const hideLayout = withoutLayout.includes(pathname);

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

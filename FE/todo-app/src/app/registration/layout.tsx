import { ReactNode } from "react";

import { Providers } from "@/store/provider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div>
            <div>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

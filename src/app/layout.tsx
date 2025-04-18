import type { Metadata } from "next";

import './globals.css'
import ToolBar from "@/_custom_components/ToolBar/ToolBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        {/* <ToolBar /> */}
        <main className="flex flex-1 container mx-auto py-4">{children}</main>
      </body>
    </html>
  );
}

import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import React from "react";
import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Toolbar from "@/components/ui/Toolbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s - " + siteConfig.name,
  },
  description: siteConfig.description,
  icons: {
    icon: siteConfig.icons.icon,
    apple: siteConfig.icons.apple,
    shortcut: siteConfig.icons.shortcut,
  },
  other: siteConfig.other,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable,)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className={"relative flex flex-col h-screen max-w-8xl"}>
            <Toolbar />
            {children}
            <footer className={"w-full flex items-center justify-center py-3"} />
          </div>
        </Providers>
      </body>
    </html>
  );
}

import Topnav from "./page2/Topnav";
import "menubar/styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Matcha Lover",
  description: "I love Matcha!",
  icons: [{ rel: "icon", url: "/matchalover_icon.svg" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <Topnav />
        {children}
      </body>
    </html>
  );
}

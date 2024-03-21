/* eslint-disable react/no-children-prop */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ProviderInstructor from "@/store/providerInstructor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Learning",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderInstructor children={children} />
      </body>
    </html>
  );
}

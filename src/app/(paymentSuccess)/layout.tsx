import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import ProviderPaymentSuccess from "@/store/ProviderPaymentSeccess";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Learning",
  description: "Generated by create next app",
};

export default function ResgisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderPaymentSuccess children={children} />
        {/* <ProviderPaymentSuccess>{children}</ProviderPaymentSuccess> */}
      </body>
    </html>
  );
}

// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "OneSix Store",
  description: "Premium Tech & Gear – OneSix E-commerce",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth bg-[#0b0b0b] text-white">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

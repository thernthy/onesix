// components/ClientLayout.tsx
"use client";

import MotionProvider from "@/components/MotionProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ProgressBar
        height="3px"
        color="#e50914"
        options={{ showSpinner: false }}
      />
      <MotionProvider>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </MotionProvider>
    </>
  );
}

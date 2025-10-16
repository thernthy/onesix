// components/ClientLayout.tsx
"use client";

import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ProgressBar
        height="3px"
        color="#e50914"
        options={{ showSpinner: false }}
      />
      <Navbar />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </>
  );
}

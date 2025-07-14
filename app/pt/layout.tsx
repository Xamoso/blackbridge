// app/pt/layout.tsx

import React from "react";
import HeaderPT from "@/app/_components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderPT />
      <main>{children}</main>
    </>
  );
}

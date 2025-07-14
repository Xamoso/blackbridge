// app/en/layout.tsx

import React from "react";
import HeaderEN from "@/app/_components/header-en";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderEN />
      <main>{children}</main>
    </>
  );
}

// app/es/layout.tsx

import React from "react";
import HeaderES from "@/app/_components/header-es";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderES />
      <main>{children}</main>
    </>
  );
}

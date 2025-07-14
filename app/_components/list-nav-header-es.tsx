import Link from "next/link";
import React from "react";

const ListNavHeaderES = () => {
  return (
    <nav className="hidden items-center justify-center gap-6 md:flex">
      <ul className="flex items-center gap-4">
        <Link href="/es">
          <li className="text-sm text-white hover:text-[#0097b2]">Inicio</li>
        </Link>
        <Link href="/es/sobre">
          <li className="text-sm text-white hover:text-[#0097b2]">Sobre</li>
        </Link>
        <Link href="/es/insight">
          <li className="text-sm text-white hover:text-[#0097b2]">Insight</li>
        </Link>
        {/*
        <Link href="/es/informe">
          <li className="text-sm text-white hover:text-[#0097b2]">Informe</li>
        </Link>
        /*}
        {/* <Link href="/es/workshop">
          <li className="text-sm text-white hover:text-yellow-color">Taller</li>
        </Link> */}
      </ul>
    </nav>
  );
};

export default ListNavHeaderES;

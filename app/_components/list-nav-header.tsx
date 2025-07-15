import Link from "next/link";
import React from "react";

const ListNavHeader = () => {
  return (
    <nav className="hidden items-center justify-center gap-6 md:flex">
      <ul className="flex items-center gap-4">
        <Link
          className="text-sm text-white transition-all delay-75 hover:text-[#0097b2]"
          href="/"
        >
          <li>Home</li>
        </Link>
        <Link
          className="text-sm text-white transition-all delay-75 hover:text-[#0097b2]"
          href="/pt/sobre"
        >
          <li>Sobre</li>
        </Link>
        <Link
          className="text-sm text-white transition-all delay-75 hover:text-[#0097b2]"
          href="/pt/insight"
        >
          <li>Insight</li>
        </Link>
        
        <Link
          className="text-sm text-white transition-all delay-75 hover:text-[#0097b2]"
          href="/pt/broker"
        >
          <li>Broker Exclusivo</li>
        </Link>
        
        {/* Ocultado temporariamente - Workshop
        <Link
          className="text-sm text-white transition-all delay-75 hover:text-yellow-color"
          href="/workshop"
        >
          <li>Workshop</li>
        </Link>
        */}
      </ul>
    </nav>
  );
};

export default ListNavHeader;

import Link from "next/link";
import React from "react";

const ListNavHeaderEN = () => {
  return (
    <nav className="hidden items-center justify-center gap-6 md:flex">
      <ul className="flex items-center gap-4">
        <Link href="/en">
          <li className="text-sm text-white hover:text-[#0097b2]">Home</li>
        </Link>
        <Link href="/en/about">
          <li className="text-sm text-white hover:text-[#0097b2]">About</li>
        </Link>
        <Link href="/en/insight">
          <li className="text-sm text-white hover:text-[#0097b2]">Insight</li>
        </Link>
                <Link href="/en/broker">
          <li className="text-sm text-white hover:text-[#0097b2]">Execution Broker</li>
        </Link>
        <Link href="/en/contact">
          <li className="text-sm text-white hover:text-[#0097b2]">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default ListNavHeaderEN;

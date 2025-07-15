"use client";

import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import MenuNavItemsPT from "./menu-nav-items-pt";
import MenuNavItemsEN from "./menu-nav-items-en";
import MenuNavItemsES from "./menu-nav-items-es";
import LanguageSwitcherBurger from "./language-switcher-burger";

const MenuBurguer = ({ closeMenu }: { closeMenu: () => void }) => {
  const pathname = usePathname();

  const getMenuComponent = () => {
    if (pathname.startsWith("/en")) return <MenuNavItemsEN />;
    if (pathname.startsWith("/es")) return <MenuNavItemsES />;
    return <MenuNavItemsPT />;
  };

  const getHomeHref = () => {
    if (pathname.startsWith("/en")) return "/en";
    if (pathname.startsWith("/es")) return "/es";
    return "/pt";
  };

  return (
    <div className="fixed inset-0 z-50 bg-black text-white px-4 pt-20">
      {/* Botão Fechar */}
      <button
        className="absolute right-4 top-4 text-[#0097b2]"
        onClick={closeMenu}
        aria-label="Fechar menu"
      >
        <X size={32} />
      </button>

      {/* Logo + Idiomas (apenas no mobile) */}
      <div className="absolute left-4 top-4 flex flex-col items-start gap-3 md:hidden">
        {/* Logo como botão de home */}
        <Link
          href={getHomeHref()}
          onClick={closeMenu}
          aria-label="Ir para Home"
        >
          <Image
            src="/logo-aurum.svg"
            alt="Logo Aurum"
            width={100}
            height={24}
            priority
          />
        </Link>

        {/* Botões de idioma (apenas no mobile) */}
        <LanguageSwitcherBurger />
      </div>

      {/* Menu de navegação centralizado horizontalmente */}
      <nav
        className="flex flex-col items-center justify-center gap-6 text-lg mt-28 w-full text-center"
        onClick={closeMenu}
      >
        {getMenuComponent()}
      </nav>
    </div>
  );
};

export default MenuBurguer;

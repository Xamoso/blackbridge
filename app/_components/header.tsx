"use client";

import { Menu } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import ListNavHeader from "./list-nav-header";
import Logo from "./logo";
import MenuBurguer from "./menu-burguer";
import LanguageSwitcher from "./language-switcher";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 1024) {
      closeMenu();
    }
  }, [closeMenu]);

  useEffect(() => {
    const updateBodyOverflow = () => {
      document.body.style.overflow = menuOpen ? "hidden" : "";
    };
    updateBodyOverflow();
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <header className="absolute left-0 right-0 top-0 z-50 mx-auto flex max-w-6xl items-center justify-between p-4">
      {/* Esquerda: Logo + Navegação */}
      <div className="flex items-center gap-8">
        <Logo />
        <ListNavHeader />
      </div>

      {/* Direita: Idiomas no desktop */}
      <div className="hidden md:flex">
        <LanguageSwitcher />
      </div>

      {/* Menu hamburguer no mobile */}
      <Menu
        className="block cursor-pointer md:hidden"
        color="#0097b2"
        size={32}
        onClick={openMenu}
      />

      {menuOpen && <MenuBurguer closeMenu={closeMenu} />}
    </header>
  );
};

export default Header;

"use client";

import { CloseCircle, HambergerMenu } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";

const menuData = [
  { id: 0, title: "Home", href: "#" },
  { id: 1, title: "Sobre", href: "#about" },
  { id: 2, title: "Formulário", href: "#form" },
];

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu(!openMenu);
  }
  return (
    <nav
      className={`flex z-20 fixed top-0 w-full flex-col h-fit items-center ease-linear duration-300 ${
        !openMenu
          ? "bg-white/30 dark:bg-dark/30 backdrop-blur-sm"
          : "bg-white dark:bg-dark"
      }`}
    >
      <div className="flex flex-row items-center justify-between max-w-7xl w-4/5 h-[100px]">
        <Image
          alt="Logomarca"
          width={220}
          height={33}
          src={"/images/logo.svg"}
          className="flex dark:hidden"
        />
        <Image
          alt="Logomarca"
          width={220}
          height={33}
          src={"/images/logoDarkMode.svg"}
          className="hidden dark:flex"
        />
        <button onClick={handleMenu}>
          {!openMenu ? (
            <HambergerMenu size="32" color="#4D77FF" variant="TwoTone" />
          ) : (
            <CloseCircle size="32" color="#4D77FF" variant="TwoTone" />
          )}
        </button>
      </div>

      <ul
        className={` ${
          !openMenu
            ? "opacity-0 h-[0px] pb-0"
            : "opacity-100 h-[160px] border-t-2 border-main/40"
        } flex flex-col w-full items-center justify-center gap-4 ease-linear duration-300`}
      >
        {menuData.map((item) => (
          <li key={item.id}>
            <a
              onClick={handleMenu}
              href={item.href}
              className="w-full text-start"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

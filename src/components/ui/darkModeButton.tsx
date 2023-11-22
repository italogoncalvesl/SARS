"use client";

import { Moon } from "iconsax-react";
import { useState } from "react";

export default function DarkModeButton() {
  const [theme, setTheme] = useState("light");

  function handleTheme() {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }
  return (
    <button
      className="rounded-full bg-main dark:bg-white shadow-xl shadow-dark-300 dark:shadow-main/30 fixed bottom-24 right-4 p-6"
      onClick={handleTheme}
    >
      <Moon size={18} className="text-white dark:text-main" />
    </button>
  );
}

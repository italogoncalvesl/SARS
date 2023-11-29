"use client";

import { useState } from "react";

export default function Switch({ ...props }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked((current) => !current);
  };

  return (
    <div className="flex items-center">
      <label
        htmlFor="toggle"
        className="cursor-pointer flex min-w-[150px] w-full justify-between flex-row h-fit"
      >
        <span className="text-center">Não</span>
        <div className="relative flex w-12">
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isChecked}
            onChange={toggleSwitch}
            {...props}
          />
          <div
            className={`toggle__line w-10 h-4 rounded-full shadow-inner absolute top-1 left-0 ${
              isChecked ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
          <div
            className={`toggle__dot absolute w-6 h-6 rounded-full shadow left-0 top-0 transition ${
              isChecked
                ? "transform translate-x-full bg-blue-500"
                : "bg-gray-400"
            }`}
          />
        </div>
        <span className="text-center">Sim</span>
      </label>
    </div>
  );
}

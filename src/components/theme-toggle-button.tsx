"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ClockIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <div>
      {!mounted ? (
        <button className=" rounded-full border">
          <ClockIcon />
        </button>
      ) : (
        <button className="rounded-full border p-4 " onClick={toggleTheme}>
          {resolvedTheme === "light" ? (
            <MoonIcon className="w-6 h-6" />
          ) : (
            <SunIcon className="w-6 h-6" />
          )}
        </button>
      )}
    </div>
  );
}

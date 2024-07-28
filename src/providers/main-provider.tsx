"use client";

import { createContext } from "react";
import { ThemeProvider } from "next-themes";

import { ThemeWatcher } from "@/components/theme-watcher";

export const AppContext = createContext({});

export function MainProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppContext.Provider value={{}}>
      <ThemeProvider>
        <ThemeWatcher />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}

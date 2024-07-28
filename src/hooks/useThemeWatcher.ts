import { useEffect } from "react";
import { useTheme } from "next-themes";

export function useThemeWatcher() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const userColorScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const { matches: isDarkTheme } = userColorScheme;

    const onMediaChange = () => {
      if (theme === "system") {
        const systemTheme = isDarkTheme ? "dark" : "light";
        setTheme(systemTheme);
      }
    };

    onMediaChange();
    userColorScheme.addEventListener("change", onMediaChange);

    return () => {
      userColorScheme.removeEventListener("change", onMediaChange);
    };
  }, [theme, setTheme]);
}

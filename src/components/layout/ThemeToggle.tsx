"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useThemeStore } from "@/store/theme";

export function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();

  const next: Record<string, "light" | "dark" | "system"> = {
    light: "dark",
    dark: "system",
    system: "light",
  };

  const icons: Record<string, React.ReactNode> = {
    light: <Sun className="size-4" />,
    dark: <Moon className="size-4" />,
    system: <Monitor className="size-4" />,
  };

  return (
    <button
      onClick={() => setTheme(next[theme])}
      className="text-muted-foreground hover:text-foreground rounded-md p-1 transition-colors"
      title={`Theme: ${theme}`}
    >
      {icons[theme]}
    </button>
  );
}

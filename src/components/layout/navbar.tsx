import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="border-b bg-card flex h-14 items-center justify-end gap-3 px-4">
      <ThemeToggle />
    </header>
  );
}

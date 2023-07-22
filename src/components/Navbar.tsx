"use client"
import { roboto_mono } from "@/app/fonts";
import { useThemeProvider } from "./ThemeProvider";

export default function Navbar() {
  const { theme } = useThemeProvider();
  console.log("nav", theme);
  return (
    <nav className={`${roboto_mono.className} ${theme}` }>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, autem!
      </div>
    </nav>
  );
}

"use client";
import "../styles/style.scss";
import { ReactNode } from "react";
import { useThemeProvider } from "./ThemeProvider";
import Navbar from "./Navbar";
import { roboto_mono } from "@/app/fonts";

export default function App(props: { children: ReactNode }) {
  const { theme } = useThemeProvider();

  return (
    <body className={`${roboto_mono.className} ${theme} bg`}>
      <Navbar />
      <main>{props.children}</main>
    </body>
  );
}

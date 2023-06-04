"use client";
import "../styles/style.scss";
import { ReactNode } from "react";
import { useThemeProvider } from "./ThemeProvider";
import { roboto_mono } from "@/app/fonts";
import Navbar from "./Navbar";

export default function App(props: { children: ReactNode }) {
  const { theme } = useThemeProvider();

  return (
    <body className={`${roboto_mono.variable} ${theme} bg`}>
      <Navbar />
      {props.children}
    </body>
  );
}

"use client";

import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
  SetStateAction,
  Dispatch
} from "react";
import { ColorThemes } from "../../types/app.d";

const DEFAULT_THEME = ColorThemes.DARK;

type ThemeContextType = {
  theme: ColorThemes;
  setTheme: Dispatch<SetStateAction<ColorThemes>>;
};

const ThemeContext = createContext({} as ThemeContextType);

export const useThemeProvider = () => {
  return useContext(ThemeContext);
};

export default function ThemeProvider(props: { children: ReactNode }) {
  const [theme, setTheme] = useState<ColorThemes>(DEFAULT_THEME);

  useEffect(() => {
    let themeMedia: MediaQueryList | undefined;

    const getTheme = (isDark: boolean) => {
      return isDark ? ColorThemes.DARK : ColorThemes.LIGHT;
    };

    const handleDeviceThemeChange = (event: MediaQueryListEvent) => {
      const newColorScheme = getTheme(event.matches);
      setTheme(newColorScheme);
    };

    if (window !== undefined && window.matchMedia !== undefined) {
      themeMedia = window.matchMedia("(prefers-color-scheme: dark)");

      const newColorScheme = getTheme(themeMedia.matches);
      setTheme(newColorScheme);

      themeMedia.addEventListener("change", handleDeviceThemeChange);
    }

    if (themeMedia) {
      return themeMedia.removeEventListener("change", handleDeviceThemeChange);
    }
  }, []);

  console.debug("CURRENT THEME: ", theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

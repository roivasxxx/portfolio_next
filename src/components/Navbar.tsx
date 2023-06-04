import { useThemeProvider } from "./ThemeProvider";

export default function Navbar() {
  const { theme } = useThemeProvider();
  console.log("nav", theme);
  return (
    <nav>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, autem!
      </div>
    </nav>
  );
}

import React, { createContext, useLayoutEffect, useState } from "react";

type Theme = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};
export const ThemeContext = createContext<Theme>({
  theme: "light",
  setTheme: () => {},
});
const Theme = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark" | undefined) || "light"
  );
  useLayoutEffect(() => {
    localStorage.setItem("theme", theme);
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;

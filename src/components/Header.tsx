import { FaMoon } from "react-icons/fa6";

import { MdSunny } from "react-icons/md";

import { useContext } from "react";

import { ThemeContext } from "../context/Theme";
const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="flex justify-between text-light-theme-very-light-gray items-center">
      <h1 className="text-4xl max-md:text-3xl  font-bold  tracking-[15px]">TODO</h1>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
        className="text-3xl max-md:text-2xl"
      >
        {theme === "dark" ? <MdSunny /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Header;

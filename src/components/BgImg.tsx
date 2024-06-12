import desktopDark from "../assets/images/bg-desktop-dark.jpg";
import desktopLight from "../assets/images/bg-desktop-light.jpg";
import mobilrDark from "../assets/images/bg-mobile-dark.jpg";
import mobileLight from "../assets/images/bg-mobile-light.jpg";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme";
import { AnimatePresence, motion } from "framer-motion";
const BgImg = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <AnimatePresence>
      <motion.img
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
        src={theme === "dark" ? desktopDark : desktopLight}
        className="absolute max-md:hidden top-0 w-full left-0 -z-10 object-center"
        style={{ transformOrigin: "center center" }}
      />
      <motion.img
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
        src={theme === "dark" ? mobilrDark : mobileLight}
        className="absolute md:hidden top-0 w-full left-0 -z-10 object-center"
        style={{ transformOrigin: "center center" }}
      />
    </AnimatePresence>
  );
};

export default BgImg;

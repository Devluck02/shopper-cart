import "./header.css";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const hideMenu = () => {
    setToggleMenu(false);
    document.querySelector("body").classList.remove("overlay-shadow");
  };
  const toggleHandler = () => {
    setToggleMenu(!toggleMenu);
    document.querySelector("body").classList.toggle("overlay-shadow");
  };
  return (
    <header
      className={`bg-zinc-950 sticky top-0 ${
        toggleMenu ? "mobileMenuOpen" : "mobileMenuClose"
      }`}
    >
      <div className="container mx-auto py-3 px-4">
        <div className="flex justify-between items-center">
          <Logo handleClick={hideMenu} />
          <Navbar handleClick={hideMenu} />
          <button
            className={`bg-transparent outline-none flex flex-col gap-2 md:hidden ${
              toggleMenu ? "openMenu" : "closeMenu"
            }`}
            onClick={toggleHandler}
          >
            <span className="bg-white w-7 h-0.5"></span>
            <span className="bg-white w-7 h-0.5"></span>
            <span className="bg-white w-7 h-0.5"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

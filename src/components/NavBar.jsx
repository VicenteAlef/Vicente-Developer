import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between px-3 lg:px-[10%] py-2 bg-[#0a0d11] text-white fixed z-10 w-full">
      <div></div>

      {/* Botão hamburguer (mobile) */}
      <button
        onClick={toggleMenu}
        className="text-2xl md:hidden focus:outline-none"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Menu de navegação */}
      <nav
        className={`absolute top-full left-0 w-full bg-[#0c0f13] md:bg-[#0a0d11] z-50 md:static md:block md:w-auto transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:gap-6 p-4 md:p-0 font-bold">
          <li>
            <HashLink
              onClick={closeMenu}
              className="block py-2 px-4 hover:bg-blue-950 rounded md:hover:bg-transparent md:hover:opacity-75"
              to="/#home"
              smooth
            >
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              onClick={closeMenu}
              className="block py-2 px-4 hover:bg-blue-950 rounded md:hover:bg-transparent md:hover:opacity-75"
              to="/#about"
              smooth
            >
              Sobre mim
            </HashLink>
          </li>
          <li>
            <HashLink
              onClick={closeMenu}
              className="block py-2 px-4 hover:bg-blue-950 rounded md:hover:bg-transparent md:hover:opacity-75"
              to="/#projects"
              smooth
            >
              Projetos
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

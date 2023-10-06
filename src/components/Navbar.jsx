/**
 * Navbar Component
 *
 * This component represents the navigation bar of the website.
 * It includes a responsive menu, navigation links, and sign-up/login buttons.
 * The mobile menu is hidden by default and can be toggled open/closed.
 *
 * @component
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Dynamic navigation links (replace with your data)
  const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 flex text-black bg-white shadow-lg dark:bg-slate-900 dark:text-white">
      <section className="w-full mx-6 flex items-center justify-between p-2">
        <h1 className="text-4xl font-medium">
          <a href="#home">
            <h1>Gramicipe</h1>
          </a>
        </h1>
        <div>
          <button
            id="sidemenu_btn"
            className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
            onClick={toggleMenu}
          >
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-black transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-black before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-black after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <nav
            className={`${
              isMenuOpen
                ? "block"
                : "hidden md:block"
            } ml-auto space-x-8 text-xl md:block transition-all`}
            aria-label="main"
          >
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:opacity-90 hover:text-indigo-600"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex gap-2 mr-0">
          <button
            onClick={() => navigate("signup")}
            className="bg-indigo-600 text-white text-center px-4 py-2 border-2 border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600"
          >
            Sign up
          </button>
          <button
            onClick={() => navigate("login")}
            className="bg-slate-900 text-white text-center px-4 py-2 border-2 border-slate-900 rounded hover:bg-transparent hover:text-slate-900 dark:bg-white dark:text-slate-950 dark:border-white dark:hover:text-white"
          >
            Login
          </button>
        </div>
      </section>
    </header>
  );
};

export default Navbar;

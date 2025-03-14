import { useState } from "react";
import img from "./component/logo2.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  // Smooth scroll to the section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 50; // Offset for fixed navbar
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (id) => {
    setActiveLink(id);
    scrollToSection(id);
  };

  return (
    <div>
      <nav className="bg-slate-500 fixed w-full z-20 top-0 bg-opacity-30 tone-700 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <a to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={img} alt="Logo" className="h-20" />
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-opacity-5 tone-700">
              <NavLink>
              <li>
                <a
                  to="#home"
                  onClick={() => handleNavClick("home")}
                  className={`block py-2 px-3 ${
                    activeLink === "home"
                      ? "text-blue-700"
                      : "text-gray-900 dark:text-white"
                  } md:hover:text-blue-700`}
                >
                  Home
                </a>
              </li>
              </NavLink>
              <NavLink>
              <li>
                <a
                  to="#skill"
                  onClick={() => handleNavClick("skill")}
                  className={`block py-2 px-3 ${
                    activeLink === "skill"
                      ? "text-blue-700"
                      : "text-gray-900 dark:text-white"
                  } md:hover:text-blue-700`}
                >
                  Skill
                </a>
              </li>
              </NavLink>
              <NavLink>
              <li>
                <a
                  to="#project"
                  onClick={() => handleNavClick("project")}
                  className={`block py-2 px-3 ${
                    activeLink === "project"
                      ? "text-blue-700"
                      : "text-gray-900 dark:text-white"
                  } md:hover:text-blue-700`}
                >
                  Project
                </a>
              </li>
              </NavLink>
             <NavLink>
             <li>
                <a
                  to="#services"
                  onClick={() => handleNavClick("services")}
                  className={`block py-2 px-3 ${
                    activeLink === "services"
                      ? "text-blue-700"
                      : "text-gray-900 dark:text-white"
                  } md:hover:text-blue-700`}
                >
                  Services
                </a>
              </li>
             </NavLink>
              <NavLink>
              <li>
                <a
                  to="#about"
                  onClick={() => handleNavClick("about")}
                  className={`block py-2 px-3 ${
                    activeLink === "about"
                      ? "text-blue-700"
                      : "text-gray-900 dark:text-white"
                  } md:hover:text-blue-700`}
                >
                  About
                </a>
              </li>
              </NavLink>
              <NavLink>
              <li>
                <a
                  to="#contact"
                  onClick={() => handleNavClick("contact")}
                  className={`block py-2 px-3 ${
                    activeLink === "contact"
                      ? "text-blue-700"
                      : "text-gray-900 dark:text-white"
                  } md:hover:text-blue-700`}
                >
                  Contact
                </a>
              </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

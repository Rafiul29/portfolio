"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Skills",
    path: "/skills",
  },
  {
    title: "About me",
    path: "/about-me",
  },

  {
    title: "Contacts",
    path: "/contacts",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
];

const Navbar = ({ onClose }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="josefin-sans fixed mx-auto top-0 left-0 right-0 z-10 bg-zinc-950 opacity-90  ">
      <div className="flex container flex-wrap items-center justify-between mx-auto sm:px-16 p-4">
        <Link
          to="/"
          className="text-2xl md:text-4xl text-zinc-300 font-bold"
          onClick={closeMenu}
        >
          {"{ Md Rafiul Islam }"}
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => {
                setNavbarOpen(true);
              }}
              className="flex items-center px-3 py-2 border rounded border-zinc-300 text-zinc-300 button-menu"
            >
              <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => {
                setNavbarOpen(false);
              }}
              className="flex items-center px-3 py-2 border rounded border-zinc-300 text-zinc-300 button-menu"
            >
              <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto " id="navbar">
          <ul className="flex items-center p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} title={link.title} />
              </li>
            ))}
            <li>
            <Link
              to="https://drive.google.com/file/d/1VpFIDzMcc0eHOyurphBhaB24xSi5a1td/view?usp=sharingg"
              target="_blank"
            >
              <button
                className="sm:w-fit px-5 py-2 border-2 rounded-full font-semibold border-zinc-950
                        text-zinc-300 button-contact bg-gradient-to-br from-cyan-600 via-indigo-600 to-pink-600"
              >
                Resume
              </button>
            </Link>
            </li>
          </ul>
        </div>
      </div>

      {/*{navbarOpen ? <MenuOverlay links={navLinks}/> : null}*/}
      {navbarOpen ? (
        <ul className="flex flex-col py-4 items-center gradient-text bg-gradient-to-b">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path} title={link.title} onClose={onClose} />
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;

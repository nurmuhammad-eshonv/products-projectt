import { IoMdSunny, IoMdMoon } from "react-icons/io";

import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import { useEffect } from "react";
import { useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState("winter")
  const handleTheme = () => {
     const newTheme = theme == "winter" ? "dracula" : "winter"  
     setTheme(newTheme)
    }

    useEffect ( () => {
      document.documentElement.setAttribute("data-theme", theme)
    },[theme])

  return (
    <div className="bg-base-200 ">
      <div className="navbar site-container">
        <div className="navbar-start">
          <Link
            className="btn hover:bg-teal-800 border-green-800 text-white bg-amber-400 font-mono text-2xl"
            to
          >
            MyStore
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input onClick={handleTheme} type="checkbox" />

            <IoMdSunny className="swap-on fill-current w-7 h-7" />
            <IoMdMoon className="swap-off fill-current w-7 h-7" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
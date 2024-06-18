import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

function Navbar() {
  const { total, user } = useGlobalContext();
  const [theme, setTheme] = useState("dracula");

  const handleTheme = () => {
    const newTheme = theme === "dracula" ? "winter" : "dracula";
    setTheme(newTheme);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="bg-base-200">
      <div className="navbar site-container">
        <div className="navbar-start">
          <Link
            className="btn hover:bg-teal-800 border-green-800 text-white bg-amber-400 font-mono text-2xl"
            to="/"
          >
            MyStore
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end flex gap-6">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">
              {total}
            </span>
            <FaCartShopping className="w-7 h-7 cursor-pointer hover:opacity-65 transition-all" />
          </div>

          <details className="dropdown border-x-4 border-black">
            <summary className="m-1 btn">Accont</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <div className="flex gap-7 items-center">
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <p className="text-1xl font-bold">{user.displayName}</p>
              </div>
              <div>
            <button onClick={logout} className="btn btn-primary w-full mt-3">
              Log out
            </button>
          </div>
            </ul>
          </details>
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

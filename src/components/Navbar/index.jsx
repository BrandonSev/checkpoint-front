import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="position-fixed bg-white top-0"
      style={{ left: 0, right: 0, zIndex: 999 }}
    >
      <div className="d-flex justify-content-between p-4">
        <div className="logo">AdopteUnDevJunior</div>
        <div className="icon d-flex align-items-center gap-3">
          <AiFillHeart size={25} color="red" />
          <GiHamburgerMenu size={25} onClick={() => setOpen(!open)} />
        </div>
      </div>
      <div className={`wrapper-mobile ${open ? "open" : ""}`}>
        <ul className={`m-0 p-0 navbar-menu-mobile ${open ? "open" : ""}`}>
          <li>
            <NavLink to={"/"} onClick={() => setOpen(!open)}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"} onClick={() => setOpen(!open)}>
              Connexion
            </NavLink>
          </li>
          <li>
            <NavLink to={"/inscription"} onClick={() => setOpen(!open)}>
              Inscription
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

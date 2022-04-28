import React, { useContext, useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();
  const { user, setUser, isBusiness } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/logout`, null, {
        withCredentials: true,
      })
      .then(() => {
        setUser(null);
        setOpen(false);
        navigate("/login");
        toast.success("Vous étes maintenant déconnecté");
      });
  };
  return (
    <div
      className="position-fixed bg-white top-0"
      style={{ left: 0, right: 0, zIndex: 999 }}
    >
      <div className="d-flex justify-content-between p-4">
        <div className="logo">AdopteUnDevJunior</div>
        <div className="icon d-flex align-items-center gap-3">
          {user && isBusiness && (
            <NavLink to={"/"}>
              <AiFillHeart size={25} color="red" />
            </NavLink>
          )}
          <GiHamburgerMenu size={25} onClick={() => setOpen(!open)} />
        </div>
      </div>
      <div className={`wrapper-mobile ${open ? "open" : ""}`}>
        <ul className={`m-0 p-0 navbar-menu-mobile ${open ? "open" : ""}`}>
          {user ? (
            <>
              {isBusiness && (
                <li>
                  <NavLink to={"/"} onClick={() => setOpen(!open)}>
                    Accueil
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink to={"/mon-compte"} onClick={() => setOpen(!open)}>
                  Mon Compte
                </NavLink>
              </li>
              <li>
                <button onClick={handleLogout}>Déconnexion</button>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

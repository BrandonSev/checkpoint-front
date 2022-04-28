import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import LikeAction from "./components/LikeAction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "./Context/AppContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useLocation } from "react-router";
import MonCompte from "./components/MonCompte";
import { io } from "socket.io-client";
import { useRef } from "react";

function App() {
  const socket = useRef();
  const location = useLocation();
  const [user, setUser] = useState();
  const [isBusiness, setIsBusiness] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/verifyToken`, null, {
          withCredentials: true,
        })
        .then(({ data }) => {
          if (data.user) {
            setUser(data.user);
            setLoading(false);
            setIsBusiness(false);
            return;
          }
          if (data.business) {
            setUser(data.business);
            setIsBusiness(true);
            setLoading(false);
            return;
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.message);
        });
    })();
  }, [setUser]);

  useEffect(() => {
    socket.current = io("localhost:8000");
  }, []);

  useEffect(() => {
    if (user) {
      socket.current.emit("newUser", user.id);
      socket.current.on("getUsers", (users) => {
        console.log(users);
      });
    }
  }, [user]);

  return (
    <div className="">
      <AppContext.Provider
        value={{ socket, setUser, user, isBusiness, setIsBusiness }}
      >
        <ToastContainer />
        <Navbar />
        <Routes>
          {!loading && (
            <>
              {user ? (
                <>
                  {isBusiness && <Route path="/" element={<Home />} />}
                  <Route path="/mon-compte" element={<MonCompte />} />
                  {isBusiness ? (
                    <Route path="*" element={<Navigate to={"/"} />} />
                  ) : (
                    <Route path="*" element={<Navigate to={"/mon-compte"} />} />
                  )}
                </>
              ) : (
                <>
                  <Route path="/login" element={<Login />} />
                  <Route path="/inscription" element={<Register />} />
                  <Route path="*" element={<Navigate to={"/login"} />} />
                </>
              )}
            </>
          )}
        </Routes>
        {user && location.pathname === "/" && <LikeAction />}
      </AppContext.Provider>
    </div>
  );
}

export default App;

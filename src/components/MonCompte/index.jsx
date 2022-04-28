import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import BusinessLover from "../BusinessLover";
import Chat from "../Chat";
import InfoBusiness from "../InfoBusiness";
import MesDocuments from "../MesDocuments";
import Info from "./Info";
import "./MonCompte.css";

function MonCompte() {
  const [infos, setInfos] = useState("info");
  const { user, isBusiness } = useContext(AppContext);
  return (
    <div className="wrapper ">
      <div className="pt-4 container">
        <h1>Mon Compte</h1>
        <div className="profile-header">
          <img
            src={`${process.env.REACT_APP_API_URL}/images/${user.avatar}`}
            alt="#"
            width={"30%"}
          />
          <div className="infos">
            <h2>
              {user.lastname || user.name} {user.firstname}
            </h2>
            <p>{user.age ? user.age + "ans" : ""}</p>
            <p>{user.localisation}</p>
            <p>{user.school_level}</p>
          </div>
        </div>
        <ul className="profile-menu bg-light">
          <li onClick={() => setInfos("info")}>
            <a href="#informations">Mes informations</a>
          </li>
          <li onClick={() => setInfos("documents")}>
            <a href="#documents">Mes documents</a>
          </li>
          <li onClick={() => setInfos("businessLove")}>
            <a href="#candidats">
              {isBusiness ? "Mes candidats" : "Recruteurs interessés"}
            </a>
          </li>
          <li onClick={() => setInfos("chat")}>
            <a href="#messagerie">Messagerie</a>
          </li>
        </ul>
        <div className="profile-body">
          {infos === "info" && !isBusiness && <Info />}
          {infos === "info" && isBusiness && <InfoBusiness />}
          {infos === "documents" && <MesDocuments />}
          {infos === "businessLove" && <BusinessLover />}
          {infos === "chat" && <Chat />}
        </div>
      </div>
    </div>
  );
}

export default MonCompte;

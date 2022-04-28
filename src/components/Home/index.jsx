import React, { useContext, useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./Home.css";
import { BsArrowLeftRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import axios from "axios";
import { AppContext } from "../../Context/AppContext";
import { toast } from "react-toastify";

function Home() {
  const { user } = useContext(AppContext);
  const [frontOpen, setFrontOpen] = useState(true);
  const [data, setData] = useState([]);
  const onSwipe = async (index, direction) => {
    switch (direction) {
      case "right":
        await axios
          .post(`${process.env.REACT_APP_API_URL}/api/likes`, {
            business_id: user.id,
            users_id: data[index].id,
            type: "like",
          })
          .then((res) => {
            toast.success(`Vous avez aimé ${data[index].firstname}`);
          });
        break;
      case "up":
        await axios
          .post(`${process.env.REACT_APP_API_URL}/api/likes`, {
            business_id: user.id,
            users_id: data[index].id,
            type: "encourage",
          })
          .then((res) => {
            toast.success(`Vous avez encouragé ${data[index].firstname}`);
          });
        break;
      default:
        break;
    }
    console.log("You swiped: " + direction);
  };
  const handleClick = (e) => {
    e.stopPropagation();
    setFrontOpen(!frontOpen);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  useEffect(() => {
    (async () => {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/api/users`)
        .then(({ data }) => {
          setData(data);
        });
    })();
  }, []);
  return (
    <div className="card-container">
      {data?.map((user, index) => (
        <div>
          <div
            className="reverse"
            onClick={handleClick}
            style={{ zIndex: 999999, cursor: "pointer" }}
          >
            <BsArrowLeftRight size={20} />
          </div>
          <TinderCard
            onSwipe={(direction) => onSwipe(index, direction)}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["down"]}
            className={"h-100 w-100 swipe"}
          >
            <div className="d-flex h-100 w-100 card-wrapper">
              <div className={`card-inner ${frontOpen ? "open" : ""}`}>
                <div
                  className={`item w-100 card-front`}
                  onClick={(e) => console.log(e)}
                >
                  <object
                    data={`${process.env.REACT_APP_API_URL}/images/${user.cv}#view=FitH`}
                    type="application/pdf"
                    frameborder="0"
                    width="100%"
                    style={{ height: "calc(100vh - 132px)" }}
                  >
                    <embed
                      src={`${process.env.REACT_APP_API_URL}/images/${user.cv}#view=FitH  `}
                      width="100%"
                      style={{ height: "calc(100vh - 132px)" }}
                    />
                  </object>
                </div>
                <div className={`item h-100 card-back`}>
                  <div className="profile-card">
                    <div className="header">
                      <img
                        src={`${process.env.REACT_APP_API_URL}/images/${user.avatar}`}
                        alt="#"
                      />
                      <div className="infos">
                        <h2>
                          {user.lastname} {user.firstname}
                        </h2>
                        <p>{user.age ? user.age + " ans" : ""}</p>
                        <p>
                          <MdPlace />
                          {"   "}
                          {user.localisation}
                        </p>
                        <p>
                          <IoSchoolOutline />
                          {"   "}
                          {user.school_level}
                        </p>
                      </div>
                    </div>
                    <div className="paragraph">
                      <h5>
                        <b>Pourquoi moi?</b>
                      </h5>
                      <p>{user.why_me}</p>
                    </div>
                    <div className="paragraph">
                      <h5>
                        <b>Mon dernier projet?</b>
                      </h5>
                      <p className={`${!user.resume_project && "text-muted"}`}>
                        {user.resume_project
                          ? user.resume_project
                          : `${user.firstname} n'a pas encore renseigné de resumer `}
                      </p>
                    </div>
                    <div className="paragraph">
                      <h5>
                        <b>Mes liens</b>
                      </h5>
                      <ul className="social">
                        <li>
                          <a
                            href={user.github_url}
                            rel="norefferer noopenner noreferrer"
                            target="_blank"
                          >
                            <span>
                              <BsGithub />
                            </span>
                            Github
                          </a>
                        </li>
                        <li>
                          <a
                            href={user.linkedin_url}
                            rel="norefferer noopenner noreferrer"
                            target="_blank"
                          >
                            <span>
                              <BsLinkedin />
                            </span>
                            LinkedIn
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TinderCard>
        </div>
      ))}
    </div>
  );
}

export default Home;

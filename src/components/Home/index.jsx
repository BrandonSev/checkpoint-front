import React, { useEffect, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import "./Home.css";
import { BsArrowLeftRight } from "react-icons/bs";
function Home() {
  const [frontOpen, setFrontOpen] = useState(true);
  const onSwipe = (direction) => {
    switch (direction) {
      case "left":
        alert("PAS INTERESSE");
        break;
      case "right":
        alert("INTERESSE");
        break;
      case "up":
        alert("LOVE");
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
  return (
    <div className="card-container">
      <div>
        <div
          className="reverse"
          onClick={handleClick}
          style={{ zIndex: 999999, cursor: "pointer" }}
        >
          <BsArrowLeftRight size={20} />
        </div>
        <TinderCard
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          preventSwipe={["down"]}
          className={"h-100 w-100 swipe"}
        >
          <div
            className="d-flex h-100 w-100 card-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`card-inner ${frontOpen ? "open" : ""}`}>
              <div className={`item w-100 card-front`}>
                <object
                  data="https://www.docdroid.net/TueMN4b/brandon-seveste-cv-pdf"
                  type="application/pdf"
                  frameborder="0"
                  width="100%"
                  style={{ height: "calc(100vh - 132px)" }}
                >
                  <embed
                    src="https://www.docdroid.net/TueMN4b/brandon-seveste-cv-pdf"
                    width="100%"
                    style={{ height: "calc(100vh - 132px)" }}
                  />
                </object>
              </div>
              <div className={`d-md-block item h-100 card-back`}>
                <div className="profile-card">
                  <div className="header">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar2.png"
                      alt="#"
                    />
                    <div className="infos">
                      <p>Nom Prenom</p>
                      <p>Nom Prenom</p>
                      <p>Nom Prenom</p>
                      <p>Nom Prenom</p>
                    </div>
                  </div>
                  <div className="paragraph">
                    <h5>
                      <b>Pourquoi moi?</b>
                    </h5>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio magnam ab culpa nam perspiciatis quidem earum
                      repellendus, incidunt, nobis vero ratione rem delectus
                      doloremque blanditiis iure ipsum quam. Voluptatum, atque?
                    </p>
                  </div>
                  <div className="paragraph">
                    <h5>
                      <b>Mon dernier projet?</b>
                    </h5>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio magnam ab culpa nam perspiciatis quidem earum
                      repellendus, incidunt, nobis vero ratione rem delectus
                      doloremque blanditiis iure ipsum quam. Voluptatum, atque?
                    </p>
                  </div>
                  <div className="paragraph">
                    <h5>
                      <b>Pourquoi moi?</b>
                    </h5>
                    <ul className="social">
                      <li>
                        <a href="#">Github</a>
                      </li>
                      <li>
                        <a href="#">Github</a>
                      </li>
                      <li>
                        <a href="#">Github</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TinderCard>
      </div>
      <div>
        <div
          className="reverse"
          onClick={handleClick}
          style={{ zIndex: 999999, cursor: "pointer" }}
        >
          <BsArrowLeftRight size={20} />
        </div>
        <TinderCard
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          preventSwipe={["down"]}
          className={"h-100 w-100 swipe"}
        >
          <div
            className="d-flex h-100 w-100 card-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`card-inner ${frontOpen ? "open" : ""}`}>
              <div className={`item w-100 card-front`}>
                <object
                  data="https://www.docdroid.net/TueMN4b/brandon-seveste-cv-pdf"
                  type="application/pdf"
                  frameborder="0"
                  width="100%"
                  style={{ height: "calc(100vh - 132px)" }}
                >
                  <embed
                    src="https://www.docdroid.net/TueMN4b/brandon-seveste-cv-pdf"
                    width="100%"
                    style={{ height: "calc(100vh - 132px)" }}
                  />
                </object>
              </div>
              <div className={`d-md-block item h-100 card-back`}>
                <div className="profile-card">
                  <div className="header">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar2.png"
                      alt="#"
                    />
                    <div className="infos">
                      <p>Nom Prenom</p>
                      <p>Nom Prenom</p>
                      <p>Nom Prenom</p>
                      <p>Nom Prenom</p>
                    </div>
                  </div>
                  <div className="paragraph">
                    <h5>
                      <b>Pourquoi moi?</b>
                    </h5>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio magnam ab culpa nam perspiciatis quidem earum
                      repellendus, incidunt, nobis vero ratione rem delectus
                      doloremque blanditiis iure ipsum quam. Voluptatum, atque?
                    </p>
                  </div>
                  <div className="paragraph">
                    <h5>
                      <b>Mon dernier projet?</b>
                    </h5>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio magnam ab culpa nam perspiciatis quidem earum
                      repellendus, incidunt, nobis vero ratione rem delectus
                      doloremque blanditiis iure ipsum quam. Voluptatum, atque?
                    </p>
                  </div>
                  <div className="paragraph">
                    <h5>
                      <b>Pourquoi moi?</b>
                    </h5>
                    <ul className="social">
                      <li>
                        <a href="#">Github</a>
                      </li>
                      <li>
                        <a href="#">Github</a>
                      </li>
                      <li>
                        <a href="#">Github</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TinderCard>
      </div>
      <div>
        <div
          className="reverse"
          onClick={handleClick}
          style={{ zIndex: 999999, cursor: "pointer" }}
        >
          <BsArrowLeftRight size={20} />
        </div>
        <TinderCard
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          preventSwipe={["down"]}
          className={"h-100 w-100 swipe"}
        >
          <div
            className="d-flex h-100 w-100 card-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`card-inner ${frontOpen ? "open" : ""}`}>
              <div className={`item w-100 card-front`}>
                <object
                  data="https://www.docdroid.net/TueMN4b/brandon-seveste-cv-pdf"
                  type="application/pdf"
                  frameborder="0"
                  width="100%"
                  style={{ height: "calc(100vh - 132px)" }}
                >
                  <embed
                    src="https://www.docdroid.net/TueMN4b/brandon-seveste-cv-pdf"
                    width="100%"
                    style={{ height: "calc(100vh - 132px)" }}
                  />
                </object>
              </div>
              <div className={`d-md-block item h-100 card-back`}>
                <div className="profile-card">
                  <div className="header">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar2.png"
                      alt="#"
                    />
                    <div className="infos">
                      <p>Nom Prenom</p>
                      <p>Nom Prenom</p>
                      <p>Nom Prenom</p>
                      <p>Nom Prenom</p>
                    </div>
                  </div>
                  <div className="paragraph">
                    <h5>
                      <b>Pourquoi moi?</b>
                    </h5>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio magnam ab culpa nam perspiciatis quidem earum
                      repellendus, incidunt, nobis vero ratione rem delectus
                      doloremque blanditiis iure ipsum quam. Voluptatum, atque?
                    </p>
                  </div>
                  <div className="paragraph">
                    <h5>
                      <b>Mon dernier projet?</b>
                    </h5>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio magnam ab culpa nam perspiciatis quidem earum
                      repellendus, incidunt, nobis vero ratione rem delectus
                      doloremque blanditiis iure ipsum quam. Voluptatum, atque?
                    </p>
                  </div>
                  <div className="paragraph">
                    <h5>
                      <b>Pourquoi moi?</b>
                    </h5>
                    <ul className="social">
                      <li>
                        <a href="#">Github</a>
                      </li>
                      <li>
                        <a href="#">Github</a>
                      </li>
                      <li>
                        <a href="#">Github</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TinderCard>
      </div>
      <div>
        <div
          className="reverse"
          onClick={handleClick}
          style={{ zIndex: 999999, cursor: "pointer" }}
        >
          <BsArrowLeftRight size={20} />
        </div>
        <TinderCard
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          preventSwipe={["down"]}
          className={"h-100 w-100 swipe"}
        >
          <div
            className="d-flex h-100 w-100 card-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`card-inner ${frontOpen ? "open" : ""}`}>
              <div className={`item w-100 card-front`}>
                <object
                  data="https://www.docdroid.net/TueMN4b/brandon-seveste-cv-pdf"
                  type="application/pdf"
                  frameborder="0"
                  width="100%"
                  style={{ height: "calc(100vh - 132px)" }}
                >
                  <embed
                    src="https://www.docdroid.net/TueMN4b/brandon-seveste-cv-pdf"
                    width="100%"
                    style={{ height: "calc(100vh - 132px)" }}
                  />
                </object>
              </div>
              <div className={`d-md-block item h-100 card-back`}>
                <div className="profile-card">
                  <div className="header">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar2.png"
                      alt="#"
                    />
                    <div className="infos">
                      <p>Nom Prenom</p>
                      <p>Nom Prenom</p>
                      <p>Nom Prenom</p>
                      <p>Nom Prenom</p>
                    </div>
                  </div>
                  <div className="paragraph">
                    <h5>
                      <b>Pourquoi moi?</b>
                    </h5>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio magnam ab culpa nam perspiciatis quidem earum
                      repellendus, incidunt, nobis vero ratione rem delectus
                      doloremque blanditiis iure ipsum quam. Voluptatum, atque?
                    </p>
                  </div>
                  <div className="paragraph">
                    <h5>
                      <b>Mon dernier projet?</b>
                    </h5>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio magnam ab culpa nam perspiciatis quidem earum
                      repellendus, incidunt, nobis vero ratione rem delectus
                      doloremque blanditiis iure ipsum quam. Voluptatum, atque?
                    </p>
                  </div>
                  <div className="paragraph">
                    <h5>
                      <b>Pourquoi moi?</b>
                    </h5>
                    <ul className="social">
                      <li>
                        <a href="#">Github</a>
                      </li>
                      <li>
                        <a href="#">Github</a>
                      </li>
                      <li>
                        <a href="#">Github</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TinderCard>
      </div>
      <div>
        <div
          className="reverse"
          onClick={handleClick}
          style={{ zIndex: 999999, cursor: "pointer" }}
        >
          <BsArrowLeftRight size={20} />
        </div>
        <TinderCard
          onSwipe={onSwipe}
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
                  data="https://www.docdroid.net/TueMN4b/brandon-seveste-cv-pdf#view=FitH"
                  type="application/pdf"
                  frameborder="0"
                  width="100%"
                  style={{ height: "calc(100vh - 132px)" }}
                  onClick={() => console.log("ok")}
                >
                  <embed
                    src="https://www.docdroid.net/TueMN4b/brandon-seveste-cv-pdf#view=FitH"
                    width="100%"
                    style={{ height: "calc(100vh - 132px)" }}
                  />
                </object>
              </div>
              <div className={`d-md-block item h-100 card-back`}>
                <div className="profile-card">
                  <div className="header">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar2.png"
                      alt="#"
                    />
                    <div className="infos">
                      <p>Nom Test</p>
                      <p>Nom Prenom</p>
                      <p>Nom Prenom</p>
                      <p>Nom Prenom</p>
                    </div>
                  </div>
                  <div className="paragraph">
                    <h5>
                      <b>Pourquoi moi?</b>
                    </h5>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio magnam ab culpa nam perspiciatis quidem earum
                      repellendus, incidunt, nobis vero ratione rem delectus
                      doloremque blanditiis iure ipsum quam. Voluptatum, atque?
                    </p>
                  </div>
                  <div className="paragraph">
                    <h5>
                      <b>Mon dernier projet?</b>
                    </h5>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio magnam ab culpa nam perspiciatis quidem earum
                      repellendus, incidunt, nobis vero ratione rem delectus
                      doloremque blanditiis iure ipsum quam. Voluptatum, atque?
                    </p>
                  </div>
                  <div className="paragraph">
                    <h5>
                      <b>Pourquoi moi?</b>
                    </h5>
                    <ul className="social">
                      <li>
                        <a href="#">Github</a>
                      </li>
                      <li>
                        <a href="#">Github</a>
                      </li>
                      <li>
                        <a href="#">Github</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TinderCard>
      </div>
    </div>
  );
}

export default Home;

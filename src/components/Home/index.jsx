import React from "react";
import TinderCard from "react-tinder-card";

function Home() {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div className="card-container">
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["down"]}
        className={"h-100 w-100 swipe"}
      >
        <div className="d-flex h-100 w-100" onClick={() => alert("ok")}>
          <div className="item w-100">
            <img
              src="/Brandon_Seveste_CV-1.jpg"
              alt=""
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="d-none d-md-block item">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </TinderCard>
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["down"]}
        className={"h-100 w-100 swipe"}
      >
        <div className="d-flex h-100 w-100">
          <div className="item w-100">
            <img
              src="/Brandon_Seveste_CV-1.jpg"
              alt=""
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="d-none d-md-block item">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </TinderCard>
    </div>
  );
}

export default Home;

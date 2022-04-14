import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsArrowLeftRight, BsHeartHalf } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";

import "./LikeAction.css";

function LikeAction() {
  return (
    <div className="like-bar">
      <div className="wrapper-like">
        <button>
          <BsHeartHalf size={22} color={"red"} />
        </button>
        {/* <button>
          <BsArrowLeftRight size={20} />
        </button> */}
        <button>
          <FaHandHoldingHeart size={22} color={"red"} />
        </button>
        <button>
          <AiFillHeart size={25} color={"red"} />
        </button>
      </div>
    </div>
  );
}

export default LikeAction;

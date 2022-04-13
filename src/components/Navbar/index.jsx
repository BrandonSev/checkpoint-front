import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";

function Navbar() {
  return (
    <div className="d-flex justify-content-between p-4">
      <div className="logo">AdopteUnDevJunior</div>
      <div className="icon d-flex align-items-center gap-3">
        <AiFillHeart size={25} />
        <GiHamburgerMenu size={25} />
      </div>
    </div>
  );
}

export default Navbar;

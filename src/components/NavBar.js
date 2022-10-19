import React from "react";
import airBnbLogo from "../assets/airbnb.png";
function NavBar() {
  return (
    <div>
      <nav>
        <img src={airBnbLogo} alt="my logo" className="navigation--logo" />
      </nav>
    </div>
  );
}

export default NavBar;

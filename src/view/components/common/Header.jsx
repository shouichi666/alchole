import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCocktail } from "@fortawesome/free-solid-svg-icons";
import Hamberger from "./Hamberger";
import Nav from "./Nav";
import logo from "../../../images/alc_log.png";

const Header = () => {
  const [openNav, toggleNav] = useState(false);
  const handleNav = () => {
    toggleNav(!openNav);
  };

  return (
    <header className="Header">
      <div className="logo">
        <img src={logo} alt="logo" className="logo__img" />
      </div>

      <Hamberger onClick={handleNav} openNav={openNav} />

      <Nav onClick={handleNav} openNav={openNav} />
    </header>
  );
};

export default Header;

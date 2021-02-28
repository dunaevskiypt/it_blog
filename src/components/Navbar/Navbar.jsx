import React from "react";
import style from "./Navbar.module.css";
import Navigation from "./Navigation/Navigation";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Navbar() {
  return (
    <nav className={style.nav}>
      <ProfileInfo />
      <Navigation />
    </nav>
  );
}

export default Navbar;

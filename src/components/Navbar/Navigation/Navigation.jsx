import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={style.navigation}>
      <div className={style.massegeNav}>
        <NavLink
          to="/profile"
          activeClassName={style.activeLink}
          className={style.itemNavigation}
        >
          Profile
        </NavLink>
      </div>
      <div className={style.dialogNav}>
        <NavLink
          to="/dialogs"
          activeClassName={style.activeLink}
          className={style.itemNavigation}
        >
          Dialogs
        </NavLink>
      </div>
      <div className={style.profileNav}>
        <NavLink
          to="/settings"
          activeClassName={style.activeLink}
          className={style.itemNavigation}
        >
          Settings
        </NavLink>
      </div>

      <div className={style.profileNews}>
        <NavLink
          to="/news"
          activeClassName={style.activeLink}
          className={style.itemNavigation}
        >
          News
        </NavLink>
      </div>
      <div className={style.profileMusic}>
        <NavLink
          to="/music"
          activeClassName={style.activeLink}
          className={style.itemNavigation}
        >
          Music
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;

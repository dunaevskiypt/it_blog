import React from "react";
import style from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={style.navigation}>
      <div className={style.massegeNav}>
        <a href="/home_page" className={style.itemNavigation}>
          Home page
        </a>
      </div>
      <div className={style.dialogNav}>
        <a href="/dialogs" className={style.itemNavigation}>
          Dialogs
        </a>
      </div>
      <div className={style.profileNav}>
        <a href="/profile" className={style.itemNavigation}>
          Profile
        </a>
      </div>

      <div className={style.profileNews}>
        <a href="/news" className={style.itemNavigation}>
          News
        </a>
      </div>
      <div className={style.profileMusic}>
        <a href="/music" className={style.itemNavigation}>
          Music
        </a>
      </div>
    </div>
  );
}

export default Navigation;

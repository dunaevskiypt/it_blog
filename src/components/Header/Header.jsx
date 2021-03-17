import React from "react";
import style from "./Header.module.css";
import { GoSearch } from "react-icons/go";
import { HiUserAdd } from "react-icons/hi";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";

function Header() {
  return (
    <header className={style.header}>
      <a href="/" className={style.header_logo}>
        <img
          src="https://www.freeiconspng.com/uploads/flame-logo-png-30.png"
          alt="logo"
        />
      </a>
      <div className={style.header_nav}>
        <a href="/" className={style.header_nav__link}>
          Home
        </a>
        <a href="/" className={style.header_nav__link}>
          Discussion
        </a>
        <a href="/" className={style.header_nav__link}>
          Weather
        </a>
        <a href="/" className={style.header_nav__link}>
          Pages
        </a>
        <a href="/" className={style.header_nav__link}>
          Blg
        </a>
        <a href="/" className={style.header_nav__link}>
          Add New Event
        </a>
      </div>
      <div className={style.header_social}>
        <a href="/" className={style.item_social}>
          <GoSearch />
        </a>
        <a href="/" className={style.item_social}>
          <HiUserAdd />
        </a>
        <a href="/" className={style.item_social}>
          <BsFillEnvelopeFill />
        </a>
        <a href="/" className={style.item_social}>
          <BsFillBellFill />
        </a>
      </div>
    </header>
  );
}

export default Header;

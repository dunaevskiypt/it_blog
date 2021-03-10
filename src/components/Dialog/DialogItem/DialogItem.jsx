import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={style.dialog}>
      <NavLink to={"/dialogs/1" + props.id}> {props.name}</NavLink>
    </div>
  );
};
export default DialogItem;

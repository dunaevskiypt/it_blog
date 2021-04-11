import React from "react";
import style from "./Users.module.css";

function Users(props) {
  return <div className={style.users}>{props.users.map()}</div>;
}

export default Users;

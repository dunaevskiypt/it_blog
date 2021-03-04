import React from "react";
import style from "./Dialogs.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Messages from "./Messages/Messages";

function Dialogs() {
  return (
    <div className={style.dialogs_wrapper}>
      <UserInfo/>
      <Messages/> 
     
    </div>
  );
}

export default Dialogs;

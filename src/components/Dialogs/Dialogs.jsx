import React from "react";
import style from "./Dialogs.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Messages from "./Messages/Messages";

function Dialogs(props) {
  return (
    <div className={style.dialogs_wrapper}>
      <UserInfo />
      <Messages />
    </div>
  );
}

export default Dialogs;

// let dialogsElements = props.state.dialogs.map(d=><UserInfo name={d.name} id={d.id}/>)
// let messagesElements = props.state.messages.map(m=><Messages message={m.message} />)

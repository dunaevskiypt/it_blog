import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialog.module.css";

const DialogItem = (props) => {
  return (
    <div className={style.dialog}>
      <NavLink to={"/dialogs/1" + props.id}> {props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

function Dialog(props) {
  let dialogsData = [
    { id: 1, name: "Peter" },
    { id: 2, name: "Victor" },
    { id: 3, name: "Ann" },
    { id: 4, name: "Alex" },
    { id: 5, name: "Maxim" },
  ];

  let messages = [
    { id: "1", message: "Hi" },
    { id: "2", message: 'How are you"' },
    { id: "3", message: "I like react" },
    { id: "4", message: "This is my first ptoect" },
    { id: "5", message: 'Ok GO"' },
  ];

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messages.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  return (
    <div className={style.dialogs_wrapper}>
      <div className={style.dialogs_items}>{dialogsElements}</div>
      <div className={style.messages}>{messagesElements}</div>
    </div>
  );
}

export default Dialog;

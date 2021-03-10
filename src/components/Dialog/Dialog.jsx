import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import style from "./Dialog.module.css";

function Dialog(props) {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.messages.map((message) => (
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

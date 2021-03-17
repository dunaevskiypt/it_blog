import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import style from "./Dialog.module.css";
import { updateNewMessageBodyCreator } from "../reudx/state";
import { sendMessageCreator } from "../reudx/state";

function Dialog(props) {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={style.dialogs_wrapper}>
      <div className={style.dialogs_items}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;

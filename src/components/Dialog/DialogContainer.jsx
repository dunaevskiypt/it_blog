import React from "react";
import { updateNewMessageBodyCreator } from "../reudx/dialogs-reducer";
import { sendMessageCreator } from "../reudx/dialogs-reducer";
import Dialog from "./Dialog";

function DialogContainer(props) {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialog
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
}

export default DialogContainer;

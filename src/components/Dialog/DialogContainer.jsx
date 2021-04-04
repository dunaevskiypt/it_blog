import React from "react";
import { connect } from "react-redux";
import { updateNewMessageBodyCreator } from "../reudx/dialogs-reducer";
import { sendMessageCreator } from "../reudx/dialogs-reducer";
import Dialog from "./Dialog";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageCreator());
    },
    sendMessage: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);
export default DialogContainer;

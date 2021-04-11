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
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);
export default DialogContainer;

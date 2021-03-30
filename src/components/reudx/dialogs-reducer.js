const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialSatate = {
  dialogs: [
    { id: 1, name: "Peter" },
    { id: 2, name: "Victor" },
    { id: 3, name: "Ann" },
    { id: 4, name: "Alex" },
    { id: 5, name: "Maxim" },
  ],
  messages: [
    { id: "1", message: "Hi" },
    { id: "2", message: 'How are you"' },
    { id: "3", message: "I like react" },
    { id: "4", message: "This is my first ptoect" },
    { id: "5", message: 'Ok GO"' },
  ],

  newMessageBody: "",
};

const dialogsReducer = (state = initialSatate, action) => {
  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.newMessageBody = action.body;
  } else if (action.type === SEND_MESSAGE) {
    let body = state.newMessageBody;
    state.newMessageBody = "";
    state.messages.push({ id: 6, message: body });
  }

  return state;
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default dialogsReducer;

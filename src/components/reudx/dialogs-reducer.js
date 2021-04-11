
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
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 6, message: body }],
      };

    default:
      return state;
  }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default dialogsReducer;

import { createStore, combineReducers } from "redux";
import sideBarReducer from "./sideBar-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
});
let store = createStore(reducers);

export default store;

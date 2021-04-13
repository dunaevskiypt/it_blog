import { createStore, combineReducers } from "redux";
import sideBarReducer from "./sideBar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
});
let store = createStore(reducers);

export default store;

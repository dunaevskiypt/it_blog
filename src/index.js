import App from "./App";
import state from "./components/reudx/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./components/reudx/state";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store._state}
        addPost={store.addPost}
        updateNewPostText={store.updateNewPostText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store._state);

store.subscribe(rerenderEntireTree);

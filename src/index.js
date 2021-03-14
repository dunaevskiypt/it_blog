import App from "./App";
import { rerenderEntireTree } from "./render";
import state from "./components/reudx/state";

rerenderEntireTree(state);

import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyEvent from "./components/MyEvent/MyEvent";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialog from "./components/Dialog/Dialog";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.friendPage} />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <Dialog state={props.state.dialogsPage} />}
          />
          <Route
            path="/profile"
            render={() => <Profile state={props.state.profilePage} />}
          />
        </div>
        <MyEvent />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

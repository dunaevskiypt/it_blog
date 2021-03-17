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
            render={() => <Dialog store={props.store} />}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
        </div>
        <MyEvent />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

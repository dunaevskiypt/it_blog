import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyEvent from "./components/MyEvent/MyEvent";
import Footer from "./components/Footer/Footer";
import { Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import DialogContainer from "./components/Dialog/DialogContainer";
import UsersContainer from "./components/Users/Users Container";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogContainer />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
      <MyEvent />
      <Footer />
    </div>
  );
}

export default App;

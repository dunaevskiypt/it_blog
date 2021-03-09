import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyEvent from "./components/MyEvent/MyEvent";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" component={Dialogs}/>
          <Route path="/profile" component={Profile}/>
        </div>
        <MyEvent />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

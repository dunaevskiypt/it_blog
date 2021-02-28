import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyContent from "./components/MyContent/MyContent";
import MyEvent from "./components/MyEvent/MyEvent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <MyContent />
      <MyEvent />
      <Footer />
    </div>
  );
}

export default App;


import Home from "./components/Home/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About";
import NaviBar from "./components/NaviBar/NaviBar";
import MyProjects from "./components/MyProjects/MyProjects";
import LetsConnect from "./components/LetsConnect/LetsConnect";
import Footer from "./components/Footer/Footer";
import Certificate from "./components/Certificate/Certificate";

function App() {

  return (
      <div className="App">
          <NaviBar/>
          <Home/>
          <About/>
          <MyProjects/>
          <Certificate/>
          <LetsConnect/>
          <Footer/>
      </div>
  );
}

export default App;

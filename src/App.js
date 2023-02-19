import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./componets/nav";
import { Banner } from "./componets/banner";
import { Skills } from "./componets/skill";
import { Project } from "./componets/project";
import { Contact } from "./componets/contact";
import { Footer } from "./componets/foot";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Router } from "express
// import { BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    // <Router>
    <div className="App">
      {/* <Routes> */}
      <NavBar /> {/* <button className="btn btn-danger">jep</button> */}{" "}
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      {/* </Routes> */}
    </div>
    // </Router>
  );
}

export default App;

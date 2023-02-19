import logo from "./logo.svg";
// import "./App.css";
import "./App.css";
import { NavBar } from "./componets/nav";
import { Banner } from "./componets/banner";
import { Skills } from "./componets/skill";
import { Project } from "./componets/project";
import { Contact } from "./componets/contact";
import { Footer } from "./componets/foot";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

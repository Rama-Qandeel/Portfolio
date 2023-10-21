import { useState } from "react";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education"
import "./App.scss";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
      <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Education/>
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;

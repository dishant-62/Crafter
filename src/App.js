import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Home  from "./components/Home";
import  Contact  from "./components/Contact";
import Menu from "./components/Menu";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <NavBar />
        <Home/>
        <Menu/>
        <Contact/>

      </Router>
    </>
  );
}

export default App;

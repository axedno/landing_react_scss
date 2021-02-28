
import './App.scss';
import Nav from "./components/Nav";
import React from "react";
import Intro from "./components/Intro";
import Career from "./components/Career";
import Feature from "./components/Feature";
import Engement from "./components/Engement";
import Recall from "./components/Recall";
import Touch from "./components/Touch";
import Footer from "./components/Footer";

function App() {
  return (
      <div>
        <Nav/>
        <Intro/>
        <Career/>
        <Feature/>
        <Engement/>
        <Recall/>
        <Touch/>
        <Footer/>
      </div>
  );
}

export default App;

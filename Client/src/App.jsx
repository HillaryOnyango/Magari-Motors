import Nabar from "./Components/Navbar/Nabar";
import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Content from "./Components/Content/Content";
import Review from "./Components/Review/Review";

function App() {
  return (
    <div>
      <Nabar />
      <Hero />
      <Content />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Content from "./Components/Content/Content";
import Review from "./Components/Review/Review";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Nabar />
      <Hero />
      <Content />
      <Review />
    </div>
  );
}

export default App;

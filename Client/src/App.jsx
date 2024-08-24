import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Content from "./Components/Content/Content";
import Review from "./Components/Review/Review";
import Navbar from "./Components/Navbar/Navbar";
// import Joy from "./Components/Joy/Joy";
import Services from "./Components/Services/Services";

import Faqs from "./Components/Faqs/Faqs";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Content />
      <Review />
      {/* <Joy /> */}
      <Faqs />
      <Services />
    </div>
  );
}

export default App;

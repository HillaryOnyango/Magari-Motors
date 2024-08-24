import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Content from "./Components/Content/Content";
import Review from "./Components/Review/Review";
import Navbar from "./Components/Navbar/Navbar";
// import Joy from "./Components/Joy/Joy";
// import Services from "./Components/Services/Services";
import Partners from "./Components/Patners/Patners";
import Faqs from "./Components/Faqs/Faqs";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Content />
      <Review />

      {/* <Joy /> */}
      <Faqs />
      {/* <Services /> */}
      <Partners />
      <Footer />
    </div>
  );
}

export default App;

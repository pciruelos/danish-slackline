import React from "react";
import About from "./components/About";
import Cards from "./components/Cards";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Newsletter />
      <Cards />
    </div>
  );
};

export default App;

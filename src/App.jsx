import React from "react";
import About from "./components/About";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
};

export default App;

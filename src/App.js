import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header/Header";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText ">
    <div className="max-w-screen-xl mx-auto px-12">
      <Navbar/>
      <Header/>
      <Features/>
      <Projects/>
    </div>
  </div>
  );
}

export default App;

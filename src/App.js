import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header/Header";
import Features from "./components/features/Features";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText ">
    <div className="max-w-screen-xl mx-auto px-16">
      <Navbar/>
      <Header/>
      <Features/>
    </div>
  </div>
  );
}

export default App;

import React from "react";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Portfolio />
      </div>
    </>
  );
}

export default App;

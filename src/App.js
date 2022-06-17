import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewTrackerPage from "./pages/NewTrackerPage";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/brm-tracker" element={<Portfolio />} />
          <Route path="/new-tracker" element={<NewTrackerPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

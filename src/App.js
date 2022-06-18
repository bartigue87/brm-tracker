import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewTrackerPage from "./pages/NewTrackerPage";
import Portfolio from "./pages/Portfolio";
import Auth from "./pages/Auth";
import ArticlesPage from "./pages/ArticlesPage";
import MyPlays from "./pages/MyPlays";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/brm-tracker" element={<Portfolio />} />
          <Route path="/new-tracker" element={<NewTrackerPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/brandons-plays" element={<MyPlays />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

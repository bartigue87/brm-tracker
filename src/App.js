import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewTrackerPage from "./pages/NewTrackerPage";
import Portfolio from "./pages/Portfolio";
import Auth from "./pages/Auth";
import ArticlesPage from "./pages/ArticlesPage";
import MyPlays from "./pages/MyPlays";
import { AuthContext } from "../src/util/auth-context";
import Navbar from "./components/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/brm-tracker" element={<Portfolio />} />
        <Route path="/new-tracker" element={<NewTrackerPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/brandons-plays" element={<MyPlays />} />
      </Routes>
    );
  } else {
    routes = (
      //TODO fix this so the when you click brm-tracker it redirects to login or display "Please create an account or login to use the bankroll tracker"
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/brm-tracker" element={<Portfolio />} />
        <Route path="/new-tracker" element={<NewTrackerPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/brandons-plays" element={<MyPlays />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>{routes}</Router>
    </AuthContext.Provider>
  );
}

export default App;

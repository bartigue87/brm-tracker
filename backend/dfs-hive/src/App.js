import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "../src/util/auth-context";
import LoadingSpinner from "./UIElements/LoadingSpinner";
import { useAuth } from "./util/auth-hook";

const UpdateTrackerPage = React.lazy(() => import("./pages/UpdateTrackerPage"));
const MyPlays = React.lazy(() => import("./pages/MyPlays"));
const ArticlesPage = React.lazy(() => import("./pages/ArticlesPage"));
const AddTransactionPage = React.lazy(() =>
  import("./pages/AddTransactionPage")
);
const NewTrackerPage = React.lazy(() => import("./pages/NewTrackerPage"));
const Auth = React.lazy(() => import("./pages/Auth"));
const UserTrackers = React.lazy(() => import("./pages/UserTrackers"));

function App() {
  const { login, logout, token, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/:userId/brm-tracker" element={<UserTrackers />} />
        <Route path="/new-tracker" element={<NewTrackerPage />} />
        <Route path="/update-tracker/:tid" element={<UpdateTrackerPage />} />
        <Route path="/add-transaction/:tid" element={<AddTransactionPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/brandons-plays" element={<MyPlays />} />
      </Routes>
    );
  } else {
    routes = (
      //TODO fix this so the when you click brm-tracker it redirects to login or display "Please create an account or login to use the bankroll tracker"
      <Routes>
        <Route path="/login" exact element={<Auth />} />
        <Route path="/:userId/brm-tracker" element={<UserTrackers />} />
        <Route path="/new-tracker" element={<NewTrackerPage />} />
        <Route path="/update-tracker/:tid" element={<UpdateTrackerPage />} />
        <Route path="/add-transaction/:tid" element={<AddTransactionPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/brandons-plays" element={<MyPlays />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          {routes}
        </Suspense>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

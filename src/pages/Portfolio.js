import React, { useState, useCallback } from "react";
import data from "../components/data";
import Tracker from "../components/Tracker";
import TotalBank from "../components/TotalBank";
import { TotalProvider } from "../components/TotalContext";
import Navbar from "../components/Navbar";
import AddTracker from "../components/AddTracker";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import { AuthContext } from "../util/auth-context";
import { useContext } from "react";
import Modal from "../UIElements/Modal";
import Button from "../FormElements/Button";

export default function Portfolio() {
  let navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const tracker = data.map((tracker) => {
    return <Tracker key={tracker.id} {...tracker} />;
  });

  function handleAddBtn() {
    navigate("/new-tracker", { replace: true });
  }
  function handleLoginBtn() {
    navigate("/login", { replace: true });
  }

  function toggleDeleteModal() {
    setShowConfirmModal((prevState) => {
      return !prevState;
    });
  }

  function confirmDelete() {
    toggleDeleteModal();
    console.log("deleted");
  }
  return (
    <>
      <Navbar />
      {auth.isLoggedIn && (
        <>
          <h1 className="portfolio-header">Bankroll Manager</h1>
          <TotalProvider>
            <TotalBank />
          </TotalProvider>
          <section className="section-container">
            {tracker}
            <AddTracker handleClick={handleAddBtn} />
          </section>
          <Footer />
        </>
      )}
      {!auth.isLoggedIn && (
        <div className="logged-out-modal">
          <h2 className="">Please login to view your bankroll manager</h2>
          <button className="button" onClick={handleLoginBtn}>
            Login
          </button>
        </div>
      )}
    </>
  );
}

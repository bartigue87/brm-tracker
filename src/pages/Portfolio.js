import React from "react";
import data from "../components/data";
import Tracker from "../components/Tracker";
import TotalBank from "../components/TotalBank";
import { TotalProvider } from "../components/TotalContext";
import Navbar from "../components/Navbar";
import AddTracker from "../components/AddTracker";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

export default function Portfolio() {
  let navigate = useNavigate();

  const tracker = data.map((tracker) => {
    return <Tracker key={tracker.id} {...tracker} />;
  });

  function handleAddBtn() {
    navigate("/new-tracker", { replace: true });
  }

  return (
    <>
      <Navbar />
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
  );
}

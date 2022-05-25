import React from "react";
import data from "./data";
import Tracker from "./Tracker";
import TotalBank from "./TotalBank";
import { TotalProvider } from "./TotalContext";
import Navbar from "./Navbar";

export default function Portfolio() {
  const tracker = data.map((tracker) => {
    return <Tracker key={tracker.id} {...tracker} />;
  });

  return (
    <>
      <Navbar />
      <h1 className="portfolio-header">Bankroll Manager</h1>
      <TotalProvider>
        <TotalBank />
      </TotalProvider>
      <section className="section-container">{tracker}</section>
    </>
  );
}

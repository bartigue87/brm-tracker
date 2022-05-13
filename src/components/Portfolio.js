import React from "react";
import data from "./data";
import Tracker from "./Tracker";

export default function Portfolio() {
  const tracker = data.map((tracker) => {
    return <Tracker key={tracker.id} {...tracker} />;
  });

  return (
    <>
      <section className="section-container">{tracker}</section>
    </>
  );
}

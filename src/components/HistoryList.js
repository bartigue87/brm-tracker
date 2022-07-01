import React from "react";
import HistoryItem from "./HistoryItem";

export default function HistoryList(props) {
  if (props.items.length === 0) {
    return (
      <li>
        <p>Nothing new</p>
      </li>
    );
  }
  return (
    <>
      {props.items.map((history) => (
        <HistoryItem
          key={history.id}
          id={history.id}
          title={history.title}
          amount={history.amount}
          date={history.date}
          trackerId={history.trackerLink}
          onDelete={props.onDeletePlace}
        />
      ))}
    </>
  );
}

import React from "react";

export default function HitoryItem(props) {
  return (
    <>
      {
        <li key={props.id}>
          <p>{props.title}:</p>
          <p>${props.amount}</p>
          <p>{props.date}</p>
          <button className="delete-btn">X</button>
        </li>
      }
    </>
  );
}

import React from "react";

export default function Tracker(props) {
  const history = props.history.map((ticket) => {
    return (
      <li>
        <p>{ticket.title}:</p>
        <p>{ticket.amount}</p>
      </li>
    );
  });
  return (
    <>
      <div className="container">
        <h1>{props.title}</h1>
        <h4>Current Balance</h4>
        <h1 id="balance">{props.currentBalance}</h1>

        <div className="inc-exp-container">
          <div>
            <h4>Deposits</h4>
            <p className="money minus">{props.deposit}</p>
          </div>
          <div>
            <h4>Withdrawals</h4>
            <p className="money plus">{props.withdrawals}</p>
          </div>
          <div>
            <h4>Net</h4>
            <p className="money plus">{props.net}</p>
          </div>
        </div>

        <h3>History</h3>
        <ul id="list" className="list">
          {history}
        </ul>

        <h3>Add new transaction</h3>
        <form id="form">
          <div className="form-control">
            <label for="text">Title</label>
            <input type="text" placeholder="Enter text..." id="text" />
          </div>
          <div className="form-control">
            <label for="amount">Amount </label>
            <label className="label">
              * Use a negative number for expense and a positive number for
              income
            </label>
            <input type="number" placeholder="Enter amount..." id="amount" />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </div>
    </>
  );
}

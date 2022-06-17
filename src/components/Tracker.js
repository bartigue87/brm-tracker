import React, { useState } from "react";
import trashIcon from "../images/trash-svgrepo-com.svg";
import editIcon from "../images/edit-svgrepo-com.svg";

export default function Tracker(props) {
  const [formData, setFormData] = useState({
    deposit: "",
    withdrawals: "",
    endOfDayBalance: "",
  });
  const [totals, setTotals] = useState({
    currentBalance: props.currentBalance,
    deposit: props.deposit,
    withdrawals: props.withdrawals,
    net: props.net,
  });
  const [historyTotal, setHistoryTotal] = useState(props.history);

  const currentYear = new Date().getFullYear();

  const currentMonth = new Date().getMonth() + 1;

  const currentDay = new Date().getDate();

  const together = [currentMonth, currentDay, currentYear].join("/");

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: Number(event.target.value),
      };
    });
  }

  function updateBalance(event) {
    event.preventDefault();
    if (
      formData.endOfDayBalance !== "" &&
      formData.withdrawals !== "" &&
      formData.deposit !== ""
    ) {
      setTotals((prevTotals) => {
        return {
          currentBalance: formData.endOfDayBalance,
          deposit: prevTotals.deposit + formData.deposit,
          withdrawals: prevTotals.withdrawals + formData.withdrawals,
          net:
            formData.endOfDayBalance -
            (prevTotals.deposit + formData.deposit) +
            (prevTotals.withdrawals + formData.withdrawals),
        };
      });
      updateHistory();
    } else {
      alert(`Please enter a value for each field in ${props.title}.`);
    }
    setFormData({
      deposit: "",
      withdrawals: "",
      endOfDayBalance: "",
    });
  }

  function updateHistory() {
    if (formData.withdrawals !== 0 && formData.deposit !== 0) {
      setHistoryTotal((prevHistory) => {
        return [
          ...prevHistory,
          {
            key: prevHistory.length - 1,
            title: "Withdrawal",
            amount: formData.withdrawals,
            date: together,
          },
          {
            key: prevHistory.length,
            title: "Deposit",
            amount: formData.deposit,
            date: together,
          },
        ];
      });
    } else if (formData.withdrawals !== 0) {
      setHistoryTotal((prevHistory) => {
        return [
          ...prevHistory,
          {
            key: prevHistory.length - 1,
            title: "Withdrawal",
            amount: formData.withdrawals,
            date: together,
          },
        ];
      });
    } else if (formData.deposit !== 0) {
      setHistoryTotal((prevHistory) => {
        return [
          ...prevHistory,
          {
            key: prevHistory.length - 1,
            title: "Deposit",
            amount: formData.deposit,
            date: together,
          },
        ];
      });
    }
  }
  const history = historyTotal.map((ticket) => {
    return (
      <li key={ticket.id}>
        <p>{ticket.title}:</p>
        <p>${ticket.amount}</p>
        <p>{ticket.date}</p>
        <button className="delete-btn">X</button>
      </li>
    );
  });
  console.log(totals.net);
  const netColor = {
    color: totals.net > 0 ? "#2ecc71" : "#c0392b",
  };

  return (
    <>
      <div className="brm-container">
        <div className="top-right">
          <img className="del-btn" src={trashIcon} alt="trashcan" />
          <img className="edit-btn" src={editIcon} alt="pencil" />
        </div>

        <h1 className="site">{props.title}</h1>
        <h3>Current Balance</h3>
        <h1 className="balance">{totals.currentBalance}</h1>

        <div className="inc-exp-container">
          <div>
            <h5>Deposits</h5>
            <p className="money minus">{totals.deposit}</p>
          </div>
          <div>
            <h5>Withdrawals</h5>
            <p className="money plus">{totals.withdrawals}</p>
          </div>
          <div>
            <h5>Net</h5>
            <p className="money" style={netColor}>
              {totals.net}
            </p>
          </div>
        </div>

        <h3>History</h3>
        <ul id="list" className="list">
          {history}
        </ul>

        <h3>Add transaction</h3>
        <form
          className="form"
          onSubmit={updateBalance}
          action="/"
          method="post"
        >
          <div className="form-control">
            <label htmlFor="deposit">Deposit</label>
            <input
              type="number"
              onChange={handleChange}
              placeholder="Enter amount... enter 0 if you didn't deposit"
              name="deposit"
              value={formData.deposit}
            />
          </div>
          <div className="form-control">
            <label htmlFor="withdrawals">Withdrawal</label>
            <input
              name="withdrawals"
              type="number"
              onChange={handleChange}
              placeholder="Enter amount... enter 0 if you didn't withdraw"
              value={formData.withdrawals}
            />
          </div>
          <div className="form-control">
            <label htmlFor="endOfDayBalance">Current Balance</label>
            <input
              name="endOfDayBalance"
              type="number"
              onChange={handleChange}
              placeholder="Enter the amount of money in your account"
              value={formData.endOfDayBalance}
            />
          </div>
          <button type="submit" className="button">
            Update balance
          </button>
        </form>
      </div>
    </>
  );
}

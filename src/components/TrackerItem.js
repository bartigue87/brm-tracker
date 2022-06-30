import React, { useContext, useEffect, useState } from "react";
import trashIcon from "../images/trash-svgrepo-com.svg";
import editIcon from "../images/edit-svgrepo-com.svg";
import "./TrackerItem.css";
import { useHttpClient } from "../util/http-hook";
import Input from "../FormElements/Input";
import { VALIDATOR_REQUIRE } from "../util/validator";
import { useForm } from "../shared/form-hook";
import { useNavigate } from "react-router";
import { AuthContext } from "../util/auth-context";

export default function Tracker(props) {
  const trackerId = props.id;
  const { sendRequest } = useHttpClient();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      deposit: {
        value: "",
        isValid: false,
      },
      withdrawals: {
        value: "",
        isValid: false,
      },
      currentBalance: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  // const [formData, setFormData] = useState({
  //   deposit: "",
  //   withdrawals: "",
  //   endOfDayBalance: "",
  // });

  const [totals, setTotals] = useState({
    currentBalance: props.currentBalance,
    deposit: props.deposit,
    withdrawals: props.withdrawals,
    net: props.net,
  });

  // const [historyTotal, setHistoryTotal] = useState(props.history);

  // const currentYear = new Date().getFullYear();

  // const currentMonth = new Date().getMonth() + 1;

  // const currentDay = new Date().getDate();

  // const together = [currentMonth, currentDay, currentYear].join("/");

  // function handleChange(event) {
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [event.target.name]: Number(event.target.value),
  //     };
  //   });
  // }

  console.log(
    "props.withdrawals + Number(formState.inputs.withdrawals.value)",
    props.withdrawals + Number(formState.inputs.withdrawals.value)
  );

  //TODO: Currently works but doesn't refresh. Remove prevent default once you learn how to stay logged in upon refresh
  const updateBalance = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5002/api/trackers/${trackerId}`,
        "PATCH",
        JSON.stringify({
          title: props.title,
          deposit: props.deposit + Number(formState.inputs.deposit.value),
          withdrawals:
            props.withdrawals + Number(formState.inputs.withdrawals.value),
          currentBalance: Number(formState.inputs.currentBalance.value),
        }),
        { "Content-Type": "application/json" }
      );
    } catch (err) {}
  };

  // function updateHistory() {
  //   if (formData.withdrawals !== 0 && formData.deposit !== 0) {
  //     setHistoryTotal((prevHistory) => {
  //       return [
  //         ...prevHistory,
  //         {
  //           key: prevHistory.length - 1,
  //           title: "Withdrawal",
  //           amount: formData.withdrawals,
  //           date: together,
  //         },
  //         {
  //           key: prevHistory.length,
  //           title: "Deposit",
  //           amount: formData.deposit,
  //           date: together,
  //         },
  //       ];
  //     });
  //   } else if (formData.withdrawals !== 0) {
  //     setHistoryTotal((prevHistory) => {
  //       return [
  //         ...prevHistory,
  //         {
  //           key: prevHistory.length - 1,
  //           title: "Withdrawal",
  //           amount: formData.withdrawals,
  //           date: together,
  //         },
  //       ];
  //     });
  //   } else if (formData.deposit !== 0) {
  //     setHistoryTotal((prevHistory) => {
  //       return [
  //         ...prevHistory,
  //         {
  //           key: prevHistory.length - 1,
  //           title: "Deposit",
  //           amount: formData.deposit,
  //           date: together,
  //         },
  //       ];
  //     });
  //   }
  // }
  // const history = historyTotal.map((ticket) => {
  //   return (
  //     <li key={ticket.id}>
  //       <p>{ticket.title}:</p>
  //       <p>${ticket.amount}</p>
  //       <p>{ticket.date}</p>
  //       <button className="delete-btn">X</button>
  //     </li>
  //   );
  // });
  // console.log(totals.net);

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
        <h1 className="balance">{props.currentBalance}</h1>

        <div className="inc-exp-container">
          <div>
            <h5>Deposits</h5>
            <p className="money minus">{props.deposit}</p>
          </div>
          <div>
            <h5>Withdrawals</h5>
            <p className="money plus">{props.withdrawals}</p>
          </div>
          <div>
            <h5>Net</h5>
            <p className="money" style={netColor}>
              {props.net}
            </p>
          </div>
        </div>

        <h3>History</h3>
        <ul id="list" className="list">
          {props.history}
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
            <Input
              id="deposit"
              element="input"
              type="number"
              label="Deposit"
              placeholder="Enter amount... enter 0 if you didn't deposit"
              errorText="Please enter a valid number"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="withdrawals">Withdrawal</label>
            <Input
              id="withdrawals"
              element="input"
              type="number"
              label="Withdrawal"
              placeholder="Enter amount... enter 0 if you didn't withdraw"
              errorText="Please enter a valid number"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="endOfDayBalance">Current Balance</label>
            <Input
              id="currentBalance"
              element="input"
              type="number"
              label="Current Balance"
              placeholder="Enter the amount of money in your account"
              errorText="Please enter a valid number"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
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

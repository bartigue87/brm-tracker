import React from "react";
import trashIcon from "../images/trash-svgrepo-com.svg";
import editIcon from "../images/edit-svgrepo-com.svg";
import "./TrackerItem.css";
import { useHttpClient } from "../util/http-hook";
import Input from "../FormElements/Input";
import { VALIDATOR_REQUIRE } from "../util/validator";
import { useForm } from "../util/form-hook";
import { useNavigate } from "react-router";
import TrackerHistory from "./TrackerHistory";

export default function Tracker(props) {
  const trackerId = props.id;
  const { sendRequest } = useHttpClient();
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

  console.log(
    "props.withdrawals + Number(formState.inputs.withdrawals.value)",
    props.withdrawals + Number(formState.inputs.withdrawals.value)
  );

  async function addWithdrawalToHistory() {
    try {
      await sendRequest(
        "http://localhost:5002/api/history",
        "POST",
        JSON.stringify({
          title: "Withdrawal",
          amount: formState.inputs.withdrawals.value,
          trackerLink: trackerId,
        }),
        { "Content-Type": "application/json" }
      );
    } catch (err) {}
  }

  async function addDepositToHistory() {
    try {
      await sendRequest(
        "http://localhost:5002/api/history",
        "POST",
        JSON.stringify({
          title: "Deposit",
          amount: formState.inputs.deposit.value,
          trackerLink: trackerId,
        }),
        { "Content-Type": "application/json" }
      );
    } catch (err) {}
  }

  async function updateHistory() {
    if (
      formState.inputs.withdrawals.value > 0 &&
      formState.inputs.deposit.value > 0
    ) {
      try {
        await addWithdrawalToHistory();
      } catch (err) {}
      try {
        await addDepositToHistory();
      } catch (err) {}
    } else if (formState.inputs.withdrawals.value > 0) {
      addWithdrawalToHistory();
    } else if (formState.inputs.deposit.value > 0) {
      addDepositToHistory();
    }
  }

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
      updateHistory();
    } catch (err) {}
  };

  const netColor = {
    color: props.net > 0 ? "#2ecc71" : "#c0392b",
  };

  function handleEditBtn() {
    navigate(`/update-tracker/${trackerId}`, { replace: true });
  }

  return (
    <>
      <div className="brm-container">
        <div className="top-right">
          <img className="del-btn" src={trashIcon} alt="trashcan" />
          <img
            className="edit-btn"
            src={editIcon}
            onClick={handleEditBtn}
            alt="pencil"
          />
        </div>

        <h1 className="site">{props.title}</h1>
        <h3>Current Balance</h3>
        <h1 className="balance">{props.currentBalance}</h1>

        <div className="inc-exp-container">
          <div>
            <h5>Deposits</h5>
            <p className="money minus">{props.deposit.toFixed(2)}</p>
          </div>
          <div>
            <h5>Withdrawals</h5>
            <p className="money plus">{props.withdrawals.toFixed(2)}</p>
          </div>
          <div>
            <h5>Net</h5>
            <p className="money" style={netColor}>
              {props.net.toFixed(2)}
            </p>
          </div>
        </div>

        <h3>History</h3>
        <ul id="list" className="list">
          <TrackerHistory trackerId={trackerId} />
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

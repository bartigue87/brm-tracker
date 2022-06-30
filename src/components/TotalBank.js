import React, { useState, useEffect } from "react";
import "./TotalBank.css";

export default function TotalBank(props) {
  const [deposit, setDeposit] = useState(0);
  const [withdrawal, setWithdrawal] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [net, setNet] = useState(0);

  console.log(props.items);
  useEffect(() => {
    function setTotals() {
      try {
        for (let i = 0; i < props.items.length; i++) {
          setDeposit(
            (prevState) => (prevState += Number(props.items[i].deposit))
          );
          setWithdrawal(
            (prevState) => (prevState += Number(props.items[i].withdrawals))
          );
          setTotalBalance(
            (prevState) => (prevState += Number(props.items[i].currentBalance))
          );
          setNet((prevState) => (prevState += Number(props.items[i].net)));
        }
      } catch (err) {}
    }
    setTotals();
  }, [props.items]);

  return (
    <div className="inc-exp-container total-bank">
      <div>
        <h5>Deposits</h5>
        <p className="money minus">{deposit}</p>
      </div>
      <div>
        <h5>Withdrawals</h5>
        <p className="money plus">{withdrawal}</p>
      </div>
      <div>
        <h5>Net</h5>
        <p className="money">{net}</p>
      </div>
      <div>
        <h5>Total Balance</h5>
        <p className="money">{totalBalance}</p>
      </div>
    </div>
  );
}

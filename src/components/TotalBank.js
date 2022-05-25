import React, { useState, useContext } from "react";
import { useTotal } from "./TotalContext";

export default function TotalBank() {
  const [grandTotal, setGrandTotal] = useState({
    totalDeposit: 0,
    totalWithrawal: 0,
    totalNet: 0,
    todayNet: 0,
  });

  const total = useTotal();

  console.log(total);

  return (
    <div className="inc-exp-container total-bank">
      <div>
        <h5>Deposits</h5>
        <p className="money minus">{grandTotal.totalDeposit}</p>
      </div>
      <div>
        <h5>Withdrawals</h5>
        <p className="money plus">{grandTotal.totalWithrawal}</p>
      </div>
      <div>
        <h5>Net</h5>
        <p className="money">{grandTotal.totalNet}</p>
      </div>
      <div>
        <h5>Today's (+/-)</h5>
        <p className="money">{grandTotal.todayNet}</p>
      </div>
    </div>
  );
}

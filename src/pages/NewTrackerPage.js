import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./NewTrackerPage.css";

export default function NewTrackerPage() {
  return (
    <>
      <Navbar />
      <section className="new-tracker-container">
        <h1 className="page-header">Create a new Tracker</h1>
        <form
          className="form"
          // onSubmit={updateBalance}
          action="/"
          method="post"
        >
          <div className="form-control">
            <label htmlFor="deposit">Title</label>
            <input
              type="number"
              // onChange={handleChange}
              placeholder="Which site/app?"
              name="title"
              //value={formData.title}
            />
          </div>
          <div className="form-control">
            <label htmlFor="deposit">Deposit</label>
            <input
              type="number"
              //onChange={handleChange}
              placeholder="Enter amount... enter 0 if you didn't deposit"
              name="deposit"
              //value={formData.deposit}
            />
          </div>
          <div className="form-control">
            <label htmlFor="withdrawals">Withdrawal</label>
            <input
              name="withdrawals"
              type="number"
              //onChange={handleChange}
              placeholder="Enter amount... enter 0 if you didn't withdraw"
              //value={formData.withdrawals}
            />
          </div>
          <div className="form-control">
            <label htmlFor="endOfDayBalance">Current Balance</label>
            <input
              name="endOfDayBalance"
              type="number"
              //onChange={handleChange}
              placeholder="Enter the amount of money in your account"
              //value={formData.endOfDayBalance}
            />
          </div>
          <div style={{ display: "flex", gap: "25px" }}>
            <button type="submit" className="button">
              Submit
            </button>
            <button type="submit" className="button">
              Cancel
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

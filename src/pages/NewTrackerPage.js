import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./NewTrackerPage.css";
import { useNavigate } from "react-router";
import Input from "../FormElements/Input";
import { VALIDATOR_REQUIRE } from "../util/validator";
import Button from "../FormElements/Button";
import { useForm } from "../shared/form-hook";
import { useHttpClient } from "../util/http-hook";

export default function NewTrackerPage() {
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

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

  function handleCloseBtn() {
    navigate("/brm-tracker", { replace: true });
  }

  function submitHandler(event) {
    event.preventDefault();
    sendRequest(
      "http://localhost:5002/api/trackers",
      "POST",
      JSON.stringify({
        title: formState.inputs.title.value,
        deposit: formState.inputs.deposit.value,
        withdrawals: formState.inputs.withdrawals.value,
        currentBalance: formState.inputs.currentBalance.value,
      })
    );
  }

  return (
    <>
      <Navbar />
      <section className="new-tracker-container">
        <h1 className="page-header">Create a new Tracker</h1>
        <form className="form" onSubmit={submitHandler}>
          <div className="form-controller">
            <Input
              id="title"
              element="input"
              type="text"
              label="Title"
              placeholder="Which site/app?"
              errorText="Please enter a valid title"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
          </div>
          <div className="form-controller">
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
          <div className="form-controller">
            <Input
              id="withdrawal"
              element="input"
              type="number"
              label="Withdrawal"
              placeholder="Enter amount... enter 0 if you didn't withdraw"
              errorText="Please enter a valid number"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
          </div>
          <div className="form-controller">
            <Input
              id="balance"
              element="input"
              type="number"
              label="Current Balance"
              placeholder="Enter the amount of money in your account"
              errorText="Please enter a valid number"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
          </div>
          <div style={{ display: "flex", gap: "25px" }}>
            <Button type="submit" disabled={!formState.isValid}>
              Submit
            </Button>
            <button onClick={handleCloseBtn} className="button">
              Cancel
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //useState always getting value as a String
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Combine separates useStates into one - save as object
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  /*
    Shared functionby using identifier, and value 
    
    Need to change onChange function as well, respectively
    - onChange={ (event) => inputChangeHandler("title", event.target.value) }
  */
  //   const inputChangeHandler = (identifier, value) => {
  //     if (identifier === "title") {
  //       setEnteredTitle(value);
  //     } else if (identifier === "date") {
  //       setEnteredDate(value);
  //     } else {
  //       setEnteredAmount(value);
  //     }
  //   };

  //automatically get the "event" object from browser (same as JavaScript)
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    /*
        For combining useStates,

        React schedules state updates (Not perform instantly)

        if you schedule a lot of state updates at the same time,
        you could be depending on an "outdated" or "incorrect" state snapshot

        hence, setUserInput((prevState) => {...}) is better than setUserInput({...})
        (see below commented codes)
    */
    //if using an integrated useState, then function should accept object
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //if your state depends on previous state,
    //then it is safer way to ensure that always operate on the "latest" state snapshot
    //prevState is object in useState
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    //prevent default behvaiour - send back to server, no reload
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //child to parent (bottom-top) connection
    props.onSaveExpenseData(expenseData);

    //add "value" to the input and use for clearing - "two-way binding"
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

//userState is one of React Hooks, need for updating states
//import React, { useState } from "react";

import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

/*
    A Component is React is just a JavaScript Function (returning JSX)
    
    Use "className" instead of "class"

    "{ ... }" for injection 

    One parameter "props" for receiving data, key and value pairs
*/
const ExpenseItem = (props) => {
  /*
    always called inside function
    always return an array with two elements

    first param = pointer to the default value (current state value)
    second param = function for updating
  */
  //const [title, setTitle] = useState(props.title);

  //const clickHandler = () => {
  /*
      state updating function
      1. assign a new value
      2. execute component function again
    */
  //  setTitle("Updated");
  //};

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

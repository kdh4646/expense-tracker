import React, { useState } from "react";

//import ExpenseItem.js for usage
//import ExpenseItem from './components/ExpenseItem';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

/*
  JSX (JavaScript XML)
  
  Only works because there are transformation steps running behind scenes.
  (npm start process transform JavaScript code to more browser friendly code)

  Using Arrow Func: 
    - const App = () => { ... } == function App() { ... }
*/
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  /*
    Old React Usage

    import React from 'react' for all files respectively

    return React.createElement(
      'div',
      {},
      React.createElement('h2', {}, "Let's get started!"),
      React.createElement(Expenses, {items: expenses})
    );
  */
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

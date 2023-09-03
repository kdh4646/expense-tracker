import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  /* 
    Derived state

    let filterInfoText = "2019, 2021, 2022 & 2023";

    if (filteredYear === "2019") {
      filterInfoText = "2020, 2021, 2022 & 2023";
    } else if (filteredYear === "2021") {
      filterInfoText = "2019, 2020, 2022 & 2023";
    } else if (filteredYear === "2022") {
      filterInfoText = "2019, 2020, 2021 & 2023";
    } else if (filteredYear === "2023") {
      filterInfoText = "2019, 2020, 2021 & 2022";
    }
  */

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //Whenever combine components you are using composition => ex) Card
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

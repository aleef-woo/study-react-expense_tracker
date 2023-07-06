import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setSelectedYear] = useState("2023");

  const filterYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onFilterYear={filterYearHandler}
          selected={filteredYear}
        />
        <ExpenseChart expenses={filterExpenses} />
        <ExpenseList items={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

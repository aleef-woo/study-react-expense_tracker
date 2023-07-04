import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddNewExpense(false);
  };

  const formHandler = () => {
    setAddNewExpense((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {!addNewExpense && <button onClick={formHandler}>Add New Expense</button>}
      {addNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelAddNewExpense={formHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

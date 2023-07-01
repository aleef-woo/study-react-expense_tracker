import React from "react";
import './ExpenseItem.css'

const ExpenseItem = () => {
    const expenseDate = new Date(2023, 7, 1);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 250.50;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">RM{expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;

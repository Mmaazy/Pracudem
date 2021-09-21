import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./css/expenseslist.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> Found No expenses</h2>;
  }

  return (
    <>
      <ul className="expenses-list">
        {props.items.map((expenses, index) => (
          <ExpenseItem
            key={index}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpensesList;

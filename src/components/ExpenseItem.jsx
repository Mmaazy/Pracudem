import React, {useState} from "react";
import "./css/expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  
  const changeHandler = () =>{
    setTitle("Updated");
  };
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={changeHandler}>Change title</button>
      </Card>
    </>
  );
};

export default ExpenseItem;

import React from "react";
import './css/newexpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = () =>{
    return(
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
};

export default NewExpense;
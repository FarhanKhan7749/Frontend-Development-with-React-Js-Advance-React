import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) =>{
    const saveExpenceDataHandler = (enteredExpanceData) => {
        const expenseData = {
            ...enteredExpanceData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenceData = {saveExpenceDataHandler} />
    </div>
}

export default NewExpense;
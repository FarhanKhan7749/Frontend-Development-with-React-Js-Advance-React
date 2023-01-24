import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) =>{
    const [isadd , setAddExpence] = useState(false);
    const saveExpenceDataHandler = (enteredExpanceData) => {
        const expenseData = {
            ...enteredExpanceData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    }

    const addNewExpense = () =>{
        setAddExpence(true)
    }

    const submitCancel = () => {
        setAddExpence(false)
    }

    return <div className="new-expense">
        {!isadd && <button onClick={addNewExpense}>Add New Expense</button>}
        {isadd && <ExpenseForm onSaveExpenceData = {saveExpenceDataHandler} onCancel = {submitCancel} />}
    </div>
}

export default NewExpense;
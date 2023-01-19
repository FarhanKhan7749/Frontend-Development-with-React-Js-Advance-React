//import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) =>{
    // const [title,setTitle] = useState('');
    // const [amount,setAmount] = useState('');
    // const [date,setDate] = useState('');

    const changeTitle = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    }

    const changeAmount = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    }

    const changeDate = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    }
    
    return <div>
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control label">
                    <label>Expense Title</label>
                    <input type = 'text' onChange={changeTitle} />
                </div>
                <div className="new-expense__control label">
                    <label>Expense Amount</label>
                    <input type = 'text' min='0.01' step='0.01' onChange={changeAmount}/>
                </div>
                <div className="new-expense__control label">
                    <label>Date</label>
                    <input type = 'date' min='2019-01-01' max='2023-12-31' onChange={changeDate}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    </div>
}

export default ExpenseForm;
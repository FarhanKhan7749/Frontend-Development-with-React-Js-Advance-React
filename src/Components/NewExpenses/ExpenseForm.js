import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) =>{
    // Task 5 in advance React.js "Lets introduce state inside the new Component" 
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');


    // Task 6 in advance react.js "Design patterns with state";
    // const [userInput, sateInput] = useState({
    //     title : '',
    //     amount : '',
    //     date : '',
    // })

    const enteredTitle  = (event) => {
        setTitle(event.target.value);
        // sateInput({
        //     ...userInput,
        //     title : event.target.value,
        // })

    }

    const enteredAmount  = (event) => {
        setAmount(event.target.value);
        // sateInput({
        //     ...userInput,
        //     amount : event.target.value,
        // })

    }

    const enteredDate  = (event) => {
        setDate(event.target.value);
        // sateInput({
        //     ...userInput,
        //     date : event.target.value,
        // })
        //
        // right way to wight the object as value in useState
        // sateInput((prevState)=>{
        //     return {...prevState, title: event.target.value};
        // })
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        const enterData = {
            title:title,
            amount:+amount,
            date:new Date(date)
        };
        props.onSaveExpenceData(enterData);
        setTitle("");
        setAmount("");
        setDate("");
    }
    return <div>
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control label">
                    <label>Expense Title</label>
                    <input type = 'text' value={title} onChange={enteredTitle} />
                </div>
                <div className="new-expense__control label">
                    <label>Expense Amount</label>
                    <input type = 'text' min='0.01' step='0.01' value={amount} onChange={enteredAmount}/>
                </div>
                <div className="new-expense__control label">
                    <label>Date</label>
                    <input type = 'date' min='2019-01-01' max='2023-12-31' value={date} onChange={enteredDate}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    </div>
}

export default ExpenseForm;
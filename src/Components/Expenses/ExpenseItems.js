import './ExpenseItems.css'
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails'
const ExpenseItems = (props) => {
    const [title ,setTitle] = useState(props.title); 

    const clickHandler = () => {
        setTitle("Updated !!!");
        console.log(title)
    }
    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={title} amount={props.amount}/>
            <button onClick={clickHandler}>Delete Expense</button>
        </Card>
    )

    //Q Can you write the following using React.createElement?
    // return (
    //     <div className='expense-item'>
    //         <ExpenseDate date={props.date} />
    //         <div>
    //             <h1>Expense 1</h1>
    //             <h1>Expense 1</h1>
    //         </div>
    //     </div>
    // )        

    // return React.createElement('div',{className:"expense-item"},
    //     React.createElement(ExpenseDate, {date: props.date }),
    //         React.createElement('div',null,
    //             React.createElement('h1',{},"Expense 1"),
    //             React.createElement('h1',{},"Expense 1")
    //         )
    // );
}
export default ExpenseItems
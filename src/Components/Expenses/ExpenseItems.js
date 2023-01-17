import './ExpenseItems.css'
import React from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails'
const ExpenseItems = (props) => {
    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} amount={props.amount}/>
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
import React from 'react';
import './ExpenseItems.css'
const ExpenseDetails = (props) => {
    // const [amount, addAmount] = useState(props.amount);

    // const addAmountOnClick = () => {
    //     addAmount(amount + 100);
    // }

    return(
        <div className='expense-item__description '>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            {/* <button onClick={addAmountOnClick}>ADD</button> */}
        </div>
    );
}

export default ExpenseDetails;
import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import Card from "../UI/Card";
const Expense = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItems 
                title={props.items[0].title} 
                LocationOfExpenditure={props.items[0].LocationOfExpenditure} 
                amount={props.items[0].amount} 
                date={props.items[0].date} 
            />
            <ExpenseItems 
                title={props.items[1].title} 
                LocationOfExpenditure={props.items[1].LocationOfExpenditure} 
                amount={props.items[1].amount} 
                date={props.items[1].date} 
            />
            <ExpenseItems 
                title={props.items[2].title} 
                LocationOfExpenditure={props.items[2].LocationOfExpenditure} 
                amount={props.items[2].amount} 
                date={props.items[2].date} 
            />
            <ExpenseItems 
                title={props.items[3].title} 
                LocationOfExpenditure={props.items[3].LocationOfExpenditure} 
                amount={props.items[3].amount} 
                date={props.items[3].date} 
            />
        </Card>
    );
}

export default Expense;
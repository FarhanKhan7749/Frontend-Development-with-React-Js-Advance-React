import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import Card from "../UI/Card";
const Expense = (props) => {
    return (
        <Card className="expenses">
            {props.items.map((prop) => (
                <ExpenseItems
                    title={prop.title}
                    //LocationOfExpenditure={prop.LocationOfExpenditure}
                    amount={prop.amount}
                    date={prop.date}
                />
            ))}
        </Card>
    );
}

export default Expense;
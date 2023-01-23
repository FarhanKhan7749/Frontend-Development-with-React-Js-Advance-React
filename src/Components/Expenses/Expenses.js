import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChnageHnadler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChnageFilter={filterChnageHnadler} />
            {props.items.map((expense) => (
                <ExpenseItems
                    key = {expense.id}
                    title={expense.title}
                    //LocationOfExpenditure={prop.LocationOfExpenditure}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
}

export default Expense;
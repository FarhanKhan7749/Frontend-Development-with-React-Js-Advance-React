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
            <ExpensesFilter selectedYear={filteredYear} onChnageFilter={filterChnageHnadler}></ExpensesFilter>
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
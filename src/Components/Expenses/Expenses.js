import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChnageHnadler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filterByYear = props.items.filter( expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChnageHnadler} />
            {/* one method to wright the conditional satement in react. */}
            {/* {filterByYear.length === 0 ? (<p>No expense found</p>) :filterByYear.map((expense) => (
                <ExpenseItems
                    key = {expense.id}
                    title={expense.title}
                    //LocationOfExpenditure={prop.LocationOfExpenditure}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))} */}
            {/* Another method to use conditional satement in react */}
            {/* {filterByYear.length === 0 && <p>No expense found</p>}
            {filterByYear.length > 0 && filterByYear.map((expense) => (
                <ExpenseItems
                    key = {expense.id}
                    title={expense.title}
                    //LocationOfExpenditure={prop.LocationOfExpenditure}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))} */}
            <ExpensesList items={filterByYear} />
        </Card>
    );
}

export default Expense;
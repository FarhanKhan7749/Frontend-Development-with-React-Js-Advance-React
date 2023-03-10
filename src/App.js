import { useState } from 'react';
import './App.css';
import Expense from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpenses/NewExpense';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      //LocationOfExpenditure: 'home',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV',LocationOfExpenditure: 'appliances', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      //LocationOfExpenditure: 'on car',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      //LocationOfExpenditure: 'appliances',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [newExpensed, setExpence] = useState(expenses);

  const addExpenseHandler = (enteredData) => {
    setExpence([...newExpensed, enteredData]);
    console.log(newExpensed);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={newExpensed} />
      {/* <ExpenseItems title={expenses[0].title} LocationOfExpenditure={expenses[0].LocationOfExpenditure} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItems>
      <ExpenseItems title={expenses[1].title} LocationOfExpenditure={expenses[1].LocationOfExpenditure} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItems>
      <ExpenseItems title={expenses[2].title} LocationOfExpenditure={expenses[2].LocationOfExpenditure} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItems>
      <ExpenseItems title={expenses[3].title} LocationOfExpenditure={expenses[3].LocationOfExpenditure} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItems> */}
      {/* {expenses.map(expense => (
        <ExpenseItems
        title={expense.title}
        LocationOfExpenditure={expenses.LocationOfExpenditure}
        amount={expense.amount}
        date={expense.date}
        ></ExpenseItems>
      ))} */}
    </div>
  );
}

export default App;

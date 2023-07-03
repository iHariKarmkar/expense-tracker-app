import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import AddExpense from "./components/NewExpense/AddExpense";

const INITIAL_DATA = [
  { id: "E1", title: "Book", amount: 245, date: new Date(2021, 1, 1) },
  { id: "E2", title: "Book 1", amount: 235, date: new Date(2020, 11, 22) },
  { id: "E3", title: "Book 2", amount: 25, date: new Date(2022, 10, 17) },
  { id: "E4", title: "Book 3", amount: 45, date: new Date() },
  { id: "E5", title: "Book 4", amount: 225, date: new Date() },
];

function App() {
  const [expenseData, setExpenseData] = useState(INITIAL_DATA);

  const handleAddExpenseData = (enteredExpenseData) => {
    setExpenseData((prevData) => {
      return [enteredExpenseData, ...prevData]
    })
  };

  return (
    <>
      <AddExpense addExpenseData={handleAddExpenseData} />
      <Expenses expenses={expenseData} />
    </>
  );
}

export default App;

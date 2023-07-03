import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const currentYear = new Date().getFullYear().toString();
  const [filteredYear, setFilteredYear] = useState(currentYear);

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenseData = props.expenses.filter((expense) => {
    if(filteredYear === 'All') {
      return props.expenses
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });
  // const filteredExpenseData = props.expenses.filter((expense) => {
  //     return expense.date.getFullYear().toString() === filteredYear;
  // });
  return (
    <>
      <div className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilterHandler={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenseData}/>
        {filteredExpenseData.length === 0 && (
          <p className="no-data-text">No items to show.</p>
        )}
        {filteredExpenseData.length > 0 &&
          filteredExpenseData.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          ))}
      </div>
    </>
  );
};

export default Expenses;

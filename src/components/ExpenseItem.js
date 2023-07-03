import React from "react";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
    const date = {
        day: props.date.toLocaleString('en-US', {day: '2-digit'}),
        month: props.date.toLocaleString('en-US', {month: 'short'}),
        year: props.date.toLocaleString('en-IN', {year: 'numeric'})
    }
  return (
    <div className="expense_details">
      <div className="date-wrapper">
        <div className="date">{date.day}</div>
        <div className="month">{date.month}</div>
        <div className="year">{date.year}</div>
      </div>
      <div className="expense_description">
        <h2 className="expense_title">{props.title}</h2>
        <h1 className="expense_amount">₹{props.amount}</h1>
      </div>
    </div>
  );
};

export default ExpenseItem;

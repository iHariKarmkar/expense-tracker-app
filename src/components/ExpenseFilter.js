import React from "react";
import "./ExpenseFilter.css";
const ExpenseFilter = (props) => {
  const changeHandler = (event) => {
    props.onChangeFilterHandler(event.target.value);
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="expense-filters">

    {/* Filter by year */}
      <div className="expense-filter">
        <p className="text">Filter by year</p>
        <div className="drop-down">
          <select
            className="options"
            value={props.selected}
            onChange={changeHandler}
          >
            <option>All</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
          </select>
        </div>
      </div>

      {/* Filter by month */}
      <div className="expense-filter">
        <p className="text">Filter by month</p>
        <div className="drop-down">
          <select
            className="options"
            value={props.selected}
          >
            {months.map((monthName) => (
              <option>{monthName}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpenseFilter;

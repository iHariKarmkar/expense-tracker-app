import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const handleChange = (identifier, value) => {
    if (identifier === "title") {
      setTitle(value);
    } else if (identifier === "date") {
      setDate(value);
    } else {
      setAmount(value);
    }
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: title,
      date: new Date(date),
      amount: amount,
    };
    setTitle("");
    setDate("");
    setAmount("");
    props.onSaveData(data);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className="form-controls">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              value={title}
              onChange={(event) => handleChange("title", event.target.value)}
              className="title"
              type="text"
              placeholder="Enter the title"
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              value={amount}
              onChange={(event) => handleChange("amount", event.target.value)}
              type="number"
              min="1"
              placeholder="Enter the amount"
            />
          </div>
          <div className="form-control">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              value={date}
              onChange={(event) => handleChange("date", event.target.value)}
              type="date"
              min="2019-01-01"
              max="2023-12-31"
            />
          </div>
        </div>
        <div className="form-control-action">
          <button type="submit">Add</button>
          <button type="submit" onClick={props.onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;

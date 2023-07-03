import React, { useState } from "react";
import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => {
const handleOnSaveData = (enteredExpenseData) => {
  const expenseData = {
    id: 'E' + Math.floor(Math.random() * 100).toString(),
    ...enteredExpenseData
  }
  props.addExpenseData(expenseData);
}

const [isEditing, setIsEditing] = useState(false)

const startEditingHandler = () => {
  setIsEditing(true);
}

const stopEditingHandler = () => {
  setIsEditing(false);
}

  return (
    <div className="expense-form ">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveData={handleOnSaveData} onCancel={stopEditingHandler}/>}
      
    </div>
  );
};

export default AddExpense;

import React from 'react'

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="ExpenseItem__date">
        <div className="ExpenseItem__date-month">{month}</div>
        <div className="ExpenseItem__date-day">{day}</div>
        <div className="ExpenseItem__date-year">{year}</div>
    </div>
  );
};

export default ExpenseDate;

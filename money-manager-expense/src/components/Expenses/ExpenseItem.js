import React from "react";

import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
  return (
    <Card className="ExpenseItem">
      <ExpenseDate date={props.date}/>
      <h2 className="ExpenseItem__text">{props.title}</h2>
      <div className="ExpenseItem__price">{props.amount}</div>
    </Card>
  );
};

export default ExpenseItem;

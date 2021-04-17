import React, { useState } from "react";

import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  // const [expensesMonth, setExpenseMonth] = useState(0);

  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // const setExpenses = (allMonthExpenses) => {
  //   setExpenseMonth(allMonthExpenses);
  // };

  let allMonthExpenses = 0;
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
    allMonthExpenses += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} expensesMonth={allMonthExpenses} />;
};

export default ExpenseChart;

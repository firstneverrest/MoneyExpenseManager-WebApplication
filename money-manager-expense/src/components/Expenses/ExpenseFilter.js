import React from "react";

const ExpenseFilter = (props) => {
  const dropdownChangedHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="ExpenseFilter">
      <div className="ExpenseFilter__control">
        <label>Filter by year</label>
        <select value={props.filteredYear} onChange={dropdownChangedHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;

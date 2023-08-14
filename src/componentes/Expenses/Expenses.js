import React, { useState } from "react";
import ExpensesList from "./ExpenseList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

//esse componente cuida do recebimento de dados das despesas, será passado um item de array e dentro desse item uma porpriedade
// específica será procurada

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("ALL");

  const filterChangeHandler = (selecteYear) => {
    setFilteredYear(selecteYear);
  };

  //filtrando despesas baseado no ano selecionado
  let filteredExpenses = props.items;

  if (filteredYear !== "ALL"){
    filteredExpenses =  filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
         <ExpensesList items = {filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

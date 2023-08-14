import React, {useState} from "react";

import Expenses from "./componentes/Expenses/Expenses";
import NewExpense from "./componentes/NewExpense/NewExpense";

//componente serve para saber QUAIS dados serão usados para popular as despesas

/* Dados que serão usados para popular as despesas*/
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Seguro do carro",
    amount: 287.96,
    date: new Date(2019, 2, 28),
  },
  {
    id: "e2",
    title: "Supermercado",
    amount: 423.25,
    date: new Date(2020, 4, 10),
  },
  {
    id: "e3",
    title: "Cartão de Crédito",
    amount: 750.35,
    date: new Date(2021, 6, 15),
  },
  {
    id: "e4",
    title: "Apostas",
    amount: 60.0,
    date: new Date(2021, 1, 7),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const orderExpenses = (a, b) => {
    return b.date - a.date;
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  expenses.sort(orderExpenses);
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

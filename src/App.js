import React from "react";

import Expenses from "./componentes/Expenses/Expenses";

//componente serve para saber QUAIS dados serão usados para popular as despesas

const App = ()=> {

  {/*Dados que serão usados para popular as despesas*/}
  const expenses = [
    {
      id: "e1",
      title: "Seguro do carro",
      amount: 287.96,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Supermercado",
      amount: 423.25,
      date: new Date(2021, 4, 10),
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

  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

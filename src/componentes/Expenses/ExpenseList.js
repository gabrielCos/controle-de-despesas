import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

//Exibindo a lista de itens de acordo com o ano selecionado de forma dinâmica usando o metódo .map()

const ExpensesList = (props) => {
 
  if (props.items.length === 0){
    return <h2 className='expenses-list__fallback'>FOUND NO EXPENSES</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

//apenas adicionando uma nova despesa

//haverá um botão para adicionar uma nova despesa para que o form não fique sendo exibido o tempo todo

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    //criando uma função que espera um objeto como parâmetro
    //esse objeto serão os valores dos inputs passados no ExpenseForm no objeto expense data
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            //copiando o parâmetro para um novo objeto que também terá um id
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditing = () => {
        setIsEditing(true);
    };

    const stopEditing = () => {
        setIsEditing(false);
    };

    return <div className="new-expense">
        {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing} />}
    </div>
}

export default NewExpense;
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
//importando o arquivo CSS para estilizar esse componente
import './ExpenseItem.css';

//Esse componente formata os dados das despesas, importando o Date

//como "class" é uma palavra reservada em JS, usamos "className" para nomear as classes 
const ExpenseItem = (props) => {
    {/*usando o compoenente Card como modelo para poder usar sua folha de estilo */}

    {/*O primeiro elemento é um ponteiro para o valor a ser gerenciado e o segundo elemento é uma função que será utilizada para atualizar o primeiro elemento. */}
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title)
    };

    {/*O botão está recebendo a função que fizemoa acima para que ela seja executada toda vez que ele for clicado*/}

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2> 
                    <div className='expense-item__price'>R${props.amount}</div>
                </div>
            <button onClick = {clickHandler}>Change Title</button>
        </Card>
  );
}

export default ExpenseItem;

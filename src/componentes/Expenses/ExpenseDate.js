import './ExpenseDate.css';

//esse componente será usados somente para armazenar a data dos gastos na lista 

const ExpenseDate = (props) => {    
    
    const dia = props.date.toLocaleString('pt-BR',{day: '2-digit'});
    const mes = props.date.toLocaleString('pt-BR',{month: 'long'});
    const ano = props.date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expese-date__day'>{dia}</div>
            <div className='expese-date__month'>{mes}</div>
            <div className='expese-date__year'>{ano}</div>
        </div>
    );
}

export default ExpenseDate;
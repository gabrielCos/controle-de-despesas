import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";

//esse componente cuida do recebimento de dados das despesas, será passado um item de array e dentro desse item uma porpriedade 
// específica será procurada

const Expenses = (props) => {
    {/*Usando novamente o Card como modelo de estilo para esse componente*/}

    return(
        <Card className="expenses">
            <ExpenseItem
            title = {props.items[0].title}
            amount = {props.items[0].amount}
            date = {props.items[0].date}
            />
            <ExpenseItem
            title = {props.items[1].title}
            amount = {props.items[1].amount}
            date = {props.items[1].date}
            />
            <ExpenseItem
            title = {props.items[2].title}
            amount = {props.items[2].amount}
            date = {props.items[2].date}
            />
            <ExpenseItem
            title = {props.items[3].title}
            amount = {props.items[3].amount}
            date = {props.items[3].date}
            />
        </Card>
    )
}

export default Expenses;
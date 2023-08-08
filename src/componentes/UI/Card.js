import './Card.css'

//Esse componente servirá como modelo para outros componentes, transmitindo apenas sua folha de estilo CSS

const Card = (props) => {
    //essa const serve para que o que colocarmos dentro do componentes também possam ter suas próprias folhas de estilo 
    const classes = 'card ' + props.className;

    return <div className = {classes}>{props.children}</div>;
}

export default Card;
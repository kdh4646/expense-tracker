import './Card.css';

//Used as a Wrapper in ExpenseItem.js, Expenses.js
function Card(props) {
    //for card class and other classNames for props
    const classes = 'card ' + props.className;

    //"props.children" : always be the content between the opening and closing tags of your custom component
    return <div className={classes}>{props.children}</div>;
}

export default Card;
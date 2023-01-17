import './Card.css'
const Card = (props) => {
    //Must add white space otherwise it will not work or you can say not style is not apply to components. 
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;
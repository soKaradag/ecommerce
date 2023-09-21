import "./Card.css"

function Card(props) {
    const {name, category, price, image} = props;

    return (
        <div className="Card">
            <h3 className="name">{name}</h3>
            <img src={image} alt=""/>
            <p className="category">({category})</p>
            <p>{price} $</p>
            <button>Add To Cart</button>
        </div>
    )
}

export default Card;
function ProductCard(props) {
    return (
        <div className="flex flex-col justify-center p-2 border">
            <h1 className="p-2">{props.product.name}</h1>
            <img src={props.product.picture} alt={props.product.name}/>
            <span className="p-2">Preis: {props.product.price} Euro</span>
            <span className={`p-2 ${props.product.available ? 'bg-green-500' : 'bg-red-500'}`}>Auf Lager: {props.product.available ? "Ja":"Nein"}</span>
        </div>
    );
}
export default ProductCard;
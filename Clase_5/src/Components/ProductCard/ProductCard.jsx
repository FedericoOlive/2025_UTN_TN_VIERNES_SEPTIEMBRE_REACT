import './ProductCard.css'

function ProductCard(props) {

    //props es un objeto


    return (

        <div>
            {1 + 1}
            <h2>Tv samsung 52"</h2>
            <p>Una Tv muy buena para ver el mundial</p>
            <span>Precio $USD {props.price}</span>
            <button className="btn-buy">Comprar</button>
            <hr />
        </div>

    )
}

export default ProductCard
import './ProductCard.css'

function ProductCard({product}) {

    return (

        <div>

            <img src={product.imagen} />
            <h2>{product.nombre}</h2>
            <p>{product.description}</p>
            <span>Precio $USD {product.precio}</span>
            <button className="btn-buy">Comprar</button>
            <hr />
        </div>

    )
}

export default ProductCard
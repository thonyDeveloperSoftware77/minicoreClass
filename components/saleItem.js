//return ordered list of items's sales

function SaleItem(props) {
    const {id, date, seller, product, amount} = props
    //dar formato y calcular 0.0

    //return ordered list of items's sales
    return(
        <li>
            <p>Fecha venta: {date}</p>
            <br/>
            <h3>Vendedor: {seller}</h3>
            <br/>
            <p>Producto: {product}</p>
            <br/>
            <p>Monto: {amount}</p>
        </li>
    )
}

export default SaleItem;
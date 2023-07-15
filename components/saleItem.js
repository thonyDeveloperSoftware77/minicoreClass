//return ordered list of items's sales

function SaleItem(props) {
    const {id, customer, product, amount} = props
    //dar formato y calcular 0.0

    //return ordered list of items's sales
    return(
        <li>
            <p>Fecha venta</p>
            <br/>
            <h3>Vendedor: {customer}</h3>
            <br/>
            <p>Producto: {product}</p>
            <br/>
            <p>Monto: {amount}</p>
        </li>
    )
}

export default SaleItem;
import SaleItem from "./saleItem";

function SalesList(props) {
    const { sales } = props;

    return (
        <div>
            <h1>Listado de Ventas junto con su respectivo Cliente</h1>
            <ul >
                {sales.map((sale) => (
                    <li key={sale._id}>{sale.amount}</li>
                ))}{/* enviar data */}
            </ul>

                    {/* o así:????? */}

            <ul >
                {items.map((sale) => (
                    <SaleItem
                        key={sale.id}
                        id={sale._id}
                        seller={sale.seller}
                        product={sale.product}
                        amount={sale.amount}
                    />
                ))}{/* enviar data */}
            </ul>
        </div>
    )
}

export default SalesList;

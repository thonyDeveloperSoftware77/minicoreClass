//return general map in an unOrdered list of sales

import SaleItem from "./saleItem";

function SalesList(props) {
    const { sales } = props;
    //return general unOrdered list of sales
    return (
        <div>
            <h1>Listado de Ventas junto con su respectivo Cliente</h1>
            <ul >
                {/* send data to oredered list component*/}
                {sales.map((sale) =>
                    <SaleItem
                        key={sale._id}
                        date={sale.date}
                        seller={sale.sellerName}
                        product={sale.product}
                        amount={sale.amount}
                    />
                )}
            </ul>
        </div>
    )
}

export default SalesList;

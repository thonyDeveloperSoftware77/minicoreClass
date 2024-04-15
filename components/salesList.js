//return general map in an unOrdered list of sales
import { useEffect, useState } from "react";
import SaleItem from "./saleItem";

function SalesList(props) {
    const { sales } = props;

    // Calcular la suma total de montos de ventas por vendedor
  const salesBySeller = sales.reduce((accumulator, sale) => {
    const { seller, amount } = sale;
    accumulator[seller] = (accumulator[seller] || 0) + Number(amount);
    return accumulator;
  }, {});

    //return general unOrdered list of sales
    return (
        <div>
            {/* <h3>Listado de Ventas junto con su respectivo Cliente</h3> */}
            <ul >
                {/* send data to oredered list component*/}
                {sales.map((sale) => (
                    <SaleItem
                        key={sale._id}
                        date = {sale.date}
                        seller = {sale.sellerName}
                        product = {sale.product}
                        amount = {Number(sale.amount)}
                        //{...sale}
                        totalAmount={salesBySeller[sale.seller]}
                    />
                ))}
            </ul>
        </div>
    )
}

export default SalesList;

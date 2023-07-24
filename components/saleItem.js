//return ordered list of items's sales
import { useEffect, useState } from "react";
import classes from "./saleItem.module.css";

function SaleItem(props) {
    const { date, seller, product, amount, totalAmount } = props
    const [formattedDate, setFormattedDate] = useState("");

    //give format to the data as needed
    useEffect(() => {//format for DATE
        const dbDate = new Date(date);

        //separate object DATE from mongodb
        const year = dbDate.getFullYear();
        const month = String(dbDate.getMonth() + 1).padStart(2, '0'); // Se suma 1 ya que los meses son zero-based
        const day = String(dbDate.getDate()).padStart(2, '0');
        //formatted to "yyyy-mm-dd"
        const formattedDateString = `${year}-${month}-${day}`;
        //save the values
        setFormattedDate(formattedDateString);
    }, [date]);

    return (
        <li className={classes.li}>
            <h3>Vendedor: {seller}</h3>
            <p>Fecha venta: {formattedDate}</p>
            <p>Producto: {product}</p>
            <p>Monto: ${amount}</p>
            <p>Total del vendedor: ${totalAmount}</p>
        </li>
    )
}

export default SaleItem;
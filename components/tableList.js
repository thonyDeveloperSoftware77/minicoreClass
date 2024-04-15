import classes from "./tableList.module.css";
import React from 'react';

function formatDate(firestoreTimestamp) {
    // Convierte el timestamp de Firestore a un objeto Date de JavaScript
    const date = new Date(firestoreTimestamp.seconds * 1000);

    // Ajusta la fecha para reflejar la zona horaria local del usuario
    const adjustedDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return adjustedDate.toLocaleDateString(undefined, options);
}


function TableList(props) {
    const { sales } = props;

    return (
        <div className={classes.tableContainer}>
            <h2>Listado de Ventas</h2>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>Fecha Venta</th>
                        <th>Vendedor</th>
                        <th>Producto</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale) => (
                        <tr key={sale._id}>
                            <td>{formatDate(sale.date)}</td>
                            <td>{sale.sellerName}</td>
                            <td>{sale.product}</td>
                            <td>$ {sale.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableList;

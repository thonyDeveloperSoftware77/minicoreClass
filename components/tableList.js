import React from 'react';

function formatDate(dateString) {
    // Parsea la fecha a un objeto Date teniendo en cuenta la zona horaria
    const date = new Date(dateString);
    // Ajusta la fecha para reflejar la zona horaria local del usuario
    const adjustedDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return adjustedDate.toLocaleDateString(undefined, options);
}

function TableList(props) {
    const { sales } = props;

    return (
        <div>
            <h2>Listado de Ventas</h2>
            <table>
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
                            <td>{sale.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableList;


//función para obtener datos filtrados, recibiendo mes y año y devolviendo las ventas filtradas
export async function getSalesFiltered(dateFilter) {
    const { year, month } = dateFilter;

    const ventas = await getSales();
    //allEvents

    let ventasFiltradas = allEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return ventasFiltradas;
}
//fetch de los datos, devolviendo un array
export async function getVentas() {
    //connection
    //access to database and collection
    //get as array
    //return ventas;
}

//función para obtener datos filtrados, recibiendo mes y año y devolviendo las ventas filtradas
export async function getVentasFiltradas(){
    const ventas = await getVentas();
    return ventas.find((venta)=>venta._id ==_id)
}

export async function getVentasFiltradas(dateFilter) {
    const { year, month } = dateFilter;
  
    const ventas = await getVentas();
        //allEvents
  
    let ventasFiltradas = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return ventasFiltradas;
  }
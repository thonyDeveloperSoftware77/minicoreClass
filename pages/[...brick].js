import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

function SalesFilteredPage(props) {
  const [filteredSales, setFilteredSales] = useState([]);
  const router = useRouter();
  const filterDate = router.query.brick;
  const { data } = router.query;
  //console.log(filterData);

  if (!filterDate) {
    return <p>Cargando datos...</p>;
  }
  //extract from array
/*   const startYear = filterDate[0];
  const startMonth = filterDate[1];
  const endYear = filterDate[2];
  const endMonth = filterDate[3];

  const numstartYear = + startYear;
  const numstartMonth = + startMonth;
  const numendYear = + endYear;
  const numendMonth = + endMonth;

  //last validation
  if (isNaN(numstartYear) ||
    isNaN(numstartMonth) ||
    isNaN(numendYear) ||
    isNaN(numendMonth) ||
    numstartYear < 2021 ||
    numendYear > 2023 ||
    numstartMonth < 1 ||
    numendMonth > 12
  ) {
    return <p>Fecha de filtro NO válido</p>;
  } */

  const { startDate, endDate } = router.query;
  useEffect(() => {
    // Obtener los datos filtrados desde la API usando las fechas de inicio y fin obtenidas desde la ruta
    if (startDate && endDate) {
      fetch('/api/sales')
        .then((response) => response.json())
        .then((data) => {
          // Filtrar los datos por fecha
          const startDateObj = new Date(startDate);
          const endDateObj = new Date(endDate);
          const filteredData = data.sales.filter((sale) => {
            const saleDate = new Date(sale.date);
            return saleDate >= startDateObj && saleDate <= endDateObj;
          });
          setFilteredSales(filteredData);
          console.log(filteredSales);
        });
    }
  }, [startDate, endDate]);

  /*   const filteredSales = getFilteredSales({
      year: numendYear,
      month: numendMonth,
    });
    if(!filteredSales || filteredSales.length === 0){
      return <p>NO se encontraron ventas en las fechas especificadas</p>;
    } */

  return (
    <Fragment>
      {/*  {pageHeadData}
          <ResultsTitle date={date} />
          <EventList items={filteredEvents} /> */}
      <h1>Filtrado por mes y año</h1>
    </Fragment>
  );
}

export default SalesFilteredPage;
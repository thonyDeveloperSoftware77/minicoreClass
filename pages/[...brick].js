import classes from "../components/saleItem.module.css";
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import SalesList from "../components/salesList";

function SalesFilteredPage(props) {
  const [filteredSales, setFilteredSales] = useState([]);
  const router = useRouter();
  const filterDate = router.query.brick;
  //extract the data from the url
  const startDate = filterDate[0];
  const endDate = filterDate[1];

  if (!filterDate) {
    return <p>Cargando datos...</p>;
  }

  if (startDate && endDate) {
    useEffect(() => {
      fetchData();
    }, []);
  }

  //filter fata by DATE
  const fetchData = async () => {
    try {
      fetch('/api/sales')
        .then((response) => response.json())
        .then((data) => {
          //const startDateObj = new Date(startDate);//todo el formato no va a coincidir la hora, así que mejor poner el de la db a yyyy-mm-dd
          //console.log(startDate);
          const filteredData = data.sales.filter((sale) => {
            const saleDate = new Date(sale.date);

            //separate object DATE from mongodb
            const year = saleDate.getFullYear();
            const month = String(saleDate.getMonth() + 1).padStart(2, '0'); // Se suma 1 ya que los meses son zero-based
            const day = String(saleDate.getDate()).padStart(2, '0');

            //formatted to "yyyy-mm-dd"
            const formattedDateString = `${year}-${month}-${day}`;

            return formattedDateString >= startDate && formattedDateString < endDate;
          });

          setFilteredSales(filteredData);
          if (!filteredData || filteredData.length === 0) {
            console.error('NO se encontraron ventas en estas fechas...')
            return <p>NO se encontraron ventas en las fechas especificadas</p>;
          }

        });

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={classes.container}>
      <h1>Filtrado por mes y año</h1>
      <SalesList sales={filteredSales} />
    </div>
  );
}

export default SalesFilteredPage;
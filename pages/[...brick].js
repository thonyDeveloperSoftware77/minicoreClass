import classes from "../components/saleItem.module.css";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SalesList from "../components/salesList";

function SalesFilteredPage(props) {
  const [filteredSales, setFilteredSales] = useState([]);
  const router = useRouter();
  const filterDate = router.query.brick;
  //extract the data from the url
  const startDate = filterDate ? filterDate[0] : null;
  const endDate = filterDate ? filterDate[1] : null;

  useEffect(() => {
    if (startDate && endDate) {
      fetchData();
    }
  }, [startDate, endDate]);

  //filter fata by DATE
  const fetchData = async () => {
    try {
      const response = await fetch('/api/sales');
      const data = await response.json();
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
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!filterDate) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Filtrado por mes y año</h1>
      <SalesList sales={filteredSales} />
    </div>
  );
}

export default SalesFilteredPage;
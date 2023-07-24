import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import SalesFiltered from '../components/searchSales';
import { useRouter } from 'next/router';
import TableList from '../components/tableList';
import { ShowListButton } from "../components/ui/button";

export default function Home() {
  const [showList, setShowList] = useState(false);
  const [salesItems, setSalesItems] = useState([]);
  const router = useRouter();

  function showSales() {
    //setShowList(!showList);
    fetch('/api/sales')
      .then((response) => response.json())
      .then((data) => {
        setSalesItems(data.sales)
      });
    //console.log(salesItems);
  }

  function findSalesHandler(startYear, startMonth, endYear, endMonth) {
    // Obtener los datos filtrados según las fechas seleccionadas
    const startDate = `${startYear}-${startMonth}-24`;
    const endDate = `${endYear}-${endMonth}-24`;

    // Redirigir a SalesFilteredPage con las fechas de inicio y fin como parte de la ruta
    router.push(`/${startDate}/${endDate}`);
  }


  const toggleShowList = () => {
    setShowList(!showList);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Minicore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}> MiniCore </h1>

        {/* Mostrar Ventas */}
        <div>
          <br />
          <ShowListButton
            text="Ver Ventas"
            toggleShowList={toggleShowList}
            fetchData={showSales}
          />
        </div>
        {showList && <TableList sales={salesItems} />} {/* Pasa los datos de salesItems al componente SalesList */}

        <br />
        <h3>Para realizar el cálculo dentro de un periodo de tiempo: </h3>
        <br/>
        {/* Componente searchSales */}
        <SalesFiltered onSearch={findSalesHandler} />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}


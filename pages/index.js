import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import SalesList from '../components/salesList';
import SalesFiltered from '../components/searchSales';
import { useRouter } from 'next/router';
import TableList from '../components/tableList';

export default function Home(props) {
  const [showList, setShowList] = useState(false);
  const [salesItems, setSalesItems] = useState([]);
  const router = useRouter();

  function showSales() {
    setShowList(!showList);
    fetch('/api/sales')
      .then((response) => response.json())
      .then((data) => {
        setSalesItems(data.sales)
      });
    console.log(salesItems);
  }

  function findSalesHandler(year, month) {
    const fullPath = `/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Minicore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}> MiniCore </h1>

        <div>
          <button onClick={showSales}>Ver Ventas</button>
        </div>

        {/* <SalesFiltered onSearch={findSalesHandler}/> */}

        {/* si estado===true entonces muestro componente listarVentas */}
        {showList && <TableList sales={salesItems} />} {/* Pasa los datos de salesItems al componente SalesList */}
        <br />
        <h3>Calcular comisión</h3>
        <SalesFiltered onSearch={findSalesHandler} />
        <input type='date'></input>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}


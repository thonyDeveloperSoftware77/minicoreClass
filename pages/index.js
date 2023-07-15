import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import SalesList from '../components/salesList';
import SalesFiltered from '../components/buscarVentas';
import { useRouter } from 'next/router';

export default function Home(props) {
  const [showList, setShowList] = useState(false);
  const [salesItems, setSalesItems] = useState([]);
  const router = useRouter;

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
        {showList && <SalesList sales={salesItems} />} {/* Pasa los datos de salesItems al componente SalesList */}
        <ul>
          {salesItems.map((item) => {
            <li key={item._id}>{item.amount}</li>
          })}
        </ul>


        <p>Opciones para colocar fechas y enviar el componente de filtroFechas</p>
        <h2>Formulario</h2>
        <form action="/submit" method="POST">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required></input><br />
        </form>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}


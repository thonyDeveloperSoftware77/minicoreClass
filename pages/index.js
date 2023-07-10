import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import ListarVentas from '../components/listarVentas';

export default function Home() {
  const [showList, setShowList] = useState(false);

  function changeStateList() {
    setShowList(!showList);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Minicore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}> Mini-Core </h1>

        <div>
          <button onClick={changeStateList}>Ver Ventas</button>
        </div>
        {/* si estado===true entonces muestro componente listarVentas */}
        {showList && <ListarVentas />}

        <p>Opciones para colocar fechas y enviar el componente de filtroFechas</p>
        <h2>Formulario</h2>
        <form action="/submit" method="POST">
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" required></input><br/>
        </form>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
import { getFeaturedEvents } from '../helpers/api-util';
<EventList items={props.events} />{/* manda los datos al componente que los estructura en lista */}

export async function getStaticProps() {
  const ventasFiltradas = await getFeaturedEvents();

  return {
    props: {
      events: ventasFiltradas,
    },
    revalidate: 1800,
  };
}

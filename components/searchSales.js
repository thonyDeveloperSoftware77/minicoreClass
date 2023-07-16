import { useRef } from "react";
import { classes } from '../components/searchSales.module.css'

function SalesFiltered(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={yearInputRef}>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
          </select>
        </div>
        <div>
          <label htmlFor='month'>Month</label>
          <select id='month' ref={monthInputRef}>
            <option value='1'>enero</option>
            <option value='2'>Febrero</option>
            <option value='3'>Marzo</option>
            <option value='4'>Abril</option>
            <option value='5'>Mayo</option>
            <option value='6'>Junio</option>
            <option value='7'>Julio</option>
            <option value='8'>Agosto</option>
            <option value='9'>Septiembre</option>
            <option value='10'>Octubre</option>
            <option value='11'>Noviembre</option>
            <option value='12'>Diciembre</option>
          </select>
        </div>
      </div>
      <button>Buscar</button>
    </form>
  );
}

export default SalesFiltered;
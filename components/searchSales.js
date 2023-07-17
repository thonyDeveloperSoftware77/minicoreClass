import { useRef } from "react";
import { classes } from '../components/searchSales.module.css'

function SalesFiltered(props) {
  const startYearInputRef = useRef();
  const startMonthInputRef = useRef();
  const endYearInputRef = useRef();
  const endMonthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const startYear = startYearInputRef.current.value;
    const startMonth = startMonthInputRef.current.value;
    const endYear = endYearInputRef.current.value;
    const endMonth = endMonthInputRef.current.value;

    props.onSearch(startYear, startMonth, endYear, endMonth);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor='startYear'>Fecha inicio</label>
          <select id='startYear' ref={startYearInputRef}>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
          </select>
          <select id='startMonth' ref={startMonthInputRef}>
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
        <div>
          <label htmlFor='endYear'>Fecha fin</label>
          <select id='endYear' ref={endYearInputRef}>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
          </select>
          <select id='endMonth' ref={endMonthInputRef}>
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
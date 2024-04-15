import { useRef } from "react";
import classes from '../components/searchSales.module.css'
import { StyledButton } from "../components/ui/button";

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
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='startYear'>Fecha inicio</label>
          <select id='startYear' ref={startYearInputRef}>
            <option value='2023'>2023</option>
            <option value='2024'>2024</option>
          </select>
          <select id='startMonth' ref={startMonthInputRef}>
            <option value='01'>enero</option>
            <option value='02'>Febrero</option>
            <option value='03'>Marzo</option>
            <option value='04'>Abril</option>
            <option value='05'>Mayo</option>
            <option value='06'>Junio</option>
            <option value='07'>Julio</option>
            <option value='08'>Agosto</option>
            <option value='09'>Septiembre</option>
            <option value='10'>Octubre</option>
            <option value='11'>Noviembre</option>
            <option value='12'>Diciembre</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='endYear'>Fecha fin</label>
          <select id='endYear' ref={endYearInputRef}>
            <option value='2023'>2023</option>
            <option value='2024'>2024</option>
          </select>
          <select id='endMonth' ref={endMonthInputRef}>
            <option value='01'>enero</option>
            <option value='02'>Febrero</option>
            <option value='03'>Marzo</option>
            <option value='04'>Abril</option>
            <option value='05'>Mayo</option>
            <option value='06'>Junio</option>
            <option value='07'>Julio</option>
            <option value='08'>Agosto</option>
            <option value='09'>Septiembre</option>
            <option value='10'>Octubre</option>
            <option value='11'>Noviembre</option>
            <option value='12'>Diciembre</option>
          </select>
        </div>
      </div>
      <StyledButton text="Buscar" />
    </form>
  );
}

export default SalesFiltered;
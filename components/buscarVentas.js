import { useRef } from "react";

function ventasFiltradas(props) {
    const yearInputRef = useRef();
    const monthInputRef = useRef();
  
    function submitHandler(event) {
      event.preventDefault();
  
      const selectedYear = yearInputRef.current.value;
      const selectedMonth = monthInputRef.current.value;
  
      props.onSearch(selectedYear, selectedMonth);    
    }
  
    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <div>
            <label htmlFor='year'>Year</label>
            <select id='year' ref={yearInputRef}>
              <option value='2021'>2021</option>
              <option value='2022'>2022</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor='month'>Month</label>
            <select id='month' ref={monthInputRef}>
              <option value='1'>enero</option>
              <option value='2'>Febrero</option>
              <option value='3'>Marzo</option>
              <option value='4'>Abril</option>
              <option value='5'>Mayo</option>
              <option value='6'>Junio</option>
              <option value='7'>Julyio</option>
              <option value='8'>Agosto</option>
              <option value='9'>Septiembre</option>
              <option value='10'>Octubre</option>
              <option value='11'>Noviembre</option>
              <option value='12'>Diciembre</option>
            </select>
          </div>
        </div>
        <Button>Buscar</Button>
      </form>
    );
}

export default ventasFiltradas;
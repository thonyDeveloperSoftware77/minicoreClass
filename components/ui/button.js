//Factory Design Pattern
import classes from './button.module.css'; 
import React from "react";

//Clase padre
class Button extends React.Component { //abstract base class in React components
  render() {
    return null;
  }
}

//Subclase para redireccionar
export class LinkButton extends Button {
  render() {
    const { text, link } = this.props;
    return (
      <button className={classes.btn} onClick={() => window.location.href = link}>
        {text}
      </button>
    );
  }
}

//Subclase para mostrar tabla
export class ShowListButton extends Button {
  render() {
    const { text, toggleShowList, fetchData } = this.props;
    const handleClick = () => {
      toggleShowList(); //Cambia el estado de showList
      fetchData(); //Realiza el fetch
    };

    return (
      <button className={classes.btn} onClick={handleClick}>
        {text}
      </button>
    );
  }
}

//Subclase para solo texto
export class StyledButton extends Button {
  render() {
    const { text } = this.props;

    return (
      <button className={classes.btn}>
        {text}
      </button>
    );
  }
}



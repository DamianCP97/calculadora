import { useState } from 'react';
import './App.css';

function App() {

  const [valorPantalla, setValorPantalla] = useState(0);
  const [primerNumero, setPrimerNumero] = useState(0);
  const [operacion, setOperacion] = useState(0);


  //Van apareciendo los números en pantalla y se convierten a números
  function click(event) {
    const valorBoton = event.target.value;
    setValorPantalla(parseFloat(valorPantalla + valorBoton));
  }

  //Borra el contenido de la pantalla
  function reset() {
    setValorPantalla(0);
  }

  //Borra el último elemento de la pantalla
  function borrar() {
    let numeroToString = valorPantalla.toString().slice(0, -1); //Convierto el número a string para poder operar con él y quitarle el último valor al string
    let stringToNumero = parseFloat(numeroToString); //Vuelvo a convertir el string a número para poder seguir operando
    setValorPantalla(stringToNumero);
    if (numeroToString.length < 1 || numeroToString.includes('-') &&  numeroToString.length < 2) {
      setValorPantalla(0);
    }
  }

  //Cambia el signo del contenido de la pantalla
  function cambiarSigno() {
    setValorPantalla(valorPantalla * -1);
  }

  function sumar() {
    const resultado = primerNumero + parseFloat(valorPantalla);
    setValorPantalla(resultado);
    setPrimerNumero(0);
    setOperacion(0);
  }
  
  return (
    <>
    <div className="calculadora">
      <div id="pantalla">{valorPantalla}</div>
      <div className="botones">
        <button onClick={reset}>AC</button>
        <button onClick={cambiarSigno}>+/-</button>
        <button onClick={borrar}>⇦</button>
        <button onClick={click}>/</button>
        <button onClick={click} value="7">7</button>
        <button onClick={click} value="8">8</button>
        <button onClick={click} value="9">9</button>
        <button onClick={click}>*</button>
        <button onClick={click} value="4">4</button>
        <button onClick={click} value="5">5</button>
        <button onClick={click} value="6">6</button>
        <button onClick={click}>-</button>
        <button onClick={click} value="1">1</button>
        <button onClick={click} value="2">2</button>
        <button onClick={click} value="3">3</button>
        <button onClick={sumar}>+</button>
        <button onClick={click} value="0">0</button>
        <button onClick={click}>.</button>
        <button onClick={click}>=</button>
      </div>
    </div>
    </>
  )
}

export default App

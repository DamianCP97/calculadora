import { useState } from 'react';
import './App.css';

function App() {

  const [valorPantalla, setValorPantalla] = useState('');

  //Van apareciendo los números en pantalla
  function click(event) {
    const valorBoton = event.target.value;
    setValorPantalla(valorPantalla + valorBoton);
  }

  //Borra el contenido de la pantalla
  function reset() {
    setValorPantalla('');
  }

  //Borra el último elemento de la pantalla
  function borrar() {
    let valuePantalla = valorPantalla.slice(0, -1);
    setValorPantalla(valuePantalla);
  }

  //Cambia el signo del contenido de la pantalla
  function cambiarSigno() {
    setValorPantalla(valorPantalla * -1);
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
        <button onClick={click}>+</button>
        <button onClick={click} value="0">0</button>
        <button onClick={click}>=</button>
      </div>
    </div>
    </>
  )
}

export default App

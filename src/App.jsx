import { useState } from 'react';
import './App.css';

function App() {

  const [valorPantalla, setValorPantalla] = useState(0);
  const [valorAnterior, setValorAnterior] = useState(0);
  const [tipoOperacion, setTipoOperacion] = useState(null);


  //Van apareciendo los números en pantalla y se convierten a números
  function click(event) {
    const valorBoton = event.target.value;
    setValorPantalla(parseFloat(valorPantalla + valorBoton));
  }

  //Borra el contenido de la pantalla
  function reset() {
    setValorPantalla(0);
    setValorAnterior(0);
    setTipoOperacion(null);
  }

  //Borra el último elemento de la pantalla
  function borrar() {
    let numeroToString = valorPantalla.toString().slice(0, -1); //Convierto el número a string para poder operar con él y quitarle el último valor al string
    let stringToNumero = parseFloat(numeroToString); //Vuelvo a convertir el string a número para poder seguir operando
    setValorPantalla(stringToNumero);
    if (numeroToString.length < 1 || numeroToString.includes('-') && numeroToString.length < 2) {
      setValorPantalla(0);
    }
  }

  //Cambia el signo del contenido de la pantalla
  function cambiarSigno() {
    setValorPantalla(valorPantalla * -1);
  }

  function decimal() {
    setValorPantalla(valorPantalla + '.');
  }

  function sumar() {
    setTipoOperacion('suma');
    setValorAnterior(valorPantalla); // Almacenar el valor actual como el primer valor de la suma
    setValorPantalla(0); // Restablecer la pantalla para que el usuario ingrese el próximo valor
  }

  function restar() {
    setTipoOperacion('resta');
    setValorAnterior(valorPantalla); // Almacenar el valor actual como el primer valor de la suma
    setValorPantalla(0); // Restablecer la pantalla para que el usuario ingrese el próximo valor
  }

  function multiplicar() {
    setTipoOperacion('multiplicacion');
    setValorAnterior(valorPantalla); // Almacenar el valor actual como el primer valor de la suma
    setValorPantalla(0); // Restablecer la pantalla para que el usuario ingrese el próximo valor
  }

  function dividir() {
    setTipoOperacion('division');
    setValorAnterior(valorPantalla); // Almacenar el valor actual como el primer valor de la suma
    setValorPantalla(0); // Restablecer la pantalla para que el usuario ingrese el próximo valor
  }

  // Función para manejar la igualdad (realizar la suma)
  function igual() {
    let resultado;

    switch (tipoOperacion) {
      case "suma":
        resultado = valorAnterior + valorPantalla;
        break;
      case "resta":
        resultado = valorAnterior - valorPantalla;
        break;
      case "multiplicacion":
        resultado = valorAnterior * valorPantalla;
        break;
      case "division":
        if (valorPantalla !== 0) {
          resultado = valorAnterior / valorPantalla;
        } else {
          // Manejar el caso de división por cero
          resultado = "Error: división por cero";
        }
        break;
      default:
        // Manejar operaciones desconocidas
        resultado = "Operación no válida";
        break;
    }

    // Actualizar la pantalla con el resultado de la operación
  setValorPantalla(resultado);

  // Establecer el resultado como el nuevo valor anterior para encadenar operaciones
  setValorAnterior(resultado);

  // Restablecer la operación a null después de realizar una operación
  setTipoOperacion(null);
  }
  
  return (
    <>
    <div className="calculadora">
      <div id="pantalla">{valorPantalla}</div>
      <div className="botones">
        <button onClick={reset}>AC</button>
        <button onClick={cambiarSigno}>+/-</button>
        <button onClick={borrar}>⇦</button>
        <button onClick={dividir}>/</button>
        <button onClick={click} value="7">7</button>
        <button onClick={click} value="8">8</button>
        <button onClick={click} value="9">9</button>
        <button onClick={multiplicar}>*</button>
        <button onClick={click} value="4">4</button>
        <button onClick={click} value="5">5</button>
        <button onClick={click} value="6">6</button>
        <button onClick={restar}>-</button>
        <button onClick={click} value="1">1</button>
        <button onClick={click} value="2">2</button>
        <button onClick={click} value="3">3</button>
        <button onClick={sumar}>+</button>
        <button onClick={click} value="0">0</button>
        <button onClick={decimal}>.</button>
        <button onClick={igual}>=</button>
      </div>
    </div>
    </>
  )
}

export default App
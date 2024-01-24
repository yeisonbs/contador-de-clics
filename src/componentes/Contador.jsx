import React from "react";
import "../hojas-de-estilo/Contador.css";

function Contador ({ numClics }) {
  return(
    <div className="contador">
        <h3>Has hecho {numClics} clics</h3>
    </div>
  );
}

export default Contador;
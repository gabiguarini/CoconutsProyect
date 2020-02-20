import React, { useEffect, useState } from 'react';
import { numeroJumbo } from "./Jumbo";

function Cartas() 
{
    const [seleccion, setSeleccion] = useState(0);
    // ? ACA IRIAN LAS OPCIONES
    const min = 1;
    const max = 100;
    var numero1 = Math.floor(min + Math.random() * (max - min));;
    var numero2 = Math.floor(min + Math.random() * (max - min));
    var numero3 = Math.floor(min + Math.random() * (max - min));
    var SELECCION;
    function mod(valor){
        setSeleccion(valor)
    };

    useEffect(() => {
        switch (seleccion) {
            case 1:
                setSeleccion(5);
                SELECCION = {numero1};
                break;
            case 2:
                setSeleccion(5);
                SELECCION = {numero2}
                break;
            case 3:
                setSeleccion(5);
                SELECCION = {numero3}
                break;
        
            default:
                break;
        }
      });

    return(
        <div class="container">
            <div class="row">
                <div class="col-sm">
                <div class="card text-center bg-warning">
                    <div class="card-body" onClick={() =>mod(1)}>
                        <h5 class="card-subtitle">PICK</h5>
                        <h1 class="card-text">{ numero1 }</h1>
                    </div>
                </div>
                </div>
                <div class="col-sm">
                <div class="card text-center bg-warning" onClick={() => mod(2)}>
                    <div class="card-body">
                        <h5 class="card-subtitle">PICK</h5>
                        <h1 class="card-text">{ numero2 }</h1>
                    </div>
                </div>
                </div>
                <div class="col-sm">
                <div class="card text-center bg-warning">
                    <div class="card-body" onClick={() =>mod(3)}>
                        <h5 class="card-subtitle">PICK</h5>
                        <h1 class="card-text pull-center">{ numero3 }</h1>
                    </div>
                </div>
                </div>
            </div>
        </div>        
    )
}

export default Cartas;
export var SELECCION;

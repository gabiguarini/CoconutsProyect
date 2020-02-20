import React, { useState, } from 'react';
import { SELECCION } from "./Cartas";

function Jumbo() 
{
    var [estado, setEstado] = useState(Math.floor(Math.random()* 2)+1);

    
    var html;
    
    const min = 1;
    const max = 100;
    var numeroJumbo = Math.floor(min + Math.random() * (max - min));

    switch (estado) {
        case 1:
            html = <div>
            <h1 >Elige un numero MAYOR que: </h1>
            <br></br>
            <h1 class="display-3">{numeroJumbo}</h1>
            </div>;
            //setEstado(5);
            break;
        case 2:
            html = <div>
            <h1 >Elige un numero MENOR que: </h1>
            <br></br>
            <h1 class="display-3">{numeroJumbo}</h1>
            </div>;
            //setEstado(5);
            break;           
    
        default:
            //setEstado(Math.floor(Math.random()* 2)+1);
            break;
    }
    return(
        <div class="container">
            <div class="jumbotron text-center bg-warning">
                { html }
            </div>
        </div>
    )
    
}

export default Jumbo;
export var numeroJumbo;
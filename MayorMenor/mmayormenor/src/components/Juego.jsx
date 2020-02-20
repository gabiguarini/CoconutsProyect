import React from 'react';
import { SELECCION } from "./Cartas";
import { numeroJumbo } from "./Jumbo";

function Juego() 
{
    var html;
    if (SELECCION > numeroJumbo) {
        html = <span class="badge badge-pill badge-success">On it</span>
    }
    else html = <span class="badge badge-pill badge-danger">Pifiada</span>
    return(
        <div class="container">
            { html }
        </div>
    )
}

export default Juego;
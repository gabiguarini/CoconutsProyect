import React, {useState} from 'react';

function Jumbo() 
{
    var [estado, setEstado] = useState(0);
    setEstado(Math.floor(Math.random()* 1))
    var min = 1;
    var max = 100;
    var numero = min + Math.random() * (max - min);
    if (estado === 0)
    {
        estado = <h1 class="display-3">Elige un numero MENOR que {numero}</h1>                       
    }
    else estado = <h1 class="display-3">Elige un numero MAYOR que {numero}</h1>

    return(
        <div class="container">
            <div class="jumbotron text-center">
                { estado }
                <h1>asd</h1>
            </div>
        </div>
    )
}

export default Jumbo;
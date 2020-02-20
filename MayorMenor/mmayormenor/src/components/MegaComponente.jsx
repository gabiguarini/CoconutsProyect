import React, { useEffect, useState, useRef } from 'react';

function MegaComponente() 
{
    var [estado, setEstado] = useState(Math.floor(Math.random()* 2)+1);
    var [seleccion, setSeleccion] = useState(0);
    
    setTimeout(mod(0), 2000)

    var html;
    var rachaW = useRef(0);
    var rachaL = useRef(0);
    const min = 1;
    const max = 100;
    var numeroJumbo = Math.floor(min + Math.random() * (max - min));
    var numero1 = Math.floor(min + Math.random() * (max - min));;
    var numero2 = Math.floor(min + Math.random() * (max - min));
    var numero3 = Math.floor(min + Math.random() * (max - min));

    function mod(valor){
        if(valor === 0)
        {
            rachaW.current = rachaW.current - 1 ;
        }else setSeleccion(valor);
    };
    useEffect(() => {
        switch (seleccion) {
            case 1:                
                if (estado === 1)
                {
                    if( numero1 > numeroJumbo)
                    {
                        rachaW.current = rachaW.current + 1;
                    }else rachaL.current = rachaL.current + 1;
                }
                else if (estado === 2)
                {
                    if( numero1 < numeroJumbo)
                    {
                        rachaW.current = rachaW.current + 1;
                    }else rachaL.current = rachaL.current + 1;
                }
                setSeleccion(5);
                break;
            case 2:                
                if (estado === 1)
                {
                    if( numero1 > numeroJumbo)
                    {
                        rachaW.current = rachaW.current + 1;
                    }else rachaL.current = rachaL.current + 1;
                }
                else if (estado === 2)
                {
                    if( numero1 < numeroJumbo)
                    {
                        rachaW.current = rachaW.current + 1;
                    }else rachaL.current = rachaL.current + 1;
                }
                setSeleccion(5);
                break;
            case 3:                
                if (estado === 1)
                {
                    if( numero1 > numeroJumbo)
                    {
                        rachaW.current = rachaW.current + 1;
                    }else rachaL.current = rachaL.current + 1;
                }
                else if (estado === 2)
                {
                    if( numero1 < numeroJumbo)
                    {
                        rachaW.current = rachaW.current + 1;
                    }else rachaL.current = rachaL.current + 1;
                }
                setSeleccion(5);
                break;
        
            default:
                break;
        }
      });
      switch (estado) {
        case 1:
            html = <div>
            <h1 >Elige un numero MAYOR que: </h1>
            <br></br>
            <h1 class="display-3">{numeroJumbo}</h1>
            </div>;
            break;
        case 2:
            html = <div>
            <h1 >Elige un numero MENOR que: </h1>
            <br></br>
            <h1 class="display-3">{numeroJumbo}</h1>
            </div>;
            break;           
    
        default:
            break;
    };

    return(
        <div class="container-fluid">
            <div class="container">
                <div class="jumbotron text-center bg-warning">
                    { html }
                </div>
            </div>
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
            <br></br>
            <div class="container">
                <div class="jumbotron text-center bg-white">
                    <div class="row">
                        <div class="col-sm">
                            <big><span class="badge badge-pill badge-success">{ rachaW.current }</span></big>
                        </div>
                        <br></br>
                        <div class="col-sm">
                            <big><span class="badge badge-pill badge-danger">{ rachaL.current.valueOf() }</span></big>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default MegaComponente;
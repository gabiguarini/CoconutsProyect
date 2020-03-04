import React from 'react';
import Tarea from './Tarea';

const ListaDeTareas = (props) => {
    const listaTareas = props.tareas.map((tarea, i) =>{
        return <Tarea 
            textoTarea={tarea} 
            key={i} 
            id={i}
            borrarTarea={props.borrarTarea} 
            />
    })
    return(
        <div>
            { listaTareas }
        </div>
    )
}

export default ListaDeTareas;
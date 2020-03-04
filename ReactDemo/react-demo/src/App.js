import React from 'react';
import './App.css';
import Cabecera from './cabecera/Cabecera';
import ListaDeTareas from './listaDeTareas/ListaDeTareas';
import Tarea from './listaDeTareas/Tarea';
import Formulario from './formulario/Formulario';

class App extends React.Component {
  state = {
    tareas: [
      "Rascarme la espalda",
      "Sacar a cental ballester campeon de la libertadores"
    ]
  };

  handleBorrarTarea = (index) =>{

    const nuevasTareas = this.state.tareas;
    nuevasTareas.splice(index, 1);


    this.setState({tareas: nuevasTareas});
  };
  handleAgregarTarea = tarea =>{

    this.setState({tareas: this.state.tareas.concat(tarea)});

  };

  render() {
    return(
      <div>
        <Cabecera cantidadTareas={this.state.tareas.length} />
        <ListaDeTareas 
          tareas={this.state.tareas}
          borrarTarea={this.handleBorrarTarea}
        />
        <Formulario
          onFormSubmit={this.handleAgregarTarea}
        />
      </div>
    );
  };
}

export default App;

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

  componentDidMount() {
    setTimeout(()=>{
      this.setState({ tareas: [
        "Mirar sakura",
        "Escuchar Belinda"
      ]})
    }, 2000)
  };

  componentDidUpdate() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(
        (result) => {
          let tareasJson = result.map((x) => x.title);
          this.setState({tareas: tareasJson});
        },
        (error) => {
          this.setState({tareas: ["Error"]});
        }
      )
    // setTimeout(()=>{
    //   this.setState({ tareas: [
    //     "Ver dragon ball",
    //     "Ver pokemon"
    //   ]})
    // }, 2000)
  };

  componentWillUnmount() {
    alert("Hello darkness");
  };

  handleBorrarTarea = (index) =>{
    const nuevasTareas = this.state.tareas;
    nuevasTareas.splice(index, 1);
    this.setState({tareas: nuevasTareas});
  };

  handleAgregarTarea = tarea =>{
    this.setState({tareas: [...this.state.tareas, tarea]});
  };

  render() {
    return(
      <div className="card text-center">
        <div className="card-header">
          <Cabecera cantidadTareas={this.state.tareas.length} />
        </div>
        <div classNAme="card-body">
          <ListaDeTareas 
            tareas={this.state.tareas}
            borrarTarea={this.handleBorrarTarea}
          />
        </div>
        <div className="card-footer text-muted">
          <Formulario
            onFormSubmit={this.handleAgregarTarea}
          />
        </div>
        
      </div>
    );
  };
}

export default App;

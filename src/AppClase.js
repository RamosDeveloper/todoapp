import React from 'react';
import logo from './logo.svg';

import TodoClase from './components/TodoClase'; 

class AppClase extends React.Component {
    constructor(props) {
        super(props); 
        
        this.state = {
            todoList: []
        };  

        this.cambiarElEstadoDelTodo = this.cambiarElEstadoDelTodo.bind(this);
    }

    componentDidMount() {
        // Este evento se ejecuta cuando el component o pagina se carga inicialmente (solo ocurre una vez)
        this.obtenerLaListaDeTodos();
    }

    async obtenerLaListaDeTodos() {
        const todos = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json());
        
        this.setState({
            todoList: [...todos]
        });
    }

    cambiarElEstadoDelTodo(id) {
        this.setState({
            todoList: this.state.todoList.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        });
    }

    render() {
        return (
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <div className="container-fluid">
                      <a className="navbar-brand" href="#">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <span className="App-Name">Todo App [Componente Tipo Clase]</span>
                      </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#">Todos</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Acompletados</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Pendientes</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </header>
                </div>
              </div>
              <div className="row">
                  {
                      this.state.todoList.map(todo => {
                        return (
                            <TodoClase
                                key={todo.id}
                                title={todo.title}
                                completed={todo.completed}
                                id={todo.id}
                                cambiarElEstadoDelTodo={this.cambiarElEstadoDelTodo}
                            />
                        );
                      })
                  }
              </div>
            </div>
          );
    }
}

export default AppClase;
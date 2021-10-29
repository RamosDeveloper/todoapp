import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

import Todo from './components/Todo';

const App = () => {
  
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    mostrarTodos();
  },[]);

  const mostrarTodos = async () => {
    let todos = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json());

    setTodoList([...todos]);
  };

  const cambiarElEstadoDelTodo = (id) => {
    setTodoList([...todoList.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)]);
  };

  const mostrarSoloLosPendientes  = async () => {
    let todos = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json());

    setTodoList([...todos.filter(todo => !todo.completed)]);
  };

  const mostrarSoloLosAcompletados = async () => {
    let todos = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json());

    setTodoList([...todos.filter(todo => todo.completed)]);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
              <span className="navbar-brand">
                <img src={logo} className="App-logo" alt="logo" />
                <span className="App-Name">Todo App [Componente Tipo Funcion]&nbsp;<span className="badge bg-secondary">{todoList.length}</span></span>
              </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <span className="nav-link" onClick={()=>{mostrarTodos()}}>Todos</span>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link" onClick={()=> {mostrarSoloLosAcompletados()}}>Acompletados</span>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link" onClick={()=> {mostrarSoloLosPendientes()}}>Pendientes</span>
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
            todoList.map(todo => {
              return (
                  <Todo
                      key={todo.id}
                      title={todo.title}
                      completed={todo.completed}
                      id={todo.id}
                      cambiarElEstadoDelTodo={cambiarElEstadoDelTodo}
                  />
              );
            })
        }
      </div>      
    </div>
  );
}

export default App;
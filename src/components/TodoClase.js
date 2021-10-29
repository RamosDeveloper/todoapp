import React from 'react';

class TodoClase extends React.Component {
    constructor(props) {
        super(props);       
    }

    render() {
        return (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 border text-center py-3">
                <h4 className="text-center">{this.props.title}</h4>
                 <span onClick={()=> {this.props.cambiarElEstadoDelTodo(this.props.id)}} className={this.props.completed ? "badge bg-success" : "badge bg-danger"}>
                     {this.props.completed ? "Acompletado" : "Pendiente"}
                 </span>
            </div> 
         );        
    }
}

export default TodoClase;
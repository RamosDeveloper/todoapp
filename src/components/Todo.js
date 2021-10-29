const Todo = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 text-center">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <span onClick={()=> {props.cambiarElEstadoDelTodo(props.id)}} className={props.completed ? "badge bg-success" : "badge bg-danger"}>
                        {props.completed ? "Acompletado" : "Pendiente"}
                    </span>
                </div>
            </div>   
        </div> 
     ); 
}

export default Todo;
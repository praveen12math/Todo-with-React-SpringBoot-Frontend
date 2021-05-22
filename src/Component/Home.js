import React,{useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import { createTodo } from '../auth';
import {API} from "../backend"

const Home = () => {

  const {data} = useParams()
    const [todo, setTodo] = useState([]);
    const [addTodo, setAddTodo] = useState({
      description: "",
      done: false,
      secondId: data
    })
    

    const {secondId, done, description} = addTodo


    const handleChange = name => event => {
      setAddTodo({...addTodo, [name]:event.target.value})
    }

     async function syncData() {
         const api = `${API}/getAllTodo/${data}`;
         const result = await fetch(api);
         const getResult = await result.json();
         console.log(getResult);
         setTodo(getResult)
       }

     useEffect(() => {
         syncData()
     })


     const onSubmit = event => {
       event.preventDefault()
       createTodo({secondId, done, description})
       .then(response => {
         console.log(response);
         syncData()
       })
     }


     function updateTodo(uid){
        fetch(`${API}/updateTodo/${uid}`)
        .then(res => {
          syncData()
          console.log(res);
        })
     }


     function deleteTodo(uid){
       fetch(`${API}/deleteTodo/${uid}`)
       .then(res => {
         syncData()
       })
     }



    return ( 
        <>

        <h1 className="text-center">Todo App</h1>
        <div className="text-center">
        <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#AddTodo"         
        >Add Todo</button>
        </div>
<div className="conatiner">
        <div className="row">
          <div className="col-6">
          <h3 className="text-center mt-4">Not Done</h3>
          {todo.map(data => (
            <div className="row">
            {!data.done?
            <div className="mx-auto mt-3">
            <div className="card border-secondary text-dark mb-3"
            style={{backgroundColor:"#F7CD2E"}}
            >
  <div className="card-body">
 {data.description}
    
    <i className="fs-2 text-danger float-end bi bi-x" 
      onClick={() => deleteTodo(data.id)}
      style={{cursor:"pointer"}}
    />
     <i className="fs-2 text-success float-end bi bi-check" 
       onClick={() => updateTodo(data.id)}
    style={{cursor:"pointer"}}
     />
  </div>
</div>
            </div>
            : ""}
            </div>
        ))}

        </div>


        <div className="col-6">
        <h3 className="text-center mt-4">Done</h3>

        {todo.map(data => (
            <div className="row">
            {data.done?
            <div className="mx-auto mt-3">
            <div className="text-decoration-line-through card border-secondary text-light mb-3"
            style={{backgroundColor:"#22CB5C"}}
            >
  <div className="card-body">
 {data.description}
    
    <i className="fs-2 text-danger float-end bi bi-x" 
      onClick={() => deleteTodo(data.id)}
      style={{cursor:"pointer"}}
    />
  </div>
</div>
            </div>
            : ""}
            </div>
        ))}
        </div>
        </div>
        </div>



<div class="modal fade" id="AddTodo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Todo</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
        <input type="text" className="form-control"
          value={description}
          onChange={handleChange("description")}
        />

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
        <button type="button" class="btn btn-primary"
        onClick={onSubmit}
        >Add</button>
      </div>
    </div>
  </div>
</div>


        </>
     );
}
 
export default Home;
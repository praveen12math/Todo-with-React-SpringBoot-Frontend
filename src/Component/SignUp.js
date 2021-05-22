import React,{useState} from 'react';
import {Link} from "react-router-dom"
import { signup } from '../auth';

const SignUp = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    logData: ""
  })

  const {name, email, phone, password, logData} = values

  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value})
  }

  const onSubmit = event => {
    event.preventDefault()
    signup({name, email, phone, password})
    .then(data => {
      setValues({...values, logData: data})
    })
    .catch(err => {
      console.log(err);
    })
  }


  
    return ( 
        <>

        <h1 className="text-center"><b>Todo App</b></h1>
        
        <h3 className="text-center mt-4"><b>Register</b></h3>
<div className="container">

        <form className="mx-auto col-lg-7 col-xm-10">

        <label for="" className="form-label">Name</label>
    <input type="text" className="form-control"
    onChange={handleChange("name")}
    value={name}
     />

    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
      onChange={handleChange("email")}
      value={email}
    />

    <label for="exampleInputEmail1" className="form-label">Phone</label>
    <input type="text" className="form-control"
    onChange={handleChange("phone")}
    value={phone}
     />

    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" 
      onChange={handleChange("password")}
      value={password}
    />
<span className="text-danger">{logData.error}</span>
    <span className="text-success">{logData.message}</span>
    <br/>
    

    <Link to="/" style={{textDecoration:"none"}}>Have account? Login</Link>


  <span type="submit" className="btn btn-primary float-end"
  onClick={onSubmit}
  >Register</span>

</form>
</div>
        </>
     );
}
 
export default SignUp;
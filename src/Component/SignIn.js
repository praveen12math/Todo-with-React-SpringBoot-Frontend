import React,{useState} from 'react';
import {Link, Redirect} from "react-router-dom"
import { signin } from '../auth';

const SignIn = () => {

  const [values, setValues] = useState({
    email: "",
    password: "",
    logData: ""
  })

  const {email, password, logData} = values

  const handleChange = name => event => {
    setValues({...values, [name]:event.target.value})
  }

  const onSubmit = event => {
    event.preventDefault()
    signin({email, password})
    .then(response => {
        setValues({...values, logData:response})
    })
    .catch(err => {
      console.log(err);
    })
  }

    return ( 
        <>

        {logData.id ? <Redirect to={"/home/"+logData.id} /> : ""}

        <h1 className="text-center"><b>Todo App</b></h1>
        
        <h3 className="text-center mt-4"><b>Login</b></h3>
<div className="container">
        <form className="mx-auto col-lg-7 col-xm-10">


    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    value={email}
      onChange={handleChange("email")}
    />


    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" 
      value={password}
      onChange={handleChange("password")}
    />

<span className="text-danger">{logData.error}</span>
    <span className="text-success">{logData.message}</span>

    <br/>

    <Link to="/signup" style={{textDecoration:"none"}}>Don't have account? Register</Link>

  <span type="submit" className="btn btn-primary float-end"
  onClick={onSubmit}
  >Login</span>

</form>
</div>
        </>
     );
}
 
export default SignIn;
import React, { useState } from "react"
import Base from "../core/Base"
import "../styles.css";
import {Link} from "react-router-dom"
import { signup } from "../auth/helper";

const Signup = () =>{

  const [values , setValues]= useState({
    name:"",
    email:"",
    password:"",
    error:"",
    success: false

  });

  const { name , email, password , error , success}  = values;

  const handleChange = name => event =>{
    setValues({...values, error:false , [name]:event.target.value });
  };

  
//TODO: 
const onSubmit = event => {
    event.preventDefault();
    setValues({...values , error:false})
    signup({name , email , password})
    .then( data =>{
      console.log(data) 
    if(data.errors){
    setValues({...values , error:data.errors , success:false})
    }else{
    setValues({
      ...values,
      name:"",
      email:"",
      password:"",
      error:"",
      success:true

    });
    }
    })
    .catch( console.log("Error in SignUp"));  
       

}



 const SignUpForm =() =>{
     return(
      
       
         <div className="row">
           <div className ="col-md-6 offset-sm-3 text-left">
             <form>

                 <div className="form-group">
                    <label className="text-dark pStyle">Name</label>
                    <input onChange={handleChange("name")} className="form-control" value={name} type="text"/>
                  </div>

                  <div className="form-group">
                    <label className="text-dark pStyle">Email</label>
                    <input  className="form-control" onChange={handleChange("email")} value={email}  type="email"/>
                  </div>

                  <div className="form-group">
                    <label className="text-dark pStyle">Password</label>
                    <input className="form-control" onChange={handleChange("password")} value={password}  type="password"/>
                  </div>
              <button onClick={onSubmit} className ="btn bg-green btn-block"> Submit </button>
             </form>

           </div>

         </div>
     
        
     )
 };


 const successMessage = ()=>{
      return(
        <div className="row">
        <div className ="col-md-6 offset-sm-3 text-left"> 
      <div className="alert alert-primary" style={{display: success? "" :"none"}}>
      New Account was created successfully!.Please<Link to ="/signin">Login Here </Link>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
      </div>
      </div>
      </div>
      );

      };

 const errorMessage = ()=>{
      return(

        <div className="row">
        <div className ="col-md-6 offset-sm-3 text-left"> 
      <div className="alert alert-danger" style={{display: error? "" :"none"}}>
      {error}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
      </div> 
      </div>
      </div>);

      };

    return(
        <Base title ="SignUp" description=" new user add from here">
          
           {successMessage()} 
           { errorMessage()}
             {SignUpForm ()}
            {/* <p className ="text-white text-center">{JSON.stringify(values)} </p> */}
        </Base>
    )
}

export default Signup;
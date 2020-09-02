import React, { useState } from "react"
import Base from "../core/Base"

import {Link , Redirect} from "react-router-dom"
import { signin , authenticate, isAutheticated} from "../auth/helper"

const Signin = () =>{

 
const [ values , setValues] = useState({
 
      email:"",
      password:"",
      error:"",
      loading:false,
      didRedirect:false

      })

//destructuring
const { email , password , error , loading , didRedirect} = values;
const{ user} = isAutheticated;

const handleChange = name => event =>{
  setValues({...values, error:false , [name]:event.target.value });
};

const onSubmit = event=>{
  event.preventDefault();
  setValues({ ...values , error:false , loading:true});
  signin({email, password})
  
  .then( data =>{
    console.log(data)
    

    if(data.errors){
      
      setValues({ ...values , error:data.errors , loading:false});
    }else{
      authenticate(data ,()=>{
        setValues({
          ...values,
          didRedirect:true
        });

      });
    }
  })
  .catch(console.log("signin  process failed"));

};

const performRedirect = ()=>{

  if(didRedirect){
    if(user && user.role === 1){
      return <Redirect to="/admin/dashboard"/>
    }else{
     
       return <Redirect to="/user/dashboard"/>
    }
  }
 if(isAutheticated()){
   return <Redirect to ="/"/> 

 }

};

const loadingMessage = ()=>{
    return(
   loading && (
    <div className="alert alert-info">
      <h2>loading...</h2>    
    </div>
   )

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


    const SignInForm =() =>{
        return(
            <div className="row">
              <div className ="col-md-6 offset-sm-3 text-left">
                <form>
                    <div className="form-group">
                       <label className="text-dark pStyle">Email</label>
                       <input  className="form-control" onChange={handleChange("email")} value={email} type="email"/>
                     </div>
   
                     <div className="form-group">
                       <label className="text-dark pStyle">Password</label>
                       <input className="form-control" onChange={handleChange("password")} value={password} type="password"/>
                     </div>
                 <button  onClick={onSubmit} className ="btn bg-green btn-block" > Submit </button>
                </form>
   
              </div>
   
            </div>
        )
    };    

    return(
        <Base title ="SignIn" description="signIn here">
           {loadingMessage()}
           {errorMessage()} 

           {SignInForm ()}
           {performRedirect()}
         
          
        </Base>
    )
}

export default Signin;
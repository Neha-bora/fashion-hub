import React from "react"
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper/index";
import { Link } from "react-router-dom";
import Cart from "../core/Cart";



const customStyle = {
  color: ""
};

const day = new Date();
const currenttime = day.getHours();

let greeting;
if (currenttime < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (currenttime < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good night";
  customStyle.color = "blue";
}




const UserDashBoard = () => {
  const {user:{name , email , role} } = isAutheticated();

 const userLeftSide= () =>{
   return (
       <div className="card ">
       <h4 className= "card-header bg-blue  text-white">Customer Navigation </h4>
        <ul className="list-group">
        <li className="list-group-item">
        <Link  to="/cart"className="nav-link text-success">Add to cart</Link> 
        </li>

        <li className="list-group-item">
        <Link  to="/"className="nav-link text-success">Shop now</Link> 
        </li>
        </ul>
        </div>
   )
 }


  const userRightSide = () =>{
    return(
      <div className="card mb-4">
      <h4 className="card-header text-info">Customer info </h4>
     
      <ul className="list-group"> 
  
      <li className="list-group-item">
      <h5 className="text-dark"> <span className=" badge badge-success mr-2">Name: </span>{name} </h5> 
      </li>
  
      <li className="list-group-item">
      <h5 className="text-dark">  <span className=" badge badge-success mr-2">Email: </span> {email}</h5>
      </li>
  
      <li className="list-group-item">
      <span className="badge badge-danger">Customer Area</span>
      </li>
  
      </ul>
  
      </div>
    )
  
  }
  



  return(
      
      <Base title="Fashion Hub"
      description="explore fashion world with us">

      <h1 className= " text-center heading"  style={customStyle}> hi!  {greeting} {name}</h1>
     


      <div className="row ">
      <div className="col-sm-9"> 
     {userRightSide()}
     </div>
           

     <div className="col-sm-3"> 
     {userLeftSide()}
     </div>

     

     </div>

      
      {/* <img src="/assets/img/girl-1990347_1280.jpg" width="1300px" height="500px" /> */}

      </Base>
  )

};
export default UserDashBoard ;
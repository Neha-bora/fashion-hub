import React from "react"
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper/index";
import { Link } from "react-router-dom";


const AdminDashBoard = () => {

const {user:{name , email , role} } = isAutheticated();

const adminLeftSide = () =>{
 return(
    <div className="card ">
    <h4 className= "card-header bg-blue  text-white">Admin Navigation </h4>
        <ul className="list-group">
        <li className="list-group-item">
        <Link  to="/admin/create/category"className="nav-link text-success">Create Categories</Link> 
        </li>

        <li className="list-group-item">
        <Link  to="/admin/categories"className="nav-link text-success">Manage Categories</Link> 
        </li>

        <li className="list-group-item">
        <Link  to="/admin/create/product"className="nav-link text-success">Create product</Link> 
        </li>

        <li className="list-group-item">
        <Link  to="/admin/products"className="nav-link text-success">Manage products</Link> 
        </li>

        <li className="list-group-item">
        <Link  to="/admin/orders"className="nav-link text-success">Manage Orders</Link> 
        </li>

        
        </ul>
    </div>
 )
}

const adminRightSide = () =>{
  return(
    <div className="card mb-4">
    <h4 className="card-header"> Admin info </h4>
    <ul className="list-group"> 

    <li className="list-group-item">
    <span className=" badge badge-success mr-2">Name: </span>{name}
    </li>

    <li className="list-group-item">
    <span className=" badge badge-success mr-2">Email: </span>{email} 
    </li>

    <li className="list-group-item">
    <span className="badge badge-danger">Admin Area</span>
    </li>

    </ul>

    </div>
  )

}
  return(
      
      <Base 
      title= "Welcome Admin area"
       description = "Manage all your product here"
       className="container  p-4">
     
     <div className="row ">
     <div className="col-sm-9"> 
     {adminRightSide()}
     </div>
     <div className="col-sm-3"> 
     {adminLeftSide()}
     </div>

     

     </div>
    
     


      </Base>
  )

};
export default AdminDashBoard ;
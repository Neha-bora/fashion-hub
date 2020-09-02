import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper";
import { Link } from "react-router-dom";
 import{ updateCategory , getCategories ,getCategory}  from "./helper/adminapicall"


const UpdateCategory  =({match})=>{

const { user , token} = isAutheticated();
const[ name , setName] = useState("");
const[ error , setError] = useState(false);
const[ success , setSuccess] = useState(false);


const preload = categoryId =>{
    getCategory(categoryId).then(data =>{
        console.log("cate:", data)
        if(data.error){
            
            setName({ ...name ,error:data.error})
        }else{
            setName({
                ...name,
                name:data.name
            });
            
        }
    })
};

useEffect( () =>{
    preload(match.params.categoryId);
} )

const handleChange = event =>{
    setError("");
   
    setName(event.target.value);

}

const onSubmit = event=>{
    event.preventDefault();
    setError("");
    setSuccess(false);
    //backend request faired
    updateCategory( match.params.categoryId, user._id, token , {name})
    .then(data => {
        
        if(data.error){
            console.log(data)
            setError(true)

        }else{
            setError("");
            setSuccess(true);
            setName("");
        }
    })

}

const successMessage = () =>{
 if(success){
     return(
         <h4 className="text-success"> Update category successfully </h4>
     )
 }
}
const warningMessage = () =>{
    if(error ){
        return(
            <h4 className="text-success"> Failed to update Category </h4>
        )
    }
}

const MyCategoryForm = ()=>{
    return(

        <form>
        <div className="form-group">
        <p className="lead">Enter the category</p>
        <input type="text"
        className="form-control my-3"
        onChange={handleChange}
        value={name}
        autoFocus
        required
        placeholder="For Ex-summer"

        />
        <button onClick={onSubmit} className="btn btn-outline-success">Update Comfirm</button>
        </div>
    </form>
    )  
}
const goBack = ()=>{
    return(
        <div className="mt-5">
        <Link className="btn btn-sm btn-info mb-3" to="/admin/dashboard">Admin Home </Link>

        </div>
    )
}


    return(
        <Base title="Update a category here"
        description="update your category for t-shirt"   
        className="container bg-info p-4">

       <div className="row bg-white rounded">
       <div className="col-md-8 offset-md-4" >
       {successMessage()}
       {warningMessage()}
       {MyCategoryForm ()}
       {goBack()}

       </div>
           
       </div>

        </Base>
    )
}
export default UpdateCategory ;
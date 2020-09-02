import React, { useState , useEffect } from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { getCategories  , deleteCategory} from "./helper/adminapicall";


const ManageCategories = () =>{
    const [Categories , setCategories] = useState([]);
    const { user , token}  = isAutheticated();

    const preload = () =>{
        getCategories().then( data =>{
            if(data.error ){
                console.log(data.error);
            }else{
                setCategories(data);
            }
        });
    };

    useEffect( () =>{
    preload();
    } , [])

     const deleteThisCategory = categoryId =>{
        return(
            deleteCategory(categoryId , user._id , token) .then(data =>{
                if(data.error ){
                    console.log(data.error);
                }else{
                    preload();
                }

            })

        )};


    return(
        <Base title="Manage Categories here" description="Hey you can manage categories for t-shit">
          
          <h2 className="mb-4">All Categories:</h2>
        <Link className="btn btn-info" to={`/admin/dashboard`}>
          <span className="">Admin Home</span>
        </Link>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center text-dark my-3">Total  Categories</h2>
  
            {Categories.map( (category , index) =>(

                <div key={index} className="row text-center mb-2 ">
              <div className="col-4">
                <h3 className="text-dark text-left">{category.name}</h3>
              </div>
              <div className="col-4">
                <Link
                  className="btn btn-success"
                  to={`/admin/category/update/${category._id}`}
                >
                  <span className="">Update</span>
                </Link>
              </div>
              <div className="col-4">
                <button 
                  onClick={ () => {deleteThisCategory(category._id)}} 
                  className="btn btn-danger">
                  Delete
                </button>
                
              </div>
            </div>



            ))}


          </div>
        </div>
    


        </Base>
    )
}
export default ManageCategories;
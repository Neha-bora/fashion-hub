
import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/CartHelper";
    
     


     //conditional rendering
    const Card = ({
        product ,
        addtocart = true ,
        removeFromCart=false ,
        setReload= f => f,
        // setReload= function(f){return f},
        reload = undefined
      }) => {
      const [ redirect , setRedirect] = useState(false);
      const [ count , setCount] = useState(product.count);

      const cardTitle  = product ?product.name  : "A photo from pixels"
      const cardDescription = product ?product.description : "Default"
      const cardPrice  = product ?product.price  : "Default"

      const addToCart = () =>{
        addItemToCart(product , () => setRedirect(true));
      }

      const getARedirect = (redirect) =>{
        if(redirect){
          return <Redirect to ="/cart" />
        }
      } 
      

      
        const showAddToCart = (addtocart)=>{
            return(
                addtocart && (
                    <button
                    onClick={addToCart}
                    className="btn btn-block btn-outline-success  mt-2 mb-2"
                  >
                    Add to Cart
                  </button>
                )
            );
        };
        const showRemoveFromCart = (removeFromCart) =>{
            return(
                removeFromCart && (
                    <button
                    onClick={() => {
                       removeItemFromCart(product._id);
                       setReload(!reload)
                       }}
                    className="btn btn-block btn-outline-danger mt-2 mb-2"
                  >
                    Remove from cart
                  </button>
                )
            )

        }

        return (
          <div className="card  text-dark bg-white card-fixed " >
            {/* <div className="card-header lead font-weight-normal">{cardTitle}</div> */}
            <div className="card-body ">
              {getARedirect(redirect)}
             <ImageHelper product={product}/>
             <div className=" lead font-weight-normal text-center">{cardTitle}</div>

              <p className="lead  font-weight-normal text-wrap">
                {cardDescription}
              </p>
              <p className="btn bg-green  rounded  btn-sm px-4 ">{cardPrice}</p>
              <div className="row">
                <div className="col-12">
                 
                 {showAddToCart(addtocart)}
                </div>
                <div className="col-12">
                 {showRemoveFromCart(removeFromCart)}


                </div>
              </div>
            </div>
          </div>
        );
      }

export default Card;
    
  
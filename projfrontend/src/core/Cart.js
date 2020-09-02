
import React, { useState, useEffect } from "react";
import "../styles.css";
import {API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import { loadCart } from "./helper/CartHelper";
import StripeCheckout from "./StripeCheckout";


const Cart = () =>{
    
   const [ products , setProducts] = useState([]);
   const [reload , setReload] = useState(false);

   useEffect( () =>{
       setProducts(loadCart());

   },[reload]);
   const loadAllProducts = () =>{
       return(
        <div>
           {/* <h5 className="text-info">Add to card</h5> */}
           {products.map(( product , index ) =>(
            <Card 
            key={index}
            product={product}
            addtocart={false}
            removeFromCart={true}
            setReload = {setReload}
            reload={reload}
         
               /> 
           ))}
       </div>
       )   
   };

   const loadCheckout = () =>{
    return(
     <div>
        <h2 className="text-info"> This section for loadCheckout</h2>
    </div>
    )    
}


    return(
        <Base title="Place your order now" description ="Ready to Buy">
           
          
           <div className="row "> 

           <div className="col-sm-4" >
           <StripeCheckout  
          products={products}
          setReload={setReload}
         />
         </div>
          
         
           <div className="col-sm-8 " >{loadAllProducts()}</div>
           

             </div>
          

        </Base>
          
       
    );
}
export default Cart;
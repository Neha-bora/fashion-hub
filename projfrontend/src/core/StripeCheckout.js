import React, {useState , useEffect } from "react";
import { isAutheticated } from "../auth/helper";
import { loadCart, cartEmpty } from "./helper/CartHelper";
import { Link } from "react-router-dom";
import StripeCheckoutButton from "react-stripe-checkout";
import { API } from "../backend";
import { createOrder } from "./helper/orderHelper";




const StripeCheckout = ({ products , setReload = f => f, reload = undefined}) =>{
  const [ data , setData ] = useState( {
      loading :false,
      success:false,
      error:"",
      address:""
  });

  const token = isAutheticated() && isAutheticated().token; 
  const userId = isAutheticated() && isAutheticated().user._id;

  const getFinalAmount = () => {
       let amount = 0;
       products.map( p =>{
           amount = amount + p.price;
       });
     return amount;
  };


  //API call from backend
const makePayment = (token) =>{
    const body ={
        token,
        products
    }
    const headers = {
        "Content-Type" :"application/json"
    }
    return fetch (`${API}/stripepayment` , {
        method:"POST",
        headers,
        body:JSON.stringify(body)
    }).then(
        response =>{
           console.log(response)

           const { status} = response;
           console.log("STATUS" , status)
          
          

        })
    .catch( err => console.log(err))
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const showStripeButton = () =>{
      return isAutheticated()  ? (
          <StripeCheckoutButton
          stripeKey="pk_test_LP61GELvxdOS5XS06Shv9PsS00PH7woloH"
          token={makePayment}
          amount={getFinalAmount()*100}
          name="Buy t-shirts"
          shippingAddress
          billingAddress >
         <button className="btn btn-success"> Pay with Stripe</button>
         </StripeCheckoutButton>
      ) : (
          <Link to ="signin">
          <button className="btn  btn-warning "> SignIn</button>
           
         </Link>
      )
  }

    return(
        <div>
            <h3 className ="text-dark "> Your final bill ₹ {getFinalAmount()} </h3>
            <h6 className ="text-info mt-4"> Pay with card here 👇</h6>
            {showStripeButton()}
        </div>
    );
};

export default StripeCheckout; 
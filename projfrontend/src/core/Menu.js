 import React , {Fragment} from "react";
 import {Link , withRouter} from "react-router-dom";
import { signout , isAutheticated } from "../auth/helper";



const currentTab = (history,path) => {
    if(history.location.pathname === path){
        return{ color: "#2ecc72"};
    }else{
        return{color:"#ffffff"};
    }
};



 const Menu = ({history}) => (
         
<nav class="navbar navbar-expand-lg navbar-dark bg-pink">
	<a class="navbar-brand mb-0 h1 text-white "  href=""> FashionHub</a>

	 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

   <div class="collapse navbar-collapse" id="navbarTogglerDemo03"> 
	<ul class="navbar-nav ml-auto">

        <li className="nav-item ">
        <Link style={currentTab(history ,"/") }
        className="nav-link" to="/">Home </Link>
         </li>


         <li className="nav-item">
         
        <Link style={currentTab(history , "/cart") } 
         className="nav-link" to="/cart"> <i class="fas fa-shopping-cart p-2"></i>Cart </Link>
        </li>


		 
        {isAutheticated() && isAutheticated().user.role === 0  && (
            <li className="nav-item">
        <Link  style={currentTab(history ,"/user/dashboard") }
          className="nav-link" to="/user/dashboard"><i class="fas fa-user-alt p-2"></i> Your Account
         </Link>
        </li>
         
        )}

        
        {isAutheticated() && isAutheticated().user.role === 1 && (
            <li className="nav-item">
        <Link  style={currentTab(history ,"/admin/dashboard") }
          className="nav-link" to="/admin/dashboard">Admin Panel</Link>
        </li>

        )}

        


        {!isAutheticated() && (
        <Fragment>
        <li className="nav-item">
        <Link style={currentTab(history ,"/signup") }
        className="nav-link" to="/signup">SignUp</Link>
        </li>

        <li className="nav-item">
        <Link   style={currentTab(history ,"/signin") } 
        className="nav-link" to="/signin">SignIn </Link>
        </li>

        </Fragment>
        )}
        
        
          
        { isAutheticated() &&(
            <li className="nav-item">
           <span className="nav-link text-warning" 
                    onClick = { () =>{

                    signout ( ()=>{
                    history.push("/")
                    })

           }} >
               Signout
           </span>
        </li>
        ) }
        
     




	</ul>
	</div>

</nav>


 )
 export default withRouter(Menu) ;

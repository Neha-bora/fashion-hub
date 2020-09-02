import React, { Children } from "react";
import Menu from "./Menu";

const Base = ({
    title =" my title",
    description =" my description",
    className = "bg-white text-white p-4 ",
    children 

}) =>(
   
        <div>

        <Menu/>

           <div className="container-fluid">

             <div className="jumbotron bg-white text-dark text-center">
             <h2 className="display-4 "> {title} </h2>
             <p className="lead pStyle">{ description}</p>
             </div>

           <div className={className}>{children}</div>

           </div>


    <footer className="footer bg-dark mt-4">
      <div className="container-fluid bg-pink text-white text-center py-2">
       
      <div className="social-icon ">
      <a href="https://www.linkedin.com/in/neha-bora-782016194/ " ><i class="social-icon fab fa-linkedin-in"></i> </a>
   <a href=" https://github.com/Neha-bora"><i class="fab fa-github "></i></a>
<a href="https://twitter.com/NehaBora01" ><i class="social-icon fab fa-twitter"></i></a> 
<i class="social-icon fab fa-instagram"></i>


<h6><i class="far fa-copyright"></i>Copyright 2020 neha_FashionHub</h6>
    </div>

      </div>
      
      
      <div className="container">
        <span className="text-muted">
          An Amazing  <span className="text-white">Fashion Hub</span>  Shop form here
        </span>
      </div>
    </footer>

        </div>
    );


export default Base;
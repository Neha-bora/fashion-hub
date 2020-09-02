import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  


export class BootstrapCarousel extends Component {  
        render() {  
  
                return (  
                       
                         <Carousel >  
                         <Carousel.Item  >  
                         <img  style={{'height':"350px"}}  
                         className="d-block w-100"  
                        src={'assets/img/shoping.jpg'}  />  
                           
                                 </Carousel.Item>  
                                 <Carousel.Item >  
                                 <img style={{'height':"350px"}}  
                                   className="d-block w-100"  
                                    src={'assets/img/girl.jpg'}    />  
                                       
                                         </Carousel.Item>  
                                       <Carousel.Item >  
                                       <img style={{'height':"350px"}}  
                                        className="d-block w-100"  
                                         src={'assets/img/blur.jpg'}   />  
                                       
                                         </Carousel.Item>  
                                        </Carousel>  
                            
                )  
        }  
}  
  
export default BootstrapCarousel  




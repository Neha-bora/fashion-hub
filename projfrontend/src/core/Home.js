import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

import watercolor from "./../picture/woman-902210_1920.jpg";


import BootstrapCarousel from "./carsual";
import BackgroundVedio from "./BackgroundVedio/backgroundVedio";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title="Fashion Hub" description="Shop from here ">

    <BackgroundVedio/>
    
    <div className="row">
     <div className="col-sm-6 ">
       <h1 className="pCaption ">Fashion is the armor to survive the reality of everyday lifeShope from here</h1>
     </div> 
     
     <div className="col-sm-6">
     <img src={watercolor} alt="close image" width="320px" height="300px" />
     </div> 

    </div>
     <BootstrapCarousel />
      
      <div className="row mt-4  ">
         <h3 className="text-dark font-weight-bold ">Products</h3>
        <div className="row mt-4 ">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-sm-4 mb-4">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
}

import { API } from "../../backend";

//category calls

//create category
export const createCategory =( userId , token , category) =>{
    return fetch(`${API}/category/create/${userId}` , {
        method:"POST",
        headers:{
            Accept:"Application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(category)

    })
    .then(response =>{
        return response.json()
    })
    .catch(err =>console.log(err))
};

//delete Category

export const deleteCategory = ( categoryId, userId , token) => {
 return fetch (`${API}/category/${categoryId}/${userId}`,{
     method:"DELETE",
     headers:{
         Accept:"Application/json",
         Authorization:`Bearer ${token}`
     }

 })
 .then( response =>{
     return response.json
 })
 .catch( err => console.log( err))
}




//TODO: update category

export const updateCategory =( userId , categoryId, token , category) =>{
    return fetch(`${API}/category/${categoryId}/${userId}` , {
        method:"PUT",
        headers:{
            Accept:"Application/json",
            Authorization:`Bearer ${token}`
        },
        body:category

    })
    .then(response =>{
        return response.json()
    })
    .catch(err =>console.log(err))
};




//get all categories
export const getCategories = () => {
    return fetch(`${API}/categories` , {
        method:"GET"
    })
    
    .then( response =>{
         return response.json();
        })
    .catch( err =>console.log(err));
};

//get a single category
export const getCategory= categoryId  => {
    return fetch( `${API}/category/${categoryId }` , {
         method:"GET"
    })
   
    .then(response =>{
        return response.json();
      })
      .catch(err => console.log(err));

};




//products call

//create products
export const createaProduct = ( userId , token , product) =>{
    return fetch(`${API}/product/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"Application/json",
            Authorization:`Bearer ${token}`

        },
        body:product
    }).then( response=>{
         return response.json()
        })
    .catch( err => console.log(err))

}

//getting all products
export const getProducts = () =>{
    return fetch( `${API}/products` , {
        method:"GET"
        })
    .then(response =>{
        return response.json();
      })
      .catch(err => console.log(err));
}

//delete product

export const deleteProduct = (productId , userId , token ) =>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:"Application/json",
            Authorization:`Bearer ${token}`

        }
       
    })
    .then( response=>{
         return response.json()
        })
    .catch( err => console.log(err))

}

//get  a single product
export const getProduct = productId  => {
    return fetch( `${API}/product/${productId}` , {
         method:"GET"
    })
    .then(response =>{
        return response.json();
      })
      .catch(err => console.log(err));

};
 

//update product
export const updateProduct = (productId, userId,token , product) =>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"Application/json",
            Authorization:`Bearer ${token}`

        },
        body:product
    }).then( response=>{
         return response.json()
        })
    .catch( err => console.log(err));

};



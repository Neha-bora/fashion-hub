const Product = require("../models/product");
const formidable = require('formidable');
const _ = require("lodash");
const fs = require("fs");

exports.getProductById = (req , res , next, id) => {
 Product.findById(id)
 .populate("category")
 .exec( (err,product) =>{
    if(err){
        return res.status(400).json({
            error:"Product not found in DB"
        });
    };

    req.product = product;
    next();

 });
  
};



//create product
exports.createProduct=(req , res) =>{
  let form = new formidable.IncomingForm();
  form.keepExtensions=true;

  form.parse(req , (err,fields,file ) =>{
      if(err){
          return res.status(400).json({
              error:"Some issue with image"
          });
      }

   
    //destructure the fields
    const {name , description, price ,category,stock} = fields;

    if( !name || !description || !price || !category || !stock){
        return res.status(400).json({
            error:"Please included all fields"
        });
    }

      let product = new Product(fields)

      //handle file here
      if(file.photo){
          if(file.photo.size > 3000000){
              return res.status(400).json({
                  error:"File size is too big!"
              })
          }
        
          product.photo.data = fs.readFileSync(file.photo.path)
          product.photo.contentType = file.photo.type
      }
      

      //save to the DB
      product.save( (err , product)=> {
        //   console.log(product)
          if(err){
               res.status(400).json({
                  error:"Saving tshirt in DB is failed",
                  err
              });
          }

          res.json(product)
      }) ;

  });


};


exports.getProduct = (req , res) =>{
    req.product.photo = undefined
    return res.json(req.product)
};


//middleware
exports.photo = ( req , res , next) =>{
    if( req.product.photo.data){
        res.set("Content-Type" , req.product.photo.contentType)
        return res.send(req.product.photo.data)
    }
    next();
};



//delete Product
exports.deleteProduct = ( req , res) =>{

const product = req.product;
product.remove( ( err , product) =>{
    if( err){
        return res.status(400).json({
            error:"Deletion of product is failed"
        });
    }
    res.json({
        message:"Deletion is successfully"
    });
});

};



//update controller
exports.updateProduct = (req , res)=>{

    let form = new formidable.IncomingForm();
    form.keepExtensions=true;
  
    form.parse(req , (err,fields,file ) =>{
        if(err){
            return res.status(400).json({
                error:"Some issue with image"
            });
        }
  
     
        //updation code
        let product = req.product;
        product = _.extend(product , fields)
  
        //handle file here
        if(file.photo){
            if(file.photo.size > 3000000){
                return res.status(400).json({
                    error:"File size is too big!"
                })
            }
          
            product.photo.data = fs.readFileSync(file.photo.path)
            product.photo.contentType = file.photo.type
        }
        
  
        //save to the DB
        product.save( (err , product)=> {
          //   console.log(product)
            if(err){
                 res.status(400).json({
                    error:"Updation of product is failed",
                    err
                });
            }
  
            res.json(product)
        }) ;
  
    });
  


};

//listing controller
exports.getAllProducts =(req , res) =>{
const limit = req.query.limit ? parseInt(req.query.limit ):20
const sortBy = req.query.sort ? req.query.sort:"_id";

   Product.find() 
   .select("-photo")
   .populate("category")
   .sort( [ [sortBy,"asc"] ])
   .limit(limit )
   .exec((err , products) =>{
       if(err){
          return res.status(400).json({
              error:"Product is not found"
          })
       }
       res.json(products)
   })
};

//update Inventory
exports.updateStock = ( req , res , next) =>{

    const myOperations = req.body.order.products.map( prod =>{
        return{
            updateOne:{
                filter:{_id:prod._id},
                update:{$inc: { stock:   -prod.count , sold : +prod.count } }
            }
        }
    })


    Product.bulkWrite(myOperations , {} , (err , products) =>{
        if(err){
            return res.status(400).json({
                error:"Bulk operation Failed"
            });
        }
    
        res.json(products);
        next();
    });

    
};

exports.getAllUniqueCategories = ( req , res) =>{
    Product.distinct( "category" , {} , (err , category) =>{
        if(err){
            return res.status(400).json({
                error:"No Category Found"
            });
        }
        res.json(category);
    });
};
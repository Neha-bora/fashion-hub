const User = require("../models/user");
const Order = require("../models/order");
const mongoose = require('mongoose')

exports.getUserById = (req , res   ,   next , id  ) => {
   User.findById(id).exec((err , user) => {
        // console.log(user)
      
       if(err || !user){
           return res.status(400).json({

             error:"No user was found in DB"
           }); 
        }
        req.profile = user;
        next();
    });
};

exports.getUser = ( req , res) => {
   //passwords or sensitive user info is hide 
    req.profile.salt=undefined;
    req.profile.encry_password=undefined;
    req.profile.updatedAt=undefined;
    return res.json( req.profile)
};

exports.updateUser= ( req , res) => {
    User.findByIdAndUpdate(
        { _id :req.profile._id} ,
        { $set: req.body},
        { new:true , useFindAndModify: false},
        (err , user) => {

            if(err){
                return res.status(400).json({
                    error:" you are not authorized to update this user"
                });
            }
            user.salt=undefined;
            user.encry_password=undefined;
            res.json(user);
        }
    );
};


exports.userPurchaseList = (req , res) =>{
    Order.find( { user : req.profile._id})
    .populate("user : req.profile._id")
    .exec( ( err , order) => {
        if( err) {
            return res.status(400).json({
                error: " Not order in account"
            });
        }
        return res.json(order);
    });
};

//middleWare 
exports.pushOrderInPurchaseList = (req , res , next)  =>{
   let purchases = []
   req.body.order.products.forEach( product => {
       
    purchases.push({
        _id: product._id,
        name: product.name,
        description:product.description,
        category:product.category,
        quantitly:product.quantitly,
        amount: req.body.order.amount,
        transation_id: req.body.order.transation_id
    })
   });
 
   //store  this in DB
   User.findOneAndUpdate( 
       { _id : req.profile._id},
       { $push: {purchases:purchases}},
       {new:true},
       (err , purchases) =>{
         
               if(err){
                   return res.status(400).json({
                       error:"unable to save purchase list in DB "
                   });
               }
           
               next();
       }
       
    )

   
};



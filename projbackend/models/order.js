const mongoose = require("mongoose");
const {ObjectId } = mongoose.Schema;

const productCardSchema = new mongoose.Schema({

    product:{
        type:ObjectId,
        ref:"product"  
    },
    name: String,
    count: Number,
    price: Number
});

const ProductCard = mongoose.model("ProductCard" ,productCardSchema );




const orderSchema = new mongoose.Schema({
 
    products : [productCardSchema],
    transaction_id : {},
    amount : {type:Number},
    address : String,
    status:{
       type:String,
       default:"Received",
       enum: [ "Cancelled" , "Delivered" , " Shipped" , "Processing" ,"Received"]
    },
    updated:Date,
    user:{
        type:ObjectId,
        ref:"User"
    }

},{timestamps:true});

const Order = mongoose.model("Order" ,orderSchema );

module.exports = { Order, ProductCard };

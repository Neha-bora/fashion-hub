const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const path = require('path')

//middleware requie
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//Import file from outer
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const stripeRoutes = require("./routes/stripepayment");

//DB connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connect DB");
  });

//Middleware use

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());


app.use(express.static('build'))
//My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", stripeRoutes);


app.get('/*',(req,res) =>{
    res.sendFile(path.join(__dirname,'/build/index.html'))
})
//Port

const port = process.env.PORT || 8000;

//starting a server
app.listen(port, () => {
  console.log("sever is running on port 8000");
});

const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("./route/products");


mongoose.connect(
  "mongodb://127.0.0.1:27017/image",
  {
    useNewUrlParser:true,
    useFindAndModify:false,
    useCreateIndex:true,
    useUnifiedTopology:true
  }
  
).then(console.log("DB connected"))




app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// Routes which should handle requests
app.use("/products", productRoutes);



const port = process.env.PORT || 4002;
app.listen(port,()=>console.log("server is running"))

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');
const n=require("../api/controller/controller");


//const {upload}=require("../middilware/upload")
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
      
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });

  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    
    }
  };

  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });
  
  
  
  router.get("/",n.Retrive) 
  //upload.single('productImage')
       router.post("/",upload.single('productImage'),n.insert)
       //const Product1=require("../db/model/product")

 /* router.post("/", upload.single('productImage'), (req, res, next) => {
    

    const product = new Product1({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        productImage: req.file.path 
      });
      product
        .save()
        .then(result => {
         
         res.send(result)
            
          })
        
        
        //res.send(req.files)
    });*/

    router.post("/img", upload.array('productImage',10), n.mul)

    
    module.exports = router;
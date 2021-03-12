//require("../../middilware/upload")
const product=require("../../db/model/product");
const router = require("../../route/products");
const mongoose=require("mongoose")
exports.Retrive=async (req,res)=>{
    try{

    await product.find()
    .select("name price _id productImage")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs.map(doc => {
          return {
            name: doc.name,
            price: doc.price,
            productImage: doc.productImage,
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:3000/products/" + doc._id
            }
          };
        })
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
}

catch (err)
{

}
}
exports.insert= async(req,res,next)=>{
    try{

        const product = new product({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price,
            productImage: req.file.path 
          });
       await  product
            .save()
            .then(result => {
             
             res.send(result)
                
              })
            
   }
    catch(err)
    {


    }
    
}
exports.mul=(req,res)=>{
    console.log(req.files)
res.send("multiple file uploaded sucessfully")
}

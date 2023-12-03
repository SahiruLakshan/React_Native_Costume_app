const Product = require('../Models/product'); 

module.exports = {
    addProduct: async(req, res) => {
        const newProduct = new Product(req.body);
        if(newProduct.brand==''||newProduct.type==''||newProduct.imageURL==''||newProduct.price==''||newProduct.quantity==0){
            res.status(200).json("All fields required");
        }else{
            try {
                await newProduct.save();
                res.status(200).json("Product added successfully");
            } catch (error) {
                res.status(200).json("Product added failed");
            }
        }
    },

    getProduct: async(req,res)=>{
        try {
            const product = await Product.findById(req.params.id)
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json("Failed to get the product")
        }
    },

    getAllProduct: async(req,res) => {
        try{
          const products = await Product.find().sort({createdAt: -1})
          res.status(200).json(products)
        }catch(error){
          res.status(500).json("failed to get product")
        }
     
    }
}
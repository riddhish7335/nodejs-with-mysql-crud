const Product = require("../model/products");


exports.getAllProducts = (req,res) => {

    Product.getAll( (err,products) => {
        if(err){
            res.status(500).send(err)
        }else{
            resData = {
                status:1,
                message:"Product data",
                data:products
            }
            res.json(resData);
        }
    })

}

exports.createProduct = (req,res) => {

    const inserData = {
        "product_name" : req.body.product_name,
        "product_description" : req.body.product_description,
        "product_price" : req.body.product_price
    }

    Product.create(inserData, (err , results) => {
        if(err){
            let resData = {
                status:0,
                message:err,
                data:null
            }
            res.json(resData);
        }else{
            let resData = {
                status:1,
                message:"Product has been added successfully!",
                data:null
            }
            res.json(resData);
        }
    })

}

exports.updateProduct = (req,res) => {

    let id = req.params.id;
   
    let updateData = {
        "product_name" : req.body.product_name,
        "product_description" : req.body.product_description,
        "product_price" : req.body.product_price
    }
    
    Product.update(updateData,id, async(err,results) => {
        
        if(err){
            res.status(500).send(err);     
        }else{
            let resData = {
                status:1,
                message:"Product has been updated successfully!",
                data:null
            }
            res.json(resData);
        }
    }); 
}     

exports.deleteProduct = (req,res) => {
    let id = req.params.id;

    Product.delete(id, (err,results) => {
        if(err){
            res.status(500).send(err)
        }else{
            let resData = {
                status:1,
                message:"Product has been deleted successfully!",
                data:null
            }
            res.json(resData);
        }
    })
}
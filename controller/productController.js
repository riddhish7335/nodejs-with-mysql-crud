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
    let { product_name, product_description , product_price} = req.body;
    
    if(product_name == ""){

        let resData = {
            status:0,
            message:"product name can not be empty",
            data:null
        }
        return res.json(resData);
    }

    if(product_description == ""){

        let resData = {
            status:0,
            message:"product description can not be empty",
            data:null
        }
        return res.json(resData);
    }

    if(product_price == ""){

        let resData = {
            status:0,
            message:"product price can not be empty",
            data:null
        }
        return res.json(resData);
    }

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

    let { product_name, product_description , product_price} = req.body;
    
    if(product_name == ""){

        let resData = {
            status:0,
            message:"product name can not be empty",
            data:null
        }
        return res.json(resData);
    }

    if(product_description == ""){

        let resData = {
            status:0,
            message:"product description can not be empty",
            data:null
        }
        return res.json(resData);
    }

    if(product_price == ""){

        let resData = {
            status:0,
            message:"product price can not be empty",
            data:null
        }
        return res.json(resData);
    }
   
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
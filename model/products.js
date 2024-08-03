const db = require("../config/db");

const Product = {};

Product.getAll = (callback) => {

    let dbQry = "SELECT * FROM products";
    db.query(dbQry, (err,results) => {

        if(err){
            callback(err,null);
        }else{
            callback(null,results)
        }

    });

}

Product.create = ( productData , callback ) => {

    let inserData = {
        "product_name" : productData.product_name,
        "product_description" : productData.product_description,
        "product_price" : productData.product_price 
    }

    let dbQry = "INSERT INTO products SET ?";
    db.query(dbQry, inserData , (err,results) => {
        if(err){
            callback(err,null)
        }else{
            callback(null,results);
        }
        
    })
}

Product.update = (productData, id, callback) => {
    
    let updateProductData = {
        "product_name" : productData.product_name,
        "product_description" : productData.product_description,
        "product_price" : productData.product_price 
    }
    
    let dbQry = "UPDATE products SET ? WHERE id=?";
   
    db.query(dbQry,[updateProductData,id],(err, results) => {
        if(err){
            return callback(err,null);
        }else{
            return callback(null,results);
        }
    });

}

Product.delete = (id,callback) => {
    let dbQry = "DELETE FROM products WHERE id=?";
    db.query(dbQry,id, (err,results) => {
        if(err){
            return callback(err,null)
        }else{
            return callback(null,results);
        }
    })
}

module.exports = Product;
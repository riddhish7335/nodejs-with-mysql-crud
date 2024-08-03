const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.get("/",productController.getAllProducts);
router.post("/add",productController.createProduct);
router.put("/update/:id",productController.updateProduct);
router.delete("/delete/:id",productController.deleteProduct);
module.exports=router;
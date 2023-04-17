const express = require('express');
const product = require('../models/ProductModel');
const asynchandler = require('express-async-handler');

const router = express.Router();

router.get('/products',
asynchandler (async (req,res)=>{
    const Products = await product.find({});
    res.json(Products);
})
);

router.get('/products/:id',
asynchandler (async (req,res)=>{
const Products = await product.findById(req.params.id);
    if(Products)
    {
        res.json(Products); 
    }else{
        res.json({"Error":"Products Not Found"}); 
    }
    })
);

module.exports = router;
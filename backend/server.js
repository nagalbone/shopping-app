const express = require('express');
const Products = require('./data/products');
const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>WELCOM</h1>");
});

app.get('/products',(req,res)=>{
    res.json(Products);
});

app.get('/products/:id',(req,res)=>{
    const product = Products.find((p)=>p._id === req.params.id);
    res.json(product); 
});

app.listen(8080,()=>{
    console.log("Server runnign on port 8080");
})
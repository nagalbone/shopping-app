const express = require('express');
const Products = require('./data/products');
const dotenv = require('dotenv');
const connectDb = require('./config/config');
dotenv.config();
//connection to database
connectDb();
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

const PORT = 8080;
app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);
})
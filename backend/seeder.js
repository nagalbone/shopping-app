const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/Users');
const User = require('./models/User');
const product = require('./models/ProductModel');
const Order = require('./models/OrderModel');
const product= require('./data/products');
const connectDB = require('./config/config');

dotenv.config();
connectDB();

const importdata = ()=>{
    try{
        
    }catch(err){

    }
};
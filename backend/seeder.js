const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/Users');
const User = require('./models/User');
const Product = require('./models/ProductModel');
const Order = require('./models/OrderModel');
const products= require('./data/products');
const connectDb = require('./config/config');

dotenv.config();
connectDb();

const importdata = async ()=>{
    try{
        await Order.deleteMany()
        await Product.deleteMany();
        await User.deleteMany();
        const createUser = await User.insertMany(users);
        const adminUser = createUser[0]._id;
       
        const sampleData = products.map(product =>{
            return{...product,User:adminUser}
        });
        await Product.insertMany(sampleData);

        console.log("imported");
        process.exit();
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

const dataDestroy = async ()=>{
    try{
        await Order.deleteMany()
        await Product.deleteMany();
        await User.deleteMany();
        console.log("Data Destroyed");
    }catch(err){
        console.log(err);
        process.exit();
    }
    
}

if(process.argv[2] === "-d")
{
    dataDestroy();
}else{
    importdata();
}

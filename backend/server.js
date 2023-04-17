const express = require('express');
const Products = require('./data/products');
const dotenv = require('dotenv');
const connectDb = require('./config/config');
const productsRoutes = require('./routes/productsRoutes');
dotenv.config();
//connection to database
connectDb();
const app = express();



app.get('/',(req,res)=>{
    res.send("<h1>WELCOM</h1>");
});


app.use('/api',productsRoutes);

const PORT = 8080;
app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);
})


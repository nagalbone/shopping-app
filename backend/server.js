const express = require('express');
const Products = require('./data/products');
const dotenv = require('dotenv');
const connectDb = require('./config/config');
const productsRoutes = require('./routes/productsRoutes');
const {errorHandler} = require('./middlewares/errorMiddleware');
dotenv.config();
//connection to database
connectDb();
const app = express();



app.get('/',(req,res)=>{
    res.send("<h1>WELCOM</h1>");
});


app.use('/api',productsRoutes);
app.use(errorHandler);

const PORT = 8080;
app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);
})


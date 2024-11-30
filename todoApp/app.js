const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const taskRoute = require('./routes/task-route')
const authRoute = require('./routes/auth-route')
const productRoute = require('./routes/product-route')
const paymentRoute = require('./routes/payment-route');
const port = process.env.port || 8080;

mongoose.connect("mongodb+srv://ayushd20:adino123@kvhr.9qp3hxx.mongodb.net/",
    (err) => {
        if(err) {
            console.log("Db is not connecting...")
        }else{
            console.log("Db connected")
        }
    })
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())
app.use('/task', taskRoute);
app.use('/auth', authRoute);
app.use('/product',productRoute);
app.use('/payment', paymentRoute)
app.get('/', (req, res) => {
    res.send("My world")
});


app.listen(port, () => {
    console.log("server is connected at port : ", port);
});


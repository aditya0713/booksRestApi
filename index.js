const express = require('express')
const { connect } = require('http2')

const mongoose = require("mongoose");
const { MongoDBNamespace } = require('mongodb')

const app = express()
require('dotenv').config();

const PORT =process.env.PORT || 3000 

 mongoose.connect(
    process.env.MONGO_URL,
{
useNewUrlParser: true
}
).then(() =>
{
console.log("connected to mongodb atlas");
}).catch(error => {
    console.log("Somthing is wrong" , error)
})

app.listen(PORT , () =>{

console.log ("Server started at port", PORT);


})
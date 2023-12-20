// const express = require("express")

// const dotenv = require('dotenv')

// const {MONGOClient, MongoClient} = require("mongodb")
 
// const app = express()

// dotenv.config()

// MongoClient.connect(process.env.MONGO_URI)
// .then(() => {
//   console.log("MongoDb connected sucessfully")
// })
// .catch((error) => {
//   console.log("error",error)
// })
// const PORT = 5055


// app.listen(PORT,() =>{
//   console.log(`server started and running at ${PORT}`)
// })


const express = require("express")
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const employeeRoutes = require('./routes/employeeRoutes')
// const cors = require('cors');
const ejs = require('ejs')

const app = express()
// app.use(cors());

 const PORT = process.env.PORT || 5055

 app.set('view engine','ejs')

dotenv.config()

app.use(bodyParser.json())

//client side rendering
app.get('/mango',(req,res)=> {
  res.json({fruit:"mango"})
})

//Server side rendering
app.get('/grapes',(req,res)=> {
  
  res.render('samplePage')
  
})

mongoose.connect(process.env.MONGO_URI)
.then(() =>{
console.log("MONGODb connected successfully")
})
.catch((error) => {
  console.log (`${error}`)
})

app.use('/employees',employeeRoutes)

 app.listen(PORT,() => {
  console.log(`server started and running at ${PORT}`)
 })



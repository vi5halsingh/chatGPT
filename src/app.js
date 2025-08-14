const express  =  require('express')
const app = express();
const indexRoutes = require("./routes/index.route")
const ejs = require('ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set("view engine", ejs)
 app.use('/', indexRoutes)
 
 

 module.exports = app;
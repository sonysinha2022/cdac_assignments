const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const router=require('./router/routers')
const path=require('path')


app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

app.use(bodyparser.urlencoded({extended:false}))
app.use('/',router)

app.listen(9000,(err)=>{
    if (err) {
        console.log("Error: can't open server")
    }
    console.log("server started at port 9000")
})

module.exports=app


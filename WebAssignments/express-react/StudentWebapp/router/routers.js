const express=require('express')
const connection=require('../db/dbconnect.js')

const myrouter=express.Router()

myrouter.use((req,resp,next)=>{
    connection.query('create table students ( sid int,sname varchar(20),dept varchar(20))',(err)=>{
       if (!err) 
        console.log('table created')
    })
    next();
})

myrouter.get('/index',(req,resp)=>{
    resp.render('form')
})

myrouter.get("/display",(req,resp)=>{
    connection.query('select * from student',(err,data)=>{
        if (err) {
            console.log(err.message)
        }
        else{
            resp.render("display1",{studata:data})
        }
    })
})

myrouter.post("/input",(req,resp)=>{
    connection.query('insert into student values(?,?,?)',[req.body.sid,req.body.sname,req.body.dept],(err)=>{
        if (err) {
            resp.status(500).send(err.message)
        }
        else{
            resp.redirect('/display')
        }
    })
})

module.exports=myrouter
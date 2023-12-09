const mysql=require('mysql')

const connection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root123',
    database:'wpt',
    port:3306
})

connection.connect((err)=>{
    if (err) {
        console.log('error in connection')
    }
})

module.exports=connection 
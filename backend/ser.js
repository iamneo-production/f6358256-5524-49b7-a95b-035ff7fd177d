const express=require('express')
const app=express();
const port=8080;

app.use(express.static('public'))
app.listen(port,()=>console.log('listening to port ${port)!'));

const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'db',
    email: 'abd1718@gmail.com',
    password : 'abd1718',
    username : 'abd',
    mobilenum :'9404048954',
    active :1,
    role:'admin',
    port:3306
});

connection.connect(function(error){
    if(error)
    {
        throw error;
    }
    else
    {
        console.log('MySQL Database is connected Successfully');
    }
});

module.exports = connection;
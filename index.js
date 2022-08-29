const express=require("express");
const app=express();
const db=require('mssql');

var config = {
    user: 'hari',
    password: 'Giri@123',
    server: 'hari1515151.database.windows.net', 
    database: 'johnreeses' 
};


db.connect(config, function (err) {
if (err){
    console.log(err);
} 

});
app.use(express.json());

app.get("/users",(req,res)=>{
    db.query("select * from users;",(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});


app.post('/users',(req,res) => {
    customer = JSON.parse(JSON.stringify(req.body));
    console.log(customer); 
    db.query(`INSERT INTO users (name,phonenumber) VALUES ('${customer.name}','${customer.phonenumber}')`,(err, result) => {
  if (err) {
    res.send(result);
  } else {
    res.send(result);
      }})});


app.put('/users',(req,res) => {
    customer = JSON.parse(JSON.stringify(req.body));
    console.log(customer); 
    db.query(`update users set name=('${customer.name}'),phonenumber=('${customer.phonenumber}') where id=('${customer.id}')`,(err, result) => {
  if (err) {
    res.send(result);
  } else {
    res.send(result);
      };
});


})
app.delete('/users',(req,res) => {
    customer = JSON.parse(JSON.stringify(req.body));
    console.log(customer); 
    db.query(`delete users where id=('${customer.id}');`,(err, result) => {
  if (err) {
    res.send(result);
  } else {
    res.send(result);
      };
});

})



app.listen("3001",()=>{
    console.log("server is running ")
});
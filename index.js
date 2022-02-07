const express = require('express');
const app = express();


app.get('/' , function(req , res){
    console.log("Accessed the homepage");
    res.send('Helcome Home Page')
    })

app.get('/service' , function(req , res){
    console.log("Accessed the service");
    res.send('Page service')
})

app.get('/product' , function(req , res){
    console.log("Accessed the product");
    res.send('Page product')
})


app.listen(8080 , function(){
    console.log("Server started on port 3000: Access http://localhost:8080")
});



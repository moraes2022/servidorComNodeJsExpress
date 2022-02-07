const express = require('express');
const app = express();
const port = 8000;

app.get('/' , (req , res)=>{
    res.send('Hello World, Welcome to express serv')
})


app.listen(port , ()=>{
    console.log("Servidor iniciado com sucesso!")
});
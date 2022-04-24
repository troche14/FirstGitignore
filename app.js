const express = require('express');//requiero expres
const app = express();//guardo en app las propiedades y metodos de la propiedades express
const path = require('path');
const PORT = 3000;
//const PORT = require('PORT');
app.use(express.static('images'));


/* routing */
app.get('/home', function(req, res) {
res.sendFile(path.join(__dirname, '/views/home.html'))
})//ruta homepage

app.get('/contact', function(req, res) {
res.sendFile(path.join(__dirname, '/views/contac.html'))
})//contact

app.get('/about', function(req, res) {
res.sendFile(path.join(__dirname, '/views/about.html'))
})//about


app.listen(PORT, function(){ 
console.log(`sevidor escuchando en el puerto ${PORT}
htt://localhost:${PORT}`)
})
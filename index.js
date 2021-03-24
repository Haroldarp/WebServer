var express = require("express");
var bodyParser = require("body-parser")
var app = express();

//middelwares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Variables
var messages = {
    1: "Hola",
    2: "Mundo"
}
var counter = 3;



//EndPoints
app.get('/messages', function(req, res) {
    return res.status(200).send(messages);
});

app.post('/messages', function(req, res) {
    var params = req.body
    messages[counter] = params.message;
    counter = counter + 1;
    return res.status(200).send("Ok");
});

app.put('/messages/:msdId', function(req, res) {
    var params = req.body
    if (messages.hasOwnProperty(req.params.msdId)){
        messages[req.params.msdId] = params.message;
        return res.status(200).send("Ok");
    }else{
        return res.status(404).send("NotFound");
    }
});

app.delete('/messages/:msdId', function(req, res) {
    if (messages.hasOwnProperty(req.params.msdId)){
        delete messages[req.params.msdId]
        return res.status(200).send("Ok");
    }else{
        return res.status(404).send("NotFound");
    }
});



//Listing
app.listen(3700, ()=>{
    console.log("Servidor corriendo en localhost:3700!");
});

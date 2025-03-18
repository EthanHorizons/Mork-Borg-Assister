
var path = require('path');
var express = require('express');

var app = express();
var port = process.env.PORT || 3011;

app.use(express.static(__dirname))

app.get("/selector", function(req,res) {
    res.status(200).sendFile(__dirname + "/CharacterSelector.html")
})

app.get("/creator", function(req,res) {
    res.status(200).sendFile(__dirname + "/CharacterCreator.html")
})

app.get("/game", function(req,res) {
    res.status(200).sendFile(__dirname + "/CharacterGame.html")
})

app.get("*", function (req, res, next) {
    res.status(404).sendFile(__dirname + "/404.html")
  })

app.listen(port, function () {
    console.log("== Server is listening on port", port)
})

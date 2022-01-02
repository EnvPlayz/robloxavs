const express = require("express")


const app = express()

app.get("/", (req,res) => {
    res.sendFile(__dirname+"/index.html")
})

app.get("/verify", (req,res) => {
    res.sendFile(__dirname+"/verify.html")
})

app.get("/verify/done", (req,res) => {
    res.sendFile(__dirname+"/end.html")
})


app.get("/cdn/:file", (req,res) => {
    res.sendFile(__dirname+"/"+req.params.file)
})
app.get("/cdn/assets/:file", (req,res) => {
    res.sendFile(__dirname+"/assets/"+req.params.file)
})
var users = []
var userCount = 0;
app.get("/code/:user", (req,res) => {
    var random = Math.floor(Math.random() * 9999) + 1471
    res.send({code: random,user: req.params.user,acc: userCount})
    users.push({code: random},userCount)
    userCount=userCount+1
})

app.get("/get/:id", (req,res) => {
    res.send({code: users[req.params.id].code})
})

app.listen(3000, () => {
    console.log("STARTED")
})
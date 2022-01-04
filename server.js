const express = require("express")


const app = express()
var port = process.env.PORT || 3000
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
    var random = Math.floor(Math.random() * 9999) + 1000
    res.send({code: random,user: req.params.user,acc: userCount})
    users.push({code: random, user: req.params.user},userCount)
    userCount=userCount+1
})

app.get("/get/:id", (req,res) => {
    res.send({code: users[req.params.id].code, user: users[req.params.id].user})
})

app.listen(port, () => {
    console.log("STARTED")
})

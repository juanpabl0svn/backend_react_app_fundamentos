// import {add_user,connect} from "./database/connection.js"
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/getUser/:infoUser",(req,res)=> {
    let user = JSON.parse(req.params.infoUser)

    res.status(200).send(user)
})


app.listen(3001, ()=> {
    console.log("listening on 3001")
})

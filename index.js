const express = require("express")
require("dotenv").config({ path: "./.env" })
const cors=require("cors")
const mongoose = require("mongoose")
const { addTod, getTodos, updateTodo, deleteTodo } = require("./controller/todoController")
mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json())
app.use(cors())


app.post("/todo/add",addTod)
app.get("/todo",getTodos)
app.put("/todo/:id",updateTodo)
app.delete("/todo/:id",deleteTodo)

mongoose.connection.once("open", () => {
    console.log("DB Connected")
    app.listen(5000, console.log("http://localhost:5000"))
 })
///open is event jevvha event fire zala tevvha open event run hote
///delete many
//find 1

///railway.app
//render.io

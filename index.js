import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";
import { write } from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3000;
let post = [];

//Specifying the static folder
app.use(express.static("public"))

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));

//Middleware
let logger = (req, res, next) => {  
    next()
}
app.use(logger)

//Get route
app.get("/", (req, res)=>{
    res.render("index.ejs")
})

app.post("/submit", (req, res)=>{
    const note = req.body["blog"];
    post.push(note)
    res.render("index.ejs", {"post": post})
})
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})
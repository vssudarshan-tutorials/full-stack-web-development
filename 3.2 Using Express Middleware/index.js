import express from "express";
import path from "path";


const port = 3000
const app = express()

const __dirname = import.meta.dirname

const publicPath  = path.join(__dirname, "public")

/*Middleware */

// return html for "/" get request
app.use(express.static(publicPath))

// process form submission as request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.post("/login", (req, res) => {
    console.log(req.body)

    res.send({status: "OK", details: "Username and Password received", systemCode: 0});
})




app.listen(port, () => {
    console.log("Server started on port 3000")
})
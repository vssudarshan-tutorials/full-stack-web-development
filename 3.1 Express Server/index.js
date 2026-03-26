import express from "express"

const app = express()

const port = 3000

app.use(express.json())

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})


app.get('/', (req, res) => {

    res.send("Hello world")

})



app.get('/contact', (req, res) => {
    res.send("<h1>Contact</h1>")

})


app.get('/about', (req, res) => {
    res.send("<h1>About</h1>")

})

let userData = {};

app.post('/user/', (req, res) => {

    const reqBody = req.body
    if (userData.email || userData.name){
        res.send("User data already exists. Use Put method to replace")
    }

    userData.email = reqBody.email
    userData.name = reqBody.name
    res.send(`Received user data ${userData.name}, ${userData.email}`)
})

app.patch('/user/email/', (req, res) => {

    const reqBody = req.query
    userData.email = reqBody.email

    res.send(`Updated user data ${userData.name}, ${userData.email}`)
})


app.put('/user/', (req, res) => {

    const reqBody = req.body
    if (userData.email || userData.name){
        userData.email = reqBody.email
        userData.name = reqBody.name

         res.send(`Replaced user data ${userData.name}, ${userData.email}`)
    
    }else {
        res.send("Use Post method to create new users")
    }
   
})

app.get('/user/', (req, res) => {

    res.send(`User data ${userData.name}, ${userData.email}`)

})

app.delete('/user/', (req, res) => {

    userData.name= undefined
    userData.email = undefined
    res.send(`User data deleted`)

})
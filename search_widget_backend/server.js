//importing
import express from 'express'
import mongoose from 'mongoose'
import Products from './dbProducts.js'
import cors from 'cors'

//app config
const app = express()
const port = process.env.PORT || 9000

//middleware
app.use(express.json())
app.use(cors())

//DB config
const connection_url = 'mongodb+srv://admin:WP9WjfBnF6vfbeZT@cluster0.yjzoh.mongodb.net/searchdb?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log("DB Connection Error"))

//api routes
app.get("/", (req, res) => res.status(200).send("im ON"))

app.get("/products", (req, res) => {
    Products.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

//listen
app.listen(port, () => console.log(`listening on localhost ${port}`))
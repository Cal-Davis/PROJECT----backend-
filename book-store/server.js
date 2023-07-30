require('dotenv').config()
const PORT = process.env.PORT || 4040

const express = require ('express')
const mongoose = require ('mongoose')
const router = require('./routes/Bookroutes')
const cors = require('cors')
const app  = express()
//MIDDLEWARE


app.use(cors())
app.use(express.json())
app.use('/books' , router)


mongoose.connect("mongodb+srv://Caldee:nelly4lyf@atlascluster.3o96uyy.mongodb.net/?retryWrites=true&w=majority" )
    .then(() => {
    //listen for requests
    app.listen(PORT ,() => {
        console.log('Connecting to db and listening on server', PORT)
})
})
    .catch((err) => {
    console.log(err)
})





require('dotenv').config()
const PORT = process.env.PORT || 4040

const express = require ('express')
const mongoose = require ('mongoose')
const router = require('./routes/Bookroutes')
const corsOptions = require('./config/corsOptions') 
const cors = require('cors')
const app  = express()
//MIDDLEWARE


app.use(cors(corsOptions))
app.use(express.json())
app.use('/books' , router)


mongoose.connect(process.env.MONGO_URI || "mongodb+srv://Caldee:nelly4lyf@atlascluster.3o96uyy.mongodb.net/?retryWrites=true&w=majority" )
    .then(() => {
    //listen for requests
    app.listen(PORT ,() => {
        console.log('Connecting to db and listening on server', PORT)
})
})
    .catch((err) => {
    console.log(err)
})





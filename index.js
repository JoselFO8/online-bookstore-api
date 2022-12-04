require("dotenv").config()
const cors = require("cors")
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const initDB = require('./config/db_mongo.js')

// Initializations
const app = express()

// Settings
const PORT = process.env.PORT || 4000

const whiteList = [
    'http://localhost',
    'https://video-tube-client.vercel.app/'
]

// Midlewaresserver 
app.use(cors({origin: whiteList})) 
app.use(morgan('dev'));
app.use( 
    bodyParser.json({
        limit: '20mb' 
    })
)
app.use( 
    bodyParser.urlencoded({
        limit: '20mb', 
        extended: true
    })
)
app.use(express.json())
app.use("/", require("./app/routes"))

// Test de inicio 
app.get("/", (req, res) => {
    res.send("Test de inicio")
})

// Start the server
app.listen(PORT, () => {
    console.log(`La aplicacion esta corriendo en el puerto ${PORT}`);
})

initDB();

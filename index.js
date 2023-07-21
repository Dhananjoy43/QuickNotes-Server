const connectToMongo = require('./db.js');
const express = require('express')
var cors = require('cors')
require('dotenv').config();


const app = express()
const port = process.env.PORT;

// middlewares
app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

const startBackend = async () => {
    try {
        await connectToMongo();
        // Start the server after connecting to MongoDB successfully
        app.listen(port, () => {
            console.log(`Quick Notes backend listening at http://localhost:${port}`)
        })
    } catch (error) {
        throw new Error("Error starting Quick Notes Backend")
    }
}


startBackend();

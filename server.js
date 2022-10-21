const express = require('express')
const dotenv = require('dotenv')
const bootcampRoutes = require('./routes/bootcampRoutes.js')

const app = express();

dotenv.config({
    path: './config_env/config.env'
})

app.use('/api/v1', bootcampRoutes)

app.listen( process.env.PORT , () => {
    console.log(`The Server listen in port ${process.env.PORT}`);
})
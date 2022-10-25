const express = require('express')
const dotenv = require('dotenv')
const bootcampRoutes = require('./routes/bootcampRoutes.js')
const userRoutes = require('./routes/userRoutes')
const app = express();

dotenv.config({
    path: './config_env/config.env'
})

app.use('/api/v1', bootcampRoutes)
app.use('/api/v1/users', userRoutes)

app.listen( process.env.PORT , () => {
    console.log(`The Server listen in port ${process.env.PORT}`);
})
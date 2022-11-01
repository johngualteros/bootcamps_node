const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({
    path: './config_env/config.env'
})
//define object sequelize of connection
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    '',
    {
        host:process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT
    }
);


module.exports = sequelize
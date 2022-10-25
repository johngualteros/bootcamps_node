const Sequelize = require('sequelize');
//define object sequelize of connection
const sequelize = new Sequelize(
    'devcamps',
    'root',
    '',
    {
        host:'localhost',
        port: '3307',
        dialect: 'mysql'
    }
);


module.exports = sequelize
const sequelize = require('./seq');

const UserModel = require('../models/user')
const {DataTypes} = require('sequelize')

const User = UserModel(sequelize, DataTypes)

const connection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection succesfully\n\n\n');
        // const users = await User.findAll();
        // console.log(users);
        // //create user
        // const john = await User.create({ name: "John", email: "Gualteros@gmail.com", pasword: "123" });
        // console.log("JOHN's auto-generated ID:", john.id);

        // console.log(users);
    } catch (error) {
        console.log("Connection error" + error);
    }
}

connection();
const sequelize = require('../config/seq')
const {DataTypes, ValidationError} = require('sequelize')
const UserModel = require('../models/user')


const User =  UserModel(sequelize, DataTypes);

exports.getAllUsers = async (_req,res)=>{
    try{
        const users = await User.findAll()
        return res.status(200).json({
            "success": true,
            "data": users
            })
    }catch (error){
        return res.status(500).json({
            "success": false,
            "error": error
        })
    }
}
exports.getSingleUser = async (req,res)=>{
    try{
        const userFounded = await User.findByPk(req.params.id)
        return res.status(200).json({
            "success": true,
            "data": userFounded
        })
    }catch (error){
        return res.status(500).json({
            "success": false,
            "error": error
        })
    }
}
exports.createNewUser = async (req, res)=>{
    try{
        body = req.body
        const newUser = await User.create(req.body)
    
        return res.status(201).json({
            "success": true,
            "data": newUser
        })
    }catch(error){
        if( !error instanceof ValidationError){
            return res.status(500).json({
                "success": false,
                "error": error
            })
        }
        return res.status(422).json({
            "success": false,
            "bad-request": error.errors.map((error)=>error.message)
        })
    }
}
exports.updateUser = async(req, res)=>{
    try{
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        const updatedUser = await User.findByPk(req.params.id)
        return res.status(200).json({
            "success": true,
            "data": updatedUser
        })
    } catch(error){
        if( !error instanceof ValidationError){
            return res.status(500).json({
                "success": false,
                "error": error
            })
        }
        return res.status(422).json({
            "success": false,
            "bad-request": error.errors.map((error)=>error.message)
        })
    }
}
exports.deleteUser = async(req, res)=>{
    try{
        const userFounded = await User.findByPk(req.params.id)
        await User.destroy({
            where: {
                id: req.params.id
            }
        })
        return res.status(202).json({
             "success": true,
             "data": userFounded
        })
    }catch(error){
        return res.status(500).json({
            "success": false,
            "error": error
        })
    }
}
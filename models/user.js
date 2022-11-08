'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isAlpha: true,
        notEmpty: true,
        notNull: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isEmail: true,
        notEmpty: true,
        notNull: true,
      }
    },
    pasword: {
      type: DataTypes.STRING,
      validate:{
        len:{
          args: [8, 10],
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};
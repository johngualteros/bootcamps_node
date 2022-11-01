'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    weeks: DataTypes.INTEGER,
    enroll_cost: DataTypes.REAL,
    minimum_skill: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
    timestamps: false
  });
  return Course;
};

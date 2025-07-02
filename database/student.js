const db = require("./db");
const { DataTypes } = require("sequelize");

const Student = db.define('student',
  {
    user_id:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true}
    },
    lastName:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {notEmpty: true }
    },
    imageURL:
    {
      type: DataTypes.STRING,
      defaultValue: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
      allowNull: true
    },
    email: 
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {notEmpty: true}
    },
    gpa:
    {
      type: DataTypes.FLOAT(0.0),
      allowNull: false,
    } 
  } 
)

module.exports = Student;
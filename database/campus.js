const db = require("./db");
const { DataTypes } = require("sequelize");

const Campus = db.define('Campus',
  {
    name:
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageURL:
    {
      type: DataTypes.STRING,
      defaultValue: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
      allowNull: true
    },
    address:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    description:
    {
      type: DataTypes.TEXT,
      allowNull: true 
    }
  }
)

module.exports = Campus;